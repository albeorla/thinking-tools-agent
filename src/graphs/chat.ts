/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AIMessage,
  BaseMessage,
  BaseMessageFields,
  HumanMessage,
  SystemMessage,
} from "@langchain/core/messages";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatAnthropic } from "@langchain/anthropic";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { z } from "zod";
import { ThinkingToolDriver } from "../core/drivers/thinking-tool-driver";
import { thinkingTools } from "../data/tools/tool-definitions";
import { RunnableBranch, RunnableSequence } from "@langchain/core/runnables";

// Define types for message content
type MessageContent = string | { type: string; text?: string }[];

// Define content chunk type
interface ContentChunk {
  type: string;
  text?: string;
}

// Add these interfaces at the top
interface GraphMessage extends BaseMessageFields, Record<string, unknown> {
  role: "system" | "user" | "assistant";
  type: "system" | "user" | "assistant";
  content: MessageContent;
  additional_kwargs?: Record<string, unknown>;
}

// Define state types
interface GraphState {
  messages: GraphMessage[];
  context?: {
    currentNode?: string;
    lastToolOutput?: string;
  };
}

interface YoloState extends Omit<GraphState, "messages"> {
  messages: GraphMessage[];
  parallel_tasks?: string[];
  confidence_scores?: Record<string, number>;
  tool_history?: string[];
  iteration_count?: number;
  improvement_suggestions?: string[];
  last_result?: unknown;
}

// Define GraphStateType
type GraphStateType = typeof MessagesAnnotation.State;

// Create typed runnables for each destination
const destinationRunnables = {
  tools: RunnableSequence.from([
    (input: GraphStateType) => input,
    async () => "tools",
  ]),
  end: RunnableSequence.from([
    (input: GraphStateType) => input,
    async () => "__end__",
  ]),
  research: RunnableSequence.from([
    (input: GraphStateType) => input,
    async () => "research",
  ]),
  documentPlanning: RunnableSequence.from([
    (input: GraphStateType) => input,
    async () => "document_planning",
  ]),
  selfImprove: RunnableSequence.from([
    (input: GraphStateType) => input,
    async () => "self_improve",
  ]),
  mainModel: RunnableSequence.from([
    (input: GraphStateType) => input,
    async () => "main_model",
  ]),
};

// Helper functions with proper typing
function getLastMessage(state: GraphStateType): GraphMessage | null {
  if (!state || typeof state !== "object") return null;
  const messages = Array.isArray((state as unknown as GraphState).messages)
    ? (state as unknown as GraphState).messages
    : [];
  return messages.length > 0 ? messages[messages.length - 1] : null;
}

function getBaseState(state: GraphStateType): YoloState {
  return {
    iteration_count: 0,
    tool_history: [],
    ...(state as unknown as YoloState),
  };
}

function hasToolCalls(message: GraphMessage | null): boolean {
  if (
    !message ||
    !("additional_kwargs" in message) ||
    !message.additional_kwargs
  ) {
    return false;
  }
  const toolCalls = message.additional_kwargs.tool_calls;
  return Array.isArray(toolCalls) && toolCalls.length > 0;
}

function extractMessageContent(message: GraphMessage | null): string {
  if (!message?.content) return "";

  try {
    if (typeof message.content === "string") {
      return message.content.toLowerCase();
    }
    if (Array.isArray(message.content)) {
      return message.content
        .map((chunk: ContentChunk) => {
          if (chunk.type === "text" && chunk.text) {
            return chunk.text;
          }
          return "";
        })
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
    }
    if (typeof message.content === "object") {
      return JSON.stringify(message.content).toLowerCase();
    }
  } catch (e) {
    console.log("Error extracting content:", e);
  }
  return "";
}
