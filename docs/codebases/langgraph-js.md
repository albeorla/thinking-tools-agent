Directory structure:
└── langchain-ai-langgraphjs/
├── docs/
│ ├── typedoc.json
│ ├── docs/
│ │ ├── troubleshooting/
│ │ │ └── errors/
│ │ │ └── index.md
│ │ ├── versions/
│ │ │ ├── index.md
│ │ │ └── .meta.yml
│ │ ├── tutorials/
│ │ │ ├── multi_agent/
│ │ │ │ └── img/
│ │ │ ├── rewoo/
│ │ │ │ └── img/
│ │ │ ├── chatbots/
│ │ │ │ └── img/
│ │ │ ├── chatbot-simulation-evaluation/
│ │ │ │ └── img/
│ │ │ ├── index.md
│ │ │ ├── .meta.yml
│ │ │ └── reflection/
│ │ │ └── img/
│ │ ├── concepts/
│ │ │ ├── human_in_the_loop.md
│ │ │ ├── breakpoints.md
│ │ │ ├── high_level.md
│ │ │ ├── agentic_concepts.md
│ │ │ ├── langgraph_platform.md
│ │ │ ├── plans.md
│ │ │ ├── time-travel.md
│ │ │ ├── deployment_options.md
│ │ │ ├── langgraph_studio.md
│ │ │ ├── double_texting.md
│ │ │ ├── langgraph_cli.md
│ │ │ ├── assistants.md
│ │ │ ├── v0-human-in-the-loop.md
│ │ │ ├── faq.md
│ │ │ ├── memory.md
│ │ │ ├── langgraph_server.md
│ │ │ ├── index.md
│ │ │ ├── .meta.yml
│ │ │ ├── img/
│ │ │ │ ├── multi_agent/
│ │ │ │ ├── streaming/
│ │ │ │ ├── persistence/
│ │ │ │ ├── human_in_the_loop/
│ │ │ │ └── memory/
│ │ │ ├── template_applications.md
│ │ │ ├── persistence.md
│ │ │ ├── streaming.md
│ │ │ ├── langgraph_cloud.md
│ │ │ ├── self_hosted.md
│ │ │ ├── sdk.md
│ │ │ ├── low_level.md
│ │ │ ├── multi_agent.md
│ │ │ ├── application_structure.md
│ │ │ └── bring_your_own_cloud.md
│ │ ├── index.md
│ │ ├── css/
│ │ │ └── mkdocstrings.css
│ │ ├── how-tos/
│ │ │ ├── deploy-self-hosted.md
│ │ │ ├── agent_executor/
│ │ │ │ └── img/
│ │ │ ├── index.md
│ │ │ ├── .meta.yml
│ │ │ ├── img/
│ │ │ └── use-remote-graph.md
│ │ └── static/
│ ├── .gitignore
│ ├── docs-requirements.txt
│ ├── Makefile
│ ├── overrides/
│ │ ├── main.html
│ │ └── partials/
│ │ └── logo.html
│ ├── .nojekyll
│ ├── mkdocs.yml
│ └── \_scripts/
│ ├── notebook_convert.py
│ ├── notebook_convert_templates/
│ │ └── mdoutput/
│ │ ├── conf.json
│ │ └── index.md.j2
│ ├── notebook_hooks.py
│ └── copy_notebooks.py
├── environment_tests/
│ ├── test-exports-esbuild/
│ │ ├── .gitignore
│ │ ├── package.json
│ │ ├── entrypoint.sh
│ │ ├── tsconfig.json
│ │ └── src/
│ │ ├── import.cjs
│ │ ├── entrypoints.js
│ │ ├── require.cjs
│ │ └── typescript.ts
│ ├── scripts/
│ │ └── docker-ci-entrypoint.sh
│ ├── test-exports-vite/
│ │ ├── index.html
│ │ ├── .gitignore
│ │ ├── public/
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── src/
│ │ ├── chain.ts
│ │ ├── entrypoints.js
│ │ ├── style.css
│ │ ├── main.ts
│ │ └── vite-env.d.ts
│ ├── test-exports-tsc/
│ │ ├── package.json
│ │ └── main.ts
│ ├── test-exports-cjs/
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── src/
│ │ ├── require.js
│ │ ├── import.js
│ │ ├── entrypoints.js
│ │ ├── index.mjs
│ │ └── index.ts
│ ├── test-exports-cf/
│ │ ├── .gitignore
│ │ ├── package.json
│ │ ├── wrangler.toml
│ │ ├── tsconfig.json
│ │ ├── README.md
│ │ └── src/
│ │ ├── index.int.test.ts
│ │ ├── entrypoints.js
│ │ ├── index.ts
│ │ └── index.unit.test.ts
│ ├── test-exports-vercel/
│ │ ├── .gitignore
│ │ ├── .eslintrc.json
│ │ ├── public/
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ ├── README.md
│ │ └── src/
│ │ ├── styles/
│ │ │ ├── globals.css
│ │ │ └── Home.module.css
│ │ ├── entrypoints.js
│ │ └── pages/
│ │ ├── api/
│ │ │ ├── hello-serverless.ts
│ │ │ └── hello-edge.ts
│ │ ├── \_app.tsx
│ │ ├── \_document.tsx
│ │ └── index.tsx
│ ├── test-exports-esm/
│ │ ├── package.json
│ │ ├── tsconfig.json
│ │ └── src/
│ │ ├── import.cjs
│ │ ├── entrypoints.js
│ │ ├── index.ts
│ │ └── require.cjs
│ └── docker-compose.yml
├── scripts/
│ ├── validate_deps_sync.ts
│ └── release_workspace.cjs
├── .github/
│ ├── workflows/
│ │ ├── test-exports.yml
│ │ ├── ci.yml
│ │ └── deploy_docs.yml
│ └── pull_request_template.md
├── .yarnrc.yml
├── int-test-deps-docker-compose.yml
├── package.json
├── libs/
│ ├── checkpoint-postgres/
│ │ ├── .env.example
│ │ ├── jest.env.cjs
│ │ ├── jest.config.cjs
│ │ ├── .prettierrc
│ │ ├── .gitignore
│ │ ├── package.json
│ │ ├── tsconfig.cjs.json
│ │ ├── .release-it.json
│ │ ├── turbo.json
│ │ ├── LICENSE
│ │ ├── tsconfig.json
│ │ ├── .eslintrc.cjs
│ │ ├── README.md
│ │ ├── docker-compose.yml
│ │ ├── langchain.config.js
│ │ └── src/
│ │ ├── sql.ts
│ │ ├── tests/
│ │ │ └── checkpoints.int.test.ts
│ │ ├── migrations.ts
│ │ └── index.ts
│ ├── checkpoint-mongodb/
│ │ ├── .env.example
│ │ ├── jest.env.cjs
│ │ ├── jest.config.cjs
│ │ ├── .prettierrc
│ │ ├── .gitignore
│ │ ├── package.json
│ │ ├── tsconfig.cjs.json
│ │ ├── .release-it.json
│ │ ├── turbo.json
│ │ ├── LICENSE
│ │ ├── tsconfig.json
│ │ ├── .eslintrc.cjs
│ │ ├── README.md
│ │ ├── langchain.config.js
│ │ └── src/
│ │ ├── tests/
│ │ │ └── checkpoints.int.test.ts
│ │ └── index.ts
│ ├── checkpoint-sqlite/
│ │ ├── .env.example
│ │ ├── jest.env.cjs
│ │ ├── jest.config.cjs
│ │ ├── .prettierrc
│ │ ├── .gitignore
│ │ ├── package.json
│ │ ├── tsconfig.cjs.json
│ │ ├── .release-it.json
│ │ ├── turbo.json
│ │ ├── LICENSE
│ │ ├── tsconfig.json
│ │ ├── .eslintrc.cjs
│ │ ├── README.md
│ │ ├── langchain.config.js
│ │ └── src/
│ │ ├── tests/
│ │ │ └── checkpoints.test.ts
│ │ └── index.ts
│ ├── langgraph/
│ │ ├── .env.example
│ │ ├── jest.env.cjs
│ │ ├── jest.config.cjs
│ │ ├── .prettierrc
│ │ ├── scripts/
│ │ │ └── jest-setup-after-env.js
│ │ ├── .gitignore
│ │ ├── package.json
│ │ ├── tsconfig.cjs.json
│ │ ├── .release-it.json
│ │ ├── turbo.json
│ │ ├── LICENSE
│ │ ├── tsconfig.json
│ │ ├── .eslintrc.cjs
│ │ ├── README.md
│ │ ├── langchain.config.js
│ │ └── src/
│ │ ├── managed/
│ │ │ ├── base.ts
│ │ │ ├── is_last_step.ts
│ │ │ ├── shared_value.ts
│ │ │ └── index.ts
│ │ ├── tests/
│ │ │ ├── pregel.test.ts
│ │ │ ├── chatbot.int.test.ts
│ │ │ ├── remote.int.test.ts
│ │ │ ├── pregel.slow_checkpointer.int.test.ts
│ │ │ ├── pregel.postgres_saver.int.test.ts
│ │ │ ├── channels.test.ts
│ │ │ ├── pregel.io.test.ts
│ │ │ ├── prebuilt.test.ts
│ │ │ ├── tracing.test.ts
│ │ │ ├── data/
│ │ │ ├── remote.test.ts
│ │ │ ├── graph.test.ts
│ │ │ ├── errors.test.ts
│ │ │ ├── utils.ts
│ │ │ ├── pregel.read.test.ts
│ │ │ ├── diagrams.test.ts
│ │ │ ├── prebuilt.int.test.ts
│ │ │ ├── tracing.int.test.ts
│ │ │ └── pregel.validate.test.ts
│ │ ├── prebuilt/
│ │ │ ├── react_agent_executor.ts
│ │ │ ├── tool_executor.ts
│ │ │ ├── chat_agent_executor.ts
│ │ │ ├── tool_node.ts
│ │ │ ├── index.ts
│ │ │ └── agent_executor.ts
│ │ ├── interrupt.ts
│ │ ├── channels/
│ │ │ ├── last_value.ts
│ │ │ ├── named_barrier_value.ts
│ │ │ ├── base.ts
│ │ │ ├── binop.ts
│ │ │ ├── topic.ts
│ │ │ ├── ephemeral_value.ts
│ │ │ ├── any_value.ts
│ │ │ ├── index.ts
│ │ │ └── dynamic_barrier_value.ts
│ │ ├── graph/
│ │ │ ├── annotation.ts
│ │ │ ├── state.ts
│ │ │ ├── message.ts
│ │ │ ├── messages_annotation.ts
│ │ │ ├── index.ts
│ │ │ └── graph.ts
│ │ ├── constants.ts
│ │ ├── remote.ts
│ │ ├── utils.ts
│ │ ├── setup/
│ │ │ └── async_local_storage.ts
│ │ ├── index.ts
│ │ ├── errors.ts
│ │ ├── web.ts
│ │ └── pregel/
│ │ ├── retry.ts
│ │ ├── types.ts
│ │ ├── runnable_types.ts
│ │ ├── debug.ts
│ │ ├── algo.ts
│ │ ├── loop.ts
│ │ ├── read.ts
│ │ ├── validate.ts
│ │ ├── io.ts
│ │ ├── remote.ts
│ │ ├── write.ts
│ │ ├── index.ts
│ │ ├── messages.ts
│ │ └── utils/
│ │ ├── subgraph.ts
│ │ ├── config.ts
│ │ └── index.ts
│ ├── checkpoint-validation/
│ │ ├── .env.example
│ │ ├── jest.env.cjs
│ │ ├── jest.config.cjs
│ │ ├── .prettierrc
│ │ ├── .gitignore
│ │ ├── bin/
│ │ │ └── cli.js
│ │ ├── package.json
│ │ ├── tsconfig.cjs.json
│ │ ├── .release-it.json
│ │ ├── turbo.json
│ │ ├── LICENSE
│ │ ├── tsconfig.json
│ │ ├── .eslintrc.cjs
│ │ ├── README.md
│ │ ├── langchain.config.js
│ │ └── src/
│ │ ├── types.ts
│ │ ├── tests/
│ │ │ ├── memory.spec.ts
│ │ │ ├── postgres_initializer.ts
│ │ │ ├── mongodb_initializer.ts
│ │ │ ├── sqlite_initializer.ts
│ │ │ ├── utils.ts
│ │ │ ├── sqlite.spec.ts
│ │ │ ├── memory_initializer.ts
│ │ │ ├── postgres.spec.ts
│ │ │ └── mongodb.spec.ts
│ │ ├── runner.ts
│ │ ├── import_utils.ts
│ │ ├── spec/
│ │ │ ├── get_tuple.ts
│ │ │ ├── put_writes.ts
│ │ │ ├── index.ts
│ │ │ ├── list.ts
│ │ │ └── put.ts
│ │ ├── parse_args.ts
│ │ ├── index.ts
│ │ ├── cli.ts
│ │ └── test_utils.ts
│ └── checkpoint/
│ ├── .env.example
│ ├── jest.env.cjs
│ ├── jest.config.cjs
│ ├── .prettierrc
│ ├── .gitignore
│ ├── package.json
│ ├── tsconfig.cjs.json
│ ├── .release-it.json
│ ├── turbo.json
│ ├── LICENSE
│ ├── tsconfig.json
│ ├── .eslintrc.cjs
│ ├── README.md
│ ├── langchain.config.js
│ └── src/
│ ├── types.ts
│ ├── base.ts
│ ├── tests/
│ │ ├── checkpoints.test.ts
│ │ ├── vector.test.ts
│ │ ├── namespace.test.ts
│ │ ├── utils.test.ts
│ │ └── store.test.ts
│ ├── memory.ts
│ ├── id.ts
│ ├── store/
│ │ ├── batch.ts
│ │ ├── base.ts
│ │ ├── memory.ts
│ │ ├── utils.ts
│ │ └── index.ts
│ ├── serde/
│ │ ├── types.ts
│ │ ├── base.ts
│ │ ├── tests/
│ │ │ └── jsonplus.test.ts
│ │ ├── jsonplus.ts
│ │ └── utils/
│ │ └── fast-safe-stringify/
│ │ ├── index.ts
│ │ └── LICENSE
│ └── index.ts
├── .devcontainer/
│ └── devcontainer.json
├── examples/
│ ├── agent_executor/
│ │ └── img/
│ ├── multi_agent/
│ │ └── img/
│ ├── chat_agent_executor_with_function_calling/
│ ├── rewoo/
│ │ └── img/
│ ├── chatbots/
│ │ └── img/
│ ├── chatbot-simulation-evaluation/
│ │ └── img/
│ ├── package.json
│ ├── plan-and-execute/
│ ├── reflection/
│ │ └── img/
│ ├── tsconfig.json
│ ├── how-tos/
│ │ └── img/
│ ├── src/
│ │ └── index.ts
│ └── rag/
├── turbo.json
├── tsconfig.json
├── README.md
└── \_scripts/
└── run_notebook.py

Files Content:

# (Files content cropped to 300k characters, download full ingest to see more)

# File: /README.md

# 🦜🕸️LangGraph.js

