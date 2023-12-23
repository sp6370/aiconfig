# Editor

## Usage (prod)

### Install:

Install python-aiconfig from pip, then set `aiconfig` alias (in shell, .bashrc, .zshrc, etc.)

One-liner:
`pip install python-aiconfig; alias aiconfig="python -m 'aiconfig.scripts.aiconfig_cli'"`

### Run

`aiconfig edit  --aiconfig-path=/my/path'`

```
[INFO] 2023-12-18 23:54:14,379 server.py:32: Edit config: {
  "server_port": 8080,
  "aiconfig_path": "/my/path"
}
[INFO] 2023-12-18 23:54:14,379 server.py:33: Editor server running on http://localhost:8080
```

Go to url in browser to use app.

### Loading model parsers

To use a model parser that doesn't ship with aiconfig: 0. Make sure your model parser package is installed, e.g.
`pip install python-aiconfig-llama`, or
`pip install -e path/to/my/local/parser/package`

1. Make a Python file e.g. my_editor_plugin.py. It must define a () -> None called `register_model_parsers.
   Example:

```
from aiconfig import AIConfigRuntime
from llama import LlamaModelParser


def register_model_parsers() -> None:
    model_path = "/Users/jonathan/Projects/aiconfig/models/llama-2-7b-chat.Q4_K_M.gguf"
    llama_model_parser = LlamaModelParser(model_path)
    AIConfigRuntime.register_model_parser(llama_model_parser, "llama-2-7b-chat")
```

2. Run aiconfig edit server with `--parsers-module-path="/path/to/my_editor_plugin.py"`

e.g. `aiconfig edit --parsers-module-path="/path/to/my_editor_plugin.py"`

3. Use editor as usual.

## Dev

### Install:

`pip install -e path/to/local/aiconfig/python`
`alias aiconfig="python -m 'aiconfig.scripts.aiconfig_cli'"``

### Run backend and frontend servers:

(debug mode will run the react server)
`aiconfig edit  --aiconfig-path=/my/path --server-port=8080 --server-mode=debug_servers`

More info:
`aiconfig --help`
`aiconfig edit --help`

### Frontent

Use React server localhost:3000

### Backend

Tip: use `--server-mode=debug_backend`
Server will hot reload when you save file. Recommend disabling autosave.

Send POST requests from

- curl (https://stackoverflow.com/questions/22947905/flask-example-with-post)
- Chrome dev tools (https://stackoverflow.com/questions/14248296/making-http-requests-using-chrome-developer-tools)
- Jupyter:

```
import requests
url = 'http://localhost:8080/api/add_prompt'
data = {
        "prompt_name": "gen_packing_list",
        "prompt_data": {

        }
    }
response = requests.post(url, json=data)
print(f"{response=}"),

import json
response_json = json.loads(response.text)
message, output = response_json['message'], response_json['output']
print(f"{message=}")
print("output:")
print(output)
```