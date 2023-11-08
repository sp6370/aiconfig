"use strict";(self.webpackChunkaiconfig_docs=self.webpackChunkaiconfig_docs||[]).push([[4971],{6526:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var i=o(5893),t=o(1151),a=o(4866),r=o(5162),s=o(4883);const l={sidebar_position:1},c="What is AIConfig",d={id:"introduction/basics",title:"What is AIConfig",description:"AIConfig is a source-control friendly way to manage your prompts, models and model parameters as configs. It allows you to store and iterate on generative AI model behavior separately from your application code.",source:"@site/docs/introduction/basics.md",sourceDirName:"introduction",slug:"/introduction/basics",permalink:"/aiconfig/docs/introduction/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/lastmile-ai/aiconfig/aiconfig-docs/docs/introduction/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Introduction",permalink:"/aiconfig/docs/category/introduction"},next:{title:"Getting Started",permalink:"/aiconfig/docs/introduction/getting-started"}},u={},h=[{value:"Prompts as configs",id:"prompts-as-configs",level:2},{value:"Example",id:"example",level:2},{value:"<code>aiconfig</code> file format",id:"aiconfig-file-format",level:3},{value:"Using with AIConfig SDK",id:"using-with-aiconfig-sdk",level:3},{value:"AI Workbook playground",id:"ai-workbook-playground",level:3},{value:"Improved AI Governance",id:"improved-ai-governance",level:2},{value:"Parallels to Jupyter",id:"parallels-to-jupyter",level:2},{value:"Extensibility",id:"extensibility",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"what-is-aiconfig",children:"What is AIConfig"}),"\n",(0,i.jsxs)(n.p,{children:["AIConfig is a source-control friendly way to manage your prompts, models and model parameters as configs. It allows you to store and iterate on generative AI model behavior ",(0,i.jsx)(n.em,{children:"separately from your application code"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"AIConfig has 3 foundations:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsxs)(n.a,{href:"/docs/overview/ai-config-format",children:[(0,i.jsx)(n.code,{children:"aiconfig"})," file format"]})}),": a standardized JSON format to store generative AI model settings, prompt inputs and outputs, and flexible multi-purpose metadata."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/docs/introduction/getting-started",children:"AIConfig SDK"})}),": Python and Node SDKs to use ",(0,i.jsx)(n.code,{children:"aiconfig"})," in your application code, and extension points to customize behavior."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://lastmileai.dev/workbooks/clm7b9yez00mdqw70majklrmx",children:"AI Workbook editor"})}),": A notebook-like playground to edit ",(0,i.jsx)(n.code,{children:"aiconfig"})," files visually, run prompts, tweak models and model settings, and chain things together."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["AIConfig is ",(0,i.jsx)(n.strong,{children:"multi-modal"})," and ",(0,i.jsx)(n.strong,{children:"model-agnostic"}),". This enables powerful interop between different models and modalities, including chaining them together (see ",(0,i.jsx)(n.a,{href:"/docs/overview/parameters-and-chaining",children:"prompt chaining"}),"). For example, a Whisper (speech-to-text) prompt can be connected to a GPT4-V prompt (image+text-to-text) to build complex AI applications, all backed by the same ",(0,i.jsx)(n.code,{children:"aiconfig"})," serialization format."]}),"\n",(0,i.jsx)(n.h2,{id:"prompts-as-configs",children:"Prompts as configs"}),"\n",(0,i.jsxs)(n.p,{children:["Unlike traditional ",(0,i.jsx)(n.em,{children:"predictive"})," ML development undertaken largely by ML researchers, generative AI applications are being developed collaboratively by software engineers."]}),"\n",(0,i.jsx)(n.p,{children:"Separating prompt management from application development leads to a few powerful consequences:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Separation of concerns"}),": You can iterate on prompts and models separately from application code -- and different people could be responsible for them, making the overall development more collaborative."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Notebook editor for prompts"}),": Having prompts and models in one place allows a notebook-like editor environment to iterate on the aiconfig. This greatly increases the velocity of prototyping and iteration."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Governance"}),": As a source-controlled artifact, ",(0,i.jsx)(n.code,{children:"aiconfig"})," can be used for reproducability and provenance of the generative AI bits of your application."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/introduction/getting-started",children:"Getting Started"})," guide for a more detailed overview, and spend time getting familiar with the ",(0,i.jsxs)(n.a,{href:"/docs/overview/ai-config-format",children:[(0,i.jsx)(n.code,{children:"aiconfig"})," file format"]}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Suppose we have the following prompts to help us plan a trip to New York. As you'll see, using this ",(0,i.jsx)(n.code,{children:"aiconfig"})," in application code is trivial. The application no longer needs to know ",(0,i.jsx)(n.em,{children:"how"})," to invoke different models -- it simply uses ",(0,i.jsx)(n.code,{children:"config.run(prompt_name)"})," to do so. There's a lot you can do with AIConfig, which we'll get into in later guides."]}),"\n",(0,i.jsxs)(n.h3,{id:"aiconfig-file-format",children:[(0,i.jsx)(n.code,{children:"aiconfig"})," file format"]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsxs)("summary",{children:[(0,i.jsx)(n.code,{children:"travel.aiconfig.json"})," - Use GPT-3.5 to plan a trip to New York"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Planning a trip to New York",\n  "description": "Exploring NYC through ChatGPT and AIConfig",\n  "schema_version": "latest",\n  "metadata": {\n    "models": {\n      "gpt-3.5-turbo": {\n        "model": "gpt-3.5-turbo",\n        "top_p": 1,\n        "temperature": 1\n      }\n    }\n  },\n  "prompts": [\n    {\n      "name": "get_activities",\n      "input": "Tell me 10 fun attractions to do in NYC."\n      "metadata": {\n        "model": "gpt-3.5-turbo",\n      }\n    }  \n  ]\n}\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"using-with-aiconfig-sdk",children:"Using with AIConfig SDK"}),"\n",(0,i.jsxs)(n.p,{children:["Creating an application with this ",(0,i.jsx)(n.code,{children:"aiconfig"})," is trivial. The application no longer needs to know ",(0,i.jsx)(n.em,{children:"how"})," to invoke different models, how to handle streaming, etc. -- it simply uses ",(0,i.jsx)(n.code,{children:"config.run(prompt_name)"})," and the AIConfig SDK does the rest."]}),"\n",(0,i.jsxs)(a.Z,{groupId:"aiconfig-language",queryString:!0,defaultValue:s.Z.defaultAIConfigLanguage,values:s.Z.aiConfigLanguages,children:[(0,i.jsxs)(r.Z,{value:"node",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ yarn add aiconfig\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ set OPENAI_API_KEY=sk_xxxx\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",metastring:'title="app.ts"',children:'import * as path from "path";\nimport { AIConfigRuntime, InferenceOptions } from "aiconfig";\n\nasync function travelWithGPT() {\n  // Load the aiconfig. You can also use AIConfigRuntime.loadJSON({})\n  const aiConfig = AIConfigRuntime.load(\n    path.join(__dirname, "travel.aiconfig.json")\n  );\n\n  // Run a single prompt\n  await aiConfig.run("get_activities", /*params*/ undefined, options);\n\n  // Save the AIConfig to disk, and serialize outputs from the model run\n  aiConfig.save(\n    "updated.aiconfig.json",\n    /*saveOptions*/ { serializeOutputs: true }\n  );\n}\n'})})]}),(0,i.jsxs)(r.Z,{value:"python",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pip install python-aiconfig\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ set OPENAI_API_KEY=sk_xxxx\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="app.py"',children:"from aiconfig import AIConfigRuntime, InferenceOptions\n\n# Load the aiconfig. You can also use AIConfigRuntime.loadJSON({})\nconfig = AIConfigRuntime.load('travel.aiconfig.json')\n\n# Run a single prompt (with streaming)\ninference_options = InferenceOptions(stream=True)\nawait config.run(\"get_activities\", params=None, inference_options)\n\n# Save the aiconfig to disk. and serialize outputs from the model run\nconfig.save('updated.aiconfig.json', include_output=True)\n"})})]})]}),"\n",(0,i.jsx)(n.h3,{id:"ai-workbook-playground",children:"AI Workbook playground"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have an ",(0,i.jsx)(n.code,{children:"aiconfig"})," file artifact that encapsulates the generative AI part of our application, we can iterate on it using a notebook editor. The application code doesn't need to change even as the ",(0,i.jsx)(n.code,{children:"aiconfig"})," is updated."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["We are currently working on a local editor that you can run yourself. For now, please use the hosted version on ",(0,i.jsx)(n.a,{href:"https://lastmileai.dev",children:"https://lastmileai.dev"}),"."]})}),"\n",(0,i.jsx)("video",{controls:!0,children:(0,i.jsx)("source",{src:"https://s3.amazonaws.com/publicdata.lastmileai.com/workbook_editor_480.mov"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Try out this workbook yourself here: ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://lastmileai.dev/workbooks/clooqs3p200kkpe53u6n2rhr9",children:"NYC Travel Workbook"})})]})}),"\n",(0,i.jsx)(n.h2,{id:"improved-ai-governance",children:"Improved AI Governance"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"aiconfig"})," helps you track the ",(0,i.jsx)(n.em,{children:"signature"})," of generative AI model behavior:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"prompts"})," and prompt chains that constitute the input (can be text, image or any modality)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"model"})," to run inference (can be any model from any model provider)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"model parameters"})," to tune the model behavior"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"outputs"})," cached from previous inference runs, which can be serialized optionally."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Having a dedicated source-controlled artifact for generative AI helps with reproducibility, evaluation and rapid iteration. You can iterate on this artifact, evaluate it and integrate it into the rest of your application development workflow."}),"\n",(0,i.jsx)(n.h2,{id:"parallels-to-jupyter",children:"Parallels to Jupyter"}),"\n",(0,i.jsxs)(n.p,{children:["As you go through AIConfig, you may notice similarities to ",(0,i.jsx)(n.a,{href:"https://jupyter-notebook.readthedocs.io/",children:"Jupyter"})," notebooks and its storage format, ",(0,i.jsx)(n.a,{href:"https://ipython.org/ipython-doc/3/notebook/nbformat.html",children:(0,i.jsx)(n.code,{children:"ipynb"})}),". This is by design."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:(0,i.jsxs)(n.strong,{children:["AI Workbooks are to AIConfig what Jupyter notebooks are to ",(0,i.jsx)(n.code,{children:"ipynb"})]})})}),"\n",(0,i.jsx)(n.p,{children:"We believe that notebooks are a perfect iteration environment for generative AI -- they are flexible, multi-modal, and collaborative."}),"\n",(0,i.jsxs)(n.p,{children:["The multi-modality and flexibility offered by notebooks and ",(0,i.jsx)(n.code,{children:"ipynb"})," offers a good interaction model for generative AI. The ",(0,i.jsx)(n.code,{children:"aiconfig"})," file format is extensible like ",(0,i.jsx)(n.code,{children:"ipynb"}),", and AI Workbook editor allows rapid iteration in a notebook-like IDE."]}),"\n",(0,i.jsx)(n.p,{children:"There are 2 areas where we are going beyond what notebooks offer:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aiconfig"})," is more ",(0,i.jsx)(n.strong,{children:"source-control friendly"})," than ",(0,i.jsx)(n.code,{children:"ipynb"}),". ",(0,i.jsx)(n.code,{children:"ipynb"})," stores binary data (images, etc.) by encoding it in the file, while ",(0,i.jsx)(n.code,{children:"aiconfig"})," recommends using file URI references instead."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"aiconfig"})," can be imported and ",(0,i.jsx)(n.strong,{children:"connected to application code"})," using the AIConfig SDK."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"extensibility",children:"Extensibility"}),"\n",(0,i.jsx)(n.p,{children:"AIConfig is meant to be fully customizable and extensible for your use-cases. The specific parts that you can customize include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Model Parsers"}),": these parsers are responsible for deciding how to run inference, what data to store in the ",(0,i.jsx)(n.code,{children:"aiconfig"}),", and how. You can add model parsers for any model of any input/output modality, and from any provider (including a model running on your local machine)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Callbacks"}),": callback handlers allow you to hook up ",(0,i.jsx)(n.code,{children:"aiconfig"})," runs to monitoring and observability endpoints of your choosing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Evaluation"}),(0,i.jsx)("div",{className:"label basic coming-soon",children:"Coming Soon"}),": define custom evaluators and run batch evaluation to measure the performance of your ",(0,i.jsx)(n.code,{children:"aiconfig"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Routing"}),(0,i.jsx)("div",{className:"label basic coming-soon",children:"Coming Soon"}),": define custom routers over a series of ",(0,i.jsx)(n.code,{children:"aiconfig"}),"s to intelligently route incoming requests over prompts and models (i.e. prompt routing and model routing)."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"/docs/category/customization--extensibility",children:"Customization & Extensibility"})," to learn more about AIConfig extensibility"]})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},4883:(e,n,o)=>{o.d(n,{Z:()=>r});var i=o(412);const t=!!i.Z.canUseDOM&&navigator.platform.startsWith("Mac"),a=!!i.Z.canUseDOM&&navigator.platform.startsWith("Win"),r={defaultOs:t?"macos":a?"windows":"linux",defaultNodePackageManager:"npm",defaultPythonPackageManager:"pip",defaultPlatform:t?"ios":"android",defaultSyntax:"functional",defaultAIConfigLanguage:"python",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],nodePackageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],pythonPackageManagers:[{label:"pip",value:"pip"},{label:"poetry",value:"poetry"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],aiConfigLanguages:[{label:"Node.js (TypeScript)",value:"node"},{label:"Python",value:"python"}]}},5162:(e,n,o)=>{o.d(n,{Z:()=>r});o(7294);var i=o(6010);const t={tabItem:"tabItem_Ymn6"};var a=o(5893);function r(e){let{children:n,hidden:o,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,r),hidden:o,children:n})}},4866:(e,n,o)=>{o.d(n,{Z:()=>w});var i=o(7294),t=o(6010),a=o(2466),r=o(6550),s=o(469),l=o(1980),c=o(7392),d=o(12);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:i,default:t}}=e;return{value:n,label:o,attributes:i,default:t}}))}(o);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function p(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:o}=e;const t=(0,r.k6)(),a=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,l._X)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function g(e){const{defaultValue:n,queryString:o=!1,groupId:t}=e,a=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=o.find((e=>e.default))??o[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=f({queryString:o,groupId:t}),[g,m]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Nk)(o);return[t,(0,i.useCallback)((e=>{o&&a.set(e)}),[o,a])]}({groupId:t}),x=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,s.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var m=o(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=o(5893);function v(e){let{className:n,block:o,selectedValue:i,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,o=l.indexOf(n),t=s[o].value;t!==i&&(c(n),r(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;n=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;n=l[o]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":o},n),children:s.map((e=>{let{value:n,label:o,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===n}),children:o??n},n)}))})}function j(e){let{lazy:n,children:o,selectedValue:t}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>r});var i=o(7294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);