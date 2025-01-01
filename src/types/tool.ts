export interface ToolConfig {
  name: string;
  description: string;
  parameters: {
    name: string;
    type: string;
    description: string;
    required?: boolean;
  }[];
  returnType: string;
}

export interface Tool {
  id: string;
  config: ToolConfig;
  handler: (params: Record<string, any>) => Promise<any>;
  lastUsed?: Date;
  usageCount: number;
  averageExecutionTime?: number;
} 