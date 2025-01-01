// Core types for Aerith framework

import { BaseMessage } from "@langchain/core/messages";
import { StructuredTool } from "@langchain/core/tools";
import { AgentStep } from "@langchain/core/agents";

export interface ThinkingTool {
  name: string;
  description: string;
  type: "abstraction-ladder" | "confidence-speed" | "first-principles" | "inversion" | 
        "ladder-inference" | "minto-pyramid" | "ooda-loop" | "productive-thinking" | "second-order";
  steps: string[];
  questions: string[];
  example: string;
}

export interface AerithAgent {
  name: string;
  role: string;
  goal: string;
  backstory?: string;
  allowedTools: string[];
  thinkingTools: ThinkingTool[];
  memory?: AgentStep[];
  verbose?: boolean;
}

export interface AerithTask {
  description: string;
  agent: AerithAgent;
  expectedOutput: string;
  contextData?: Record<string, unknown>;
  tools?: StructuredTool[];
  thinkingTools?: ThinkingTool[];
}

export interface AerithCrew {
  name: string;
  description: string;
  agents: AerithAgent[];
  tasks: AerithTask[];
  verbose?: boolean;
}

export interface TaskResult {
  agentName: string;
  taskDescription: string;
  output: string;
  steps: AgentStep[];
  thinkingToolsUsed: string[];
}

export interface ProcessConfig {
  maxIterations?: number;
  timeoutMs?: number;
  verbose?: boolean;
}

export type ProcessType = "sequential" | "hierarchical" | "consensus";

export interface AerithProcess {
  type: ProcessType;
  crew: AerithCrew;
  config?: ProcessConfig;
}

export interface AerithMessage extends BaseMessage {
  thinkingTool?: ThinkingTool;
  confidence?: number;
  iteration?: number;
} 