import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { execSync } from "child_process";
import { AIMessage } from "@langchain/core/messages";

// Load environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY environment variable is not set");
  process.exit(1);
}

const COMMIT_TYPES = [
  "feat",
  "fix",
  "docs",
  "style",
  "refactor",
  "perf",
  "test",
  "build",
  "ci",
  "chore",
  "revert",
];

const COMMIT_MESSAGE_TEMPLATE = `
You are a helpful assistant that generates conventional commit messages.
Based on the following git diff, generate a concise conventional commit message.
Use one of these types: {types}

The commit message should be in the format:
type(scope?): description

Rules:
1. The description must start with a lowercase letter
2. No period at the end
3. Keep it under 72 characters
4. Use imperative mood ("add" not "added")
5. Scope is optional but encouraged

Git Diff:
{diff}

Respond ONLY with the commit message, nothing else.
`;

async function getGitDiff(): Promise<string> {
  try {
    // Get the staged diff
    const diff = execSync("git diff --cached").toString();
    if (!diff) {
      throw new Error("No staged changes found");
    }
    return diff;
  } catch (error) {
    console.error("Error getting git diff:", error);
    process.exit(1);
  }
}

async function generateCommitMessage(diff: string): Promise<string> {
  const model = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    temperature: 0.3,
    openAIApiKey: OPENAI_API_KEY,
  });

  const prompt = PromptTemplate.fromTemplate(COMMIT_MESSAGE_TEMPLATE);

  const chain = prompt.pipe(model);

  const response = (await chain.invoke({
    types: COMMIT_TYPES.join(", "),
    diff: diff,
  })) as string | AIMessage | string[];

  if (typeof response === "string") {
    return response.trim();
  }

  // Handle AIMessage content
  if (response instanceof AIMessage) {
    return response.content.toString().trim();
  }

  // Handle array of content
  if (Array.isArray(response)) {
    return response
      .map((item) => item.toString())
      .join(" ")
      .trim();
  }

  throw new Error("Unexpected response format from OpenAI");
}

async function main() {
  try {
    const diff = await getGitDiff();
    const commitMessage = await generateCommitMessage(diff);

    // Output the commit message to stdout
    console.log(commitMessage);

    // Exit successfully
    process.exit(0);
  } catch (error) {
    console.error("Error generating commit message:", error);
    process.exit(1);
  }
}

main();
