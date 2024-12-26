# Thinking Tools Guide

A LangGraph-based system that helps select the most appropriate thinking tool for your problem or decision-making needs. The system analyzes your query and recommends the best thinking tool based on the characteristics of your situation.

## Features

- **Characteristic Analysis**: Identifies key characteristics of your problem or decision-making situation
- **Tool Selection**: Matches situation characteristics with the most appropriate thinking tool
- **Confidence Scoring**: Provides a confidence score for the recommendation
- **Detailed Reasoning**: Explains why a particular tool was selected

## Available Thinking Tools

1. **Abstraction Laddering**: For reframing problems at different levels
2. **OODA Loop**: For quick decision-making in competitive situations
3. **First Principles**: For breaking down complex problems
4. **Second-Order Thinking**: For considering long-term consequences

## Getting Started

### Prerequisites

- Node.js 16+ or Bun runtime
- OpenAI API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/thinking-tools.git
cd thinking-tools
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

- Copy `.env.example` to `.env`
- Add your OpenAI API key to `.env`:

```
OPENAI_API_KEY=your_api_key_here
```

### Usage

Run the example queries:

```bash
bun run src/index.ts
```

Or import and use in your own code:

```typescript
import { ChatOpenAI } from "@langchain/openai";
import { createThinkingToolGraph } from "./graph/thinking-tool-graph";

const model = new ChatOpenAI({ modelName: "gpt-4" });
const graph = createThinkingToolGraph(model);

const result = await graph.invoke({
  query: "I need to make a quick decision with limited information",
  identifiedCharacteristics: [],
  confidence: 0,
  reasoning: "",
});

console.log("Recommended Tool:", result.selectedTool?.name);
```

## Project Structure

- `/src`
  - `/data` - Tool definitions and characteristics
  - `/nodes` - LangGraph nodes for characteristic identification and tool selection
  - `/types` - TypeScript type definitions
  - `/graph` - Main LangGraph definition
  - `index.ts` - Entry point and example usage

## Built With

- [LangChain](https://js.langchain.com/) - LLM framework
- [LangGraph](https://github.com/langchain-ai/langgraph-js) - Graph orchestration
- [OpenAI GPT-4](https://openai.com/) - Language model
- [Bun](https://bun.sh) - JavaScript runtime

## License

This project is licensed under the MIT License - see the LICENSE file for details.
