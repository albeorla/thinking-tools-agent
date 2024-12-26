import { expect, test, describe } from "bun:test";
import { thinkingTools } from "../../src/data/tools/tool-definitions";
import { ToolType } from "../../src/core/types";

describe("Tool Definitions", () => {
  test("all tools have required fields", () => {
    thinkingTools.forEach((tool) => {
      expect(tool.name).toBeDefined();
      expect(tool.type).toBeDefined();
      expect(tool.description).toBeDefined();
      expect(tool.characteristics).toBeDefined();
      expect(tool.useCase).toBeDefined();
      expect(tool.process).toBeDefined();
      expect(tool.confidenceFactors).toBeDefined();
    });
  });

  test("all tools have valid types", () => {
    const validTypes = Object.values(ToolType);
    thinkingTools.forEach((tool) => {
      expect(validTypes).toContain(tool.type);
    });
  });

  test("all tools have non-empty arrays for characteristics, process, and confidenceFactors", () => {
    thinkingTools.forEach((tool) => {
      expect(tool.characteristics.length).toBeGreaterThan(0);
      expect(tool.process.length).toBeGreaterThan(0);
      expect(tool.confidenceFactors.length).toBeGreaterThan(0);
    });
  });

  test("all tools have unique names", () => {
    const names = thinkingTools.map((tool) => tool.name);
    const uniqueNames = new Set(names);
    expect(names.length).toBe(uniqueNames.size);
  });

  test("correct number of tools per type", () => {
    const toolsByType = thinkingTools.reduce(
      (acc, tool) => {
        acc[tool.type] = (acc[tool.type] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    expect(toolsByType[ToolType.ProblemSolving]).toBe(3); // Abstraction Laddering, First Principles, Inversion
    expect(toolsByType[ToolType.DecisionMaking]).toBe(3); // OODA Loop, Second Order Thinking, Ladder of Inference
    expect(toolsByType[ToolType.Communication]).toBe(1); // Minto Pyramid
  });

  test("all tools have descriptive content", () => {
    thinkingTools.forEach((tool) => {
      expect(tool.description.length).toBeGreaterThan(20);
      expect(tool.useCase.length).toBeGreaterThan(20);
    });
  });

  test("all arrays have consistent length", () => {
    thinkingTools.forEach((tool) => {
      expect(tool.characteristics.length).toBe(4);
      expect(tool.process.length).toBe(4);
      expect(tool.confidenceFactors.length).toBe(4);
    });
  });
});
