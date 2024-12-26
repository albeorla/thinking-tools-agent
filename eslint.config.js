import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import { builtinRules } from "eslint/use-at-your-own-risk";

export default [
  {
    // ESLint's built-in recommended rules
    rules: {
      ...builtinRules,
    },
  },
  {
    files: ["**/*.ts"], // Apply to all TypeScript files
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      // Use the recommended rules from @typescript-eslint
      ...typescriptEslintPlugin.configs.recommended.rules,
    },
  },
];
