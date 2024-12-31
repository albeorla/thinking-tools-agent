Directory structure:
└── langchain-ai-langchainjs/
    ├── docs/
    │   ├── core_docs/
    │   │   ├── docs/
    │   │   │   ├── how_to/
    │   │   │   │   ├── routing.mdx
    │   │   │   │   ├── vectorstore_retriever.mdx
    │   │   │   │   ├── sql_large_db.mdx
    │   │   │   │   ├── document_loader_csv.mdx
    │   │   │   │   ├── example_selectors_similarity.mdx
    │   │   │   │   ├── vectorstores.mdx
    │   │   │   │   ├── ensemble_retriever.mdx
    │   │   │   │   ├── custom_retriever.mdx
    │   │   │   │   ├── parallel.mdx
    │   │   │   │   ├── time_weighted_vectorstore.mdx
    │   │   │   │   ├── debugging.mdx
    │   │   │   │   ├── document_loader_pdf.mdx
    │   │   │   │   ├── document_loaders_json.mdx
    │   │   │   │   ├── streaming_llm.mdx
    │   │   │   │   ├── index.mdx
    │   │   │   │   ├── parent_document_retriever.mdx
    │   │   │   │   ├── sql_prompting.mdx
    │   │   │   │   ├── chat_models_universal_init.mdx
    │   │   │   │   ├── llm_token_usage_tracking.mdx
    │   │   │   │   ├── generative_ui.mdx
    │   │   │   │   ├── fallbacks.mdx
    │   │   │   │   ├── stream_agent_client.mdx
    │   │   │   │   ├── document_loader_custom.mdx
    │   │   │   │   ├── sql_query_checking.mdx
    │   │   │   │   ├── multi_vector.mdx
    │   │   │   │   ├── contextual_compression.mdx
    │   │   │   │   ├── chat_token_usage_tracking.mdx
    │   │   │   │   ├── indexing.mdx
    │   │   │   │   ├── chat_model_caching.mdx
    │   │   │   │   ├── stream_tool_client.mdx
    │   │   │   │   ├── document_loader_directory.mdx
    │   │   │   │   ├── few_shot.mdx
    │   │   │   │   ├── embed_text.mdx
    │   │   │   │   ├── example_selectors_length_based.mdx
    │   │   │   │   ├── prompts_partial.mdx
    │   │   │   │   ├── llm_caching.mdx
    │   │   │   │   ├── reduce_retrieval_latency.mdx
    │   │   │   │   ├── caching_embeddings.mdx
    │   │   │   │   └── installation.mdx
    │   │   │   ├── security.md
    │   │   │   ├── contributing/
    │   │   │   │   ├── integrations.mdx
    │   │   │   │   ├── documentation/
    │   │   │   │   │   ├── style_guide.mdx
    │   │   │   │   │   └── _category_.yml
    │   │   │   │   ├── index.mdx
    │   │   │   │   ├── faq.mdx
    │   │   │   │   ├── repo_structure.mdx
    │   │   │   │   ├── testing.mdx
    │   │   │   │   └── code.mdx
    │   │   │   ├── troubleshooting/
    │   │   │   │   └── errors/
    │   │   │   │       ├── index.mdx
    │   │   │   │       ├── INVALID_PROMPT_INPUT.mdx
    │   │   │   │       ├── MODEL_RATE_LIMIT.mdx
    │   │   │   │       ├── MODEL_NOT_FOUND.mdx
    │   │   │   │       ├── MODEL_AUTHENTICATION.mdx
    │   │   │   │       ├── OUTPUT_PARSING_FAILURE.mdx
    │   │   │   │       └── MESSAGE_COERCION_FAILURE.mdx
    │   │   │   ├── versions/
    │   │   │   │   ├── migrating_memory/
    │   │   │   │   │   └── index.mdx
    │   │   │   │   ├── release_policy.mdx
    │   │   │   │   ├── v0_3/
    │   │   │   │   │   └── index.mdx
    │   │   │   │   └── v0_2/
    │   │   │   │       ├── index.mdx
    │   │   │   │       └── migrating_astream_events.mdx
    │   │   │   ├── introduction.mdx
    │   │   │   ├── tutorials/
    │   │   │   │   └── index.mdx
    │   │   │   ├── concepts/
    │   │   │   │   ├── key_value_stores.mdx
    │   │   │   │   ├── vectorstores.mdx
    │   │   │   │   ├── streaming.mdx
    │   │   │   │   ├── embedding_models.mdx
    │   │   │   │   ├── output_parsers.mdx
    │   │   │   │   ├── index.mdx
    │   │   │   │   ├── lcel.mdx
    │   │   │   │   ├── prompt_templates.mdx
    │   │   │   │   ├── chat_models.mdx
    │   │   │   │   ├── multimodality.mdx
    │   │   │   │   ├── few_shot_prompting.mdx
    │   │   │   │   ├── rag.mdx
    │   │   │   │   ├── tokens.mdx
    │   │   │   │   ├── messages.mdx
    │   │   │   │   ├── tool_calling.mdx
    │   │   │   │   ├── document_loaders.mdx
    │   │   │   │   ├── architecture.mdx
    │   │   │   │   ├── callbacks.mdx
    │   │   │   │   ├── text_splitters.mdx
    │   │   │   │   ├── why_langchain.mdx
    │   │   │   │   ├── chat_history.mdx
    │   │   │   │   ├── agents.mdx
    │   │   │   │   ├── text_llms.mdx
    │   │   │   │   ├── example_selectors.mdx
    │   │   │   │   ├── runnables.mdx
    │   │   │   │   ├── structured_outputs.mdx
    │   │   │   │   ├── retrieval.mdx
    │   │   │   │   ├── tracing.mdx
    │   │   │   │   ├── retrievers.mdx
    │   │   │   │   ├── evaluation.mdx
    │   │   │   │   └── tools.mdx
    │   │   │   ├── packages.mdx
    │   │   │   ├── additional_resources/
    │   │   │   │   └── tutorials.mdx
    │   │   │   ├── _static/
    │   │   │   │   └── css/
    │   │   │   │       └── custom.css
    │   │   │   ├── integrations/
    │   │   │   │   ├── text_embedding/
    │   │   │   │   │   ├── mixedbread_ai.mdx
    │   │   │   │   │   ├── baidu_qianfan.mdx
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── minimax.mdx
    │   │   │   │   │   ├── deepinfra.mdx
    │   │   │   │   │   ├── premai.mdx
    │   │   │   │   │   ├── zhipuai.mdx
    │   │   │   │   │   ├── tensorflow.mdx
    │   │   │   │   │   ├── alibaba_tongyi.mdx
    │   │   │   │   │   ├── gradient_ai.mdx
    │   │   │   │   │   ├── hugging_face_inference.mdx
    │   │   │   │   │   ├── tencent_hunyuan.mdx
    │   │   │   │   │   ├── nomic.mdx
    │   │   │   │   │   ├── transformers.mdx
    │   │   │   │   │   ├── jina.mdx
    │   │   │   │   │   ├── voyageai.mdx
    │   │   │   │   │   └── llama_cpp.mdx
    │   │   │   │   ├── tools/
    │   │   │   │   │   ├── wolframalpha.mdx
    │   │   │   │   │   ├── google_places.mdx
    │   │   │   │   │   ├── wikipedia.mdx
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── searchapi.mdx
    │   │   │   │   │   ├── gmail.mdx
    │   │   │   │   │   ├── google_routes.mdx
    │   │   │   │   │   ├── stackexchange.mdx
    │   │   │   │   │   ├── stagehand.mdx
    │   │   │   │   │   ├── webbrowser.mdx
    │   │   │   │   │   ├── google_trends.mdx
    │   │   │   │   │   ├── jigsawstack.mdx
    │   │   │   │   │   ├── google_calendar.mdx
    │   │   │   │   │   ├── searxng.mdx
    │   │   │   │   │   ├── connery.mdx
    │   │   │   │   │   ├── lambda_agent.mdx
    │   │   │   │   │   ├── aiplugin-tool.mdx
    │   │   │   │   │   ├── azure_dynamic_sessions.mdx
    │   │   │   │   │   ├── discord.mdx
    │   │   │   │   │   ├── dalle.mdx
    │   │   │   │   │   ├── pyinterpreter.mdx
    │   │   │   │   │   └── zapier_agent.mdx
    │   │   │   │   ├── callbacks/
    │   │   │   │   │   ├── upstash_ratelimit_callback.mdx
    │   │   │   │   │   └── datadog_tracer.mdx
    │   │   │   │   ├── toolkits/
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── json.mdx
    │   │   │   │   │   ├── sfn_agent.mdx
    │   │   │   │   │   └── connery.mdx
    │   │   │   │   ├── document_compressors/
    │   │   │   │   │   ├── mixedbread_ai.mdx
    │   │   │   │   │   └── cohere_rerank.mdx
    │   │   │   │   ├── document_transformers/
    │   │   │   │   │   ├── mozilla_readability.mdx
    │   │   │   │   │   ├── html-to-text.mdx
    │   │   │   │   │   └── openai_metadata_tagger.mdx
    │   │   │   │   ├── vectorstores/
    │   │   │   │   │   ├── couchbase.mdx
    │   │   │   │   │   ├── azure_aisearch.mdx
    │   │   │   │   │   ├── voy.mdx
    │   │   │   │   │   ├── zep_cloud.mdx
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── closevector.mdx
    │   │   │   │   │   ├── vercel_postgres.mdx
    │   │   │   │   │   ├── googlevertexai.mdx
    │   │   │   │   │   ├── opensearch.mdx
    │   │   │   │   │   ├── momento_vector_index.mdx
    │   │   │   │   │   ├── astradb.mdx
    │   │   │   │   │   ├── clickhouse.mdx
    │   │   │   │   │   ├── azure_cosmosdb_nosql.mdx
    │   │   │   │   │   ├── azure_cosmosdb_mongodb.mdx
    │   │   │   │   │   ├── cassandra.mdx
    │   │   │   │   │   ├── singlestore.mdx
    │   │   │   │   │   ├── zep.mdx
    │   │   │   │   │   ├── tigris.mdx
    │   │   │   │   │   ├── hanavector.mdx
    │   │   │   │   │   ├── analyticdb.mdx
    │   │   │   │   │   ├── usearch.mdx
    │   │   │   │   │   ├── libsql.mdx
    │   │   │   │   │   ├── typeorm.mdx
    │   │   │   │   │   ├── milvus.mdx
    │   │   │   │   │   ├── turbopuffer.mdx
    │   │   │   │   │   ├── neo4jvector.mdx
    │   │   │   │   │   ├── typesense.mdx
    │   │   │   │   │   ├── vectara.mdx
    │   │   │   │   │   ├── xata.mdx
    │   │   │   │   │   ├── lancedb.mdx
    │   │   │   │   │   ├── cloudflare_vectorize.mdx
    │   │   │   │   │   ├── prisma.mdx
    │   │   │   │   │   ├── neon.mdx
    │   │   │   │   │   ├── rockset.mdx
    │   │   │   │   │   ├── convex.mdx
    │   │   │   │   │   └── myscale.mdx
    │   │   │   │   ├── llms/
    │   │   │   │   │   ├── raycast.mdx
    │   │   │   │   │   ├── friendli.mdx
    │   │   │   │   │   ├── writer.mdx
    │   │   │   │   │   ├── aleph_alpha.mdx
    │   │   │   │   │   ├── deep_infra.mdx
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── chrome_ai.mdx
    │   │   │   │   │   ├── ai21.mdx
    │   │   │   │   │   ├── aws_sagemaker.mdx
    │   │   │   │   │   ├── jigsawstack.mdx
    │   │   │   │   │   ├── replicate.mdx
    │   │   │   │   │   ├── ni_bittensor.mdx
    │   │   │   │   │   ├── yandex.mdx
    │   │   │   │   │   ├── watsonx_ai.mdx
    │   │   │   │   │   ├── layerup_security.mdx
    │   │   │   │   │   ├── gradient_ai.mdx
    │   │   │   │   │   ├── prompt_layer_openai.mdx
    │   │   │   │   │   ├── huggingface_inference.mdx
    │   │   │   │   │   └── llama_cpp.mdx
    │   │   │   │   ├── chat/
    │   │   │   │   │   ├── friendli.mdx
    │   │   │   │   │   ├── moonshot.mdx
    │   │   │   │   │   ├── web_llm.mdx
    │   │   │   │   │   ├── baidu_qianfan.mdx
    │   │   │   │   │   ├── deep_infra.mdx
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── fake.mdx
    │   │   │   │   │   ├── ollama_functions.mdx
    │   │   │   │   │   ├── minimax.mdx
    │   │   │   │   │   ├── ni_bittensor.mdx
    │   │   │   │   │   ├── yandex.mdx
    │   │   │   │   │   ├── premai.mdx
    │   │   │   │   │   ├── baidu_wenxin.mdx
    │   │   │   │   │   ├── zhipuai.mdx
    │   │   │   │   │   ├── alibaba_tongyi.mdx
    │   │   │   │   │   ├── tencent_hunyuan.mdx
    │   │   │   │   │   ├── prompt_layer_openai.mdx
    │   │   │   │   │   └── llama_cpp.mdx
    │   │   │   │   ├── stores/
    │   │   │   │   │   ├── vercel_kv_storage.mdx
    │   │   │   │   │   ├── ioredis_storage.mdx
    │   │   │   │   │   ├── upstash_redis_storage.mdx
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   └── cassandra_storage.mdx
    │   │   │   │   ├── platforms/
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── openai.mdx
    │   │   │   │   │   ├── anthropic.mdx
    │   │   │   │   │   ├── aws.mdx
    │   │   │   │   │   ├── microsoft.mdx
    │   │   │   │   │   └── google.mdx
    │   │   │   │   ├── retrievers/
    │   │   │   │   │   ├── dria.mdx
    │   │   │   │   │   ├── vespa-retriever.mdx
    │   │   │   │   │   ├── self_query/
    │   │   │   │   │   │   └── index.mdx
    │   │   │   │   │   ├── chaindesk-retriever.mdx
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── supabase-hybrid.mdx
    │   │   │   │   │   ├── metal-retriever.mdx
    │   │   │   │   │   ├── arxiv-retriever.mdx
    │   │   │   │   │   ├── zep-retriever.mdx
    │   │   │   │   │   ├── time-weighted-retriever.mdx
    │   │   │   │   │   ├── hyde.mdx
    │   │   │   │   │   ├── chatgpt-retriever-plugin.mdx
    │   │   │   │   │   └── zep-cloud-retriever.mdx
    │   │   │   │   ├── memory/
    │   │   │   │   │   ├── firestore.mdx
    │   │   │   │   │   ├── postgres.mdx
    │   │   │   │   │   ├── motorhead_memory.mdx
    │   │   │   │   │   ├── planetscale.mdx
    │   │   │   │   │   ├── cloudflare_d1.mdx
    │   │   │   │   │   ├── ipfs_datastore.mdx
    │   │   │   │   │   ├── file.mdx
    │   │   │   │   │   ├── zep_memory.mdx
    │   │   │   │   │   ├── dynamodb.mdx
    │   │   │   │   │   ├── mongodb.mdx
    │   │   │   │   │   ├── astradb.mdx
    │   │   │   │   │   ├── azure_cosmosdb_nosql.mdx
    │   │   │   │   │   ├── momento.mdx
    │   │   │   │   │   ├── cassandra.mdx
    │   │   │   │   │   ├── upstash_redis.mdx
    │   │   │   │   │   ├── redis.mdx
    │   │   │   │   │   ├── xata.mdx
    │   │   │   │   │   ├── zep_memory_cloud.mdx
    │   │   │   │   │   └── convex.mdx
    │   │   │   │   ├── document_loaders/
    │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   ├── web_loaders/
    │   │   │   │   │   │   ├── sort_xyz_blockchain.mdx
    │   │   │   │   │   │   ├── azure_blob_storage_file.mdx
    │   │   │   │   │   │   ├── couchbase.mdx
    │   │   │   │   │   │   ├── notionapi.mdx
    │   │   │   │   │   │   ├── taskade.mdx
    │   │   │   │   │   │   ├── figma.mdx
    │   │   │   │   │   │   ├── web_playwright.mdx
    │   │   │   │   │   │   ├── college_confidential.mdx
    │   │   │   │   │   │   ├── gitbook.mdx
    │   │   │   │   │   │   ├── index.mdx
    │   │   │   │   │   │   ├── spider.mdx
    │   │   │   │   │   │   ├── searchapi.mdx
    │   │   │   │   │   │   ├── s3.mdx
    │   │   │   │   │   │   ├── airtable.mdx
    │   │   │   │   │   │   ├── hn.mdx
    │   │   │   │   │   │   ├── sitemap.mdx
    │   │   │   │   │   │   ├── azure_blob_storage_container.mdx
    │   │   │   │   │   │   ├── confluence.mdx
    │   │   │   │   │   │   ├── jira.mdx
    │   │   │   │   │   │   ├── apify_dataset.mdx
    │   │   │   │   │   │   ├── imsdb.mdx
    │   │   │   │   │   │   ├── youtube.mdx
    │   │   │   │   │   │   ├── github.mdx
    │   │   │   │   │   │   ├── browserbase.mdx
    │   │   │   │   │   │   ├── serpapi.mdx
    │   │   │   │   │   │   ├── assemblyai_audio_transcription.mdx
    │   │   │   │   │   │   └── sonix_audio_transcription.mdx
    │   │   │   │   │   └── file_loaders/
    │   │   │   │   │       ├── multi_file.mdx
    │   │   │   │   │       ├── jsonlines.mdx
    │   │   │   │   │       ├── chatgpt.mdx
    │   │   │   │   │       ├── index.mdx
    │   │   │   │   │       ├── json.mdx
    │   │   │   │   │       ├── subtitles.mdx
    │   │   │   │   │       ├── notion_markdown.mdx
    │   │   │   │   │       ├── epub.mdx
    │   │   │   │   │       ├── pptx.mdx
    │   │   │   │   │       ├── openai_whisper_audio.mdx
    │   │   │   │   │       └── docx.mdx
    │   │   │   │   └── llm_caching/
    │   │   │   │       ├── index.mdx
    │   │   │   │       └── azure_cosmosdb_nosql.mdx
    │   │   │   ├── community.mdx
    │   │   │   ├── mdx_components/
    │   │   │   │   ├── integration_install_tooltip.mdx
    │   │   │   │   └── unified_model_params_tooltip.mdx
    │   │   │   └── people.mdx
    │   │   ├── .prettierignore
    │   │   ├── scripts/
    │   │   │   ├── quarto-build.js
    │   │   │   ├── check-broken-links.js
    │   │   │   ├── append_related_links.py
    │   │   │   ├── vercel_build.sh
    │   │   │   └── code-block-loader.js
    │   │   ├── sidebars.js
    │   │   ├── .gitignore
    │   │   ├── .eslintrc.js
    │   │   ├── vercel.json
    │   │   ├── data/
    │   │   │   ├── ls_few_shot_example_dataset.json
    │   │   │   └── people.yml
    │   │   ├── package.json
    │   │   ├── babel.config.js
    │   │   ├── README.md
    │   │   ├── docusaurus.config.js
    │   │   ├── src/
    │   │   │   ├── pages/
    │   │   │   │   └── index.js
    │   │   │   ├── theme/
    │   │   │   │   ├── NotFound.js
    │   │   │   │   ├── DocItem/
    │   │   │   │   │   └── Paginator/
    │   │   │   │   │       └── index.js
    │   │   │   │   ├── CodeBlock/
    │   │   │   │   │   └── index.js
    │   │   │   │   ├── FeatureTables.js
    │   │   │   │   ├── ChatModelTabs.js
    │   │   │   │   ├── EmbeddingTabs.js
    │   │   │   │   ├── Npm2Yarn.js
    │   │   │   │   ├── Feedback.js
    │   │   │   │   ├── People.js
    │   │   │   │   ├── VectorStoreTabs.js
    │   │   │   │   ├── RedirectAnchors.js
    │   │   │   │   ├── DocVersionBanner/
    │   │   │   │   │   └── index.js
    │   │   │   │   └── DocPaginator/
    │   │   │   │       └── index.js
    │   │   │   └── css/
    │   │   │       └── custom.css
    │   │   └── static/
    │   │       ├── svg/
    │   │       ├── fonts/
    │   │       │   ├── PublicSans-VariableFont_wght.ttf
    │   │       │   └── Manrope-VariableFont_wght.ttf
    │   │       ├── .nojekyll
    │   │       ├── img/
    │   │       │   ├── brand/
    │   │       │   ├── langchain_stack_feb_2024.webp
    │   │       │   └── graph_chain.webp
    │   │       ├── robots.txt
    │   │       └── js/
    │   │           └── google_analytics.js
    │   └── api_refs/
    │       ├── typedoc.base.json
    │       ├── scripts/
    │       │   ├── typedoc-plugin.js
    │       │   ├── update-typedoc-css.js
    │       │   └── create-entrypoints.js
    │       ├── .gitignore
    │       ├── next.config.js
    │       ├── .eslintrc.json
    │       ├── postcss.config.js
    │       ├── vercel.json
    │       ├── package.json
    │       ├── tailwind.config.ts
    │       ├── tsconfig.json
    │       ├── README.md
    │       ├── blacklisted-entrypoints.json
    │       └── src/
    │           └── app/
    ├── environment_tests/
    │   ├── test-exports-esbuild/
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── entrypoint.sh
    │   │   ├── tsconfig.json
    │   │   └── src/
    │   │       ├── import.cjs
    │   │       ├── entrypoints.js
    │   │       ├── require.cjs
    │   │       ├── typescript.ts
    │   │       └── index.js
    │   ├── test-exports-bun/
    │   │   ├── scripts/
    │   │   │   └── combine-dependencies.js
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   └── src/
    │   │       ├── import.cjs
    │   │       ├── entrypoints.js
    │   │       ├── index.ts
    │   │       ├── require.cjs
    │   │       └── index.js
    │   ├── scripts/
    │   │   ├── docker-bun-ci-entrypoint.sh
    │   │   └── docker-ci-entrypoint.sh
    │   ├── test-exports-vite/
    │   │   ├── index.html
    │   │   ├── .gitignore
    │   │   ├── public/
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   └── src/
    │   │       ├── chain.ts
    │   │       ├── entrypoints.js
    │   │       ├── style.css
    │   │       ├── main.ts
    │   │       └── vite-env.d.ts
    │   ├── test-exports-tsc/
    │   │   ├── package.json
    │   │   └── main.ts
    │   ├── test-exports-cjs/
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   └── src/
    │   │       ├── require.js
    │   │       ├── import.js
    │   │       ├── entrypoints.js
    │   │       ├── index.mjs
    │   │       └── index.ts
    │   ├── test-exports-cf/
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── wrangler.toml
    │   │   ├── tsconfig.json
    │   │   ├── README.md
    │   │   └── src/
    │   │       ├── index.int.test.ts
    │   │       ├── entrypoints.js
    │   │       ├── index.ts
    │   │       └── index.unit.test.ts
    │   ├── test-exports-vercel/
    │   │   ├── .gitignore
    │   │   ├── .eslintrc.json
    │   │   ├── public/
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── README.md
    │   │   └── src/
    │   │       ├── styles/
    │   │       │   ├── globals.css
    │   │       │   └── Home.module.css
    │   │       ├── entrypoints.js
    │   │       └── pages/
    │   │           ├── api/
    │   │           │   ├── hello-serverless.ts
    │   │           │   └── hello-edge.ts
    │   │           ├── _app.tsx
    │   │           ├── _document.tsx
    │   │           └── index.tsx
    │   ├── test-exports-esm/
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   └── src/
    │   │       ├── import.cjs
    │   │       ├── entrypoints.js
    │   │       ├── index.ts
    │   │       ├── require.cjs
    │   │       └── index.js
    │   └── docker-compose.yml
    ├── .prettierrc
    ├── langchain-core/
    │   ├── jest.env.cjs
    │   ├── jest.config.cjs
    │   ├── .prettierrc
    │   ├── .prettierignore
    │   ├── scripts/
    │   │   └── jest-setup-after-env.js
    │   ├── .gitignore
    │   ├── babel.config.cjs
    │   ├── package.json
    │   ├── tsconfig.cjs.json
    │   ├── .release-it.json
    │   ├── turbo.json
    │   ├── LICENSE
    │   ├── tsconfig.json
    │   ├── .eslintrc.cjs
    │   ├── README.md
    │   ├── langchain.config.js
    │   └── src/
    │       ├── indexing/
    │       │   ├── base.ts
    │       │   ├── record_manager.ts
    │       │   └── index.ts
    │       ├── stores.ts
    │       ├── messages/
    │       │   ├── human.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── base_message.test.ts
    │       │   │   └── message_utils.test.ts
    │       │   ├── tool.ts
    │       │   ├── chat.ts
    │       │   ├── function.ts
    │       │   ├── utils.ts
    │       │   ├── modifier.ts
    │       │   ├── index.ts
    │       │   ├── transformers.ts
    │       │   ├── ai.ts
    │       │   └── system.ts
    │       ├── tracers/
    │       │   ├── tracer_langchain_v1.ts
    │       │   ├── log_stream.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── langchain_tracer.int.test.ts
    │       │   │   ├── tracer.test.ts
    │       │   │   └── langsmith_interop.test.ts
    │       │   ├── root_listener.ts
    │       │   ├── run_collector.ts
    │       │   ├── console.ts
    │       │   ├── event_stream.ts
    │       │   ├── tracer_langchain.ts
    │       │   └── initialize.ts
    │       ├── agents.ts
    │       ├── tests/
    │       │   ├── document.test.ts
    │       │   ├── caches.test.ts
    │       │   └── context.test.ts
    │       ├── memory.ts
    │       ├── chat_history.ts
    │       ├── caches/
    │       │   ├── base.ts
    │       │   └── tests/
    │       │       └── in_memory_cache.test.ts
    │       ├── load/
    │       │   ├── map_keys.ts
    │       │   ├── import_constants.ts
    │       │   ├── serializable.ts
    │       │   ├── index.ts
    │       │   ├── import_type.ts
    │       │   └── import_map.ts
    │       ├── vectorstores.ts
    │       ├── tools/
    │       │   ├── tests/
    │       │   │   └── tools.test.ts
    │       │   ├── utils.ts
    │       │   └── index.ts
    │       ├── callbacks/
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── manager.int.test.ts
    │       │   │   ├── manager.test.ts
    │       │   │   ├── run_collector.test.ts
    │       │   │   └── callbacks.test.ts
    │       │   ├── promises.ts
    │       │   ├── dispatch/
    │       │   │   ├── index.ts
    │       │   │   └── web.ts
    │       │   └── manager.ts
    │       ├── example_selectors/
    │       │   ├── base.ts
    │       │   ├── conditional.ts
    │       │   ├── semantic_similarity.ts
    │       │   ├── index.ts
    │       │   └── length_based.ts
    │       ├── structured_query/
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── functional.test.ts
    │       │   │   └── utils.test.ts
    │       │   ├── utils.ts
    │       │   ├── index.ts
    │       │   ├── ir.ts
    │       │   └── functional.ts
    │       ├── embeddings.ts
    │       ├── prompts/
    │       │   ├── prompt.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── chat.test.ts
    │       │   │   ├── prompt.test.ts
    │       │   │   ├── prompt.mustache.test.ts
    │       │   │   ├── few_shot.test.ts
    │       │   │   ├── structured.test.ts
    │       │   │   ├── pipeline.test.ts
    │       │   │   ├── __snapshots__/
    │       │   │   │   └── chat.test.ts.snap
    │       │   │   ├── chat.mustache.test.ts
    │       │   │   └── template.test.ts
    │       │   ├── pipeline.ts
    │       │   ├── image.ts
    │       │   ├── structured.ts
    │       │   ├── serde.ts
    │       │   ├── chat.ts
    │       │   ├── few_shot.ts
    │       │   ├── index.ts
    │       │   ├── template.ts
    │       │   └── string.ts
    │       ├── singletons/
    │       │   ├── callbacks.ts
    │       │   ├── tests/
    │       │   │   └── async_local_storage.test.ts
    │       │   ├── tracer.ts
    │       │   ├── index.ts
    │       │   └── async_local_storage/
    │       │       ├── globals.ts
    │       │       ├── index.ts
    │       │       └── context.ts
    │       ├── errors/
    │       │   └── index.ts
    │       ├── output_parsers/
    │       │   ├── base.ts
    │       │   ├── json.ts
    │       │   ├── tests/
    │       │   │   ├── string.test.ts
    │       │   │   ├── output_parser.test.ts
    │       │   │   ├── structured.test.ts
    │       │   │   ├── json.test.ts
    │       │   │   └── xml.test.ts
    │       │   ├── openai_functions/
    │       │   │   ├── json_output_functions_parsers.ts
    │       │   │   └── index.ts
    │       │   ├── structured.ts
    │       │   ├── xml.ts
    │       │   ├── openai_tools/
    │       │   │   ├── tests/
    │       │   │   │   └── json_output_tools_parser.test.ts
    │       │   │   ├── json_output_tools_parsers.ts
    │       │   │   └── index.ts
    │       │   ├── index.ts
    │       │   ├── string.ts
    │       │   ├── transform.ts
    │       │   ├── bytes.ts
    │       │   └── list.ts
    │       ├── outputs.ts
    │       ├── prompt_values.ts
    │       ├── runnables/
    │       │   ├── iter.ts
    │       │   ├── types.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── runnable_interface.test.ts
    │       │   │   ├── signal.test.ts
    │       │   │   ├── runnable_remote.test.ts
    │       │   │   ├── runnable_map.test.ts
    │       │   │   ├── runnable_graph.test.ts
    │       │   │   ├── runnable_tracing.int.test.ts
    │       │   │   ├── runnable_with_fallbacks.test.ts
    │       │   │   ├── runnable.test.ts
    │       │   │   ├── runnable_stream_events.test.ts
    │       │   │   ├── runnable_stream_events_v2.test.ts
    │       │   │   ├── runnable_binding.test.ts
    │       │   │   ├── data/
    │       │   │   ├── runnable_passthrough.test.ts
    │       │   │   ├── runnable_tools.test.ts
    │       │   │   ├── runnable_stream_log.test.ts
    │       │   │   ├── runnable_retry.test.ts
    │       │   │   ├── runnable_history.test.ts
    │       │   │   ├── runnable_remote.int.test.ts
    │       │   │   └── runnable_branch.test.ts
    │       │   ├── branch.ts
    │       │   ├── history.ts
    │       │   ├── router.ts
    │       │   ├── remote.ts
    │       │   ├── graph_mermaid.ts
    │       │   ├── utils.ts
    │       │   ├── passthrough.ts
    │       │   ├── config.ts
    │       │   ├── index.ts
    │       │   ├── graph.ts
    │       │   └── wrappers.ts
    │       ├── context.ts
    │       ├── retrievers/
    │       │   ├── document_compressors/
    │       │   │   └── base.ts
    │       │   └── index.ts
    │       ├── documents/
    │       │   ├── index.ts
    │       │   ├── transformers.ts
    │       │   └── document.ts
    │       ├── document_loaders/
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   └── langsmith.int.test.ts
    │       │   └── langsmith.ts
    │       ├── utils/
    │       │   ├── ml-distance-euclidean/
    │       │   │   ├── euclidean.ts
    │       │   │   └── LICENSE
    │       │   ├── hash.ts
    │       │   ├── callbacks.ts
    │       │   ├── json.ts
    │       │   ├── tests/
    │       │   │   ├── math_utils.test.ts
    │       │   │   ├── enviroment.test.ts
    │       │   │   ├── function_calling.test.ts
    │       │   │   ├── async_caller.test.ts
    │       │   │   └── polyfill_stream.test.ts
    │       │   ├── js-sha1/
    │       │   │   ├── hash.ts
    │       │   │   └── LICENSE.md
    │       │   ├── sax-js/
    │       │   │   ├── sax.ts
    │       │   │   └── LICENSE.md
    │       │   ├── event_source_parse.ts
    │       │   ├── chunk_array.ts
    │       │   ├── stream.ts
    │       │   ├── testing/
    │       │   │   ├── tests/
    │       │   │   │   └── chatfake.test.ts
    │       │   │   └── index.ts
    │       │   ├── signal.ts
    │       │   ├── json_patch.ts
    │       │   ├── env.ts
    │       │   ├── tiktoken.ts
    │       │   ├── fast-json-patch/
    │       │   │   ├── LICENSE.md
    │       │   │   ├── index.ts
    │       │   │   └── src/
    │       │   │       ├── helpers.ts
    │       │   │       ├── core.ts
    │       │   │       └── duplex.ts
    │       │   ├── math.ts
    │       │   ├── function_calling.ts
    │       │   ├── async_caller.ts
    │       │   ├── json_schema.ts
    │       │   ├── ml-distance/
    │       │   │   ├── similarities.ts
    │       │   │   ├── distances.ts
    │       │   │   └── LICENSE
    │       │   └── types/
    │       │       ├── is_zod_schema.ts
    │       │       └── index.ts
    │       ├── language_models/
    │       │   ├── llms.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── count_tokens.test.ts
    │       │   │   ├── llms.test.ts
    │       │   │   └── chat_models.test.ts
    │       │   └── chat_models.ts
    │       └── types/
    │           ├── stream.ts
    │           └── type-utils.ts
    ├── .prettierignore
    ├── .github/
    │   ├── scripts/
    │   │   └── deployDomainVercel.sh
    │   ├── workflows/
    │   │   ├── compatibility.yml
    │   │   ├── standard-tests.yml
    │   │   ├── test-exports.yml
    │   │   ├── deploy-api-refs-prod.yml
    │   │   ├── unit-tests-integrations.yml
    │   │   ├── format.yml
    │   │   ├── platform-compatibility.yml
    │   │   ├── unit-tests-langchain-core.yml
    │   │   ├── ci.yml
    │   │   ├── examples.yml
    │   │   ├── deploy-api-refs-preview.yml
    │   │   ├── check-broken-links.yml
    │   │   ├── unit-tests-langchain.yml
    │   │   ├── integration.yml
    │   │   ├── validate_new_notebooks.yml
    │   │   └── people.yml
    │   ├── contributing/
    │   │   ├── INTEGRATIONS.md
    │   │   └── integrations/
    │   │       ├── EMBEDDINGS.md
    │   │       ├── VECTOR_STORES.md
    │   │       ├── TOOLS.md
    │   │       ├── LLMS.md
    │   │       ├── MEMORY.md
    │   │       ├── MESSAGE_STORES.md
    │   │       └── DOCUMENT_LOADERS.md
    │   ├── pull_request_template.md
    │   ├── actions/
    │   │   ├── people/
    │   │   │   ├── Dockerfile
    │   │   │   └── app/
    │   │   │       └── main.py
    │   │   └── action.yml
    │   ├── DISCUSSION_TEMPLATE/
    │   │   ├── q-a.yml
    │   │   └── ideas.yml
    │   └── ISSUE_TEMPLATE/
    │       ├── privileged.yml
    │       ├── config.yml
    │       ├── documentation.yml
    │       └── bug-report.yml
    ├── cookbook/
    │   └── README.md
    ├── .vercelignore
    ├── .yarnrc.yml
    ├── .watchmanconfig
    ├── package.json
    ├── .nvmrc
    ├── dependency_range_tests/
    │   ├── scripts/
    │   │   ├── with_standard_tests/
    │   │   │   ├── shared.sh
    │   │   │   ├── node/
    │   │   │   │   ├── package.json
    │   │   │   │   ├── yarn.lock
    │   │   │   │   └── update_workspace_dependencies.js
    │   │   │   ├── openai/
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── update_resolutions_lowest.js
    │   │   │   │   │   ├── update_resolutions_latest.js
    │   │   │   │   │   ├── package.json
    │   │   │   │   │   └── yarn.lock
    │   │   │   │   ├── test-with-latest-deps.sh
    │   │   │   │   └── test-with-lowest-deps.sh
    │   │   │   ├── anthropic/
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── update_resolutions_lowest.js
    │   │   │   │   │   ├── update_resolutions_latest.js
    │   │   │   │   │   ├── package.json
    │   │   │   │   │   ├── yarn.lock
    │   │   │   │   │   └── update_workspace_deps.js
    │   │   │   │   ├── test-with-latest-deps.sh
    │   │   │   │   └── test-with-lowest-deps.sh
    │   │   │   ├── cohere/
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── update_resolutions_lowest.js
    │   │   │   │   │   ├── update_resolutions_latest.js
    │   │   │   │   │   ├── package.json
    │   │   │   │   │   └── yarn.lock
    │   │   │   │   ├── test-with-latest-deps.sh
    │   │   │   │   └── test-with-lowest-deps.sh
    │   │   │   ├── google-vertexai/
    │   │   │   │   ├── node/
    │   │   │   │   │   ├── update_resolutions_lowest.js
    │   │   │   │   │   ├── update_resolutions_latest.js
    │   │   │   │   │   ├── package.json
    │   │   │   │   │   └── yarn.lock
    │   │   │   │   ├── test-with-latest-deps.sh
    │   │   │   │   └── test-with-lowest-deps.sh
    │   │   │   └── community/
    │   │   │       ├── node/
    │   │   │       │   ├── update_resolutions_lowest.js
    │   │   │       │   ├── update_resolutions_latest.js
    │   │   │       │   ├── package.json
    │   │   │       │   ├── yarn.lock
    │   │   │       │   └── update_resolutions_npm.js
    │   │   │       ├── test-with-latest-deps.sh
    │   │   │       ├── npm-install.sh
    │   │   │       └── test-with-lowest-deps.sh
    │   │   └── langchain/
    │   │       ├── node/
    │   │       │   ├── update_resolutions_lowest.js
    │   │       │   ├── update_resolutions_latest.js
    │   │       │   ├── package.json
    │   │       │   └── yarn.lock
    │   │       ├── test-with-latest-deps.sh
    │   │       └── test-with-lowest-deps.sh
    │   └── docker-compose.yml
    ├── libs/
    │   ├── langchain-azure-cosmosdb/
    │   │   ├── .env.example
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── chat_histories/
    │   │       │   │   ├── nosql.int.test.ts
    │   │       │   │   └── mongodb.int.test.ts
    │   │       │   ├── caches/
    │   │       │   │   ├── caches_nosql.test.ts
    │   │       │   │   ├── caches_mongodb.test.ts
    │   │       │   │   ├── caches_nosql.int.test.ts
    │   │       │   │   └── caches_mongodb.int.test.ts
    │   │       │   ├── azure_cosmosdb_mongodb.int.test.ts
    │   │       │   ├── azure_cosmosdb_nosql.int.test.ts
    │   │       │   ├── azure_cosmosdb_nosql.test.ts
    │   │       │   └── azure_cosmosdb_mongodb.test.ts
    │   │       ├── chat_histories/
    │   │       │   ├── mongodb.ts
    │   │       │   └── nosql.ts
    │   │       ├── caches/
    │   │       │   ├── caches_mongodb.ts
    │   │       │   └── caches_nosql.ts
    │   │       ├── azure_cosmosdb_nosql.ts
    │   │       ├── azure_cosmosdb_mongodb.ts
    │   │       └── index.ts
    │   ├── langchain-baidu-qianfan/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── example.env
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   └── chat_models.int.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-aws/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── common.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       ├── chat_models.ts
    │   │       └── retrievers/
    │   │           ├── tests/
    │   │           │   ├── bedrock.int.test.ts
    │   │           │   └── kendra.int.test.ts
    │   │           ├── kendra.ts
    │   │           ├── bedrock.ts
    │   │           └── index.ts
    │   ├── langchain-scripts/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .gitignore
    │   │   ├── bin/
    │   │   │   ├── build.js
    │   │   │   ├── validate_notebook.js
    │   │   │   └── filter_spam_comment.js
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   ├── tsconfig.build.json
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── tests/
    │   │       │   ├── __mdx__/
    │   │       │   │   └── modules/
    │   │       │   │       ├── two.mdx
    │   │       │   │       └── index.mdx
    │   │       │   ├── check_broken_links.int.test.ts
    │   │       │   ├── langchain.valid.config.js
    │   │       │   ├── config_file.test.ts
    │   │       │   ├── langchain.invalid.config.js
    │   │       │   └── check_broken_links.test.ts
    │   │       ├── filter_spam_comment.ts
    │   │       ├── build/
    │   │       │   ├── utils.ts
    │   │       │   └── index.ts
    │   │       ├── cli/
    │   │       │   ├── docs/
    │   │       │   │   ├── llms.ts
    │   │       │   │   ├── tools.ts
    │   │       │   │   ├── kv_store.ts
    │   │       │   │   ├── vectorstores.ts
    │   │       │   │   ├── chat.ts
    │   │       │   │   ├── toolkits.ts
    │   │       │   │   ├── embeddings.ts
    │   │       │   │   ├── document_loaders.ts
    │   │       │   │   ├── retrievers.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── templates/
    │   │       │   ├── constants.ts
    │   │       │   ├── README.md
    │   │       │   └── utils/
    │   │       │       ├── get-input.ts
    │   │       │       └── fetch-url-status.ts
    │   │       ├── notebooks/
    │   │       │   ├── check_unexpected_rebuild_timer.ts
    │   │       │   ├── check_notebook_type_errors.ts
    │   │       │   └── index.ts
    │   │       ├── check_broken_links.ts
    │   │       ├── migrations/
    │   │       │   ├── 0_2.ts
    │   │       │   ├── index.ts
    │   │       │   └── 0_1.ts
    │   │       ├── _data/
    │   │       │   └── importMap.ts
    │   │       └── index.ts
    │   ├── langchain-textsplitters/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── text_splitter.test.ts
    │   │       │   └── code_text_splitter.test.ts
    │   │       ├── text_splitter.ts
    │   │       └── index.ts
    │   ├── langchain-google-vertexai-web/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── llms.test.ts
    │   │       │   ├── agent.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── utils.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-azure-openai/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── babel.config.cjs
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── chat_models-extended.int.test.ts
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── data/
    │   │       │   ├── chat_models-vision.int.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   └── chat_models.int.test.ts
    │   │       ├── constants.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       ├── chat_models.ts
    │   │       └── utils/
    │   │           └── openai-format-fndef.ts
    │   ├── langchain-google-vertexai/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── llms.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── utils.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-azure-dynamic-sessions/
    │   │   ├── .env.example
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tools.ts
    │   │       ├── tests/
    │   │       │   ├── tools.int.test.ts
    │   │       │   └── tools.test.ts
    │   │       └── index.ts
    │   ├── langchain-exa/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tools.ts
    │   │       ├── tests/
    │   │       │   ├── tools.int.test.ts
    │   │       │   ├── retrievers.int.test.ts
    │   │       │   └── retrievers.test.ts
    │   │       ├── retrievers.ts
    │   │       └── index.ts
    │   ├── langchain-redis/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── vectorstores.int.test.ts
    │   │       │   ├── chat_histories.int.test.ts
    │   │       │   └── vectorstores.test.ts
    │   │       ├── vectorstores.ts
    │   │       ├── connections.ts
    │   │       ├── index.ts
    │   │       ├── caches.ts
    │   │       └── chat_histories.ts
    │   ├── langchain-yandex/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   └── chat_models.int.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-openai/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── babel.config.cjs
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   ├── audio.json
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── chat_models-extended.int.test.ts
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── legacy.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── data/
    │   │       │   ├── chat_models_structured_output.int.test.ts
    │   │       │   ├── prompts.int.test.ts
    │   │       │   ├── chat_models-vision.int.test.ts
    │   │       │   ├── azure/
    │   │       │   │   ├── embeddings.int.test.ts
    │   │       │   │   ├── chat_models.standard.int.test.ts
    │   │       │   │   ├── chat_models.test.ts
    │   │       │   │   ├── llms.int.test.ts
    │   │       │   │   ├── chat_models.int.test.ts
    │   │       │   │   └── chat_models.standard.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── tools/
    │   │       │   ├── tests/
    │   │       │   │   └── dalle.int.test.ts
    │   │       │   ├── dalle.ts
    │   │       │   └── index.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       ├── azure/
    │   │       │   ├── llms.ts
    │   │       │   ├── embeddings.ts
    │   │       │   └── chat_models.ts
    │   │       ├── legacy.ts
    │   │       ├── chat_models.ts
    │   │       └── utils/
    │   │           ├── openai.ts
    │   │           ├── tools.ts
    │   │           ├── prompts.ts
    │   │           ├── azure.ts
    │   │           ├── errors.ts
    │   │           └── openai-format-fndef.ts
    │   ├── langchain-cohere/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── rerank.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── rerank.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       ├── chat_models.ts
    │   │       └── client.ts
    │   ├── langchain-mistralai/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── llms.test.ts
    │   │       │   ├── agent.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── utils.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-qdrant/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── vectorstores.int.test.ts
    │   │       │   └── vectorstores.test.ts
    │   │       ├── vectorstores.ts
    │   │       └── index.ts
    │   ├── langchain-google-genai/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── output_parsers.ts
    │   │       ├── tests/
    │   │       │   ├── chat_models-extended.int.test.ts
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── context_caching.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── data/
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       ├── chat_models.ts
    │   │       └── utils/
    │   │           ├── tools.ts
    │   │           ├── zod_to_genai_parameters.ts
    │   │           └── common.ts
    │   ├── langchain-ollama/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── embeddings.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── data/
    │   │       │   ├── chat_models-tools.int.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── utils.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-pinecone/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── client.test.ts
    │   │       │   ├── vectorstores.int.test.ts
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   ├── embeddings.test.ts
    │   │       │   ├── translator.int.test.ts
    │   │       │   ├── vectorstores.test.ts
    │   │       │   └── client.int.test.ts
    │   │       ├── vectorstores.ts
    │   │       ├── translator.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       └── client.ts
    │   ├── langchain-google-common/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── output_parsers.ts
    │   │       ├── tests/
    │   │       │   ├── mock.ts
    │   │       │   ├── llms.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── data/
    │   │       │   │   ├── llm-5-mock.json
    │   │       │   │   ├── llm-6-mock.json
    │   │       │   │   ├── llm-3-mock.json
    │   │       │   │   ├── llm-2-mock.txt
    │   │       │   │   ├── chat-1-mock.json
    │   │       │   │   ├── chat-4-mock.json
    │   │       │   │   ├── llm-4-mock.json
    │   │       │   │   ├── chat-6-mock.json
    │   │       │   │   ├── llm-7-mock.json
    │   │       │   │   ├── claude-chat-1-mock.json
    │   │       │   │   ├── llm-8-mock.json
    │   │       │   │   ├── chat-2-mock.json
    │   │       │   │   ├── llm-2-mock.json
    │   │       │   │   ├── llm-1-mock.json
    │   │       │   │   ├── llm-9-mock.json
    │   │       │   │   ├── chat-5-mock.json
    │   │       │   │   ├── llm-4-mock.txt
    │   │       │   │   ├── claude-chat-1-mock.sse
    │   │       │   │   └── chat-3-mock.json
    │   │       │   ├── utils.test.ts
    │   │       │   └── output_parsers.test.ts
    │   │       ├── types-anthropic.ts
    │   │       ├── connection.ts
    │   │       ├── experimental/
    │   │       │   ├── media.ts
    │   │       │   └── utils/
    │   │       │       └── media_core.ts
    │   │       ├── auth.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       ├── chat_models.ts
    │   │       └── utils/
    │   │           ├── zod_to_gemini_parameters.ts
    │   │           ├── stream.ts
    │   │           ├── palm.ts
    │   │           ├── anthropic.ts
    │   │           ├── safety.ts
    │   │           ├── common.ts
    │   │           ├── index.ts
    │   │           ├── failed_handler.ts
    │   │           └── gemini.ts
    │   ├── langchain-mixedbread-ai/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── embeddings.int.test.ts
    │   │       │   └── reranker.int.test.ts
    │   │       ├── embeddings.ts
    │   │       ├── reranker.ts
    │   │       └── index.ts
    │   ├── langchain-google-webauth/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── media.int.test.ts
    │   │       │   ├── data/
    │   │       │   └── chat_models.int.test.ts
    │   │       ├── auth.ts
    │   │       ├── media.ts
    │   │       ├── embeddings.ts
    │   │       ├── utils.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-google-gauth/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── media.int.test.ts
    │   │       │   ├── auth.test.ts
    │   │       │   ├── data/
    │   │       │   └── chat_models.int.test.ts
    │   │       ├── auth.ts
    │   │       ├── media.ts
    │   │       ├── embeddings.ts
    │   │       ├── utils.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-weaviate/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── vectorstores.int.test.ts
    │   │       │   ├── translator.int.test.ts
    │   │       │   └── vectorstores.test.ts
    │   │       ├── vectorstores.ts
    │   │       ├── translator.ts
    │   │       └── index.ts
    │   ├── langchain-anthropic/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── babel.config.cjs
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── types.ts
    │   │       ├── output_parsers.ts
    │   │       ├── tests/
    │   │       │   ├── agent.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── chat_models-tools.int.test.ts
    │   │       │   ├── prompts.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── load/
    │   │       │   ├── map_keys.ts
    │   │       │   ├── import_constants.ts
    │   │       │   ├── serializable.ts
    │   │       │   ├── index.ts
    │   │       │   ├── import_type.ts
    │   │       │   └── import_map.ts
    │   │       ├── experimental/
    │   │       │   ├── tests/
    │   │       │   │   └── tool_calling.int.test.ts
    │   │       │   ├── index.ts
    │   │       │   ├── tool_calling.ts
    │   │       │   └── utils/
    │   │       │       └── tool_calling.ts
    │   │       ├── index.ts
    │   │       ├── chat_models.ts
    │   │       └── utils/
    │   │           ├── tools.ts
    │   │           ├── message_inputs.ts
    │   │           ├── prompts.ts
    │   │           ├── message_outputs.ts
    │   │           └── errors.ts
    │   ├── langchain-xai/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── chat_models_structured_output.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-community/
    │   │   ├── .env.example
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── .prettierignore
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── caches/
    │   │       │   ├── momento.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── upstash_redis.int.test.ts
    │   │       │   │   ├── ioredis.int.test.ts
    │   │       │   │   ├── ioredis.test.ts
    │   │       │   │   ├── momento.test.ts
    │   │       │   │   └── upstash_redis.test.ts
    │   │       │   ├── upstash_redis.ts
    │   │       │   ├── cloudflare_kv.ts
    │   │       │   └── ioredis.ts
    │   │       ├── embeddings/
    │   │       │   ├── ibm.ts
    │   │       │   ├── llama_cpp.ts
    │   │       │   ├── minimax.ts
    │   │       │   ├── premai.ts
    │   │       │   ├── tencent_hunyuan/
    │   │       │   │   ├── base.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── web.ts
    │   │       │   ├── tensorflow.ts
    │   │       │   ├── alibaba_tongyi.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── jina.int.test.ts
    │   │       │   │   ├── huggingface_transformers.int.test.ts
    │   │       │   │   ├── tensorflow.int.test.ts
    │   │       │   │   ├── baidu_qianfan.int.test.ts
    │   │       │   │   ├── premai.int.test.ts
    │   │       │   │   ├── deepinfra.int.test.ts
    │   │       │   │   ├── bedrock.int.test.ts
    │   │       │   │   ├── ibm.int.test.ts
    │   │       │   │   ├── tencent_hunyuan.test.ts
    │   │       │   │   ├── ollama.int.test.ts
    │   │       │   │   ├── togetherai.int.test.ts
    │   │       │   │   ├── llama_cpp.int.test.ts
    │   │       │   │   ├── minimax.int.test.ts
    │   │       │   │   ├── cohere.int.test.ts
    │   │       │   │   ├── hf.int.test.ts
    │   │       │   │   ├── fireworks.int.test.ts
    │   │       │   │   ├── ibm.test.ts
    │   │       │   │   └── voyage.int.test.ts
    │   │       │   ├── togetherai.ts
    │   │       │   ├── voyage.ts
    │   │       │   ├── hf_transformers.ts
    │   │       │   ├── baidu_qianfan.ts
    │   │       │   ├── gradient_ai.ts
    │   │       │   ├── cohere.ts
    │   │       │   ├── huggingface_transformers.ts
    │   │       │   ├── zhipuai.ts
    │   │       │   ├── bedrock.ts
    │   │       │   ├── fireworks.ts
    │   │       │   ├── jina.ts
    │   │       │   ├── ollama.ts
    │   │       │   ├── hf.ts
    │   │       │   ├── cloudflare_workersai.ts
    │   │       │   └── deepinfra.ts
    │   │       ├── load/
    │   │       │   ├── map_keys.ts
    │   │       │   ├── import_constants.ts
    │   │       │   ├── serializable.ts
    │   │       │   ├── index.ts
    │   │       │   ├── import_type.ts
    │   │       │   └── import_map.ts
    │   │       ├── chat_models/
    │   │       │   ├── ibm.ts
    │   │       │   ├── llama_cpp.ts
    │   │       │   ├── minimax.ts
    │   │       │   ├── premai.ts
    │   │       │   ├── tencent_hunyuan/
    │   │       │   │   ├── base.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── web.ts
    │   │       │   ├── alibaba_tongyi.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── chatfireworks.int.test.ts
    │   │       │   │   ├── chatfireworks-agent.int.test.ts
    │   │       │   │   ├── chatbedrock.test.ts
    │   │       │   │   ├── chatpremai.int.test.ts
    │   │       │   │   ├── chatiflytekxinghuo.int.test.ts
    │   │       │   │   ├── chatnovita.int.test.ts
    │   │       │   │   ├── chatollama.int.test.ts
    │   │       │   │   ├── chatalitongyi.int.test.ts
    │   │       │   │   ├── chatdeepinfra.int.test.ts
    │   │       │   │   ├── chatmoonshot.int.test.ts
    │   │       │   │   ├── chatfriendli.int.test.ts
    │   │       │   │   ├── chattencenthunyuan.int.test.ts
    │   │       │   │   ├── chatfireworks.standard.test.ts
    │   │       │   │   ├── chatbedrock.int.test.ts
    │   │       │   │   ├── chatollama.standard.test.ts
    │   │       │   │   ├── ibm.int.test.ts
    │   │       │   │   ├── chatbaiduwenxin.int.test.ts
    │   │       │   │   ├── chattogetherai.int.test.ts
    │   │       │   │   ├── ibm.standard.test.ts
    │   │       │   │   ├── data/
    │   │       │   │   ├── chatllama_cpp.int.test.ts
    │   │       │   │   ├── chattogetherai.standard.test.ts
    │   │       │   │   ├── chatfireworks.standard.int.test.ts
    │   │       │   │   ├── chatzhipuai.int.test.ts
    │   │       │   │   ├── chatbedrock.standard.int.test.ts
    │   │       │   │   ├── chatarcjet.test.ts
    │   │       │   │   ├── minimax.int.test.ts
    │   │       │   │   ├── chattogetherai.standard.int.test.ts
    │   │       │   │   ├── ibm.standard.int.test.ts
    │   │       │   │   ├── chatbedrock.standard.test.ts
    │   │       │   │   ├── ibm.test.ts
    │   │       │   │   └── webllm.int.test.ts
    │   │       │   ├── togetherai.ts
    │   │       │   ├── webllm.ts
    │   │       │   ├── zhipuai.ts
    │   │       │   ├── fireworks.ts
    │   │       │   ├── portkey.ts
    │   │       │   ├── arcjet.ts
    │   │       │   ├── yandex.ts
    │   │       │   ├── iflytek_xinghuo/
    │   │       │   │   ├── common.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── web.ts
    │   │       │   ├── baiduwenxin.ts
    │   │       │   ├── ollama.ts
    │   │       │   ├── moonshot.ts
    │   │       │   ├── cloudflare_workersai.ts
    │   │       │   ├── deepinfra.ts
    │   │       │   ├── bedrock/
    │   │       │   │   ├── index.ts
    │   │       │   │   └── web.ts
    │   │       │   ├── friendli.ts
    │   │       │   └── novita.ts
    │   │       ├── tools/
    │   │       │   ├── google_scholar.ts
    │   │       │   ├── google_trends.ts
    │   │       │   ├── searxng_search.ts
    │   │       │   ├── aws_lambda.ts
    │   │       │   ├── dynamic.ts
    │   │       │   ├── stackexchange.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── google_custom_search.int.test.ts
    │   │       │   │   ├── stackexchange.int.test.ts
    │   │       │   │   ├── wikipedia.int.test.ts
    │   │       │   │   ├── brave_search.int.test.ts
    │   │       │   │   ├── google_places.int.test.ts
    │   │       │   │   ├── aws_lambda.test.ts
    │   │       │   │   ├── gmail.test.ts
    │   │       │   │   ├── serpapi.test.ts
    │   │       │   │   ├── discord.int.test.ts
    │   │       │   │   ├── google_routes.int.test.ts
    │   │       │   │   ├── google_trends.int.test.ts
    │   │       │   │   ├── searchapi.test.ts
    │   │       │   │   ├── wolframalpha.test.ts
    │   │       │   │   ├── google_scholar.int.test.ts
    │   │       │   │   ├── aiplugin.int.test.ts
    │   │       │   │   └── google_calendar.test.ts
    │   │       │   ├── dadjokeapi.ts
    │   │       │   ├── google_places.ts
    │   │       │   ├── google_routes.ts
    │   │       │   ├── serpapi.ts
    │   │       │   ├── google_custom_search.ts
    │   │       │   ├── discord.ts
    │   │       │   ├── fixtures/
    │   │       │   │   └── wordoftheday.html
    │   │       │   ├── calculator.ts
    │   │       │   ├── aiplugin.ts
    │   │       │   ├── google_calendar/
    │   │       │   │   ├── base.ts
    │   │       │   │   ├── descriptions.ts
    │   │       │   │   ├── create.ts
    │   │       │   │   ├── prompts/
    │   │       │   │   │   ├── view-events-prompt.ts
    │   │       │   │   │   ├── index.ts
    │   │       │   │   │   └── create-event-prompt.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── view.ts
    │   │       │   │   ├── utils/
    │   │       │   │   │   └── get-timezone-offset-in-hours.ts
    │   │       │   │   └── commands/
    │   │       │   │       ├── run-view-events.ts
    │   │       │   │       └── run-create-events.ts
    │   │       │   ├── dataforseo_api_search.ts
    │   │       │   ├── connery.ts
    │   │       │   ├── brave_search.ts
    │   │       │   ├── gmail/
    │   │       │   │   ├── base.ts
    │   │       │   │   ├── get_message.ts
    │   │       │   │   ├── create_draft.ts
    │   │       │   │   ├── descriptions.ts
    │   │       │   │   ├── search.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   ├── send_message.ts
    │   │       │   │   └── get_thread.ts
    │   │       │   ├── wikipedia_query_run.ts
    │   │       │   ├── ifttt.ts
    │   │       │   ├── bingserpapi.ts
    │   │       │   ├── wolframalpha.ts
    │   │       │   ├── searchapi.ts
    │   │       │   ├── duckduckgo_search.ts
    │   │       │   ├── aws_sfn.ts
    │   │       │   ├── tavily_search.ts
    │   │       │   └── serper.ts
    │   │       ├── callbacks/
    │   │       │   ├── tests/
    │   │       │   │   ├── llmonitor.int.test.ts
    │   │       │   │   └── upstash_ratelimit.test.ts
    │   │       │   └── handlers/
    │   │       │       ├── llmonitor.ts
    │   │       │       ├── lunary.ts
    │   │       │       └── upstash_ratelimit.ts
    │   │       ├── experimental/
    │   │       │   ├── graph_transformers/
    │   │       │   │   ├── llm.ts
    │   │       │   │   └── llm.int.test.ts
    │   │       │   ├── hubs/
    │   │       │   │   └── makersuite/
    │   │       │   │       ├── llms.ts
    │   │       │   │       ├── tests/
    │   │       │   │       │   ├── googlemakersuite-files/
    │   │       │   │       │   │   ├── textPrompt.json
    │   │       │   │       │   │   ├── dataPrompt.json
    │   │       │   │       │   │   └── chatPrompt.json
    │   │       │   │       │   ├── googlemakersuitehub.int.test.ts
    │   │       │   │       │   └── googlemakersuitehub.test.ts
    │   │       │   │       ├── chat_models.ts
    │   │       │   │       └── googlemakersuitehub.ts
    │   │       │   ├── chat_models/
    │   │       │   │   ├── tests/
    │   │       │   │   │   └── ollama_functions.int.test.ts
    │   │       │   │   └── ollama_functions.ts
    │   │       │   ├── tools/
    │   │       │   │   ├── tests/
    │   │       │   │   │   └── pyinterpreter.int.test.ts
    │   │       │   │   └── pyinterpreter.ts
    │   │       │   ├── callbacks/
    │   │       │   │   └── handlers/
    │   │       │   │       ├── tests/
    │   │       │   │       │   └── datadog.test.ts
    │   │       │   │       └── datadog.ts
    │   │       │   ├── llms/
    │   │       │   │   └── chrome_ai.ts
    │   │       │   └── multimodal_embeddings/
    │   │       │       ├── tests/
    │   │       │       │   ├── files/
    │   │       │       │   ├── googlevertexai.test.ts
    │   │       │       │   └── googlevertexai.int.test.ts
    │   │       │       └── googlevertexai.ts
    │   │       ├── structured_query/
    │   │       │   ├── tests/
    │   │       │   │   ├── qdrant_self_query.int.test.ts
    │   │       │   │   ├── vectara_self_query.int.test.ts
    │   │       │   │   ├── hnswlib_self_query.int.test.ts
    │   │       │   │   ├── supabase_self_query.int.test.ts
    │   │       │   │   └── chroma_self_query.int.test.ts
    │   │       │   ├── chroma.ts
    │   │       │   ├── supabase_utils.ts
    │   │       │   ├── supabase.ts
    │   │       │   ├── qdrant.ts
    │   │       │   └── vectara.ts
    │   │       ├── chains/
    │   │       │   └── graph_qa/
    │   │       │       ├── tests/
    │   │       │       │   └── cypher.int.test.ts
    │   │       │       ├── cypher.ts
    │   │       │       └── prompts.ts
    │   │       ├── graphs/
    │   │       │   ├── tests/
    │   │       │   │   ├── neo4j_graph.int.test.ts
    │   │       │   │   └── memgraph_graph.int.test.ts
    │   │       │   ├── neo4j_graph.ts
    │   │       │   ├── memgraph_graph.ts
    │   │       │   └── graph_document.ts
    │   │       ├── document_compressors/
    │   │       │   ├── ibm.ts
    │   │       │   └── tests/
    │   │       │       ├── ibm.int.test.ts
    │   │       │       └── ibm.test.ts
    │   │       ├── document_transformers/
    │   │       │   ├── tests/
    │   │       │   │   ├── mozilla_readability.test.ts
    │   │       │   │   └── html_to_text.int.test.ts
    │   │       │   ├── mozilla_readability.ts
    │   │       │   └── html_to_text.ts
    │   │       ├── vectorstores/
    │   │       │   ├── usearch.ts
    │   │       │   ├── libsql.ts
    │   │       │   ├── elasticsearch.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── closevector_node.int.test.ts
    │   │       │   │   ├── convex.int.test.ts
    │   │       │   │   ├── voy.test.ts
    │   │       │   │   ├── couchbase.int.test.ts
    │   │       │   │   ├── typeorm.int.test.ts
    │   │       │   │   ├── analyticdb.int.test.ts
    │   │       │   │   ├── rockset.int.test.ts
    │   │       │   │   ├── faiss.test.ts
    │   │       │   │   ├── cassandra.int.test.ts
    │   │       │   │   ├── hdb.d.ts
    │   │       │   │   ├── neo4j_vector.int.test.ts
    │   │       │   │   ├── convex/
    │   │       │   │   │   ├── convex/
    │   │       │   │   │   │   ├── _generated/
    │   │       │   │   │   │   │   ├── api.d.ts
    │   │       │   │   │   │   │   ├── server.d.ts
    │   │       │   │   │   │   │   ├── server.js
    │   │       │   │   │   │   │   ├── dataModel.d.ts
    │   │       │   │   │   │   │   └── api.js
    │   │       │   │   │   │   ├── schema.ts
    │   │       │   │   │   │   ├── langchain/
    │   │       │   │   │   │   │   └── db.ts
    │   │       │   │   │   │   └── lib.ts
    │   │       │   │   │   └── package.json
    │   │       │   │   ├── hnswlib.int.test.ts
    │   │       │   │   ├── opensearch.int.test.ts
    │   │       │   │   ├── momento_vector_index.int.test.ts
    │   │       │   │   ├── turbopuffer.int.test.ts
    │   │       │   │   ├── tigris.test.ts
    │   │       │   │   ├── elasticsearch.int.test.ts
    │   │       │   │   ├── supabase.int.test.ts
    │   │       │   │   ├── hanavector.fixtures.ts
    │   │       │   │   ├── faiss.int.test.ts
    │   │       │   │   ├── milvus.int.test.ts
    │   │       │   │   ├── azure_aisearch.int.test.ts
    │   │       │   │   ├── azure_aisearch.test.ts
    │   │       │   │   ├── chroma.int.test.ts
    │   │       │   │   ├── azure_cosmosdb.int.test.ts
    │   │       │   │   ├── hanavector.test.ts
    │   │       │   │   ├── closevector_node.test.ts
    │   │       │   │   ├── neo4j_vector.fixtures.ts
    │   │       │   │   ├── astradb.int.test.ts
    │   │       │   │   ├── lancedb.int.test.ts
    │   │       │   │   ├── faiss.int.test.data/
    │   │       │   │   │   ├── faiss_index/
    │   │       │   │   │   │   ├── index.faiss
    │   │       │   │   │   │   └── index.pkl
    │   │       │   │   │   ├── faiss.int.test.py
    │   │       │   │   │   └── requirements.txt
    │   │       │   │   ├── vercel_postgres.int.test.ts
    │   │       │   │   ├── hnswlib.test.ts
    │   │       │   │   ├── zep.test.ts
    │   │       │   │   ├── googlevertexai.test.ts
    │   │       │   │   ├── usearch.int.test.ts
    │   │       │   │   ├── qdrant.test.ts
    │   │       │   │   ├── upstash.int.test.ts
    │   │       │   │   ├── myscale.int.test.ts
    │   │       │   │   ├── vectara.int.test.ts
    │   │       │   │   ├── supabase.test.ts
    │   │       │   │   ├── libsql.int.test.ts
    │   │       │   │   ├── prisma.test.ts
    │   │       │   │   ├── clickhouse.int.test.ts
    │   │       │   │   ├── weaviate.test.ts
    │   │       │   │   ├── azure_cosmosdb.test.ts
    │   │       │   │   ├── singlestore.int.test.ts
    │   │       │   │   ├── chroma.test.ts
    │   │       │   │   ├── typesense.test.ts
    │   │       │   │   ├── googlevertexai.int.test.ts
    │   │       │   │   ├── xata.int.test.ts
    │   │       │   │   ├── weaviate.int.test.ts
    │   │       │   │   ├── qdrant.int.test.ts
    │   │       │   │   ├── voy.int.test.ts
    │   │       │   │   ├── hanavector.int.test.ts
    │   │       │   │   └── pgvector/
    │   │       │   │       ├── pgvector.int.test.ts
    │   │       │   │       └── docker-compose.yml
    │   │       │   ├── chroma.ts
    │   │       │   ├── momento_vector_index.ts
    │   │       │   ├── milvus.ts
    │   │       │   ├── neon.ts
    │   │       │   ├── typesense.ts
    │   │       │   ├── couchbase.ts
    │   │       │   ├── supabase.ts
    │   │       │   ├── hanavector.ts
    │   │       │   ├── prisma.ts
    │   │       │   ├── turbopuffer.ts
    │   │       │   ├── voy.ts
    │   │       │   ├── zep_cloud.ts
    │   │       │   ├── pinecone.ts
    │   │       │   ├── qdrant.ts
    │   │       │   ├── typeorm.ts
    │   │       │   ├── azure_aisearch.ts
    │   │       │   ├── convex.ts
    │   │       │   ├── faiss.ts
    │   │       │   ├── azure_cosmosdb.ts
    │   │       │   ├── tigris.ts
    │   │       │   ├── weaviate.ts
    │   │       │   ├── singlestore.ts
    │   │       │   ├── clickhouse.ts
    │   │       │   ├── zep.ts
    │   │       │   ├── myscale.ts
    │   │       │   ├── lancedb.ts
    │   │       │   ├── neo4j_vector.ts
    │   │       │   ├── googlevertexai.ts
    │   │       │   ├── pgvector.ts
    │   │       │   ├── analyticdb.ts
    │   │       │   ├── rockset.ts
    │   │       │   ├── upstash.ts
    │   │       │   ├── astradb.ts
    │   │       │   ├── xata.ts
    │   │       │   ├── mongodb_atlas.ts
    │   │       │   ├── vectara.ts
    │   │       │   ├── redis.ts
    │   │       │   ├── opensearch.ts
    │   │       │   ├── cloudflare_vectorize.ts
    │   │       │   ├── hnswlib.ts
    │   │       │   ├── vercel_postgres.ts
    │   │       │   ├── closevector/
    │   │       │   │   ├── node.ts
    │   │       │   │   ├── common.ts
    │   │       │   │   └── web.ts
    │   │       │   └── cassandra.ts
    │   │       ├── llms/
    │   │       │   ├── ibm.ts
    │   │       │   ├── replicate.ts
    │   │       │   ├── llama_cpp.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── aleph_alpha.int.test.ts
    │   │       │   │   ├── huggingface_hub.int.test.ts
    │   │       │   │   ├── deepinfra.int.test.ts
    │   │       │   │   ├── replicate.int.test.ts
    │   │       │   │   ├── writer.int.test.ts
    │   │       │   │   ├── bedrock.int.test.ts
    │   │       │   │   ├── ai21.int.test.ts
    │   │       │   │   ├── ibm.int.test.ts
    │   │       │   │   ├── data/
    │   │       │   │   ├── ollama.int.test.ts
    │   │       │   │   ├── sagemaker_endpoint.int.test.ts
    │   │       │   │   ├── togetherai.int.test.ts
    │   │       │   │   ├── llama_cpp.int.test.ts
    │   │       │   │   ├── arcjet.test.ts
    │   │       │   │   ├── cohere.int.test.ts
    │   │       │   │   ├── layerup_security.test.ts
    │   │       │   │   ├── fireworks.int.test.ts
    │   │       │   │   ├── ibm.test.ts
    │   │       │   │   └── friendli.int.test.ts
    │   │       │   ├── togetherai.ts
    │   │       │   ├── gradient_ai.ts
    │   │       │   ├── aleph_alpha.ts
    │   │       │   ├── cohere.ts
    │   │       │   ├── watsonx_ai.ts
    │   │       │   ├── fireworks.ts
    │   │       │   ├── sagemaker_endpoint.ts
    │   │       │   ├── raycast.ts
    │   │       │   ├── portkey.ts
    │   │       │   ├── arcjet.ts
    │   │       │   ├── yandex.ts
    │   │       │   ├── layerup_security.ts
    │   │       │   ├── ollama.ts
    │   │       │   ├── ai21.ts
    │   │       │   ├── hf.ts
    │   │       │   ├── writer.ts
    │   │       │   ├── cloudflare_workersai.ts
    │   │       │   ├── deepinfra.ts
    │   │       │   ├── bedrock/
    │   │       │   │   ├── index.ts
    │   │       │   │   └── web.ts
    │   │       │   └── friendli.ts
    │   │       ├── index.ts
    │   │       ├── indexes/
    │   │       │   ├── base.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── postgres.int.test.ts
    │   │       │   │   ├── indexing.milvus.int.test.ts
    │   │       │   │   ├── indexing.int.test.ts
    │   │       │   │   ├── memory.test.ts
    │   │       │   │   └── sqlite.int.test.ts
    │   │       │   ├── memory.ts
    │   │       │   ├── sqlite.ts
    │   │       │   └── postgres.ts
    │   │       ├── stores/
    │   │       │   ├── message/
    │   │       │   │   ├── momento.ts
    │   │       │   │   ├── cloudflare_d1.ts
    │   │       │   │   ├── file_system.ts
    │   │       │   │   ├── firestore.ts
    │   │       │   │   ├── upstash_redis.ts
    │   │       │   │   ├── mongodb.ts
    │   │       │   │   ├── postgres.ts
    │   │       │   │   ├── zep_cloud.ts
    │   │       │   │   ├── neo4j.ts
    │   │       │   │   ├── convex.ts
    │   │       │   │   ├── planetscale.ts
    │   │       │   │   ├── in_memory.ts
    │   │       │   │   ├── astradb.ts
    │   │       │   │   ├── xata.ts
    │   │       │   │   ├── redis.ts
    │   │       │   │   ├── ipfs_datastore.ts
    │   │       │   │   ├── ioredis.ts
    │   │       │   │   ├── dynamodb.ts
    │   │       │   │   └── cassandra.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── postgres.int.test.ts
    │   │       │   │   ├── ipfs_datastore.int.test.ts
    │   │       │   │   ├── dynamodb.int.test.ts
    │   │       │   │   ├── cassandra.int.test.ts
    │   │       │   │   ├── firestore.int.test.ts
    │   │       │   │   ├── file_chat_history.int.test.ts
    │   │       │   │   ├── redis_upstash.int.test.ts
    │   │       │   │   ├── astradb.int.test.ts
    │   │       │   │   ├── neo4j.int.test.ts
    │   │       │   │   ├── planetscale.int.test.ts
    │   │       │   │   └── xata.int.test.ts
    │   │       │   └── doc/
    │   │       │       ├── gcs.ts
    │   │       │       ├── base.ts
    │   │       │       ├── tests/
    │   │       │       │   └── gcs.int.test.ts
    │   │       │       └── in_memory.ts
    │   │       ├── storage/
    │   │       │   ├── tests/
    │   │       │   │   ├── vercel_kv.int.test.ts
    │   │       │   │   ├── cassandra.int.test.ts
    │   │       │   │   ├── upstash_redis.int.test.ts
    │   │       │   │   └── ioredis.int.test.ts
    │   │       │   ├── upstash_redis.ts
    │   │       │   ├── vercel_kv.ts
    │   │       │   ├── convex.ts
    │   │       │   ├── ioredis.ts
    │   │       │   └── cassandra.ts
    │   │       ├── retrievers/
    │   │       │   ├── dria.ts
    │   │       │   ├── vespa.ts
    │   │       │   ├── vectara_summary.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── dria.int.test.ts
    │   │       │   │   ├── tavily_search_api.int.test.ts
    │   │       │   │   ├── vespa.int.test.ts
    │   │       │   │   ├── zep.int.test.ts
    │   │       │   │   ├── supabase.int.test.ts
    │   │       │   │   ├── amazon_kendra.int.test.ts
    │   │       │   │   ├── arxiv.int.test.ts
    │   │       │   │   ├── bm25.test.ts
    │   │       │   │   ├── amazon_knowledge_base.int.test.ts
    │   │       │   │   └── metal.int.test.ts
    │   │       │   ├── chaindesk.ts
    │   │       │   ├── amazon_kendra.ts
    │   │       │   ├── supabase.ts
    │   │       │   ├── remote/
    │   │       │   │   ├── base.ts
    │   │       │   │   └── index.ts
    │   │       │   ├── zep_cloud.ts
    │   │       │   ├── metal.ts
    │   │       │   ├── tavily_search_api.ts
    │   │       │   ├── arxiv.ts
    │   │       │   ├── zep.ts
    │   │       │   ├── databerry.ts
    │   │       │   ├── amazon_knowledge_base.ts
    │   │       │   └── bm25.ts
    │   │       ├── memory/
    │   │       │   ├── chat_memory.ts
    │   │       │   ├── tests/
    │   │       │   │   ├── zep_memory.int.test.ts
    │   │       │   │   ├── motorhead_memory.int.test.ts
    │   │       │   │   └── motorhead_memory.test.ts
    │   │       │   ├── motorhead_memory.ts
    │   │       │   ├── zep_cloud.ts
    │   │       │   └── zep.ts
    │   │       ├── document_loaders/
    │   │       │   ├── tests/
    │   │       │   │   ├── sitemap.int.test.ts
    │   │       │   │   ├── couchbase.int.test.ts
    │   │       │   │   ├── github.test.ts
    │   │       │   │   ├── puppeteer.int.test.ts
    │   │       │   │   ├── cheerio.int.test.ts
    │   │       │   │   ├── srt.test.ts
    │   │       │   │   ├── example_data/
    │   │       │   │   │   ├── attention.docx
    │   │       │   │   │   ├── complex.json
    │   │       │   │   │   ├── github_api_responses.ts
    │   │       │   │   │   ├── Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.jsonl
    │   │       │   │   │   ├── obsidian/
    │   │       │   │   │   │   ├── no_frontmatter.md
    │   │       │   │   │   │   ├── tags_and_frontmatter.md
    │   │       │   │   │   │   ├── bad_frontmatter.md
    │   │       │   │   │   │   ├── frontmatter.md
    │   │       │   │   │   │   └── no_metadata.md
    │   │       │   │   │   ├── attention.epub
    │   │       │   │   │   ├── notion/
    │   │       │   │   │   │   └── notion.md
    │   │       │   │   │   ├── chatgpt/
    │   │       │   │   │   │   └── example_conversations.json
    │   │       │   │   │   ├── emptyfile.pptx
    │   │       │   │   │   ├── Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.csv
    │   │       │   │   │   ├── attention.doc
    │   │       │   │   │   ├── notion_api/
    │   │       │   │   │   │   ├── notion_page_response.json
    │   │       │   │   │   │   └── notion_database_response.json
    │   │       │   │   │   ├── example_separator.csv
    │   │       │   │   │   ├── theikuntest.pptx
    │   │       │   │   │   ├── Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.json
    │   │       │   │   │   ├── example.txt
    │   │       │   │   │   └── Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.srt
    │   │       │   │   ├── epub.test.ts
    │   │       │   │   ├── notion.test.ts
    │   │       │   │   ├── pdf.test.ts
    │   │       │   │   ├── spider.int.test.ts
    │   │       │   │   ├── college_confidential.int.test.ts
    │   │       │   │   ├── notionapi.test.ts
    │   │       │   │   ├── webpdf.int.test.ts
    │   │       │   │   ├── playwright_web.int.test.ts
    │   │       │   │   ├── csv.test.ts
    │   │       │   │   ├── serpapi.test.ts
    │   │       │   │   ├── hn.int.test.ts
    │   │       │   │   ├── srt-blob.test.ts
    │   │       │   │   ├── taskade.int.test.ts
    │   │       │   │   ├── firecrawl.int.test.ts
    │   │       │   │   ├── jira.test.ts
    │   │       │   │   ├── unstructured.int.test.ts
    │   │       │   │   ├── chatgpt-blob.test.ts
    │   │       │   │   ├── recursive_url.int.test.ts
    │   │       │   │   ├── jira.int.test.ts
    │   │       │   │   ├── airtable.int.test.ts
    │   │       │   │   ├── searchapi.test.ts
    │   │       │   │   ├── chatgpt.test.ts
    │   │       │   │   ├── obsidian.test.ts
    │   │       │   │   ├── figma.int.test.ts
    │   │       │   │   ├── pdf-blob.test.ts
    │   │       │   │   ├── sonix_audio.int.test.ts
    │   │       │   │   ├── notionapi.int.test.ts
    │   │       │   │   ├── s3.int.test.ts
    │   │       │   │   ├── imsdb.test.ts
    │   │       │   │   ├── sort_xyz_blockchain.int.test.ts
    │   │       │   │   ├── airtable.test.ts
    │   │       │   │   ├── docx.test.ts
    │   │       │   │   ├── confluence.test.ts
    │   │       │   │   ├── html.int.test.ts
    │   │       │   │   ├── github.int.test.ts
    │   │       │   │   ├── csv-blob.test.ts
    │   │       │   │   ├── pptx.test.ts
    │   │       │   │   ├── gitbook.int.test.ts
    │   │       │   │   └── assemblyai.int.test.ts
    │   │       │   ├── fs/
    │   │       │   │   ├── csv.ts
    │   │       │   │   ├── unstructured.ts
    │   │       │   │   ├── srt.ts
    │   │       │   │   ├── chatgpt.ts
    │   │       │   │   ├── openai_whisper_audio.ts
    │   │       │   │   ├── notion.ts
    │   │       │   │   ├── pdf.ts
    │   │       │   │   ├── epub.ts
    │   │       │   │   ├── pptx.ts
    │   │       │   │   ├── docx.ts
    │   │       │   │   └── obsidian.ts
    │   │       │   └── web/
    │   │       │       ├── imsdb.ts
    │   │       │       ├── browserbase.ts
    │   │       │       ├── college_confidential.ts
    │   │       │       ├── s3.ts
    │   │       │       ├── github.ts
    │   │       │       ├── serpapi.ts
    │   │       │       ├── cheerio.ts
    │   │       │       ├── couchbase.ts
    │   │       │       ├── puppeteer.ts
    │   │       │       ├── figma.ts
    │   │       │       ├── spider.ts
    │   │       │       ├── assemblyai.ts
    │   │       │       ├── sitemap.ts
    │   │       │       ├── pdf.ts
    │   │       │       ├── html.ts
    │   │       │       ├── jira.ts
    │   │       │       ├── confluence.ts
    │   │       │       ├── firecrawl.ts
    │   │       │       ├── gitbook.ts
    │   │       │       ├── recursive_url.ts
    │   │       │       ├── airtable.ts
    │   │       │       ├── notionapi.ts
    │   │       │       ├── azure_blob_storage_file.ts
    │   │       │       ├── sonix_audio.ts
    │   │       │       ├── hn.ts
    │   │       │       ├── azure_blob_storage_container.ts
    │   │       │       ├── searchapi.ts
    │   │       │       ├── taskade.ts
    │   │       │       ├── sort_xyz_blockchain.ts
    │   │       │       ├── apify_dataset.ts
    │   │       │       ├── youtube.ts
    │   │       │       └── playwright.ts
    │   │       ├── agents/
    │   │       │   └── toolkits/
    │   │       │       ├── stagehand.ts
    │   │       │       ├── base.ts
    │   │       │       ├── tests/
    │   │       │       │   └── stagehand.int.test.ts
    │   │       │       ├── connery/
    │   │       │       │   └── index.ts
    │   │       │       └── aws_sfn.ts
    │   │       ├── utils/
    │   │       │   ├── ibm.ts
    │   │       │   ├── llama_cpp.ts
    │   │       │   ├── momento.ts
    │   │       │   ├── tencent_hunyuan/
    │   │       │   │   ├── common.ts
    │   │       │   │   ├── index.ts
    │   │       │   │   └── web.ts
    │   │       │   ├── googlevertexai-connection.ts
    │   │       │   ├── tests/
    │   │       │   │   └── googlevertexai-connection.test.ts
    │   │       │   ├── sqlite_where_builder.ts
    │   │       │   ├── event_source_parse.ts
    │   │       │   ├── extname.ts
    │   │       │   ├── local_image_to_base64.ts
    │   │       │   ├── @furkantoprak/
    │   │       │   │   └── bm25/
    │   │       │   │       ├── BM25.ts
    │   │       │   │       └── LICENSE.md
    │   │       │   ├── zhipuai.ts
    │   │       │   ├── time.ts
    │   │       │   ├── convex.ts
    │   │       │   ├── arxiv.ts
    │   │       │   ├── iflytek_websocket_stream.ts
    │   │       │   ├── ollama.ts
    │   │       │   ├── bedrock/
    │   │       │   │   ├── anthropic.ts
    │   │       │   │   └── index.ts
    │   │       │   └── cassandra.ts
    │   │       └── types/
    │   │           ├── ibm.ts
    │   │           ├── expression-parser.d.ts
    │   │           ├── googlevertexai-types.ts
    │   │           ├── pdf-parse.d.ts
    │   │           ├── assemblyai-types.ts
    │   │           └── type-utils.ts
    │   ├── langchain-groq/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── agent.int.test.ts
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── chat_models.test.ts
    │   │       │   ├── chat_models_structured_output.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── index.ts
    │   │       └── chat_models.ts
    │   ├── langchain-mongodb/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   ├── vectorstores.int.test.ts
    │   │       │   ├── storage.int.test.ts
    │   │       │   └── chat_history.int.test.ts
    │   │       ├── chat_history.ts
    │   │       ├── vectorstores.ts
    │   │       ├── index.ts
    │   │       └── storage.ts
    │   ├── create-langchain-integration/
    │   │   ├── .prettierrc
    │   │   ├── .prettierignore
    │   │   ├── package.json
    │   │   ├── helpers/
    │   │   │   ├── is-folder-empty.ts
    │   │   │   ├── git.ts
    │   │   │   ├── validate-pkg.ts
    │   │   │   ├── templates.ts
    │   │   │   ├── copy.ts
    │   │   │   ├── is-url.ts
    │   │   │   ├── is-writeable.ts
    │   │   │   └── make-dir.ts
    │   │   ├── LICENSE.md
    │   │   ├── index.ts
    │   │   ├── tsconfig.json
    │   │   ├── template/
    │   │   │   ├── jest.env.cjs
    │   │   │   ├── jest.config.cjs
    │   │   │   ├── .prettierrc
    │   │   │   ├── scripts/
    │   │   │   │   └── jest-setup-after-env.js
    │   │   │   ├── .gitignore
    │   │   │   ├── package.json
    │   │   │   ├── tsconfig.cjs.json
    │   │   │   ├── .release-it.json
    │   │   │   ├── turbo.json
    │   │   │   ├── LICENSE
    │   │   │   ├── tsconfig.json
    │   │   │   ├── .eslintrc.cjs
    │   │   │   ├── README.md
    │   │   │   ├── langchain.config.js
    │   │   │   └── src/
    │   │   │       ├── llms.ts
    │   │   │       ├── tests/
    │   │   │       │   ├── llms.test.ts
    │   │   │       │   ├── chat_models.test.ts
    │   │   │       │   ├── integration.int.test.ts
    │   │   │       │   └── vectorstores.test.ts
    │   │   │       ├── vectorstores.ts
    │   │   │       ├── index.ts
    │   │   │       └── chat_models.ts
    │   │   ├── .eslintrc.cjs
    │   │   └── create-app.ts
    │   ├── langchain-cloudflare/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── llms.ts
    │   │       ├── tests/
    │   │       │   ├── chat_models.standard.int.test.ts
    │   │       │   ├── llms.int.test.ts
    │   │       │   ├── chat_models.int.test.ts
    │   │       │   └── chat_models.standard.test.ts
    │   │       ├── message_histories.ts
    │   │       ├── vectorstores.ts
    │   │       ├── embeddings.ts
    │   │       ├── index.ts
    │   │       ├── caches.ts
    │   │       ├── chat_models.ts
    │   │       └── utils/
    │   │           └── event_source_parse.ts
    │   ├── langchain-nomic/
    │   │   ├── jest.env.cjs
    │   │   ├── jest.config.cjs
    │   │   ├── .prettierrc
    │   │   ├── scripts/
    │   │   │   └── jest-setup-after-env.js
    │   │   ├── .gitignore
    │   │   ├── package.json
    │   │   ├── tsconfig.cjs.json
    │   │   ├── .release-it.json
    │   │   ├── turbo.json
    │   │   ├── LICENSE
    │   │   ├── tsconfig.json
    │   │   ├── .eslintrc.cjs
    │   │   ├── README.md
    │   │   ├── langchain.config.js
    │   │   └── src/
    │   │       ├── tests/
    │   │       │   └── embeddings.int.test.ts
    │   │       ├── embeddings.ts
    │   │       └── index.ts
    │   └── langchain-standard-tests/
    │       ├── jest.env.cjs
    │       ├── jest.config.cjs
    │       ├── .prettierrc
    │       ├── scripts/
    │       │   └── jest-setup-after-env.js
    │       ├── .gitignore
    │       ├── package.json
    │       ├── tsconfig.cjs.json
    │       ├── .release-it.json
    │       ├── turbo.json
    │       ├── LICENSE
    │       ├── tsconfig.json
    │       ├── .eslintrc.cjs
    │       ├── README.md
    │       ├── langchain.config.js
    │       └── src/
    │           ├── base.ts
    │           ├── index.ts
    │           ├── unit_tests/
    │           │   └── chat_models.ts
    │           └── integration_tests/
    │               └── chat_models.ts
    ├── release_workspace.js
    ├── .codecov.yml
    ├── .devcontainer/
    │   ├── devcontainer.json
    │   └── README.md
    ├── examples/
    │   ├── .env.example
    │   ├── .prettierrc
    │   ├── state_of_the_union.txt
    │   ├── .yarn/
    │   │   └── install-state.gz
    │   ├── package.json
    │   ├── openai_openapi.yaml
    │   ├── tsconfig.json
    │   ├── .eslintrc.cjs
    │   └── src/
    │       ├── cache/
    │       │   ├── momento.ts
    │       │   ├── upstash_redis.ts
    │       │   ├── chat_models/
    │       │   │   ├── momento.ts
    │       │   │   ├── upstash_redis.ts
    │       │   │   ├── redis.ts
    │       │   │   ├── cloudflare_kv.ts
    │       │   │   └── upstash_redis_advanced.ts
    │       │   ├── cloudflare_kv.ts
    │       │   └── upstash_redis_advanced.ts
    │       ├── caches/
    │       │   └── azure_cosmosdb_nosql/
    │       │       └── azure_cosmosdb_nosql.ts
    │       ├── embeddings/
    │       │   ├── openai.ts
    │       │   ├── premai.ts
    │       │   ├── alibaba_tongyi.ts
    │       │   ├── llama_cpp_basic.ts
    │       │   ├── togetherai.ts
    │       │   ├── convex/
    │       │   │   ├── _generated/
    │       │   │   │   ├── api.d.ts
    │       │   │   │   ├── server.d.ts
    │       │   │   │   ├── server.js
    │       │   │   │   ├── dataModel.d.ts
    │       │   │   │   └── api.js
    │       │   │   └── cache_backed_convex.ts
    │       │   ├── baidu_qianfan.ts
    │       │   ├── gradient_ai.ts
    │       │   ├── cache_backed_in_memory.ts
    │       │   ├── cohere.ts
    │       │   ├── zhipuai.ts
    │       │   ├── azure_openai.ts
    │       │   ├── pinecone.ts
    │       │   ├── bedrock.ts
    │       │   ├── max_concurrency.ts
    │       │   ├── jina.ts
    │       │   ├── cache_backed_redis.ts
    │       │   ├── llama_cpp_docs.ts
    │       │   ├── deepinfra.ts
    │       │   └── openai_dimensions.ts
    │       ├── ecosystem/
    │       │   ├── langsmith_stream_log.ts
    │       │   ├── langsmith_stream_events.ts
    │       │   ├── langsmith_options.ts
    │       │   └── langsmith.ts
    │       ├── tools/
    │       │   ├── dalle_image_generation.ts
    │       │   ├── google_trends.ts
    │       │   ├── searxng_search.ts
    │       │   ├── stackexchange.ts
    │       │   ├── google_places.ts
    │       │   ├── google_calendar.ts
    │       │   ├── google_routes.ts
    │       │   ├── duckduckgo_search_simple.ts
    │       │   ├── pyinterpreter.ts
    │       │   ├── discord.ts
    │       │   ├── duckduckgo_search_agent.ts
    │       │   ├── exa_agent.ts
    │       │   ├── wikipedia.ts
    │       │   ├── connery.ts
    │       │   ├── searchapi_google_news.ts
    │       │   ├── gmail.ts
    │       │   ├── webbrowser.ts
    │       │   ├── wolframalpha.ts
    │       │   ├── azure_dynamic_sessions/
    │       │   │   ├── .env.example
    │       │   │   ├── azure_dynamic_sessions-agent.ts
    │       │   │   └── azure_dynamic_sessions.ts
    │       │   ├── exa_search.ts
    │       │   └── tavily_search.ts
    │       ├── callbacks/
    │       │   ├── docs_constructor_callbacks.ts
    │       │   ├── background_await.ts
    │       │   ├── lunary_tags.ts
    │       │   ├── docs_request_callbacks.ts
    │       │   ├── datadog.ts
    │       │   ├── lunary_custom_agent.ts
    │       │   ├── trace_groups.ts
    │       │   ├── lunary_users.ts
    │       │   ├── console_handler.ts
    │       │   ├── lunary_langchain_agent.ts
    │       │   ├── custom_handler.ts
    │       │   ├── lunary_quickstart.ts
    │       │   ├── lunary_custom_app_id.ts
    │       │   └── docs_verbose.ts
    │       ├── experimental/
    │       │   ├── masking/
    │       │   │   ├── kitchen_sink.ts
    │       │   │   ├── next.ts
    │       │   │   └── basic.ts
    │       │   ├── autogpt/
    │       │   │   ├── weather.ts
    │       │   │   └── weather_browser.ts
    │       │   ├── prompts/
    │       │   │   └── handlebars.ts
    │       │   ├── babyagi/
    │       │   │   ├── weather.ts
    │       │   │   └── weather_with_tools.ts
    │       │   └── generative_agents/
    │       │       └── generative_agents.ts
    │       ├── chains/
    │       │   ├── conversational_qa_streaming_legacy.ts
    │       │   ├── summarization_map_reduce_intermediate_steps.ts
    │       │   ├── advanced_subclass.ts
    │       │   ├── sql_db_sql_output_legacy.ts
    │       │   ├── openai_multi_functions_runnable.ts
    │       │   ├── retrieval_qa_custom.ts
    │       │   ├── llm_chain_cancellation.ts
    │       │   ├── conversational_qa_built_in_memory_legacy.ts
    │       │   ├── constitutional_chain.ts
    │       │   ├── multi_retrieval_qa.ts
    │       │   ├── sequential_chain.ts
    │       │   ├── summarization.ts
    │       │   ├── openai_functions_structured_format.ts
    │       │   ├── openai_functions_structured_generate.ts
    │       │   ├── retrieval_qa.ts
    │       │   ├── memgraph.ts
    │       │   ├── question_answering_map_reduce.ts
    │       │   ├── sql_db_saphana.ts
    │       │   ├── conversational_qa_legacy.ts
    │       │   ├── conversational_qa.ts
    │       │   ├── conversational_qa_streaming.ts
    │       │   ├── llm_chain_stream.ts
    │       │   ├── simple_sequential_chain.ts
    │       │   ├── openai_functions_openapi_customization.ts
    │       │   ├── openai_functions_json_schema.ts
    │       │   ├── map_reduce_lcel.ts
    │       │   ├── openai_functions_tagging.ts
    │       │   ├── retrieval_qa_sources_legacy.ts
    │       │   ├── conversational_qa_external_memory_legacy.ts
    │       │   ├── qa_refine_custom_prompt.ts
    │       │   ├── sql_db_custom_prompt.ts
    │       │   ├── retrieval_qa_custom_prompt_legacy.ts
    │       │   ├── sql_db_custom_prompt_legacy.ts
    │       │   ├── analyze_document_chain_summarize.ts
    │       │   ├── advanced_subclass_call.ts
    │       │   ├── graph_db_return_direct.ts
    │       │   ├── question_answering.ts
    │       │   ├── graph_db_neo4j.ts
    │       │   ├── summarization_map_reduce.ts
    │       │   ├── openai_functions_runnable.ts
    │       │   ├── retrieval_qa_legacy.ts
    │       │   ├── sql_db_sql_output.ts
    │       │   ├── llm_chain_chat.ts
    │       │   ├── multi_prompt.ts
    │       │   ├── load_from_hub.ts
    │       │   ├── conversation_chain.ts
    │       │   ├── summarization_separate_output_llm.ts
    │       │   ├── openai_moderation.ts
    │       │   ├── retrieval_qa_custom_legacy.ts
    │       │   ├── question_answering_stuff.ts
    │       │   ├── sql_db_saphana_legacy.ts
    │       │   ├── llm_chain.ts
    │       │   ├── conversational_qa_built_in_memory.ts
    │       │   ├── retrieval_qa_sources.ts
    │       │   ├── openai_functions_extraction.ts
    │       │   ├── conversation_qa_custom_prompt_legacy.ts
    │       │   ├── api_chain.ts
    │       │   ├── sql_db.ts
    │       │   ├── graph_db_custom_prompt.ts
    │       │   ├── sql_db_legacy.ts
    │       │   ├── openai_functions_openapi_post.ts
    │       │   ├── qa_refine.ts
    │       │   └── openai_functions_openapi_simple.ts
    │       ├── extraction/
    │       │   └── openai_tool_calling_extraction.ts
    │       ├── document_compressors/
    │       │   ├── cohere_rerank_custom_client.ts
    │       │   ├── cohere_rerank.ts
    │       │   └── cohere_rerank_compressor.ts
    │       ├── models/
    │       │   ├── embeddings/
    │       │   │   ├── openai.ts
    │       │   │   ├── minimax.ts
    │       │   │   ├── googlevertexai_multimodal_advanced.ts
    │       │   │   ├── tensorflow.ts
    │       │   │   ├── hf_transformers.ts
    │       │   │   ├── cohere.ts
    │       │   │   ├── azure_openai.ts
    │       │   │   ├── azure_openai-base_path.ts
    │       │   │   ├── fireworks.ts
    │       │   │   ├── openai_timeout.ts
    │       │   │   ├── jina.ts
    │       │   │   ├── googlegenerativeai.ts
    │       │   │   ├── googlevertexai_multimodal.ts
    │       │   │   ├── nomic.ts
    │       │   │   ├── tencent_hunyuan.ts
    │       │   │   ├── mistral.ts
    │       │   │   ├── azure_openai-managed_identity.ts
    │       │   │   └── deepinfra.ts
    │       │   ├── llm/
    │       │   │   ├── replicate.ts
    │       │   │   ├── llama_cpp.ts
    │       │   │   ├── token_usage_tracking.ts
    │       │   │   ├── replicate_llama2.ts
    │       │   │   ├── llm_streaming_stdout.ts
    │       │   │   ├── togetherai.ts
    │       │   │   ├── llm_with_tracing.ts
    │       │   │   ├── custom_advanced.ts
    │       │   │   ├── aleph_alpha.ts
    │       │   │   ├── cohere.ts
    │       │   │   ├── llm_advanced.ts
    │       │   │   ├── azure_openai.ts
    │       │   │   ├── azure_openai-base_path.ts
    │       │   │   ├── openai_userid.ts
    │       │   │   ├── llm_timeout.ts
    │       │   │   ├── bedrock.ts
    │       │   │   ├── fireworks.ts
    │       │   │   ├── sagemaker_endpoint.ts
    │       │   │   ├── llm_cancellation.ts
    │       │   │   ├── llm_streaming_stream_method.ts
    │       │   │   ├── llama_cpp_stream.ts
    │       │   │   ├── yandex.ts
    │       │   │   ├── openai-batch.ts
    │       │   │   ├── custom.ts
    │       │   │   ├── llm.ts
    │       │   │   ├── llm_debugging.ts
    │       │   │   ├── togetherai_stream.ts
    │       │   │   ├── ollama.ts
    │       │   │   ├── ai21.ts
    │       │   │   ├── openai_basePath.ts
    │       │   │   ├── ollama_multimodal.ts
    │       │   │   ├── llm_quick_start.ts
    │       │   │   ├── writer.ts
    │       │   │   ├── cloudflare_workersai.ts
    │       │   │   ├── azure_openai-managed_identity.ts
    │       │   │   ├── deepinfra.ts
    │       │   │   ├── friendli.ts
    │       │   │   └── llm_streaming.ts
    │       │   └── chat/
    │       │       ├── integration_togetherai_tools.ts
    │       │       ├── integration_anthropic_multi_tool.ts
    │       │       ├── integration_llama_cpp_stream_invoke.ts
    │       │       ├── integration_groq_tool_calls.ts
    │       │       ├── integration_openai_vision.ts
    │       │       ├── integration_anthropic_tool_calling_agent.ts
    │       │       ├── token_usage_tracking.ts
    │       │       ├── integration_qianfan.ts
    │       │       ├── minimax_functions.ts
    │       │       ├── chat_mistralai_wsa.ts
    │       │       ├── integration_zhipuai.ts
    │       │       ├── integration_ollama_json_mode.ts
    │       │       ├── integration_openai_fine_tune.ts
    │       │       ├── ollama_functions/
    │       │       │   ├── extraction.ts
    │       │       │   ├── custom_prompt.ts
    │       │       │   └── function_calling.ts
    │       │       ├── integration_openai_wsa_zod.ts
    │       │       ├── integration_ollama_tools.ts
    │       │       ├── chat_vertexai_agents.ts
    │       │       ├── chat_streaming_stdout.ts
    │       │       ├── minimax_functions_zod.ts
    │       │       ├── integration_openai.ts
    │       │       ├── integration_minimax.ts
    │       │       ├── chat_stream_groq.ts
    │       │       ├── custom_advanced.ts
    │       │       ├── integration_openai_invoke_info.ts
    │       │       ├── integration_bedrock_wso.ts
    │       │       ├── integration_azure_chat_openai.ts
    │       │       ├── integration_openai_parallel_tool_calls.ts
    │       │       ├── integration_anthropic_multimodal.ts
    │       │       ├── chat_streaming_stream_method.ts
    │       │       ├── googlegenerativeai_wso.ts
    │       │       ├── integration_fireworks.ts
    │       │       ├── chat_debugging.ts
    │       │       ├── minimax_glyph.ts
    │       │       ├── integration_tencent_hunyuan.ts
    │       │       ├── chat_timeout.ts
    │       │       ├── integration_llama_cpp_stream.ts
    │       │       ├── integration_anthropic_forced_tool.ts
    │       │       ├── chat.ts
    │       │       ├── integration_llama_cpp_system.ts
    │       │       ├── minimax_sample_messages.ts
    │       │       ├── integration_groq_wsa_zod.ts
    │       │       ├── integration_togetherai.ts
    │       │       ├── chat_mistralai_agents.ts
    │       │       ├── googlegenerativeai_tools.ts
    │       │       ├── integration_azure_openai.ts
    │       │       ├── integration_llama_cpp.ts
    │       │       ├── minimax_plugins.ts
    │       │       ├── chat_quick_start.ts
    │       │       ├── integration_anthropic_wsa.ts
    │       │       ├── integration_anthropic_custom_headers.ts
    │       │       ├── integration_anthropic_single_tool.ts
    │       │       ├── integration_llama_cpp_stream_multi.ts
    │       │       ├── minimax_chain.ts
    │       │       ├── integration_moonshot.ts
    │       │       ├── integration_webllm.ts
    │       │       ├── integration_deepinfra.ts
    │       │       ├── integration_openai_wsa_json_schema.ts
    │       │       ├── integration_fake.ts
    │       │       ├── openai_functions.ts
    │       │       ├── integration_googlevertexai.ts
    │       │       ├── chat_mistralai.ts
    │       │       ├── integration_anthropic_tools_wsa.ts
    │       │       ├── integration_bedrock_tools_converse.ts
    │       │       ├── integration_bedrock_wso_converse.ts
    │       │       ├── token_usage_tracking_anthropic.ts
    │       │       ├── googlegenerativeai.ts
    │       │       ├── usage_metadata.ts
    │       │       ├── chat_groq.ts
    │       │       ├── googlegenerativeai_multimodal.ts
    │       │       ├── llm_caching.ts
    │       │       ├── integration_baiduwenxin.ts
    │       │       ├── custom.ts
    │       │       ├── integration_iflytek_xinghuo.ts
    │       │       ├── caching.ts
    │       │       ├── integration_googlevertexai-multimodal.ts
    │       │       ├── chat_stream_baidu_qianfan.ts
    │       │       ├── cohere/
    │       │       │   ├── rag.ts
    │       │       │   ├── connectors.ts
    │       │       │   ├── chat_cohere.ts
    │       │       │   ├── stateful_conversation.ts
    │       │       │   ├── tool_calling.ts
    │       │       │   └── chat_stream_cohere.ts
    │       │       ├── integration_azure_openai_base_path.ts
    │       │       ├── integration_cloudflare_workersai.ts
    │       │       ├── integration_ollama.ts
    │       │       ├── integration_ollama_multimodal.ts
    │       │       ├── integration_openai_callbacks.ts
    │       │       ├── integration_openai_generation_info.ts
    │       │       ├── integration_bedrock_multimodal.ts
    │       │       ├── integration_bedrock.ts
    │       │       ├── chat_stream_mistralai.ts
    │       │       ├── integration_anthropic_tools_wsa_json.ts
    │       │       ├── chat_mistralai_wsa_json.ts
    │       │       ├── integration_googlevertexai-streaming.ts
    │       │       ├── integration_togetherai_json.ts
    │       │       ├── integration_yandex.ts
    │       │       ├── integration_anthropic.ts
    │       │       ├── chat_mistralai_tools.ts
    │       │       ├── integration_anthropic_legacy.ts
    │       │       ├── integration_bedrock_multimodal_converse.ts
    │       │       ├── integration_ollama_wso.ts
    │       │       ├── token_usage_tracking_callback.ts
    │       │       ├── integration_googlevertexai-tools.ts
    │       │       ├── integration_bedrock_converse.ts
    │       │       ├── integration_azure_openai_managed_identity.ts
    │       │       ├── integration_googlevertexai-wso.ts
    │       │       ├── integration_openai_stream_tokens.ts
    │       │       ├── integration_llama_cpp_chain.ts
    │       │       ├── integration_alitongyi.ts
    │       │       ├── chat_cancellation.ts
    │       │       ├── usage_metadata_anthropic.ts
    │       │       ├── configurable/
    │       │       │   ├── configurable_model_with_defaults.ts
    │       │       │   ├── configurable_model.ts
    │       │       │   ├── inferring_model_provider.ts
    │       │       │   ├── basic.ts
    │       │       │   └── configurable_model_declaratively.ts
    │       │       ├── integration_openai_tool_calls.ts
    │       │       ├── openai_functions_zod.ts
    │       │       ├── chat_streaming.ts
    │       │       ├── chat_baidu_qianfan.ts
    │       │       ├── anthropic_tools/
    │       │       │   ├── extraction.ts
    │       │       │   └── tool_calling.ts
    │       │       ├── friendli.ts
    │       │       ├── integration_bedrock_tools.ts
    │       │       ├── integration_openai_custom_base.ts
    │       │       └── integration_premai.ts
    │       ├── prompts/
    │       │   ├── multi_modal_inline.ts
    │       │   ├── json_structured_output_parser_streaming.ts
    │       │   ├── string_output_parser_sequence.ts
    │       │   ├── prompt_value.ts
    │       │   ├── quickstart/
    │       │   │   ├── hard_coded_mustache.ts
    │       │   │   ├── basic_fstring.ts
    │       │   │   ├── basic_mustache.ts
    │       │   │   ├── test.ts
    │       │   │   ├── input_vars_mustache.ts
    │       │   │   ├── input_vars_fstring.ts
    │       │   │   └── hard_coded_fstring.ts
    │       │   ├── comma_list_parser.ts
    │       │   ├── structured_parser_sequence.ts
    │       │   ├── semantic_similarity_example_selector_from_existing.ts
    │       │   ├── combining_parser_sequence.ts
    │       │   ├── custom_list_parser.ts
    │       │   ├── http_response_output_parser.ts
    │       │   ├── structured_parser.ts
    │       │   ├── datetime_parser.ts
    │       │   ├── partial.ts
    │       │   ├── few_shot.ts
    │       │   ├── multi_modal.ts
    │       │   ├── http_response_output_parser_custom.ts
    │       │   ├── combining_parser.ts
    │       │   ├── prompts.ts
    │       │   ├── structured_parser_zod.ts
    │       │   ├── semantic_similarity_example_selector.ts
    │       │   ├── structured_parser_zod_sequence.ts
    │       │   ├── semantic_similarity_example_selector_metadata_filtering.ts
    │       │   ├── pipeline_prompt.ts
    │       │   ├── string_output_parser.ts
    │       │   ├── xml_output_parser.ts
    │       │   ├── length_based_example_selector.ts
    │       │   ├── comma_list_parser_sequence.ts
    │       │   ├── semantic_similarity_example_selector_custom_retriever.ts
    │       │   ├── custom_list_parser_sequence.ts
    │       │   ├── xml_output_parser_streaming.ts
    │       │   ├── fix_parser.ts
    │       │   ├── http_response_output_parser_event_stream.ts
    │       │   ├── bytes_output_parser_sequence.ts
    │       │   ├── regex_parser.ts
    │       │   ├── json_structured_output_parser.ts
    │       │   ├── use_with_llm_chain.ts
    │       │   └── bytes_output_parser.ts
    │       ├── document_transformers/
    │       │   ├── mozilla_readability.ts
    │       │   ├── html_to_text.ts
    │       │   ├── metadata_tagger.ts
    │       │   └── metadata_tagger_custom_prompt.ts
    │       ├── llms/
    │       │   ├── openai-chat.ts
    │       │   ├── replicate.ts
    │       │   ├── openai.ts
    │       │   ├── bedrock.js
    │       │   ├── cohere.ts
    │       │   ├── azure_openai.ts
    │       │   ├── watsonx_ai.ts
    │       │   ├── azure_openai-chat.ts
    │       │   ├── gradient_ai-adapter.ts
    │       │   ├── portkey-chat.ts
    │       │   ├── portkey.ts
    │       │   ├── layerup_security.ts
    │       │   ├── googlevertexai.ts
    │       │   ├── googlevertexai-streaming.ts
    │       │   ├── hf.ts
    │       │   └── gradient_ai-base.ts
    │       ├── get_started/
    │       │   ├── quickstart2.ts
    │       │   ├── quickstart.ts
    │       │   └── quickstart3.ts
    │       ├── index.ts
    │       ├── indexes/
    │       │   ├── vector_stores/
    │       │   │   ├── zep/
    │       │   │   │   ├── zep_from_docs.ts
    │       │   │   │   ├── zep_cloud.ts
    │       │   │   │   ├── zep_with_metadata.ts
    │       │   │   │   └── zep_with_openai_embeddings.ts
    │       │   │   ├── weaviate_search.ts
    │       │   │   ├── usearch.ts
    │       │   │   ├── elasticsearch/
    │       │   │   │   └── elasticsearch.ts
    │       │   │   ├── upstash/
    │       │   │   │   ├── delete_docs.ts
    │       │   │   │   ├── namespaces.ts
    │       │   │   │   ├── create_client.ts
    │       │   │   │   ├── index_and_query_docs.ts
    │       │   │   │   └── upstash_embeddings.ts
    │       │   │   ├── supabase_with_metadata_filter.ts
    │       │   │   ├── faiss_loadfrompython.ts
    │       │   │   ├── mongodb_atlas_search.ts
    │       │   │   ├── memory.ts
    │       │   │   ├── redis/
    │       │   │   │   ├── redis_index_options.ts
    │       │   │   │   ├── redis_query.ts
    │       │   │   │   ├── redis.ts
    │       │   │   │   ├── docker-compose.yml
    │       │   │   │   └── redis_delete.ts
    │       │   │   ├── qdrant/
    │       │   │   │   ├── fromDocs.ts
    │       │   │   │   ├── fromTexts.ts
    │       │   │   │   └── fromExisting.ts
    │       │   │   ├── singlestore_with_metadata_filter.ts
    │       │   │   ├── cloudflare_vectorize/
    │       │   │   │   └── example.ts
    │       │   │   ├── pinecone/
    │       │   │   │   ├── mmr.ts
    │       │   │   │   ├── delete_docs.ts
    │       │   │   │   ├── query_docs.ts
    │       │   │   │   └── index_docs.ts
    │       │   │   ├── milvus.ts
    │       │   │   ├── myscale_search.ts
    │       │   │   ├── pgvector_vectorstore/
    │       │   │   │   ├── pgvector_pool.ts
    │       │   │   │   ├── docker-compose.example.yml
    │       │   │   │   ├── pgvector_hnsw.ts
    │       │   │   │   └── pgvector.ts
    │       │   │   ├── faiss_saveload.ts
    │       │   │   ├── convex/
    │       │   │   │   ├── _generated/
    │       │   │   │   │   ├── api.d.ts
    │       │   │   │   │   ├── server.d.ts
    │       │   │   │   │   ├── server.js
    │       │   │   │   │   ├── dataModel.d.ts
    │       │   │   │   │   └── api.js
    │       │   │   │   ├── search.ts
    │       │   │   │   └── fromTexts.ts
    │       │   │   ├── faiss_mergefrom.ts
    │       │   │   ├── typesense.ts
    │       │   │   ├── supabase_with_maximum_marginal_relevance.ts
    │       │   │   ├── supabase.ts
    │       │   │   ├── mongodb_mmr.ts
    │       │   │   ├── hnswlib_filter.ts
    │       │   │   ├── turbopuffer.ts
    │       │   │   ├── opensearch/
    │       │   │   │   ├── opensearch.ts
    │       │   │   │   └── docker-compose.yml
    │       │   │   ├── couchbase/
    │       │   │   │   └── .env.example
    │       │   │   ├── hnswlib_saveload.ts
    │       │   │   ├── weaviate_mmr.ts
    │       │   │   ├── voy.ts
    │       │   │   ├── azure_cosmosdb_nosql/
    │       │   │   │   ├── .env.example
    │       │   │   │   ├── azure_cosmosdb_nosql.ts
    │       │   │   │   └── azure_cosmosdb_nosql-managed_identity.ts
    │       │   │   ├── vercel_postgres/
    │       │   │   │   └── example.ts
    │       │   │   ├── clickhouse_fromTexts.ts
    │       │   │   ├── faiss_delete.ts
    │       │   │   ├── closevector_saveload.ts
    │       │   │   ├── weaviate_delete.ts
    │       │   │   ├── faiss.ts
    │       │   │   ├── faiss_fromdocs.ts
    │       │   │   ├── memory_fromdocs.ts
    │       │   │   ├── supabase_with_query_builder_metadata_filter.ts
    │       │   │   ├── momento_vector_index/
    │       │   │   │   ├── fromDocs.ts
    │       │   │   │   ├── fromTexts.ts
    │       │   │   │   └── fromExisting.ts
    │       │   │   ├── astra.ts
    │       │   │   ├── singlestore.ts
    │       │   │   ├── neon/
    │       │   │   │   └── example.ts
    │       │   │   ├── hnswlib_fromdocs.ts
    │       │   │   ├── clickhouse_search.ts
    │       │   │   ├── googlevertexai.ts
    │       │   │   ├── analyticdb.ts
    │       │   │   ├── weaviate_fromTexts.ts
    │       │   │   ├── rockset.ts
    │       │   │   ├── usearch_fromdocs.ts
    │       │   │   ├── supabase_deletion.ts
    │       │   │   ├── xata_metadata.ts
    │       │   │   ├── singlestore_hybrid_search.ts
    │       │   │   ├── hana_vector/
    │       │   │   │   ├── .env.example
    │       │   │   │   ├── basics.ts
    │       │   │   │   ├── hdb.d.ts
    │       │   │   │   ├── advancedFiltering.ts
    │       │   │   │   ├── createHnswIndex.ts
    │       │   │   │   ├── chains.ts
    │       │   │   │   ├── fromDocs.ts
    │       │   │   │   └── fromTexts.ts
    │       │   │   ├── closevector.ts
    │       │   │   ├── xata.ts
    │       │   │   ├── closevector_saveload_fromcloud.ts
    │       │   │   ├── neo4j_vector/
    │       │   │   │   ├── docker-compose.example.yml
    │       │   │   │   ├── neo4j_vector_metadata.ts
    │       │   │   │   ├── neo4j_vector.ts
    │       │   │   │   ├── neo4j_vector_retrieval.ts
    │       │   │   │   └── neo4j_vector_existinggraph.ts
    │       │   │   ├── vectara.ts
    │       │   │   ├── typeorm_vectorstore/
    │       │   │   │   ├── docker-compose.example.yml
    │       │   │   │   └── typeorm.ts
    │       │   │   ├── mongodb_atlas_fromTexts.ts
    │       │   │   ├── mongodb_metadata_filtering.ts
    │       │   │   ├── azure_aisearch/
    │       │   │   │   ├── .env.example
    │       │   │   │   └── azure_aisearch.ts
    │       │   │   ├── chroma/
    │       │   │   │   ├── search.ts
    │       │   │   │   ├── delete.ts
    │       │   │   │   ├── fromDocs.ts
    │       │   │   │   └── fromTexts.ts
    │       │   │   ├── hnswlib.ts
    │       │   │   ├── hnswlib_delete.ts
    │       │   │   ├── closevector_fromdocs.ts
    │       │   │   ├── lancedb/
    │       │   │   │   ├── fromDocs.ts
    │       │   │   │   ├── load.ts
    │       │   │   │   └── fromTexts.ts
    │       │   │   ├── azure_cosmosdb_mongodb/
    │       │   │   │   ├── .env.example
    │       │   │   │   └── azure_cosmosdb_mongodb.ts
    │       │   │   ├── myscale_fromTexts.ts
    │       │   │   └── prisma_vectorstore/
    │       │   │       ├── .env.example
    │       │   │       ├── docker-compose.example.yml
    │       │   │       ├── prisma/
    │       │   │       │   ├── migrations/
    │       │   │       │   │   ├── 00_init/
    │       │   │       │   │   │   └── migration.sql
    │       │   │       │   │   └── migration_lock.toml
    │       │   │       │   └── schema.prisma
    │       │   │       ├── .gitignore
    │       │   │       └── prisma.ts
    │       │   ├── python_text_splitter.ts
    │       │   ├── recursive_text_splitter_custom_separators.ts
    │       │   ├── markdown_text_splitter.ts
    │       │   ├── recursive_text_splitter.ts
    │       │   ├── text_splitter.ts
    │       │   ├── indexing_api/
    │       │   │   └── indexing.ts
    │       │   ├── latex_text_splitter.ts
    │       │   ├── text_splitter_with_chunk_header.ts
    │       │   ├── html_text_splitter.ts
    │       │   ├── javascript_text_splitter.ts
    │       │   └── token_text_splitter.ts
    │       ├── chat/
    │       │   ├── memory.ts
    │       │   ├── overview.ts
    │       │   ├── llm_chain.ts
    │       │   └── agent.ts
    │       ├── stores/
    │       │   ├── in_memory_storage.ts
    │       │   ├── cassandra_storage.ts
    │       │   ├── file_system_storage.ts
    │       │   ├── vercel_kv_storage.ts
    │       │   ├── upstash_redis_storage.ts
    │       │   └── ioredis_storage.ts
    │       ├── guides/
    │       │   ├── deployment/
    │       │   │   ├── stream_error_handling.ts
    │       │   │   ├── error_handling.ts
    │       │   │   └── streaming.ts
    │       │   ├── expression_language/
    │       │   │   ├── cookbook_conversational_retrieval.ts
    │       │   │   ├── zep/
    │       │   │   │   ├── zep_cloud_message_history.ts
    │       │   │   │   ├── zep_cloud_vector_store.ts
    │       │   │   │   └── zep_cloud_message_history_vector_store.ts
    │       │   │   ├── message_history.ts
    │       │   │   ├── interface_invoke.ts
    │       │   │   ├── cookbook_sql_db.ts
    │       │   │   ├── interface_stream.ts
    │       │   │   ├── how_to_routing_runnable_branch.ts
    │       │   │   ├── cookbook_tools.ts
    │       │   │   ├── interface_batch_with_options.ts
    │       │   │   ├── cookbook_retriever_map.ts
    │       │   │   ├── cookbook_multiple_chains.ts
    │       │   │   ├── how_to_cancellation.ts
    │       │   │   ├── runnable_history.ts
    │       │   │   ├── runnable_maps_sequence.ts
    │       │   │   ├── runnable_history_constructor_config.ts
    │       │   │   ├── interface_stream_log.ts
    │       │   │   ├── cookbook_output_parser.ts
    │       │   │   ├── get_started/
    │       │   │   │   ├── prompt.ts
    │       │   │   │   ├── llm_model.ts
    │       │   │   │   ├── rag.ts
    │       │   │   │   ├── chat_model.ts
    │       │   │   │   ├── basic.ts
    │       │   │   │   └── output_parser.ts
    │       │   │   ├── with_listeners.ts
    │       │   │   ├── runnable_maps_basic.ts
    │       │   │   ├── cookbook_function_call.ts
    │       │   │   ├── cookbook_stop_sequence.ts
    │       │   │   ├── how_to_routing_custom_function.ts
    │       │   │   ├── cookbook_basic.ts
    │       │   │   ├── cookbook_retriever.ts
    │       │   │   ├── how_to_routing_semantic_similarity.ts
    │       │   │   ├── interface_batch.ts
    │       │   │   └── cookbook_memory.ts
    │       │   ├── fallbacks/
    │       │   │   ├── long_inputs.ts
    │       │   │   ├── chain.ts
    │       │   │   ├── model.ts
    │       │   │   └── better_model.ts
    │       │   ├── conversational_retrieval/
    │       │   │   └── agent.ts
    │       │   ├── debugging/
    │       │   │   ├── simple_agent.ts
    │       │   │   ├── simple_agent_verbose_some.ts
    │       │   │   └── simple_agent_verbose.ts
    │       │   ├── evaluation/
    │       │   │   ├── comparision_evaluator/
    │       │   │   │   ├── pairwise_string_custom_criteria.ts
    │       │   │   │   ├── pairwise_embedding_distance.ts
    │       │   │   │   ├── pairwise_string_custom_llm.ts
    │       │   │   │   ├── pairwise_string_without_reference.ts
    │       │   │   │   ├── pairwise_string_custom_prompt.ts
    │       │   │   │   └── pairwise_string_with_reference.ts
    │       │   │   ├── string/
    │       │   │   │   ├── custom_criteria.ts
    │       │   │   │   ├── criteria_with_reference.ts
    │       │   │   │   ├── configuring_criteria_llm.ts
    │       │   │   │   ├── configuring_criteria_prompt.ts
    │       │   │   │   ├── constitutional_criteria.ts
    │       │   │   │   ├── embedding_distance.ts
    │       │   │   │   └── criteria_without_reference.ts
    │       │   │   ├── agent_trajectory/
    │       │   │   │   └── trajectory.ts
    │       │   │   └── examples/
    │       │   │       └── comparisons.ts
    │       │   ├── langsmith/
    │       │   │   └── eval_walkthrough.ts
    │       │   └── migrating.ts
    │       ├── README.md
    │       ├── retrievers/
    │       │   ├── embeddings_filter.ts
    │       │   ├── multi_query_custom.ts
    │       │   ├── dria.ts
    │       │   ├── vespa.ts
    │       │   ├── tavily.ts
    │       │   ├── weaviate_self_query.ts
    │       │   ├── kendra.ts
    │       │   ├── chaindesk.ts
    │       │   ├── hyde.ts
    │       │   ├── supabase_hybrid.ts
    │       │   ├── memory_self_query.ts
    │       │   ├── multi_vector_small_chunks.ts
    │       │   ├── zep_cloud.ts
    │       │   ├── metal.ts
    │       │   ├── supabase_self_query.ts
    │       │   ├── parent_document_retriever.ts
    │       │   ├── time-weighted-retriever.ts
    │       │   ├── pinecone_self_query.ts
    │       │   ├── ensemble_retriever.ts
    │       │   ├── arxiv.ts
    │       │   ├── hnswlib_self_query.ts
    │       │   ├── amazon_knowledge_bases.ts
    │       │   ├── zep.ts
    │       │   ├── custom.ts
    │       │   ├── document_compressor_pipeline.ts
    │       │   ├── contextual_compression.ts
    │       │   ├── multi_query.ts
    │       │   ├── multi_vector_summary.ts
    │       │   ├── qdrant_self_query.ts
    │       │   ├── exa.ts
    │       │   ├── multi_vector_hypothetical.ts
    │       │   ├── similarity_score_threshold.ts
    │       │   ├── parent_document_retriever_score_threshold.ts
    │       │   ├── matryoshka_retriever.ts
    │       │   ├── chroma_self_query.ts
    │       │   ├── parent_document_retriever_rerank.ts
    │       │   ├── parent_document_retriever_chunk_header.ts
    │       │   └── vectara_self_query.ts
    │       ├── memory/
    │       │   ├── xata-advanced.ts
    │       │   ├── momento.ts
    │       │   ├── vector_store.ts
    │       │   ├── cloudflare_d1.ts
    │       │   ├── dynamodb-store.ts
    │       │   ├── chat_messages.ts
    │       │   ├── summary_buffer.ts
    │       │   ├── convex/
    │       │   │   ├── _generated/
    │       │   │   │   ├── api.d.ts
    │       │   │   │   ├── server.d.ts
    │       │   │   │   ├── server.js
    │       │   │   │   ├── dataModel.d.ts
    │       │   │   │   └── api.js
    │       │   │   └── convex.ts
    │       │   ├── firestore.ts
    │       │   ├── upstash_redis.ts
    │       │   ├── token_buffer.ts
    │       │   ├── entity.ts
    │       │   ├── mongodb.ts
    │       │   ├── postgres.ts
    │       │   ├── azure_cosmosdb_nosql.ts
    │       │   ├── summary_llm.ts
    │       │   ├── combined.ts
    │       │   ├── zep_cloud.ts
    │       │   ├── redis-sentinel.ts
    │       │   ├── buffer.ts
    │       │   ├── summary_chat.ts
    │       │   ├── planetscale.ts
    │       │   ├── redis-advanced.ts
    │       │   ├── zep.ts
    │       │   ├── astradb.ts
    │       │   ├── getting_started.ts
    │       │   ├── xata.ts
    │       │   ├── firestore_nested.ts
    │       │   ├── redis.ts
    │       │   ├── buffer_window.ts
    │       │   ├── cassandra-store.ts
    │       │   ├── upstash_redis_advanced.ts
    │       │   ├── motorhead.ts
    │       │   ├── entity_memory_inspection.ts
    │       │   ├── planetscale_advanced.ts
    │       │   └── file.ts
    │       ├── document_loaders/
    │       │   ├── imsdb.ts
    │       │   ├── unstructured.ts
    │       │   ├── browserbase.ts
    │       │   ├── text.ts
    │       │   ├── puppeteer_web.ts
    │       │   ├── college_confidential.ts
    │       │   ├── github_custom_instance.ts
    │       │   ├── puppeteer_screenshot_web.ts
    │       │   ├── srt.ts
    │       │   ├── s3.ts
    │       │   ├── example_data/
    │       │   │   ├── obsidian/
    │       │   │   │   ├── no_frontmatter.md
    │       │   │   │   ├── tags_and_frontmatter.md
    │       │   │   │   ├── bad_frontmatter.md
    │       │   │   │   ├── frontmatter.md
    │       │   │   │   └── no_metadata.md
    │       │   │   ├── notion.md
    │       │   │   ├── example.txt
    │       │   │   └── Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.srt
    │       │   ├── web_pdf.ts
    │       │   ├── unstructured_directory.ts
    │       │   ├── github.ts
    │       │   ├── apify_dataset_new.ts
    │       │   ├── assemblyai_subtitles.ts
    │       │   ├── serpapi.ts
    │       │   ├── openai_whisper_audio.ts
    │       │   ├── github_stream.ts
    │       │   ├── apify_dataset_existing.ts
    │       │   ├── figma.ts
    │       │   ├── airtable_load.ts
    │       │   ├── spider.ts
    │       │   ├── sitemap.ts
    │       │   ├── github_submodules.ts
    │       │   ├── pdf_directory.ts
    │       │   ├── ppt.ts
    │       │   ├── pdf.ts
    │       │   ├── parse_sitemap.ts
    │       │   ├── cheerio_web.ts
    │       │   ├── assemblyai_audio_transcription.ts
    │       │   ├── jira.ts
    │       │   ├── confluence.ts
    │       │   ├── firecrawl.ts
    │       │   ├── gitbook.ts
    │       │   ├── notionapi.ts
    │       │   ├── azure_blob_storage_file.ts
    │       │   ├── github_ignore_paths.ts
    │       │   ├── hn.ts
    │       │   ├── azure_blob_storage_container.ts
    │       │   ├── searchapi.ts
    │       │   ├── sonix_audio_transcription.ts
    │       │   ├── taskade.ts
    │       │   ├── obsidian.ts
    │       │   ├── sort_xyz_blockchain.ts
    │       │   ├── youtube.ts
    │       │   └── notion_markdown.ts
    │       ├── use_cases/
    │       │   ├── chatbots/
    │       │   │   ├── memory_management.ts
    │       │   │   ├── quickstart.ts
    │       │   │   ├── tool_usage.ts
    │       │   │   └── retrieval.ts
    │       │   ├── local_retrieval_qa/
    │       │   │   ├── qa_chain.ts
    │       │   │   ├── load_documents.ts
    │       │   │   └── chain.ts
    │       │   ├── human_in_the_loop/
    │       │   │   ├── helpers.ts
    │       │   │   └── accept-feedback.ts
    │       │   ├── advanced/
    │       │   │   ├── conversational_qa.ts
    │       │   │   └── violation_of_expectations_chain.ts
    │       │   ├── media/
    │       │   │   ├── audio.ts
    │       │   │   └── video.ts
    │       │   ├── query_analysis/
    │       │   │   └── quickstart/
    │       │   │       ├── load_yt_videos.ts
    │       │   │       ├── docs.ts
    │       │   │       ├── index_docs.ts
    │       │   │       └── metadata.ts
    │       │   ├── sql/
    │       │   │   ├── large_db_high_cardinality.ts
    │       │   │   ├── large_db.ts
    │       │   │   ├── quickstart_execute_sql.ts
    │       │   │   ├── query_checking.ts
    │       │   │   ├── quickstart_answer_question.ts
    │       │   │   ├── db.ts
    │       │   │   ├── quickstart_chain.ts
    │       │   │   ├── prompting/
    │       │   │   │   ├── list_dialects.ts
    │       │   │   │   ├── table_definitions.ts
    │       │   │   │   ├── few_shot.ts
    │       │   │   │   ├── examples.ts
    │       │   │   │   └── dynamic_few_shot.ts
    │       │   │   ├── db_check.ts
    │       │   │   └── agents/
    │       │   │       ├── high_cardinality_columns.ts
    │       │   │       ├── example_selector.ts
    │       │   │       ├── examples.ts
    │       │   │       └── index.ts
    │       │   └── youtube/
    │       │       ├── chat_with_podcast.ts
    │       │       └── podcast_summary.ts
    │       └── agents/
    │           ├── agent_cancellation.ts
    │           ├── xml_runnable.ts
    │           ├── custom_agent.ts
    │           ├── custom_llm_agent_chat.ts
    │           ├── tools.ts
    │           ├── openai_tools.ts
    │           ├── sql.ts
    │           ├── json.ts
    │           ├── react.ts
    │           ├── sql_sap_hana.ts
    │           ├── mrkl_with_tracing.ts
    │           ├── connery_mrkl.ts
    │           ├── quickstart.ts
    │           ├── plan_and_execute.ts
    │           ├── mrkl_browser.ts
    │           ├── stream_events.ts
    │           ├── openai_custom_prompt.ts
    │           ├── openai_runnable.ts
    │           ├── stagehand_ai_web_browser.ts
    │           ├── discord.ts
    │           ├── xml.ts
    │           ├── mrkl.ts
    │           ├── chat_convo_with_tracing_runnable.ts
    │           ├── custom_llm_agent.ts
    │           ├── chat_mrkl.ts
    │           ├── agent_callbacks.ts
    │           ├── mrkl_runnable.ts
    │           ├── openai_runnable_stream_log.ts
    │           ├── aiplugin-tool.ts
    │           ├── openai_runnable_with_memory.ts
    │           ├── openai_runnable_stream.ts
    │           ├── structured_chat_with_memory.ts
    │           ├── openai_functions.ts
    │           ├── streaming.ts
    │           ├── max_iterations.ts
    │           ├── structured_chat.ts
    │           ├── vectorstore.ts
    │           ├── concurrent_mrkl.ts
    │           ├── intermediate_steps.ts
    │           ├── agent_timeout.ts
    │           ├── chat_mrkl_with_tracing.ts
    │           ├── load_from_hub.ts
    │           ├── custom_llm_agent_runnable.ts
    │           ├── openapi.ts
    │           ├── custom_llm_agent_chat_runnable.ts
    │           ├── stream_intermediate_steps.ts
    │           ├── stream_log.ts
    │           ├── chat_convo_with_tracing.ts
    │           ├── aws_sfn.ts
    │           └── agent_structured.ts
    ├── SECURITY.md
    ├── turbo.json
    ├── langchain/
    │   ├── .env.example
    │   ├── jest.env.cjs
    │   ├── jest.config.cjs
    │   ├── .prettierrc
    │   ├── .prettierignore
    │   ├── scripts/
    │   │   └── jest-setup-after-env.js
    │   ├── .gitignore
    │   ├── babel.config.cjs
    │   ├── package.json
    │   ├── tsconfig.cjs.json
    │   ├── .release-it.json
    │   ├── turbo.json
    │   ├── LICENSE
    │   ├── tsconfig.json
    │   ├── .eslintrc.cjs
    │   ├── README.md
    │   ├── langchain.config.js
    │   └── src/
    │       ├── smith/
    │       │   ├── tests/
    │       │   │   ├── runner_utils.int.test.ts
    │       │   │   └── run_on_dataset.int.test.ts
    │       │   ├── progress.ts
    │       │   ├── config.ts
    │       │   ├── index.ts
    │       │   ├── name_generation.ts
    │       │   └── runner_utils.ts
    │       ├── tests/
    │       │   ├── hub.int.test.ts
    │       │   ├── text_splitter.test.ts
    │       │   ├── code_text_splitter.test.ts
    │       │   └── sql_database.int.test.ts
    │       ├── cache/
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   └── file_system.int.test.ts
    │       │   └── file_system.ts
    │       ├── embeddings/
    │       │   ├── fake.ts
    │       │   ├── tests/
    │       │   │   ├── fake.test.ts
    │       │   │   └── cache.test.ts
    │       │   └── cache_backed.ts
    │       ├── load/
    │       │   ├── map_keys.ts
    │       │   ├── tests/
    │       │   │   ├── data/
    │       │   │   │   └── important_imports.json
    │       │   │   ├── __snapshots__/
    │       │   │   │   └── load.test.ts.snap
    │       │   │   ├── cross_language.test.ts
    │       │   │   ├── load.int.test.ts
    │       │   │   └── load.test.ts
    │       │   ├── import_constants.ts
    │       │   ├── serializable.ts
    │       │   ├── index.ts
    │       │   ├── import_type.ts
    │       │   └── import_map.ts
    │       ├── evaluation/
    │       │   ├── types.ts
    │       │   ├── base.ts
    │       │   ├── embedding_distance/
    │       │   │   ├── base.ts
    │       │   │   ├── tests/
    │       │   │   │   └── embedding_distance_eval_chain.int.test.ts
    │       │   │   └── index.ts
    │       │   ├── loader.ts
    │       │   ├── qa/
    │       │   │   ├── prompt.ts
    │       │   │   ├── tests/
    │       │   │   │   └── eval_chain.int.test.ts
    │       │   │   ├── index.ts
    │       │   │   └── eval_chain.ts
    │       │   ├── criteria/
    │       │   │   ├── prompt.ts
    │       │   │   ├── tests/
    │       │   │   │   └── criteria_eval_chain.int.test.ts
    │       │   │   ├── index.ts
    │       │   │   └── criteria.ts
    │       │   ├── index.ts
    │       │   ├── comparison/
    │       │   │   ├── prompt.ts
    │       │   │   ├── tests/
    │       │   │   │   └── pairwise_eval_chain.int.test.ts
    │       │   │   ├── index.ts
    │       │   │   └── pairwise.ts
    │       │   └── agents/
    │       │       ├── prompt.ts
    │       │       ├── tests/
    │       │       │   └── trajectory_eval_chain.int.test.ts
    │       │       ├── index.ts
    │       │       └── trajectory.ts
    │       ├── chat_models/
    │       │   ├── tests/
    │       │   │   └── universal.int.test.ts
    │       │   └── universal.ts
    │       ├── tools/
    │       │   ├── dynamic.ts
    │       │   ├── base.ts
    │       │   ├── sql.ts
    │       │   ├── json.ts
    │       │   ├── tests/
    │       │   │   ├── chain.test.ts
    │       │   │   ├── webbrowser.test.ts
    │       │   │   └── webbrowser.int.test.ts
    │       │   ├── chain.ts
    │       │   ├── fixtures/
    │       │   │   └── wordoftheday.html
    │       │   ├── retriever.ts
    │       │   ├── requests.ts
    │       │   ├── convert_to_openai.ts
    │       │   ├── vectorstore.ts
    │       │   ├── index.ts
    │       │   ├── fs.ts
    │       │   ├── webbrowser.ts
    │       │   └── render.ts
    │       ├── callbacks/
    │       │   ├── promises.ts
    │       │   ├── handlers/
    │       │   │   ├── tracer.ts
    │       │   │   ├── run_collector.ts
    │       │   │   ├── console.ts
    │       │   │   └── tracer_langchain.ts
    │       │   └── index.ts
    │       ├── experimental/
    │       │   ├── masking/
    │       │   │   ├── types.ts
    │       │   │   ├── tests/
    │       │   │   │   ├── masking.test.ts
    │       │   │   │   └── masking-extended.test.ts
    │       │   │   ├── parser.ts
    │       │   │   ├── regex_masking_transformer.ts
    │       │   │   ├── index.ts
    │       │   │   └── transformer.ts
    │       │   ├── autogpt/
    │       │   │   ├── prompt.ts
    │       │   │   ├── tests/
    │       │   │   │   ├── prompt.test.ts
    │       │   │   │   ├── output_parser.test.ts
    │       │   │   │   └── prompt_generator.test.ts
    │       │   │   ├── prompt_generator.ts
    │       │   │   ├── output_parser.ts
    │       │   │   ├── schema.ts
    │       │   │   ├── index.ts
    │       │   │   └── agent.ts
    │       │   ├── openai_files/
    │       │   │   ├── tests/
    │       │   │   │   ├── openai_file.int.test.ts
    │       │   │   │   └── test.jsonl
    │       │   │   └── index.ts
    │       │   ├── chains/
    │       │   │   ├── tests/
    │       │   │   │   └── violation_of_expectations_chain.int.test.ts
    │       │   │   └── violation_of_expectations/
    │       │   │       ├── types.ts
    │       │   │       ├── violation_of_expectations_prompt.ts
    │       │   │       ├── violation_of_expectations_chain.ts
    │       │   │       └── index.ts
    │       │   ├── plan_and_execute/
    │       │   │   ├── prompt.ts
    │       │   │   ├── base.ts
    │       │   │   ├── tests/
    │       │   │   │   └── plan_and_execute.int.test.ts
    │       │   │   ├── outputParser.ts
    │       │   │   ├── index.ts
    │       │   │   └── agent_executor.ts
    │       │   ├── prompts/
    │       │   │   ├── handlebars.ts
    │       │   │   ├── tests/
    │       │   │   │   └── handlebars.test.ts
    │       │   │   └── custom_format.ts
    │       │   ├── openai_assistant/
    │       │   │   ├── tests/
    │       │   │   │   └── openai_assistant.int.test.ts
    │       │   │   ├── schema.ts
    │       │   │   └── index.ts
    │       │   ├── babyagi/
    │       │   │   ├── task_prioritization.ts
    │       │   │   ├── task_execution.ts
    │       │   │   ├── task_creation.ts
    │       │   │   ├── index.ts
    │       │   │   └── agent.ts
    │       │   └── generative_agents/
    │       │       ├── tests/
    │       │       │   └── generative_agent.int.test.ts
    │       │       ├── generative_agent.ts
    │       │       ├── generative_agent_memory.ts
    │       │       └── index.ts
    │       ├── chains/
    │       │   ├── api/
    │       │   │   ├── prompts.ts
    │       │   │   └── api_chain.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── retrieval_chain.test.ts
    │       │   │   ├── sequential_chain.test.ts
    │       │   │   ├── history_aware_retriever.int.test.ts
    │       │   │   ├── example_data/
    │       │   │   │   └── open_meteo_docs.ts
    │       │   │   ├── conversation_chain.int.test.ts
    │       │   │   ├── simple_sequential_chain.int.test.ts
    │       │   │   ├── history_aware_retriever.test.ts
    │       │   │   ├── sql_db_chain.int.test.ts
    │       │   │   ├── api_chain.int.test.ts
    │       │   │   ├── combine_docs_chain.int.test.ts
    │       │   │   ├── combine_docs_chain.test.ts
    │       │   │   ├── retrieval_chain.int.test.ts
    │       │   │   ├── vector_db_qa_chain.int.test.ts
    │       │   │   ├── llm_chain.int.test.ts
    │       │   │   ├── constitutional_chain.int.test.ts
    │       │   │   ├── transform.test.ts
    │       │   │   ├── constitutional_chain.test.ts
    │       │   │   ├── sequential_chain.int.test.ts
    │       │   │   ├── conversational_retrieval_chain.int.test.ts
    │       │   │   ├── simple_sequential_chain.test.ts
    │       │   │   └── openai_moderation.int.test.ts
    │       │   ├── conversational_retrieval_chain.ts
    │       │   ├── openai_functions/
    │       │   │   ├── structured_output.ts
    │       │   │   ├── base.ts
    │       │   │   ├── tests/
    │       │   │   │   ├── extraction.int.test.ts
    │       │   │   │   ├── structured_output.int.test.ts
    │       │   │   │   ├── tagging.int.test.ts
    │       │   │   │   ├── create_runnable_chains.int.test.ts
    │       │   │   │   ├── structured_output.test.ts
    │       │   │   │   ├── openapi.int.test.ts
    │       │   │   │   └── openapi.test.ts
    │       │   │   ├── tagging.ts
    │       │   │   ├── extraction.ts
    │       │   │   ├── index.ts
    │       │   │   └── openapi.ts
    │       │   ├── vector_db_qa.ts
    │       │   ├── sequential_chain.ts
    │       │   ├── combine_documents/
    │       │   │   ├── base.ts
    │       │   │   ├── reduce.ts
    │       │   │   ├── index.ts
    │       │   │   └── stuff.ts
    │       │   ├── retrieval_qa.ts
    │       │   ├── question_answering/
    │       │   │   ├── tests/
    │       │   │   │   └── load.int.test.ts
    │       │   │   ├── map_reduce_prompts.ts
    │       │   │   ├── refine_prompts.ts
    │       │   │   ├── load.ts
    │       │   │   └── stuff_prompts.ts
    │       │   ├── summarization/
    │       │   │   ├── tests/
    │       │   │   │   └── load.int.test.ts
    │       │   │   ├── refine_prompts.ts
    │       │   │   ├── load.ts
    │       │   │   └── stuff_prompts.ts
    │       │   ├── serde.ts
    │       │   ├── history_aware_retriever.ts
    │       │   ├── query_constructor/
    │       │   │   ├── prompt.ts
    │       │   │   ├── tests/
    │       │   │   │   ├── query_chain.int.test.ts
    │       │   │   │   └── query_parser.test.ts
    │       │   │   ├── parser.ts
    │       │   │   ├── index.ts
    │       │   │   └── ir.ts
    │       │   ├── combine_docs_chain.ts
    │       │   ├── retrieval.ts
    │       │   ├── sql_db/
    │       │   │   ├── sql_db_chain.ts
    │       │   │   ├── index.ts
    │       │   │   └── sql_db_prompt.ts
    │       │   ├── analyze_documents_chain.ts
    │       │   ├── conversation.ts
    │       │   ├── index.ts
    │       │   ├── constitutional_ai/
    │       │   │   ├── constitutional_principle.ts
    │       │   │   ├── constitutional_chain.ts
    │       │   │   └── constitutional_prompts.ts
    │       │   ├── transform.ts
    │       │   ├── load.ts
    │       │   ├── openai_moderation.ts
    │       │   ├── router/
    │       │   │   ├── tests/
    │       │   │   │   ├── multi_retrieval_qa.int.test.ts
    │       │   │   │   ├── multi_prompt.test.ts
    │       │   │   │   ├── multi_prompt.int.test.ts
    │       │   │   │   └── multi_retrieval_qa.test.ts
    │       │   │   ├── multi_retrieval_qa.ts
    │       │   │   ├── multi_retrieval_prompt.ts
    │       │   │   ├── multi_route.ts
    │       │   │   ├── multi_prompt_prompt.ts
    │       │   │   ├── utils.ts
    │       │   │   ├── multi_prompt.ts
    │       │   │   └── llm_router.ts
    │       │   ├── llm_chain.ts
    │       │   ├── graph_qa/
    │       │   │   ├── cypher.ts
    │       │   │   └── prompts.ts
    │       │   └── chat_vector_db_chain.ts
    │       ├── prompts/
    │       │   ├── prompt.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── prompts/
    │       │   │   │   └── hello_world.yaml
    │       │   │   └── selectors.test.ts
    │       │   ├── pipeline.ts
    │       │   ├── serde.ts
    │       │   ├── chat.ts
    │       │   ├── few_shot.ts
    │       │   ├── index.ts
    │       │   ├── template.ts
    │       │   └── selectors/
    │       │       ├── SemanticSimilarityExampleSelector.ts
    │       │       ├── LengthBasedExampleSelector.ts
    │       │       └── conditional.ts
    │       ├── document_transformers/
    │       │   ├── tests/
    │       │   │   └── openai_functions.int.test.ts
    │       │   └── openai_functions.ts
    │       ├── text_splitter.ts
    │       ├── vectorstores/
    │       │   ├── tests/
    │       │   │   └── memory.test.ts
    │       │   └── memory.ts
    │       ├── index.ts
    │       ├── output_parsers/
    │       │   ├── combining.ts
    │       │   ├── openai_tools.ts
    │       │   ├── json.ts
    │       │   ├── tests/
    │       │   │   ├── combining.test.ts
    │       │   │   ├── combining.int.test.ts
    │       │   │   ├── structured.test.ts
    │       │   │   ├── datetime.test.ts
    │       │   │   ├── http_response.test.ts
    │       │   │   ├── openai_functions.int.test.ts
    │       │   │   ├── openai_tools.int.test.ts
    │       │   │   ├── structured.int.test.ts
    │       │   │   ├── list.test.ts
    │       │   │   └── expression.test.ts
    │       │   ├── regex.ts
    │       │   ├── expression.ts
    │       │   ├── structured.ts
    │       │   ├── expression_type_handlers/
    │       │   │   ├── identifier_handler.ts
    │       │   │   ├── types.ts
    │       │   │   ├── base.ts
    │       │   │   ├── property_assignment_handler.ts
    │       │   │   ├── array_literal_expression_handler.ts
    │       │   │   ├── object_literal_expression_handler.ts
    │       │   │   ├── boolean_literal_handler.ts
    │       │   │   ├── member_expression_handler.ts
    │       │   │   ├── numeric_literal_handler.ts
    │       │   │   ├── grammar/
    │       │   │   │   └── parser_grammar.ts
    │       │   │   ├── call_expression_handler.ts
    │       │   │   ├── string_literal_handler.ts
    │       │   │   └── factory.ts
    │       │   ├── datetime.ts
    │       │   ├── prompts.ts
    │       │   ├── router.ts
    │       │   ├── openai_functions.ts
    │       │   ├── http_response.ts
    │       │   ├── fix.ts
    │       │   ├── index.ts
    │       │   ├── list.ts
    │       │   └── noop.ts
    │       ├── indexes/
    │       │   └── index.ts
    │       ├── schema/
    │       │   ├── query_constructor.ts
    │       │   └── prompt_template.ts
    │       ├── util/
    │       │   ├── ml-distance-euclidean/
    │       │   │   ├── euclidean.ts
    │       │   │   └── LICENSE
    │       │   ├── prompt-layer.ts
    │       │   ├── types.ts
    │       │   ├── tests/
    │       │   │   ├── set.test.ts
    │       │   │   ├── async_caller.int.test.ts
    │       │   │   ├── openai-stream.test.ts
    │       │   │   ├── azure.test.ts
    │       │   │   └── sql_utils.test.ts
    │       │   ├── stream.ts
    │       │   ├── axios-types.ts
    │       │   ├── extname.ts
    │       │   ├── sql_utils.ts
    │       │   ├── set.ts
    │       │   ├── testing/
    │       │   │   ├── tools/
    │       │   │   │   ├── serpapi.ts
    │       │   │   │   ├── calculator.ts
    │       │   │   │   └── tavily_search.ts
    │       │   │   └── llms/
    │       │   │       └── fake.ts
    │       │   ├── time.ts
    │       │   ├── azure.ts
    │       │   ├── axios-fetch-adapter.d.ts
    │       │   ├── env.ts
    │       │   ├── tiktoken.ts
    │       │   ├── axios-fetch-adapter.js
    │       │   ├── load.ts
    │       │   ├── openapi.ts
    │       │   ├── math.ts
    │       │   ├── async_caller.ts
    │       │   ├── ml-distance/
    │       │   │   ├── similarities.ts
    │       │   │   ├── distances.ts
    │       │   │   └── LICENSE
    │       │   ├── document.ts
    │       │   ├── event-source-parse.ts
    │       │   ├── parse.ts
    │       │   ├── entrypoint_deprecation.ts
    │       │   └── hub.ts
    │       ├── stores/
    │       │   ├── message/
    │       │   │   ├── utils.ts
    │       │   │   └── in_memory.ts
    │       │   ├── doc/
    │       │   │   ├── base.ts
    │       │   │   └── in_memory.ts
    │       │   └── file/
    │       │       ├── node.ts
    │       │       ├── base.ts
    │       │       └── in_memory.ts
    │       ├── runnables/
    │       │   └── remote.ts
    │       ├── storage/
    │       │   ├── tests/
    │       │   │   └── file_system.test.ts
    │       │   ├── file_system.ts
    │       │   ├── encoder_backed.ts
    │       │   └── in_memory.ts
    │       ├── retrievers/
    │       │   ├── tests/
    │       │   │   ├── chain_extract.int.test.ts
    │       │   │   ├── score_threshold.int.test.ts
    │       │   │   ├── ensemble_retriever.int.test.ts
    │       │   │   ├── hyde.int.test.ts
    │       │   │   ├── matryoshka_retriever.int.test.ts
    │       │   │   ├── time_weighted.test.ts
    │       │   │   ├── vectorstores.test.ts
    │       │   │   ├── multi_query.int.test.ts
    │       │   │   └── parent_document.int.test.ts
    │       │   ├── self_query/
    │       │   │   ├── base.ts
    │       │   │   ├── tests/
    │       │   │   │   └── memory_self_query.int.test.ts
    │       │   │   ├── index.ts
    │       │   │   └── functional.ts
    │       │   ├── time_weighted.ts
    │       │   ├── hyde.ts
    │       │   ├── multi_vector.ts
    │       │   ├── document_compressors/
    │       │   │   ├── embeddings_filter.ts
    │       │   │   ├── chain_extract_prompt.ts
    │       │   │   ├── test/
    │       │   │   │   └── document_compressor.int.test.ts
    │       │   │   ├── chain_extract.ts
    │       │   │   └── index.ts
    │       │   ├── parent_document.ts
    │       │   ├── ensemble.ts
    │       │   ├── score_threshold.ts
    │       │   ├── contextual_compression.ts
    │       │   ├── multi_query.ts
    │       │   └── matryoshka_retriever.ts
    │       ├── memory/
    │       │   ├── chat_memory.ts
    │       │   ├── prompt.ts
    │       │   ├── vector_store.ts
    │       │   ├── buffer_token_memory.ts
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── combined_memory.int.test.ts
    │       │   │   ├── buffer_memory.test.ts
    │       │   │   ├── buffer_window_memory.test.ts
    │       │   │   ├── entity_memory.test.ts
    │       │   │   ├── summary_buffer.int.test.ts
    │       │   │   ├── buffer_token_memory.int.test.ts
    │       │   │   ├── vector_store_memory.int.test.ts
    │       │   │   ├── entity_memory.int.test.ts
    │       │   │   └── summary.int.test.ts
    │       │   ├── summary_buffer.ts
    │       │   ├── combined_memory.ts
    │       │   ├── entity_memory.ts
    │       │   ├── index.ts
    │       │   ├── stores/
    │       │   │   └── entity/
    │       │   │       ├── base.ts
    │       │   │       └── in_memory.ts
    │       │   ├── summary.ts
    │       │   ├── buffer_memory.ts
    │       │   └── buffer_window_memory.ts
    │       ├── document_loaders/
    │       │   ├── base.ts
    │       │   ├── tests/
    │       │   │   ├── example_data/
    │       │   │   │   ├── complex.json
    │       │   │   │   ├── Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.jsonl
    │       │   │   │   ├── Star_Wars_The_Clone_Wars_S06E07_Crisis_at_the_Heart.json
    │       │   │   │   └── example.txt
    │       │   │   ├── jsonl.test.ts
    │       │   │   ├── jsonl-blob.test.ts
    │       │   │   ├── json.test.ts
    │       │   │   ├── json-blob.test.ts
    │       │   │   ├── text-blob.test.ts
    │       │   │   ├── multi_file.test.ts
    │       │   │   ├── text.test.ts
    │       │   │   └── directory.test.ts
    │       │   └── fs/
    │       │       ├── text.ts
    │       │       ├── json.ts
    │       │       ├── buffer.ts
    │       │       ├── multi_file.ts
    │       │       └── directory.ts
    │       ├── document.ts
    │       ├── sql_db.ts
    │       ├── agents/
    │       │   ├── xml/
    │       │   │   ├── prompt.ts
    │       │   │   ├── output_parser.ts
    │       │   │   └── index.ts
    │       │   ├── types.ts
    │       │   ├── chat_convo/
    │       │   │   ├── prompt.ts
    │       │   │   ├── outputParser.ts
    │       │   │   └── index.ts
    │       │   ├── tests/
    │       │   │   ├── chat_convo_output_parser.test.ts
    │       │   │   ├── sql.test.ts
    │       │   │   ├── create_xml_agent.int.test.ts
    │       │   │   ├── agent.int.test.ts
    │       │   │   ├── structured_chat_output_parser.test.ts
    │       │   │   ├── create_tool_calling_agent.int.test.ts
    │       │   │   ├── json.test.ts
    │       │   │   ├── runnable.int.test.ts
    │       │   │   ├── react.test.ts
    │       │   │   ├── create_react_agent.int.test.ts
    │       │   │   ├── structured_output_runnables.int.test.ts
    │       │   │   ├── create_structured_chat_agent.int.test.ts
    │       │   │   ├── create_openai_tools_agent.int.test.ts
    │       │   │   ├── create_openai_functions_agent.int.test.ts
    │       │   │   └── structured_chat_output_parser_with_retries.int.test.ts
    │       │   ├── structured_chat/
    │       │   │   ├── prompt.ts
    │       │   │   ├── outputParser.ts
    │       │   │   └── index.ts
    │       │   ├── openai_functions/
    │       │   │   ├── prompt.ts
    │       │   │   ├── output_parser.ts
    │       │   │   └── index.ts
    │       │   ├── helpers.ts
    │       │   ├── react/
    │       │   │   ├── prompt.ts
    │       │   │   ├── output_parser.ts
    │       │   │   └── index.ts
    │       │   ├── openai_tools/
    │       │   │   ├── output_parser.ts
    │       │   │   └── index.ts
    │       │   ├── openai/
    │       │   │   └── output_parser.ts
    │       │   ├── executor.ts
    │       │   ├── toolkits/
    │       │   │   ├── base.ts
    │       │   │   ├── tests/
    │       │   │   │   └── conversational_retrieval.int.test.ts
    │       │   │   ├── conversational_retrieval/
    │       │   │   │   ├── tool.ts
    │       │   │   │   ├── token_buffer_memory.ts
    │       │   │   │   └── openai_functions.ts
    │       │   │   ├── json/
    │       │   │   │   ├── prompt.ts
    │       │   │   │   └── json.ts
    │       │   │   ├── openapi/
    │       │   │   │   ├── prompt.ts
    │       │   │   │   └── openapi.ts
    │       │   │   ├── index.ts
    │       │   │   ├── vectorstore/
    │       │   │   │   ├── prompt.ts
    │       │   │   │   └── vectorstore.ts
    │       │   │   └── sql/
    │       │   │       ├── prompt.ts
    │       │   │       ├── sql.ts
    │       │   │       └── index.ts
    │       │   ├── format_scratchpad/
    │       │   │   ├── openai_tools.ts
    │       │   │   ├── log.ts
    │       │   │   ├── log_to_message.ts
    │       │   │   ├── xml.ts
    │       │   │   ├── openai_functions.ts
    │       │   │   └── tool_calling.ts
    │       │   ├── mrkl/
    │       │   │   ├── prompt.ts
    │       │   │   ├── outputParser.ts
    │       │   │   └── index.ts
    │       │   ├── index.ts
    │       │   ├── chat/
    │       │   │   ├── prompt.ts
    │       │   │   ├── outputParser.ts
    │       │   │   └── index.ts
    │       │   ├── initialize.ts
    │       │   ├── load.ts
    │       │   ├── agent.ts
    │       │   └── tool_calling/
    │       │       ├── output_parser.ts
    │       │       └── index.ts
    │       ├── hub.ts
    │       └── types/
    │           ├── expression-parser.d.ts
    │           ├── pdf-parse.d.ts
    │           └── type-utils.ts
    ├── tsconfig.json
    └── README.md


