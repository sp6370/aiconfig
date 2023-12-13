# Define a Model Parser for LLama-Guard

from typing import TYPE_CHECKING, Any, Dict, List, Optional

from aiconfig.default_parsers.parameterized_model_parser import ParameterizedModelParser
from aiconfig.model_parser import InferenceOptions
from aiconfig.schema import ExecuteResult, Output, Prompt, PromptMetadata
from aiconfig.util.params import resolve_prompt
from aiconfig import CallbackEvent, get_api_key_from_environment

import google.generativeai as genai
from google.generativeai.types import AsyncGenerateContentResponse
from google.ai.generativelanguage_v1beta.types.generative_service import Candidate

# Circuluar Dependency Type Hints
if TYPE_CHECKING:
    from aiconfig.Config import AIConfigRuntime


def construct_regular_outputs(response: AsyncGenerateContentResponse) -> list[Output]:
    """
    Construct regular output per response result, without streaming enabled
    """
    output_list = []
    for i, candidate in enumerate(response.candidates):
        print(candidate.content.parts)
        output = ExecuteResult(
            **{
                "output_type": "execute_result",
                "data": candidate,
                "execution_count": i,
                "metadata": response.prompt_feedback.__dict__,
            }
        )

        output_list.append(output)

    return output_list


async def construct_stream_outputs(response: AsyncGenerateContentResponse, options: InferenceOptions) -> list[Output]:
    """
    Construct Outputs while also streaming the response with stream callback

    Gemini api seems to not support more than one candidate, so we'll just use the first one
    """
    output_list = []

    acc = ""

    async for chunk in response:
        # deconstruct chunk
        print(chunk.parts[0].text, end="")

        data = chunk.parts[0].text
        acc += data
        options.stream_callback(data, acc, 0)

    output = ExecuteResult(
        **{
            "output_type": "execute_result",
            "data": response.text,
            "execution_count": 0,  # Hard coded for now. If api supports multiple candidates this can be updated.
            "metadata": response.prompt_feedback.__dict__,
        }
    )

    output_list.append(output)

    return output_list


# This model parser doesn't support streaming.
class GeminiModelParser(ParameterizedModelParser):
    def __init__(self, id: str = "gemini-pro"):
        super().__init__()
        self.model = genai.GenerativeModel(id)

    def id(self) -> str:
        """
        Returns an identifier for the model (e.g. llama-2, gpt-4, etc.).
        """
        return "GeminiModelParser"

    async def serialize(
        self,
        prompt_name: str,
        data: Dict,
        ai_config: "AIConfigRuntime",
        parameters: Optional[Dict],
        **kwargs,
    ) -> List[Prompt]:
        """
        Defines how a prompt and model inference settings get serialized in the .aiconfig.

        Args:
            prompt (str): The prompt to be serialized.
            inference_settings (dict): Model-specific inference settings to be serialized.

        Returns:
            str: Serialized representation of the prompt and inference settings.
        """

        event = CallbackEvent(
            "on_serialize_start",
            __name__,
            {
                "prompt_name": prompt_name,
                "data": data,
                "parameters": parameters,
                "kwargs": kwargs,
            },
        )
        await ai_config.callback_manager.run_callbacks(event)

        prompt_template = data.get("prompt", "")
        data.pop("prompt", None)

        model_metadata = ai_config.get_model_metadata(data, self.id())
        prompts = [
            Prompt(
                name=prompt_name,
                input=prompt_template,
                metadata=PromptMetadata(
                    model=model_metadata,
                    parameters=parameters,
                    **kwargs,
                ),
            )
        ]

        event = CallbackEvent("on_serialize_complete", __name__, {"result": prompts})
        await ai_config.callback_manager.run_callbacks(event)

    async def deserialize(self, prompt: Prompt, aiconfig: "AIConfigRuntime", params: Optional[Dict] = {}) -> Dict:
        """
        Defines how to parse a prompt in the .aiconfig for a particular model
        and constructs the completion params for that model.

        Args:
            serialized_data (str): Serialized data from the .aiconfig.

        Returns:
            dict: Model-specific completion parameters.
        """
        await aiconfig.callback_manager.run_callbacks(CallbackEvent("on_deserialize_start", __name__, {"prompt": prompt, "params": params}))
        resolved_prompt = resolve_prompt(prompt, params, aiconfig)

        # Build Completion data
        model_settings = self.get_model_settings(prompt, aiconfig)

        completion_data = refine_chat_completion_params(model_settings)

        # Add in prompt
        completion_data["contents"] = [resolved_prompt]

        await aiconfig.callback_manager.run_callbacks(CallbackEvent("on_deserialize_complete", __name__, {"output": completion_data}))
        return completion_data

    async def run_inference(
        self,
        prompt: Prompt,
        aiconfig: "AIConfigRuntime",
        options: InferenceOptions,
        parameters,
    ) -> list[Output]:
        """
        Invoked to run a prompt in the .aiconfig. This method should perform
        the actual model inference based on the provided prompt and inference settings.

        Args:
            prompt (str): The input prompt.
            inference_settings (dict): Model-specific inference settings.

        Returns:
            ExecuteResult: The response from the model.
        """
        await aiconfig.callback_manager.run_callbacks(
            CallbackEvent(
                "on_run_start",
                __name__,
                {"prompt": prompt, "options": options, "parameters": parameters},
            )
        )

        # Auth check. don't need to explicitly set the key as long as this is set as an env var. genai.configure() will pick it up
        get_api_key_from_environment("GOOGLE_API_KEY")
        genai.configure()

        # TODO: check and handle api key here
        completion_data = await self.deserialize(prompt, aiconfig, parameters)

        stream = True  # Default value
        if options is not None and options.stream is not None:
            stream = options.stream
        elif "stream" in completion_data:
            stream = completion_data["stream"]
        completion_data["stream"] = stream

        response = await self.model.generate_content_async(**completion_data)

        outputs = None
        if stream:
            outputs = await construct_stream_outputs(response, options)
        else:
            outputs = construct_regular_outputs(response)

        prompt.outputs = outputs
        await aiconfig.callback_manager.run_callbacks(CallbackEvent("on_run_complete", __name__, {"result": prompt.outputs}))
        return prompt.outputs

    def get_output_text(
        self,
        prompt: Prompt,
        aiconfig: "AIConfigRuntime",
        output: Optional[Output] = None,
    ) -> str:
        if not output:
            output = aiconfig.get_latest_output(prompt)

        if not output:
            return ""

        if output.output_type == "execute_result":
            output_data = output.data
            if type(output_data) == str:
                return output_data
            elif type(output_data) == Candidate:
                return output_data.content.parts[0].text

        else:
            return ""


def refine_chat_completion_params(model_settings):
    # completion parameters to be used for Palm's chat completion api
    # messages handled seperately
    supported_keys = {
        "contents",
        "generation_config",
        "safety_settings",
        "stream",
    }
    completion_data = {}
    for key in model_settings:
        if key.lower() in supported_keys:
            completion_data[key.lower()] = model_settings[key]

    return completion_data


from aiconfig import AIConfigRuntime

AIConfigRuntime.register_model_parser(GeminiModelParser("gemini-pro"), "gemini-pro")
