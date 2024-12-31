Directory structure:
└── albeorla-thinking-tools-agent/
├── docs/
│ ├── minto-pyramid.txt
│ ├── example.yaml
│ ├── langgraph.txt
│ ├── ladder-of-inference.txt
│ ├── second-order-thinking.txt
│ ├── productive-thinking-model.txt
│ ├── ooda-loop.txt
│ ├── inversion.txt
│ ├── first-principles.txt
│ ├── conf-determines-speed-vs-quality.txt
│ └── abstraction-laddering.txt
├── langgraph.json
├── eslint.config.js
├── package.json
├── vitest.config.ts
├── tsconfig.json
├── TASKS.md
└── src/
└── index.ts

================================================
File: /docs/minto-pyramid.txt
================================================

# Minto Pyramid

## Communication

Make your communication more efficient and clear.

## Problem

In business, communication needs to be clear and efficient. People are busy and don't have time to read long walls of text or listen to long presentations where the key info is shared at the very end.

## Solution

Use the Minto Pyramid to give your communication a top-down structure and get your message across quickly and clearly. Lead with the conclusion, then provide key arguments and finally support them with detailed information.

**Minto Pyramid communication framework:** Conclusion > Key arguments > Detailed information

## How to use it

See what I did there? I shared the main takeaway with you already. That's the idea of this tool – cutting to the chase. Now let's look at it in more detail.

### 1. Start with the conclusion

Capture your audience's attention early on by first telling them the main takeaway, message, recommendation or simply your conclusion. This may be the opposite to how we've been taught to communicate but it's more efficient, especially in writing and with audiences who have limited time or attention.

This principle is also called BLUF – "bottom line up front". It originated in the military but is now widely used in the business world.

### 2. Provide key points

With the main takeaway already communicated, it's time to support it with key arguments or main points. These should still be fairly short. Write them as summaries of your main points. This part should explain the "why" behind your conclusion or recommendation.

### 3. Support points with detailed information

You might still need to make your key points credible. Do that by giving more detailed information that support them: facts, evidence, numbers, results. This is the part where you can really go into detail if you want to.

The busier people are, the more likely they are to skip this part but sometimes it's necessary in order for the conclusion to be accepted or acted on.

Sometimes, you might want to skip the detailed information if your key arguments are enough to justify your conclusion and you know that your audience will understand them well enough.

## Example

It's always best to see how such a tool looks like in practice. Let's see an example of a researcher who just completed a study and wants to share the results with their colleagues, along with their recommendation.

Here's how you might write a message to your team using the Minto Pyramid tool:

Example of a message written using the Minto Pyramid – conclusion is written first, followed by key arguments and supporting details.
As you can see, there's a very clear recommendation given up front. It's explained with the key findings and those are supported by detailed data, evidence and results. This way, the audience immediately gets the most important information first. They only need to consume the details if they choose to, not in order to get to the main point.

## Takeaway

To sum up, the Minto Pyramid is a tool to give your (written) communication more clarity and efficiency. You'll lead with the conclusion, provide key arguments and support them with details. Your busy audience will thank you.

## Sources