[![Docs](https://img.shields.io/badge/docs-latest-blue)](https://langchain-ai.github.io/langgraphjs/)
![Version](https://img.shields.io/npm/v/@langchain/langgraph?logo=npm)  
[![Downloads](https://img.shields.io/npm/dm/@langchain/langgraph)](https://www.npmjs.com/package/@langchain/langgraph)
[![Open Issues](https://img.shields.io/github/issues-raw/langchain-ai/langgraphjs)](https://github.com/langchain-ai/langgraphjs/issues)

⚡ Building language agents as graphs ⚡

## Overview

[LangGraph.js](https://langchain-ai.github.io/langgraphjs/) is a library for building stateful, multi-actor applications with LLMs, used to create agent and multi-agent workflows. Compared to other LLM frameworks, it offers these core benefits: cycles, controllability, and persistence. LangGraph allows you to define flows that involve cycles, essential for most agentic architectures, differentiating it from DAG-based solutions. As a very low-level framework, it provides fine-grained control over both the flow and state of your application, crucial for creating reliable agents. Additionally, LangGraph includes built-in persistence, enabling advanced human-in-the-loop and memory features.

LangGraph is inspired by [Pregel](https://research.google/pubs/pub37252/) and [Apache Beam](https://beam.apache.org/). The public interface draws inspiration from [NetworkX](https://networkx.org/documentation/latest/). LangGraph is built by LangChain Inc, the creators of [LangChain](https://github.com/langchain-ai/langchainjs), but can be used without LangChain.

### Key Features

- **Cycles and Branching**: Implement loops and conditionals in your apps.
- **Persistence**: Automatically save state after each step in the graph. Pause and resume the graph execution at any point to support error recovery, human-in-the-loop workflows, time travel and more.
- **Human-in-the-Loop**: Interrupt graph execution to approve or edit next action planned by the agent.
- **Streaming Support**: Stream outputs as they are produced by each node (including token streaming).
- **Integration with LangChain**: LangGraph integrates seamlessly with [LangChain.js](https://github.com/langchain-ai/langchainjs/) and [LangSmith](https://docs.smith.langchain.com/) (but does not require them).

## Installation

```bash
npm install @langchain/langgraph @langchain/core
```

## Example

One of the central concepts of LangGraph is state. Each graph execution creates a state that is passed between nodes in the graph as they execute, and each node updates this internal state with its return value after it executes. The way that the graph updates its internal state is defined by either the type of graph chosen or a custom function.

Let's take a look at an example of an agent that can use a search tool.

First install the required dependencies:

```bash
npm install @langchain/anthropic
```

Then set the required environment variables:

```bash
export ANTHROPIC_API_KEY=sk-...
```

Optionally, set up [LangSmith](https://docs.smith.langchain.com/) for best-in-class observability:

```bash
export LANGCHAIN_TRACING_V2=true
export LANGCHAIN_API_KEY=ls__...
```

Now let's define our agent:

```typescript
import { AIMessage, BaseMessage, HumanMessage } from "@langchain/core/messages";
import { tool } from "@langchain/core/tools";
import { z } from "zod";
import { ChatAnthropic } from "@langchain/anthropic";
import { StateGraph } from "@langchain/langgraph";
import {
  MemorySaver,
  Annotation,
  messagesStateReducer,
} from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";

// Define the graph state
// See here for more info: https://langchain-ai.github.io/langgraphjs/how-tos/define-state/
const StateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    // `messagesStateReducer` function defines how `messages` state key should be updated
    // (in this case it appends new messages to the list and overwrites messages with the same ID)
    reducer: messagesStateReducer,
  }),
});

// Define the tools for the agent to use
const weatherTool = tool(
  async ({ query }) => {
    // This is a placeholder for the actual implementation
    if (
      query.toLowerCase().includes("sf") ||
      query.toLowerCase().includes("san francisco")
    ) {
      return "It's 60 degrees and foggy.";
    }
    return "It's 90 degrees and sunny.";
  },
  {
    name: "weather",
    description: "Call to get the current weather for a location.",
    schema: z.object({
      query: z.string().describe("The query to use in your search."),
    }),
  }
);

const tools = [weatherTool];
const toolNode = new ToolNode(tools);

const model = new ChatAnthropic({
  model: "claude-3-5-sonnet-20240620",
  temperature: 0,
}).bindTools(tools);

// Define the function that determines whether to continue or not
// We can extract the state typing via `StateAnnotation.State`
function shouldContinue(state: typeof StateAnnotation.State) {
  const messages = state.messages;
  const lastMessage = messages[messages.length - 1] as AIMessage;

  // If the LLM makes a tool call, then we route to the "tools" node
  if (lastMessage.tool_calls?.length) {
    return "tools";
  }
  // Otherwise, we stop (reply to the user)
  return "__end__";
}

// Define the function that calls the model
async function callModel(state: typeof StateAnnotation.State) {
  const messages = state.messages;
  const response = await model.invoke(messages);

  // We return a list, because this will get added to the existing list
  return { messages: [response] };
}

// Define a new graph
const workflow = new StateGraph(StateAnnotation)
  .addNode("agent", callModel)
  .addNode("tools", toolNode)
  .addEdge("__start__", "agent")
  .addConditionalEdges("agent", shouldContinue)
  .addEdge("tools", "agent");

// Initialize memory to persist state between graph runs
const checkpointer = new MemorySaver();

// Finally, we compile it!
// This compiles it into a LangChain Runnable.
// Note that we're (optionally) passing the memory when compiling the graph
const app = workflow.compile({ checkpointer });

// Use the Runnable
const finalState = await app.invoke(
  { messages: [new HumanMessage("what is the weather in sf")] },
  { configurable: { thread_id: "42" } }
);

console.log(finalState.messages[finalState.messages.length - 1].content);
```

This will output:

```
Based on the information I received, the current weather in San Francisco is:

Temperature: 60 degrees Fahrenheit
Conditions: Foggy

San Francisco is known for its foggy weather, especially during certain times of the year. The moderate temperature of 60°F (about 15.5°C) is quite typical for the city, which generally has mild weather year-round due to its coastal location.

Is there anything else you'd like to know about the weather in San Francisco or any other location?
```

Now when we pass the same `"thread_id"`, the conversation context is retained via the saved state (i.e. stored list of messages):

```typescript
const nextState = await app.invoke(
  { messages: [new HumanMessage("what about ny")] },
  { configurable: { thread_id: "42" } }
);
console.log(nextState.messages[nextState.messages.length - 1].content);
```

```
Based on the information I received, the current weather in New York is:

Temperature: 90 degrees Fahrenheit (approximately 32.2 degrees Celsius)
Conditions: Sunny

New York is experiencing quite warm weather today. A temperature of 90°F is considered hot for most people, and it's significantly warmer than the San Francisco weather we just checked. The sunny conditions suggest it's a clear day without cloud cover, which can make it feel even warmer.

On a day like this in New York, it would be advisable for people to stay hydrated, seek shade when possible, and use sun protection if spending time outdoors.

Is there anything else you'd like to know about the weather in New York or any other location?
```

### Step-by-step Breakdown

1. <details>
    <summary>Initialize the model and tools.</summary>

   - We use `ChatAnthropic` as our LLM. **NOTE:** We need make sure the model knows that it has these tools available to call. We can do this by converting the LangChain tools into the format for Anthropic tool calling using the `.bindTools()` method.
   - We define the tools we want to use -- a weather tool in our case. See the documentation [here](https://js.langchain.com/docs/how_to/custom_tools/) on how to create your own tools.
   </details>

2. <details>
    <summary>Initialize graph with state.</summary>

   - We initialize the graph (`StateGraph`) by passing the state interface (`AgentState`).
   - The `StateAnnotation` object defines how updates from each node should be merged into the graph's state.
   </details>

3. <details>
    <summary>Define graph nodes.</summary>

   There are two main nodes we need:

   - The `agent` node: responsible for deciding what (if any) actions to take.
   - The `tools` node that invokes tools: if the agent decides to take an action, this node will then execute that action.
   </details>

4. <details>
    <summary>Define entry point and graph edges.</summary>

   First, we need to set the entry point for graph execution - the `agent` node.

   Then we define one normal and one conditional edge. A conditional edge means that the destination depends on the contents of the graph's state (`AgentState`). In our case, the destination is not known until the agent (LLM) decides.

   - Conditional edge: after the agent is called, we should either:
     - a. Run tools if the agent said to take an action, OR
     - b. Finish (respond to the user) if the agent did not ask to run tools
   - Normal edge: after the tools are invoked, the graph should always return to the agent to decide what to do next
   </details>

5. <details>
    <summary>Compile the graph.</summary>

   - When we compile the graph, we turn it into a LangChain [Runnable](https://js.langchain.com/docs/expression_language/), which automatically enables calling `.invoke()`, `.stream()` and `.batch()` with your inputs.
   - We can also optionally pass a checkpointer object for persisting state between graph runs, enabling memory, human-in-the-loop workflows, time travel and more. In our case we use `MemorySaver` - a simple in-memory checkpointer.
   </details>

6. <details>
    <summary>Execute the graph.</summary>

   1. LangGraph adds the input message to the internal state, then passes the state to the entrypoint node, `"agent"`.
   2. The `"agent"` node executes, invoking the chat model.
   3. The chat model returns an `AIMessage`. LangGraph adds this to the state.
   4. The graph cycles through the following steps until there are no more `tool_calls` on the `AIMessage`:

      - If `AIMessage` has `tool_calls`, the `"tools"` node executes.
      - The `"agent"` node executes again and returns an `AIMessage`.

   5. Execution progresses to the special `__end__` value and outputs the final state.
   As a result, we get a list of all our chat messages as output.
   </details>

## Documentation

- [Tutorials](https://langchain-ai.github.io/langgraphjs/tutorials/): Learn to build with LangGraph through guided examples.
- [How-to Guides](https://langchain-ai.github.io/langgraphjs/how-tos/): Accomplish specific things within LangGraph, from streaming, to adding memory & persistence, to common design patterns (branching, subgraphs, etc.). These are the place to go if you want to copy and run a specific code snippet.
- [Conceptual Guides](https://langchain-ai.github.io/langgraphjs/concepts/): In-depth explanations of the key concepts and principles behind LangGraph, such as nodes, edges, state and more.
- [API Reference](https://langchain-ai.github.io/langgraphjs/reference/): Review important classes and methods, simple examples of how to use the graph and checkpointing APIs, higher-level prebuilt components and more.

## Running Example Jupyter Notebooks

Please note that the \*.ipynb notebooks in the `examples/` folder require [tslab](https://github.com/yunabe/tslab?tab=readme-ov-file) to be installed. In order to run these notebooks in VSCode, you will also need the [Jupyter](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter) VSCode Extension installed. After cloning this repository, you can run `yarn build` in the root. You should then be all set!

If you are still having trouble, try adding the following `tsconfig.json` file to the `examples/` directory:

```
{
  "compilerOptions": {
    "esModuleInterop": true,
    "moduleResolution": "node",
    "target": "ES2020",
    "module": "ES2020",
    "lib": [
      "ES2020"
    ],
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@langchain/langgraph": [
        "../langgraph/src"
      ]
    }
  },
  "include": [
    "./**/*.ts",
    "./**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

================================================
File: /docs/typedoc.json
================================================
{
"navigationLinks": {
"Back to documentation": "/langgraphjs/"
},
}

================================================
File: /docs/docs/troubleshooting/errors/index.md
================================================

# Error reference

This page contains guides around resolving common errors you may find while building with LangChain.
Errors referenced below will have an `lc_error_code` property corresponding to one of the below codes when they are thrown in code.

- [GRAPH_RECURSION_LIMIT](/langgraphjs/troubleshooting/errors/GRAPH_RECURSION_LIMIT)
- [INVALID_CONCURRENT_GRAPH_UPDATE](/langgraphjs/troubleshooting/errors/INVALID_CONCURRENT_GRAPH_UPDATE)
- [INVALID_GRAPH_NODE_RETURN_VALUE](/langgraphjs/troubleshooting/errors/INVALID_GRAPH_NODE_RETURN_VALUE)
- [MULTIPLE_SUBGRAPHS](/langgraphjs/troubleshooting/errors/MULTIPLE_SUBGRAPHS)
- [UNREACHABLE_NODE](/langgraphjs/troubleshooting/errors/UNREACHABLE_NODE)

================================================
File: /docs/docs/versions/index.md
================================================

# LangGraph Over Time

As LangGraph.js continues to evolve and improve, breaking changes are sometimes necessary to enhance functionality, performance, or developer experience. This page serves as a guide to the version history of LangGraph.js, documenting significant changes and providing assistance for upgrading between versions.

## Version History

### v0.2.0 (Latest)

- (Breaking) [`@langchain/core`](https://www.npmjs.com/package/@langchain/core) is now a peer dependency and requires explicit installation.
- Added support for [dynamic breakpoints](/langgraphjs/how-tos/dynamic_breakpoints/).
- Added support for [separate input and output schema](/langgraphjs/how-tos/input_output_schema/).
- Allow using an array to specify destination nodes from a conditional edge as shorthand for object.
- Numerous bugfixes.

### v0.1.0

- (Breaking) Changed checkpoint representations to support namespacing for subgraphs and pending writes.
- (Breaking) `MessagesState` was changed to [`MessagesAnnotation`](/langgraphjs/reference/variables/langgraph.MessagesAnnotation.html).
- Added [`Annotation`](/langgraphjs/reference/modules/langgraph.Annotation.html), a more streamlined way to declare state. Removes the need for separate type and channel declarations.
- Split checkpointer implementations into different libraries for easier inheritance.
- Major internal architecture refactor to use more robust patterns.
- Deprecated `MessageGraph` in favor of [`StateGraph`](/langgraphjs/reference/classes/langgraph.StateGraph.html) + [`MessagesAnnotation`](/langgraphjs/reference/variables/langgraph.MessagesAnnotation.html).
- Numerous bugfixes.

## Upgrading

When upgrading LangGraph.js, please refer to the specific version sections below for detailed instructions on how to adapt your code to the latest changes.

### Upgrading to v0.2.0

- You will now need to install `@langchain/core` explicitly. See [this page](https://langchain-ai.github.io/langgraphjs/how-tos/manage-ecosystem-dependencies/) for more information.

### Upgrading to v0.1.0

- Old saved checkpoints will no longer be valid, and you will need to update to use a new prebuilt checkpointer.
- We recommend switching to the new `Annotation` syntax when declaring graph state.

## Deprecation Notices

This section will list any deprecated features or APIs, along with their planned removal dates and recommended alternatives.

#### `MessageGraph`

Use [`MessagesAnnotation`](/langgraphjs/reference/variables/langgraph.MessagesAnnotation.html) with [`StateGraph`](/langgraphjs/reference/classes/langgraph.StateGraph.html).

#### `createFunctionCallingExecutor`

Use [`createReactAgent`](/langgraphjs/reference/functions/langgraph_prebuilt.createReactAgent.html) with a model that supports tool calling.

#### `ToolExecutor`

Use [`ToolNode`](/langgraphjs/reference/classes/langgraph_prebuilt.ToolNode.html) instead.

## Full changelog

For the most up-to-date information on LangGraph.js versions and changes, please refer to our [GitHub repository](https://github.com/langchain-ai/langgraphjs) and [release notes](https://github.com/langchain-ai/langgraphjs/releases).

================================================
File: /docs/docs/versions/.meta.yml
================================================
tags:

- versioning
- changelog
- upgrading

================================================
File: /docs/docs/tutorials/index.md
================================================

---

hide:

- navigation
  title: Tutorials

---

# Tutorials

Welcome to the LangGraph.js Tutorials! These notebooks introduce LangGraph through building various language agents and applications.

## Quick Start

Learn the basics of LangGraph through a comprehensive quick start in which you will build an agent from scratch.

- [Quick Start](quickstart.ipynb)
- [LangGraph Cloud Quick Start](https://langchain-ai.github.io/langgraph/cloud/quick_start/): In this tutorial, you will build and deploy an agent to LangGraph Cloud.

## Use cases

Learn from example implementations of graphs designed for specific scenarios and that implement common design patterns.

#### Chatbots

- [Customer support with a small model](chatbots/customer_support_small_model.ipynb)

#### RAG

- [Agentic RAG](rag/langgraph_agentic_rag.ipynb)
- [Corrective RAG](rag/langgraph_crag.ipynb)
- [Self-RAG](rag/langgraph_self_rag.ipynb)

#### Multi-Agent Systems

- [Collaboration](multi_agent/multi_agent_collaboration.ipynb): Enabling two agents to collaborate on a task
- [Supervision](multi_agent/agent_supervisor.ipynb): Using an LLM to orchestrate and delegate to individual agents
- [Hierarchical Teams](multi_agent/hierarchical_agent_teams.ipynb): Orchestrating nested teams of agents to solve problems

#### Planning Agents

- [Plan-and-Execute](plan-and-execute/plan-and-execute.ipynb): Implementing a basic planning and execution agent

#### Reflection & Critique

- [Basic Reflection](reflection/reflection.ipynb): Prompting the agent to reflect on and revise its outputs
- [Rewoo](rewoo/rewoo.ipynb): Reducing re-planning by saving observations as variables

### Evaluation

- [Agent-based](chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb): Evaluate chatbots via simulated user interactions

================================================
File: /docs/docs/tutorials/.meta.yml
================================================
tags:

- tutorials

================================================
File: /docs/docs/concepts/human_in_the_loop.md
================================================

# Human-in-the-loop

!!! tip "This guide uses the new `interrupt` function."

    As of LangGraph 0.2.31, the recommended way to set breakpoints is using the [`interrupt` function](/langgraphjs/reference/functions/langgraph.interrupt-1.html) as it simplifies **human-in-the-loop** patterns.

    If you're looking for the previous version of this conceptual guide, which relied on static breakpoints and `NodeInterrupt` exception, it is available [here](v0-human-in-the-loop.md).

A **human-in-the-loop** (or "on-the-loop") workflow integrates human input into automated processes, allowing for decisions, validation, or corrections at key stages. This is especially useful in **LLM-based applications**, where the underlying model may generate occasional inaccuracies. In low-error-tolerance scenarios like compliance, decision-making, or content generation, human involvement ensures reliability by enabling review, correction, or override of model outputs.

## Use cases

Key use cases for **human-in-the-loop** workflows in LLM-based applications include:

1. [**🛠️ Reviewing tool calls**](#review-tool-calls): Humans can review, edit, or approve tool calls requested by the LLM before tool execution.

2. **✅ Validating LLM outputs**: Humans can review, edit, or approve content generated by the LLM.

3. **💡 Providing context**: Enable the LLM to explicitly request human input for clarification or additional details or to support multi-turn conversations.

## `interrupt`

The [`interrupt` function](/langgraphjs/reference/functions/langgraph.interrupt-1.html) in LangGraph enables human-in-the-loop workflows by pausing the graph at a specific node, presenting information to a human, and resuming the graph with their input. This function is useful for tasks like approvals, edits, or collecting additional input. The [`interrupt` function](/langgraphjs/reference/functions/langgraph.interrupt-1.html) is used in conjunction with the [`Command`](/langgraphjs/reference/classes/langgraph.Command.html) object to resume the graph with a value provided by the human.

```typescript
import { interrupt } from "@langchain/langgraph";

function humanNode(state: typeof GraphAnnotation.State) {
  const value = interrupt(
    // Any JSON serializable value to surface to the human.
    // For example, a question or a piece of text or a set of keys in the state
    {
      text_to_revise: state.some_text,
    }
  );
  // Update the state with the human's input or route the graph based on the input
  return {
    some_text: value,
  };
}

const graph = workflow.compile({
  checkpointer, // Required for `interrupt` to work
});

// Run the graph until the interrupt
const threadConfig = { configurable: { thread_id: "some_id" } };
await graph.invoke(someInput, threadConfig);

// Resume the graph with the human's input
await graph.invoke(new Command({ resume: valueFromHuman }), threadConfig);
```

```typescript
{
  some_text: "Edited text";
}
```

??? "Full Code"

      Here's a full example of how to use `interrupt` in a graph, if you'd like
      to see the code in action.

      ```typescript
      import { MemorySaver, Annotation, interrupt, Command, StateGraph } from "@langchain/langgraph";

      // Define the graph state
      const StateAnnotation = Annotation.Root({
        some_text: Annotation<string>()
      });

      function humanNode(state: typeof StateAnnotation.State) {
         const value = interrupt(
            // Any JSON serializable value to surface to the human.
            // For example, a question or a piece of text or a set of keys in the state
            {
               text_to_revise: state.some_text
            }
         );
         return {
            // Update the state with the human's input
            some_text: value
         };
      }

      // Build the graph
      const workflow = new StateGraph(StateAnnotation)
      // Add the human-node to the graph
        .addNode("human_node", humanNode)
        .addEdge("__start__", "human_node")

      // A checkpointer is required for `interrupt` to work.
      const checkpointer = new MemorySaver();
      const graph = workflow.compile({
         checkpointer
      });

      // Using stream() to directly surface the `__interrupt__` information.
      for await (const chunk of await graph.stream(
         { some_text: "Original text" },
         threadConfig
      )) {
         console.log(chunk);
      }

      // Resume using Command
      for await (const chunk of await graph.stream(
         new Command({ resume: "Edited text" }),
         threadConfig
      )) {
         console.log(chunk);
      }
      ```

      ```typescript
      {
         __interrupt__: [
            {
               value: { question: 'Please revise the text', some_text: 'Original text' },
               resumable: true,
               ns: ['human_node:10fe492f-3688-c8c6-0d0a-ec61a43fecd6'],
               when: 'during'
            }
         ]
      }
      { human_node: { some_text: 'Edited text' } }
      ```

## Requirements

To use `interrupt` in your graph, you need to:

1. [**Specify a checkpointer**](persistence.md#checkpoints) to save the graph state after each step.

2. **Call `interrupt()`** in the appropriate place. See the [Design Patterns](#design-patterns) section for examples.

3. **Run the graph** with a [**thread ID**](./persistence.md#threads) until the `interrupt` is hit.

4. **Resume execution** using `invoke`/`stream` (see [**The `Command` primitive**](#the-command-primitive)).

## Design Patterns

There are typically three different **actions** that you can do with a human-in-the-loop workflow:

1. **Approve or Reject**: Pause the graph before a critical step, such as an API call, to review and approve the action. If the action is rejected, you can prevent the graph from executing the step, and potentially take an alternative action. This pattern often involve **routing** the graph based on the human's input.

2. **Edit Graph State**: Pause the graph to review and edit the graph state. This is useful for correcting mistakes or updating the state with additional information. This pattern often involves **updating** the state with the human's input.

3. **Get Input**: Explicitly request human input at a particular step in the graph. This is useful for collecting additional information or context to inform the agent's decision-making process or for supporting **multi-turn conversations**.

Below we show different design patterns that can be implemented using these **actions**.

### Approve or Reject

<figure markdown="1">

![image](img/human_in_the_loop/approve-or-reject.png){: style="max-height:400px"}

<figcaption>Depending on the human's approval or rejection, the graph can proceed with the action or take an alternative path.</figcaption>

</figure>

Pause the graph before a critical step, such as an API call, to review and approve the action. If the action is rejected, you can prevent the graph from executing the step, and potentially take an alternative action.

```typescript
import { interrupt, Command } from "@langchain/langgraph";

function humanApproval(state: typeof GraphAnnotation.State): Command {
  const isApproved = interrupt({
    question: "Is this correct?",
    // Surface the output that should be
    // reviewed and approved by the human.
    llm_output: state.llm_output,
  });

  if (isApproved) {
    return new Command({ goto: "some_node" });
  } else {
    return new Command({ goto: "another_node" });
  }
}

// Add the node to the graph in an appropriate location
// and connect it to the relevant nodes.
graphBuilder.addNode("human_approval", humanApproval);

const graph = graphBuilder.compile({ checkpointer });

// After running the graph and hitting the interrupt, the graph will pause.
// Resume it with either an approval or rejection.
const threadConfig = { configurable: { thread_id: "some_id" } };
await graph.invoke(new Command({ resume: true }), threadConfig);
```

See [how to review tool calls](/langgraphjs/how-tos/review-tool-calls) for a more detailed example.

### Review & Edit State

<figure markdown="1">

![image](img/human_in_the_loop/edit-graph-state-simple.png){: style="max-height:400px"}

<figcaption>A human can review and edit the state of the graph. This is useful for correcting mistakes or updating the state with additional information.

</figcaption>

</figure>

```typescript
import { interrupt } from "@langchain/langgraph";

function humanEditing(state: typeof GraphAnnotation.State): Command {
  const result = interrupt({
    // Interrupt information to surface to the client.
    // Can be any JSON serializable value.
    task: "Review the output from the LLM and make any necessary edits.",
    llm_generated_summary: state.llm_generated_summary,
  });

  // Update the state with the edited text
  return {
    llm_generated_summary: result.edited_text,
  };
}

// Add the node to the graph in an appropriate location
// and connect it to the relevant nodes.
graphBuilder.addNode("human_editing", humanEditing);

const graph = graphBuilder.compile({ checkpointer });

// After running the graph and hitting the interrupt, the graph will pause.
// Resume it with the edited text.
const threadConfig = { configurable: { thread_id: "some_id" } };
await graph.invoke(
  new Command({ resume: { edited_text: "The edited text" } }),
  threadConfig
);
```

See [How to wait for user input using interrupt](/langgraphjs/how-tos/wait-user-input) for a more detailed example.

### Review Tool Calls

<figure markdown="1">

![image](img/human_in_the_loop/tool-call-review.png){: style="max-height:400px"}

<figcaption>A human can review and edit the output from the LLM before proceeding. This is particularly
critical in applications where the tool calls requested by the LLM may be sensitive or require human oversight.

</figcaption>

</figure>

```typescript
import { interrupt, Command } from "@langchain/langgraph";

function humanReviewNode(state: typeof GraphAnnotation.State): Command {
  // This is the value we'll be providing via Command.resume(<human_review>)
  const humanReview = interrupt({
    question: "Is this correct?",
    // Surface tool calls for review
    tool_call: toolCall,
  });

  const [reviewAction, reviewData] = humanReview;

  // Approve the tool call and continue
  if (reviewAction === "continue") {
    return new Command({ goto: "run_tool" });
  }
  // Modify the tool call manually and then continue
  else if (reviewAction === "update") {
    const updatedMsg = getUpdatedMsg(reviewData);
    // Remember that to modify an existing message you will need
    // to pass the message with a matching ID.
    return new Command({
      goto: "run_tool",
      update: { messages: [updatedMsg] },
    });
  }
  // Give natural language feedback, and then pass that back to the agent
  else if (reviewAction === "feedback") {
    const feedbackMsg = getFeedbackMsg(reviewData);
    return new Command({
      goto: "call_llm",
      update: { messages: [feedbackMsg] },
    });
  }
}
```

See [how to review tool calls](/langgraphjs/how-tos/review-tool-calls) for a more detailed example.

### Multi-turn conversation

<figure markdown="1">

![image](img/human_in_the_loop/multi-turn-conversation.png){: style="max-height:400px"}

<figcaption>A <strong>multi-turn conversation</strong> architecture where an <strong>agent</strong> and <strong>human node</strong> cycle back and forth until the agent decides to hand off the conversation to another agent or another part of the system.

</figcaption>

</figure>

A **multi-turn conversation** involves multiple back-and-forth interactions between an agent and a human, which can allow the agent to gather additional information from the human in a conversational manner.

This design pattern is useful in an LLM application consisting of [multiple agents](./multi_agent.md). One or more agents may need to carry out multi-turn conversations with a human, where the human provides input or feedback at different stages of the conversation. For simplicity, the agent implementation below is illustrated as a single node, but in reality it may be part of a larger graph consisting of multiple nodes and include a conditional edge.

=== "Using a human node per agent"

    In this pattern, each agent has its own human node for collecting user input.

    This can be achieved by either naming the human nodes with unique names (e.g., "human for agent 1", "human for agent 2") or by
    using subgraphs where a subgraph contains a human node and an agent node.

    ```typescript
    import { interrupt } from "@langchain/langgraph";

    function humanInput(state: typeof GraphAnnotation.State) {
      const humanMessage = interrupt("human_input");

      return {
        messages: [
          {
            role: "human",
            content: humanMessage
          }
        ]
      };
    }

    function agent(state: typeof GraphAnnotation.State) {
      // Agent logic
      // ...
    }

    graphBuilder.addNode("human_input", humanInput);
    graphBuilder.addEdge("human_input", "agent");

    const graph = graphBuilder.compile({ checkpointer });

    // After running the graph and hitting the interrupt, the graph will pause.
    // Resume it with the human's input.
    await graph.invoke(
      new Command({ resume: "hello!" }),
      threadConfig
    );
    ```

=== "Sharing human node across multiple agents"

    In this pattern, a single human node is used to collect user input for multiple agents. The active agent is determined from the state, so after human input is collected, the graph can route to the correct agent.

    ```typescript
    import { interrupt, Command, MessagesAnnotation } from "@langchain/langgraph";

    function humanNode(state: typeof MessagesAnnotation.State): Command {
      /**
       * A node for collecting user input.
       */
      const userInput = interrupt("Ready for user input.");

      // Determine the **active agent** from the state, so
      // we can route to the correct agent after collecting input.
      // For example, add a field to the state or use the last active agent.
      // or fill in `name` attribute of AI messages generated by the agents.
      const activeAgent = ...;

      return new Command({
        goto: activeAgent,
        update: {
          messages: [{
            role: "human",
            content: userInput,
          }]
        }
      });
    }
    ```

See [how to implement multi-turn conversations](/langgraphjs/how-tos/multi-agent-multi-turn-convo) for a more detailed example.

### Validating human input

If you need to validate the input provided by the human within the graph itself (rather than on the client side), you can achieve this by using multiple interrupt calls within a single node.

```typescript
import { interrupt } from "@langchain/langgraph";

function humanNode(state: typeof GraphAnnotation.State) {
  /**
   * Human node with validation.
   */
  let question = "What is your age?";

  while (true) {
    const answer = interrupt(question);

    // Validate answer, if the answer isn't valid ask for input again.
    if (typeof answer !== "number" || answer < 0) {
      question = `'${answer}' is not a valid age. What is your age?`;
      continue;
    } else {
      // If the answer is valid, we can proceed.
      break;
    }
  }

  console.log(`The human in the loop is ${answer} years old.`);

  return {
    age: answer,
  };
}
```

## The `Command` primitive

When using the `interrupt` function, the graph will pause at the interrupt and wait for user input.

Graph execution can be resumed using the [Command](/langgraphjs/reference/classes/langgraph.Command.html) primitive which can be passed through the `invoke` or `stream` methods.

The `Command` primitive provides several options to control and modify the graph's state during resumption:

1. **Pass a value to the `interrupt`**: Provide data, such as a user's response, to the graph using `new Command({ resume: value })`. Execution resumes from the beginning of the node where the `interrupt` was used, however, this time the `interrupt(...)` call will return the value passed in the `new Command({ resume: value })` instead of pausing the graph.

   ```typescript
   // Resume graph execution with the user's input.
   await graph.invoke(new Command({ resume: { age: "25" } }), threadConfig);
   ```

2. **Update the graph state**: Modify the graph state using `Command({ goto: ..., update: ... })`. Note that resumption starts from the beginning of the node where the `interrupt` was used. Execution resumes from the beginning of the node where the `interrupt` was used, but with the updated state.

   ```typescript
   // Update the graph state and resume.
   // You must provide a `resume` value if using an `interrupt`.
   await graph.invoke(
     new Command({ resume: "Let's go!!!", update: { foo: "bar" } }),
     threadConfig
   );
   ```

By leveraging `Command`, you can resume graph execution, handle user inputs, and dynamically adjust the graph's state.

## Using with `invoke`

When you use `stream` to run the graph, you will receive an `Interrupt` event that let you know the `interrupt` was triggered.

`invoke` does not return the interrupt information. To access this information, you must use the [getState](/langgraphjs/reference/classes/langgraph.CompiledStateGraph.html#getState) method to retrieve the graph state after calling `invoke`.

```typescript
// Run the graph up to the interrupt
const result = await graph.invoke(inputs, threadConfig);

// Get the graph state to get interrupt information.
const state = await graph.getState(threadConfig);

// Print the state values
console.log(state.values);

// Print the pending tasks
console.log(state.tasks);

// Resume the graph with the user's input.
await graph.invoke(new Command({ resume: { age: "25" } }), threadConfig);
```

```typescript
{
  foo: "bar";
} // State values

[
  {
    id: "5d8ffc92-8011-0c9b-8b59-9d3545b7e553",
    name: "node_foo",
    path: ["__pregel_pull", "node_foo"],
    error: null,
    interrupts: [
      {
        value: "value_in_interrupt",
        resumable: true,
        ns: ["node_foo:5d8ffc92-8011-0c9b-8b59-9d3545b7e553"],
        when: "during",
      },
    ],
    state: null,
    result: null,
  },
]; // Pending tasks. interrupts
```

## How does resuming from an interrupt work?

A critical aspect of using `interrupt` is understanding how resuming works. When you resume execution after an `interrupt`, graph execution starts from the **beginning** of the **graph node** where the last `interrupt` was triggered.

**All** code from the beginning of the node to the `interrupt` will be re-executed.

```typescript
let counter = 0;

function node(state: State) {
  // All the code from the beginning of the node to the interrupt will be re-executed
  // when the graph resumes.
  counter += 1;

  console.log(`> Entered the node: ${counter} # of times`);

  // Pause the graph and wait for user input.
  const answer = interrupt();

  console.log("The value of counter is:", counter);
  // ...
}
```

Upon **resuming** the graph, the counter will be incremented a second time, resulting in the following output:

```typescript
> Entered the node: 2 # of times
The value of counter is: 2
```

## Common Pitfalls

### Side-effects

Place code with side effects, such as API calls, **after** the `interrupt` to avoid duplication, as these are re-triggered every time the node is resumed.

=== "Side effects before interrupt (BAD)"

    This code will re-execute the API call another time when the node is resumed from
    the `interrupt`.
    This can be problematic if the API call is not idempotent or is just expensive.

    ```typescript
    import { interrupt } from "@langchain/langgraph";

    function humanNode(state: typeof GraphAnnotation.State) {
      /**
       * Human node with validation.
       */
      apiCall(); // This code will be re-executed when the node is resumed.

      const answer = interrupt(question);
    }
    ```

=== "Side effects after interrupt (OK)"

    ```typescript
    import { interrupt } from "@langchain/langgraph";

    function humanNode(state: typeof GraphAnnotation.State) {
      /**
       * Human node with validation.
       */

      const answer = interrupt(question);

      apiCall(answer); // OK as it's after the interrupt
    }
    ```

=== "Side effects in a separate node (OK)"

    ```typescript
    import { interrupt } from "@langchain/langgraph";

    function humanNode(state: typeof GraphAnnotation.State) {
      /**
       * Human node with validation.
       */

      const answer = interrupt(question);

      return {
        answer
      };
    }

    function apiCallNode(state: typeof GraphAnnotation.State) {
      apiCall(); // OK as it's in a separate node
    }
    ```

### Subgraphs called as functions

When invoking a subgraph [as a function](low_level.md#as-a-function), the **parent graph** will resume execution from the **beginning of the node** where the subgraph was invoked (and where an `interrupt` was triggered). Similarly, the **subgraph**, will resume from the **beginning of the node** where the `interrupt()` function was called.

For example,

```typescript
async function nodeInParentGraph(state: typeof GraphAnnotation.State) {
    someCode();  // <-- This will re-execute when the subgraph is resumed.
    // Invoke a subgraph as a function.
    // The subgraph contains an `interrupt` call.
    const subgraphResult = await subgraph.invoke(someInput);
    ...
}
```

??? "**Example: Parent and Subgraph Execution Flow**"

      Say we have a parent graph with 3 nodes:

      **Parent Graph**: `node_1` → `node_2` (subgraph call) → `node_3`

      And the subgraph has 3 nodes, where the second node contains an `interrupt`:

      **Subgraph**: `sub_node_1` → `sub_node_2` (`interrupt`) → `sub_node_3`

      When resuming the graph, the execution will proceed as follows:

      1. **Skip `node_1`** in the parent graph (already executed, graph state was saved in snapshot).
      2. **Re-execute `node_2`** in the parent graph from the start.
      3. **Skip `sub_node_1`** in the subgraph (already executed, graph state was saved in snapshot).
      4. **Re-execute `sub_node_2`** in the subgraph from the beginning.
      5. Continue with `sub_node_3` and subsequent nodes.

      Here is abbreviated example code that you can use to understand how subgraphs work with interrupts.
      It counts the number of times each node is entered and prints the count.

      ```typescript
      import {
        StateGraph,
        START,
        interrupt,
        Command,
        MemorySaver,
        Annotation
      } from "@langchain/langgraph";

      const GraphAnnotation = Annotation.Root({
        stateCounter: Annotation<number>({
          reducer: (a, b) => a + b,
          default: () => 0
        })
      })

      let counterNodeInSubgraph = 0;

      function nodeInSubgraph(state: typeof GraphAnnotation.State) {
        counterNodeInSubgraph += 1;  // This code will **NOT** run again!
        console.log(`Entered 'nodeInSubgraph' a total of ${counterNodeInSubgraph} times`);
        return {};
      }

      let counterHumanNode = 0;

      async function humanNode(state: typeof GraphAnnotation.State) {
        counterHumanNode += 1; // This code will run again!
        console.log(`Entered humanNode in sub-graph a total of ${counterHumanNode} times`);
        const answer = await interrupt("what is your name?");
        console.log(`Got an answer of ${answer}`);
        return {};
      }

      const checkpointer = new MemorySaver();

      const subgraphBuilder = new StateGraph(GraphAnnotation)
        .addNode("some_node", nodeInSubgraph)
        .addNode("human_node", humanNode)
        .addEdge(START, "some_node")
        .addEdge("some_node", "human_node")
      const subgraph = subgraphBuilder.compile({ checkpointer });

      let counterParentNode = 0;

      async function parentNode(state: typeof GraphAnnotation.State) {
        counterParentNode += 1; // This code will run again on resuming!
        console.log(`Entered 'parentNode' a total of ${counterParentNode} times`);

        // Please note that we're intentionally incrementing the state counter
        // in the graph state as well to demonstrate that the subgraph update
        // of the same key will not conflict with the parent graph (until
        const subgraphState = await subgraph.invoke(state);
        return subgraphState;
      }

      const builder = new StateGraph(GraphAnnotation)
        .addNode("parent_node", parentNode)
        .addEdge(START, "parent_node")

      // A checkpointer must be enabled for interrupts to work!
      const graph = builder.compile({ checkpointer });

      const config = {
        configurable: {
          thread_id: crypto.randomUUID(),
        }
      };

      for await (const chunk of await graph.stream({ stateCounter: 1 }, config)) {
        console.log(chunk);
      }

      console.log('--- Resuming ---');

      for await (const chunk of await graph.stream(new Command({ resume: "35" }), config)) {
        console.log(chunk);
      }
      ```

      This will print out

      ```typescript
      --- First invocation ---
      In parent node: { foo: 'bar' }
      Entered 'parentNode' a total of 1 times
      Entered 'nodeInSubgraph' a total of 1 times
      Entered humanNode in sub-graph a total of 1 times
      { __interrupt__: [{ value: 'what is your name?', resumable: true, ns: ['parent_node:0b23d72f-aaba-0329-1a59-ca4f3c8bad3b', 'human_node:25df717c-cb80-57b0-7410-44e20aac8f3c'], when: 'during' }] }

      --- Resuming ---
      In parent node: { foo: 'bar' }
      Entered 'parentNode' a total of 2 times
      Entered humanNode in sub-graph a total of 2 times
      Got an answer of 35
      { parent_node: null }
      ```

### Using multiple interrupts

Using multiple interrupts within a **single** node can be helpful for patterns like [validating human input](#validating-human-input). However, using multiple interrupts in the same node can lead to unexpected behavior if not handled carefully.

When a node contains multiple interrupt calls, LangGraph keeps a list of resume values specific to the task executing the node. Whenever execution resumes, it starts at the beginning of the node. For each interrupt encountered, LangGraph checks if a matching value exists in the task's resume list. Matching is **strictly index-based**, so the order of interrupt calls within the node is critical.

To avoid issues, refrain from dynamically changing the node's structure between executions. This includes adding, removing, or reordering interrupt calls, as such changes can result in mismatched indices. These problems often arise from unconventional patterns, such as mutating state via `Command.resume(...).update(SOME_STATE_MUTATION)` or relying on global variables to modify the node's structure dynamically.

??? "Example of incorrect code"

    ```typescript
    import { v4 as uuidv4 } from "uuid";
    import {
      StateGraph,
      MemorySaver,
      START,
      interrupt,
      Command,
      Annotation
    } from "@langchain/langgraph";

    const GraphAnnotation = Annotation.Root({
      name: Annotation<string>(),
      age: Annotation<string>()
    });

    function humanNode(state: typeof GraphAnnotation.State) {
      let name;
      if (!state.name) {
        name = interrupt("what is your name?");
      } else {
        name = "N/A";
      }

      let age;
      if (!state.age) {
        age = interrupt("what is your age?");
      } else {
        age = "N/A";
      }

      console.log(`Name: ${name}. Age: ${age}`);

      return {
        age,
        name,
      };
    }

    const builder = new StateGraph(GraphAnnotation)
      .addNode("human_node", humanNode);
      .addEdge(START, "human_node");

    // A checkpointer must be enabled for interrupts to work!
    const checkpointer = new MemorySaver();

    const graph = builder.compile({ checkpointer });

    const config = {
      configurable: {
        thread_id: uuidv4(),
      }
    };

    for await (const chunk of await graph.stream({ age: undefined, name: undefined }, config)) {
      console.log(chunk);
    }

    for await (const chunk of await graph.stream(
      Command({ resume: "John", update: { name: "foo" } }),
      config
    )) {
      console.log(chunk);
    }
    ```

    ```typescript
    { __interrupt__: [{
      value: 'what is your name?',
      resumable: true,
      ns: ['human_node:3a007ef9-c30d-c357-1ec1-86a1a70d8fba'],
      when: 'during'
    }]}
    Name: N/A. Age: John
    { human_node: { age: 'John', name: 'N/A' } }
    ```

## Additional Resources 📚

- [**Conceptual Guide: Persistence**](persistence.md#replay): Read the persistence guide for more context on replaying.

- [**How to Guides: Human-in-the-loop**](/langgraphjs/how-tos/#human-in-the-loop): Learn how to implement human-in-the-loop workflows in LangGraph.

- [**How to implement multi-turn conversations**](/langgraphjs/how-tos/multi-agent-multi-turn-convo): Learn how to implement multi-turn conversations in LangGraph.

================================================
File: /docs/docs/concepts/breakpoints.md
================================================

# Breakpoints

Breakpoints pause graph execution at specific points and enable stepping through execution step by step. Breakpoints are powered by LangGraph's [**persistence layer**](./persistence.md), which saves the state after each graph step. Breakpoints can also be used to enable [**human-in-the-loop**](./human_in_the_loop.md) workflows, though we recommend using the [`interrupt` function](./human_in_the_loop.md#interrupt) for this purpose.

## Requirements

To use breakpoints, you will need to:

1. [**Specify a checkpointer**](persistence.md#checkpoints) to save the graph state after each step.

2. [**Set breakpoints**](#setting-breakpoints) to specify where execution should pause.

3. **Run the graph** with a [**thread ID**](./persistence.md#threads) to pause execution at the breakpoint.

4. **Resume execution** using `invoke`/`stream` (see [**The `Command` primitive**](./human_in_the_loop.md#the-command-primitive)).

## Setting breakpoints

There are two places where you can set breakpoints:

1. **Before** or **after** a node executes by setting breakpoints at **compile time** or **run time**. We call these [**static breakpoints**](#static-breakpoints).

2. **Inside** a node using the [`NodeInterrupt` error](#nodeinterrupt-error).

### Static breakpoints

Static breakpoints are triggered either **before** or **after** a node executes. You can set static breakpoints by specifying `interruptBefore` and `interruptAfter` at **"compile" time** or **run time**.

=== "Compile time"

    ```typescript
    const graph = graphBuilder.compile({
        interruptBefore: ["nodeA"],
        interruptAfter: ["nodeB", "nodeC"],
        checkpointer: ..., // Specify a checkpointer
    });

    const threadConfig = {
        configurable: {
            thread_id: "someThread"
        }
    };

    // Run the graph until the breakpoint
    await graph.invoke(inputs, threadConfig);

    // Optionally update the graph state based on user input
    await graph.updateState(update, threadConfig);

    // Resume the graph
    await graph.invoke(null, threadConfig);
    ```

=== "Run time"

    ```typescript
    await graph.invoke(
        inputs,
        {
            configurable: { thread_id: "someThread" },
            interruptBefore: ["nodeA"],
            interruptAfter: ["nodeB", "nodeC"]
        }
    );

    const threadConfig = {
        configurable: {
            thread_id: "someThread"
        }
    };

    // Run the graph until the breakpoint
    await graph.invoke(inputs, threadConfig);

    // Optionally update the graph state based on user input
    await graph.updateState(update, threadConfig);

    // Resume the graph
    await graph.invoke(null, threadConfig);
    ```

    !!! note

        You cannot set static breakpoints at runtime for **sub-graphs**.

        If you have a sub-graph, you must set the breakpoints at compilation time.

Static breakpoints can be especially useful for debugging if you want to step through the graph execution one
node at a time or if you want to pause the graph execution at specific nodes.

### `NodeInterrupt` error

We recommend that you [**use the `interrupt` function instead**](#the-interrupt-function) of the `NodeInterrupt` error if you're trying to implement
[human-in-the-loop](./human_in_the_loop.md) workflows. The `interrupt` function is easier to use and more flexible.

??? node "`NodeInterrupt` error"

    The developer can define some *condition* that must be met for a breakpoint to be triggered. This concept of [dynamic breakpoints](./low_level.md#dynamic-breakpoints) is useful when the developer wants to halt the graph under *a particular condition*. This uses a `NodeInterrupt`, which is a special type of error that can be thrown from within a node based upon some condition. As an example, we can define a dynamic breakpoint that triggers when the `input` is longer than 5 characters.

    ```typescript
    function myNode(state: typeof GraphAnnotation.State) {
        if (state.input.length > 5) {
            throw new NodeInterrupt(`Received input that is longer than 5 characters: ${state.input}`);
        }
        return state;
    }
    ```

    Let's assume we run the graph with an input that triggers the dynamic breakpoint and then attempt to resume the graph execution simply by passing in `null` for the input.

    ```typescript
    // Attempt to continue the graph execution with no change to state after we hit the dynamic breakpoint
    for await (const event of await graph.stream(null, threadConfig)) {
        console.log(event);
    }
    ```

    The graph will *interrupt* again because this node will be *re-run* with the same graph state. We need to change the graph state such that the condition that triggers the dynamic breakpoint is no longer met. So, we can simply edit the graph state to an input that meets the condition of our dynamic breakpoint (< 5 characters) and re-run the node.

    ```typescript
    // Update the state to pass the dynamic breakpoint
    await graph.updateState({ input: "foo" }, threadConfig);

    for await (const event of await graph.stream(null, threadConfig)) {
        console.log(event);
    }
    ```

    Alternatively, what if we want to keep our current input and skip the node (`myNode`) that performs the check? To do this, we can simply perform the graph update with `"myNode"` (the node name) as the third positional argument, and pass in `null` for the values. This will make no update to the graph state, but run the update as `myNode`, effectively skipping the node and bypassing the dynamic breakpoint.

    ```typescript
    // This update will skip the node `myNode` altogether
    await graph.updateState(null, threadConfig, "myNode");

    for await (const event of await graph.stream(null, threadConfig)) {
        console.log(event);
    }
    ```

## Additional Resources 📚

- [**Conceptual Guide: Persistence**](persistence.md): Read the persistence guide for more context about persistence.

- [**Conceptual Guide: Human-in-the-loop**](human_in_the_loop.md): Read the human-in-the-loop guide for more context on integrating human feedback into LangGraph applications using breakpoints.

- [**How to View and Update Past Graph State**](/langgraphjs/how-tos/time-travel): Step-by-step instructions for working with graph state that demonstrate the **replay** and **fork** actions.

================================================
File: /docs/docs/concepts/high_level.md
================================================

# Why LangGraph?

LLMs are extremely powerful, particularly when connected to other systems such as a retriever or APIs. This is why many LLM applications use a control flow of steps before and / or after LLM calls. As an example [RAG](https://github.com/langchain-ai/rag-from-scratch) performs retrieval of relevant documents to a question, and passes those documents to an LLM in order to ground the response. Often a control flow of steps before and / or after an LLM is called a "chain." Chains are a popular paradigm for programming with LLMs and offer a high degree of reliability; the same set of steps runs with each chain invocation.

However, we often want LLM systems that can pick their own control flow! This is one definition of an [agent](https://blog.langchain.dev/what-is-an-agent/): an agent is a system that uses an LLM to decide the control flow of an application. Unlike a chain, an agent given an LLM some degree of control over the sequence of steps in the application. Examples of using an LLM to decide the control of an application:

- Using an LLM to route between two potential paths
- Using an LLM to decide which of many tools to call
- Using an LLM to decide whether the generated answer is sufficient or more work is need

There are many different types of [agent architectures](https://blog.langchain.dev/what-is-a-cognitive-architecture/) to consider, which given an LLM varying levels of control. On one extreme, a router allows an LLM to select a single step from a specified set of options and, on the other extreme, a fully autonomous long-running agent may have complete freedom to select any sequence of steps that it wants for a given problem.

![Agent Types](img/agent_types.png)

Several concepts are utilized in many agent architectures:

- [Tool calling](agentic_concepts.md#tool-calling): this is often how LLMs make decisions
- Action taking: often times, the LLMs' outputs are used as the input to an action
- [Memory](agentic_concepts.md#memory): reliable systems need to have knowledge of things that occurred
- [Planning](agentic_concepts.md#planning): planning steps (either explicit or implicit) are useful for ensuring that the LLM, when making decisions, makes them in the highest fidelity way.

## Challenges

In practice, there is often a trade-off between control and reliability. As we give LLMs more control, the application often become less reliable. This can be due to factors such as LLM non-determinism and / or errors in selecting tools (or steps) that the agent uses (takes).

![Agent Challenge](img/challenge.png)

## Core Principles

The motivation of LangGraph is to help bend the curve, preserving higher reliability as we give the agent more control over the application. We'll outline a few specific pillars of LangGraph that make it well suited for building reliable agents.

![Langgraph](img/langgraph.png)

**Controllability**

LangGraph gives the developer a high degree of [control](/langgraphjs/how-tos#controllability) by expressing the flow of the application as a set of nodes and edges. All nodes can access and modify a common state (memory). The control flow of the application can set using edges that connect nodes, either deterministically or via conditional logic.

**Persistence**

LangGraph gives the developer many options for [persisting](/langgraphjs/how-tos#persistence) graph state using short-term or long-term (e.g., via a database) memory.

**Human-in-the-Loop**

The persistence layer enables several different [human-in-the-loop](/langgraphjs/how-tos#human-in-the-loop) interaction patterns with agents; for example, it's possible to pause an agent, review its state, edit it state, and approve a follow-up step.

**Streaming**

LangGraph comes with first class support for [streaming](/langgraphjs/how-tos#streaming), which can expose state to the user (or developer) over the course of agent execution. LangGraph supports streaming of both events ([like a tool call being taken](/langgraphjs/how-tos/stream-updates.ipynb)) as well as of [tokens that an LLM may emit](/langgraphjs/how-tos/streaming-tokens).

## Debugging

Once you've built a graph, you often want to test and debug it. [LangGraph Studio](https://github.com/langchain-ai/langgraph-studio?tab=readme-ov-file) is a specialized IDE for visualization and debugging of LangGraph applications.

![Langgraph Studio](img/lg_studio.png)

## Deployment

Once you have confidence in your LangGraph application, many developers want an easy path to deployment. [LangGraph Cloud](/langgraphjs/cloud) is an opinionated, simple way to deploy LangGraph objects from the LangChain team. Of course, you can also use services like [Express.js](https://expressjs.com/) and call your graph from inside the Express.js server as you see fit.

================================================
File: /docs/docs/concepts/agentic_concepts.md
================================================

# Agent architectures

Many LLM applications implement a particular control flow of steps before and / or after LLM calls. As an example, [RAG](https://github.com/langchain-ai/rag-from-scratch) performs retrieval of relevant documents to a question, and passes those documents to an LLM in order to ground the model's response.

Instead of hard-coding a fixed control flow, we sometimes want LLM systems that can pick its own control flow to solve more complex problems! This is one definition of an [agent](https://blog.langchain.dev/what-is-an-agent/): _an agent is a system that uses an LLM to decide the control flow of an application._ There are many ways that an LLM can control application:

- An LLM can route between two potential paths
- An LLM can decide which of many tools to call
- An LLM can decide whether the generated answer is sufficient or more work is needed

As a result, there are many different types of [agent architectures](https://blog.langchain.dev/what-is-a-cognitive-architecture/), which given an LLM varying levels of control.

![Agent Types](img/agent_types.png)

## Router

A router allows an LLM to select a single step from a specified set of options. This is an agent architecture that exhibits a relatively limited level of control because the LLM usually governs a single decision and can return a narrow set of outputs. Routers typically employ a few different concepts to achieve this.

### Structured Output

Structured outputs with LLMs work by providing a specific format or schema that the LLM should follow in its response. This is similar to tool calling, but more general. While tool calling typically involves selecting and using predefined functions, structured outputs can be used for any type of formatted response. Common methods to achieve structured outputs include:

1. Prompt engineering: Instructing the LLM to respond in a specific format.
2. Output parsers: Using post-processing to extract structured data from LLM responses.
3. Tool calling: Leveraging built-in tool calling capabilities of some LLMs to generate structured outputs.

Structured outputs are crucial for routing as they ensure the LLM's decision can be reliably interpreted and acted upon by the system. Learn more about [structured outputs in this how-to guide](https://js.langchain.com/docs/how_to/structured_output/).

## Tool calling agent

While a router allows an LLM to make a single decision, more complex agent architectures expand the LLM's control in two key ways:

1. Multi-step decision making: The LLM can control a sequence of decisions rather than just one.
2. Tool access: The LLM can choose from and use a variety of tools to accomplish tasks.

[ReAct](https://arxiv.org/abs/2210.03629) is a popular general purpose agent architecture that combines these expansions, integrating three core concepts.

1. `Tool calling`: Allowing the LLM to select and use various tools as needed.
2. `Memory`: Enabling the agent to retain and use information from previous steps.
3. `Planning`: Empowering the LLM to create and follow multi-step plans to achieve goals.

This architecture allows for more complex and flexible agent behaviors, going beyond simple routing to enable dynamic problem-solving across multiple steps. You can use it with [`createReactAgent`](/langgraphjs/reference/functions/langgraph_prebuilt.createReactAgent.html).

### Tool calling

Tools are useful whenever you want an agent to interact with external systems. External systems (e.g., APIs) often require a particular input schema or payload, rather than natural language. When we bind an API, for example, as a tool we given the model awareness of the required input schema. The model will choose to call a tool based upon the natural language input from the user and it will return an output that adheres to the tool's schema.

[Many LLM providers support tool calling](https://js.langchain.com/docs/integrations/chat/) and [tool calling interface](https://blog.langchain.dev/improving-core-tool-interfaces-and-docs-in-langchain/) in LangChain is simple: you can define a tool schema, and pass it into `ChatModel.bindTools([tool])`.

![Tools](img/tool_call.png)

### Memory

Memory is crucial for agents, enabling them to retain and utilize information across multiple steps of problem-solving. It operates on different scales:

1. Short-term memory: Allows the agent to access information acquired during earlier steps in a sequence.
2. Long-term memory: Enables the agent to recall information from previous interactions, such as past messages in a conversation.

LangGraph provides full control over memory implementation:

- [`State`](./low_level.md#state): User-defined schema specifying the exact structure of memory to retain.
- [`Checkpointers`](./persistence.md): Mechanism to store state at every step across different interactions.

This flexible approach allows you to tailor the memory system to your specific agent architecture needs. For a practical guide on adding memory to your graph, see [this tutorial](/langgraphjs/how-tos/persistence).

Effective memory management enhances an agent's ability to maintain context, learn from past experiences, and make more informed decisions over time.

### Planning

In the ReAct architecture, an LLM is called repeatedly in a while-loop. At each step the agent decides which tools to call, and what the inputs to those tools should be. Those tools are then executed, and the outputs are fed back into the LLM as observations. The while-loop terminates when the agent decides it is not worth calling any more tools.

### ReAct implementation

There are several differences between this paper and the pre-built [`createReactAgent`](/langgraphjs/reference/functions/langgraph_prebuilt.createReactAgent.html) implementation:

- First, we use [tool-calling](#tool-calling) to have LLMs call tools, whereas the paper used prompting + parsing of raw output. This is because tool calling did not exist when the paper was written, but is generally better and more reliable.
- Second, we use messages to prompt the LLM, whereas the paper used string formatting. This is because at the time of writing, LLMs didn't even expose a message-based interface, whereas now that's the only interface they expose.
- Third, the paper required all inputs to the tools to be a single string. This was largely due to LLMs not being super capable at the time, and only really being able to generate a single input. Our implementation allows for using tools that require multiple inputs.
- Fourth, the paper only looks at calling a single tool at the time, largely due to limitations in LLMs performance at the time. Our implementation allows for calling multiple tools at a time.
- Finally, the paper asked the LLM to explicitly generate a "Thought" step before deciding which tools to call. This is the "Reasoning" part of "ReAct". Our implementation does not do this by default, largely because LLMs have gotten much better and that is not as necessary. Of course, if you wish to prompt it do so, you certainly can.

## Custom agent architectures

While routers and tool-calling agents (like ReAct) are common, [customizing agent architectures](https://blog.langchain.dev/why-you-should-outsource-your-agentic-infrastructure-but-own-your-cognitive-architecture/) often leads to better performance for specific tasks. LangGraph offers several powerful features for building tailored agent systems:

### Human-in-the-loop

Human involvement can significantly enhance agent reliability, especially for sensitive tasks. This can involve:

- Approving specific actions
- Providing feedback to update the agent's state
- Offering guidance in complex decision-making processes

Human-in-the-loop patterns are crucial when full automation isn't feasible or desirable. Learn more in our [human-in-the-loop guide](./human_in_the_loop.md).

### Parallelization

Parallel processing is vital for efficient multi-agent systems and complex tasks. LangGraph supports parallelization through its [Send](./low_level.md#send) API, enabling:

- Concurrent processing of multiple states
- Implementation of map-reduce-like operations
- Efficient handling of independent subtasks

For practical implementation, see our [map-reduce tutorial](/langgraphjs/how-tos/map-reduce/).

### Subgraphs

[Subgraphs](./low_level.md#subgraphs) are essential for managing complex agent architectures, particularly in [multi-agent systems](./multi_agent.md). They allow:

- Isolated state management for individual agents
- Hierarchical organization of agent teams
- Controlled communication between agents and the main system

Subgraphs communicate with the parent graph through overlapping keys in the state schema. This enables flexible, modular agent design. For implementation details, refer to our [subgraph how-to guide](../how-tos/subgraph.ipynb).

### Reflection

Reflection mechanisms can significantly improve agent reliability by:

1. Evaluating task completion and correctness
2. Providing feedback for iterative improvement
3. Enabling self-correction and learning

While often LLM-based, reflection can also use deterministic methods. For instance, in coding tasks, compilation errors can serve as feedback. This approach is demonstrated in [this video using LangGraph for self-corrective code generation](https://www.youtube.com/watch?v=MvNdgmM7uyc).

By leveraging these features, LangGraph enables the creation of sophisticated, task-specific agent architectures that can handle complex workflows, collaborate effectively, and continuously improve their performance.

================================================
File: /docs/docs/concepts/langgraph_platform.md
================================================

# LangGraph Platform

## Overview

LangGraph Platform is a commercial solution for deploying agentic applications to production, built on the open-source [LangGraph framework](./high_level.md).

The LangGraph Platform consists of several components that work together to support the development, deployment, debugging, and monitoring of LangGraph applications:

- [LangGraph Server](./langgraph_server.md): The server defines an opinionated API and architecture that incorporates best practices for deploying agentic applications, allowing you to focus on building your agent logic rather than developing server infrastructure.
- [LangGraph Studio](./langgraph_studio.md): LangGraph Studio is a specialized IDE that can connect to a LangGraph Server to enable visualization, interaction, and debugging of the application locally.
- [LangGraph CLI](./langgraph_cli.md): LangGraph CLI is a command-line interface that helps to interact with a local LangGraph
- [Python/JS SDK](./sdk.md): The Python/JS SDK provides a programmatic way to interact with deployed LangGraph Applications.
- [Remote Graph](../how-tos/use-remote-graph.md): A RemoteGraph allows you to interact with any deployed LangGraph application as though it were running locally.

![](img/lg_platform.png)

The LangGraph Platform offers a few different deployment options described in the [deployment options guide](./deployment_options.md).

## Why Use LangGraph Platform?

LangGraph Platform is designed to make deploying agentic applications seamless and production-ready.

For simpler applications, deploying a LangGraph agent can be as straightforward as using your own server logic—for example, setting up a FastAPI endpoint and invoking LangGraph directly.

### Option 1: Deploying with Custom Server Logic

For basic LangGraph applications, you may choose to handle deployment using your custom server infrastructure. Setting up endpoints with frameworks like [Hono](https://hono.dev/) allows you to quickly deploy and run LangGraph as you would any other JavaScript application:

```ts
// index.ts

import { Hono } from "hono";
import { StateGraph } from "@langchain/langgraph";

const graph = new StateGraph(...)

const app = new Hono();

app.get("/foo", (c) => {
  const res = await graph.invoke(...);
  return c.json(res);
});
```

This approach works well for simple applications with straightforward needs and provides you with full control over the deployment setup. For example, you might use this for a single-assistant application that doesn’t require long-running sessions or persistent memory.

### Option 2: Leveraging LangGraph Platform for Complex Deployments

As your applications scale or add complex features, the deployment requirements often evolve. Running an application with more nodes, longer processing times, or a need for persistent memory can introduce challenges that quickly become time-consuming and difficult to manage manually. [LangGraph Platform](./langgraph_platform.md) is built to handle these challenges seamlessly, allowing you to focus on agent logic rather than server infrastructure.

Here are some common issues that arise in complex deployments, which LangGraph Platform addresses:

- **[Streaming Support](streaming.md)**: As agents grow more sophisticated, they often benefit from streaming both token outputs and intermediate states back to the user. Without this, users are left waiting for potentially long operations with no feedback. LangGraph Server provides [multiple streaming modes](streaming.md) optimized for various application needs.

- **Background Runs**: For agents that take longer to process (e.g., hours), maintaining an open connection can be impractical. The LangGraph Server supports launching agent runs in the background and provides both polling endpoints and webhooks to monitor run status effectively.

- **Support for long runs**: Vanilla server setups often encounter timeouts or disruptions when handling requests that take a long time to complete. LangGraph Server’s API provides robust support for these tasks by sending regular heartbeat signals, preventing unexpected connection closures during prolonged processes.

- **Handling Burstiness**: Certain applications, especially those with real-time user interaction, may experience "bursty" request loads where numerous requests hit the server simultaneously. LangGraph Server includes a task queue, ensuring requests are handled consistently without loss, even under heavy loads.

- **[Double Texting](double_texting.md)**: In user-driven applications, it’s common for users to send multiple messages rapidly. This “double texting” can disrupt agent flows if not handled properly. LangGraph Server offers built-in strategies to address and manage such interactions.

- **[Checkpointers and Memory Management](persistence.md#checkpoints)**: For agents needing persistence (e.g., conversation memory), deploying a robust storage solution can be complex. LangGraph Platform includes optimized [checkpointers](persistence.md#checkpoints) and a [memory store](persistence.md#memory-store), managing state across sessions without the need for custom solutions.

- **[Human-in-the-loop Support](human_in_the_loop.md)**: In many applications, users require a way to intervene in agent processes. LangGraph Server provides specialized endpoints for human-in-the-loop scenarios, simplifying the integration of manual oversight into agent workflows.

By using LangGraph Platform, you gain access to a robust, scalable deployment solution that mitigates these challenges, saving you the effort of implementing and maintaining them manually. This allows you to focus more on building effective agent behavior and less on solving deployment infrastructure issues.

================================================
File: /docs/docs/concepts/plans.md
================================================

# LangGraph Platform Plans

## Overview

LangGraph Platform is a commercial solution for deploying agentic applications in production.
There are three different plans for using it.

- **Developer**: All [LangSmith](https://smith.langchain.com/) users have access to this plan. You can sign up for this plan simply by creating a LangSmith account. This gives you access to the [Self-Hosted Lite](./deployment_options.md#self-hosted-lite) deployment option.
- **Plus**: All [LangSmith](https://smith.langchain.com/) users with a [Plus account](https://docs.smith.langchain.com/administration/pricing) have access to this plan. You can sign up for this plan simply by upgrading your LangSmith account to the Plus plan type. This gives you access to the [Cloud](./deployment_options.md#cloud-saas) deployment option.
- **Enterprise**: This is separate from LangSmith plans. You can sign up for this plan by contacting sales@langchain.dev. This gives you access to all deployment options: [Cloud](./deployment_options.md#cloud-saas), [Bring-Your-Own-Cloud](./deployment_options.md#bring-your-own-cloud), and [Self Hosted Enterprise](./deployment_options.md#self-hosted-enterprise)

## Plan Details

|                                                                   | Developer                                   | Plus                                                  | Enterprise                                          |
| ----------------------------------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------- |
| Deployment Options                                                | Self-Hosted Lite                            | Cloud                                                 | Self-Hosted Enterprise, Cloud, Bring-Your-Own-Cloud |
| Usage                                                             | Free, limited to 1M nodes executed per year | Free while in Beta, will be charged per node executed | Custom                                              |
| APIs for retrieving and updating state and conversational history | ✅                                          | ✅                                                    | ✅                                                  |
| APIs for retrieving and updating long-term memory                 | ✅                                          | ✅                                                    | ✅                                                  |
| Horizontally scalable task queues and servers                     | ✅                                          | ✅                                                    | ✅                                                  |
| Real-time streaming of outputs and intermediate steps             | ✅                                          | ✅                                                    | ✅                                                  |
| Assistants API (configurable templates for LangGraph apps)        | ✅                                          | ✅                                                    | ✅                                                  |
| Cron scheduling                                                   | --                                          | ✅                                                    | ✅                                                  |
| LangGraph Studio for prototyping                                  | Desktop only                                | Coming Soon!                                          | Coming Soon!                                        |
| Authentication & authorization to call the LangGraph APIs         | --                                          | Coming Soon!                                          | Coming Soon!                                        |
| Smart caching to reduce traffic to LLM API                        | --                                          | Coming Soon!                                          | Coming Soon!                                        |
| Publish/subscribe API for state                                   | --                                          | Coming Soon!                                          | Coming Soon!                                        |
| Scheduling prioritization                                         | --                                          | Coming Soon!                                          | Coming Soon!                                        |

Please see the [LangGraph Platform Pricing](https://www.langchain.com/langgraph-platform-pricing) for information on pricing.

## Related

For more information, please see:

- [Deployment Options conceptual guide](./deployment_options.md)
- [LangGraph Platform Pricing](https://www.langchain.com/langgraph-platform-pricing)
- [LangSmith Plans](https://docs.smith.langchain.com/administration/pricing)

================================================
File: /docs/docs/concepts/time-travel.md
================================================

# Time Travel ⏱️

!!! note "Prerequisites"

    This guide assumes that you are familiar with LangGraph's checkpoints and states. If not, please review the [persistence](./persistence.md) concept first.

When working with non-deterministic systems that make model-based decisions (e.g., agents powered by LLMs), it can be useful to examine their decision-making process in detail:

1. 🤔 **Understand Reasoning**: Analyze the steps that led to a successful result.

2. 🐞 **Debug Mistakes**: Identify where and why errors occurred.

3. 🔍 **Explore Alternatives**: Test different paths to uncover better solutions.

We call these debugging techniques **Time Travel**, composed of two key actions: [**Replaying**](#replaying) 🔁 and [**Forking**](#forking) 🔀.

## Replaying

![](./img/human_in_the_loop/replay.png)

Replaying allows us to revisit and reproduce an agent's past actions. This can be done either from the current state (or checkpoint) of the graph or from a specific checkpoint.

To replay from the current state, simply pass `null` as the input along with a `threadConfig`:

```typescript
const threadConfig = { configurable: { thread_id: "1" }, streamMode: "values" };

for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

To replay actions from a specific checkpoint, start by retrieving all checkpoints for the thread:

```typescript
const allCheckpoints = [];

for await (const state of graph.getStateHistory(threadConfig)) {
  allCheckpoints.push(state);
}
```

Each checkpoint has a unique ID. After identifying the desired checkpoint, for instance, `xyz`, include its ID in the configuration:

```typescript
const threadConfig = {
  configurable: { thread_id: "1", checkpoint_id: "xyz" },
  streamMode: "values",
};

for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

The graph efficiently replays previously executed nodes instead of re-executing them, leveraging its awareness of prior checkpoint executions.

## Forking

![](./img/human_in_the_loop/forking.png)

Forking allows you to revisit an agent's past actions and explore alternative paths within the graph.

To edit a specific checkpoint, such as `xyz`, provide its `checkpoint_id` when updating the graph's state:

```typescript
const threadConfig = { configurable: { thread_id: "1", checkpoint_id: "xyz" } };

graph.updateState(threadConfig, { state: "updated state" });
```

This creates a new forked checkpoint, xyz-fork, from which you can continue running the graph:

```typescript
const threadConfig = {
  configurable: { thread_id: "1", checkpoint_id: "xyz-fork" },
  streamMode: "values",
};

for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

## Additional Resources 📚

- [**Conceptual Guide: Persistence**](https://langchain-ai.github.io/langgraphjs/concepts/persistence/#replay): Read the persistence guide for more context on replaying.

- [**How to View and Update Past Graph State**](/langgraphjs/how-tos/time-travel): Step-by-step instructions for working with graph state that demonstrate the **replay** and **fork** actions.

================================================
File: /docs/docs/concepts/deployment_options.md
================================================

# Deployment Options

!!! info "Prerequisites"

    - [LangGraph Platform](./langgraph_platform.md)
    - [LangGraph Server](./langgraph_server.md)
    - [LangGraph Platform Plans](./plans.md)

## Overview

There are 4 main options for deploying with the LangGraph Platform:

1. **[Self-Hosted Lite](#self-hosted-lite)**: Available for all plans.

2. **[Self-Hosted Enterprise](#self-hosted-enterprise)**: Available for the **Enterprise** plan.

3. **[Cloud SaaS](#cloud-saas)**: Available for **Plus** and **Enterprise** plans.

4. **[Bring Your Own Cloud](#bring-your-own-cloud)**: Available only for **Enterprise** plans and **only on AWS**.

Please see the [LangGraph Platform Plans](./plans.md) for more information on the different plans.

The guide below will explain the differences between the deployment options.

## Self-Hosted Enterprise

!!! important

    The Self-Hosted Enterprise version is only available for the **Enterprise** plan.

With a Self-Hosted Enterprise deployment, you are responsible for managing the infrastructure, including setting up and maintaining required databases and Redis instances.

You’ll build a Docker image using the [LangGraph CLI](./langgraph_cli.md), which can then be deployed on your own infrastructure.

For more information, please see:

- [Self-Hosted conceptual guide](./self_hosted.md)
- [Self-Hosted Deployment how-to guide](../how-tos/deploy-self-hosted.md)

## Self-Hosted Lite

!!! important

    The Self-Hosted Lite version is available for all plans.

The Self-Hosted Lite deployment option is a free (up to 1 million nodes executed), limited version of LangGraph Platform that you can run locally or in a self-hosted manner.

With a Self-Hosted Lite deployment, you are responsible for managing the infrastructure, including setting up and maintaining required databases and Redis instances.

You’ll build a Docker image using the [LangGraph CLI](./langgraph_cli.md), which can then be deployed on your own infrastructure.

For more information, please see:

- [Self-Hosted conceptual guide](./self_hosted.md)
- [Self-Hosted Deployment how-to guide](https://langchain-ai.github.io/langgraph/how-tos/deploy-self-hosted/)

## Cloud SaaS

!!! important

    The Cloud SaaS version of LangGraph Platform is only available for **Plus** and **Enterprise** plans.

The [Cloud SaaS](./langgraph_cloud.md) version of LangGraph Platform is hosted as part of [LangSmith](https://smith.langchain.com/).

The Cloud SaaS version of LangGraph Platform provides a simple way to deploy and manage your LangGraph applications.

This deployment option provides an integration with GitHub, allowing you to deploy code from any of your repositories on GitHub.

For more information, please see:

- [Cloud SaaS Conceptual Guide](./langgraph_cloud.md)
- [How to deploy to Cloud SaaS](https://langchain-ai.github.io/langgraph/cloud/deployment/cloud.md)

## Bring Your Own Cloud

!!! important

    The Bring Your Own Cloud version of LangGraph Platform is only available for **Enterprise** plans.

This combines the best of both worlds for Cloud and Self-Hosted. We manage the infrastructure, so you don't have to, but the infrastructure all runs within your cloud. This is currently only available on AWS.

For more information please see:

- [Bring Your Own Cloud Conceptual Guide](./bring_your_own_cloud.md)

## Related

For more information please see:

- [LangGraph Platform Plans](./plans.md)
- [LangGraph Platform Pricing](https://www.langchain.com/langgraph-platform-pricing)
- [Deployment how-to guides](../how-tos/index.md#deployment)

================================================
File: /docs/docs/concepts/langgraph_studio.md
================================================

# LangGraph Studio

!!! info "Prerequisites"

    - [LangGraph Platform](./langgraph_platform.md)
    - [LangGraph Server](./langgraph_server.md)

LangGraph Studio offers a new way to develop LLM applications by providing a specialized agent IDE that enables visualization, interaction, and debugging of complex agentic applications.

With visual graphs and the ability to edit state, you can better understand agent workflows and iterate faster. LangGraph Studio integrates with LangSmith allowing you to collaborate with teammates to debug failure modes.

![](img/lg_studio.png)

## Features

The key features of LangGraph Studio are:

- Visualizes your graph
- Test your graph by running it from the UI
- Debug your agent by [modifying its state and rerunning](human_in_the_loop.md)
- Create and manage [assistants](assistants.md)
- View and manage [threads](persistence.md#threads)
- View and manage [long term memory](memory.md)
- Add node input/outputs to [LangSmith](https://smith.langchain.com/) datasets for testing

## Types

### Desktop app

LangGraph Studio is available as a [desktop app](https://studio.langchain.com/) for MacOS users.

While in Beta, LangGraph Studio is available for free to all [LangSmith](https://smith.langchain.com/) users on any plan tier.

### Cloud studio

If you have deployed your LangGraph application on LangGraph Platform (Cloud), you can access the studio as part of that

## Studio FAQs

### Why is my project failing to start?

There are a few reasons that your project might fail to start, here are some of the most common ones.

#### Docker issues (desktop only)

LangGraph Studio (desktop) requires Docker Desktop version 4.24 or higher. Please make sure you have a version of Docker installed that satisfies that requirement and also make sure you have the Docker Desktop app up and running before trying to use LangGraph Studio. In addition, make sure you have docker-compose updated to version 2.22.0 or higher.

#### Configuration or environment issues

Another reason your project might fail to start is because your configuration file is defined incorrectly, or you are missing required environment variables.

### How does interrupt work?

When you select the `Interrupts` dropdown and select a node to interrupt the graph will pause execution before and after (unless the node goes straight to `END`) that node has run. This means that you will be able to both edit the state before the node is ran and the state after the node has ran. This is intended to allow developers more fine-grained control over the behavior of a node and make it easier to observe how the node is behaving. You will not be able to edit the state after the node has ran if the node is the final node in the graph.

### How do I reload the app? (desktop only)

If you would like to reload the app, don't use Command+R as you might normally do. Instead, close and reopen the app for a full refresh.

### How does automatic rebuilding work? (desktop only)

One of the key features of LangGraph Studio is that it automatically rebuilds your image when you change the source code. This allows for a super fast development and testing cycle which makes it easy to iterate on your graph. There are two different ways that LangGraph rebuilds your image: either by editing the image or completely rebuilding it.

#### Rebuilds from source code changes

If you modified the source code only (no configuration or dependency changes!) then the image does not require a full rebuild, and LangGraph Studio will only update the relevant parts. The UI status in the bottom left will switch from `Online` to `Stopping` temporarily while the image gets edited. The logs will be shown as this process is happening, and after the image has been edited the status will change back to `Online` and you will be able to run your graph with the modified code!

#### Rebuilds from configuration or dependency changes

If you edit your graph configuration file (`langgraph.json`) or the dependencies (either `pyproject.toml` or `requirements.txt`) then the entire image will be rebuilt. This will cause the UI to switch away from the graph view and start showing the logs of the new image building process. This can take a minute or two, and once it is done your updated image will be ready to use!

### Why is my graph taking so long to startup? (desktop only)

The LangGraph Studio interacts with a local LangGraph API server. To stay aligned with ongoing updates, the LangGraph API requires regular rebuilding. As a result, you may occasionally experience slight delays when starting up your project.

## Why are extra edges showing up in my graph?

If you don't define your conditional edges carefully, you might notice extra edges appearing in your graph. This is because without proper definition, LangGraph Studio assumes the conditional edge could access all other nodes. In order for this to not be the case, you need to be explicit about how you define the nodes the conditional edge routes to. There are two ways you can do this:

### Solution 1: Include a path map

The first way to solve this is to add path maps to your conditional edges. A path map is just a dictionary or array that maps the possible outputs of your router function with the names of the nodes that each output corresponds to. The path map is passed as the third argument to the `add_conditional_edges` function like so:

=== "Python"

    ```python
    graph.add_conditional_edges("node_a", routing_function, {True: "node_b", False: "node_c"})
    ```

=== "Javascript"

    ```ts
    graph.addConditionalEdges("node_a", routingFunction, { foo: "node_b", bar: "node_c" });
    ```

In this case, the routing function returns either True or False, which map to `node_b` and `node_c` respectively.

### Solution 2: Update the typing of the router (Python only)

Instead of passing a path map, you can also be explicit about the typing of your routing function by specifying the nodes it can map to using the `Literal` python definition. Here is an example of how to define a routing function in that way:

```python
def routing_function(state: GraphState) -> Literal["node_b","node_c"]:
    if state['some_condition'] == True:
        return "node_b"
    else:
        return "node_c"
```

## Related

For more information please see the following:

- [LangGraph Studio how-to guides](../how-tos/index.md#langgraph-studio)

================================================
File: /docs/docs/concepts/double_texting.md
================================================

# Double Texting

!!! info "Prerequisites" - [LangGraph Server](./langgraph_server.md)

Many times users might interact with your graph in unintended ways.
For instance, a user may send one message and before the graph has finished running send a second message.
More generally, users may invoke the graph a second time before the first run has finished.
We call this "double texting".

Currently, LangGraph only addresses this as part of [LangGraph Platform](langgraph_platform.md), not in the open source.
The reason for this is that in order to handle this we need to know how the graph is deployed, and since LangGraph Platform deals with deployment the logic needs to live there.
If you do not want to use LangGraph Platform, we describe the options we have implemented in detail below.

![](img/double_texting.png)

## Reject

This is the simplest option, this just rejects any follow up runs and does not allow double texting.
See the [how-to guide](https://langchain-ai.github.io/langgraph/cloud/how-tos/reject_concurrent) for configuring the reject double text option.

## Enqueue

This is a relatively simple option which continues the first run until it completes the whole run, then sends the new input as a separate run.
See the [how-to guide](https://langchain-ai.github.io/langgraph/cloud/how-tos/enqueue_concurrent) for configuring the enqueue double text option.

## Interrupt

This option interrupts the current execution but saves all the work done up until that point.
It then inserts the user input and continues from there.

If you enable this option, your graph should be able to handle weird edge cases that may arise.
For example, you could have called a tool but not yet gotten back a result from running that tool.
You may need to remove that tool call in order to not have a dangling tool call.

See the [how-to guide](https://langchain-ai.github.io/langgraph/cloud/how-tos/interrupt_concurrent) for configuring the interrupt double text option.

## Rollback

This option rolls back all work done up until that point.
It then sends the user input in, basically as if it just followed the original run input.

This may create some weird states - for example, you may have two `User` messages in a row, with no `Asssitant` message in between them.

You will need to make sure the LLM you are calling can handle that, or combine those into a single `User` message.

See the [how-to guide](https://langchain-ai.github.io/langgraph/cloud/how-tos/rollback_concurrent) for configuring the rollback double text option.

================================================
File: /docs/docs/concepts/langgraph_cli.md
================================================

# LangGraph CLI

!!! info "Prerequisites" - [LangGraph Platform](./langgraph_platform.md) - [LangGraph Server](./langgraph_server.md)

The LangGraph CLI is a multi-platform command-line tool for building and running the [LangGraph API server](./langgraph_server.md) locally. This offers an alternative to the [LangGraph Studio desktop app](./langgraph_studio.md) for developing and testing agents across all major operating systems (Linux, Windows, MacOS). The resulting server includes all API endpoints for your graph's runs, threads, assistants, etc. as well as the other services required to run your agent, including a managed database for checkpointing and storage.

## Installation

The LangGraph CLI can be installed via Homebrew (on macOS) or pip:

=== "Homebrew"
`bash
    brew install langgraph-cli
    `

=== "pip"
`bash
    pip install langgraph-cli
    `

## Commands

The CLI provides the following core functionality:

### `build`

The `langgraph build` command builds a Docker image for the [LangGraph API server](./langgraph_server.md) that can be directly deployed.

### `up`

The `langgraph up` command starts an instance of the [LangGraph API server](./langgraph_server.md) locally. This requires docker to be installed and running locally. It also requires a LangSmith API key for local development or a license key for production use.

The server includes all API endpoints for your graph's runs, threads, assistants, etc. as well as the other services required to run your agent, including a managed database for checkpointing and storage.

### `dockerfile`

The `langgraph dockerfile` command generates a [Dockerfile](https://docs.docker.com/reference/dockerfile/) that can be used to build images for and deploy instances of the [LangGraph API server](./langgraph_server.md). This is useful if you want to further customize the dockerfile or deploy in a more custom way.

## Related

- [LangGraph CLI API Reference](https://langchain-ai.github.io/langgraph/cloud/reference/cli/)

================================================
File: /docs/docs/concepts/assistants.md
================================================

# Assistants

!!! info "Prerequisites"

    - [LangGraph Server](./langgraph_server.md)

When building agents, it is fairly common to make rapid changes that _do not_ alter the graph logic. For example, simply changing prompts or the LLM selection can have significant impacts on the behavior of the agents. Assistants offer an easy way to make and save these types of changes to agent configuration. This can have at least two use-cases:

- Assistants give developers a quick and easy way to modify and version agents for experimentation.
- Assistants can be modified via LangGraph Studio, offering a no-code way to configure agents (e.g., for business users).

Assistants build off the concept of ["configuration"](low_level.md#configuration).
While ["configuration"](low_level.md#configuration) is available in the open source LangGraph library as well, assistants are only present in [LangGraph Platform](langgraph_platform.md).
This is because Assistants are tightly coupled to your deployed graph, and so we can only make them available when we are also deploying the graphs.

## Configuring Assistants

In practice, an assistant is just an _instance_ of a graph with a specific configuration. Because of this, multiple assistants can reference the same graph but can contain different configurations, such as prompts, models, and other graph configuration options. The LangGraph Cloud API provides several endpoints for creating and managing assistants. See [this how-to](https://langchain-ai.github.io/langgraph/cloud/how-tos/configuration_cloud.md) for more details on how to create assistants.

## Versioning Assistants

Once you've created an assistant, you can save and version it to track changes to the configuration over time. You can think about this at three levels:

1. The graph lays out the general agent application logic
2. The agent configuration options represent parameters that can be changed
3. Assistant versions save and track specific settings of the agent configuration options

For example, let's imagine you have a general writing agent. You have created a general graph architecture that works well for writing. However, there are different types of writing, e.g. blogs vs tweets. In order to get the best performance on each use case, you need to make some minor changes to the models and prompts used. In this setup, you could create an assistant for each use case - one for blog writing and one for tweeting. These would share the same graph structure, but they may use different models and different prompts. Read [this how-to](https://langchain-ai.github.io/langgraph/cloud/how-tos/assistant_versioning.md) to learn how you can use assistant versioning through both the [Studio](https://langchain-ai.github.io/langgraph/cloud/how-tos/index.md/#langgraph-studio) and the SDK.

![assistant versions](img/assistants.png)

## Resources

For more information on assistants, see the following resources:

- [Assistants how-to guides](../how-tos/index.md#assistants)

================================================
File: /docs/docs/concepts/v0-human-in-the-loop.md
================================================

# Human-in-the-loop

Human-in-the-loop (or "on-the-loop") enhances agent capabilities through several common user interaction patterns.

Common interaction patterns include:

(1) `Approval` - We can interrupt our agent, surface the current state to a user, and allow the user to accept an action.

(2) `Editing` - We can interrupt our agent, surface the current state to a user, and allow the user to edit the agent state.

(3) `Input` - We can explicitly create a graph node to collect human input and pass that input directly to the agent state.

Use-cases for these interaction patterns include:

(1) `Reviewing tool calls` - We can interrupt an agent to review and edit the results of tool calls.

(2) `Time Travel` - We can manually re-play and / or fork past actions of an agent.

## Persistence

All of these interaction patterns are enabled by LangGraph's built-in [persistence](/langgraphjs/concepts/persistence) layer, which will write a checkpoint of the graph state at each step. Persistence allows the graph to stop so that a human can review and / or edit the current state of the graph and then resume with the human's input.

### Breakpoints

Adding a [breakpoint](/langgraphjs/concepts/low_level#breakpoints) at a specific location in the graph flow is one way to enable human-in-the-loop. In this case, the developer knows _where_ in the workflow human input is needed and simply places a breakpoint prior to or following that particular graph node.

Here, we compile our graph with a checkpointer and a breakpoint at the node we want to interrupt before, `step_for_human_in_the_loop`. We then perform one of the above interaction patterns, which will create a new checkpoint if a human edits the graph state. The new checkpoint is saved to the thread and we can resume the graph execution from there by passing in `null` as the input.

```typescript
// Compile our graph with a checkpointer and a breakpoint before "step_for_human_in_the_loop"
const graph = builder.compile({
  checkpointer,
  interruptBefore: ["step_for_human_in_the_loop"],
});

// Run the graph up to the breakpoint
const threadConfig = {
  configurable: { thread_id: "1" },
  streamMode: "values" as const,
};
for await (const event of await graph.stream(inputs, threadConfig)) {
  console.log(event);
}

// Perform some action that requires human in the loop

// Continue the graph execution from the current checkpoint
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

### Dynamic Breakpoints

Alternatively, the developer can define some _condition_ that must be met for a breakpoint to be triggered. This concept of [dynamic breakpoints](/langgraphjs/concepts/low_level#dynamic-breakpoints) is useful when the developer wants to halt the graph under _a particular condition_. This uses a [`NodeInterrupt`](/langgraphjs/reference/classes/langgraph.NodeInterrupt.html), which is a special type of error that can be raised from within a node based upon some condition. As an example, we can define a dynamic breakpoint that triggers when the `input` is longer than 5 characters.

```typescript
function myNode(
  state: typeof GraphAnnotation.State
): typeof GraphAnnotation.State {
  if (state.input.length > 5) {
    throw new NodeInterrupt(
      `Received input that is longer than 5 characters: ${state["input"]}`
    );
  }
  return state;
}
```

Let's assume we run the graph with an input that triggers the dynamic breakpoint and then attempt to resume the graph execution simply by passing in `null` for the input.

```typescript
// Attempt to continue the graph execution with no change to state after we hit the dynamic breakpoint
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

The graph will _interrupt_ again because this node will be _re-run_ with the same graph state. We need to change the graph state such that the condition that triggers the dynamic breakpoint is no longer met. So, we can simply edit the graph state to an input that meets the condition of our dynamic breakpoint (< 5 characters) and re-run the node.

```typescript
// Update the state to pass the dynamic breakpoint
await graph.updateState(threadConfig, { input: "foo" });
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

Alternatively, what if we want to keep our current input and skip the node (`myNode`) that performs the check? To do this, we can simply perform the graph update with `"myNode"` as the third positional argument, and pass in `null` for the values. This will make no update to the graph state, but run the update as `myNode`, effectively skipping the node and bypassing the dynamic breakpoint.

```typescript
// This update will skip the node `myNode` altogether
await graph.updateState(threadConfig, null, "myNode");
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

See [our guide](/langgraphjs/how-tos/dynamic_breakpoints) for a detailed how-to on doing this!

## Interaction Patterns

### Approval

![](./img/human_in_the_loop/approval.png)

Sometimes we want to approve certain steps in our agent's execution.

We can interrupt our agent at a [breakpoint](/langgraphjs/concepts/low_level#breakpoints) prior to the step that we want to approve.

This is generally recommended for sensitive actions (e.g., using external APIs or writing to a database).

With persistence, we can surface the current agent state as well as the next step to a user for review and approval.

If approved, the graph resumes execution from the last saved checkpoint, which is saved to the thread:

```typescript
// Compile our graph with a checkpointer and a breakpoint before the step to approve
const graph = builder.compile({ checkpointer, interruptBefore: ["node_2"] });

// Run the graph up to the breakpoint
for await (const event of await graph.stream(inputs, threadConfig)) {
  console.log(event);
}

// ... Get human approval ...

// If approved, continue the graph execution from the last saved checkpoint
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

See [our guide](/langgraphjs/how-tos/breakpoints) for a detailed how-to on doing this!

### Editing

![](./img/human_in_the_loop/edit_graph_state.png)

Sometimes we want to review and edit the agent's state.

As with approval, we can interrupt our agent at a [breakpoint](/langgraphjs/concepts/low_level#breakpoints) prior to the step we want to check.

We can surface the current state to a user and allow the user to edit the agent state.

This can, for example, be used to correct the agent if it made a mistake (e.g., see the section on tool calling below).

We can edit the graph state by forking the current checkpoint, which is saved to the thread.

We can then proceed with the graph from our forked checkpoint as done before.

```typescript
// Compile our graph with a checkpointer and a breakpoint before the step to review
const graph = builder.compile({ checkpointer, interruptBefore: ["node_2"] });

// Run the graph up to the breakpoint
for await (const event of await graph.stream(inputs, threadConfig)) {
  console.log(event);
}

// Review the state, decide to edit it, and create a forked checkpoint with the new state
await graph.updateState(threadConfig, { state: "new state" });

// Continue the graph execution from the forked checkpoint
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

See [this guide](/langgraphjs/how-tos/edit-graph-state) for a detailed how-to on doing this!

### Input

![](./img/human_in_the_loop/wait_for_input.png)

Sometimes we want to explicitly get human input at a particular step in the graph.

We can create a graph node designated for this (e.g., `human_input` in our example diagram).

As with approval and editing, we can interrupt our agent at a [breakpoint](/langgraphjs/concepts/low_level#breakpoints) prior to this node.

We can then perform a state update that includes the human input, just as we did with editing state.

But, we add one thing:

We can use `"human_input"` as the node with the state update to specify that the state update _should be treated as a node_.

This is subtle, but important:

With editing, the user makes a decision about whether or not to edit the graph state.

With input, we explicitly define a node in our graph for collecting human input!

The state update with the human input then runs _as this node_.

```typescript
// Compile our graph with a checkpointer and a breakpoint before the step to collect human input
const graph = builder.compile({
  checkpointer,
  interruptBefore: ["human_input"],
});

// Run the graph up to the breakpoint
for await (const event of await graph.stream(inputs, threadConfig)) {
  console.log(event);
}

// Update the state with the user input as if it was the human_input node
await graph.updateState(threadConfig, { user_input: userInput }, "human_input");

// Continue the graph execution from the checkpoint created by the human_input node
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

See [this guide](/langgraphjs/how-tos/wait-user-input) for a detailed how-to on doing this!

## Use-cases

### Reviewing Tool Calls

Some user interaction patterns combine the above ideas.

For example, many agents use [tool calling](https://js.langchain.com/docs/modules/agents/tools/) to make decisions.

Tool calling presents a challenge because the agent must get two things right:

(1) The name of the tool to call

(2) The arguments to pass to the tool

Even if the tool call is correct, we may also want to apply discretion:

(3) The tool call may be a sensitive operation that we want to approve

With these points in mind, we can combine the above ideas to create a human-in-the-loop review of a tool call.

```typescript
// Compile our graph with a checkpointer and a breakpoint before the step to review the tool call from the LLM
const graph = builder.compile({
  checkpointer,
  interruptBefore: ["human_review"],
});

// Run the graph up to the breakpoint
for await (const event of await graph.stream(inputs, threadConfig)) {
  console.log(event);
}

// Review the tool call and update it, if needed, as the human_review node
await graph.updateState(
  threadConfig,
  { tool_call: "updated tool call" },
  "human_review"
);

// Otherwise, approve the tool call and proceed with the graph execution with no edits

// Continue the graph execution from either:
// (1) the forked checkpoint created by human_review or
// (2) the checkpoint saved when the tool call was originally made (no edits in human_review)
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

See [this guide](/langgraphjs/how-tos/review-tool-calls) for a detailed how-to on doing this!

### Time Travel

When working with agents, we often want to closely examine their decision making process:

(1) Even when they arrive at a desired final result, the reasoning that led to that result is often important to examine.

(2) When agents make mistakes, it is often valuable to understand why.

(3) In either of the above cases, it is useful to manually explore alternative decision making paths.

Collectively, we call these debugging concepts `time-travel` and they are composed of `replaying` and `forking`.

#### Replaying

![](./img/human_in_the_loop/replay.png)

Sometimes we want to simply replay past actions of an agent.

Above, we showed the case of executing an agent from the current state (or checkpoint) of the graph.

We do this by simply passing in `null` for the input with a `threadConfig`.

```typescript
const threadConfig = { configurable: { thread_id: "1" } };
for await (const event of await graph.stream(null, threadConfig)) {
  console.log(event);
}
```

Now, we can modify this to replay past actions from a _specific_ checkpoint by passing in the checkpoint ID.

To get a specific checkpoint ID, we can easily get all of the checkpoints in the thread and filter to the one we want.

```typescript
const allCheckpoints = [];
for await (const state of app.getStateHistory(threadConfig)) {
  allCheckpoints.push(state);
}
```

Each checkpoint has a unique ID, which we can use to replay from a specific checkpoint.

Assume from reviewing the checkpoints that we want to replay from one, `xxx`.

We just pass in the checkpoint ID when we run the graph.

```typescript
const config = {
  configurable: { thread_id: "1", checkpoint_id: "xxx" },
  streamMode: "values" as const,
};
for await (const event of await graph.stream(null, config)) {
  console.log(event);
}
```

Importantly, the graph knows which checkpoints have been previously executed.

So, it will re-play any previously executed nodes rather than re-executing them.

See [this additional conceptual guide](https://langchain-ai.github.io/langgraph/concepts/persistence/#replay) for related context on replaying.

See [this guide](/langgraphjs/how-tos/time-travel) for a detailed how-to on doing time-travel!

#### Forking

![](./img/human_in_the_loop/forking.png)

Sometimes we want to fork past actions of an agent, and explore different paths through the graph.

`Editing`, as discussed above, is _exactly_ how we do this for the _current_ state of the graph!

But, what if we want to fork _past_ states of the graph?

For example, let's say we want to edit a particular checkpoint, `xxx`.

We pass this `checkpoint_id` when we update the state of the graph.

```typescript
const config = { configurable: { thread_id: "1", checkpoint_id: "xxx" } };
await graph.updateState(config, { state: "updated state" });
```

This creates a new forked checkpoint, `xxx-fork`, which we can then run the graph from.

```typescript
const config = {
  configurable: { thread_id: "1", checkpoint_id: "xxx-fork" },
  streamMode: "values" as const,
};
for await (const event of await graph.stream(null, config)) {
  console.log(event);
}
```

See [this additional conceptual guide](/langgraphjs/concepts/persistence/#update-state) for related context on forking.

See [this guide](/langgraphjs/how-tos/time-travel) for a detailed how-to on doing time-travel!

================================================
File: /docs/docs/concepts/faq.md
================================================

# FAQ

Common questions and their answers!

## Do I need to use LangChain in order to use LangGraph?

No! LangGraph is a general-purpose framework - the nodes and edges are nothing more than JavaScript/TypeScript functions. You can use LangChain, raw HTTP requests, or even other frameworks inside these nodes and edges.

## Does LangGraph work with LLMs that don't support tool calling?

Yes! You can use LangGraph with any LLMs. The main reason we use LLMs that support tool calling is that this is often the most convenient way to have the LLM make its decision about what to do. If your LLM does not support tool calling, you can still use it - you just need to write a bit of logic to convert the raw LLM string response to a decision about what to do.

## Does LangGraph work with OSS LLMs?

Yes! LangGraph is totally ambivalent to what LLMs are used under the hood. The main reason we use closed LLMs in most of the tutorials is that they seamlessly support tool calling, while OSS LLMs often don't. But tool calling is not necessary (see [this section](#does-langgraph-work-with-llms-that-dont-support-tool-calling)) so you can totally use LangGraph with OSS LLMs.

================================================
File: /docs/docs/concepts/memory.md
================================================

# Memory

## What is Memory?

Memory in AI applications refers to the ability to process, store, and effectively recall information from past interactions. With memory, your agents can learn from feedback and adapt to users' preferences. This guide is divided into two sections based on the scope of memory recall: short-term memory and long-term memory.

**Short-term memory**, or [thread](persistence.md#threads)-scoped memory, can be recalled at any time **from within** a single conversational thread with a user. LangGraph manages short-term memory as a part of your agent's [state](low_level.md#state). State is persisted to a database using a [checkpointer](persistence.md#checkpoints) so the thread can be resumed at any time. Short-term memory updates when the graph is invoked or a step is completed, and the State is read at the start of each step.

**Long-term memory** is shared **across** conversational threads. It can be recalled _at any time_ and **in any thread**. Memories are scoped to any custom namespace, not just within a single thread ID. LangGraph provides [stores](persistence.md#memory-store) ([reference doc](https://langchain-ai.github.io/langgraphjs/reference/classes/checkpoint.BaseStore.html)) to let you save and recall long-term memories.

Both are important to understand and implement for your application.

![](img/memory/short-vs-long.png)

## Short-term memory

Short-term memory lets your application remember previous interactions within a single [thread](persistence.md#threads) or conversation. A [thread](persistence.md#threads) organizes multiple interactions in a session, similar to the way email groups messages in a single conversation.

LangGraph manages short-term memory as part of the agent's state, persisted via thread-scoped checkpoints. This state can normally include the conversation history along with other stateful data, such as uploaded files, retrieved documents, or generated artifacts. By storing these in the graph's state, the bot can access the full context for a given conversation while maintaining separation between different threads.

Since conversation history is the most common form of representing short-term memory, in the next section, we will cover techniques for managing conversation history when the list of messages becomes **long**. If you want to stick to the high-level concepts, continue on to the [long-term memory](#long-term-memory) section.

### Managing long conversation history

Long conversations pose a challenge to today's LLMs. The full history may not even fit inside an LLM's context window, resulting in an irrecoverable error. Even _if_ your LLM technically supports the full context length, most LLMs still perform poorly over long contexts. They get "distracted" by stale or off-topic content, all while suffering from slower response times and higher costs.

Managing short-term memory is an exercise of balancing [precision & recall](https://en.wikipedia.org/wiki/Precision_and_recall#:~:text=Precision%20can%20be%20seen%20as,irrelevant%20ones%20are%20also%20returned) with your application's other performance requirements (latency & cost). As always, it's important to think critically about how you represent information for your LLM and to look at your data. We cover a few common techniques for managing message lists below and hope to provide sufficient context for you to pick the best tradeoffs for your application:

- [Editing message lists](#editing-message-lists): How to think about trimming and filtering a list of messages before passing to language model.
- [Summarizing past conversations](#summarizing-past-conversations): A common technique to use when you don't just want to filter the list of messages.

### Editing message lists

Chat models accept context using [messages](https://js.langchain.com/docs/concepts/#messages), which include developer provided instructions (a system message) and user inputs (human messages). In chat applications, messages alternate between human inputs and model responses, resulting in a list of messages that grows longer over time. Because context windows are limited and token-rich message lists can be costly, many applications can benefit from using techniques to manually remove or forget stale information.

![](img/memory/filter.png)

The most direct approach is to remove old messages from a list (similar to a [least-recently used cache](https://en.wikipedia.org/wiki/Page_replacement_algorithm#Least_recently_used)).

The typical technique for deleting content from a list in LangGraph is to return an update from a node telling the system to delete some portion of the list. You get to define what this update looks like, but a common approach would be to let you return an object or dictionary specifying which values to retain.

```typescript
import { Annotation } from "@langchain/langgraph";

const StateAnnotation = Annotation.Root({
  myList: Annotation<any[]>({
    reducer: (
      existing: string[],
      updates: string[] | { type: string; from: number; to?: number }
    ) => {
      if (Array.isArray(updates)) {
        // Normal case, add to the history
        return [...existing, ...updates];
      } else if (typeof updates === "object" && updates.type === "keep") {
        // You get to decide what this looks like.
        // For example, you could simplify and just accept a string "DELETE"
        // and clear the entire list.
        return existing.slice(updates.from, updates.to);
      }
      // etc. We define how to interpret updates
      return existing;
    },
    default: () => [],
  }),
});

type State = typeof StateAnnotation.State;

function myNode(state: State) {
  return {
    // We return an update for the field "myList" saying to
    // keep only values from index -5 to the end (deleting the rest)
    myList: { type: "keep", from: -5, to: undefined },
  };
}
```

LangGraph will call the "[reducer](low_level.md#reducers)" function any time an update is returned under the key "myList". Within that function, we define what types of updates to accept. Typically, messages will be added to the existing list (the conversation will grow); however, we've also added support to accept a dictionary that lets you "keep" certain parts of the state. This lets you programmatically drop old message context.

Another common approach is to let you return a list of "remove" objects that specify the IDs of all messages to delete. If you're using the LangChain messages and the [`messagesStateReducer`](https://langchain-ai.github.io/langgraphjs/reference/functions/langgraph.messagesStateReducer.html) reducer (or [`MessagesAnnotation`](https://langchain-ai.github.io/langgraphjs/reference/variables/langgraph.MessagesAnnotation.html), which uses the same underlying functionality) in LangGraph, you can do this using a `RemoveMessage`.

```typescript
import { RemoveMessage, AIMessage } from "@langchain/core/messages";
import { MessagesAnnotation } from "@langchain/langgraph";

type State = typeof MessagesAnnotation.State;

function myNode1(state: State) {
  // Add an AI message to the `messages` list in the state
  return { messages: [new AIMessage({ content: "Hi" })] };
}

function myNode2(state: State) {
  // Delete all but the last 2 messages from the `messages` list in the state
  const deleteMessages = state.messages
    .slice(0, -2)
    .map((m) => new RemoveMessage({ id: m.id }));
  return { messages: deleteMessages };
}
```

In the example above, the `MessagesAnnotation` allows us to append new messages to the `messages` state key as shown in `myNode1`. When it sees a `RemoveMessage`, it will delete the message with that ID from the list (and the RemoveMessage will then be discarded). For more information on LangChain-specific message handling, check out [this how-to on using `RemoveMessage`](https://langchain-ai.github.io/langgraphjs/how-tos/memory/delete-messages/).

See this how-to [guide](https://langchain-ai.github.io/langgraphjs/how-tos/manage-conversation-history/)for example usage.

### Summarizing past conversations

The problem with trimming or removing messages, as shown above, is that we may lose information from culling of the message queue. Because of this, some applications benefit from a more sophisticated approach of summarizing the message history using a chat model.

![](img/memory/summary.png)

Simple prompting and orchestration logic can be used to achieve this. As an example, in LangGraph we can extend the [`MessagesAnnotation`](https://langchain-ai.github.io/langgraphjs/reference/variables/langgraph.MessagesAnnotation.html) to include a `summary` key.

```typescript
import { MessagesAnnotation, Annotation } from "@langchain/langgraph";

const MyGraphAnnotation = Annotation.Root({
  ...MessagesAnnotation.spec,
  summary: Annotation<string>,
});
```

Then, we can generate a summary of the chat history, using any existing summary as context for the next summary. This `summarizeConversation` node can be called after some number of messages have accumulated in the `messages` state key.

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, RemoveMessage } from "@langchain/core/messages";

type State = typeof MyGraphAnnotation.State;

async function summarizeConversation(state: State) {
  // First, we get any existing summary
  const summary = state.summary || "";

  // Create our summarization prompt
  let summaryMessage: string;
  if (summary) {
    // A summary already exists
    summaryMessage =
      `This is a summary of the conversation to date: ${summary}\n\n` +
      "Extend the summary by taking into account the new messages above:";
  } else {
    summaryMessage = "Create a summary of the conversation above:";
  }

  // Add prompt to our history
  const messages = [
    ...state.messages,
    new HumanMessage({ content: summaryMessage }),
  ];

  // Assuming you have a ChatOpenAI model instance
  const model = new ChatOpenAI();
  const response = await model.invoke(messages);

  // Delete all but the 2 most recent messages
  const deleteMessages = state.messages
    .slice(0, -2)
    .map((m) => new RemoveMessage({ id: m.id }));

  return {
    summary: response.content,
    messages: deleteMessages,
  };
}
```

See this how-to [here](https://langchain-ai.github.io/langgraphjs/how-tos/memory/add-summary-conversation-history/) for example usage.

### Knowing **when** to remove messages

Most LLMs have a maximum supported context window (denominated in tokens). A simple way to decide when to truncate messages is to count the tokens in the message history and truncate whenever it approaches that limit. Naive truncation is straightforward to implement on your own, though there are a few "gotchas". Some model APIs further restrict the sequence of message types (must start with human message, cannot have consecutive messages of the same type, etc.). If you're using LangChain, you can use the [`trimMessages`](https://js.langchain.com/docs/how_to/trim_messages/#trimming-based-on-token-count) utility and specify the number of tokens to keep from the list, as well as the `strategy` (e.g., keep the last `maxTokens`) to use for handling the boundary.

Below is an example.

```typescript
import { trimMessages } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

trimMessages(messages, {
  // Keep the last <= n_count tokens of the messages.
  strategy: "last",
  // Remember to adjust based on your model
  // or else pass a custom token_encoder
  tokenCounter: new ChatOpenAI({ modelName: "gpt-4" }),
  // Remember to adjust based on the desired conversation
  // length
  maxTokens: 45,
  // Most chat models expect that chat history starts with either:
  // (1) a HumanMessage or
  // (2) a SystemMessage followed by a HumanMessage
  startOn: "human",
  // Most chat models expect that chat history ends with either:
  // (1) a HumanMessage or
  // (2) a ToolMessage
  endOn: ["human", "tool"],
  // Usually, we want to keep the SystemMessage
  // if it's present in the original history.
  // The SystemMessage has special instructions for the model.
  includeSystem: true,
});
```

## Long-term memory

Long-term memory in LangGraph allows systems to retain information across different conversations or sessions. Unlike short-term memory, which is thread-scoped, long-term memory is saved within custom "namespaces."

LangGraph stores long-term memories as JSON documents in a [store](persistence.md#memory-store) ([reference doc](https://langchain-ai.github.io/langgraphjs/reference/classes/checkpoint.BaseStore.html)). Each memory is organized under a custom `namespace` (similar to a folder) and a distinct `key` (like a filename). Namespaces often include user or org IDs or other labels that makes it easier to organize information. This structure enables hierarchical organization of memories. Cross-namespace searching is then supported through content filters. See the example below for an example.

```typescript
import { InMemoryStore } from "@langchain/langgraph";

// InMemoryStore saves data to an in-memory dictionary. Use a DB-backed store in production use.
const store = new InMemoryStore();
const userId = "my-user";
const applicationContext = "chitchat";
const namespace = [userId, applicationContext];
await store.put(namespace, "a-memory", {
  rules: [
    "User likes short, direct language",
    "User only speaks English & TypeScript",
  ],
  "my-key": "my-value",
});
// get the "memory" by ID
const item = await store.get(namespace, "a-memory");
// list "memories" within this namespace, filtering on content equivalence
const items = await store.search(namespace, {
  filter: { "my-key": "my-value" },
});
```

When adding long-term memory to your agent, it's important to think about how to **write memories**, how to **store and manage memory updates**, and how to **recall & represent memories** for the LLM in your application. These questions are all interdependent: how you want to recall & format memories for the LLM dictates what you should store and how to manage it. Furthermore, each technique has tradeoffs. The right approach for you largely depends on your application's needs.
LangGraph aims to give you the low-level primitives to directly control the long-term memory of your application, based on memory [Store](persistence.md#memory-store)'s.

Long-term memory is far from a solved problem. While it is hard to provide generic advice, we have provided a few reliable patterns below for your consideration as you implement long-term memory.

**Do you want to write memories "on the hot path" or "in the background"**

Memory can be updated either as part of your primary application logic (e.g. "on the hot path" of the application) or as a background task (as a separate function that generates memories based on the primary application's state). We document some tradeoffs for each approach in [the writing memories section below](#writing-memories).

**Do you want to manage memories as a single profile or as a collection of documents?**

We provide two main approaches to managing long-term memory: a single, continuously updated document (referred to as a "profile" or "schema") or a collection of documents. Each method offers its own benefits, depending on the type of information you need to store and how you intend to access it.

Managing memories as a single, continuously updated "profile" or "schema" is useful when there is well-scoped, specific information you want to remember about a user, organization, or other entity (including the agent itself). You can define the schema of the profile ahead of time, and then use an LLM to update this based on interactions. Querying the "memory" is easy since it's a simple GET operation on a JSON document. We explain this in more detail in [remember a profile](#manage-individual-profiles). This technique can provide higher precision (on known information use cases) at the expense of lower recall (since you have to anticipate and model your domain, and updates to the doc tend to delete or rewrite away old information at a greater frequency).

Managing long-term memory as a collection of documents, on the other hand, lets you store an unbounded amount of information. This technique is useful when you want to repeatedly extract & remember items over a long time horizon but can be more complicated to query and manage over time. Similar to the "profile" memory, you still define schema(s) for each memory. Rather than overwriting a single document, you instead will insert new ones (and potentially update or re-contextualize existing ones in the process). We explain this approach in more detail in ["managing a collection of memories"](#manage-a-collection-of-memories).

**Do you want to present memories to your agent as updated instructions or as few-shot examples?**

Memories are typically provided to the LLM as a part of the system prompt. Some common ways to "frame" memories for the LLM include providing raw information as "memories from previous interactions with user A", as system instructions or rules, or as few-shot examples.

Framing memories as "learning rules or instructions" typically means dedicating a portion of the system prompt to instructions the LLM can manage itself. After each conversation, you can prompt the LLM to evaluate its performance and update the instructions to better handle this type of task in the future. We explain this approach in more detail in [this section](#update-own-instructions).

Storing memories as few-shot examples lets you store and manage instructions as cause and effect. Each memory stores an input or context and expected response. Including a reasoning trajectory (a chain-of-thought) can also help provide sufficient context so that the memory is less likely to be mis-used in the future. We elaborate on this concept more in [this section](#few-shot-examples).

We will expand on techniques for writing, managing, and recalling & formatting memories in the following section.

### Writing memories

Humans form long-term memories when we sleep, but when and how should our agents create new memories? The two most common ways we see agents write memories are "on the hot path" and "in the background".

#### Writing memories in the hot path

This involves creating memories while the application is running. To provide a popular production example, ChatGPT manages memories using a "save_memories" tool to upsert memories as content strings. It decides whether (and how) to use this tool every time it receives a user message and multi-tasks memory management with the rest of the user instructions.

This has a few benefits. First of all, it happens "in real time". If the user starts a new thread right away that memory will be present. The user also transparently sees when memories are stored, since the bot has to explicitly decide to store information and can relate that to the user.

This also has several downsides. It complicates the decisions the agent must make (what to commit to memory). This complication can degrade its tool-calling performance and reduce task completion rates. It will slow down the final response since it needs to decide what to commit to memory. It also typically leads to fewer things being saved to memory (since the assistant is multi-tasking), which will cause **lower recall** in later conversations.

#### Writing memories in the background

This involves updating memory as a conceptually separate task, typically as a completely separate graph or function. Since it happens in the background, it incurs no latency. It also splits up the application logic from the memory logic, making it more modular and easy to manage. It also lets you separate the timing of memory creation, letting you avoid redundant work. Your agent can focus on accomplishing its immediate task without having to consciously think about what it needs to remember.

This approach is not without its downsides, however. You have to think about how often to write memories. If it doesn't run in realtime, the user's interactions on other threads won't benefit from the new context. You also have to think about when to trigger this job. We typically recommend scheduling memories after some point of time, cancelling and re-scheduling for the future if new events occur on a given thread. Other popular choices are to form memories on some cron schedule or to let the user or application logic manually trigger memory formation.

### Managing memories

Once you've sorted out memory scheduling, it's important to think about **how to update memory with new information**.

There are two main approaches: you can either continuously update a single document (memory profile) or insert new documents each time you receive new information.

We will outline some tradeoffs between these two approaches below, understanding that most people will find it most appropriate to combine approaches and to settle somewhere in the middle.

#### Manage individual profiles

A profile is generally just a JSON document with various key-value pairs you've selected to represent your domain. When remembering a profile, you will want to make sure that you are **updating** the profile each time. As a result, you will want to pass in the previous profile and ask the LLM to generate a new profile (or some JSON patch to apply to the old profile).

The larger the document, the more error-prone this can become. If your document becomes **too** large, you may want to consider splitting up the profiles into separate sections. You will likely need to use generation with retries and/or **strict** decoding when generating documents to ensure the memory schemas remains valid.

#### Manage a collection of memories

Saving memories as a collection of documents simplifies some things. Each individual memory can be more narrowly scoped and easier to generate. It also means you're less likely to **lose** information over time, since it's easier for an LLM to generate _new_ objects for new information than it is for it to reconcile that new information with information in a dense profile. This tends to lead to higher recall downstream.

This approach shifts some complexity to how you prompt the LLM to apply memory updates. You now have to enable the LLM to _delete_ or _update_ existing items in the list. This can be tricky to prompt the LLM to do. Some LLMs may default to over-inserting; others may default to over-updating. Tuning the behavior here is best done through evals, something you can do with a tool like [LangSmith](https://docs.smith.langchain.com/tutorials/Developers/evaluation).

This also shifts complexity to memory **search** (recall). You have to think about what relevant items to use. Right now we support filtering by metadata. We will be adding semantic search shortly.

Finally, this shifts some complexity to how you represent the memories for the LLM (and by extension, the schemas you use to save each memories). It's very easy to write memories that can easily be mistaken out-of-context. It's important to prompt the LLM to include all necessary contextual information in the given memory so that when you use it in later conversations it doesn't mistakenly mis-apply that information.

### Representing memories

Once you have saved memories, the way you then retrieve and present the memory content for the LLM can play a large role in how well your LLM incorporates that information in its responses.
The following sections present a couple of common approaches. Note that these sections also will largely inform how you write and manage memories. Everything in memory is connected!

#### Update own instructions

While instructions are often static text written by the developer, many AI applications benefit from letting the users personalize the rules and instructions the agent should follow whenever it interacts with that user. This ideally can be inferred by its interactions with the user (so the user doesn't have to explicitly change settings in your app). In this sense, instructions are a form of long-form memory!

One way to apply this is using "reflection" or "Meta-prompting" steps. Prompt the LLM with the current instruction set (from the system prompt) and a conversation with the user, and instruct the LLM to refine its instructions. This approach allows the system to dynamically update and improve its own behavior, potentially leading to better performance on various tasks. This is particularly useful for tasks where the instructions are challenging to specify a priori.

Meta-prompting uses past information to refine prompts. For instance, a [Tweet generator](https://www.youtube.com/watch?v=Vn8A3BxfplE) employs meta-prompting to enhance its paper summarization prompt for Twitter. You could implement this using LangGraph's memory store to save updated instructions in a shared namespace. In this case, we will namespace the memories as "agent_instructions" and key the memory based on the agent.

```typescript
import { BaseStore } from "@langchain/langgraph/store";
import { State } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

// Node that *uses* the instructions
const callModel = async (state: State, store: BaseStore) => {
  const namespace = ["agent_instructions"];
  const instructions = await store.get(namespace, "agent_a");
  // Application logic
  const prompt = promptTemplate.format({
    instructions: instructions[0].value.instructions,
  });
  // ... rest of the logic
};

// Node that updates instructions
const updateInstructions = async (state: State, store: BaseStore) => {
  const namespace = ["instructions"];
  const currentInstructions = await store.search(namespace);
  // Memory logic
  const prompt = promptTemplate.format({
    instructions: currentInstructions[0].value.instructions,
    conversation: state.messages,
  });
  const llm = new ChatOpenAI();
  const output = await llm.invoke(prompt);
  const newInstructions = output.content; // Assuming the LLM returns the new instructions
  await store.put(["agent_instructions"], "agent_a", {
    instructions: newInstructions,
  });
  // ... rest of the logic
};
```

#### Few-shot examples

Sometimes it's easier to "show" than "tell." LLMs learn well from examples. Few-shot learning lets you ["program"](https://x.com/karpathy/status/1627366413840322562) your LLM by updating the prompt with input-output examples to illustrate the intended behavior. While various [best-practices](https://js.langchain.com/docs/concepts/#1-generating-examples) can be used to generate few-shot examples, often the challenge lies in selecting the most relevant examples based on user input.

Note that the memory store is just one way to store data as few-shot examples. If you want to have more developer involvement, or tie few-shots more closely to your evaluation harness, you can also use a [LangSmith Dataset](https://docs.smith.langchain.com/how_to_guides/datasets) to store your data. Then dynamic few-shot example selectors can be used out-of-the box to achieve this same goal. LangSmith will index the dataset for you and enable retrieval of few shot examples that are most relevant to the user input based upon keyword similarity ([using a BM25-like algorithm](https://docs.smith.langchain.com/how_to_guides/datasets/index_datasets_for_dynamic_few_shot_example_selection) for keyword based similarity).

See this how-to [video](https://www.youtube.com/watch?v=37VaU7e7t5o) for example usage of dynamic few-shot example selection in LangSmith. Also, see this [blog post](https://blog.langchain.dev/few-shot-prompting-to-improve-tool-calling-performance/) showcasing few-shot prompting to improve tool calling performance and this [blog post](https://blog.langchain.dev/aligning-llm-as-a-judge-with-human-preferences/) using few-shot example to align an LLMs to human preferences.

================================================
File: /docs/docs/concepts/langgraph_server.md
================================================

# LangGraph Server

!!! info "Prerequisites" - [LangGraph Platform](./langgraph_platform.md) - [LangGraph Glossary](low_level.md)

## Overview

LangGraph Server offers an API for creating and managing agent-based applications. It is built on the concept of [assistants](assistants.md), which are agents configured for specific tasks, and includes built-in [persistence](persistence.md#memory-store) and a **task queue**. This versatile API supports a wide range of agentic application use cases, from background processing to real-time interactions.

## Key Features

The LangGraph Platform incorporates best practices for agent deployment, so you can focus on building your agent logic.

- **Streaming endpoints**: Endpoints that expose [multiple different streaming modes](streaming.md). We've made these work even for long-running agents that may go minutes between consecutive stream events.
- **Background runs**: The LangGraph Server supports launching assistants in the background with endpoints for polling the status of the assistant's run and webhooks to monitor run status effectively.

* **Support for long runs**: Our blocking endpoints for running assistants send regular heartbeat signals, preventing unexpected connection closures when handling requests that take a long time to complete.

- **Task queue**: We've added a task queue to make sure we don't drop any requests if they arrive in a bursty nature.
- **Horizontally scalable infrastructure**: LangGraph Server is designed to be horizontally scalable, allowing you to scale up and down your usage as needed.
- **Double texting support**: Many times users might interact with your graph in unintended ways. For instance, a user may send one message and before the graph has finished running send a second message. We call this ["double texting"](double_texting.md) and have added four different ways to handle this.
- **Optimized checkpointer**: LangGraph Platform comes with a built-in [checkpointer](./persistence.md#checkpoints) optimized for LangGraph applications.
- **Human-in-the-loop endpoints**: We've exposed all endpoints needed to support [human-in-the-loop](human_in_the_loop.md) features.
- **Memory**: In addition to thread-level persistence (covered above by [checkpointers]l(./persistence.md#checkpoints)), LangGraph Platform also comes with a built-in [memory store](persistence.md#memory-store).
- **Cron jobs**: Built-in support for scheduling tasks, enabling you to automate regular actions like data clean-up or batch processing within your applications.
- **Webhooks**: Allows your application to send real-time notifications and data updates to external systems, making it easy to integrate with third-party services and trigger actions based on specific events.
- **Monitoring**: LangGraph Server integrates seamlessly with the [LangSmith](https://docs.smith.langchain.com/) monitoring platform, providing real-time insights into your application's performance and health.

## What are you deploying?

When you deploy a LangGraph Server, you are deploying one or more [graphs](#graphs), a database for [persistence](persistence.md), and a task queue.

### Graphs

When you deploy a graph with LangGraph Server, you are deploying a "blueprint" for an [Assistant](assistants.md).

An [Assistant](assistants.md) is a graph paired with specific configuration settings. You can create multiple assistants per graph, each with unique settings to accommodate different use cases
that can be served by the same graph.

Upon deployment, LangGraph Server will automatically create a default assistant for each graph using the graph's default configuration settings.

You can interact with assistants through the [LangGraph Server API](#langgraph-server-api).

!!! note

    We often think of a graph as implementing an [agent](agentic_concepts.md), but a graph does not necessarily need to implement an agent. For example, a graph could implement a simple
    chatbot that only supports back-and-forth conversation, without the ability to influence any application control flow. In reality, as applications get more complex, a graph will often implement a more complex flow that may use [multiple agents](./multi_agent.md) working in tandem.

### Persistence and Task Queue

The LangGraph Server leverages a database for [persistence](persistence.md) and a task queue.

Currently, only [Postgres](https://www.postgresql.org/) is supported as a database for LangGraph Server and [Redis](https://redis.io/) as the task queue.

If you're deploying using [LangGraph Cloud](./langgraph_cloud.md), these components are managed for you. If you're deploying LangGraph Server on your own infrastructure, you'll need to set up and manage these components yourself.

Please review the [deployment options](./deployment_options.md) guide for more information on how these components are set up and managed.

## Application Structure

To deploy a LangGraph Server application, you need to specify the graph(s) you want to deploy, as well as any relevant configuration settings, such as dependencies and environment variables.

Read the [application structure](./application_structure.md) guide to learn how to structure your LangGraph application for deployment.

## LangGraph Server API

The LangGraph Server API allows you to create and manage [assistants](assistants.md), [threads](#threads), [runs](#runs), [cron jobs](#cron-jobs), and more.

The [LangGraph Cloud API Reference](https://langchain-ai.github.io/langgraph/cloud/reference/api/api_ref.html) provides detailed information on the API endpoints and data models.

### Assistants

An [Assistant](assistants.md) refers to a [graph](#graphs) plus specific [configuration](low_level.md#configuration) settings for that graph.

You can think of an assistant as a saved configuration of an [agent](agentic_concepts.md).

When building agents, it is fairly common to make rapid changes that _do not_ alter the graph logic. For example, simply changing prompts or the LLM selection can have significant impacts on the behavior of the agents. Assistants offer an easy way to make and save these types of changes to agent configuration.

### Threads

A thread contains the accumulated state of a sequence of [runs](#runs). If a run is executed on a thread, then the [state](low_level.md#state) of the underlying graph of the assistant will be persisted to the thread.

A thread's current and historical state can be retrieved. To persist state, a thread must be created prior to executing a run.

The state of a thread at a particular point in time is called a [checkpoint](persistence.md#checkpoints). Checkpoints can be used to restore the state of a thread at a later time.

For more on threads and checkpoints, see this section of the [LangGraph conceptual guide](low_level.md#persistence).

The LangGraph Cloud API provides several endpoints for creating and managing threads and thread state. See the [API reference](https://langchain-ai.github.io/langgraph/cloud/reference/api/api_ref.html#tag/threadscreate) for more details.

### Runs

A run is an invocation of an [assistant](#assistants). Each run may have its own input, configuration, and metadata, which may affect execution and output of the underlying graph. A run can optionally be executed on a [thread](#threads).

The LangGraph Cloud API provides several endpoints for creating and managing runs. See the [API reference](https://langchain-ai.github.io/langgraph/cloud/reference/api/api_ref.html#tag/runsmanage) for more details.

### Store

Store is an API for managing persistent [key-value store](./persistence.md#memory-store) that is available from any [thread](#threads).

Stores are useful for implementing [memory](./memory.md) in your LangGraph application.

### Cron Jobs

There are many situations in which it is useful to run an assistant on a schedule.

For example, say that you're building an assistant that runs daily and sends an email summary
of the day's news. You could use a cron job to run the assistant every day at 8:00 PM.

LangGraph Cloud supports cron jobs, which run on a user-defined schedule. The user specifies a schedule, an assistant, and some input. After that, on the specified schedule, the server will:

- Create a new thread with the specified assistant
- Send the specified input to that thread

Note that this sends the same input to the thread every time. See the [how-to guide](https://langchain-ai.github.io/langgraph/cloud/how-tos/cron_jobs.md) for creating cron jobs.

The LangGraph Cloud API provides several endpoints for creating and managing cron jobs. See the [API reference](https://langchain-ai.github.io/langgraph/cloud/reference/api/api_ref.html#tag/crons-enterprise-only) for more details.

### Webhooks

Webhooks enable event-driven communication from your LangGraph Cloud application to external services. For example, you may want to issue an update to a separate service once an API call to LangGraph Cloud has finished running.

Many LangGraph Cloud endpoints accept a `webhook` parameter. If this parameter is specified by a an endpoint that can accept POST requests, LangGraph Cloud will send a request at the completion of a run.

See the corresponding [how-to guide](https://langchain-ai.github.io/langgraph/cloud/how-tos/webhooks.md) for more detail.

## Related

- LangGraph [Application Structure](./application_structure.md) guide explains how to structure your LangGraph application for deployment.
- [How-to guides for the LangGraph Platform](../how-tos/index.md).
- The [LangGraph Cloud API Reference](https://langchain-ai.github.io/langgraph/cloud/reference/api/api_ref.html) provides detailed information on the API endpoints and data models.

================================================
File: /docs/docs/concepts/index.md
================================================

---

hide:

- navigation
  title: Concepts
  description: Conceptual Guide for LangGraph.js

---

# Conceptual Guide

This guide provides explanations of the key concepts behind the LangGraph framework and AI applications more broadly.

We recommend that you go through at least the [Quick Start](../tutorials/quickstart.ipynb) before diving into the conceptual guide. This will provide practical context that will make it easier to understand the concepts discussed here.

The conceptual guide does not cover step-by-step instructions or specific implementation examples — those are found in the [Tutorials](../tutorials/index.md) and [How-to guides](../how-tos/index.md). For detailed reference material, please see the [API reference](https://langchain-ai.github.io/langgraphjs/reference/).

## LangGraph

### High Level

- [Why LangGraph?](high_level.md): A high-level overview of LangGraph and its goals.

### Concepts

- [LangGraph Glossary](low_level.md): LangGraph workflows are designed as graphs, with nodes representing different components and edges representing the flow of information between them. This guide provides an overview of the key concepts associated with LangGraph graph primitives.
- [Common Agentic Patterns](agentic_concepts.md): An agent uses an LLM to pick its own control flow to solve more complex problems! Agents are a key building block in many LLM applications. This guide explains the different types of agent architectures and how they can be used to control the flow of an application.
- [Multi-Agent Systems](multi_agent.md): Complex LLM applications can often be broken down into multiple agents, each responsible for a different part of the application. This guide explains common patterns for building multi-agent systems.
- [Breakpoints](breakpoints.md): Breakpoints allow pausing the execution of a graph at specific points. Breakpoints allow stepping through graph execution for debugging purposes.
- [Human-in-the-Loop](human_in_the_loop.md): Explains different ways of integrating human feedback into a LangGraph application.
- [Time Travel](time-travel.md): Time travel allows you to replay past actions in your LangGraph application to explore alternative paths and debug issues.
- [Persistence](persistence.md): LangGraph has a built-in persistence layer, implemented through checkpointers. This persistence layer helps to support powerful capabilities like human-in-the-loop, memory, time travel, and fault-tolerance.
- [Memory](memory.md): Memory in AI applications refers to the ability to process, store, and effectively recall information from past interactions. With memory, your agents can learn from feedback and adapt to users' preferences.
- [Streaming](streaming.md): Streaming is crucial for enhancing the responsiveness of applications built on LLMs. By displaying output progressively, even before a complete response is ready, streaming significantly improves user experience (UX), particularly when dealing with the latency of LLMs.
- [FAQ](faq.md): Frequently asked questions about LangGraph.

## LangGraph Platform

LangGraph Platform is a commercial solution for deploying agentic applications in production, built on the open-source LangGraph framework.

The LangGraph Platform offers a few different deployment options described in the [deployment options guide](./deployment_options.md).

!!! tip

    * LangGraph is an MIT-licensed open-source library, which we are committed to maintaining and growing for the community.
    * You can always deploy LangGraph applications on your own infrastructure using the open-source LangGraph project without using LangGraph Platform.

### High Level

- [Why LangGraph Platform?](./langgraph_platform.md): The LangGraph platform is an opinionated way to deploy and manage LangGraph applications. This guide provides an overview of the key features and concepts behind LangGraph Platform.
- [Deployment Options](./deployment_options.md): LangGraph Platform offers four deployment options: [Self-Hosted Lite](./self_hosted.md#self-hosted-lite), [Self-Hosted Enterprise](./self_hosted.md#self-hosted-enterprise), [bring your own cloud (BYOC)](./bring_your_own_cloud.md), and [Cloud SaaS](./langgraph_cloud.md). This guide explains the differences between these options, and which Plans they are available on.
- [Plans](./plans.md): LangGraph Platforms offer three different plans: Developer, Plus, Enterprise. This guide explains the differences between these options, what deployment options are available for each, and how to sign up for each one.
- [Template Applications](./template_applications.md): Reference applications designed to help you get started quickly when building with LangGraph.

### Components

The LangGraph Platform comprises several components that work together to support the deployment and management of LangGraph applications:

- [LangGraph Server](./langgraph_server.md): The LangGraph Server is designed to support a wide range of agentic application use cases, from background processing to real-time interactions.
- [LangGraph Studio](./langgraph_studio.md): LangGraph Studio is a specialized IDE that can connect to a LangGraph Server to enable visualization, interaction, and debugging of the application locally.
- [LangGraph CLI](./langgraph_cli.md): LangGraph CLI is a command-line interface that helps to interact with a local LangGraph
- [Python/JS SDK](./sdk.md): The Python/JS SDK provides a programmatic way to interact with deployed LangGraph Applications.
- [Remote Graph](../how-tos/use-remote-graph.md): A RemoteGraph allows you to interact with any deployed LangGraph application as though it were running locally.

### LangGraph Server

- [Application Structure](./application_structure.md): A LangGraph application consists of one or more graphs, a LangGraph API Configuration file (`langgraph.json`), a file that specifies dependencies, and environment variables.
- [Assistants](./assistants.md): Assistants are a way to save and manage different configurations of your LangGraph applications.
- [Web-hooks](./langgraph_server.md#webhooks): Webhooks allow your running LangGraph application to send data to external services on specific events.
- [Cron Jobs](./langgraph_server.md#cron-jobs): Cron jobs are a way to schedule tasks to run at specific times in your LangGraph application.
- [Double Texting](./double_texting.md): Double texting is a common issue in LLM applications where users may send multiple messages before the graph has finished running. This guide explains how to handle double texting with LangGraph Deploy.

### Deployment Options

- [Self-Hosted Lite](./self_hosted.md): A free (up to 1 million nodes executed), limited version of LangGraph Platform that you can run locally or in a self-hosted manner
- [Cloud SaaS](./langgraph_cloud.md): Hosted as part of LangSmith.
- [Bring Your Own Cloud](./bring_your_own_cloud.md): We manage the infrastructure, so you don't have to, but the infrastructure all runs within your cloud.
- [Self-Hosted Enterprise](./self_hosted.md): Completely managed by you.

================================================
File: /docs/docs/concepts/.meta.yml
================================================
tags:

- concepts
- conceptual guide
- explanation

================================================
File: /docs/docs/concepts/template_applications.md
================================================

# Template Applications

!!! note Prerequisites

    - [LangGraph Studio](./langgraph_studio.md)

Templates are open source reference applications designed to help you get started quickly when building with LangGraph. They provide working examples of common agentic workflows that can be customized to your needs.

Templates can be accessed via [LangGraph Studio](langgraph_studio.md), or cloned directly from Github. You can download LangGraph Studio and see available templates [here](https://studio.langchain.com/).

## Available templates

- **New LangGraph Project**: A simple, minimal chatbot with memory.
  - [Python](https://github.com/langchain-ai/new-langgraph-project)
  - [JS/TS](https://github.com/langchain-ai/new-langgraphjs-project)
- **ReAct Agent**: A simple agent that can be flexibly extended to many tools.
  - [Python](https://github.com/langchain-ai/react-agent)
  - [JS/TS](https://github.com/langchain-ai/react-agent-js)
- **Memory Agent**: A ReAct-style agent with an additional tool to store memories for use across conversational threads.
  - [Python](https://github.com/langchain-ai/memory-agent)
  - [JS/TS](https://github.com/langchain-ai/memory-agent-js)
- **Retrieval Agent**: An agent that includes a retrieval-based question-answering system.
  - [Python](https://github.com/langchain-ai/retrieval-agent-template)
  - [JS/TS](https://github.com/langchain-ai/retrieval-agent-template-js)
- **Data-enrichment Agent**: An agent that performs web searches and organizes its findings into a structured format.
  - [Python](https://github.com/langchain-ai/data-enrichment)
  - [JS/TS](https://github.com/langchain-ai/data-enrichment-js)

================================================
File: /docs/docs/concepts/persistence.md
================================================

# Persistence

LangGraph has a built-in persistence layer, implemented through checkpointers. When you compile graph with a checkpointer, the checkpointer saves a `checkpoint` of the graph state at every super-step. Those checkpoints are saved to a `thread`, which can be accessed after graph execution. Because `threads` allow access to graph's state after execution, several powerful capabilities including human-in-the-loop, memory, time travel, and fault-tolerance are all possible. See [this how-to guide](/langgraphjs/how-tos/persistence) for an end-to-end example on how to add and use checkpointers with your graph. Below, we'll discuss each of these concepts in more detail.

![Checkpoints](img/persistence/checkpoints.jpg)

## Threads

A thread is a unique ID or [thread identifier](#threads) assigned to each checkpoint saved by a checkpointer. When invoking graph with a checkpointer, you **must** specify a `thread_id` as part of the `configurable` portion of the config:

```ts
{"configurable": {"thread_id": "1"}}
```

## Checkpoints

Checkpoint is a snapshot of the graph state saved at each super-step and is represented by `StateSnapshot` object with the following key properties:

- `config`: Config associated with this checkpoint.
- `metadata`: Metadata associated with this checkpoint.
- `values`: Values of the state channels at this point in time.
- `next` A tuple of the node names to execute next in the graph.
- `tasks`: A tuple of `PregelTask` objects that contain information about next tasks to be executed. If the step was previously attempted, it will include error information. If a graph was interrupted [dynamically](/langgraphjs/how-tos/dynamic_breakpoints) from within a node, tasks will contain additional data associated with interrupts.

Let's see what checkpoints are saved when a simple graph is invoked as follows:

```typescript
import { StateGraph, START, END, MemorySaver, Annotation } from "@langchain/langgraph";

const GraphAnnotation = Annotation.Root({
  foo: Annotation<string>
  bar: Annotation<string[]>({
    reducer: (a, b) => [...a, ...b],
    default: () => [],
  })
});

function nodeA(state: typeof GraphAnnotation.State) {
  return { foo: "a", bar: ["a"] };
}

function nodeB(state: typeof GraphAnnotation.State) {
  return { foo: "b", bar: ["b"] };
}

const workflow = new StateGraph(GraphAnnotation);
  .addNode("nodeA", nodeA)
  .addNode("nodeB", nodeB)
  .addEdge(START, "nodeA")
  .addEdge("nodeA", "nodeB")
  .addEdge("nodeB", END);

const checkpointer = new MemorySaver();
const graph = workflow.compile({ checkpointer });

const config = { configurable: { thread_id: "1" } };
await graph.invoke({ foo: "" }, config);
```

After we run the graph, we expect to see exactly 4 checkpoints:

- empty checkpoint with `START` as the next node to be executed
- checkpoint with the user input `{foo: '', bar: []}` and `nodeA` as the next node to be executed
- checkpoint with the outputs of `nodeA` `{foo: 'a', bar: ['a']}` and `nodeB` as the next node to be executed
- checkpoint with the outputs of `nodeB` `{foo: 'b', bar: ['a', 'b']}` and no next nodes to be executed

Note that we `bar` channel values contain outputs from both nodes as we have a reducer for `bar` channel.

### Get state

When interacting with the saved graph state, you **must** specify a [thread identifier](#threads). You can view the _latest_ state of the graph by calling `await graph.getState(config)`. This will return a `StateSnapshot` object that corresponds to the latest checkpoint associated with the thread ID provided in the config or a checkpoint associated with a checkpoint ID for the thread, if provided.

```typescript
// Get the latest state snapshot
const config = { configurable: { thread_id: "1" } };
const state = await graph.getState(config);

// Get a state snapshot for a specific checkpoint_id
const configWithCheckpoint = {
  configurable: {
    thread_id: "1",
    checkpoint_id: "1ef663ba-28fe-6528-8002-5a559208592c",
  },
};
const stateWithCheckpoint = await graph.getState(configWithCheckpoint);
```

In our example, the output of `getState` will look like this:

```
{
  values: { foo: 'b', bar: ['a', 'b'] },
  next: [],
  config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1ef663ba-28fe-6528-8002-5a559208592c' } },
  metadata: { source: 'loop', writes: { nodeB: { foo: 'b', bar: ['b'] } }, step: 2 },
  created_at: '2024-08-29T19:19:38.821749+00:00',
  parent_config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1ef663ba-28f9-6ec4-8001-31981c2c39f8' } },
  tasks: []
}
```

### Get state history

You can get the full history of the graph execution for a given thread by calling `await graph.getStateHistory(config)`. This will return a list of `StateSnapshot` objects associated with the thread ID provided in the config. Importantly, the checkpoints will be ordered chronologically with the most recent checkpoint / `StateSnapshot` being the first in the list.

```typescript
const config = { configurable: { thread_id: "1" } };
const history = await graph.getStateHistory(config);
```

In our example, the output of `getStateHistory` will look like this:

```
[
  {
    values: { foo: 'b', bar: ['a', 'b'] },
    next: [],
    config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1ef663ba-28fe-6528-8002-5a559208592c' } },
    metadata: { source: 'loop', writes: { nodeB: { foo: 'b', bar: ['b'] } }, step: 2 },
    created_at: '2024-08-29T19:19:38.821749+00:00',
    parent_config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1ef663ba-28f9-6ec4-8001-31981c2c39f8' } },
    tasks: [],
  },
  {
    values: { foo: 'a', bar: ['a'] },
    next: ['nodeB'],
    config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1ef663ba-28f9-6ec4-8001-31981c2c39f8' } },
    metadata: { source: 'loop', writes: { nodeA: { foo: 'a', bar: ['a'] } }, step: 1 },
    created_at: '2024-08-29T19:19:38.819946+00:00',
    parent_config: { configurable: { thread_id: '1', checkpoint_ns: '', checkpoint_id: '1ef663ba-28f4-6b4a-8000-ca575a13d36a' } },
    tasks: [{ id: '6fb7314f-f114-5413-a1f3-d37dfe98ff44', name: 'nodeB', error: null, interrupts: [] }],
  },
  // ... (other checkpoints)
]
```

![State](./img/persistence/get_state.jpg)

### Replay

It's also possible to play-back a prior graph execution. If we `invoking` a graph with a `thread_id` and a `checkpoint_id`, then we will _re-play_ the graph from a checkpoint that corresponds to the `checkpoint_id`.

- `thread_id` is simply the ID of a thread. This is always required.
- `checkpoint_id` This identifier refers to a specific checkpoint within a thread.

You must pass these when invoking the graph as part of the `configurable` portion of the config:

```typescript
// { configurable: { thread_id: "1" } }  // valid config
// { configurable: { thread_id: "1", checkpoint_id: "0c62ca34-ac19-445d-bbb0-5b4984975b2a" } }  // also valid config

const config = { configurable: { thread_id: "1" } };
await graph.invoke(inputs, config);
```

Importantly, LangGraph knows whether a particular checkpoint has been executed previously. If it has, LangGraph simply _re-plays_ that particular step in the graph and does not re-execute the step. See this [how to guide on time-travel to learn more about replaying](/langgraphjs/how-tos/time-travel).

![Replay](./img/persistence/re_play.jpg)

### Update state

In addition to re-playing the graph from specific `checkpoints`, we can also _edit_ the graph state. We do this using `graph.updateState()`. This method three different arguments:

#### `config`

The config should contain `thread_id` specifying which thread to update. When only the `thread_id` is passed, we update (or fork) the current state. Optionally, if we include `checkpoint_id` field, then we fork that selected checkpoint.

#### `values`

These are the values that will be used to update the state. Note that this update is treated exactly as any update from a node is treated. This means that these values will be passed to the [reducer](/langgraphjs/concepts/low_level#reducers) functions, if they are defined for some of the channels in the graph state. This means that `updateState` does NOT automatically overwrite the channel values for every channel, but only for the channels without reducers. Let's walk through an example.

Let's assume you have defined the state of your graph with the following schema (see full example above):

```typescript
import { Annotation } from "@langchain/langgraph";

const GraphAnnotation = Annotation.Root({
  foo: Annotation<string>
  bar: Annotation<string[]>({
    reducer: (a, b) => [...a, ...b],
    default: () => [],
  })
});
```

Let's now assume the current state of the graph is

```
{ foo: "1", bar: ["a"] }
```

If you update the state as below:

```typescript
await graph.updateState(config, { foo: "2", bar: ["b"] });
```

Then the new state of the graph will be:

```
{ foo: "2", bar: ["a", "b"] }
```

The `foo` key (channel) is completely changed (because there is no reducer specified for that channel, so `updateState` overwrites it). However, there is a reducer specified for the `bar` key, and so it appends `"b"` to the state of `bar`.

#### As Node

The final argument you can optionally specify when calling `updateState` is the third positional `asNode` argument. If you provided it, the update will be applied as if it came from node `asNode`. If `asNode` is not provided, it will be set to the last node that updated the state, if not ambiguous. The reason this matters is that the next steps to execute depend on the last node to have given an update, so this can be used to control which node executes next. See this [how to guide on time-travel to learn more about forking state](/langgraphjs/how-tos/time-travel).

![Update](img/persistence/checkpoints_full_story.jpg)

## Memory Store

![Update](img/persistence/shared_state.png)

A [state schema](low_level.md#state) specifies a set of keys that are populated as a graph is executed. As discussed above, state can be written by a checkpointer to a thread at each graph step, enabling state persistence.

But, what if we want to retrain some information _across threads_? Consider the case of a chatbot where we want to retain specific information about the user across _all_ chat conversations (e.g., threads) with that user!

With checkpointers alone, we cannot share information across threads. This motivates the need for the `Store` interface. As an illustration, we can define an `InMemoryStore` to store information about a user across threads.
First, let's showcase this in isolation without using LangGraph.

```ts
import { InMemoryStore } from "@langchain/langgraph";

const inMemoryStore = new InMemoryStore();
```

Memories are namespaced by a `tuple`, which in this specific example will be `[<user_id>, "memories"]`. The namespace can be any length and represent anything, does not have be user specific.

```ts
const userId = "1";
const namespaceForMemory = [userId, "memories"];
```

We use the `store.put` method to save memories to our namespace in the store. When we do this, we specify the namespace, as defined above, and a key-value pair for the memory: the key is simply a unique identifier for the memory (`memoryId`) and the value (an object) is the memory itself.

```ts
import { v4 as uuid4 } from "uuid";

const memoryId = uuid4();
const memory = { food_preference: "I like pizza" };
await inMemoryStore.put(namespaceForMemory, memoryId, memory);
```

We can read out memories in our namespace using `store.search`, which will return all memories for a given user as a list. The most recent memory is the last in the list.

```ts
const memories = await inMemoryStore.search(namespaceForMemory);
console.log(memories.at(-1));

/*
  {
    'value': {'food_preference': 'I like pizza'},
    'key': '07e0caf4-1631-47b7-b15f-65515d4c1843',
    'namespace': ['1', 'memories'],
    'created_at': '2024-10-02T17:22:31.590602+00:00',
    'updated_at': '2024-10-02T17:22:31.590605+00:00'
  }
*/
```

The attributes a retrieved memory has are:

- `value`: The value (itself a dictionary) of this memory
- `key`: The UUID for this memory in this namespace
- `namespace`: A list of strings, the namespace of this memory type
- `created_at`: Timestamp for when this memory was created
- `updated_at`: Timestamp for when this memory was updated

With this all in place, we use the `inMemoryStore` in LangGraph. The `inMemoryStore` works hand-in-hand with the checkpointer: the checkpointer saves state to threads, as discussed above, and the the `inMemoryStore` allows us to store arbitrary information for access _across_ threads. We compile the graph with both the checkpointer and the `inMemoryStore` as follows.

```ts
import { MemorySaver } from "@langchain/langgraph";

// We need this because we want to enable threads (conversations)
const checkpointer = new MemorySaver();

// ... Define the graph ...

// Compile the graph with the checkpointer and store
const graph = builder.compile({
  checkpointer,
  store: inMemoryStore,
});
```

We invoke the graph with a `thread_id`, as before, and also with a `user_id`, which we'll use to namespace our memories to this particular user as we showed above.

```ts
// Invoke the graph
const user_id = "1";
const config = { configurable: { thread_id: "1", user_id } };

// First let's just say hi to the AI
const stream = await graph.stream(
  { messages: [{ role: "user", content: "hi" }] },
  { ...config, streamMode: "updates" }
);

for await (const update of stream) {
  console.log(update);
}
```

We can access the `inMemoryStore` and the `user_id` in _any node_ by passing `config: LangGraphRunnableConfig` as a node argument. Then, just as we saw above, simply use the `put` method to save memories to the store.

```ts
import {
  type LangGraphRunnableConfig,
  MessagesAnnotation,
} from "@langchain/langgraph";

const updateMemory = async (
  state: typeof MessagesAnnotation.State,
  config: LangGraphRunnableConfig
) => {
  // Get the store instance from the config
  const store = config.store;

  // Get the user id from the config
  const userId = config.configurable.user_id;

  // Namespace the memory
  const namespace = [userId, "memories"];

  // ... Analyze conversation and create a new memory

  // Create a new memory ID
  const memoryId = uuid4();

  // We create a new memory
  await store.put(namespace, memoryId, { memory });
};
```

As we showed above, we can also access the store in any node and use `search` to get memories. Recall the the memories are returned as a list of objects that can be converted to a dictionary.

```ts
const memories = inMemoryStore.search(namespaceForMemory);
console.log(memories.at(-1));

/*
  {
    'value': {'food_preference': 'I like pizza'},
    'key': '07e0caf4-1631-47b7-b15f-65515d4c1843',
    'namespace': ['1', 'memories'],
    'created_at': '2024-10-02T17:22:31.590602+00:00',
    'updated_at': '2024-10-02T17:22:31.590605+00:00'
  }
*/
```

We can access the memories and use them in our model call.

```ts
const callModel = async (
  state: typeof StateAnnotation.State,
  config: LangGraphRunnableConfig
) => {
  const store = config.store;

  // Get the user id from the config
  const userId = config.configurable.user_id;

  // Get the memories for the user from the store
  const memories = await store.search([userId, "memories"]);
  const info = memories
    .map((memory) => {
      return JSON.stringify(memory.value);
    })
    .join("\n");

  // ... Use memories in the model call
};
```

If we create a new thread, we can still access the same memories so long as the `user_id` is the same.

```ts
// Invoke the graph
const config = { configurable: { thread_id: "2", user_id: "1" } };

// Let's say hi again
const stream = await graph.stream(
  { messages: [{ role: "user", content: "hi, tell me about my memories" }] },
  { ...config, streamMode: "updates" }
);

for await (const update of stream) {
  console.log(update);
}
```

When we use the LangGraph API, either locally (e.g., in LangGraph Studio) or with LangGraph Cloud, the memory store is available to use by default and does not need to be specified during graph compilation.

## Checkpointer libraries

Under the hood, checkpointing is powered by checkpointer objects that conform to [BaseCheckpointSaver](/langgraphjs/reference/classes/checkpoint.BaseCheckpointSaver.html) interface. LangGraph provides several checkpointer implementations, all implemented via standalone, installable libraries:

- `@langchain/langgraph-checkpoint`: The base interface for checkpointer savers ([BaseCheckpointSaver](/langgraphjs/reference/classes/checkpoint.BaseCheckpointSaver.html)) and serialization/deserialization interface ([SerializerProtocol](/langgraphjs/reference/interfaces/checkpoint.SerializerProtocol.html)). Includes in-memory checkpointer implementation ([MemorySaver](/langgraphjs/reference/classes/checkpoint.MemorySaver.html)) for experimentation. LangGraph comes with `@langchain/langgraph-checkpoint` included.
- `@langchain/langgraph-checkpoint-sqlite`: An implementation of LangGraph checkpointer that uses SQLite database ([SqliteSaver](/langgraphjs/reference/classes/checkpoint_sqlite.SqliteSaver.html)). Ideal for experimentation and local workflows. Needs to be installed separately.
- `@langchain/langgraph-checkpoint-postgres`: An advanced checkpointer that uses a Postgres database ([PostgresSaver](/langgraphjs/reference/classes/checkpoint_postgres.PostgresSaver.html)), used in LangGraph Cloud. Ideal for using in production. Needs to be installed separately.

### Checkpointer interface

Each checkpointer conforms to [BaseCheckpointSaver](/langgraphjs/reference/classes/checkpoint.BaseCheckpointSaver.html) interface and implements the following methods:

- `.put` - Store a checkpoint with its configuration and metadata.
- `.putWrites` - Store intermediate writes linked to a checkpoint (i.e. [pending writes](#pending-writes)).
- `.getTuple` - Fetch a checkpoint tuple using for a given configuration (`thread_id` and `checkpoint_id`). This is used to populate `StateSnapshot` in `graph.getState()`.
- `.list` - List checkpoints that match a given configuration and filter criteria. This is used to populate state history in `graph.getStateHistory()`

### Serializer

When checkpointers save the graph state, they need to serialize the channel values in the state. This is done using serializer objects.
`@langchain/langgraph-checkpoint` defines a [protocol](/langgraphjs/reference/interfaces/checkpoint.SerializerProtocol.html) for implementing serializers and a default implementation that handles a wide variety of types, including LangChain and LangGraph primitives, datetimes, enums and more.

## Capabilities

### Human-in-the-loop

First, checkpointers facilitate [human-in-the-loop workflows](/langgraphjs/concepts/agentic_concepts#human-in-the-loop) workflows by allowing humans to inspect, interrupt, and approve graph steps. Checkpointers are needed for these workflows as the human has to be able to view the state of a graph at any point in time, and the graph has to be to resume execution after the human has made any updates to the state. See [these how-to guides](/langgraphjs/how-tos/breakpoints) for concrete examples.

### Memory

Second, checkpointers allow for ["memory"](/langgraphjs/concepts/agentic_concepts#memory) between interactions. In the case of repeated human interactions (like conversations) any follow up messages can be sent to that thread, which will retain its memory of previous ones. See [this how-to guide](/langgraphjs/how-tos/manage-conversation-history) for an end-to-end example on how to add and manage conversation memory using checkpointers.

### Time Travel

Third, checkpointers allow for ["time travel"](/langgraphjs/how-tos/time-travel), allowing users to replay prior graph executions to review and / or debug specific graph steps. In addition, checkpointers make it possible to fork the graph state at arbitrary checkpoints to explore alternative trajectories.

### Fault-tolerance

Lastly, checkpointing also provides fault-tolerance and error recovery: if one or more nodes fail at a given superstep, you can restart your graph from the last successful step. Additionally, when a graph node fails mid-execution at a given superstep, LangGraph stores pending checkpoint writes from any other nodes that completed successfully at that superstep, so that whenever we resume graph execution from that superstep we don't re-run the successful nodes.

#### Pending writes

Additionally, when a graph node fails mid-execution at a given superstep, LangGraph stores pending checkpoint writes from any other nodes that completed successfully at that superstep, so that whenever we resume graph execution from that superstep we don't re-run the successful nodes.

================================================
File: /docs/docs/concepts/streaming.md
================================================

# Streaming

LangGraph is built with first class support for streaming. There are several different ways to stream back outputs from a graph run

## Streaming graph outputs (`.stream`)

`.stream` is an async method for streaming back outputs from a graph run.
There are several different modes you can specify when calling these methods (e.g. `await graph.stream(..., { ...config, streamMode: "values" })):

- [`"values"`](/langgraphjs/how-tos/stream-values): This streams the full value of the state after each step of the graph.
- [`"updates"`](/langgraphjs/how-tos/stream-updates): This streams the updates to the state after each step of the graph. If multiple updates are made in the same step (e.g. multiple nodes are run) then those updates are streamed separately.
- [`"custom"`](/langgraphjs/how-tos/streaming-content.ipynb): This streams custom data from inside your graph nodes.
- [`"messages"`](/langgraphjs/how-tos/streaming-tokens.ipynb): This streams LLM tokens and metadata for the graph node where LLM is invoked.
- `"debug"`: This streams as much information as possible throughout the execution of the graph.

The below visualization shows the difference between the `values` and `updates` modes:

![values vs updates](./img/streaming/values_vs_updates.png)

## Streaming LLM tokens and events (`.streamEvents`)

In addition, you can use the [`streamEvents`](/langgraphjs/how-tos/streaming-events-from-within-tools) method to stream back events that happen _inside_ nodes. This is useful for streaming tokens of LLM calls.

This is a standard method on all [LangChain objects](https://js.langchain.com/docs/concepts/#runnable-interface). This means that as the graph is executed, certain events are emitted along the way and can be seen if you run the graph using `.streamEvents`.

All events have (among other things) `event`, `name`, and `data` fields. What do these mean?

- `event`: This is the type of event that is being emitted. You can find a detailed table of all callback events and triggers [here](https://js.langchain.com/docs/concepts/#callback-events).
- `name`: This is the name of event.
- `data`: This is the data associated with the event.

What types of things cause events to be emitted?

- each node (runnable) emits `on_chain_start` when it starts execution, `on_chain_stream` during the node execution and `on_chain_end` when the node finishes. Node events will have the node name in the event's `name` field
- the graph will emit `on_chain_start` in the beginning of the graph execution, `on_chain_stream` after each node execution and `on_chain_end` when the graph finishes. Graph events will have the `LangGraph` in the event's `name` field
- Any writes to state channels (i.e. anytime you update the value of one of your state keys) will emit `on_chain_start` and `on_chain_end` events

Additionally, any events that are created inside your nodes (LLM events, tool events, manually emitted events, etc.) will also be visible in the output of `.streamEvents`.

To make this more concrete and to see what this looks like, let's see what events are returned when we run a simple graph:

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { StateGraph, MessagesAnnotation } from "langgraph";

const model = new ChatOpenAI({ model: "gpt-4-turbo-preview" });

function callModel(state: typeof MessagesAnnotation.State) {
  const response = model.invoke(state.messages);
  return { messages: response };
}

const workflow = new StateGraph(MessagesAnnotation)
  .addNode("callModel", callModel)
  .addEdge("start", "callModel")
  .addEdge("callModel", "end");
const app = workflow.compile();

const inputs = [{ role: "user", content: "hi!" }];

for await (const event of app.streamEvents({ messages: inputs })) {
  const kind = event.event;
  console.log(`${kind}: ${event.name}`);
}
```

```shell
on_chain_start: LangGraph
on_chain_start: __start__
on_chain_end: __start__
on_chain_start: callModel
on_chat_model_start: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_stream: ChatOpenAI
on_chat_model_end: ChatOpenAI
on_chain_start: ChannelWrite<callModel,messages>
on_chain_end: ChannelWrite<callModel,messages>
on_chain_stream: callModel
on_chain_end: callModel
on_chain_stream: LangGraph
on_chain_end: LangGraph
```

We start with the overall graph start (`on_chain_start: LangGraph`). We then write to the `__start__` node (this is special node to handle input).
We then start the `callModel` node (`on_chain_start: callModel`). We then start the chat model invocation (`on_chat_model_start: ChatOpenAI`),
stream back token by token (`on_chat_model_stream: ChatOpenAI`) and then finish the chat model (`on_chat_model_end: ChatOpenAI`). From there,
we write the results back to the channel (`ChannelWrite<callModel,messages>`) and then finish the `callModel` node and then the graph as a whole.

This should hopefully give you a good sense of what events are emitted in a simple graph. But what data do these events contain?
Each type of event contains data in a different format. Let's look at what `on_chat_model_stream` events look like. This is an important type of event
since it is needed for streaming tokens from an LLM response.

These events look like:

```shell
{'event': 'on_chat_model_stream',
 'name': 'ChatOpenAI',
 'run_id': '3fdbf494-acce-402e-9b50-4eab46403859',
 'tags': ['seq:step:1'],
 'metadata': {'langgraph_step': 1,
  'langgraph_node': 'callModel',
  'langgraph_triggers': ['start:callModel'],
  'langgraph_task_idx': 0,
  'checkpoint_id': '1ef657a0-0f9d-61b8-bffe-0c39e4f9ad6c',
  'checkpoint_ns': 'callModel',
  'ls_provider': 'openai',
  'ls_model_name': 'gpt-4o-mini',
  'ls_model_type': 'chat',
  'ls_temperature': 0.7},
 'data': {'chunk': AIMessageChunk({ content: 'Hello', id: 'run-3fdbf494-acce-402e-9b50-4eab46403859' })},
 'parent_ids': []}
```

We can see that we have the event type and name (which we knew from before).

We also have a bunch of stuff in metadata. Noticeably, `'langgraph_node': 'callModel',` is some really helpful information
which tells us which node this model was invoked inside of.

Finally, `data` is a really important field. This contains the actual data for this event! Which in this case
is an AIMessageChunk. This contains the `content` for the message, as well as an `id`.
This is the ID of the overall AIMessage (not just this chunk) and is super helpful - it helps
us track which chunks are part of the same message (so we can show them together in the UI).

This information contains all that is needed for creating a UI for streaming LLM tokens.

================================================
File: /docs/docs/concepts/langgraph_cloud.md
================================================

# Cloud SaaS

!!! info "Prerequisites" - [LangGraph Platform](./langgraph_platform.md) - [LangGraph Server](./langgraph_server.md)

## Overview

LangGraph's Cloud SaaS is a managed service that provides a scalable and secure environment for deploying LangGraph APIs. It is designed to work seamlessly with your LangGraph API regardless of how it is defined, what tools it uses, or any dependencies. Cloud SaaS provides a simple way to deploy and manage your LangGraph API in the cloud.

## Deployment

A **deployment** is an instance of a LangGraph API. A single deployment can have many [revisions](#revision). When a deployment is created, all the necessary infrastructure (e.g. database, containers, secrets store) are automatically provisioned. See the [architecture diagram](#architecture) below for more details.

See the [how-to guide](https://langchain-ai.github.io/langgraph/cloud/deployment/cloud.md#create-new-deployment) for creating a new deployment.

## Revision

A revision is an iteration of a [deployment](#deployment). When a new deployment is created, an initial revision is automatically created. To deploy new code changes or update environment variable configurations for a deployment, a new revision must be created. When a revision is created, a new container image is built automatically.

See the [how-to guide](https://langchain-ai.github.io/langgraph/cloud/deployment/cloud.md#create-new-revision) for creating a new revision.

## Asynchronous Deployment

Infrastructure for [deployments](#deployment) and [revisions](#revision) are provisioned and deployed asynchronously. They are not deployed immediately after submission. Currently, deployment can take up to several minutes.

## Architecture

!!! warning "Subject to Change"
The Cloud SaaS deployment architecture may change in the future.

A high-level diagram of a Cloud SaaS deployment.

![diagram](img/langgraph_cloud_architecture.png)

## Related

- [Deployment Options](./deployment_options.md)

================================================
File: /docs/docs/concepts/self_hosted.md
================================================

# Self-Hosted

!!! note Prerequisites

    - [LangGraph Platform](./langgraph_platform.md)
    - [Deployment Options](./deployment_options.md)

## Versions

There are two versions of the self hosted deployment: [Self-Hosted Enterprise](./deployment_options.md#self-hosted-enterprise) and [Self-Hosted Lite](./deployment_options.md#self-hosted-lite).

### Self-Hosted Lite

The Self-Hosted Lite version is a limited version of LangGraph Platform that you can run locally or in a self-hosted manner (up to 1 million nodes executed).

When using the Self-Hosted Lite version, you authenticate with a [LangSmith](https://smith.langchain.com/) API key.

### Self-Hosted Enterprise

The Self-Hosted Enterprise version is the full version of LangGraph Platform.

To use the Self-Hosted Enterprise version, you must acquire a license key that you will need to pass in when running the Docker image. To acquire a license key, please email sales@langchain.dev.

## Requirements

- You use `langgraph-cli` and/or [LangGraph Studio](./langgraph_studio.md) app to test graph locally.
- You use `langgraph build` command to build image.

## How it works

- Deploy Redis and Postgres instances on your own infrastructure.
- Build the docker image for [LangGraph Server](./langgraph_server.md) using the [LangGraph CLI](./langgraph_cli.md)
- Deploy a web server that will run the docker image and pass in the necessary environment variables.

See the [how-to guide](../how-tos/deploy-self-hosted.md)

================================================
File: /docs/docs/concepts/sdk.md
================================================

# LangGraph SDK

!!! info "Prerequisites" - [LangGraph Platform](./langgraph_platform.md) - [LangGraph Server](./langgraph_server.md)

The LangGraph Platform provides both a Python and JS SDK for interacting with the [LangGraph Server API](./langgraph_server.md).

## Installation

You can install the packages using the appropriate package manager for your language.

=== "Python"
`bash
    pip install langgraph-sdk
    `

=== "JS"
`bash
    yarn add @langchain/langgraph-sdk
    `

## API Reference

You can find the API reference for the SDKs here:

- [Python SDK Reference](https://langchain-ai.github.io/langgraph/cloud/reference/sdk/python_sdk_ref/)
- [JS/TS SDK Reference](https://langchain-ai.github.io/langgraph/cloud/reference/sdk/js_ts_sdk_ref/)

## Python Sync vs. Async

The Python SDK provides both synchronous (`get_sync_client`) and asynchronous (`get_client`) clients for interacting with the LangGraph Server API.

=== "Async"
```python
from langgraph_sdk import get_client

    client = get_client(url=..., api_key=...)
    await client.assistants.search()
    ```

=== "Sync"

    ```python
    from langgraph_sdk import get_sync_client

    client = get_sync_client(url=..., api_key=...)
    client.assistants.search()
    ```

## Related

- [LangGraph CLI API Reference](https://langchain-ai.github.io/langgraph/cloud/reference/cli/)
- [Python SDK Reference](https://langchain-ai.github.io/langgraph/cloud/reference/sdk/python_sdk_ref/)
- [JS/TS SDK Reference](https://langchain-ai.github.io/langgraph/cloud/reference/sdk/js_ts_sdk_ref/)

================================================
File: /docs/docs/concepts/low_level.md
================================================

# LangGraph Glossary

## Graphs

At its core, LangGraph models agent workflows as graphs. You define the behavior of your agents using three key components:

1. [`State`](#state): A shared data structure that represents the current snapshot of your application. It is represented by an [`Annotation`](/langgraphjs/reference/modules/langgraph.Annotation.html) object.

2. [`Nodes`](#nodes): JavaScript/TypeScript functions that encode the logic of your agents. They receive the current `State` as input, perform some computation or side-effect, and return an updated `State`.

3. [`Edges`](#edges): JavaScript/TypeScript functions that determine which `Node` to execute next based on the current `State`. They can be conditional branches or fixed transitions.

By composing `Nodes` and `Edges`, you can create complex, looping workflows that evolve the `State` over time. The real power, though, comes from how LangGraph manages that `State`. To emphasize: `Nodes` and `Edges` are nothing more than JavaScript/TypeScript functions - they can contain an LLM or just good ol' JavaScript/TypeScript code.

In short: _nodes do the work. edges tell what to do next_.

LangGraph's underlying graph algorithm uses [message passing](https://en.wikipedia.org/wiki/Message_passing) to define a general program. When a Node completes its operation, it sends messages along one or more edges to other node(s). These recipient nodes then execute their functions, pass the resulting messages to the next set of nodes, and the process continues. Inspired by Google's [Pregel](https://research.google/pubs/pregel-a-system-for-large-scale-graph-processing/) system, the program proceeds in discrete "super-steps."

A super-step can be considered a single iteration over the graph nodes. Nodes that run in parallel are part of the same super-step, while nodes that run sequentially belong to separate super-steps. At the start of graph execution, all nodes begin in an `inactive` state. A node becomes `active` when it receives a new message (state) on any of its incoming edges (or "channels"). The active node then runs its function and responds with updates. At the end of each super-step, nodes with no incoming messages vote to `halt` by marking themselves as `inactive`. The graph execution terminates when all nodes are `inactive` and no messages are in transit.

### StateGraph

The `StateGraph` class is the main graph class to use. This is parameterized by a user defined `State` object. (defined using the `Annotation` object and passed as the first argument)

### MessageGraph (legacy) {#messagegraph}

The `MessageGraph` class is a special type of graph. The `State` of a `MessageGraph` is ONLY an array of messages. This class is rarely used except for chatbots, as most applications require the `State` to be more complex than an array of messages.

### Compiling your graph

To build your graph, you first define the [state](#state), you then add [nodes](#nodes) and [edges](#edges), and then you compile it. What exactly is compiling your graph and why is it needed?

Compiling is a pretty simple step. It provides a few basic checks on the structure of your graph (no orphaned nodes, etc). It is also where you can specify runtime args like checkpointers and [breakpoints](#breakpoints). You compile your graph by just calling the `.compile` method:

```typescript
const graph = graphBuilder.compile(...);
```

You **MUST** compile your graph before you can use it.

## State

The first thing you do when you define a graph is define the `State` of the graph. The `State` includes information on the structure of the graph, as well as [`reducer` functions](#reducers) which specify how to apply updates to the state. The schema of the `State` will be the input schema to all `Nodes` and `Edges` in the graph, and should be defined using an [`Annotation`](/langgraphjs/reference/modules/langgraph.Annotation.html) object. All `Nodes` will emit updates to the `State` which are then applied using the specified `reducer` function.

### Annotation

The way to specify the schema of a graph is by defining a root [`Annotation`](/langgraphjs/reference/modules/langgraph.Annotation.html) object, where each key is an item in the state.

#### Multiple schemas

Typically, all graph nodes communicate with a single state annotation. This means that they will read and write to the same state channels. But, there are cases where we want more control over this:

- Internal nodes can pass information that is not required in the graph's input / output.
- We may also want to use different input / output schemas for the graph. The output might, for example, only contain a single relevant output key.

It is possible to have nodes write to private state channels inside the graph for internal node communication. We can simply define a private annotation, `PrivateState`. See [this notebook](../how-tos/pass_private_state.ipynb) for more detail.

It is also possible to define explicit input and output schemas for a graph. In these cases, we define an "internal" schema that contains _all_ keys relevant to graph operations. But, we also define `input` and `output` schemas that are sub-sets of the "internal" schema to constrain the input and output of the graph. See [this guide](../how-tos/input_output_schema.ipynb) for more detail.

Let's look at an example:

```ts
import { Annotation, StateGraph } from "@langchain/langgraph";

const InputStateAnnotation = Annotation.Root({
  user_input: Annotation<string>,
});

const OutputStateAnnotation = Annotation.Root({
  graph_output: Annotation<string>,
});

const OverallStateAnnotation = Annotation.Root({
  foo: Annotation<string>,
  bar: Annotation<string>,
  user_input: Annotation<string>,
  graph_output: Annotation<string>,
});

const node1 = async (state: typeof InputStateAnnotation.State) => {
  // Write to OverallStateAnnotation
  return { foo: state.user_input + " name" };
};

const node2 = async (state: typeof OverallStateAnnotation.State) => {
  // Read from OverallStateAnnotation, write to OverallStateAnnotation
  return { bar: state.foo + " is" };
};

const node3 = async (state: typeof OverallStateAnnotation.State) => {
  // Read from OverallStateAnnotation, write to OutputStateAnnotation
  return { graph_output: state.bar + " Lance" };
};

const graph = new StateGraph({
  input: InputStateAnnotation,
  output: OutputStateAnnotation,
  stateSchema: OverallStateAnnotation,
})
  .addNode("node1", node1)
  .addNode("node2", node2)
  .addNode("node3", node3)
  .addEdge("__start__", "node1")
  .addEdge("node1", "node2")
  .addEdge("node2", "node3")
  .compile();

await graph.invoke({ user_input: "My" });
```

```
{ graph_output: "My name is Lance" }
```

Note that we pass `state: typeof InputStateAnnotation.State` as the input schema to `node1`. But, we write out to `foo`, a channel in `OverallStateAnnotation`. How can we write out to a state channel that is not included in the input schema? This is because a node _can write to any state channel in the graph state._ The graph state is the union of of the state channels defined at initialization, which includes `OverallStateAnnotation` and the filters `InputStateAnnotation` and `OutputStateAnnotation`.

### Reducers

Reducers are key to understanding how updates from nodes are applied to the `State`. Each key in the `State` has its own independent reducer function. If no reducer function is explicitly specified then it is assumed that all updates to that key should override it. Let's take a look at a few examples to understand them better.

**Example A:**

```typescript
import { StateGraph, Annotation } from "@langchain/langgraph";

const State = Annotation.Root({
  foo: Annotation<number>,
  bar: Annotation<string[]>,
});

const graphBuilder = new StateGraph(State);
```

In this example, no reducer functions are specified for any key. Let's assume the input to the graph is `{ foo: 1, bar: ["hi"] }`. Let's then assume the first `Node` returns `{ foo: 2 }`. This is treated as an update to the state. Notice that the `Node` does not need to return the whole `State` schema - just an update. After applying this update, the `State` would then be `{ foo: 2, bar: ["hi"] }`. If the second node returns `{ bar: ["bye"] }` then the `State` would then be `{ foo: 2, bar: ["bye"] }`

**Example B:**

```typescript
import { StateGraph, Annotation } from "@langchain/langgraph";

const State = Annotation.Root({
  foo: Annotation<number>,
  bar: Annotation<string[]>({
    reducer: (state: string[], update: string[]) => state.concat(update),
    default: () => [],
  }),
});

const graphBuilder = new StateGraph(State);
```

In this example, we've updated our `bar` field to be an object containing a `reducer` function. This function will always accept two positional arguments: `state` and `update`, with `state` representing the current state value, and `update` representing the update returned from a `Node`. Note that the first key remains unchanged. Let's assume the input to the graph is `{ foo: 1, bar: ["hi"] }`. Let's then assume the first `Node` returns `{ foo: 2 }`. This is treated as an update to the state. Notice that the `Node` does not need to return the whole `State` schema - just an update. After applying this update, the `State` would then be `{ foo: 2, bar: ["hi"] }`. If the second node returns`{ bar: ["bye"] }` then the `State` would then be `{ foo: 2, bar: ["hi", "bye"] }`. Notice here that the `bar` key is updated by concatenating the two arrays together.

### Working with Messages in Graph State

#### Why use messages?

Most modern LLM providers have a chat model interface that accepts a list of messages as input. LangChain's [`ChatModel`](https://js.langchain.com/docs/concepts/#chat-models) in particular accepts a list of `Message` objects as inputs. These messages come in a variety of forms such as `HumanMessage` (user input) or `AIMessage` (LLM response). To read more about what message objects are, please refer to [this](https://js.langchain.com/docs/concepts/#message-types) conceptual guide.

#### Using Messages in your Graph

In many cases, it is helpful to store prior conversation history as a list of messages in your graph state. To do so, we can add a key (channel) to the graph state that stores a list of `Message` objects and annotate it with a reducer function (see `messages` key in the example below). The reducer function is vital to telling the graph how to update the list of `Message` objects in the state with each state update (for example, when a node sends an update). If you don't specify a reducer, every state update will overwrite the list of messages with the most recently provided value.

However, you might also want to manually update messages in your graph state (e.g. human-in-the-loop). If you were to use something like `(a, b) => a.concat(b)` as a reducer, the manual state updates you send to the graph would be appended to the existing list of messages, instead of updating existing messages. To avoid that, you need a reducer that can keep track of message IDs and overwrite existing messages, if updated. To achieve this, you can use the prebuilt `messagesStateReducer` function. For brand new messages, it will simply append to existing list, but it will also handle the updates for existing messages correctly.

#### Serialization

In addition to keeping track of message IDs, the `messagesStateReducer` function will also try to deserialize messages into LangChain `Message` objects whenever a state update is received on the `messages` channel. This allows sending graph inputs / state updates in the following format:

```ts
// this is supported
{
  messages: [new HumanMessage({ content: "message" })];
}

// and this is also supported
{
  messages: [{ role: "user", content: "message" }];
}
```

Below is an example of a graph state annotation that uses `messagesStateReducer` as it's reducer function.

```ts
import type { BaseMessage } from "@langchain/core/messages";
import { Annotation, type Messages } from "@langchain/langgraph";

const StateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[], Messages>({
    reducer: messagesStateReducer,
  }),
});
```

#### MessagesAnnotation

Since having a list of messages in your state is so common, there exists a prebuilt annotation called `MessagesAnnotation` which makes it easy to use messages as graph state. `MessagesAnnotation` is defined with a single `messages` key which is a list of `BaseMessage` objects and uses the `messagesStateReducer` reducer.

```typescript
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";

const graph = new StateGraph(MessagesAnnotation)
  .addNode(...)
  ...
```

Is equivalent to initializing your state manually like this:

```typescript
import { BaseMessage } from "@langchain/core/messages";
import { Annotation, StateGraph, messagesStateReducer } from "@langchain/langgraph";

export const StateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: messagesStateReducer,
    default: () => [],
  }),
});

const graph = new StateGraph(StateAnnotation)
  .addNode(...)
  ...
```

The state of a `MessagesAnnotation` has a single key called `messages`. This is an array of `BaseMessage`s, with [`messagesStateReducer`](/langgraphjs/reference/functions/langgraph.messagesStateReducer.html) as a reducer. `messagesStateReducer` basically adds messages to the existing list (it also does some nice extra things, like convert from OpenAI message format to the standard LangChain message format, handle updates based on message IDs, etc).

We often see an array of messages being a key component of state, so this prebuilt state is intended to make it easy to use messages. Typically, there is more state to track than just messages, so we see people extend this state and add more fields, like:

```typescript
import { Annotation, MessagesAnnotation } from "@langchain/langgraph";

const StateWithDocuments = Annotation.Root({
  ...MessagesAnnotation.spec, // Spread in the messages state
  documents: Annotation<string[]>,
});
```

## Nodes

In LangGraph, nodes are typically JavaScript/TypeScript functions (sync or `async`) where the **first** positional argument is the [state](#state), and (optionally), the **second** positional argument is a "config", containing optional [configurable parameters](#configuration) (such as a `thread_id`).

Similar to `NetworkX`, you add these nodes to a graph using the [addNode](/langgraphjs/reference/classes/langgraph.StateGraph.html#addNode) method:

```typescript
import { RunnableConfig } from "@langchain/core/runnables";
import { StateGraph, Annotation } from "@langchain/langgraph";

const GraphAnnotation = Annotation.Root({
  input: Annotation<string>,
  results: Annotation<string>,
});

// The state type can be extracted using `typeof <annotation variable name>.State`
const myNode = (state: typeof GraphAnnotation.State, config?: RunnableConfig) => {
  console.log("In node: ", config.configurable?.user_id);
  return {
    results: `Hello, ${state.input}!`
  };
};

// The second argument is optional
const myOtherNode = (state: typeof GraphAnnotation.State) => {
  return state;
};

const builder = new StateGraph(GraphAnnotation)
  .addNode("myNode", myNode)
  .addNode("myOtherNode", myOtherNode)
  ...
```

Behind the scenes, functions are converted to [RunnableLambda's](https://v02.api.js.langchain.com/classes/langchain_core_runnables.RunnableLambda.html), which adds batch and streaming support to your function, along with native tracing and debugging.

### `START` Node

The `START` Node is a special node that represents the node sends user input to the graph. The main purpose for referencing this node is to determine which nodes should be called first.

```typescript
import { START } from "@langchain/langgraph";

graph.addEdge(START, "nodeA");
```

### `END` Node

The `END` Node is a special node that represents a terminal node. This node is referenced when you want to denote which edges have no actions after they are done.

```typescript
import { END } from "@langchain/langgraph";

graph.addEdge("nodeA", END);
```

## Edges

Edges define how the logic is routed and how the graph decides to stop. This is a big part of how your agents work and how different nodes communicate with each other. There are a few key types of edges:

- Normal Edges: Go directly from one node to the next.
- Conditional Edges: Call a function to determine which node(s) to go to next.
- Entry Point: Which node to call first when user input arrives.
- Conditional Entry Point: Call a function to determine which node(s) to call first when user input arrives.

A node can have MULTIPLE outgoing edges. If a node has multiple out-going edges, **all** of those destination nodes will be executed in parallel as a part of the next superstep.

### Normal Edges

If you **always** want to go from node A to node B, you can use the [addEdge](/langgraphjs/reference/classes/langgraph.StateGraph.html#addEdge) method directly.

```typescript
graph.addEdge("nodeA", "nodeB");
```

### Conditional Edges

If you want to **optionally** route to 1 or more edges (or optionally terminate), you can use the [addConditionalEdges](/langgraphjs/reference/classes/langgraph.StateGraph.html#addConditionalEdges) method. This method accepts the name of a node and a "routing function" to call after that node is executed:

```typescript
graph.addConditionalEdges("nodeA", routingFunction);
```

Similar to nodes, the `routingFunction` accept the current `state` of the graph and return a value.

By default, the return value `routingFunction` is used as the name of the node (or an array of nodes) to send the state to next. All those nodes will be run in parallel as a part of the next superstep.

You can optionally provide an object that maps the `routingFunction`'s output to the name of the next node.

```typescript
graph.addConditionalEdges("nodeA", routingFunction, {
  true: "nodeB",
  false: "nodeC",
});
```

!!! tip
Use [`Command`](#command) instead of conditional edges if you want to combine state updates and routing in a single function.

### Entry Point

The entry point is the first node(s) that are run when the graph starts. You can use the [`addEdge`](/langgraphjs/reference/classes/langgraph.StateGraph.html#addEdge) method from the virtual [`START`](/langgraphjs/reference/variables/langgraph.START.html) node to the first node to execute to specify where to enter the graph.

```typescript
import { START } from "@langchain/langgraph";

graph.addEdge(START, "nodeA");
```

### Conditional Entry Point

A conditional entry point lets you start at different nodes depending on custom logic. You can use [`addConditionalEdges`](/langgraphjs/reference/classes/langgraph.StateGraph.html#addConditionalEdges) from the virtual [`START`](/langgraphjs/reference/variables/langgraph.START.html) node to accomplish this.

```typescript
import { START } from "@langchain/langgraph";

graph.addConditionalEdges(START, routingFunction);
```

You can optionally provide an object that maps the `routingFunction`'s output to the name of the next node.

```typescript
graph.addConditionalEdges(START, routingFunction, {
  true: "nodeB",
  false: "nodeC",
});
```

## `Send`

By default, `Nodes` and `Edges` are defined ahead of time and operate on the same shared state. However, there can be cases where the exact edges are not known ahead of time and/or you may want different versions of `State` to exist at the same time. A common of example of this is with `map-reduce` design patterns. In this design pattern, a first node may generate an array of objects, and you may want to apply some other node to all those objects. The number of objects may be unknown ahead of time (meaning the number of edges may not be known) and the input `State` to the downstream `Node` should be different (one for each generated object).

To support this design pattern, LangGraph supports returning [`Send`](/langgraphjs/reference/classes/langgraph.Send.html) objects from conditional edges. `Send` takes two arguments: first is the name of the node, and second is the state to pass to that node.

```typescript
const continueToJokes = (state: { subjects: string[] }) => {
  return state.subjects.map(
    (subject) => new Send("generate_joke", { subject })
  );
};

graph.addConditionalEdges("nodeA", continueToJokes);
```

## `Command`

!!! tip Compatibility
This functionality requires `@langchain/langgraph>=0.2.31`.

It can be convenient to combine control flow (edges) and state updates (nodes). For example, you might want to BOTH perform state updates AND decide which node to go to next in the SAME node rather than use a conditional edge. LangGraph provides a way to do so by returning a [`Command`](https://langchain-ai.github.io/langgraphjs/reference/classes/langgraph.Command.html) object from node functions:

```ts
import { StateGraph, Annotation, Command } from "@langchain/langgraph";

const StateAnnotation = Annotation.Root({
  foo: Annotation<string>,
});

const myNode = (state: typeof StateAnnotation.State) => {
  return new Command({
    // state update
    update: {
      foo: "bar",
    },
    // control flow
    goto: "myOtherNode",
  });
};
```

With `Command` you can also achieve dynamic control flow behavior (identical to [conditional edges](#conditional-edges)):

```ts
const myNode = async (state: typeof StateAnnotation.State) => {
  if (state.foo === "bar") {
    return new Command({
      update: {
        foo: "baz",
      },
      goto: "myOtherNode",
    });
  }
  // ...
};
```

!!! important

    When returning `Command` in your node functions, you must also add an `ends` parameter with the list of node names the node is routing to, e.g. `.addNode("myNode", myNode, { ends: ["myOtherNode"] })`. This is necessary for graph compilation and validation, and indicates that `myNode` can navigate to `myOtherNode`.

Check out this [how-to guide](../how-tos/command.ipynb) for an end-to-end example of how to use `Command`.

### When should I use Command instead of conditional edges?

Use `Command` when you need to **both** update the graph state **and** route to a different node. For example, when implementing [multi-agent handoffs](./multi_agent.md#handoffs) where it's important to route to a different agent and pass some information to that agent.

Use [conditional edges](#conditional-edges) to route between nodes conditionally without updating the state.

### Human-in-the-loop

`Command` is an important part of human-in-the-loop workflows: when using `interrupt()` to collect user input, `Command` is then used to supply the input and resume execution via `new Command({ resume: "User input" })`. Check out [this conceptual guide](/langgraphjs/concepts/human_in_the_loop) for more information.

## Persistence

LangGraph provides built-in persistence for your agent's state using [checkpointers](/langgraphjs/reference/classes/checkpoint.BaseCheckpointSaver.html). Checkpointers save snapshots of the graph state at every superstep, allowing resumption at any time. This enables features like human-in-the-loop interactions, memory management, and fault-tolerance. You can even directly manipulate a graph's state after its execution using the appropriate `get` and `update` methods. For more details, see the [conceptual guide](/langgraphjs/concepts/persistence) for more information.

## Threads

Threads in LangGraph represent individual sessions or conversations between your graph and a user. When using checkpointing, turns in a single conversation (and even steps within a single graph execution) are organized by a unique thread ID.

## Storage

LangGraph provides built-in document storage through the [BaseStore](/langgraphjs/reference/classes/store.BaseStore.html) interface. Unlike checkpointers, which save state by thread ID, stores use custom namespaces for organizing data. This enables cross-thread persistence, allowing agents to maintain long-term memories, learn from past interactions, and accumulate knowledge over time. Common use cases include storing user profiles, building knowledge bases, and managing global preferences across all threads.

## Graph Migrations

LangGraph can easily handle migrations of graph definitions (nodes, edges, and state) even when using a checkpointer to track state.

- For threads at the end of the graph (i.e. not interrupted) you can change the entire topology of the graph (i.e. all nodes and edges, remove, add, rename, etc)
- For threads currently interrupted, we support all topology changes other than renaming / removing nodes (as that thread could now be about to enter a node that no longer exists) -- if this is a blocker please reach out and we can prioritize a solution.
- For modifying state, we have full backwards and forwards compatibility for adding and removing keys
- State keys that are renamed lose their saved state in existing threads
- State keys whose types change in incompatible ways could currently cause issues in threads with state from before the change -- if this is a blocker please reach out and we can prioritize a solution.

## Configuration

When creating a graph, you can also mark that certain parts of the graph are configurable. This is commonly done to enable easily switching between models or system prompts. This allows you to create a single "cognitive architecture" (the graph) but have multiple different instance of it.

You can then pass this configuration into the graph using the `configurable` config field.

```typescript
const config = { configurable: { llm: "anthropic" } };

await graph.invoke(inputs, config);
```

You can then access and use this configuration inside a node:

```typescript
const nodeA = (state, config) => {
  const llmType = config?.configurable?.llm;
  let llm: BaseChatModel;
  if (llmType) {
    const llm = getLlm(llmType);
  }
  ...
};

```

See [this guide](../how-tos/configuration.ipynb) for a full breakdown on configuration

## Breakpoints

It can often be useful to set breakpoints before or after certain nodes execute. This can be used to wait for human approval before continuing. These can be set when you ["compile" a graph](#compiling-your-graph), or thrown dynamically using a special error called a [`NodeInterrupt`](../how-tos/dynamic_breakpoints.ipynb). You can set breakpoints either _before_ a node executes (using `interruptBefore`) or after a node executes (using `interruptAfter`).

You **MUST** use a checkpointer when using breakpoints. This is because your graph needs to be able to resume execution after interrupting.

In order to resume execution, you can just invoke your graph with `null` as the input and the same `thread_id`.

```typescript
const config = { configurable: { thread_id: "foo" } };

// Initial run of graph
await graph.invoke(inputs, config);

// Let's assume it hit a breakpoint somewhere, you can then resume by passing in None
await graph.invoke(null, config);
```

See [this guide](../how-tos/breakpoints.ipynb) for a full walkthrough of how to add breakpoints.

### Dynamic Breakpoints

It may be helpful to **dynamically** interrupt the graph from inside a given node based on some condition. In `LangGraph` you can do so by using `NodeInterrupt` -- a special error that can be raised from inside a node.

```typescript
function myNode(
  state: typeof GraphAnnotation.State
): typeof GraphAnnotation.State {
  if (state.input.length > 5) {
    throw new NodeInterrupt(
      `Received input that is longer than 5 characters: ${state.input}`
    );
  }

  return state;
}
```

## Subgraphs

A subgraph is a [graph](#graphs) that is used as a [node](#nodes) in another graph. This is nothing more than the age-old concept of encapsulation, applied to LangGraph. Some reasons for using subgraphs are:

- building [multi-agent systems](./multi_agent.md)
- when you want to reuse a set of nodes in multiple graphs, which maybe share some state, you can define them once in a subgraph and then use them in multiple parent graphs
- when you want different teams to work on different parts of the graph independently, you can define each part as a subgraph, and as long as the subgraph interface (the input and output schemas) is respected, the parent graph can be built without knowing any details of the subgraph

There are two ways to add subgraphs to a parent graph:

- add a node with the compiled subgraph: this is useful when the parent graph and the subgraph share state keys and you don't need to transform state on the way in or out

```ts
.addNode("subgraph", subgraphBuilder.compile());
```

- add a node with a function that invokes the subgraph: this is useful when the parent graph and the subgraph have different state schemas and you need to transform state before or after calling the subgraph

```ts
const subgraph = subgraphBuilder.compile();

const callSubgraph = async (state: typeof StateAnnotation.State) => {
  return subgraph.invoke({ subgraph_key: state.parent_key });
};

builder.addNode("subgraph", callSubgraph);
```

Let's take a look at examples for each.

### As a compiled graph

The simplest way to create subgraph nodes is by using a [compiled subgraph](#compiling-your-graph) directly. When doing so, it is **important** that the parent graph and the subgraph [state schemas](#state) share at least one key which they can use to communicate. If your graph and subgraph do not share any keys, you should use write a function [invoking the subgraph](#as-a-function) instead.

<div class="admonition note">
    <p class="admonition-title">Note</p>
    <p>
      If you pass extra keys to the subgraph node (i.e., in addition to the shared keys), they will be ignored by the subgraph node. Similarly, if you return extra keys from the subgraph, they will be ignored by the parent graph.
    </p>
</div>

```ts
import { StateGraph, Annotation } from "@langchain/langgraph";

const StateAnnotation = Annotation.Root({
  foo: Annotation<string>,
});

const SubgraphStateAnnotation = Annotation.Root({
  foo: Annotation<string>, // note that this key is shared with the parent graph state
  bar: Annotation<string>,
});

// Define subgraph
const subgraphNode = async (state: typeof SubgraphStateAnnotation.State) => {
  // note that this subgraph node can communicate with
  // the parent graph via the shared "foo" key
  return { foo: state.foo + "bar" };
};

const subgraph = new StateGraph(SubgraphStateAnnotation)
  .addNode("subgraph", subgraphNode);
  ...
  .compile();

// Define parent graph
const parentGraph = new StateGraph(StateAnnotation)
  .addNode("subgraph", subgraph)
  ...
  .compile();
```

### As a function

You might want to define a subgraph with a completely different schema. In this case, you can create a node function that invokes the subgraph. This function will need to [transform](../how-tos/subgraph-transform-state.ipynb) the input (parent) state to the subgraph state before invoking the subgraph, and transform the results back to the parent state before returning the state update from the node.

```ts
import { StateGraph, Annotation } from "@langchain/langgraph";

const StateAnnotation = Annotation.Root({
  foo: Annotation<string>,
});

const SubgraphStateAnnotation = Annotation.Root({
  // note that none of these keys are shared with the parent graph state
  bar: Annotation<string>,
  baz: Annotation<string>,
});

// Define subgraph
const subgraphNode = async (state: typeof SubgraphStateAnnotation.State) => {
  return { bar: state.bar + "baz" };
};

const subgraph = new StateGraph(SubgraphStateAnnotation)
  .addNode("subgraph", subgraphNode);
  ...
  .compile();

// Define parent graph
const subgraphWrapperNode = async (state: typeof StateAnnotation.State) => {
  // transform the state to the subgraph state
  const response = await subgraph.invoke({
    bar: state.foo,
  });
  // transform response back to the parent state
  return {
    foo: response.bar,
  };
}

const parentGraph = new StateGraph(StateAnnotation)
  .addNode("subgraph", subgraphWrapperNode)
  ...
  .compile();
```

## Visualization

It's often nice to be able to visualize graphs, especially as they get more complex. LangGraph comes with a nice built-in way to render a graph as a Mermaid diagram. You can use the `getGraph()` method like this:

```ts
const representation = graph.getGraph();
const image = await representation.drawMermaidPng();
const arrayBuffer = await image.arrayBuffer();
const buffer = new Uint8Array(arrayBuffer);
```

You can also check out [LangGraph Studio](https://github.com/langchain-ai/langgraph-studio) for a bespoke IDE that includes powerful visualization and debugging features.

## Streaming

LangGraph is built with first class support for streaming. There are several different streaming modes that LangGraph supports:

- [`"values"`](../how-tos/stream-values.ipynb): This streams the full value of the state after each step of the graph.
- [`"updates`](../how-tos/stream-updates.ipynb): This streams the updates to the state after each step of the graph. If multiple updates are made in the same step (e.g. multiple nodes are run) then those updates are streamed separately.

In addition, you can use the [`streamEvents`](https://api.js.langchain.com/classes/langchain_core_runnables.Runnable.html#streamEvents) method to stream back events that happen _inside_ nodes. This is useful for [streaming tokens of LLM calls](../how-tos/streaming-tokens-without-langchain.ipynb).

LangGraph is built with first class support for streaming, including streaming updates from graph nodes during execution, streaming tokens from LLM calls and more. See this [conceptual guide](./streaming.md) for more information.

================================================
File: /docs/docs/concepts/multi_agent.md
================================================

# Multi-agent Systems

An [agent](./agentic_concepts.md#agent-architectures) is _a system that uses an LLM to decide the control flow of an application_. As you develop these systems, they might grow more complex over time, making them harder to manage and scale. For example, you might run into the following problems:

- agent has too many tools at its disposal and makes poor decisions about which tool to call next
- context grows too complex for a single agent to keep track of
- there is a need for multiple specialization areas in the system (e.g. planner, researcher, math expert, etc.)

To tackle these, you might consider breaking your application into multiple smaller, independent agents and composing them into a **multi-agent system**. These independent agents can be as simple as a prompt and an LLM call, or as complex as a [ReAct](./agentic_concepts.md#react-implementation) agent (and more!).

The primary benefits of using multi-agent systems are:

- **Modularity**: Separate agents make it easier to develop, test, and maintain agentic systems.
- **Specialization**: You can create expert agents focused on specific domains, which helps with the overall system performance.
- **Control**: You can explicitly control how agents communicate (as opposed to relying on function calling).

## Multi-agent architectures

![](./img/multi_agent/architectures.png)

There are several ways to connect agents in a multi-agent system:

- **Network**: each agent can communicate with every other agent. Any agent can decide which other agent to call next.
- **Supervisor**: each agent communicates with a single [supervisor](https://langchain-ai.github.io/langgraphjs/tutorials/multi_agent/agent_supervisor/) agent. Supervisor agent makes decisions on which agent should be called next.
- **Hierarchical**: you can define a multi-agent system with a supervisor of supervisors. This is a generalization of the supervisor architecture and allows for more complex control flows.
- **Custom multi-agent workflow**: each agent communicates with only a subset of agents. Parts of the flow are deterministic, and only some agents can decide which other agents to call next.

### Handoffs

In multi-agent architectures, agents can be represented as graph nodes. Each agent node executes its step(s) and decides whether to finish execution or route to another agent, including potentially routing to itself (e.g., running in a loop). A common pattern in multi-agent interactions is handoffs, where one agent hands off control to another. Handoffs allow you to specify:

- **destination**: target agent to navigate to (e.g., name of the node to go to)
- **payload**: [information to pass to that agent](#communication-between-agents) (e.g., state update)

To implement handoffs in LangGraph, agent nodes can return [`Command`](./low_level.md#command) object that allows you to combine both control flow and state updates:

```ts
const agent = (state: typeof StateAnnotation.State) => {
  const goto = getNextAgent(...)  // 'agent' / 'another_agent'
  return new Command({
    // Specify which agent to call next
    goto: goto,
    // Update the graph state
    update: {
      foo: "bar",
    }
  });
};
```

In a more complex scenario where each agent node is itself a graph (i.e., a [subgraph](./low_level.md#subgraphs)), a node in one of the agent subgraphs might want to navigate to a different agent. For example, if you have two agents, `alice` and `bob` (subgraph nodes in a parent graph), and `alice` needs to navigate to `bob`, you can set `graph=Command.PARENT` in the `Command` object:

```ts
const some_node_inside_alice = (state) => {
  return new Command({
    goto: "bob",
    update: {
      foo: "bar",
    },
    // specify which graph to navigate to (defaults to the current graph)
    graph: Command.PARENT,
  });
};
```

### Network

In this architecture, agents are defined as graph nodes. Each agent can communicate with every other agent (many-to-many connections) and can decide which agent to call next. This architecture is good for problems that do not have a clear hierarchy of agents or a specific sequence in which agents should be called.

```ts
import {
  StateGraph,
  Annotation,
  MessagesAnnotation,
  Command
} from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
});

const agent1 = async (state: typeof MessagesAnnotation.State) => {
  // you can pass relevant parts of the state to the LLM (e.g., state.messages)
  // to determine which agent to call next. a common pattern is to call the model
  // with a structured output (e.g. force it to return an output with a "next_agent" field)
  const response = await model.withStructuredOutput(...).invoke(...);
  return new Command({
    update: {
      messages: [response.content],
    },
    goto: response.next_agent,
  });
};

const agent2 = async (state: typeof MessagesAnnotation.State) => {
  const response = await model.withStructuredOutput(...).invoke(...);
  return new Command({
    update: {
      messages: [response.content],
    },
    goto: response.next_agent,
  });
};

const agent3 = async (state: typeof MessagesAnnotation.State) => {
  ...
  return new Command({
    update: {
      messages: [response.content],
    },
    goto: response.next_agent,
  });
};

const graph = new StateGraph(MessagesAnnotation)
  .addNode("agent1", agent1, {
    ends: ["agent2", "agent3" "__end__"],
  })
  .addNode("agent2", agent2, {
    ends: ["agent1", "agent3", "__end__"],
  })
  .addNode("agent3", agent3, {
    ends: ["agent1", "agent2", "__end__"],
  })
  .addEdge("__start__", "agent1")
  .compile();
```

### Supervisor

In this architecture, we define agents as nodes and add a supervisor node (LLM) that decides which agent nodes should be called next. We use [`Command`](./low_level.md#command) to route execution to the appropriate agent node based on supervisor's decision. This architecture also lends itself well to running multiple agents in parallel or using [map-reduce](../how-tos/map-reduce.ipynb) pattern.

```ts
import {
  StateGraph,
  MessagesAnnotation,
  Command,
} from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
});

const supervisor = async (state: typeof MessagesAnnotation.State) => {
  // you can pass relevant parts of the state to the LLM (e.g., state.messages)
  // to determine which agent to call next. a common pattern is to call the model
  // with a structured output (e.g. force it to return an output with a "next_agent" field)
  const response = await model.withStructuredOutput(...).invoke(...);
  // route to one of the agents or exit based on the supervisor's decision
  // if the supervisor returns "__end__", the graph will finish execution
  return new Command({
    goto: response.next_agent,
  });
};

const agent1 = async (state: typeof MessagesAnnotation.State) => {
  // you can pass relevant parts of the state to the LLM (e.g., state.messages)
  // and add any additional logic (different models, custom prompts, structured output, etc.)
  const response = await model.invoke(...);
  return new Command({
    goto: "supervisor",
    update: {
      messages: [response],
    },
  });
};

const agent2 = async (state: typeof MessagesAnnotation.State) => {
  const response = await model.invoke(...);
  return new Command({
    goto: "supervisor",
    update: {
      messages: [response],
    },
  });
};

const graph = new StateGraph(MessagesAnnotation)
  .addNode("supervisor", supervisor, {
    ends: ["agent1", "agent2", "__end__"],
  })
  .addNode("agent1", agent1, {
    ends: ["supervisor"],
  })
  .addNode("agent2", agent2, {
    ends: ["supervisor"],
  })
  .addEdge("__start__", "supervisor")
  .compile();
```

Check out this [tutorial](https://langchain-ai.github.io/langgraphjs/tutorials/multi_agent/agent_supervisor/) for an example of supervisor multi-agent architecture.

### Custom multi-agent workflow

In this architecture we add individual agents as graph nodes and define the order in which agents are called ahead of time, in a custom workflow. In LangGraph the workflow can be defined in two ways:

- **Explicit control flow (normal edges)**: LangGraph allows you to explicitly define the control flow of your application (i.e. the sequence of how agents communicate) explicitly, via [normal graph edges](./low_level.md#normal-edges). This is the most deterministic variant of this architecture above — we always know which agent will be called next ahead of time.

- **Dynamic control flow (conditional edges)**: in LangGraph you can allow LLMs to decide parts of your application control flow. This can be achieved by using [`Command`](./low_level.md#command).

```ts
import {
  StateGraph,
  MessagesAnnotation,
} from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
});

const agent1 = async (state: typeof MessagesAnnotation.State) => {
  const response = await model.invoke(...);
  return { messages: [response] };
};

const agent2 = async (state: typeof MessagesAnnotation.State) => {
  const response = await model.invoke(...);
  return { messages: [response] };
};

const graph = new StateGraph(MessagesAnnotation)
  .addNode("agent1", agent1)
  .addNode("agent2", agent2)
  // define the flow explicitly
  .addEdge("__start__", "agent1")
  .addEdge("agent1", "agent2")
  .compile();
```

## Communication between agents

The most important thing when building multi-agent systems is figuring out how the agents communicate. There are few different considerations:

- What if two agents have [**different state schemas**](#different-state-schemas)?
- How to communicate over a [**shared message list**](#shared-message-list)?

#### Graph state

To communicate via graph state, individual agents need to be defined as [graph nodes](./low_level.md#nodes). These can be added as functions or as entire [subgraphs](./low_level.md#subgraphs). At each step of the graph execution, agent node receives the current state of the graph, executes the agent code and then passes the updated state to the next nodes.

Typically agent nodes share a single [state schema](./low_level.md#state). However, you might want to design agent nodes with [different state schemas](#different-state-schemas).

### Different state schemas

An agent might need to have a different state schema from the rest of the agents. For example, a search agent might only need to keep track of queries and retrieved documents. There are two ways to achieve this in LangGraph:

- Define [subgraph](./low_level.md#subgraphs) agents with a separate state schema. If there are no shared state keys (channels) between the subgraph and the parent graph, it’s important to [add input / output transformations](https://langchain-ai.github.io/langgraphjs/how-tos/subgraph-transform-state/) so that the parent graph knows how to communicate with the subgraphs.
- Define agent node functions with a [private input state schema](https://langchain-ai.github.io/langgraphjs/how-tos/pass_private_state/) that is distinct from the overall graph state schema. This allows passing information that is only needed for executing that particular agent.

### Shared message list

The most common way for the agents to communicate is via a shared state channel, typically a list of messages. This assumes that there is always at least a single channel (key) in the state that is shared by the agents. When communicating via a shared message list there is an additional consideration: should the agents [share the full history](#share-full-history) of their thought process or only [the final result](#share-final-result)?

![](./img/multi_agent/response.png)

#### Share full history

Agents can **share the full history** of their thought process (i.e. "scratchpad") with all other agents. This "scratchpad" would typically look like a [list of messages](./low_level.md#why-use-messages). The benefit of sharing full thought process is that it might help other agents make better decisions and improve reasoning ability for the system as a whole. The downside is that as the number of agents and their complexity grows, the "scratchpad" will grow quickly and might require additional strategies for [memory management](./memory.md#managing-long-conversation-history).

#### Share final result

Agents can have their own private "scratchpad" and only **share the final result** with the rest of the agents. This approach might work better for systems with many agents or agents that are more complex. In this case, you would need to define agents with [different state schemas](#different-state-schemas)

For agents called as tools, the supervisor determines the inputs based on the tool schema. Additionally, LangGraph allows [passing state](https://langchain-ai.github.io/langgraphjs/how-tos/pass-run-time-values-to-tools/) to individual tools at runtime, so subordinate agents can access parent state, if needed.

================================================
File: /docs/docs/concepts/application_structure.md
================================================

# Application Structure

!!! info "Prerequisites"

    - [LangGraph Server](./langgraph_server.md)
    - [LangGraph Glossary](./low_level.md)

## Overview

A LangGraph application consists of one or more graphs, a LangGraph API Configuration file (`langgraph.json`), a file that specifies dependencies, and an optional .env file that specifies environment variables.

This guide shows a typical structure for a LangGraph application and shows how the required information to deploy a LangGraph application using the LangGraph Platform is specified.

## Key Concepts

To deploy using the LangGraph Platform, the following information should be provided:

1. A [LangGraph API Configuration file](#configuration-file) (`langgraph.json`) that specifies the dependencies, graphs, environment variables to use for the application.
2. The [graphs](#graphs) that implement the logic of the application.
3. A file that specifies [dependencies](#dependencies) required to run the application.
4. [Environment variable](#environment-variables) that are required for the application to run.

## File Structure

Below are examples of directory structures for Python and JavaScript applications:

=== "JS (package.json)"

    ```plaintext
    my-app/
    ├── src # all project code lies within here
    │   ├── utils # optional utilities for your graph
    │   │   ├── tools.ts # tools for your graph
    │   │   ├── nodes.ts # node functions for you graph
    │   │   └── state.ts # state definition of your graph
    │   └── agent.ts # code for constructing your graph
    ├── package.json # package dependencies
    ├── .env # environment variables
    └── langgraph.json # configuration file for LangGraph
    ```

=== "Python (requirements.txt)"

    ```plaintext
    my-app/
    ├── my_agent # all project code lies within here
    │   ├── utils # utilities for your graph
    │   │   ├── __init__.py
    │   │   ├── tools.py # tools for your graph
    │   │   ├── nodes.py # node functions for you graph
    │   │   └── state.py # state definition of your graph
    │   ├── requirements.txt # package dependencies
    │   ├── __init__.py
    │   └── agent.py # code for constructing your graph
    ├── .env # environment variables
    └── langgraph.json # configuration file for LangGraph
    ```

=== "Python (pyproject.toml)"

    ```plaintext
    my-app/
    ├── my_agent # all project code lies within here
    │   ├── utils # utilities for your graph
    │   │   ├── __init__.py
    │   │   ├── tools.py # tools for your graph
    │   │   ├── nodes.py # node functions for you graph
    │   │   └── state.py # state definition of your graph
    │   ├── __init__.py
    │   └── agent.py # code for constructing your graph
    ├── .env # environment variables
    ├── langgraph.json  # configuration file for LangGraph
    └── pyproject.toml # dependencies for your project
    ```

!!! note

    The directory structure of a LangGraph application can vary depending on the programming language and the package manager used.

## Configuration File

The `langgraph.json` file is a JSON file that specifies the dependencies, graphs, environment variables, and other settings required to deploy a LangGraph application.

The file supports specification of the following information:

| Key                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dependencies`     | **Required**. Array of dependencies for LangGraph API server. Dependencies can be one of the following: (1) `"."`, which will look for local Python packages, (2) `pyproject.toml`, `setup.py` or `requirements.txt` in the app directory `"./local_package"`, or (3) a package name.                                                                                                                                                                                                                                                        |
| `graphs`           | **Required**. Mapping from graph ID to path where the compiled graph or a function that makes a graph is defined. Example: <ul><li>`./your_package/your_file.py:variable`, where `variable` is an instance of `langgraph.graph.state.CompiledStateGraph`</li><li>`./your_package/your_file.py:make_graph`, where `make_graph` is a function that takes a config dictionary (`langchain_core.runnables.RunnableConfig`) and creates an instance of `langgraph.graph.state.StateGraph` / `langgraph.graph.state.CompiledStateGraph`.</li></ul> |
| `env`              | Path to `.env` file or a mapping from environment variable to its value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `node_version`     | Defaults to `20`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `dockerfile_lines` | Array of additional lines to add to Dockerfile following the import from parent image.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

!!! tip

    The LangGraph CLI defaults to using the configuration file **langgraph.json** in the current directory.

### Examples

=== "JavaScript"

    * The dependencies will be loaded from a dependency file in the local directory (e.g., `package.json`).
    * A single graph will be loaded from the file `./your_package/your_file.js` with the function `agent`.
    * The environment variable `OPENAI_API_KEY` is set inline.

    ```json
    {
        "dependencies": [
          "."
        ],
        "graphs": {
          "my_agent": "./your_package/your_file.js:agent"
        },
        "env": {
          "OPENAI_API_KEY": "secret-key"
        }
    }
    ```

=== "Python"

    * The dependencies involve a custom local package and the `langchain_openai` package.
    * A single graph will be loaded from the file `./your_package/your_file.py` with the variable `variable`.
    * The environment variables are loaded from the `.env` file.

    ```json
    {
        "dependencies": [
            "langchain_openai",
            "./your_package"
        ],
        "graphs": {
            "my_agent": "./your_package/your_file.py:agent"
        },
        "env": "./.env"
    }
    ```

## Dependencies

A LangGraph application may depend on other Python packages or JavaScript libraries (depending on the programming language in which the application is written).

You will generally need to specify the following information for dependencies to be set up correctly:

1. A file in the directory that specifies the dependencies (e.g., `requirements.txt`, `pyproject.toml`, or `package.json`).
2. A `dependencies` key in the [LangGraph configuration file](#configuration-file) that specifies the dependencies required to run the LangGraph application.
3. Any additional binaries or system libraries can be specified using `dockerfile_lines` key in the [LangGraph configuration file](#configuration-file).

## Graphs

Use the `graphs` key in the [LangGraph configuration file](#configuration-file) to specify which graphs will be available in the deployed LangGraph application.

You can specify one or more graphs in the configuration file. Each graph is identified by a name (which should be unique) and a path for either: (1) the compiled graph or (2) a function that makes a graph is defined.

## Environment Variables

If you're working with a deployed LangGraph application locally, you can configure environment variables in the `env` key of the [LangGraph configuration file](#configuration-file).

For a production deployment, you will typically want to configure the environment variables in the deployment environment.

## Related

Please see the following resources for more information:

- How-to guides for [Application Structure](../how-tos/index.md#application-structure).

================================================
File: /docs/docs/concepts/bring_your_own_cloud.md
================================================

# Bring Your Own Cloud (BYOC)

!!! note Prerequisites

    - [LangGraph Platform](./langgraph_platform.md)
    - [Deployment Options](./deployment_options.md)

## Architecture

Split control plane (hosted by us) and data plane (hosted by you, managed by us).

|                             | Control Plane                   | Data Plane                                    |
| --------------------------- | ------------------------------- | --------------------------------------------- |
| What it does                | Manages deployments, revisions. | Runs your LangGraph graphs, stores your data. |
| Where it is hosted          | LangChain Cloud account         | Your cloud account                            |
| Who provisions and monitors | LangChain                       | LangChain                                     |

LangChain has no direct access to the resources created in your cloud account, and can only interact with them via AWS APIs. Your data never leaves your cloud account / VPC at rest or in transit.

![Architecture](img/byoc_architecture.png)

## Requirements

- You’re using AWS already.
- You use `langgraph-cli` and/or [LangGraph Studio](./langgraph_studio.md) app to test graph locally.
- You use `langgraph build` command to build image and then push it to your AWS ECR repository (`docker push`).

## How it works

- We provide you a [Terraform module](https://github.com/langchain-ai/terraform/tree/main/modules/langgraph_cloud_setup) which you run to set up our requirements
  1. Creates an AWS role (which our control plane will later assume to provision and monitor resources)
     - https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonVPCReadOnlyAccess.html
       - Read VPCS to find subnets
     - https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonECS_FullAccess.html
       - Used to create/delete ECS resources for your LangGraph Cloud instances
     - https://docs.aws.amazon.com/aws-managed-policy/latest/reference/SecretsManagerReadWrite.html
       - Create secrets for your ECS resources
     - https://docs.aws.amazon.com/aws-managed-policy/latest/reference/CloudWatchReadOnlyAccess.html
       - Read CloudWatch metrics/logs to monitor your instances/push deployment logs
     - https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonRDSFullAccess.html
       - Provision `RDS` instances for your LangGraph Cloud instances
  2. Either
     - Tags an existing vpc / subnets as `langgraph-cloud-enabled`
     - Creates a new vpc and subnets and tags them as `langgraph-cloud-enabled`
- You create a LangGraph Cloud Project in `smith.langchain.com` providing
  - the ID of the AWS role created in the step above
  - the AWS ECR repo to pull the service image from
- We provision the resources in your cloud account using the role above
- We monitor those resources to ensure uptime and recovery from errors

Notes for customers using [self-hosted LangSmith](https://docs.smith.langchain.com/self_hosting):

- Creation of new LangGraph Cloud projects and revisions currently needs to be done on smith.langchain.com.
- You can however set up the project to trace to your self-hosted LangSmith instance if desired

================================================
File: /docs/docs/index.md
================================================

---

hide_comments: true
hide:

- navigation

---

{!README.md!}

================================================
File: /docs/docs/css/mkdocstrings.css
================================================
/_ https://mkdocstrings.github.io/crystal/styling.html#recommended-styles _/

/_ Indent and distinguish sub-items _/
div.doc-contents:not(.first) {
padding-left: 15px;
border-left: 4px solid rgba(230, 230, 230);
}

/_ Code selection _/
.language-pycon .gp, .language-pycon .go { /_ Generic.Prompt, Generic.Output _/
user-select: none;
}

================================================
File: /docs/docs/how-tos/deploy-self-hosted.md
================================================

# How to do a Self-hosted deployment of LangGraph

!!! info "Prerequisites"

    - [Application Structure](../concepts/application_structure.md)
    - [Deployment Options](../concepts/deployment_options.md)

This how-to guide will walk you through how to create a docker image from an existing LangGraph application, so you can deploy it on your own infrastructure.

## How it works

With the self-hosted deployment option, you are responsible for managing the infrastructure, including setting up and maintaining necessary databases, Redis instances, and other services.

You will need to do the following:

1. Deploy Redis and Postgres instances on your own infrastructure.
2. Build a docker image with the [LangGraph Sever](../concepts/langgraph_server.md) using the [LangGraph CLI](../concepts/langgraph_cli.md).
3. Deploy a web server that will run the docker image and pass in the necessary environment variables.

## Environment Variables

You will eventually need to pass in the following environment variables to the LangGraph Deploy server:

- `REDIS_URI`: Connection details to a Redis instance. Redis will be used as a pub-sub broker to enable streaming real time output from background runs.
- `DATABASE_URI`: Postgres connection details. Postgres will be used to store assistants, threads, runs, persist thread state and long term memory, and to manage the state of the background task queue with 'exactly once' semantics.
- `LANGSMITH_API_KEY`: (If using [Self-Hosted Lite]) LangSmith API key. This will be used to authenticate ONCE at server start up.
- `LANGGRAPH_CLOUD_LICENSE_KEY`: (If using Self-Hosted Enterprise) LangGraph Platform license key. This will be used to authenticate ONCE at server start up.

## Build the Docker Image

Please read the [Application Structure](../concepts/application_structure.md) guide to understand how to structure your LangGraph application.

If the application is structured correctly, you can build a docker image with the LangGraph Deploy server.

To build the docker image, you first need to install the CLI:

```shell
pip install -U langgraph-cli
```

You can then use:

```
langgraph build -t my-image
```

This will build a docker image with the LangGraph Deploy server. The `-t my-image` is used to tag the image with a name.

When running this server, you need to pass three environment variables:

## Running the application locally

### Using Docker

```shell
docker run \
    -e REDIS_URI="foo" \
    -e DATABASE_URI="bar" \
    -e LANGSMITH_API_KEY="baz" \
    my-image
```

If you want to run this quickly without setting up a separate Redis and Postgres instance, you can use this docker compose file.

!!! note

    * You need to replace `my-image` with the name of the image you built in the previous step (from `langgraph build`).
    and you should provide appropriate values for `REDIS_URI`, `DATABASE_URI`, and `LANGSMITH_API_KEY`.
    * If your application requires additional environment variables, you can pass them in a similar way.
    * If using Self-Hosted Enterprise, you must provide `LANGGRAPH_CLOUD_LICENSE_KEY` as an additional environment variable.

### Using Docker Compose

```yml
volumes:
  langgraph-data:
    driver: local
services:
  langgraph-redis:
    image: redis:6
    healthcheck:
      test: redis-cli ping
      interval: 5s
      timeout: 1s
      retries: 5
  langgraph-postgres:
    image: postgres:16
    ports:
      - "5433:5432"
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    volumes:
      - langgraph-data:/var/lib/postgresql/data
    healthcheck:
      test: pg_isready -U postgres
      start_period: 10s
      timeout: 1s
      retries: 5
      interval: 5s
  langgraph-api:
    image: ${IMAGE_NAME}
    ports:
      - "8123:8000"
    depends_on:
      langgraph-redis:
        condition: service_healthy
      langgraph-postgres:
        condition: service_healthy
    env_file:
      - .env
    environment:
      REDIS_URI: redis://langgraph-redis:6379
      LANGSMITH_API_KEY: ${LANGSMITH_API_KEY}
      POSTGRES_URI: postgres://postgres:postgres@langgraph-postgres:5432/postgres?sslmode=disable
```

You can then run `docker compose up` with this Docker compose file in the same folder.

This will spin up LangGraph Deploy on port `8123` (if you want to change this, you can change this by changing the ports in the `langgraph-api` volume).

You can test that the application is up by checking:

```shell
curl --request GET --url 0.0.0.0:8123/ok
```

Assuming everything is running correctly, you should see a response like:

```shell
{"ok":true}
```

================================================
File: /docs/docs/how-tos/index.md
================================================

---

hide:

- navigation
  title: How-to Guides
  description: How to accomplish common tasks in LangGraph.js

---

# How-to guides

Here you’ll find answers to “How do I...?” types of questions. These guides are **goal-oriented** and concrete; they're meant to help you complete a specific task. For conceptual explanations see the [Conceptual guide](../concepts/index.md). For end-to-end walk-throughs see [Tutorials](../tutorials/index.md). For comprehensive descriptions of every class and function see the [API Reference](https://langchain-ai.github.io/langgraphjs/reference/).

## Installation

- [How to install and manage dependencies](manage-ecosystem-dependencies.ipynb)
- [How to use LangGraph.js in web environments](use-in-web-environments.ipynb)

## LangGraph

### Controllability

LangGraph.js is known for being a highly controllable agent framework.
These how-to guides show how to achieve that controllability.

- [How to create branches for parallel execution](branching.ipynb)
- [How to create map-reduce branches for parallel execution](map-reduce.ipynb)
- [How to combine control flow and state updates with Command](command.ipynb)

### Persistence

LangGraph.js makes it easy to persist state across graph runs. The guides below shows how to add persistence to your graph.

- [How to add thread-level persistence to your graph](persistence.ipynb)
- [How to add thread-level persistence to subgraphs](subgraph-persistence.ipynb)
- [How to add cross-thread persistence](cross-thread-persistence.ipynb)
- [How to use a Postgres checkpointer for persistence](persistence-postgres.ipynb)

### Memory

LangGraph makes it easy to manage conversation [memory](../concepts/memory.md) in your graph. These how-to guides show how to implement different strategies for that.

- [How to manage conversation history](manage-conversation-history.ipynb)
- [How to delete messages](delete-messages.ipynb)
- [How to add summary of the conversation history](add-summary-conversation-history.ipynb)
- [How to add long-term memory (cross-thread)](cross-thread-persistence.ipynb)
- [How to use semantic search for long-term memory](semantic-search.ipynb)

[Human-in-the-loop](/langgraphjs/concepts/human_in_the_loop) functionality allows
you to involve humans in the decision-making process of your graph. These how-to guides show how to implement human-in-the-loop workflows in your graph.

Key workflows:

- [How to wait for user input](wait-user-input.ipynb): A basic example that shows how to implement a human-in-the-loop workflow in your graph using the `interrupt` function.
- [How to review tool calls](review-tool-calls.ipynb): Incorporate human-in-the-loop for reviewing/editing/accepting tool call requests before they executed using the `interrupt` function.

Other methods:

- [How to add static breakpoints](breakpoints.ipynb): Use for debugging purposes. For [**human-in-the-loop**](/langgraphjs/concepts/human_in_the_loop) workflows, we recommend the [`interrupt` function](/langgraphjs/reference/functions/langgraph.interrupt-1.html) instead.
- [How to edit graph state](edit-graph-state.ipynb): Edit graph state using `graph.update_state` method. Use this if implementing a **human-in-the-loop** workflow via **static breakpoints**.
- [How to add dynamic breakpoints with `NodeInterrupt`](dynamic_breakpoints.ipynb): **Not recommended**: Use the [`interrupt` function](/langgraphjs/concepts/human_in_the_loop) instead.

### Time Travel

[Time travel](../concepts/time-travel.md) allows you to replay past actions in your LangGraph application to explore alternative paths and debug issues. These how-to guides show how to use time travel in your graph.

- [How to view and update past graph state](time-travel.ipynb)

### Streaming

LangGraph is built to be streaming first.
These guides show how to use different streaming modes.

- [How to stream the full state of your graph](stream-values.ipynb)
- [How to stream state updates of your graph](stream-updates.ipynb)
- [How to stream LLM tokens](stream-tokens.ipynb)
- [How to stream LLM tokens without LangChain models](streaming-tokens-without-langchain.ipynb)
- [How to stream custom data](streaming-content.ipynb)
- [How to configure multiple streaming modes](stream-multiple.ipynb)
- [How to stream events from within a tool](streaming-events-from-within-tools.ipynb)
- [How to stream from the final node](streaming-from-final-node.ipynb)

### Tool calling

- [How to call tools using ToolNode](tool-calling.ipynb)
- [How to force an agent to call a tool](force-calling-a-tool-first.ipynb)
- [How to handle tool calling errors](tool-calling-errors.ipynb)
- [How to pass runtime values to tools](pass-run-time-values-to-tools.ipynb)
- [How to update graph state from tools](update-state-from-tools.ipynb)

### Subgraphs

[Subgraphs](../concepts/low_level.md#subgraphs) allow you to reuse an existing graph from another graph. These how-to guides show how to use subgraphs:

- [How to add and use subgraphs](subgraph.ipynb)
- [How to view and update state in subgraphs](subgraphs-manage-state.ipynb)
- [How to transform inputs and outputs of a subgraph](subgraph-transform-state.ipynb)

### Multi-agent

- [How to build a multi-agent network](multi-agent-network.ipynb)
- [How to add multi-turn conversation in a multi-agent application](multi-agent-multi-turn-convo.ipynb)

See the [multi-agent tutorials](../tutorials/index.md#multi-agent-systems) for implementations of other multi-agent architectures.

### State management

- [How to define graph state](define-state.ipynb)
- [Have a separate input and output schema](input_output_schema.ipynb)
- [Pass private state between nodes inside the graph](pass_private_state.ipynb)

### Other

- [How to add runtime configuration to your graph](configuration.ipynb)
- [How to add node retries](node-retry-policies.ipynb)
- [How to let agent return tool results directly](dynamically-returning-directly.ipynb)
- [How to have agent respond in structured format](respond-in-format.ipynb)
- [How to manage agent steps](managing-agent-steps.ipynb)

### Prebuilt ReAct Agent

- [How to create a ReAct agent](create-react-agent.ipynb)
- [How to add memory to a ReAct agent](react-memory.ipynb)
- [How to add a system prompt to a ReAct agent](react-system-prompt.ipynb)
- [How to add Human-in-the-loop to a ReAct agent](react-human-in-the-loop.ipynb)

## LangGraph Platform

This section includes how-to guides for LangGraph Platform.

LangGraph Platform is a commercial solution for deploying agentic applications in production, built on the open-source LangGraph framework. It provides four deployment options to fit a range of needs: a free tier, a self-hosted version, a cloud SaaS, and a Bring Your Own Cloud (BYOC) option. You can explore these options in detail in the [deployment options guide](../concepts/deployment_options.md).

!!! tip

    * LangGraph is an MIT-licensed open-source library, which we are committed to maintaining and growing for the community.
    * You can always deploy LangGraph applications on your own infrastructure using the open-source LangGraph project without using LangGraph Platform.

### Application Structure

Learn how to set up your app for deployment to LangGraph Platform:

- [How to set up app for deployment (requirements.txt)](https://langchain-ai.github.io/langgraph/cloud/deployment/setup)
- [How to set up app for deployment (pyproject.toml)](https://langchain-ai.github.io/langgraph/cloud/deployment/setup_pyproject)
- [How to set up app for deployment (JavaScript)](https://langchain-ai.github.io/langgraph/cloud/deployment/setup_javascript)
- [How to customize Dockerfile](https://langchain-ai.github.io/langgraph/cloud/deployment/custom_docker)
- [How to test locally](https://langchain-ai.github.io/langgraph/cloud/deployment/test_locally)

### Deployment

LangGraph applications can be deployed using LangGraph Cloud, which provides a range of services to help you deploy, manage, and scale your applications.

- [How to deploy to LangGraph cloud](https://langchain-ai.github.io/langgraph/cloud/deployment/cloud)
- [How to deploy to a self-hosted environment](./deploy-self-hosted.md)
- [How to interact with the deployment using RemoteGraph](./use-remote-graph.md)

### Assistants

[Assistants](../concepts/assistants.md) are a configured instance of a template.

- [How to configure agents](https://langchain-ai.github.io/langgraph/cloud/how-tos/configuration_cloud)
- [How to version assistants](https://langchain-ai.github.io/langgraph/cloud/how-tos/assistant_versioning)

### Threads

- [How to copy threads](https://langchain-ai.github.io/langgraph/cloud/how-tos/copy_threads)
- [How to check status of your threads](https://langchain-ai.github.io/langgraph/cloud/how-tos/check_thread_status)

### Runs

LangGraph Cloud supports multiple types of runs besides streaming runs.

- [How to run an agent in the background](https://langchain-ai.github.io/langgraph/cloud/how-tos/background_run)
- [How to run multiple agents in the same thread](https://langchain-ai.github.io/langgraph/cloud/how-tos/same-thread)
- [How to create cron jobs](https://langchain-ai.github.io/langgraph/cloud/how-tos/cron_jobs)
- [How to create stateless runs](https://langchain-ai.github.io/langgraph/cloud/how-tos/stateless_runs)

### Streaming

Streaming the results of your LLM application is vital for ensuring a good user experience, especially when your graph may call multiple models and take a long time to fully complete a run. Read about how to stream values from your graph in these how to guides:

- [How to stream values](https://langchain-ai.github.io/langgraph/cloud/how-tos/stream_values)
- [How to stream updates](https://langchain-ai.github.io/langgraph/cloud/how-tos/stream_updates)
- [How to stream messages](https://langchain-ai.github.io/langgraph/cloud/how-tos/stream_messages)
- [How to stream events](https://langchain-ai.github.io/langgraph/cloud/how-tos/stream_events)
- [How to stream in debug mode](https://langchain-ai.github.io/langgraph/cloud/how-tos/stream_debug)
- [How to stream multiple modes](https://langchain-ai.github.io/langgraph/cloud/how-tos/stream_multiple)

### Human-in-the-loop

When creating complex graphs, leaving every decision up to the LLM can be dangerous, especially when the decisions involve invoking certain tools or accessing specific documents. To remedy this, LangGraph allows you to insert human-in-the-loop behavior to ensure your graph does not have undesired outcomes. Read more about the different ways you can add human-in-the-loop capabilities to your LangGraph Cloud projects in these how-to guides:

- [How to add a breakpoint](https://langchain-ai.github.io/langgraph/cloud/how-tos/human_in_the_loop_breakpoint)
- [How to wait for user input](https://langchain-ai.github.io/langgraph/cloud/how-tos/human_in_the_loop_user_input)
- [How to edit graph state](https://langchain-ai.github.io/langgraph/cloud/how-tos/human_in_the_loop_edit_state)
- [How to replay and branch from prior states](https://langchain-ai.github.io/langgraph/cloud/how-tos/human_in_the_loop_time_travel)
- [How to review tool calls](https://langchain-ai.github.io/langgraph/cloud/how-tos/human_in_the_loop_review_tool_calls)

### Double-texting

Graph execution can take a while, and sometimes users may change their mind about the input they wanted to send before their original input has finished running. For example, a user might notice a typo in their original request and will edit the prompt and resend it. Deciding what to do in these cases is important for ensuring a smooth user experience and preventing your graphs from behaving in unexpected ways. The following how-to guides provide information on the various options LangGraph Cloud gives you for dealing with double-texting:

- [How to use the interrupt option](https://langchain-ai.github.io/langgraph/cloud/how-tos/interrupt_concurrent)
- [How to use the rollback option](https://langchain-ai.github.io/langgraph/cloud/how-tos/rollback_concurrent)
- [How to use the reject option](https://langchain-ai.github.io/langgraph/cloud/how-tos/reject_concurrent)
- [How to use the enqueue option](https://langchain-ai.github.io/langgraph/cloud/how-tos/enqueue_concurrent)

### Webhooks

- [How to integrate webhooks](https://langchain-ai.github.io/langgraph/cloud/how-tos/webhooks)

### Cron Jobs

- [How to create cron jobs](https://langchain-ai.github.io/langgraph/cloud/how-tos/cron_jobs)

### LangGraph Studio

LangGraph Studio is a built-in UI for visualizing, testing, and debugging your agents.

- [How to connect to a LangGraph Cloud deployment](https://langchain-ai.github.io/langgraph/cloud/how-tos/test_deployment)
- [How to connect to a local deployment](https://langchain-ai.github.io/langgraph/cloud/how-tos/test_local_deployment)
- [How to test your graph in LangGraph Studio](https://langchain-ai.github.io/langgraph/cloud/how-tos/invoke_studio)
- [How to interact with threads in LangGraph Studio](https://langchain-ai.github.io/langgraph/cloud/how-tos/threads_studio)

## Troubleshooting

These are the guides for resolving common errors you may find while building with LangGraph. Errors referenced below will have an `lc_error_code` property corresponding to one of the below codes when they are thrown in code.

- [GRAPH_RECURSION_LIMIT](../troubleshooting/errors/GRAPH_RECURSION_LIMIT.ipynb)
- [INVALID_CONCURRENT_GRAPH_UPDATE](../troubleshooting/errors/INVALID_CONCURRENT_GRAPH_UPDATE.ipynb)
- [INVALID_GRAPH_NODE_RETURN_VALUE](../troubleshooting/errors/INVALID_GRAPH_NODE_RETURN_VALUE.ipynb)
- [MULTIPLE_SUBGRAPHS](../troubleshooting/errors/MULTIPLE_SUBGRAPHS.ipynb)
- [UNREACHABLE_NODE](../troubleshooting/errors/UNREACHABLE_NODE.ipynb)

================================================
File: /docs/docs/how-tos/.meta.yml
================================================
tags:

- how-tos
- how-to
- howto
- how to

================================================
File: /docs/docs/how-tos/use-remote-graph.md
================================================

# How to interact with the deployment using RemoteGraph

!!! info "Prerequisites" - [LangGraph Platform](../concepts/langgraph_platform.md) - [LangGraph Server](../concepts/langgraph_server.md)

`RemoteGraph` is an interface that allows you to interact with your LangGraph Platform deployment as if it were a regular, locally-defined LangGraph graph (e.g. a `CompiledGraph`). This guide shows you how you can initialize a `RemoteGraph` and interact with it.

## Initializing the graph

When initializing a `RemoteGraph`, you must always specify:

- `name`: the name of the graph you want to interact with. This is the same graph name you use in `langgraph.json` configuration file for your deployment.
- `api_key`: a valid LangSmith API key. Can be set as an environment variable (`LANGSMITH_API_KEY`) or passed directly via the `api_key` argument. The API key could also be provided via the `client` / `sync_client` arguments, if `LangGraphClient` / `SyncLangGraphClient` were initialized with `api_key` argument.

Additionally, you have to provide one of the following:

- `url`: URL of the deployment you want to interact with. If you pass `url` argument, both sync and async clients will be created using the provided URL, headers (if provided) and default configuration values (e.g. timeout, etc).
- `client`: a `LangGraphClient` instance for interacting with the deployment asynchronously (e.g. using `.astream()`, `.ainvoke()`, `.aget_state()`, `.aupdate_state()`, etc.)
- `sync_client`: a `SyncLangGraphClient` instance for interacting with the deployment synchronously (e.g. using `.stream()`, `.invoke()`, `.get_state()`, `.update_state()`, etc.)

!!! Note

    If you pass both `client` or `sync_client` as well as `url` argument, they will take precedence over the `url` argument. If none of the `client` / `sync_client` / `url` arguments are provided, `RemoteGraph` will raise a `ValueError` at runtime.

### Using URL

=== "Python"

    ```python
    from langgraph.pregel.remote import RemoteGraph

    url = <DEPLOYMENT_URL>
    graph_name = "agent"
    remote_graph = RemoteGraph(graph_name, url=url)
    ```

=== "JavaScript"

    ```ts
    import { RemoteGraph } from "@langchain/langgraph/remote";

    const url = `<DEPLOYMENT_URL>`;
    const graphName = "agent";
    const remoteGraph = new RemoteGraph({ graphId: graphName, url });
    ```

### Using clients

=== "Python"

    ```python
    from langgraph_sdk import get_client, get_sync_client
    from langgraph.pregel.remote import RemoteGraph

    url = <DEPLOYMENT_URL>
    graph_name = "agent"
    client = get_client(url=url)
    sync_client = get_sync_client(url=url)
    remote_graph = RemoteGraph(graph_name, client=client, sync_client=sync_client)
    ```

=== "JavaScript"

    ```ts
    import { Client } from "@langchain/langgraph-sdk";
    import { RemoteGraph } from "@langchain/langgraph/remote";

    const client = new Client({ apiUrl: `<DEPLOYMENT_URL>` });
    const graphName = "agent";
    const remoteGraph = new RemoteGraph({ graphId: graphName, client });
    ```

## Invoking the graph

Since `RemoteGraph` is a `Runnable` that implements the same methods as `CompiledGraph`, you can interact with it the same way you normally would with a compiled graph, i.e. by calling `.invoke()`, `.stream()`, `.get_state()`, `.update_state()`, etc (as well as their async counterparts).

### Asynchronously

!!! Note

    To use the graph asynchronously, you must provide either the `url` or `client` when initializing the `RemoteGraph`.

=== "Python"

    ```python
    # invoke the graph
    result = await remote_graph.ainvoke({
        "messages": [{"role": "user", "content": "what's the weather in sf"}]
    })

    # stream outputs from the graph
    async for chunk in remote_graph.astream({
        "messages": [("user", "what's the weather in la?")]
    }):
        print(chunk)
    ```

=== "JavaScript"

    ```ts
    // invoke the graph
    const result = await remoteGraph.invoke({
        messages: [{role: "user", content: "what's the weather in sf"}]
    })

    // stream outputs from the graph
    for await (const chunk of await remoteGraph.stream({
        messages: [{role: "user", content: "what's the weather in la"}]
    })):
        console.log(chunk)
    ```

### Synchronously

!!! Note

    To use the graph synchronously, you must provide either the `url` or `sync_client` when initializing the `RemoteGraph`.

=== "Python"

    ```python
    # invoke the graph
    result = remote_graph.invoke({
        "messages": [{"role": "user", "content": "what's the weather in sf"}]
    })

    # stream outputs from the graph
    for chunk in remote_graph.stream({
        "messages": [("user", "what's the weather in la?")]
    }):
        print(chunk)
    ```

## Thread-level persistence

By default, the graph runs (i.e. `.invoke()` or `.stream()` invocations) are stateless - the checkpoints and the final state of the graph are not persisted. If you would like to persist the outputs of the graph run (for example, to enable human-in-the-loop features), you can create a thread and provide the thread ID via the `config` argument, same as you would with a regular compiled graph:

=== "Python"

    ```python
    from langgraph_sdk import get_sync_client
    url = <DEPLOYMENT_URL>
    graph_name = "agent"
    sync_client = get_sync_client(url=url)
    remote_graph = RemoteGraph(graph_name, url=url)

    # create a thread (or use an existing thread instead)
    thread = sync_client.threads.create()

    # invoke the graph with the thread config
    config = {"configurable": {"thread_id": thread["thread_id"]}}
    result = remote_graph.invoke({
        "messages": [{"role": "user", "content": "what's the weather in sf"}], config=config
    })

    # verify that the state was persisted to the thread
    thread_state = remote_graph.get_state(config)
    print(thread_state)
    ```

=== "JavaScript"

    ```ts
    import { Client } from "@langchain/langgraph-sdk";
    import { RemoteGraph } from "@langchain/langgraph/remote";

    const url = `<DEPLOYMENT_URL>`;
    const graphName = "agent";
    const client = new Client({ apiUrl: url });
    const remoteGraph = new RemoteGraph({ graphId: graphName, url });

    // create a thread (or use an existing thread instead)
    const thread = await client.threads.create();

    // invoke the graph with the thread config
    const config = { configurable: { thread_id: thread.thread_id }};
    const result = await remoteGraph.invoke({
      messages: [{ role: "user", content: "what's the weather in sf" }],
      config
    });

    // verify that the state was persisted to the thread
    const threadState = await remoteGraph.getState(config);
    console.log(threadState);
    ```

## Using as a subgraph

!!! Note

    If you need to use a `checkpointer` with a graph that has a `RemoteGraph` subgraph node, make sure to use UUIDs as thread IDs.

Since the `RemoteGraph` behaves the same way as a regular `CompiledGraph`, it can be also used as a subgraph in another graph. For example:

=== "Python"

    ```python
    from langgraph_sdk import get_sync_client
    from langgraph.graph import StateGraph, MessagesState, START
    from typing import TypedDict

    url = <DEPLOYMENT_URL>
    graph_name = "agent"
    remote_graph = RemoteGraph(graph_name, url=url)

    # define parent graph
    builder = StateGraph(MessagesState)
    # add remote graph directly as a node
    builder.add_node("child", remote_graph)
    builder.add_edge(START, "child")
    graph = builder.compile()

    # invoke the parent graph
    result = graph.invoke({
        "messages": [{"role": "user", "content": "what's the weather in sf"}]
    })
    print(result)
    ```

=== "JavaScript"

    ```ts
    import { MessagesAnnotation, StateGraph, START } from "@langchain/langgraph";
    import { RemoteGraph } from "@langchain/langgraph/remote";

    const url = `<DEPLOYMENT_URL>`;
    const graphName = "agent";
    const remoteGraph = new RemoteGraph({ graphId: graphName, url });

    // define parent graph and add remote graph directly as a node
    const graph = new StateGraph(MessagesAnnotation)
      .addNode("child", remoteGraph)
      .addEdge("START", "child")
      .compile()

    // invoke the parent graph
    const result = await graph.invoke({
      messages: [{ role: "user", content: "what's the weather in sf" }]
    });
    console.log(result);
    ```

================================================
File: /docs/.gitignore
================================================
\*.ipynb

# But don't ignore .ipynb files in the troubleshooting/errors directory

!docs/troubleshooting/errors/\*.ipynb
site/

================================================
File: /docs/docs-requirements.txt
================================================
mkdocs
mkdocstrings
mkdocs-jupyter
mkdocs-redirects
mkdocs-minify-plugin
mkdocs-rss-plugin
mkdocs-typedoc
markdown-include
markdown-callouts

================================================
File: /docs/Makefile
================================================
.PHONY: clean build-docs serve-docs serve-clean-docs

build-docs:
python \_scripts/copy_notebooks.py
python -m mkdocs build --clean -f mkdocs.yml --strict -d site

serve-docs:
python \_scripts/copy_notebooks.py
python -m mkdocs serve -f mkdocs.yml -w ../libs --dirty -o

serve-clean-docs: clean
python \_scripts/copy_notebooks.py
python -m mkdocs serve -c -f mkdocs.yml --strict -w ../libs

clean:
find ./docs -name "\*.ipynb" -type f -delete
rm -rf site

================================================
File: /docs/overrides/main.html
================================================
{% extends "base.html" %}

{% block extrahead %}

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Public+Sans&display=swap");
    :root {
      --md-primary-fg-color: #333333;
      --md-accent-fg-color: #1E88E5;
      --md-default-bg-color: #FFFFFF;
      --md-default-fg-color: #333333;
      --md-text-font-family: "Public Sans", sans-serif;
    }

    body {
      font-family: var(--md-text-font-family);
      background-color: var(--md-default-bg-color);
      color: var(--md-default-fg-color);
    }

    .md-main {
      background-color: #FFFFFF;
    }

    .md-footer {
      background-color: #F5F5F5;
      color: #666666;
    }

    .md-footer-meta {
      background-color: #EEEEEE;
    }

    .md-typeset a {
      color: #1E88E5;
    }

    .md-sidebar {
      display: none;
    }

    /* Show sidebar on mobile */
    @media screen and (max-width: 1220px) {
      .md-sidebar--primary {
        display: block;
      }
    }

    .md-typeset a:hover {
      color: #1565C0;
    }

    .md-nav__link--active,
    .md-nav__link:active {
      color: #1E88E5;
    }

    .md-search__input {
      background-color: #F5F5F5;
      color: #333333;
    }

    .md-search__input:hover,
    .md-search__input:focus {
      background-color: #EEEEEE;
    }
    /* Table of contents styles */
    .md-nav--secondary .md-nav__item--active > .md-nav__link {
      font-weight: bold;
      color: var(--md-primary-fg-color);
    }

    .md-nav--secondary .md-nav__item--nested > .md-nav__link {
      font-weight: normal;
      color: var(--md-default-fg-color);
    }

    .md-nav--secondary .md-nav__item--nested > .md-nav__link::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: var(--md-default-fg-color);
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    [data-md-color-scheme="slate"] {
      --md-default-bg-color: #1E1E1E;
      --md-default-fg-color: #FFFFFF;
      --md-accent-fg-color: #64B5F6;
    }

    [data-md-color-scheme="slate"] .md-main {
      background-color: #1E1E1E;
    }

    [data-md-color-scheme="slate"] .navbar {
      background-color: #1E1E1E;
      color: #FFFFFF;
      box-shadow: none;
    }

    [data-md-color-scheme="slate"] .md-footer {
      background-color: #1E1E1E;
      color: #BDBDBD;
    }

    [data-md-color-scheme="slate"] .md-header {
      background-color: #1E1E1E;
      color: #BDBDBD;
    }

    [data-md-color-scheme="slate"] .md-tabs {
      background-color: #1E1E1E;
      color: #BDBDBD;
    }

    [data-md-color-scheme="slate"] .md-search__input {
      background-color: #F5F5F5;
      color: #333333;
    }

    [data-md-color-scheme="slate"] .md-search__icon {
      color: #333333;
    }

    [data-md-color-scheme="slate"] .md-search__input::placeholder {
      color: #333333;
    }

    [data-md-color-scheme="slate"] .md-footer-meta {
      background-color: #1E1E1E;
    }

    [data-md-color-scheme="slate"] .md-typeset a {
      color: #64B5F6;
    }

    [data-md-color-scheme="slate"] .md-typeset a:hover {
      color: #90CAF9;
    }

    .notebook-links {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 1rem;
    }
    .notebook-links .md-content__button {
      margin-left: 0.5rem;
    }

    [data-md-color-scheme=default] .logo-dark {
      display: none !important;
    }

    [data-md-color-scheme=slate] .logo-light {
      display: none !important;
    }

    .jupyter-wrapper .jp-CodeCell .jp-Cell-inputWrapper .jp-InputPrompt.jp-InputArea-prompt {
      display: none !important;
    }

    .jupyter-wrapper .jp-Notebook .jp-Cell .jp-OutputPrompt {
      display: none !important;
    }
  </style>

{% endblock %}

{% block content %}

<div class="notebook-links">
  {% if page.nb_url %}
    <a href="{{ page.nb_url }}" title="Download Notebook" class="md-content__button md-icon">
      {% include ".icons/material/download.svg" %}
    </a>
  {% endif %}
</div>

{{ super() }}
{% endblock content %}

{% block htmltitle %}
{% if page.meta and page.meta.title %}
<title>{{ page.meta.title }}</title>
{% elif page.title and not page.is_homepage %}
<title>{{ page.title | striptags }}</title>
{% else %}
<title>{{ config.site_name }}</title>
{% endif %}
{% endblock %}

================================================
File: /docs/overrides/partials/logo.html
================================================
{% if config.theme.logo_light_mode %}
<img src="{{ config.theme.logo_light_mode | url }}" alt="logo" class="logo-light" />
<img src="{{ config.theme.logo_dark_mode | url }}" alt="logo" class="logo-dark" />
{% endif %}

================================================
File: /docs/.nojekyll
================================================
TypeDoc added this file to prevent GitHub Pages from using Jekyll. You can turn off this behavior by setting the `githubPages` option to false.

================================================
File: /docs/mkdocs.yml
================================================
site_name: ""
site_description: Build language agents as graphs
site_url: https://langchain-ai.github.io/langgraphjs/
repo_url: https://github.com/langchain-ai/langgraphjs
theme:
name: material
custom_dir: overrides
logo_dark_mode: static/wordmark_light.svg
logo_light_mode: static/wordmark_dark.svg
favicon: static/favicon.png
features: - announce.dismiss - content.code.annotate - content.code.copy - content.code.select - content.tabs.link - content.tooltips - header.autohide - navigation.expand - navigation.footer - navigation.indexes - navigation.instant - navigation.instant.prefetch - navigation.instant.progress - navigation.path - navigation.prune - navigation.tabs - navigation.top - navigation.tracking - search.highlight - search.share - search.suggest - toc.follow
palette: - scheme: default
primary: white
accent: gray
toggle:
icon: material/brightness-7
name: Switch to dark mode - scheme: slate
primary: grey
accent: white
toggle:
icon: material/brightness-4
name: Switch to light mode
font:
text: "Public Sans"
code: "Roboto Mono"
plugins:

- search:
  separator: '[\s\u200b\-_,:!=\[\]()"`/]+|\.(?!\d)|&[lg]t;|(?!\b)(?=[A-Z][a-z])'
- autorefs
- typedoc:
  # One level of globbing is intentional
  source: "../libs/_/_.d.ts"
  output_dir: "./reference"
  tsconfig: "../tsconfig.json"
  options: "typedoc.json"
  name: "API Reference"
  title_link: "/" # optional, default: '/'

nav:

- Home: index.md
- Tutorials:

  - tutorials/index.md
  - Quick Start:
    - Quick Start: tutorials#quick-start
    - tutorials/quickstart.ipynb
  - Chatbots:
    - Chatbots: tutorials/chatbots/customer_support_small_model.ipynb
  - RAG:
    - RAG: tutorials#rag
    - tutorials/rag/langgraph_agentic_rag.ipynb
    - tutorials/rag/langgraph_crag.ipynb
    - tutorials/rag/langgraph_self_rag.ipynb
  - Agent Architectures:
    - Agent Architectures: tutorials#agent-architectures
    - Multi-Agent Systems:
      - Multi-Agent Systems: tutorials#multi-agent-systems
      - tutorials/multi_agent/multi_agent_collaboration.ipynb
      - tutorials/multi_agent/agent_supervisor.ipynb
      - tutorials/multi_agent/hierarchical_agent_teams.ipynb
    - Planning Agents:
      - Planning Agents: tutorials#planning-agents
      - tutorials/plan-and-execute/plan-and-execute.ipynb
    - Reflection & Critique:
      - Reflection & Critique: tutorials#reflection-critique
      - tutorials/reflection/reflection.ipynb
      - tutorials/rewoo/rewoo.ipynb
  - Evaluation & Analysis:
    - Evaluation & Analysis: tutorials#evaluation
    - tutorials/chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb

- How-to Guides:
  - how-tos/index.md
  - Installation:
    - Installation: how-tos#installation
    - how-tos/manage-ecosystem-dependencies.ipynb
    - how-tos/use-in-web-environments.ipynb
  - LangGraph:
    - LangGraph: how-tos#langgraph
    - Controllability:
      - Controllability: how-tos#controllability
      - how-tos/map-reduce.ipynb
      - how-tos/branching.ipynb
      - how-tos/command.ipynb
    - Persistence:
      - Persistence: how-tos#persistence
      - how-tos/persistence.ipynb
      - how-tos/subgraph-persistence.ipynb
      - how-tos/cross-thread-persistence.ipynb
      - how-tos/persistence-postgres.ipynb
    - Memory:
      - Memory: how-tos#memory
      - how-tos/manage-conversation-history.ipynb
      - how-tos/delete-messages.ipynb
      - how-tos/add-summary-conversation-history.ipynb
      - how-tos/semantic-search.ipynb
    - Human-in-the-loop:
      - Human-in-the-loop: how-tos#human-in-the-loop
      - how-tos/breakpoints.ipynb
      - how-tos/dynamic_breakpoints.ipynb
      - how-tos/edit-graph-state.ipynb
      - how-tos/wait-user-input.ipynb
      - how-tos/time-travel.ipynb
      - how-tos/review-tool-calls.ipynb
    - Streaming:
      - Streaming: how-tos#streaming
      - how-tos/stream-values.ipynb
      - how-tos/stream-updates.ipynb
      - how-tos/stream-tokens.ipynb
      - how-tos/streaming-tokens-without-langchain.ipynb
      - how-tos/streaming-content.ipynb
      - how-tos/stream-multiple.ipynb
      - how-tos/streaming-events-from-within-tools.ipynb
      - how-tos/streaming-from-final-node.ipynb
    - Tool calling:
      - Tool calling: how-tos#tool-calling
      - how-tos/tool-calling.ipynb
      - how-tos/force-calling-a-tool-first.ipynb
      - how-tos/tool-calling-errors.ipynb
      - how-tos/pass-run-time-values-to-tools.ipynb
      - how-tos/update-state-from-tools.ipynb
    - Subgraphs:
      - Subgraphs: how-tos#subgraphs
      - how-tos/subgraph.ipynb
      - how-tos/subgra
