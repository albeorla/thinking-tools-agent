import { expect, test, describe } from "bun:test";
import { ToolType } from "../../src/core/types";

describe("ToolType Enum", () => {
  test("has exactly three types", () => {
    expect(Object.keys(ToolType).length).toBe(3);
  });

  test("has correct type values", () => {
    expect(String(ToolType.ProblemSolving)).toBe("Problem Solving");
    expect(String(ToolType.DecisionMaking)).toBe("Decision Making");
    expect(String(ToolType.Communication)).toBe("Communication");
  });

  test("values are unique", () => {
    const values = Object.values(ToolType);
    const uniqueValues = new Set(values);
    expect(values.length).toBe(uniqueValues.size);
  });

  test("enum has correct structure", () => {
    const expectedValues = {
      ProblemSolving: "Problem Solving",
      DecisionMaking: "Decision Making",
      Communication: "Communication",
    };

    Object.entries(expectedValues).forEach(([key, value]) => {
      expect(String(ToolType[key as keyof typeof ToolType])).toBe(value);
    });
  });
});