- ["The Minto Pyramid Principle" by Barbara Minto](https://www.goodreads.com/book/show/33206.The_Minto_Pyramid_Principle)
- ["BLUF: The Military Standard That Can Make Your Writing More Powerful" by Jan-Erik Asplund](https://www.animalz.co/blog/bottom-line-up-front/)

================================================
File: /docs/example.yaml
================================================
messages:

- type: human
  content: help me plan how to earn money on etsy with digial products, we need to create a framework I can build on

- type: ai
  content: To plan how to earn money on Etsy with digital products, we can use the First Principles thinking tool. This will help us break down the problem into fundamental truths and rebuild an innovative solution from the ground up.

- type: tool
  content: First principles analysis shows we need more context to provide appropriate guidance.

- type: ai
  content: |
  Okay, let me take a step back and start from first principles on earning money through digital products on Etsy:

  1. Fundamental truths:

  - Etsy is an online marketplace for handmade/vintage items and craft supplies
  - Digital products are files/data that can be downloaded after purchase (e.g. graphics, templates, courses)
  - To earn money, you need to create value for buyers through your digital products

  2. Key requirements:

  - Identify a niche/demand for specific digital products
  - Create high-quality digital products that solve problems for your niche
  - Market and drive traffic to your Etsy listings
  - Provide excellent customer service

  3. Framework:
     Research:

  - Analyze trends and best-selling digital products on Etsy
  - Identify underserved niches you can create products for
  - Study competitors and learn what works

  Product Creation:

  - Conceptualize product ideas that meet your niche's needs
  - Invest time/resources to create professional digital products
  - Optimize product listings with keywords, descriptions, images

  Marketing:

  - Build an Etsy shop brand and leverage social media
  - Implement SEO best practices for product visibility
  - Offer promotions, discounts to attract buyers
  - Gather reviews and testimonials

  Customer Service:

  - Respond promptly to queries and address concerns
  - Provide easy instructions for download/use of digital files
  - Follow up and gather feedback to improve products

- type: human
  content: yes let's continue recommend my next steps

- type: ai
  content: Great, let's continue building out your plan using the First Principles framework.

- type: tool
  content: Need more context to recommend appropriate next steps.

- type: ai
  content: |
  Based on the first principles framework we established, here are the recommended next steps:
  Research Phase:

  1. Spend time browsing Etsy to analyze top-selling digital products across categories that interest you.
  2. Make a list of potential niches/product ideas you can create for.
  3. Study the listings of successful Etsy shops in those niches - their pricing, product offerings, marketing etc.
  4. Determine what's working well and where you can create something superior/differentiated.

  Once you've Selected a Niche: 5. Validate the niche demand through keyword research tools like Etsy's own or third-party tools. 6. Define your target customer persona and their pain points that your products can solve. 7. Conceptualize 3-5 digital product ideas that you can realistically create to get started.

  Creating Initial Products: 8. Invest time/money to create professional-quality products that provide value. 9. Optimize product listings with SEO keywords, compelling descriptions, high-quality visuals. 10. Set competitive pricing based on production costs, market rates and perceived value.

  Getting First Sales: 11. Set up an Etsy shop with a cohesive brand and policies if you haven't already. 12. Share your listings across social media, run promotions and build an initial customer base. 13. Gather reviews/feedback from first customers to guide improvements.

- type: human
  content: I think I can use a tool called erank to find est rev for winning products and essentially out compete them with midjourney

- type: ai
  content: Using a tool like erank to analyze top-selling digital products and their estimated revenue is a smart move. Combining that data with your ability to create unique designs using AI like Midjourney can definitely give you a competitive edge.

- type: tool
  content: Need more context to analyze second-order effects.

- type: ai
  content: |
  Here's a second-order thinking analysis on that approach:

  Potential Advantages:

  - Erank data provides insights into high-demand, profitable niches to pursue
  - Midjourney allows creating unique, high-quality digital designs efficiently
  - You can potentially undercut pricing of competitors while maintaining margins
  - First-mover advantage in niches where AI-generated designs are still novel

  Potential Risks/Considerations:

  - Saturation in certain niches can make it tough to stand out
  - Ethical concerns around using AI for art/design that could undercut human creators
  - Quality control to ensure AI outputs meet marketplace standards
  - Competitors may also start using similar AI tools, reducing your advantage
  - Customer support/customization requests may require more human effort

  Second-Order Effects:

  - Disrupting certain product categories by making designs more accessible
  - Potentially depressing prices/margins for digital products long-term
  - Shifting customer expectations around pricing, turnaround times
  - Need to continuously upskill/use newer AI models to stay ahead

  To mitigate risks, I'd recommend focusing on niches you're genuinely interested in, offering exemplary customer service, and looking for ways to create value beyond just low pricing. Constantly monitor evolving AI capabilities and marketplace dynamics.

================================================
File: /docs/langgraph.txt
================================================
Directory structure:
└── langchain-ai-langgraph/
├── docs/
│ └── docs/
│ └── how-tos/
│ ├── deploy-self-hosted.md
│ ├── create-react-agent-memory.ipynb
│ ├── autogen-integration.ipynb
│ ├── subgraph-transform-state.ipynb
│ ├── configuration.ipynb
│ ├── streaming-subgraphs.ipynb
│ ├── tool-calling.ipynb
│ ├── stream-updates.ipynb
│ ├── streaming-from-final-node.ipynb
│ ├── persistence_postgres.ipynb
│ ├── streaming-tokens-without-langchain.ipynb
│ ├── react-agent-structured-output.ipynb
│ ├── command.ipynb
│ ├── map-reduce.ipynb
│ ├── auth/
│ │ ├── openapi_security.md
│ │ └── custom_auth.md
│ ├── async.ipynb
│ ├── stream-multiple.ipynb
│ ├── human_in_the_loop/
│ │ ├── wait-user-input.ipynb
│ │ ├── review-tool-calls.ipynb
│ │ ├── time-travel.ipynb
│ │ ├── dynamic_breakpoints.ipynb
│ │ ├── edit-graph-state.ipynb
│ │ └── breakpoints.ipynb
│ ├── pass-run-time-values-to-tools.ipynb
│ ├── disable-streaming.ipynb
│ ├── state-model.ipynb
│ ├── visualization.ipynb
│ ├── pass_private_state.ipynb
│ ├── pass-config-to-tools.ipynb
│ ├── local-studio.md
│ ├── branching.ipynb
│ ├── multi-agent-multi-turn-convo.ipynb
│ ├── run-id-langsmith.ipynb
│ ├── react-agent-from-scratch.ipynb
│ ├── streaming-content.ipynb
│ ├── streaming-events-from-within-tools-without-langchain.ipynb
│ ├── tool-calling-errors.ipynb
│ ├── index.md
│ ├── .meta.yml
│ ├── stream-values.ipynb
│ ├── create-react-agent.ipynb
│ ├── input_output_schema.ipynb
│ ├── cross-thread-persistence.ipynb
│ ├── multi-agent-network.ipynb
│ ├── create-react-agent-system-prompt.ipynb
│ ├── persistence_mongodb.ipynb
│ ├── streaming-events-from-within-tools.ipynb
│ ├── create-react-agent-hitl.ipynb
│ ├── return-when-recursion-limit-hits.ipynb
│ ├── recursion-limit.ipynb
│ ├── autogen-langgraph-platform.ipynb
│ ├── many-tools.ipynb
│ ├── use-remote-graph.md
│ ├── persistence.ipynb
│ ├── persistence_redis.ipynb
│ ├── subgraph-persistence.ipynb
│ ├── memory/
│ │ ├── semantic-search.ipynb
│ │ ├── add-summary-conversation-history.ipynb
│ │ ├── manage-conversation-history.ipynb
│ │ └── delete-messages.ipynb
│ ├── subgraph.ipynb
│ ├── subgraphs-manage-state.ipynb
│ ├── update-state-from-tools.ipynb
│ ├── agent-handoffs.ipynb
│ ├── streaming-tokens.ipynb
│ └── node-retries.ipynb
└── examples/
├── llm-compiler/
│ └── LLMCompiler.ipynb
├── create-react-agent-memory.ipynb
├── subgraph-transform-state.ipynb
├── multi_agent/
│ ├── multi-agent-collaboration.ipynb
│ ├── hierarchical_agent_teams.ipynb
│ └── agent_supervisor.ipynb
├── configuration.ipynb
├── streaming-subgraphs.ipynb
├── lats/
│ └── lats.ipynb
├── tool-calling.ipynb
├── rewoo/
│ └── rewoo.ipynb
├── chatbots/
│ └── information-gather-prompting.ipynb
├── stream-updates.ipynb
├── streaming-from-final-node.ipynb
├── persistence_postgres.ipynb
├── streaming-tokens-without-langchain.ipynb
├── react-agent-structured-output.ipynb
├── map-reduce.ipynb
├── customer-support/
│ └── customer-support.ipynb
├── async.ipynb
├── stream-multiple.ipynb
├── human_in_the_loop/
│ ├── wait-user-input.ipynb
│ ├── review-tool-calls.ipynb
│ ├── time-travel.ipynb
│ ├── dynamic_breakpoints.ipynb
│ ├── edit-graph-state.ipynb
│ └── breakpoints.ipynb
├── pass-run-time-values-to-tools.ipynb
├── self-discover/
│ └── self-discover.ipynb
├── chatbot-simulation-evaluation/
│ ├── langsmith-agent-simulation-evaluation.ipynb
│ ├── simulation_utils.py
│ └── agent-simulation-evaluation.ipynb
├── state-model.ipynb
├── introduction.ipynb
├── visualization.ipynb
├── pass_private_state.ipynb
├── usaco/
│ └── usaco.ipynb
├── pass-config-to-tools.ipynb
├── branching.ipynb
├── cloud_examples/
│ └── langgraph_to_langgraph_cloud.ipynb
├── tutorials/
│ ├── sql-agent.ipynb
│ └── tnt-llm/
│ └── tnt-llm.ipynb
├── extraction/
│ └── retries.ipynb
├── reflexion/
│ └── reflexion.ipynb
├── run-id-langsmith.ipynb
├── plan-and-execute/
│ └── plan-and-execute.ipynb
├── react-agent-from-scratch.ipynb
├── streaming-content.ipynb
├── streaming-events-from-within-tools-without-langchain.ipynb
├── tool-calling-errors.ipynb
├── stream-values.ipynb
├── create-react-agent.ipynb
├── input_output_schema.ipynb
├── create-react-agent-system-prompt.ipynb
├── persistence_mongodb.ipynb
├── streaming-events-from-within-tools.ipynb
├── create-react-agent-hitl.ipynb
├── reflection/
│ └── reflection.ipynb
├── code_assistant/
│ ├── langgraph_code_assistant.ipynb
│ └── langgraph_code_assistant_mistral.ipynb
├── web-navigation/
│ └── web_voyager.ipynb
├── recursion-limit.ipynb
├── persistence.ipynb
├── persistence_redis.ipynb
├── README.md
├── memory/
│ ├── add-summary-conversation-history.ipynb
│ ├── manage-conversation-history.ipynb
│ └── delete-messages.ipynb
├── subgraph.ipynb
├── subgraphs-manage-state.ipynb
├── storm/
│ └── storm.ipynb
├── streaming-tokens.ipynb
├── rag/
│ ├── langgraph_adaptive_rag_cohere.ipynb
│ ├── langgraph_self_rag.ipynb
│ ├── langgraph_self_rag_pinecone_movies.ipynb
│ ├── langgraph_adaptive_rag_local.ipynb
│ ├── langgraph_crag.ipynb
│ ├── langgraph_agentic_rag.ipynb
│ ├── langgraph_crag_local.ipynb
│ ├── langgraph_self_rag_local.ipynb
│ └── langgraph_adaptive_rag.ipynb
└── node-retries.ipynb

Files Content:

================================================
File: /docs/docs/how-tos/.meta.yml
================================================
tags:

- how-tos
- how-to
- howto
- how to

================================================
File: /examples/llm-compiler/LLMCompiler.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "85205e97",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/llm-compiler/LLMCompiler.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/create-react-agent-memory.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "1ef41a89",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/create-react-agent-memory.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/subgraph-transform-state.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "0de7689f",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/subgraph-transform-state.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/multi_agent/multi-agent-collaboration.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "d2b507b9",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/multi-agent-collaboration.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/multi_agent/hierarchical_agent_teams.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "5cc8a2ad",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/hierarchical_agent_teams.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/multi_agent/agent_supervisor.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "5eb637a4",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/multi_agent/agent_supervisor.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/configuration.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "e9a58c69",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/configuration.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/streaming-subgraphs.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "47164a72",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/streaming-subgraphs.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 2
}

================================================
File: /examples/lats/lats.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "09038b53",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/lats/lats.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/tool-calling.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "7fd8bd65",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/tool-calling.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/rewoo/rewoo.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "961f43ec",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/rewoo/rewoo.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/chatbots/information-gather-prompting.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "a9014f94",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbots/information-gather-prompting.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/stream-updates.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "e6829c80",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/stream-updates.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/streaming-from-final-node.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "756e4554",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/streaming-from-final-node.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/persistence_postgres.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "18526f23",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/persistence_postgres.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/streaming-tokens-without-langchain.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "218dfbcb",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/streaming-tokens-without-langchain.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/react-agent-structured-output.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "40f0d107",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/react-agent-structured-output.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/map-reduce.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "42abb708",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/map-reduce.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/customer-support/customer-support.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "a8232bc9",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/customer-support/customer-support.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/async.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "23544406",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/async.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/stream-multiple.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "e663f597",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/stream-multiple.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/human_in_the_loop/wait-user-input.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "3ecab357",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/human_in_the_loop/wait-user-input.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/human_in_the_loop/review-tool-calls.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "b162f1bd",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/human_in_the_loop/review-tool-calls.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/human_in_the_loop/time-travel.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "84c5f6f1",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/human_in_the_loop/time-travel.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/human_in_the_loop/dynamic_breakpoints.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "b3cec425",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/human_in_the_loop/dynamic_breakpoints.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/human_in_the_loop/edit-graph-state.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "4876215f",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/human_in_the_loop/edit-graph-state.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.8"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/human_in_the_loop/breakpoints.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "ac22b8de",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/human_in_the_loop/breakpoints.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/pass-run-time-values-to-tools.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "8f38bec5",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/pass-run-time-values-to-tools.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/self-discover/self-discover.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "f6db1873",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/self-discover/self-discover.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/chatbot-simulation-evaluation/langsmith-agent-simulation-evaluation.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "a4351a24",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbot-simulation-evaluation/langsmith-agent-simulation-evaluation.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "10251c1c",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/chatbot-simulation-evaluation/agent-simulation-evaluation.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/state-model.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "4149ffcc",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/state-model.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/introduction.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "08c0351b",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/introduction.ipynb"
]
},
{
"cell_type": "markdown",
"id": "e8363fbc",
"metadata": {},
"source": []
}
],
"metadata": {
"kernelspec": {
"display_name": "env",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/visualization.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "9c9cb15a",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/visualization.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/pass_private_state.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "4da17088",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/pass_private_state.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/usaco/usaco.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "9dffdb54",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/usaco/usaco.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/pass-config-to-tools.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "05f6ad0a",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/pass-config-to-tools.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/branching.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "14f7ca50",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/branching.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.8"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/cloud_examples/langgraph_to_langgraph_cloud.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "2b789e16",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/cloud/how-tos/langgraph_to_langgraph_cloud.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/tutorials/sql-agent.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "83c2223f",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/sql-agent.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/tutorials/tnt-llm/tnt-llm.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "11140167",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/tnt-llm/tnt-llm.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/extraction/retries.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "8dbdba5b",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/extraction/retries.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/reflexion/reflexion.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "caf07859",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/reflexion/reflexion.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/run-id-langsmith.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "bbd6e9b8",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/run-id-langsmith.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/plan-and-execute/plan-and-execute.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "9138f92e",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/plan-and-execute/plan-and-execute.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/react-agent-from-scratch.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "294995c4",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/react-agent-from-scratch.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 2
}

================================================
File: /examples/streaming-content.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "6619387c",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/streaming-content.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/streaming-events-from-within-tools-without-langchain.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "57b7e303",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/streaming-events-from-within-tools-without-langchain.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/tool-calling-errors.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "dc21501d",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/tool-calling-errors.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/stream-values.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "5ec11895",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/stream-values.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/create-react-agent.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "eb07372e",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/create-react-agent.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/input_output_schema.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "fc0793cb",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/input_output_schema.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/create-react-agent-system-prompt.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "9e2f7902",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/create-react-agent-system-prompt.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/persistence_mongodb.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "78217098",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/persistence_mongodb.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/streaming-events-from-within-tools.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "8e71a0c8",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/streaming-events-from-within-tools.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/create-react-agent-hitl.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "a1e6efeb",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/create-react-agent-hitl.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/reflection/reflection.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "658773a2",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/reflection/reflection.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/code_assistant/langgraph_code_assistant.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "1f2f13ca",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/code_assistant/langgraph_code_assistant.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/web-navigation/web_voyager.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "007ea2e9",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/web-navigation/web_voyager.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/recursion-limit.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "fa3f7c50",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/recursion-limit.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 2
}

