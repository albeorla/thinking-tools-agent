import { AerithAgent, AerithCrew, AerithProcess, AerithTask, ProcessType, TaskResult } from "./types/index.js";
import { AerithAgentExecutor } from "./core/agent.js";
import { AerithCrewExecutor } from "./core/crew.js";
import * as thinkingTools from "./tools/thinking/index.js";

/**
 * A default Crew representing a minimal "motor network" 
 * that can handle basic orchestration tasks.
 */
export const defaultMotorNetwork: AerithCrew = {
  name: "Default Motor Network",
  description: "A minimal crew of default agents for basic task orchestration.",
  agents: [
    {
      name: "Orchestrator",
      role: "Oversee and coordinate tasks",
      goal: "Manage high-level orchestration steps",
      allowedTools: ["read", "write", "search"],
      thinkingTools: [thinkingTools.firstPrinciples, thinkingTools.abstractionLadder]
    }
  ],
  tasks: [
    {
      description: "Orchestrate task flow",
      agent: {
        name: "Orchestrator",
        role: "Oversee and coordinate tasks",
        goal: "Manage high-level orchestration steps",
        allowedTools: ["read", "write", "search"],
        thinkingTools: [thinkingTools.firstPrinciples, thinkingTools.abstractionLadder]
      },
      expectedOutput: "High-level orchestration plan"
    }
  ]
};

export {
  // Core types
  AerithAgent,
  AerithCrew,
  AerithProcess,
  AerithTask,
  ProcessType,
  TaskResult,
  
  // Core classes
  AerithAgentExecutor,
  AerithCrewExecutor,
  
  // Thinking tools
  thinkingTools
};

// Example usage:
/*
import { AerithAgent, AerithCrew, AerithProcess, thinkingTools } from "aerith";

// Create agents
const researcher = {
  name: "Researcher",
  role: "Research and analyze information",
  goal: "Find and validate key information",
  allowedTools: ["search", "read"],
  thinkingTools: [thinkingTools.firstPrinciples, thinkingTools.abstractionLadder]
};

const writer = {
  name: "Writer", 
  role: "Write clear content",
  goal: "Create engaging content",
  allowedTools: ["write"],
  thinkingTools: [thinkingTools.mintoPyramid]
};

// Create crew
const crew = {
  name: "Content Team",
  description: "Research and create content",
  agents: [researcher, writer],
  tasks: [
    {
      description: "Research topic",
      agent: researcher,
      expectedOutput: "Research findings"
    },
    {
      description: "Write article",
      agent: writer, 
      expectedOutput: "Final article"
    }
  ]
};

// Create process
const process = {
  type: "sequential",
  crew: crew
};

// Execute
const executor = new AerithCrewExecutor(crew, process);
const results = await executor.execute("Write an article about AI");
*/