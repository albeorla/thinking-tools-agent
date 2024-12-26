# Thinking Tools Guide

A LangGraph-based system that helps select the most appropriate thinking tool for your problem or decision-making needs. The system analyzes your query and recommends the best thinking tool based on the characteristics of your situation.

## Table of Contents

- [Thinking Tools Guide](#thinking-tools-guide)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Available Tools](#available-tools)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
  - [Development](#development)
    - [Code Organization](#code-organization)
    - [Adding New Tools](#adding-new-tools)
  - [Testing](#testing)
  - [Architecture](#architecture)
    - [Core Components](#core-components)
  - [Built With](#built-with)
  - [License](#license)

## Features

- **Characteristic Analysis**: Identifies key characteristics of your problem or decision-making situation
- **Tool Selection**: Matches situation characteristics with the most appropriate thinking tool
- **Confidence Scoring**: Provides a confidence score for the recommendation
- **Natural Language Processing**: Understands various ways of expressing needs
- **Detailed Guidance**: Provides step-by-step process for applying the recommended tool

## Available Tools

1. **Abstraction Laddering**: For reframing problems at different levels
2. **OODA Loop**: For quick decision-making in competitive situations
3. **First Principles**: For breaking down complex problems
4. **Second-Order Thinking**: For considering long-term consequences
5. **Ladder of Inference**: For examining reasoning processes
6. **Minto Pyramid**: For structured communication
7. **Inversion**: For considering opposite perspectives

## Project Structure

```
.
├── src/
│   ├── core/           # Core business logic
│   │   ├── drivers/    # Tool selection and matching logic
│   │   └── types/      # Core type definitions
│   ├── data/           # Data definitions
│   │   └── tools/      # Thinking tool definitions
│   └── utils/          # Utility functions
├── test/               # Test files
│   ├── unit/          # Unit tests
│   ├── integration/   # Integration tests
│   └── fixtures/      # Test data and mocks
└── docs/              # Documentation
```

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
   - Add your OpenAI API key:
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
import { ThinkingToolDriver } from "@core/drivers/thinking-tool-driver";
import { thinkingTools } from "@data/tools/tool-definitions";

const driver = new ThinkingToolDriver(thinkingTools);

const result = await driver.process({
  messages: [
    {
      type: "user",
      content: "I need to make a quick decision with limited information",
    },
  ],
  confidence: 0,
});

console.log("Recommended Tool:", result.selectedTool);
```

## Development

### Code Organization

- `core/`: Contains the main business logic
  - `drivers/`: Tool selection and matching algorithms
  - `types/`: TypeScript type definitions
- `data/`: Data layer
  - `tools/`: Thinking tool definitions and characteristics
- `utils/`: Shared utilities and helper functions

### Adding New Tools

1. Define the tool in `src/data/tools/tool-definitions.ts`
2. Add corresponding test cases in `test/unit/tool-definitions.test.ts`
3. Update tool coverage tests in `test/unit/thinking-tool-matching.test.ts`

## Testing

Run the test suite:

```bash
bun test
```

The project includes:

- Unit tests for individual components
- Integration tests for the complete workflow
- Performance and stress tests
- Edge case handling tests

## Architecture

### Core Components

1. **ThinkingToolDriver**

   - Main orchestrator for tool selection and execution
   - Implements confidence scoring and natural language processing
   - Handles message routing and tool execution

2. **Tool Definitions**

   - Structured data for each thinking tool
   - Includes characteristics, use cases, and confidence factors
   - Supports natural language matching

3. **Type System**
   - Strong TypeScript typing throughout
   - Clear interfaces for messages and state
   - Enum-based tool categorization

## Built With

- [LangChain](https://js.langchain.com/) - LLM framework
- [LangGraph](https://github.com/langchain-ai/langgraph-js) - Graph orchestration
- [OpenAI](https://openai.com/) - Language model
- [Bun](https://bun.sh) - JavaScript runtime

## License

This project is licensed under the MIT License - see the LICENSE file for details.