================================================
File: /examples/persistence.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "d16e8b9c",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/persistence.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/persistence_redis.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "eee6ecdd",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/persistence_redis.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/README.md
================================================

# LangGraph examples

This directory should NOT be used for documentation. All new documentation must be added to `docs/docs/` directory.

================================================
File: /examples/memory/add-summary-conversation-history.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "298784f6",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/memory/add-summary-conversation-history.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.1"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/memory/manage-conversation-history.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "6ec7cb13",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/memory/manage-conversation-history.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/memory/delete-messages.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "3f4370fd",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/memory/delete-messages.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/subgraph.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "f49876e1",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/subgraph.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/subgraphs-manage-state.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "5106959e",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/subgraphs-manage-state.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/storm/storm.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "3e05d7f9",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/tutorials/storm/storm.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.12.2"
}
},
"nbformat": 4,
"nbformat_minor": 4
}

================================================
File: /examples/streaming-tokens.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "99eb887e",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/streaming-tokens.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "Python 3 (ipykernel)",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 5
}

================================================
File: /examples/node-retries.ipynb
================================================
{
"cells": [
{
"cell_type": "markdown",
"id": "017a01f4",
"metadata": {},
"source": [
"This file has been moved to https://github.com/langchain-ai/langgraph/blob/main/docs/docs/how-tos/node-retries.ipynb"
]
}
],
"metadata": {
"kernelspec": {
"display_name": "env",
"language": "python",
"name": "python3"
},
"language_info": {
"codemirror_mode": {
"name": "ipython",
"version": 3
},
"file_extension": ".py",
"mimetype": "text/x-python",
"name": "python",
"nbconvert_exporter": "python",
"pygments_lexer": "ipython3",
"version": "3.11.9"
}
},
"nbformat": 4,
"nbformat_minor": 2
}

