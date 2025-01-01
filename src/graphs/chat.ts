import { StateGraph } from "@langchain/langgraph";
import { defaultMotorNetwork } from "../index.js";
import { AerithCrewExecutor } from "../core/crew.js";

const executor = new AerithCrewExecutor(defaultMotorNetwork, {
  type: "sequential",
  crew: defaultMotorNetwork
});

// Export the graph for LangGraph
export const graph = executor.graph; 