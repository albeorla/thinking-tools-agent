# Aerith Development Tasks

Aerith is a TypeScript framework built on LangGraph and LangChain that enables AI agents to use structured thinking tools for better decision making and problem solving.

## Project Structure
```
aerith/
├── src/
│   ├── core/           # Core framework components
│   │   ├── agent.ts    # Agent implementation using LangGraph
│   │   └── crew.ts     # Crew orchestration logic
│   ├── tools/          # Tool implementations
│   │   └── thinking/   # Thinking tool implementations
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts    # Core type definitions
│   └── index.ts        # Main entry point and exports
├── test/               # Test files
├── docs/               # Documentation
└── examples/           # Example implementations
```

## Completed ✅

### Core Framework Structure
- [x] Define core types and interfaces
  - Created ThinkingTool interface for structured thinking tools
  - Created AerithAgent interface for agent definitions
  - Created AerithTask interface for task specifications
  - Created AerithCrew interface for agent orchestration
  - Created ProcessType and related interfaces for execution flow
  - Implemented AerithMessage extending BaseMessage

- [x] Set up project structure and configuration files
  - Configured TypeScript with strict mode
  - Set up Bun as runtime and package manager
  - Configured ESLint with TypeScript support
  - Added Prettier for code formatting
  - Created basic README and documentation structure

- [x] Create initial thinking tools implementation
  - Implemented base thinking tool factory
  - Created thinking tool registry
  - Added type-safe tool selection
  - Set up tool validation logic

- [x] Create basic agent implementation with LangGraph
  - Created AerithAgentExecutor class
  - Implemented state management for agent execution
  - Added thinking tool selection logic
  - Set up basic action execution flow

- [x] Create crew orchestration framework
  - Implemented AerithCrewExecutor class
  - Added support for sequential execution
  - Created task distribution logic
  - Set up inter-agent communication

### Thinking Tools
- [x] Implement Abstraction Ladder tool
  ```typescript
  {
    name: "Abstraction Ladder",
    type: "abstraction-ladder",
    steps: [
      "Start with initial problem statement",
      "Ask 'why' questions to get more abstract",
      "Ask 'how' questions to get more concrete"
    ],
    questions: [/* Specific guiding questions */]
  }
  ```

- [x] Implement Confidence-Speed-Quality Balance tool
  ```typescript
  {
    name: "Confidence-Speed-Quality Balance",
    type: "confidence-speed",
    steps: [
      "Assess confidence in problem importance",
      "Assess confidence in solution correctness",
      "Choose speed vs quality based on confidence levels"
    ]
  }
  ```

- [x] Implement First Principles tool
  ```typescript
  {
    name: "First Principles",
    type: "first-principles",
    steps: [
      "Identify the problem",
      "Break down to basic truths",
      "Rebuild solution from fundamentals"
    ]
  }
  ```

## In Progress 🚧

### Type System Fixes
- [ ] Fix StateGraph type issues in agent.ts
  - Problem: LangGraph StateGraph type compatibility
  - Required Changes:
    ```typescript
    interface AgentState {
      messages: BaseMessage[];
      steps: AgentStep[];
      thinkingTools: ThinkingTool[];
      currentTool?: ThinkingTool;
      confidence: number;
      iteration: number;
    }
    
    // Need to implement proper channel reducers
    type ChannelReducers = {
      messages: BinaryOperator<BaseMessage[]>;
      steps: BinaryOperator<AgentStep[]>;
      // ... other channels
    }
    ```

- [ ] Fix StateGraph type issues in crew.ts
  - Similar issues to agent.ts
  - Need to implement proper state management
  - Fix edge definition types

- [ ] Fix AerithMessage implementation
  - Create proper message class extending BaseMessage
  - Implement serialization/deserialization
  - Add thinking tool metadata support

- [ ] Fix tool action type issues
  - Properly type tool actions
  - Add runtime type checking
  - Implement action validation

### Agent Implementation
- [ ] Implement thinking tool selector logic
  ```typescript
  private createThinkingToolSelector() {
    return async (state: AgentState) => {
      // TODO: Implement tool selection based on:
      // 1. Current problem context
      // 2. Previous tool effectiveness
      // 3. Agent preferences
      return state;
    };
  }
  ```

- [ ] Implement thinking tool applier logic
  ```typescript
  private createThinkingToolApplier() {
    return async (state: AgentState) => {
      // TODO: Implement tool application:
      // 1. Extract relevant context
      // 2. Apply tool steps
      // 3. Update confidence based on results
      return state;
    };
  }
  ```

- [ ] Implement action taker logic
  - Add action validation
  - Implement result processing
  - Add state updates

## Todo 📝

### Thinking Tools Implementation
Each tool needs:
- Type definitions
- Step implementations
- Question prompts
- Example usage
- Integration tests

- [ ] Implement Inversion tool
  ```typescript
  {
    name: "Inversion",
    type: "inversion",
    steps: [
      "State the problem",
      "Reverse the problem",
      "Solve the reversed problem",
      "Reverse the solution"
    ]
  }
  ```

[Additional tools with similar detailed specifications...]

### Process Types
- [ ] Implement hierarchical process
  ```typescript
  interface HierarchicalProcess {
    manager: AerithAgent;
    workers: AerithAgent[];
    delegationStrategy: DelegationStrategy;
  }
  ```

- [ ] Implement consensus process
  ```typescript
  interface ConsensusProcess {
    agents: AerithAgent[];
    votingStrategy: VotingStrategy;
    consensusThreshold: number;
  }
  ```

### Testing
- [ ] Set up testing framework
  - Configure Vitest
  - Add test utilities
  - Set up mocks for LLM calls

- [ ] Add unit tests for each component
  - Thinking tools
  - Agent logic
  - Crew orchestration
  - Process types

### Documentation
- [ ] Add JSDoc comments
  - Document all public APIs
  - Add examples in comments
  - Include type information

- [ ] Create API documentation
  - Use TypeDoc
  - Add usage examples
  - Document best practices

## Blocked 🚫

### Agent Implementation
- [ ] Implement streaming responses
  - Blocked by LangGraph streaming support
  - Need to implement custom streaming solution
  ```typescript
  interface StreamingConfig {
    enablePartialResults: boolean;
    updateInterval: number;
  }
  ```

## Notes 📝

### Type System
Current type issues stem from LangGraph's StateGraph implementation:

1. Channel Types:
```typescript
interface StateChannels {
  messages: BinaryOperator<BaseMessage[]>;
  steps: BinaryOperator<AgentStep[]>;
  thinkingTools: BinaryOperator<ThinkingTool[]>;
  currentTool: BinaryOperator<ThinkingTool | undefined>;
  confidence: BinaryOperator<number>;
  iteration: BinaryOperator<number>;
}
```

2. Node Return Types:
```typescript
type NodeReturn = Partial<AgentState> & {
  __next__?: string;
  __end__?: boolean;
}
```

3. Message Content Types:
```typescript
type MessageContent = string | MessageContentComplex[];
```

### Next Priority
1. Fix type system issues
   - Implement proper channel reducers
   - Fix node return types
   - Add proper type guards

2. Complete core agent implementation
   - Finish thinking tool selector
   - Implement tool applier
   - Add action taker

3. Implement remaining thinking tools
   - Add one tool at a time
   - Include full test coverage
   - Add documentation

4. Add testing and documentation
   - Set up test framework
   - Add comprehensive tests
   - Create detailed docs