================================================
File: /docs/ladder-of-inference.txt
================================================

# Ladder of inference

## Decision Making

Avoid jumping to conclusions. Make decisions based on reality.

## Problem

We act and make decisions based on the conclusions we make. But we tend to jump to these conclusions and skip important parts of the reasoning process.

## Solution

Ladder of inference, developed by a former Harvard professor Chris Argyris, is a tool that helps you fill the gaps in your thinking and make decisions based on reality. It's also helpful to challenge the thinking of others and reach better conclusions together.

## The ladder

There are 7 steps on the ladder that represent our mental processes. Here's what it looks like from the bottom up:

### Available data

This is the reality we are able to observe.

### Selected data

We select what we pay attention to based on our prior experiences and existing beliefs. We don't have the mental capacity to take in every piece of data available, so we have to make this selection.

### Interpretations

We give facts meaning. We paraphrase what we see or hear to make sense of it.

### Assumptions

Based on our interpretation, we make our own personal assumptions.

### Conclusions

We draw conclusions from our assumptions.

### Beliefs

Our beliefs are then developed from the conclusions we make.

### Actions

Finally, we take actions that are rooted in what we believe to be true.

These processes usually happen unconsciously and very quickly in our brain. Applying this ladder consciously allows you to take a step back and see where you're jumping to conclusions.

