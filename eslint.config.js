import { builtinRules } from "eslint/use-at-your-own-risk";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/**
 * Example ESLint Flat Config for a Bun + TypeScript project
 *
 * - Includes ESLint's built-in recommended rules
 * - Applies the TypeScript ESLint recommended rules to .ts/.tsx files
 * - Uses the TypeScript ESLint parser
 * - Assumes you have a valid tsconfig.json at the project root
 */
export default [
  // 1) ESLint's built-in recommended JS/TS rules (general config)
  {
    rules: {
      ...builtinRules,
    },
  },

  // 2) Main TypeScript configuration for non-test files
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
    },
  },

  // 3) Configuration for test files
  {
    files: ["test/**/*.ts", "test/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.test.json",
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
      // Test-specific rules
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];