Files Content:

(Files content cropped to 300k characters, download full ingest to see more)
================================================
File: /README.md
================================================
# 🦜️🔗 LangChain.js

⚡ Building applications with LLMs through composability ⚡

[![CI](https://github.com/langchain-ai/langchainjs/actions/workflows/ci.yml/badge.svg)](https://github.com/langchain-ai/langchainjs/actions/workflows/ci.yml) ![npm](https://img.shields.io/npm/dm/langchain) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/langchainai.svg?style=social&label=Follow%20%40LangChainAI)](https://twitter.com/langchainai)  [![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/langchain-ai/langchainjs)
[<img src="https://github.com/codespaces/badge.svg" title="Open in Github Codespace" width="150" height="20">](https://codespaces.new/langchain-ai/langchainjs)

Looking for the Python version? Check out [LangChain](https://github.com/langchain-ai/langchain).

To help you ship LangChain apps to production faster, check out [LangSmith](https://smith.langchain.com).
[LangSmith](https://smith.langchain.com) is a unified developer platform for building, testing, and monitoring LLM applications.

## ⚡️ Quick Install

You can use npm, yarn, or pnpm to install LangChain.js

`npm install -S langchain` or `yarn add langchain` or `pnpm add langchain`

## 🌐 Supported Environments

LangChain is written in TypeScript and can be used in:

- Node.js (ESM and CommonJS) - 18.x, 19.x, 20.x, 22.x
- Cloudflare Workers
- Vercel / Next.js (Browser, Serverless and Edge functions)
- Supabase Edge Functions
- Browser
- Deno

## 🤔 What is LangChain?

**LangChain** is a framework for developing applications powered by language models. It enables applications that:
- **Are context-aware**: connect a language model to sources of context (prompt instructions, few shot examples, content to ground its response in, etc.)
- **Reason**: rely on a language model to reason (about how to answer based on provided context, what actions to take, etc.)

This framework consists of several parts.
- **Open-source libraries**: Build your applications using LangChain's open-source [building blocks](https://js.langchain.com/docs/concepts/lcel), [components](https://js.langchain.com/docs/concepts), and [third-party integrations](https://js.langchain.com/docs/integrations/platforms/).
Use [LangGraph.js](https://js.langchain.com/docs/concepts/#langgraphjs) to build stateful agents with first-class streaming and human-in-the-loop support.
- **Productionization**: Use [LangSmith](https://docs.smith.langchain.com/) to inspect, monitor and evaluate your chains, so that you can continuously optimize and deploy with confidence.
- **Deployment**: Turn your LangGraph applications into production-ready APIs and Assistants with [LangGraph Cloud](https://langchain-ai.github.io/langgraph/cloud/).

The LangChain libraries themselves are made up of several different packages.
- **[`@langchain/core`](https://github.com/langchain-ai/langchainjs/blob/main/langchain-core)**: Base abstractions and LangChain Expression Language.
- **[`@langchain/community`](https://github.com/langchain-ai/langchainjs/blob/main/libs/langchain-community)**: Third party integrations.
- **[`langchain`](https://github.com/langchain-ai/langchainjs/blob/main/langchain)**: Chains, agents, and retrieval strategies that make up an application's cognitive architecture.
- **[LangGraph.js](https://langchain-ai.github.io/langgraphjs/)**: A library for building robust and stateful multi-actor applications with LLMs by modeling steps as edges and nodes in a graph. Integrates smoothly with LangChain, but can be used without it.

Integrations may also be split into their own compatible packages.

![LangChain Stack](https://github.com/langchain-ai/langchainjs/blob/main/docs/core_docs/static/svg/langchain_stack_062024.svg)

This library aims to assist in the development of those types of applications. Common examples of these applications include:

**❓Question Answering over specific documents**

- [Documentation](https://js.langchain.com/docs/tutorials/rag/)
- End-to-end Example: [Doc-Chatbot](https://github.com/dissorial/doc-chatbot)

**💬 Chatbots**

- [Documentation](https://js.langchain.com/docs/tutorials/chatbot)
- End-to-end Example: [Chat-LangChain](https://github.com/langchain-ai/chat-langchain)

## 🚀 How does LangChain help?

The main value props of the LangChain libraries are:
1. **Components**: composable tools and integrations for working with language models. Components are modular and easy-to-use, whether you are using the rest of the LangChain framework or not
2. **Off-the-shelf chains**: built-in assemblages of components for accomplishing higher-level tasks

Off-the-shelf chains make it easy to get started. Components make it easy to customize existing chains and build new ones. 

Components fall into the following **modules**:

**📃 Model I/O:**

This includes prompt management, prompt optimization, a generic interface for all LLMs, and common utilities for working with LLMs.

**📚 Retrieval:**

Data Augmented Generation involves specific types of chains that first interact with an external data source to fetch data for use in the generation step. Examples include summarization of long pieces of text and question/answering over specific data sources.

**🤖 Agents:**

Agents allow an LLM autonomy over how a task is accomplished. Agents make decisions about which Actions to take, then take that Action, observe the result, and repeat until the task is complete. LangChain provides a [standard interface for agents](https://js.langchain.com/docs/concepts/#agents), along with [LangGraph.js](https://github.com/langchain-ai/langgraphjs/) for building custom agents.

## 📖 Documentation

Please see [here](https://js.langchain.com) for full documentation, which includes:

- [Getting started](https://js.langchain.com/docs/introduction): installation, setting up the environment, simple examples
- Overview of the [interfaces](https://js.langchain.com/docs/how_to/lcel_cheatsheet/), [modules](https://js.langchain.com/docs/concepts) and [integrations](https://js.langchain.com/docs/integrations/platforms/)
- [Tutorial](https://js.langchain.com/docs/tutorials/) walkthroughs
- [Reference](https://api.js.langchain.com): full API docs

## 💁 Contributing

As an open-source project in a rapidly developing field, we are extremely open to contributions, whether it be in the form of a new feature, improved infrastructure, or better documentation.

For detailed information on how to contribute, see [here](https://github.com/langchain-ai/langchainjs/blob/main/CONTRIBUTING.md).

Please report any security issues or concerns following our [security guidelines](https://github.com/langchain-ai/langchainjs/blob/main/SECURITY.md).

## 🖇️ Relationship with Python LangChain

This is built to integrate as seamlessly as possible with the [LangChain Python package](https://github.com/langchain-ai/langchain). Specifically, this means all objects (prompts, LLMs, chains, etc) are designed in a way where they can be serialized and shared between languages.


================================================
File: /docs/core_docs/docs/how_to/routing.mdx
================================================
# How to route execution within a chain

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [LangChain Expression Language (LCEL)](/docs/concepts/lcel)
- [Chaining runnables](/docs/how_to/sequence/)
- [Configuring chain parameters at runtime](/docs/how_to/binding)
- [Prompt templates](/docs/concepts/prompt_templates)
- [Chat Messages](/docs/concepts/messages)

:::

This guide covers how to do routing in the LangChain Expression Language.

Routing allows you to create non-deterministic chains where the output of a previous step defines the next step. Routing helps provide structure and consistency around interactions with LLMs.

There are two ways to perform routing:

1. Conditionally return runnables from a [`RunnableLambda`](/docs/how_to/functions) (recommended)
2. Using a `RunnableBranch` (legacy)

We'll illustrate both methods using a two step sequence where the first step classifies an input question as being about LangChain, Anthropic, or Other, then routes to a corresponding prompt chain.

## Using a custom function

You can use a custom function to route between different outputs. Here's an example:

import CodeBlock from "@theme/CodeBlock";

import IntegrationInstallTooltip from "@mdx_components/integration_install_tooltip.mdx";

<IntegrationInstallTooltip></IntegrationInstallTooltip>

```bash npm2yarn
npm install @langchain/anthropic @langchain/core
```

import FactoryFunctionExample from "@examples/guides/expression_language/how_to_routing_custom_function.ts";

<CodeBlock language="typescript">{FactoryFunctionExample}</CodeBlock>

## Routing by semantic similarity

One especially useful technique is to use embeddings to route a query to the most relevant prompt. Here's an example:

import SemanticSimilarityExample from "@examples/guides/expression_language/how_to_routing_semantic_similarity.ts";

<CodeBlock language="typescript">{SemanticSimilarityExample}</CodeBlock>

## Using a RunnableBranch

A `RunnableBranch` is initialized with a list of (condition, runnable) pairs and a default runnable. It selects which branch by passing each condition the input it's invoked with. It selects the first condition to evaluate to True, and runs the corresponding runnable to that condition with the input.

If no provided conditions match, it runs the default runnable.

Here's an example of what it looks like in action:

import BranchExample from "@examples/guides/expression_language/how_to_routing_runnable_branch.ts";

<CodeBlock language="typescript">{BranchExample}</CodeBlock>

## Next steps

You've now learned how to add routing to your composed LCEL chains.

Next, check out the other [how-to guides on runnables](/docs/how_to/#langchain-expression-language) in this section.


================================================
File: /docs/core_docs/docs/how_to/vectorstore_retriever.mdx
================================================
# How use a vector store to retrieve data

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [Vector stores](/docs/concepts/#vectorstores)
- [Retrievers](/docs/concepts/retrievers)
- [Text splitters](/docs/concepts/text_splitters)
- [Chaining runnables](/docs/how_to/sequence/)

:::

Vector stores can be converted into retrievers using the [`.asRetriever()`](https://api.js.langchain.com/classes/langchain_core.vectorstores.VectorStore.html#asRetriever) method, which allows you to more easily compose them in chains.

Below, we show a retrieval-augmented generation (RAG) chain that performs question answering over documents using the following steps:

1. Initialize an vector store
2. Create a retriever from that vector store
3. Compose a question answering chain
4. Ask questions!

Each of the steps has multiple sub steps and potential configurations, but we'll go through one common flow.
First, install the required dependency:

import CodeBlock from "@theme/CodeBlock";

import IntegrationInstallTooltip from "@mdx_components/integration_install_tooltip.mdx";

<IntegrationInstallTooltip></IntegrationInstallTooltip>

```bash npm2yarn
npm install @langchain/openai @langchain/core
```

You can download the `state_of_the_union.txt` file [here](https://github.com/langchain-ai/langchain/blob/master/docs/docs/modules/state_of_the_union.txt).

import RetrievalQAExample from "@examples/chains/retrieval_qa.ts";

<CodeBlock language="typescript">{RetrievalQAExample}</CodeBlock>

Let's walk through what's happening here.

1. We first load a long text and split it into smaller documents using a text splitter.
   We then load those documents (which also embeds the documents using the passed `OpenAIEmbeddings` instance) into HNSWLib, our vector store, creating our index.

2. Though we can query the vector store directly, we convert the vector store into a retriever to return retrieved documents in the right format for the question answering chain.

3. We initialize a retrieval chain, which we'll call later in step 4.

4. We ask questions!

## Next steps

You've now learned how to convert a vector store as a retriever.

See the individual sections for deeper dives on specific retrievers, the [broader tutorial on RAG](/docs/tutorials/rag), or this section to learn how to
[create your own custom retriever over any data source](/docs/how_to/custom_retriever/).


================================================
File: /docs/core_docs/docs/how_to/sql_large_db.mdx
================================================
# How to deal with large databases

:::info Prerequisites

This guide assumes familiarity with the following:

- [Question answering over SQL data](/docs/tutorials/sql_qa)

:::

In order to write valid queries against a database, we need to feed the model the table names, table schemas, and feature values for it to query over.
When there are many tables, columns, and/or high-cardinality columns, it becomes impossible for us to dump the full information about our database in every prompt.
Instead, we must find ways to dynamically insert into the prompt only the most relevant information. Let's take a look at some techniques for doing this.

## Setup

First, install the required packages and set your environment variables. This example will use OpenAI as the LLM.

```bash
npm install langchain @langchain/community @langchain/openai typeorm sqlite3
```

```bash
export OPENAI_API_KEY="your api key"
# Uncomment the below to use LangSmith. Not required.
# export LANGCHAIN_API_KEY="your api key"
# export LANGCHAIN_TRACING_V2=true

# Reduce tracing latency if you are not in a serverless environment
# export LANGCHAIN_CALLBACKS_BACKGROUND=true
```

The below example will use a SQLite connection with Chinook database. Follow these [installation steps](https://database.guide/2-sample-databases-sqlite/) to create `Chinook.db` in the same directory as this notebook:

- Save [this](https://raw.githubusercontent.com/lerocha/chinook-database/master/ChinookDatabase/DataSources/Chinook_Sqlite.sql) file as `Chinook_Sqlite.sql`
- Run sqlite3 `Chinook.db`
- Run `.read Chinook_Sqlite.sql`
- Test `SELECT * FROM Artist LIMIT 10;`

Now, `Chinhook.db` is in our directory and we can interface with it using the Typeorm-driven `SqlDatabase` class:

import CodeBlock from "@theme/CodeBlock";
import DbCheck from "@examples/use_cases/sql/db_check.ts";

<CodeBlock language="typescript">{DbCheck}</CodeBlock>

## Many tables

One of the main pieces of information we need to include in our prompt is the schemas of the relevant tables.
When we have very many tables, we can't fit all of the schemas in a single prompt.
What we can do in such cases is first extract the names of the tables related to the user input, and then include only their schemas.

One easy and reliable way to do this is using OpenAI function-calling and Zod models. LangChain comes with a built-in `createExtractionChainZod` chain that lets us do just this:

import LargeDbExample from "@examples/use_cases/sql/large_db.ts";

<CodeBlock language="typescript">{LargeDbExample}</CodeBlock>

We've seen how to dynamically include a subset of table schemas in a prompt within a chain.
Another possible approach to this problem is to let an Agent decide for itself when to look up tables by giving it a Tool to do so.

## High-cardinality columns

High-cardinality refers to columns in a database that have a vast range of unique values.
These columns are characterized by a high level of uniqueness in their data entries, such as individual names, addresses, or product serial numbers.
High-cardinality data can pose challenges for indexing and querying, as it requires more sophisticated strategies to efficiently filter and retrieve specific entries.

In order to filter columns that contain proper nouns such as addresses, song names or artists, we first need to double-check the spelling in order to filter the data correctly.

One naive strategy it to create a vector store with all the distinct proper nouns that exist in the database.
We can then query that vector store each user input and inject the most relevant proper nouns into the prompt.

First we need the unique values for each entity we want, for which we define a function that parses the result into a list of elements:

import HighCardinalityExample from "@examples/use_cases/sql/large_db_high_cardinality.ts";

<CodeBlock language="typescript">{HighCardinalityExample}</CodeBlock>

We can see that with retrieval we're able to correct the spelling and get back a valid result.

Another possible approach to this problem is to let an Agent decide for itself when to look up proper nouns.

## Next steps

You've now learned about some prompting strategies to improve SQL generation.

Next, check out some of the other guides in this section, like [how to validate queries](/docs/how_to/sql_query_checking).
You might also be interested in the query analysis guide [on handling high cardinality](/docs/how_to/query_high_cardinality).


================================================
File: /docs/core_docs/docs/how_to/document_loader_csv.mdx
================================================
# How to load CSV data

> A [comma-separated values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values) file is a delimited text file that uses a comma to separate values. Each line of the file is a data record. Each record consists of one or more fields, separated by commas.

Load CSV data with a single row per document.

## Setup

```bash npm2yarn
npm install d3-dsv@2
```

## Usage, extracting all columns

Example CSV file:

```csv
id,text
1,This is a sentence.
2,This is another sentence.
```

Example code:

```typescript
import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";

const loader = new CSVLoader("src/document_loaders/example_data/example.csv");

const docs = await loader.load();
/*
[
  Document {
    "metadata": {
      "line": 1,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "id: 1
text: This is a sentence.",
  },
  Document {
    "metadata": {
      "line": 2,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "id: 2
text: This is another sentence.",
  },
]
*/
```

## Usage, extracting a single column

Example CSV file:

```csv
id,text
1,This is a sentence.
2,This is another sentence.
```

Example code:

```typescript
import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";

const loader = new CSVLoader(
  "src/document_loaders/example_data/example.csv",
  "text"
);

const docs = await loader.load();
/*
[
  Document {
    "metadata": {
      "line": 1,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "This is a sentence.",
  },
  Document {
    "metadata": {
      "line": 2,
      "source": "src/document_loaders/example_data/example.csv",
    },
    "pageContent": "This is another sentence.",
  },
]
*/
```


================================================
File: /docs/core_docs/docs/how_to/example_selectors_similarity.mdx
================================================
# How to select examples by similarity

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [Prompt templates](/docs/concepts/prompt_templates)
- [Example selectors](/docs/how_to/example_selectors)
- [Vector stores](/docs/concepts/vectorstores)

:::

This object selects examples based on similarity to the inputs.
It does this by finding the examples with the embeddings that have the greatest cosine similarity with the inputs.

import CodeBlock from "@theme/CodeBlock";
import ExampleSimilarity from "@examples/prompts/semantic_similarity_example_selector.ts";

The fields of the examples object will be used as parameters to format the `examplePrompt` passed to the `FewShotPromptTemplate`.
Each example should therefore contain all required fields for the example prompt you are using.

import IntegrationInstallTooltip from "@mdx_components/integration_install_tooltip.mdx";

<IntegrationInstallTooltip></IntegrationInstallTooltip>

```bash npm2yarn
npm install @langchain/openai @langchain/community @langchain/core
```

<CodeBlock language="typescript">{ExampleSimilarity}</CodeBlock>

By default, each field in the examples object is concatenated together, embedded, and stored in the vectorstore for
later similarity search against user queries.

If you only want to embed specific keys
(e.g., you only want to search for examples that have a similar query to the one the user provides), you can pass an `inputKeys`
array in the final `options` parameter.

## Loading from an existing vectorstore

You can also use a pre-initialized vector store by passing an instance to the `SemanticSimilarityExampleSelector` constructor
directly, as shown below. You can also add more examples via the `addExample` method:

import ExampleSimilarityFromExisting from "@examples/prompts/semantic_similarity_example_selector_from_existing.ts";

<CodeBlock language="typescript">{ExampleSimilarityFromExisting}</CodeBlock>

## Metadata filtering

When adding examples, each field is available as metadata in the produced document. If you would like further control over your
search space, you can add extra fields to your examples and pass a `filter` parameter when initializing your selector:

import ExampleSimilarityMetadataFiltering from "@examples/prompts/semantic_similarity_example_selector_metadata_filtering.ts";

<CodeBlock language="typescript">
  {ExampleSimilarityMetadataFiltering}
</CodeBlock>

## Custom vectorstore retrievers

You can also pass a vectorstore retriever instead of a vectorstore. One way this could be useful is if you want to use retrieval
besides similarity search such as maximal marginal relevance:

import ExampleSimilarityCustomRetriever from "@examples/prompts/semantic_similarity_example_selector_custom_retriever.ts";

<CodeBlock language="typescript">{ExampleSimilarityCustomRetriever}</CodeBlock>

## Next steps

You've now learned a bit about using similarity in an example selector.

Next, check out this guide on how to use a [length-based example selector](/docs/how_to/example_selectors_length_based).


================================================
File: /docs/core_docs/docs/how_to/vectorstores.mdx
================================================
---
keywords: [similaritySearchWithScore]
---

# How to create and query vector stores

:::info
Head to [Integrations](/docs/integrations/vectorstores) for documentation on built-in integrations with vectorstore providers.
:::

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [Vector stores](/docs/concepts/#vectorstores)
- [Embeddings](/docs/concepts/embedding_models)
- [Document loaders](/docs/concepts/document_loaders)

:::

One of the most common ways to store and search over unstructured data is to embed it and store the resulting embedding
vectors, and then at query time to embed the unstructured query and retrieve the embedding vectors that are
'most similar' to the embedded query. A vector store takes care of storing embedded data and performing vector search
for you.

This walkthrough uses a basic, unoptimized implementation called [`MemoryVectorStore`](https://api.js.langchain.com/classes/langchain.vectorstores_memory.MemoryVectorStore.html) that stores embeddings in-memory and does an exact, linear search for the most similar embeddings.
LangChain contains many built-in integrations - see [this section](/docs/how_to/vectorstores/#which-one-to-pick) for more, or the [full list of integrations](/docs/integrations/vectorstores/).

## Creating a new index

Most of the time, you'll need to load and prepare the data you want to search over. Here's an example that loads a recent speech from a file:

import ExampleLoader from "@examples/indexes/vector_stores/memory_fromdocs.ts";

<CodeBlock language="typescript">{ExampleLoader}</CodeBlock>

Most of the time, you'll need to split the loaded text as a preparation step. See [this section](/docs/concepts/text_splitters) to learn more about text splitters.

## Creating a new index from texts

If you have already prepared the data you want to search over, you can initialize a vector store directly from text chunks:

import CodeBlock from "@theme/CodeBlock";
import ExampleTexts from "@examples/indexes/vector_stores/memory.ts";

import IntegrationInstallTooltip from "@mdx_components/integration_install_tooltip.mdx";

<IntegrationInstallTooltip></IntegrationInstallTooltip>

```bash npm2yarn
npm install @langchain/openai @langchain/core
```

<CodeBlock language="typescript">{ExampleTexts}</CodeBlock>

## Which one to pick?

Here's a quick guide to help you pick the right vector store for your use case:

- If you're after something that can just run inside your Node.js application, in-memory, without any other servers to stand up, then go for [HNSWLib](/docs/integrations/vectorstores/hnswlib), [Faiss](/docs/integrations/vectorstores/faiss), [LanceDB](/docs/integrations/vectorstores/lancedb) or [CloseVector](/docs/integrations/vectorstores/closevector)
- If you're looking for something that can run in-memory in browser-like environments, then go for [MemoryVectorStore](/docs/integrations/vectorstores/memory) or [CloseVector](/docs/integrations/vectorstores/closevector)
- If you come from Python and you were looking for something similar to FAISS, try [HNSWLib](/docs/integrations/vectorstores/hnswlib) or [Faiss](/docs/integrations/vectorstores/faiss)
- If you're looking for an open-source full-featured vector database that you can run locally in a docker container, then go for [Chroma](/docs/integrations/vectorstores/chroma)
- If you're looking for an open-source vector database that offers low-latency, local embedding of documents and supports apps on the edge, then go for [Zep](/docs/integrations/vectorstores/zep)
- If you're looking for an open-source production-ready vector database that you can run locally (in a docker container) or hosted in the cloud, then go for [Weaviate](/docs/integrations/vectorstores/weaviate).
- If you're using Supabase already then look at the [Supabase](/docs/integrations/vectorstores/supabase) vector store to use the same Postgres database for your embeddings too
- If you're looking for a production-ready vector store you don't have to worry about hosting yourself, then go for [Pinecone](/docs/integrations/vectorstores/pinecone)
- If you are already utilizing SingleStore, or if you find yourself in need of a distributed, high-performance database, you might want to consider the [SingleStore](/docs/integrations/vectorstores/singlestore) vector store.
- If you are looking for an online MPP (Massively Parallel Processing) data warehousing service, you might want to consider the [AnalyticDB](/docs/integrations/vectorstores/analyticdb) vector store.
- If you're in search of a cost-effective vector database that allows run vector search with SQL, look no further than [MyScale](/docs/integrations/vectorstores/myscale).
- If you're in search of a vector database that you can load from both the browser and server side, check out [CloseVector](/docs/integrations/vectorstores/closevector). It's a vector database that aims to be cross-platform.
- If you're looking for a scalable, open-source columnar database with excellent performance for analytical queries, then consider [ClickHouse](/docs/integrations/vectorstores/clickhouse).

## Next steps

You've now learned how to load data into a vectorstore.

Next, check out the [full tutorial on retrieval-augmented generation](/docs/tutorials/rag).


================================================
File: /docs/core_docs/docs/how_to/ensemble_retriever.mdx
================================================
# How to combine results from multiple retrievers

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [Documents](https://api.js.langchain.com/classes/_langchain_core.documents.Document.html)
- [Retrievers](/docs/concepts/retrievers)

:::

The [EnsembleRetriever](https://api.js.langchain.com/classes/langchain.retrievers_ensemble.EnsembleRetriever.html) supports ensembling of results from multiple retrievers. It is initialized with a list of [BaseRetriever](https://api.js.langchain.com/classes/langchain_core.retrievers.BaseRetriever.html) objects. EnsembleRetrievers rerank the results of the constituent retrievers based on the [Reciprocal Rank Fusion](https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf) algorithm.

By leveraging the strengths of different algorithms, the `EnsembleRetriever` can achieve better performance than any single algorithm.

One useful pattern is to combine a keyword matching retriever with a dense retriever (like embedding similarity), because their strengths are complementary. This can be considered a form of "hybrid search". The sparse retriever is good at finding relevant documents based on keywords, while the dense retriever is good at finding relevant documents based on semantic similarity.

Below we demonstrate ensembling of a [simple custom retriever](/docs/how_to/custom_retriever/) that simply returns documents that directly contain the input query with a retriever derived from a [demo, in-memory, vector store](https://api.js.langchain.com/classes/langchain.vectorstores_memory.MemoryVectorStore.html).

import CodeBlock from "@theme/CodeBlock";
import Example from "@examples/retrievers/ensemble_retriever.ts";

<CodeBlock language="typescript">{Example}</CodeBlock>

## Next steps

You've now learned how to combine results from multiple retrievers.
Next, check out some other retrieval how-to guides, such as how to [improve results using multiple embeddings per document](/docs/how_to/multi_vector)
or how to [create your own custom retriever](/docs/how_to/custom_retriever).


================================================
File: /docs/core_docs/docs/how_to/custom_retriever.mdx
================================================
# How to write a custom retriever class

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [Retrievers](/docs/concepts/retrievers)

:::

To create your own retriever, you need to extend the [`BaseRetriever`](https://api.js.langchain.com/classes/langchain_core.retrievers.BaseRetriever.html) class
and implement a `_getRelevantDocuments` method that takes a `string` as its first parameter (and an optional `runManager` for tracing).
This method should return an array of `Document`s fetched from some source. This process can involve calls to a database, to the web using `fetch`, or any other source.
Note the underscore before `_getRelevantDocuments()`. The base class wraps the non-prefixed version in order to automatically handle tracing of the original call.

Here's an example of a custom retriever that returns static documents:

```ts
import {
  BaseRetriever,
  type BaseRetrieverInput,
} from "@langchain/core/retrievers";
import type { CallbackManagerForRetrieverRun } from "@langchain/core/callbacks/manager";
import { Document } from "@langchain/core/documents";

export interface CustomRetrieverInput extends BaseRetrieverInput {}

export class CustomRetriever extends BaseRetriever {
  lc_namespace = ["langchain", "retrievers"];

  constructor(fields?: CustomRetrieverInput) {
    super(fields);
  }

  async _getRelevantDocuments(
    query: string,
    runManager?: CallbackManagerForRetrieverRun
  ): Promise<Document[]> {
    // Pass `runManager?.getChild()` when invoking internal runnables to enable tracing
    // const additionalDocs = await someOtherRunnable.invoke(params, runManager?.getChild());
    return [
      // ...additionalDocs,
      new Document({
        pageContent: `Some document pertaining to ${query}`,
        metadata: {},
      }),
      new Document({
        pageContent: `Some other document pertaining to ${query}`,
        metadata: {},
      }),
    ];
  }
}
```

Then, you can call `.invoke()` as follows:

```ts
const retriever = new CustomRetriever({});

await retriever.invoke("LangChain docs");
```

```
[
  Document {
    pageContent: 'Some document pertaining to LangChain docs',
    metadata: {}
  },
  Document {
    pageContent: 'Some other document pertaining to LangChain docs',
    metadata: {}
  }
]
```

## Next steps

You've now seen an example of implementing your own custom retriever.

Next, check out the individual sections for deeper dives on specific retrievers, or the [broader tutorial on RAG](/docs/tutorials/rag).


================================================
File: /docs/core_docs/docs/how_to/parallel.mdx
================================================
# How to invoke runnables in parallel

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [LangChain Expression Language (LCEL)](/docs/concepts/lcel)
- [Chaining runnables](/docs/how_to/sequence/)

:::

The [`RunnableParallel`](https://api.js.langchain.com/classes/langchain_core.runnables.RunnableParallel.html) (also known as a `RunnableMap`) primitive is an object whose values are runnables (or things that can be coerced to runnables, like functions).
It runs all of its values in parallel, and each value is called with the initial input to the `RunnableParallel`. The final return value is an object with the results of each value under its appropriate key.

## Formatting with `RunnableParallels`

`RunnableParallels` are useful for parallelizing operations, but can also be useful for manipulating the output of one Runnable to match the input format of the next Runnable in a sequence. You can use them to split or fork the chain so that multiple components can process the input in parallel. Later, other components can join or merge the results to synthesize a final response. This type of chain creates a computation graph that looks like the following:

```text
     Input
      / \
     /   \
 Branch1 Branch2
     \   /
      \ /
      Combine
```

Below, the input to each chain in the `RunnableParallel` is expected to be an object with a key for `"topic"`.
We can satisfy that requirement by invoking our chain with an object matching that structure.

import IntegrationInstallTooltip from "@mdx_components/integration_install_tooltip.mdx";

<IntegrationInstallTooltip></IntegrationInstallTooltip>

```bash npm2yarn
npm install @langchain/anthropic @langchain/cohere @langchain/core
```

import CodeBlock from "@theme/CodeBlock";
import BasicExample from "@examples/guides/expression_language/runnable_maps_basic.ts";

<CodeBlock language="typescript">{BasicExample}</CodeBlock>

## Manipulating outputs/inputs

Maps can be useful for manipulating the output of one Runnable to match the input format of the next Runnable in a sequence.

Note below that the object within the `RunnableSequence.from()` call is automatically coerced into a runnable map. All keys of the object must
have values that are runnables or can be themselves coerced to runnables (functions to `RunnableLambda`s or objects to `RunnableMap`s).
This coercion will also occur when composing chains via the `.pipe()` method.

import SequenceExample from "@examples/guides/expression_language/runnable_maps_sequence.ts";

<CodeBlock language="typescript">{SequenceExample}</CodeBlock>

Here the input to prompt is expected to be a map with keys "context" and "question". The user input is just the question. So we need to get the context using our retriever and passthrough the user input under the "question" key.

## Next steps

You now know some ways to format and parallelize chain steps with `RunnableParallel`.

Next, you might be interested in [using custom logic](/docs/how_to/functions/) in your chains.


================================================
File: /docs/core_docs/docs/how_to/time_weighted_vectorstore.mdx
================================================
# How to create a time-weighted retriever

:::info Prerequisites

This guide assumes familiarity with the following concepts:

- [Retrievers](/docs/concepts/retrievers)
- [Vector stores](/docs/concepts/#vectorstores)
- [Retrieval-augmented generation (RAG)](/docs/tutorials/rag)

:::

This guide covers the [`TimeWeightedVectorStoreRetriever`](https://api.js.langchain.com/classes/langchain.retrievers_time_weighted.TimeWeightedVectorStoreRetriever.html),
which uses a combination of semantic similarity and a time decay.

The algorithm for scoring them is:

```
semantic_similarity + (1.0 - decay_rate) ^ hours_passed
```

Notably, `hours_passed` refers to the hours passed since the object in the retriever **was last accessed**, not since it was created. This means that frequently accessed objects remain "fresh."

```typescript
let score = (1.0 - this.decayRate) ** hoursPassed + vectorRelevance;
```

`this.decayRate` is a configurable decimal number between 0 and 1. A lower number means that documents will be "remembered" for longer, while a higher number strongly weights more recently accessed documents.

Note that setting a decay rate of exactly 0 or 1 makes `hoursPassed` irrelevant and makes this retriever equivalent to a standard vector lookup.

It is important to note that due to required metadata, all documents must be added to the backing vector store using the `addDocuments` method on the **retriever**, not the vector store itself.

import CodeBlock from "@theme/CodeBlock";
import Example from "@examples/retrievers/time-weighted-retriever.ts";

import IntegrationInstallTooltip from "@mdx_components/integration_install_tooltip.mdx";

<IntegrationInstallTooltip></IntegrationInstallTooltip>

```bash npm2yarn
npm install @langchain/openai @langchain/core
```

<CodeBlock language="typescript">{Example}</CodeBlock>

## Next steps

You've now learned how to use time as a factor when performing retrieval.

Next, check out the [broader tutorial on RAG](/docs/tutorials/rag), or this section to learn how to
[create your own custom retriever over any data source](/docs/how_to/custom_retriever/).


================================================
File: /docs/core_docs/docs/how_to/debugging.mdx
================================================
# How to debug your LLM apps

import CodeBlock from "@theme/CodeBlock";

Like building any type of software, at some point you'll need to debug when building with LLMs.
A model call will fail, or model output will be misformatted, or there will be some nested model calls and it won't be clear where along the way an incorrect output was created.

Here are a few different tools and functionalities to aid in debugging.

## Tracing

Many of the applications you build with LangChain will contain multiple steps with multiple invocations of LLM calls.
As these applications get more and more complex, it becomes crucial to be able to inspect what exactly is going on inside your chain or agent.
The best way to do this is with [LangSmith](https://smith.langchain.com).

After you sign up at the link above, make sure to set your environment variables to start logging traces:

```shell
export LANGCHAIN_TRACING_V2="true"
export LANGCHAIN_API_KEY="..."

# Reduce tracing latency if you are not in a serverless environment
# export LANGCHAIN_CALLBACKS_BACKGROUND=true
```

Let's suppose we have an agent, and want to visualize the actions it takes and tool outputs it receives. Without any debugging, here's what we see:

import SimpleAgent from "@examples/guides/debugging/simple_agent.ts";

<CodeBlock language="typescript">{SimpleAgent}</CodeBlock>

```bash
{
  input: 'Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?',
  output: 'So Christopher Nolan, the director of the 2023 film Oppenheimer, is 53 years old, which is approximately 19,345 days old (assuming 365 days per year).'
}
```

We don't get much output, but since we set up LangSmith we can easily see what happened under the hood:

https://smith.langchain.com/public/fd3a4aa1-dfea-4d17-9d44-a306e7b230d3/r

## `verbose`

If you're prototyping in Jupyter Notebooks or running Node scripts, it can be helpful to print out the intermediate steps of a chain run.

There are a number of ways to enable printing at varying degrees of verbosity.

### `{ verbose: true }`

Setting the `verbose` parameter will cause any LangChain component with callback support (chains, models, agents, tools, retrievers) to print the inputs they receive and outputs they generate.
This is the most verbose setting and will fully log raw inputs and outputs.

import SimpleAgentVerbose from "@examples/guides/debugging/simple_agent_verbose.ts";

<CodeBlock language="typescript">{SimpleAgentVerbose}</CodeBlock>

<details> 
  <summary>Console output</summary>

```bash
[chain/start] [1:chain:AgentExecutor] Entering Chain run with input: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?"
}
[chain/start] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent] Entering Chain run with input: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": []
}
[chain/start] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 3:chain:RunnableAssign] Entering Chain run with input: {
  "input": ""
}
[chain/start] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 3:chain:RunnableAssign > 4:chain:RunnableMap] Entering Chain run with input: {
  "input": ""
}
[chain/start] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 3:chain:RunnableAssign > 4:chain:RunnableMap > 5:chain:RunnableLambda] Entering Chain run with input: {
  "input": ""
}
[chain/end] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 3:chain:RunnableAssign > 4:chain:RunnableMap > 5:chain:RunnableLambda] [0ms] Exiting Chain run with output: {
  "output": []
}
[chain/end] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 3:chain:RunnableAssign > 4:chain:RunnableMap] [1ms] Exiting Chain run with output: {
  "agent_scratchpad": []
}
[chain/end] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 3:chain:RunnableAssign] [1ms] Exiting Chain run with output: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [],
  "agent_scratchpad": []
}
[chain/start] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 6:prompt:ChatPromptTemplate] Entering Chain run with input: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [],
  "agent_scratchpad": []
}
[chain/end] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 6:prompt:ChatPromptTemplate] [0ms] Exiting Chain run with output: {
  "lc": 1,
  "type": "constructor",
  "id": [
    "langchain_core",
    "prompt_values",
    "ChatPromptValue"
  ],
  "kwargs": {
    "messages": [
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "SystemMessage"
        ],
        "kwargs": {
          "content": "You are a helpful assistant",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "HumanMessage"
        ],
        "kwargs": {
          "content": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      }
    ]
  }
}
[llm/start] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 7:llm:ChatAnthropic] Entering LLM run with input: {
  "messages": [
    [
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "SystemMessage"
        ],
        "kwargs": {
          "content": "You are a helpful assistant",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "HumanMessage"
        ],
        "kwargs": {
          "content": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      }
    ]
  ]
}
[llm/start] [1:llm:ChatAnthropic] Entering LLM run with input: {
  "messages": [
    [
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "SystemMessage"
        ],
        "kwargs": {
          "content": "You are a helpful assistant",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "HumanMessage"
        ],
        "kwargs": {
          "content": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      }
    ]
  ]
}
[llm/end] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 7:llm:ChatAnthropic] [1.98s] Exiting LLM run with output: {
  "generations": [
    [
      {
        "text": "",
        "message": {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "tool_use",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "name": "tavily_search_results_json",
                "input": {
                  "input": "Oppenheimer 2023 film director age"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_015MqAHr84dBCAqBgjou41Km",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 409,
                "output_tokens": 68
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "tavily_search_results_json",
                "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "tavily_search_results_json",
                "args": {
                  "input": "Oppenheimer 2023 film director age"
                },
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      }
    ]
  ]
}
[llm/end] [1:llm:ChatAnthropic] [1.98s] Exiting LLM run with output: {
  "generations": [
    [
      {
        "text": "",
        "message": {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "tool_use",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "name": "tavily_search_results_json",
                "input": {
                  "input": "Oppenheimer 2023 film director age"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_015MqAHr84dBCAqBgjou41Km",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 409,
                "output_tokens": 68
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "tavily_search_results_json",
                "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "tavily_search_results_json",
                "args": {
                  "input": "Oppenheimer 2023 film director age"
                },
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      }
    ]
  ]
}
[chain/start] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 8:parser:ToolCallingAgentOutputParser] Entering Chain run with input: {
  "lc": 1,
  "type": "constructor",
  "id": [
    "langchain_core",
    "messages",
    "AIMessageChunk"
  ],
  "kwargs": {
    "content": [
      {
        "type": "tool_use",
        "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "name": "tavily_search_results_json",
        "input": {
          "input": "Oppenheimer 2023 film director age"
        }
      }
    ],
    "additional_kwargs": {
      "id": "msg_015MqAHr84dBCAqBgjou41Km",
      "type": "message",
      "role": "assistant",
      "model": "claude-3-sonnet-20240229",
      "stop_sequence": null,
      "usage": {
        "input_tokens": 409,
        "output_tokens": 68
      },
      "stop_reason": "tool_use"
    },
    "tool_call_chunks": [
      {
        "name": "tavily_search_results_json",
        "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
        "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "index": 0
      }
    ],
    "tool_calls": [
      {
        "name": "tavily_search_results_json",
        "args": {
          "input": "Oppenheimer 2023 film director age"
        },
        "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
      }
    ],
    "invalid_tool_calls": [],
    "response_metadata": {}
  }
}
[chain/end] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent > 8:parser:ToolCallingAgentOutputParser] [0ms] Exiting Chain run with output: {
  "output": [
    {
      "tool": "tavily_search_results_json",
      "toolInput": {
        "input": "Oppenheimer 2023 film director age"
      },
      "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
      "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
      "messageLog": [
        {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "tool_use",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "name": "tavily_search_results_json",
                "input": {
                  "input": "Oppenheimer 2023 film director age"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_015MqAHr84dBCAqBgjou41Km",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 409,
                "output_tokens": 68
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "tavily_search_results_json",
                "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "tavily_search_results_json",
                "args": {
                  "input": "Oppenheimer 2023 film director age"
                },
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      ]
    }
  ]
}
[chain/end] [1:chain:AgentExecutor > 2:chain:ToolCallingAgent] [1.98s] Exiting Chain run with output: {
  "output": [
    {
      "tool": "tavily_search_results_json",
      "toolInput": {
        "input": "Oppenheimer 2023 film director age"
      },
      "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
      "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
      "messageLog": [
        {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "tool_use",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "name": "tavily_search_results_json",
                "input": {
                  "input": "Oppenheimer 2023 film director age"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_015MqAHr84dBCAqBgjou41Km",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 409,
                "output_tokens": 68
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "tavily_search_results_json",
                "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "tavily_search_results_json",
                "args": {
                  "input": "Oppenheimer 2023 film director age"
                },
                "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      ]
    }
  ]
}
[agent/action] [1:chain:AgentExecutor] Agent selected action: {
  "tool": "tavily_search_results_json",
  "toolInput": {
    "input": "Oppenheimer 2023 film director age"
  },
  "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
  "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
  "messageLog": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    }
  ]
}
[tool/start] [1:chain:AgentExecutor > 9:tool:TavilySearchResults] Entering Tool run with input: "Oppenheimer 2023 film director age"
[tool/start] [1:tool:TavilySearchResults] Entering Tool run with input: "Oppenheimer 2023 film director age"
[tool/end] [1:chain:AgentExecutor > 9:tool:TavilySearchResults] [2.20s] Exiting Tool run with output: "[{"title":"Oppenheimer (2023) - IMDb","url":"https://www.imdb.com/title/tt15398776/","content":"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.","score":0.96643,"raw_content":null},{"title":"Christopher Nolan's Oppenheimer - Rotten Tomatoes","url":"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/","content":"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.","score":0.92804,"raw_content":null},{"title":"Oppenheimer (film) - Wikipedia","url":"https://en.wikipedia.org/wiki/Oppenheimer_(film)","content":"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\nCritical response\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \"more objective view of his story from a different character's point of view\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \"big-atures\", since the special effects team had tried to build the models as physically large as possible. He felt that \"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \"emotional\" and resembling that of a thriller, while also remarking that Nolan had \"Trojan-Horsed a biopic into a thriller\".[72]\nCasting\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\", while also underscoring that it is a \"huge shift in perception about the reality of Oppenheimer's perception\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.","score":0.92404,"raw_content":null},{"title":"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \"I Try to ...","url":"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/","content":"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\nRELATED:\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\nCONNECT  FacebookTwitterInstagram\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\n Subscribe\nEverything Zoomer\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.","score":0.92002,"raw_content":null},{"title":"'Oppenheimer' Review: A Man for Our Time - The New York Times","url":"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html","content":"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\n","score":0.91831,"raw_content":null}]"
[tool/end] [1:tool:TavilySearchResults] [2.20s] Exiting Tool run with output: "[{"title":"Oppenheimer (2023) - IMDb","url":"https://www.imdb.com/title/tt15398776/","content":"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.","score":0.96643,"raw_content":null},{"title":"Christopher Nolan's Oppenheimer - Rotten Tomatoes","url":"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/","content":"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.","score":0.92804,"raw_content":null},{"title":"Oppenheimer (film) - Wikipedia","url":"https://en.wikipedia.org/wiki/Oppenheimer_(film)","content":"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\nCritical response\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \"more objective view of his story from a different character's point of view\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \"big-atures\", since the special effects team had tried to build the models as physically large as possible. He felt that \"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \"emotional\" and resembling that of a thriller, while also remarking that Nolan had \"Trojan-Horsed a biopic into a thriller\".[72]\nCasting\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\", while also underscoring that it is a \"huge shift in perception about the reality of Oppenheimer's perception\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.","score":0.92404,"raw_content":null},{"title":"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \"I Try to ...","url":"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/","content":"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\nRELATED:\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\nCONNECT  FacebookTwitterInstagram\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\n Subscribe\nEverything Zoomer\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.","score":0.92002,"raw_content":null},{"title":"'Oppenheimer' Review: A Man for Our Time - The New York Times","url":"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html","content":"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\n","score":0.91831,"raw_content":null}]"
[chain/start] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent] Entering Chain run with input: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [
    {
      "action": {
        "tool": "tavily_search_results_json",
        "toolInput": {
          "input": "Oppenheimer 2023 film director age"
        },
        "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "tool_use",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "name": "tavily_search_results_json",
                  "input": {
                    "input": "Oppenheimer 2023 film director age"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_015MqAHr84dBCAqBgjou41Km",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 409,
                  "output_tokens": 68
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "tavily_search_results_json",
                  "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "tavily_search_results_json",
                  "args": {
                    "input": "Oppenheimer 2023 film director age"
                  },
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]"
    }
  ]
}
[chain/start] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 11:chain:RunnableAssign] Entering Chain run with input: {
  "input": ""
}
[chain/start] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 11:chain:RunnableAssign > 12:chain:RunnableMap] Entering Chain run with input: {
  "input": ""
}
[chain/start] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 11:chain:RunnableAssign > 12:chain:RunnableMap > 13:chain:RunnableLambda] Entering Chain run with input: {
  "input": ""
}
[chain/end] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 11:chain:RunnableAssign > 12:chain:RunnableMap > 13:chain:RunnableLambda] [1ms] Exiting Chain run with output: {
  "output": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
        "additional_kwargs": {
          "name": "tavily_search_results_json"
        },
        "response_metadata": {}
      }
    }
  ]
}
[chain/end] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 11:chain:RunnableAssign > 12:chain:RunnableMap] [2ms] Exiting Chain run with output: {
  "agent_scratchpad": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
        "additional_kwargs": {
          "name": "tavily_search_results_json"
        },
        "response_metadata": {}
      }
    }
  ]
}
[chain/end] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 11:chain:RunnableAssign] [3ms] Exiting Chain run with output: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [
    {
      "action": {
        "tool": "tavily_search_results_json",
        "toolInput": {
          "input": "Oppenheimer 2023 film director age"
        },
        "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "tool_use",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "name": "tavily_search_results_json",
                  "input": {
                    "input": "Oppenheimer 2023 film director age"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_015MqAHr84dBCAqBgjou41Km",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 409,
                  "output_tokens": 68
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "tavily_search_results_json",
                  "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "tavily_search_results_json",
                  "args": {
                    "input": "Oppenheimer 2023 film director age"
                  },
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]"
    }
  ],
  "agent_scratchpad": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
        "additional_kwargs": {
          "name": "tavily_search_results_json"
        },
        "response_metadata": {}
      }
    }
  ]
}
[chain/start] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 14:prompt:ChatPromptTemplate] Entering Chain run with input: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [
    {
      "action": {
        "tool": "tavily_search_results_json",
        "toolInput": {
          "input": "Oppenheimer 2023 film director age"
        },
        "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "tool_use",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "name": "tavily_search_results_json",
                  "input": {
                    "input": "Oppenheimer 2023 film director age"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_015MqAHr84dBCAqBgjou41Km",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 409,
                  "output_tokens": 68
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "tavily_search_results_json",
                  "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "tavily_search_results_json",
                  "args": {
                    "input": "Oppenheimer 2023 film director age"
                  },
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]"
    }
  ],
  "agent_scratchpad": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
        "additional_kwargs": {
          "name": "tavily_search_results_json"
        },
        "response_metadata": {}
      }
    }
  ]
}
[chain/end] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 14:prompt:ChatPromptTemplate] [2ms] Exiting Chain run with output: {
  "lc": 1,
  "type": "constructor",
  "id": [
    "langchain_core",
    "prompt_values",
    "ChatPromptValue"
  ],
  "kwargs": {
    "messages": [
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "SystemMessage"
        ],
        "kwargs": {
          "content": "You are a helpful assistant",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "HumanMessage"
        ],
        "kwargs": {
          "content": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "AIMessageChunk"
        ],
        "kwargs": {
          "content": [
            {
              "type": "tool_use",
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
              "name": "tavily_search_results_json",
              "input": {
                "input": "Oppenheimer 2023 film director age"
              }
            }
          ],
          "additional_kwargs": {
            "id": "msg_015MqAHr84dBCAqBgjou41Km",
            "type": "message",
            "role": "assistant",
            "model": "claude-3-sonnet-20240229",
            "stop_sequence": null,
            "usage": {
              "input_tokens": 409,
              "output_tokens": 68
            },
            "stop_reason": "tool_use"
          },
          "tool_call_chunks": [
            {
              "name": "tavily_search_results_json",
              "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
              "index": 0
            }
          ],
          "tool_calls": [
            {
              "name": "tavily_search_results_json",
              "args": {
                "input": "Oppenheimer 2023 film director age"
              },
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
            }
          ],
          "invalid_tool_calls": [],
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "ToolMessage"
        ],
        "kwargs": {
          "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
          "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
          "additional_kwargs": {
            "name": "tavily_search_results_json"
          },
          "response_metadata": {}
        }
      }
    ]
  }
}
[llm/start] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 15:llm:ChatAnthropic] Entering LLM run with input: {
  "messages": [
    [
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "SystemMessage"
        ],
        "kwargs": {
          "content": "You are a helpful assistant",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "HumanMessage"
        ],
        "kwargs": {
          "content": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "AIMessageChunk"
        ],
        "kwargs": {
          "content": [
            {
              "type": "tool_use",
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
              "name": "tavily_search_results_json",
              "input": {
                "input": "Oppenheimer 2023 film director age"
              }
            }
          ],
          "additional_kwargs": {
            "id": "msg_015MqAHr84dBCAqBgjou41Km",
            "type": "message",
            "role": "assistant",
            "model": "claude-3-sonnet-20240229",
            "stop_sequence": null,
            "usage": {
              "input_tokens": 409,
              "output_tokens": 68
            },
            "stop_reason": "tool_use"
          },
          "tool_call_chunks": [
            {
              "name": "tavily_search_results_json",
              "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
              "index": 0
            }
          ],
          "tool_calls": [
            {
              "name": "tavily_search_results_json",
              "args": {
                "input": "Oppenheimer 2023 film director age"
              },
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
            }
          ],
          "invalid_tool_calls": [],
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "ToolMessage"
        ],
        "kwargs": {
          "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
          "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
          "additional_kwargs": {
            "name": "tavily_search_results_json"
          },
          "response_metadata": {}
        }
      }
    ]
  ]
}
[llm/start] [1:llm:ChatAnthropic] Entering LLM run with input: {
  "messages": [
    [
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "SystemMessage"
        ],
        "kwargs": {
          "content": "You are a helpful assistant",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "HumanMessage"
        ],
        "kwargs": {
          "content": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
          "additional_kwargs": {},
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "AIMessageChunk"
        ],
        "kwargs": {
          "content": [
            {
              "type": "tool_use",
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
              "name": "tavily_search_results_json",
              "input": {
                "input": "Oppenheimer 2023 film director age"
              }
            }
          ],
          "additional_kwargs": {
            "id": "msg_015MqAHr84dBCAqBgjou41Km",
            "type": "message",
            "role": "assistant",
            "model": "claude-3-sonnet-20240229",
            "stop_sequence": null,
            "usage": {
              "input_tokens": 409,
              "output_tokens": 68
            },
            "stop_reason": "tool_use"
          },
          "tool_call_chunks": [
            {
              "name": "tavily_search_results_json",
              "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
              "index": 0
            }
          ],
          "tool_calls": [
            {
              "name": "tavily_search_results_json",
              "args": {
                "input": "Oppenheimer 2023 film director age"
              },
              "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
            }
          ],
          "invalid_tool_calls": [],
          "response_metadata": {}
        }
      },
      {
        "lc": 1,
        "type": "constructor",
        "id": [
          "langchain_core",
          "messages",
          "ToolMessage"
        ],
        "kwargs": {
          "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
          "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
          "additional_kwargs": {
            "name": "tavily_search_results_json"
          },
          "response_metadata": {}
        }
      }
    ]
  ]
}
[llm/end] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 15:llm:ChatAnthropic] [3.50s] Exiting LLM run with output: {
  "generations": [
    [
      {
        "text": "",
        "message": {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "text",
                "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
              },
              {
                "type": "tool_use",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "name": "calculator",
                "input": {
                  "input": "52 * 365"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 2810,
                "output_tokens": 137
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "calculator",
                "args": "{\"input\":\"52 * 365\"}",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "calculator",
                "args": {
                  "input": "52 * 365"
                },
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      }
    ]
  ]
}
[llm/end] [1:llm:ChatAnthropic] [3.50s] Exiting LLM run with output: {
  "generations": [
    [
      {
        "text": "",
        "message": {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "text",
                "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
              },
              {
                "type": "tool_use",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "name": "calculator",
                "input": {
                  "input": "52 * 365"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 2810,
                "output_tokens": 137
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "calculator",
                "args": "{\"input\":\"52 * 365\"}",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "calculator",
                "args": {
                  "input": "52 * 365"
                },
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      }
    ]
  ]
}
[chain/start] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 16:parser:ToolCallingAgentOutputParser] Entering Chain run with input: {
  "lc": 1,
  "type": "constructor",
  "id": [
    "langchain_core",
    "messages",
    "AIMessageChunk"
  ],
  "kwargs": {
    "content": [
      {
        "type": "text",
        "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
      },
      {
        "type": "tool_use",
        "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "name": "calculator",
        "input": {
          "input": "52 * 365"
        }
      }
    ],
    "additional_kwargs": {
      "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
      "type": "message",
      "role": "assistant",
      "model": "claude-3-sonnet-20240229",
      "stop_sequence": null,
      "usage": {
        "input_tokens": 2810,
        "output_tokens": 137
      },
      "stop_reason": "tool_use"
    },
    "tool_call_chunks": [
      {
        "name": "calculator",
        "args": "{\"input\":\"52 * 365\"}",
        "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "index": 0
      }
    ],
    "tool_calls": [
      {
        "name": "calculator",
        "args": {
          "input": "52 * 365"
        },
        "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
      }
    ],
    "invalid_tool_calls": [],
    "response_metadata": {}
  }
}
[chain/end] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent > 16:parser:ToolCallingAgentOutputParser] [1ms] Exiting Chain run with output: {
  "output": [
    {
      "tool": "calculator",
      "toolInput": {
        "input": "52 * 365"
      },
      "toolCallId": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
      "log": "Invoking \"calculator\" with {\"input\":\"52 * 365\"}\n[{\"type\":\"text\",\"text\":\"Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\\n\\n- He is a British-American film director, producer and screenwriter.\\n- He was born on July 30, 1970, making him currently 52 years old.\\n\\nTo calculate his age in days:\"},{\"type\":\"tool_use\",\"id\":\"toolu_01NVTbm5aNYSm1wGYb6XF7jE\",\"name\":\"calculator\",\"input\":{\"input\":\"52 * 365\"}}]",
      "messageLog": [
        {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "text",
                "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
              },
              {
                "type": "tool_use",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "name": "calculator",
                "input": {
                  "input": "52 * 365"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 2810,
                "output_tokens": 137
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "calculator",
                "args": "{\"input\":\"52 * 365\"}",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "calculator",
                "args": {
                  "input": "52 * 365"
                },
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      ]
    }
  ]
}
[chain/end] [1:chain:AgentExecutor > 10:chain:ToolCallingAgent] [3.51s] Exiting Chain run with output: {
  "output": [
    {
      "tool": "calculator",
      "toolInput": {
        "input": "52 * 365"
      },
      "toolCallId": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
      "log": "Invoking \"calculator\" with {\"input\":\"52 * 365\"}\n[{\"type\":\"text\",\"text\":\"Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\\n\\n- He is a British-American film director, producer and screenwriter.\\n- He was born on July 30, 1970, making him currently 52 years old.\\n\\nTo calculate his age in days:\"},{\"type\":\"tool_use\",\"id\":\"toolu_01NVTbm5aNYSm1wGYb6XF7jE\",\"name\":\"calculator\",\"input\":{\"input\":\"52 * 365\"}}]",
      "messageLog": [
        {
          "lc": 1,
          "type": "constructor",
          "id": [
            "langchain_core",
            "messages",
            "AIMessageChunk"
          ],
          "kwargs": {
            "content": [
              {
                "type": "text",
                "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
              },
              {
                "type": "tool_use",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "name": "calculator",
                "input": {
                  "input": "52 * 365"
                }
              }
            ],
            "additional_kwargs": {
              "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
              "type": "message",
              "role": "assistant",
              "model": "claude-3-sonnet-20240229",
              "stop_sequence": null,
              "usage": {
                "input_tokens": 2810,
                "output_tokens": 137
              },
              "stop_reason": "tool_use"
            },
            "tool_call_chunks": [
              {
                "name": "calculator",
                "args": "{\"input\":\"52 * 365\"}",
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                "index": 0
              }
            ],
            "tool_calls": [
              {
                "name": "calculator",
                "args": {
                  "input": "52 * 365"
                },
                "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
              }
            ],
            "invalid_tool_calls": [],
            "response_metadata": {}
          }
        }
      ]
    }
  ]
}
[agent/action] [1:chain:AgentExecutor] Agent selected action: {
  "tool": "calculator",
  "toolInput": {
    "input": "52 * 365"
  },
  "toolCallId": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
  "log": "Invoking \"calculator\" with {\"input\":\"52 * 365\"}\n[{\"type\":\"text\",\"text\":\"Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\\n\\n- He is a British-American film director, producer and screenwriter.\\n- He was born on July 30, 1970, making him currently 52 years old.\\n\\nTo calculate his age in days:\"},{\"type\":\"tool_use\",\"id\":\"toolu_01NVTbm5aNYSm1wGYb6XF7jE\",\"name\":\"calculator\",\"input\":{\"input\":\"52 * 365\"}}]",
  "messageLog": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "text",
            "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
          },
          {
            "type": "tool_use",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "name": "calculator",
            "input": {
              "input": "52 * 365"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 2810,
            "output_tokens": 137
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "calculator",
            "args": "{\"input\":\"52 * 365\"}",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "calculator",
            "args": {
              "input": "52 * 365"
            },
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    }
  ]
}
[tool/start] [1:chain:AgentExecutor > 17:tool:Calculator] Entering Tool run with input: "52 * 365"
[tool/start] [1:tool:Calculator] Entering Tool run with input: "52 * 365"
[tool/end] [1:chain:AgentExecutor > 17:tool:Calculator] [3ms] Exiting Tool run with output: "18980"
[tool/end] [1:tool:Calculator] [3ms] Exiting Tool run with output: "18980"
[chain/start] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent] Entering Chain run with input: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [
    {
      "action": {
        "tool": "tavily_search_results_json",
        "toolInput": {
          "input": "Oppenheimer 2023 film director age"
        },
        "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "tool_use",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "name": "tavily_search_results_json",
                  "input": {
                    "input": "Oppenheimer 2023 film director age"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_015MqAHr84dBCAqBgjou41Km",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 409,
                  "output_tokens": 68
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "tavily_search_results_json",
                  "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "tavily_search_results_json",
                  "args": {
                    "input": "Oppenheimer 2023 film director age"
                  },
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]"
    },
    {
      "action": {
        "tool": "calculator",
        "toolInput": {
          "input": "52 * 365"
        },
        "toolCallId": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "log": "Invoking \"calculator\" with {\"input\":\"52 * 365\"}\n[{\"type\":\"text\",\"text\":\"Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\\n\\n- He is a British-American film director, producer and screenwriter.\\n- He was born on July 30, 1970, making him currently 52 years old.\\n\\nTo calculate his age in days:\"},{\"type\":\"tool_use\",\"id\":\"toolu_01NVTbm5aNYSm1wGYb6XF7jE\",\"name\":\"calculator\",\"input\":{\"input\":\"52 * 365\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "text",
                  "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
                },
                {
                  "type": "tool_use",
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                  "name": "calculator",
                  "input": {
                    "input": "52 * 365"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 2810,
                  "output_tokens": 137
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "calculator",
                  "args": "{\"input\":\"52 * 365\"}",
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "calculator",
                  "args": {
                    "input": "52 * 365"
                  },
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "18980"
    }
  ]
}
[chain/start] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent > 19:chain:RunnableAssign] Entering Chain run with input: {
  "input": ""
}
[chain/start] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent > 19:chain:RunnableAssign > 20:chain:RunnableMap] Entering Chain run with input: {
  "input": ""
}
[chain/start] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent > 19:chain:RunnableAssign > 20:chain:RunnableMap > 21:chain:RunnableLambda] Entering Chain run with input: {
  "input": ""
}
[chain/end] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent > 19:chain:RunnableAssign > 20:chain:RunnableMap > 21:chain:RunnableLambda] [1ms] Exiting Chain run with output: {
  "output": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
        "additional_kwargs": {
          "name": "tavily_search_results_json"
        },
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "text",
            "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
          },
          {
            "type": "tool_use",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "name": "calculator",
            "input": {
              "input": "52 * 365"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 2810,
            "output_tokens": 137
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "calculator",
            "args": "{\"input\":\"52 * 365\"}",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "calculator",
            "args": {
              "input": "52 * 365"
            },
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "content": "18980",
        "additional_kwargs": {
          "name": "calculator"
        },
        "response_metadata": {}
      }
    }
  ]
}
[chain/end] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent > 19:chain:RunnableAssign > 20:chain:RunnableMap] [2ms] Exiting Chain run with output: {
  "agent_scratchpad": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
        "additional_kwargs": {
          "name": "tavily_search_results_json"
        },
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "text",
            "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
          },
          {
            "type": "tool_use",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "name": "calculator",
            "input": {
              "input": "52 * 365"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 2810,
            "output_tokens": 137
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "calculator",
            "args": "{\"input\":\"52 * 365\"}",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "calculator",
            "args": {
              "input": "52 * 365"
            },
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "content": "18980",
        "additional_kwargs": {
          "name": "calculator"
        },
        "response_metadata": {}
      }
    }
  ]
}
[chain/end] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent > 19:chain:RunnableAssign] [4ms] Exiting Chain run with output: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [
    {
      "action": {
        "tool": "tavily_search_results_json",
        "toolInput": {
          "input": "Oppenheimer 2023 film director age"
        },
        "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "tool_use",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "name": "tavily_search_results_json",
                  "input": {
                    "input": "Oppenheimer 2023 film director age"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_015MqAHr84dBCAqBgjou41Km",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 409,
                  "output_tokens": 68
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "tavily_search_results_json",
                  "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "tavily_search_results_json",
                  "args": {
                    "input": "Oppenheimer 2023 film director age"
                  },
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]"
    },
    {
      "action": {
        "tool": "calculator",
        "toolInput": {
          "input": "52 * 365"
        },
        "toolCallId": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "log": "Invoking \"calculator\" with {\"input\":\"52 * 365\"}\n[{\"type\":\"text\",\"text\":\"Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\\n\\n- He is a British-American film director, producer and screenwriter.\\n- He was born on July 30, 1970, making him currently 52 years old.\\n\\nTo calculate his age in days:\"},{\"type\":\"tool_use\",\"id\":\"toolu_01NVTbm5aNYSm1wGYb6XF7jE\",\"name\":\"calculator\",\"input\":{\"input\":\"52 * 365\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "text",
                  "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
                },
                {
                  "type": "tool_use",
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                  "name": "calculator",
                  "input": {
                    "input": "52 * 365"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 2810,
                  "output_tokens": 137
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "calculator",
                  "args": "{\"input\":\"52 * 365\"}",
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "calculator",
                  "args": {
                    "input": "52 * 365"
                  },
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "18980"
    }
  ],
  "agent_scratchpad": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]",
        "additional_kwargs": {
          "name": "tavily_search_results_json"
        },
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "text",
            "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
          },
          {
            "type": "tool_use",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "name": "calculator",
            "input": {
              "input": "52 * 365"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 2810,
            "output_tokens": 137
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "calculator",
            "args": "{\"input\":\"52 * 365\"}",
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "calculator",
            "args": {
              "input": "52 * 365"
            },
            "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "content": "18980",
        "additional_kwargs": {
          "name": "calculator"
        },
        "response_metadata": {}
      }
    }
  ]
}
[chain/start] [1:chain:AgentExecutor > 18:chain:ToolCallingAgent > 22:prompt:ChatPromptTemplate] Entering Chain run with input: {
  "input": "Who directed the 2023 film Oppenheimer and what is their age? What is their age in days (assume 365 days per year)?",
  "steps": [
    {
      "action": {
        "tool": "tavily_search_results_json",
        "toolInput": {
          "input": "Oppenheimer 2023 film director age"
        },
        "toolCallId": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "log": "Invoking \"tavily_search_results_json\" with {\"input\":\"Oppenheimer 2023 film director age\"}\n[{\"type\":\"tool_use\",\"id\":\"toolu_01NUVejujVo2y8WGVtZ49KAN\",\"name\":\"tavily_search_results_json\",\"input\":{\"input\":\"Oppenheimer 2023 film director age\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "tool_use",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "name": "tavily_search_results_json",
                  "input": {
                    "input": "Oppenheimer 2023 film director age"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_015MqAHr84dBCAqBgjou41Km",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 409,
                  "output_tokens": 68
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "tavily_search_results_json",
                  "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "tavily_search_results_json",
                  "args": {
                    "input": "Oppenheimer 2023 film director age"
                  },
                  "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronology — it is a lot.\\n It’s also at Berkeley that Oppenheimer meets the project’s military head, Leslie Groves (a predictably good Damon), who makes him Los Alamos’s director, despite the leftist causes he supported — among them, the fight against fascism during the Spanish Civil War — and some of his associations, including with Communist Party members like his brother, Frank (Dylan Arnold).\\n\",\"score\":0.91831,\"raw_content\":null}]"
    },
    {
      "action": {
        "tool": "calculator",
        "toolInput": {
          "input": "52 * 365"
        },
        "toolCallId": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
        "log": "Invoking \"calculator\" with {\"input\":\"52 * 365\"}\n[{\"type\":\"text\",\"text\":\"Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\\n\\n- He is a British-American film director, producer and screenwriter.\\n- He was born on July 30, 1970, making him currently 52 years old.\\n\\nTo calculate his age in days:\"},{\"type\":\"tool_use\",\"id\":\"toolu_01NVTbm5aNYSm1wGYb6XF7jE\",\"name\":\"calculator\",\"input\":{\"input\":\"52 * 365\"}}]",
        "messageLog": [
          {
            "lc": 1,
            "type": "constructor",
            "id": [
              "langchain_core",
              "messages",
              "AIMessageChunk"
            ],
            "kwargs": {
              "content": [
                {
                  "type": "text",
                  "text": "Based on the search results, the 2023 film Oppenheimer was directed by Christopher Nolan. Some key information about Christopher Nolan:\n\n- He is a British-American film director, producer and screenwriter.\n- He was born on July 30, 1970, making him currently 52 years old.\n\nTo calculate his age in days:"
                },
                {
                  "type": "tool_use",
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                  "name": "calculator",
                  "input": {
                    "input": "52 * 365"
                  }
                }
              ],
              "additional_kwargs": {
                "id": "msg_01RBDqmJKNXiEjgt5Xrng4mz",
                "type": "message",
                "role": "assistant",
                "model": "claude-3-sonnet-20240229",
                "stop_sequence": null,
                "usage": {
                  "input_tokens": 2810,
                  "output_tokens": 137
                },
                "stop_reason": "tool_use"
              },
              "tool_call_chunks": [
                {
                  "name": "calculator",
                  "args": "{\"input\":\"52 * 365\"}",
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE",
                  "index": 0
                }
              ],
              "tool_calls": [
                {
                  "name": "calculator",
                  "args": {
                    "input": "52 * 365"
                  },
                  "id": "toolu_01NVTbm5aNYSm1wGYb6XF7jE"
                }
              ],
              "invalid_tool_calls": [],
              "response_metadata": {}
            }
          }
        ]
      },
      "observation": "18980"
    }
  ],
  "agent_scratchpad": [
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "AIMessageChunk"
      ],
      "kwargs": {
        "content": [
          {
            "type": "tool_use",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "name": "tavily_search_results_json",
            "input": {
              "input": "Oppenheimer 2023 film director age"
            }
          }
        ],
        "additional_kwargs": {
          "id": "msg_015MqAHr84dBCAqBgjou41Km",
          "type": "message",
          "role": "assistant",
          "model": "claude-3-sonnet-20240229",
          "stop_sequence": null,
          "usage": {
            "input_tokens": 409,
            "output_tokens": 68
          },
          "stop_reason": "tool_use"
        },
        "tool_call_chunks": [
          {
            "name": "tavily_search_results_json",
            "args": "{\"input\":\"Oppenheimer 2023 film director age\"}",
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
            "index": 0
          }
        ],
        "tool_calls": [
          {
            "name": "tavily_search_results_json",
            "args": {
              "input": "Oppenheimer 2023 film director age"
            },
            "id": "toolu_01NUVejujVo2y8WGVtZ49KAN"
          }
        ],
        "invalid_tool_calls": [],
        "response_metadata": {}
      }
    },
    {
      "lc": 1,
      "type": "constructor",
      "id": [
        "langchain_core",
        "messages",
        "ToolMessage"
      ],
      "kwargs": {
        "tool_call_id": "toolu_01NUVejujVo2y8WGVtZ49KAN",
        "content": "[{\"title\":\"Oppenheimer (2023) - IMDb\",\"url\":\"https://www.imdb.com/title/tt15398776/\",\"content\":\"Oppenheimer: Directed by Christopher Nolan. With Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich. The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.\",\"score\":0.96643,\"raw_content\":null},{\"title\":\"Christopher Nolan's Oppenheimer - Rotten Tomatoes\",\"url\":\"https://editorial.rottentomatoes.com/article/everything-we-know-about-christopher-nolans-oppenheimer/\",\"content\":\"Billboards and movie theater pop-ups across Los Angeles have been ticking down for months now: Christopher Nolan's epic account of J. Robert Oppenheimer, the father of the atomic bomb, is nearing an explosive release on July 21, 2023. Nolan movies are always incredibly secretive, twists locked alongside totems behind safe doors, actors not spilling an ounce of Earl Grey tea.\",\"score\":0.92804,\"raw_content\":null},{\"title\":\"Oppenheimer (film) - Wikipedia\",\"url\":\"https://en.wikipedia.org/wiki/Oppenheimer_(film)\",\"content\":\"The film continued to hold well in the following weeks, making $32 million and $29.1 million in its fifth and sixth weekends.[174][175] As of September 10, 2023, the highest grossing territories were the United Kingdom ($72 million), Germany ($46.9 million), China ($46.8 million), France ($40.1 million) and Australia ($25.9 million).[176]\\nCritical response\\nThe film received critical acclaim.[a] Critics praised Oppenheimer primarily for its screenplay, the performances of the cast (particularly Murphy and Downey), and the visuals;[b] it was frequently cited as one of Nolan's best films,[191][192][183] and of 2023, although some criticism was aimed towards the writing of the female characters.[187] Hindustan Times reported that the film was also hailed as one of the best films of the 21st century.[193] He also chose to alternate between scenes in color and black-and-white to convey the story from both subjective and objective perspectives, respectively,[68] with most of Oppenheimer's view shown via the former, while the latter depicts a \\\"more objective view of his story from a different character's point of view\\\".[69][67] Wanting to make the film as subjective as possible, the production team decided to include visions of Oppenheimer's conceptions of the quantum world and waves of energy.[70] Nolan noted that Oppenheimer never publicly apologized for his role in the atomic bombings of Hiroshima and Nagasaki, but still desired to portray Oppenheimer as feeling genuine guilt for his actions, believing this to be accurate.[71]\\nI think of any character I've dealt with, Oppenheimer is by far the most ambiguous and paradoxical. The production team was able to obtain government permission to film at White Sands Missile Range, but only at highly inconvenient hours, and therefore chose to film the scene elsewhere in the New Mexico desert.[2][95]\\nThe production filmed the Trinity test scenes in Belen, New Mexico, with Murphy climbing a 100-foot steel tower, a replica of the original site used in the Manhattan Project, in rough weather.[2][95]\\nA special set was built in which gasoline, propane, aluminum powder, and magnesium were used to create the explosive effect.[54] Although they used miniatures for the practical effect, the film's special effects supervisor Scott R. Fisher referred to them as \\\"big-atures\\\", since the special effects team had tried to build the models as physically large as possible. He felt that \\\"while our relationship with that [nuclear] fear has ebbed and flowed with time, the threat itself never actually went away\\\", and felt the 2022 Russian invasion of Ukraine had caused a resurgence of nuclear anxiety.[54] Nolan had also penned a script for a biopic of Howard Hughes approximately during the time of production of Martin Scorsese's The Aviator (2004), which had given him insight on how to write a script regarding a person's life.[53] Emily Blunt described the Oppenheimer script as \\\"emotional\\\" and resembling that of a thriller, while also remarking that Nolan had \\\"Trojan-Horsed a biopic into a thriller\\\".[72]\\nCasting\\nOppenheimer marks the sixth collaboration between Nolan and Murphy, and the first starring Murphy as the lead. [for Oppenheimer] in his approach to trying to deal with the consequences of what he'd been involved with\\\", while also underscoring that it is a \\\"huge shift in perception about the reality of Oppenheimer's perception\\\".[53] He wanted to execute a quick tonal shift after the atomic bombings of Hiroshima and Nagasaki, desiring to go from the \\\"highest triumphalism, the highest high, to the lowest low in the shortest amount of screen time possible\\\".[66] For the ending, Nolan chose to make it intentionally vague to be open to interpretation and refrained from being didactic or conveying specific messages in his work.\",\"score\":0.92404,\"raw_content\":null},{\"title\":\"'Oppenheimer' Director Christopher Nolan On Filmmaking at 53: \\\"I Try to ...\",\"url\":\"https://www.everythingzoomer.com/arts-entertainment/2023/11/21/oppenheimer-director-christopher-nolan-on-filmmaking-at-53-i-try-to-challenge-myself-with-every-film/\",\"content\":\"Oppenheimer will be available to own on 4K Ultra HD, Blu-ray and DVD — including more than three hours of bonus features — on November 21.\\nRELATED:\\nVisiting the Trinity Site Featured in ‘Oppenheimer’ Is a Sobering Reminder of the Horror of Nuclear Weapons\\nBarbenheimer: How ‘Barbie’ and ‘Oppenheimer’ Became the Unlikely Movie Marriage of the Summer\\nBlast From the Past: ‘Asteroid City’ & ‘Oppenheimer’ and the Age of Nuclear Anxiety\\nEXPLORE  HealthMoneyTravelFoodStyleBook ClubClassifieds#ZoomerDailyPolicy & PerspectiveArts & EntertainmentStars & RoyaltySex & Love\\nCONNECT  FacebookTwitterInstagram\\nSUBSCRIBE  Terms of Subscription ServiceE-NewslettersSubscribe to Zoomer Magazine\\nBROWSE  AboutMastheadContact UsAdvertise with UsPrivacy Policy\\nEverythingZoomer.com is part of the ZoomerMedia Digital Network “I think with experience — and with the experience of watching your films with an audience over the years — you do more and more recognize the human elements that people respond to, and the things that move you and the things that move the audience.”\\n “What’s interesting, as you watch the films over time, is that some of his preoccupations are the same, but then some of them have changed over time with who he is as a person and what’s going on in his own life,” Thomas said.\\n The British-American director’s latest explosive drama, Oppenheimer, which has earned upwards of US$940 million at the global box office, follows theoretical physicist J. Robert Oppenheimer (played by Cillian Murphy) as he leads the team creating the first atomic bomb, as director of the Manhattan Project’s Los Alamos Laboratory.\\n Subscribe\\nEverything Zoomer\\n‘Oppenheimer’ Director Christopher Nolan On Filmmaking at 53: “I Try to Challenge Myself with Every Film”\\nDirector Christopher Nolan poses upon his arrival for the premiere of the movie 'Oppenheimer' in Paris on July 11, 2023.\",\"score\":0.92002,\"raw_content\":null},{\"title\":\"'Oppenheimer' Review: A Man for Our Time - The New York Times\",\"url\":\"https://www.nytimes.com/2023/07/19/movies/oppenheimer-review-christopher-nolan.html\",\"content\":\"Instead, it is here that the film’s complexities and all its many fragments finally converge as Nolan puts the finishing touches on his portrait of a man who contributed to an age of transformational scientific discovery, who personified the intersection of science and politics, including in his role as a Communist boogeyman, who was transformed by his role in the creation of weapons of mass destruction and soon after raised the alarm about the dangers of nuclear war.\\n He served as director of a clandestine weapons lab built in a near-desolate stretch of Los Alamos, in New Mexico, where he and many other of the era’s most dazzling scientific minds puzzled through how to harness nuclear reactions for the weapons that killed tens of thousands instantly, ending the war in the Pacific.\\n Nolan integrates these black-and-white sections with the color ones, using scenes from the hearing and the confirmation — Strauss’s role in the hearing and his relationship with Oppenheimer directly affected the confirmation’s outcome — to create a dialectical synthesis. To signal his conceit, he stamps the film with the words “fission” (a splitting into parts) and “fusion” (a merging of elements); Nolan being Nolan, he further complicates the film by recurrently kinking up the overarching chronolog