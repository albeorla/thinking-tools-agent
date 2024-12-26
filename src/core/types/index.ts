export enum ToolType {
  ProblemSolving = "Problem Solving",
  DecisionMaking = "Decision Making",
  Communication = "Communication",
}

export interface ThinkingTool {
  name: string;
  type: ToolType;
  description: string;
  characteristics: string[];
  useCase: string;
  process: string[];
  confidenceFactors: string[];
}