## How to use it

Whenever you make a conclusion about something or are making decisions based on your conclusions, it's good to stop and question your reasoning.

First, identify on which step of the ladder you currently are. Are you about to take action and you're not sure if it's the right one? Or perhaps you're aware of some of the assumptions you're making?

Then work your way down before building your reasoning up again. To work your way down the ladder, use these guiding questions for each step:

### Actions

- Why do I believe this to be the right action?
- What are some alternative options?

### Beliefs

- What beliefs do I hold about this?
- What conclusions are they based on?

### Conclusions

- Why did I conclude this?
- What are my assumptions there?

### Assumptions

- Are my assumptions valid?
- Why am I assuming this?

### Interpretations

- Am I looking at this data objectively?
- What other meanings could they have?

### Selected data

- What did I ignore or didn't pay attention to?
- Are there other sources of data I didn't consider?

As you answer these, you may find that your reasoning changes along the way and that's good. When you reach the bottom of the ladder, work your way back up again, this time more consciously and deliberately.

## Example

Let's see how applying the ladder of inference looks like on a practical example.

Suppose I'm managing a team of developers. One of them hasn't been performing well recently. He's been missing deadlines and several projects were delayed because of this. I conclude he's not cut out for the job and decide to fire him.

However, I stop and ask myself: Is this the right thing to do? I can now apply the ladder of inference to unpack my thinking and perhaps make a better decision. I ask myself the guiding questions:

1. Why do I believe that firing this person is the right action? Because it's clear to me he's not right for the job.
2. What conclusions is this belief based on? That he's not a good developer.
3. What are my assumptions here? I assumed that his recent results are representative of his qualities (or lack thereof).
4. Why am I assuming this? Because missed deadlines mean he's not efficient.
5. What other meanings could the data I'm looking at have? Missed deadlines might also mean the deadlines are unreasonable or he's taking extra time to deliver quality code.
6. Are there other sources of data I didn't consider? I haven't asked him directly yet. When I do, I might find out the real reason he's been missing deadlines.

This is a simplified example but it shows the kind of jumping to conclusions I want to avoid: missed deadlines → inefficient → not a good developer → should be fired. By unpacking my thinking, I can look at the situation more objectively and I may discover different reasons for what's happening: perhaps the deadlines are too tight or he's going through some personal issues. Neither of which should be a reason to fire him.

The ladder of influence has just helped me avoid making a bad and premature decision.

## Sources

- ["The Fifth Discipline: The Art & Practice of The Learning Organization" by Peter Senge](https://www.goodreads.com/book/show/255127.The_Fifth_Discipline)
- ["Rethinking thinking" by Trevor Maber](https://www.youtube.com/watch?v=KJLqOclPqisg)
- ["The Ladder of Inference" on Systems Thinker](https://thesystemsthinker.com/the-ladder-of-inference/)

================================================
File: /docs/second-order-thinking.txt
================================================

# Second-order thinking

## Decision Making

Consider the long-term consequences of your decisions.

## Problem

Some decisions seem like wins at first, but turn out to be losses over time. What seems like an investment now turns out to be a liability later. What looked like a good decision earlier is now a bad one.

## Solution

Use second-order thinking to examine the long-term effects of your decisions. Most people stop at first-order thinking, but second-order thinking helps you make decisions that will stand the test of time.

## How to use it

Using second-order thinking can be a purely mental exercise or you can write it down on paper.

1. Consider a decision you have to make
2. Look at the immediate effects (first order)
3. For each effect, ask "And then what?" to examine second-order consequences
4. Repeat for additional orders as needed

Alternatively, think about the consequences in different timelines:

- 10 minutes
- 10 months
- 10 years

This helps you consider short-term, medium-term and long-term impacts.

You can apply second-order thinking to both big decisions (e.g. buying a house) and small, everyday choices (e.g. eating a cake). It's useful for personal decisions, business strategy, and policy-making.

## Example

Let's explore what second-order thinking looks like with the decision of buying a house outside the city.

Immediate (first-order) effects:

- Having a garden
- More space for family
- Living an hour from work

Higher-order consequences:

- Having a garden → able to grow produce → having fresh herbs and vegetables
- More space for family → more rooms to clean → more stress from a messy home
- Living an hour from work → need to buy a car → spending two hours daily commuting

This example shows just some consequences, but demonstrates how second-order thinking reveals longer-term impacts to make more informed decisions.

## Sources

- ["Second-order thinking" by Shane Parrish](https://fs.blog/2016/04/second-order-thinking/)
- ["The Most Important Thing" by Howard Marks](https://www.goodreads.com/book/show/10454418-the-most-important-thing)

================================================
File: /docs/productive-thinking-model.txt
================================================

# Productive Thinking Model

## Problem Solving

Solve problems creatively and efficiently.

By applying more structured and critical thinking, you can understand the problem at hand better and come up with more creative solutions to it. The Productive Thinking Model, created by Tim Hurson, can help you do just that.

It's best used when a problem is already defined and you're looking for creative solutions.

## How to use it

This tool gives you a 6-step framework for problem-solving. The six steps are:

1. Ask "What's going on?"
2. Ask "What's success?"
3. Ask "What's the question?"
4. Generate answers
5. Forge the solution
6. Align resources

Let's look at each step in more detail.

### 1. Ask "What's going on?"

The first step is about understanding the problem better. You can use these guiding questions to help you:

- What's the problem exactly?
- What's the impact of this problem?
- What do I already know? What information do I have?
- Who is involved in this?
- What's the vision of the future when this problem is solved?
  (This is what Hurson calls the "Target Future")

Document the answers you gather here as you'll need them later in the process.

### 2. Ask "What's success?"

This step will help you define what success looks like in your vision of the future (that you created in the previous step).

To come up with the success criteria, you can use the DRIVE framework:

- What do you want the solution to do?
- What are the restrictions? What must it not do?
  (You can use inversion to help you here)
- What resources can we invest in this?
- What values should the solution have?
- What are the essential outcomes?

Feel free to cycle through these questions until you have a clear vision of success in front of you.

### 3. Ask "What's the question?"

Now it's time to generate questions that must be answered to achieve your vision (the Target Future). Hurson calls these "catalytic questions".

Use the information you've gathered in the previous steps. Phrases like "How might we...?" or "How can I...?" will help you formulate the questions.

### 4. Generate answers

In this step, try to come up with as many answers to the catalytic questions as you can. Brainstorm, don't judge and collect ideas. These are your potential solutions.

In the next step, you will narrow down your list of ideas to the most promising ones.

### 5. Forge the solution

You need to choose the best solution before developing it further. Take your list from the previous step and evaluate each idea/solution against the success criteria from step 2. Use a decision matrix to make this step easier.

Now you can think about building on your selected solution(s). What could make it better? How can you make it fit the success criteria more?

### 6. Align resources

In this final step, you move toward executing the solution.

Write down which actions and resources are necessary to make this happen. Identify people who are responsible for it – in whole as well as each part of the solution.

It's best to specify all of this in detail so that you have a clear plan of action. You should now be able to execute the solution.

## Example

Let's look at how this tool can be used in a practical example.

Suppose that what you're solving is winning a prospective customer.

When you probe about the situation, you find out that:

- It's a customer with difficult requirements but one that could bring in a lot of revenue.
- The impact of losing this revenue could be significant for your business.
- Your sales team has been in touch with them and know that ease of use is important for them, among other things.
- Your vision (or target future) is that the customer is successfully onboarded, uses your product daily and brings in the revenue.

Let's now define success, as per step 2, using the DRIVE framework:

- What must the solution do? Show the customer the value of your product and also how well you can take care of them.
- What are the restrictions? The solution must show that we meet the customer's requirements and that the product is easy to use.
- What resources can we invest in this? We can invest two weeks of two salespeople and one week of a designer and an engineer.
- What values should the solution have? It's convincing, transparent and thoughtful.
- What's the essential outcome? Customer agrees to sign a contract.

We can now move on to defining the "catalytic questions" that must be answered to reach our vision:

- How might we show the value of the product in a way that meets their requirements?
- How do we demonstrate the ease of use?

Let's say these are the most critical questions and we need to focus on them. We can brainstorm some answers (potential solutions):

- Present a slide deck with product and company highlights
- Build an interactive demo personalized for the customer
- Spend a day with the potential end-users and have them try the product hands-on
- Give key stakeholders a tour of the product

Now we need to choose the most promising solution. For the sake of simplicity, let's say we used the decision matrix and it turns out that the best solution seems to be spending a day with the potential end-users and having them try the product hands-on.

We can make this even better by inviting key stakeholders to observe so they can see the value the product can bring to their users and also that it's easy to use for them.

The final step would be to align the resources: we will send a small team consisting of two salespeople and an engineer (to set up the product on-site) to travel to the customer for a day. The Sales VP will be responsible for coordinating this. And an engineering manager will be tasked with preparing the right version of the product for the trial.

We now have a clear plan of action for the most promising solution to the problem.

## Takeaway

The Productive Thinking Model enables you to solve problems creatively through structured, critical thinking. It offers a 6-step framework:

1. Ask "What's going on?"
2. Ask "What's success?"
3. Ask "What's the question?"
4. Generate answers
5. Forge the solution
6. Align resources

After going through these steps, you should be equipped with an action plan based on the best solution to your problem.

## Sources

- ["Think Better: An Innovator's Guide to Productive Thinking" by Tim Hurson](https://www.goodreads.com/book/show/1860620.Think_Better)

================================================
File: /docs/ooda-loop.txt
================================================

# OODA loop

## Decision Making

Make faster decisions with incomplete data.

## Problem

In the real world and especially in business, you rarely have all the information to make a decision.

## Solution

The OODA loop is a framework that helps you make decisions fast and adapt in quickly changing and competitive environments.

It was developed by Colonel John Boyd, a military strategist with the US Air Force. This framework was originally intended for training solders to make time-sensitive decisions rapidly when there may not be time to gather all the information. Nowadays, it is being applied across industries and is just as relevant for business.

## How to use it

OODA stands for:

- Observe
- Orient
- Decide
- Act

The original framework as presented by Boyd is much more complex but the foundation lies in these four phases. Let's look at each phase in detail.

### Observe

You start by gathering available information and data. This includes the situation around you, wider context, any outside information but also feedback from a previous loop (more on this below). Note that data can become obsolete so it's important to gather data quickly, otherwise you run the risk of making a decision based on something that's no longer relevant or true.

### Orient

Orientation is about analysing and synthesising the information gathered. It's where you consider your options, leveraging your experience, knowledge, and analysis to understand the situation. This phase often involves challenging status quo and considering the perspectives of others to form a comprehensive view.

### Decide

The decision phase is where you choose a course of action based on your observation and orientation. In this phase, you are basically making a hypothesis and you will test by acting on it. It's crucial to balance speed with thoroughness – decisions must be timely but also informed and strategic.

### Act

Finally, acting on your decision is about implementation. This phase tests the validity of your previous phases – you'll quickly learn if your observations and decisions were accurate.

## Going through the loops

While being able to make decisions faster than your competition is important, speed alone isn't the only factor to focus on. Perhaps more important is getting into a good rhythm of going through the loops continuously because it generates unpredictability.

That makes it difficult for your competition to understand and orient themselves to what happens next. Going through OODA loops with more tempo than the competition gives an organization more control of the environment and a better chance of succeeding.

## Example

Imagine a software company, 'TechGenius', that has recently launched a new project management tool. Suddenly, a competitor releases a similar tool with a unique feature that's gaining attention in the market.

**Observe:** The product team at TechGenius quickly gathers data. They monitor customer feedback, analyse market trends, and review the competitor's new feature. They also assess the impact of this feature on their own product's performance and customer satisfaction.

**Orient:** The team synthesises this information. They consider how this new feature fits into the broader market trends and what it means for their product strategy. They draw on their experience with past updates, current technology capabilities, and customer preferences. The team challenges their initial assumptions about their product's unique selling points and considers whether they need to pivot their strategy.

**Decide:** After thorough analysis, the team decides to develop a new feature that not only matches the competitor's offering but also integrates seamlessly with their tool's existing functionalities, offering added value to their customers.

**Act:** TechGenius quickly mobilises its development team to start working on the new feature. They set clear milestones and a timeline for development and launch. The marketing team begins preparing a campaign to announce the upcoming feature, aiming to recapture market attention.

As the new feature is developed and released, the team doesn't stop there. They re-enter the OODA loop, observing customer reactions, orienting themselves based on this feedback, deciding on any necessary adjustments, and acting to implement these changes.

In this scenario, TechGenius utilised the OODA Loop to rapidly respond to a competitive challenge. By swiftly moving through the observe-orient-decide-act phases, they were not only able to counter a competitor's move but also enhance their own product's value proposition, demonstrating the power of agility and adaptability in the fast-paced tech industry.

## Takeaway

The OODA loop provides guidance to make fast decisions in quickly changing and competitive environments. You observe, orient, decide and act. It's important to go through the loop continuously, especially as you are competing with others. The faster you can do that, the better the chance of outmanoeuvring your competition.

## Sources

- ["The Essence of Winning and Losing" by John Boyd](https://fasttransients.files.wordpress.com/2010/03/essence_of_winning_losing.pdf)
- ["OODA loop" on Wikipedia](https://en.wikipedia.org/wiki/OODA_loop)

================================================
File: /docs/inversion.txt
================================================

# Inversion

## Problem Solving

Approach a problem from a different point of view.

Inversion is useful when you need to view the problem you're solving from a different angle. It can help you see a different perspective and imagine worst-case scenarios.

## How to use it?

A good trigger question to know if inversion can help you is "Am I only thinking of ideal solutions or scenarios?"

You can then invert your thinking about the problem or a solution. To do that, follow these steps:

1. Ask yourself: What would be the worst decision/solution in this situation?
2. Ask yourself: Why would it be bad? Write those reasons down.
3. Try to come up with a good decision/solution, now by looking at the reasons that would make a bad decision.

## Illustration of inversion

Inversion helps you see the bad outcomes and therefore avoid them.

More questions that could help you see the inverted perspective are:

- How could this go wrong?
- What would the opposite of this be?
- What would make a bad solution to this?

## Inversion in practice

Project managers use inversion in an exercise called pre-mortem.

The team gathers to imagine it's six months from now and the project they've worked on has failed. They examine this potential scenario by asking questions like "What went wrong?", "What mistakes did we make?" or "Why did this project fail?".

This makes the team see potential pitfalls ahead of time and prepare for them. By using inversion, they're able to avoid possible mistakes and bad outcomes.

## Sources

- ["Mental models for designers" by Wes O'Haire](https://dropbox.design/article/mental-models-for-designers)
- ["Inversion" by James Clear](https://jamesclear.com/inversion)

================================================
File: /docs/first-principles.txt
================================================

# First principles

## Problem Solving

Break down complex problems into basic elements and create innovative solutions from there.

Sometimes also called "reasoning from first principles", it's a powerful tool for problem-solving. Identifying the basic principles of a problem will allow you to come up with innovative solutions.

First principle is a basic principle or truth that cannot be broken down any further. First-principles thinking is about digging deeper until you arrive at the very foundations of a problem.

## How to use it?

Start with your problem and take these two steps:

1. Break it down to the most basic truths (first principles)
2. Re-build a solution from those principles

It sounds simple but requires some focused thinking to really dig deep in the problem and discover those first principles.

## Techniques to help you

### The Five Whys

This is a popular technique in user research where a researcher digs deeper by repeatedly asking "why" questions. It enables you to discover the root causes of problems. Of course, you don't have to stop at five, but it's generally enough to discover a first principle.

### Socratic questioning

A form of disciplined questioning that enables critical thinking. There are six types of questions you can ask to dig deeper for the fundamental truth:

- Clarification – "What do you mean by...?"
- Probing assumptions – "What could we assume instead?"
- Probing reasons/evidence – "Why do you think this is true?"
- Implications and consequences – "What effect would that have?"
- Different viewpoints – "What would be an alternative?"
- Questioning the original question – "What was the point of this question?"

## First principles in practice

Let's see first-principles thinking in action. Here's a nice example from Wes O'Haire, designer at Dropbox:

> "I did this on a project last year where we started with our problem statement. From there, I broke it down into its fundamental parts, then addressed each part, and reconfigured it to build up a solution."

## Sources

- ["Mental models for designers" by Wes O'Haire](https://dropbox.design/article/mental-models-for-designers)
- ["First Principles: The Building Blocks of True Knowledge" by Shane Parrish](https://fs.blog/2018/04/first-principles/)

================================================
File: /docs/conf-determines-speed-vs-quality.txt
================================================

# Confidence determines speed vs. quality

## Decision Making

Determine a trade-off between speed and quality when building products.

## Problem

In product development, speed and quality are two important variables. Prioritizing one is typically at the expense of the other.

## Solution

Base your decision to prioritize speed or quality on your confidence in:

- The importance of the problem you're solving
- The correctness of your solution to that problem

Before making this decision, ensure your confidence is based on data rather than subjective views.

## How to use it

There are three basic scenarios:

1. Low confidence in problem importance → Focus on speed
2. High confidence in both problem and solution → Focus on quality
3. High confidence in problem but low in solution → Balance speed and quality

Note that confidence exists on a spectrum rather than being binary. Your approach should be similarly nuanced based on your specific confidence levels.

## Sources

- ["Product management mental models for everyone" on Black Box of PM](https://blackboxofpm.com/product-management-mental-models-for-everyone-31e7828cb50b)

================================================
File: /docs/abstraction-laddering.txt
================================================

# Abstraction laddering

## Problem Solving

Frame your problem better with different levels of abstraction.

Abstraction laddering is a tool for framing problems more skillfully. It helps with defining a problem that you need to solve more clearly. It helps you to move beyond an initial problem statement.

This tool provides you with the ability to ask the right questions to move up and down the ladder.

Move up to expand the scope, to "see the forest for the trees". Move down to develop concrete solutions.

## How to use it

1. Start with an initial problem statement in the middle of the ladder
2. Ask "why" questions to get more abstract problem statements. This can help you frame the problem differently
3. Ask "how" questions to step toward a more concrete statement or solution. This helps you come up with different problem statements than the one you started with. It enables you to find more innovative solutions

## Illustration of how to use abstraction laddering

The great thing about this tool is that you can use it anywhere in the design process. It can be used fairly quickly—in mere minutes—whether you're working alone or in a workshop setting with your team.

## What does it look like in practice?

Here's a simple example from Wes O'Haire from Dropbox:

_Abstraction laddering example by Wes O'Haire_

He starts with an initial problem statement: "Design a better can opener". Initially asking "how?", he gets to a more concrete statement "Make it more appealing".

But he can also go up the ladder: "Why do we need a better can opener?"

This leads him to the more abstract problem statement: "Get soup out of the can". From there, he might ask "How might we get the soup out of the can?". That enables defining a different problem statement: "Make it more convenient."

## Sources

- ["Mental models for designers" by Wes O'Haire](https://dropbox.design/article/mental-models-for-designers)
- ["Abstraction laddering" by Autodesk](https://www.autodesk.com/industry/manufacturing/resources/mechanical-engineer/abstraction-laddering)

================================================
File: /langgraph.json
================================================
{
"name": "Thinking Tools Agent",
"description": "A LangGraph-based system that helps select appropriate thinking tools",
"version": "1.0.0",
"node_version": "20",
"dependencies": ["."],
"graphs": {
"default": "./src/graphs/chat.ts:app"
},
"env": ".env"
}

================================================
File: /eslint.config.js
================================================
import { builtinRules } from "eslint/use-at-your-own-risk";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/\*\*

- Example ESLint Flat Config for a Bun + TypeScript project
-
- - Includes ESLint's built-in recommended rules
- - Applies the TypeScript ESLint recommended rules to .ts/.tsx files
- - Uses the TypeScript ESLint parser
- - Assumes you have a valid tsconfig.json at the project root
    \*/
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
// Test-specific rules
"@typescript-eslint/no-explicit-any": "off",
"@typescript-eslint/no-non-null-assertion": "off",
},
},
];

================================================
File: /package.json
================================================
{
"name": "thinking-tools",
"description": "A LangGraph-based system for selecting appropriate thinking tools",
"type": "module",
"version": "0.1.0",
"scripts": {
"format": "prettier --write .",
"format:check": "prettier --check .",
"lint": "tsc --noEmit && eslint . --fix",
"lint:check": "tsc --noEmit && eslint .",
"prepare": "husky",
"start": "bun run src/index.ts",
"test": "vitest run",
"test:coverage": "vitest run --coverage",
"test:watch": "vitest",
"tree": "tree -I 'node_modules' | cat"
},
"dependencies": {
"@langchain/anthropic": "^0.3.11",
"@langchain/community": "^0.3.20",
"@langchain/core": "^0.3.26",
"@langchain/langgraph": "^0.2.36",
"@langchain/openai": "^0.3.16",
"langchain": "^0.3.8"
},
"devDependencies": {
"@types/bun": "latest",
"@typescript-eslint/eslint-plugin": "^8.18.2",
"@typescript-eslint/parser": "^8.18.2",
"@vitest/coverage-v8": "^2.1.8",
"@vitest/ui": "^2.1.8",
"eslint": "~9.17.0",
"husky": "^9.1.7",
"lint-staged": "^15.2.11",
"prettier": "^3.4.2",
"ts-node": "^10.9.2",
"vitest": "^2.1.8"
},
"peerDependencies": {
"typescript": "~5.7.2"
},
"license": "MIT"
}

================================================
File: /vitest.config.ts
================================================
import { defineConfig } from "vitest/config";

export default defineConfig({
test: {
globals: true,
environment: "node",
include: ["src/**/*.test.ts"],
coverage: {
provider: "v8",
reporter: ["text", "json", "html"],
include: ["src/**/*.ts"],
exclude: [
"src/**/*.test.ts",
"src/**/__tests__/**",
"src/**/*.d.ts"
]
}
},
resolve: {
alias: {
"@core": "/src/core",
"@data": "/src/data",
"@utils": "/src/utils",
"@test": "/test",
},
},
});

================================================
File: /tsconfig.json
================================================
{
"compilerOptions": {
"target": "ESNext",
"module": "ESNext",
"moduleResolution": "bundler",
"types": ["bun-types"],
"esModuleInterop": true,
"strict": true,
"skipLibCheck": true,
"forceConsistentCasingInFileNames": true,
"outDir": "dist",
"baseUrl": ".",
"paths": {
"@core/_": ["src/core/_"],
"@data/_": ["src/data/_"],
"@utils/_": ["src/utils/_"]
}
},
"include": ["src/**/*", "test/**/*"],
"exclude": ["node_modules", "dist"]
}
