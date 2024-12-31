Directory structure:
└── docs/
├── snippets/
│ └── snippet-intro.mdx
├── tools/
│ ├── firecrawlscrapewebsitetool.mdx
│ ├── youtubechannelsearchtool.mdx
│ ├── codeinterpretertool.mdx
│ ├── youtubevideosearchtool.mdx
│ ├── jsonsearchtool.mdx
│ ├── seleniumscrapingtool.mdx
│ ├── docxsearchtool.mdx
│ ├── codedocssearchtool.mdx
│ ├── websitesearchtool.mdx
│ ├── pdfsearchtool.mdx
│ ├── serperdevtool.mdx
│ ├── directoryreadtool.mdx
│ ├── githubsearchtool.mdx
│ ├── composiotool.mdx
│ ├── visiontool.mdx
│ ├── spidertool.mdx
│ ├── mysqltool.mdx
│ ├── exasearchtool.mdx
│ ├── browserbaseloadtool.mdx
│ ├── dalletool.mdx
│ ├── mdxsearchtool.mdx
│ ├── firecrawlcrawlwebsitetool.mdx
│ ├── filereadtool.mdx
│ ├── firecrawlsearchtool.mdx
│ ├── txtsearchtool.mdx
│ ├── csvsearchtool.mdx
│ ├── directorysearchtool.mdx
│ ├── pgsearchtool.mdx
│ ├── xmlsearchtool.mdx
│ ├── scrapewebsitetool.mdx
│ ├── nl2sqltool.mdx
│ └── filewritetool.mdx
├── introduction.mdx
├── images/
├── concepts/
│ ├── cli.mdx
│ ├── llamaindex-tools.mdx
│ ├── tasks.mdx
│ ├── knowledge.mdx
│ ├── flows.mdx
│ ├── planning.mdx
│ ├── memory.mdx
│ ├── langchain-tools.mdx
│ ├── agents.mdx
│ ├── training.mdx
│ ├── collaboration.mdx
│ ├── processes.mdx
│ ├── llms.mdx
│ ├── crews.mdx
│ ├── testing.mdx
│ └── tools.mdx
├── mint.json
├── examples/
│ └── example.mdx
├── telemetry.mdx
├── how-to/
│ ├── sequential-process.mdx
│ ├── langtrace-observability.mdx
│ ├── coding-agents.mdx
│ ├── llm-connections.mdx
│ ├── customizing-agents.mdx
│ ├── create-custom-tools.mdx
│ ├── kickoff-for-each.mdx
│ ├── conditional-tasks.mdx
│ ├── openlit-observability.mdx
│ ├── replay-tasks-from-latest-crew-kickoff.mdx
│ ├── multimodal-agents.mdx
│ ├── custom-manager-agent.mdx
│ ├── kickoff-async.mdx
│ ├── Portkey-Observability-and-Guardrails.md
│ ├── hierarchical-process.mdx
│ ├── force-tool-output-as-result.mdx
│ ├── agentops-observability.mdx
│ ├── human-input-on-execution.mdx
│ └── before-and-after-kickoff-hooks.mdx
├── installation.mdx
└── quickstart.mdx

Files Content:

# (Files content cropped to 300k characters, download full ingest to see more)

# File: /docs/snippets/snippet-intro.mdx

One of the core principles of software development is DRY (Don't Repeat
Yourself). This is a principle that apply to documentation as
well. If you find yourself repeating the same content in multiple places, you
should consider creating a custom snippet to keep your content in sync.

================================================
File: /docs/tools/firecrawlscrapewebsitetool.mdx
================================================

---

title: Firecrawl Scrape Website
description: The `FirecrawlScrapeWebsiteTool` is designed to scrape websites and convert them into clean markdown or structured data.
icon: fire-flame

---

# `FirecrawlScrapeWebsiteTool`

## Description

[Firecrawl](https://firecrawl.dev) is a platform for crawling and convert any website into clean markdown or structured data.

## Installation

- Get an API key from [firecrawl.dev](https://firecrawl.dev) and set it in environment variables (`FIRECRAWL_API_KEY`).
- Install the [Firecrawl SDK](https://github.com/mendableai/firecrawl) along with `crewai[tools]` package:

```shell
pip install firecrawl-py 'crewai[tools]'
```

## Example

Utilize the FirecrawlScrapeWebsiteTool as follows to allow your agent to load websites:

```python Code
from crewai_tools import FirecrawlScrapeWebsiteTool

tool = FirecrawlScrapeWebsiteTool(url='firecrawl.dev')
```

## Arguments

- `api_key`: Optional. Specifies Firecrawl API key. Defaults is the `FIRECRAWL_API_KEY` environment variable.
- `url`: The URL to scrape.
- `page_options`: Optional.
  - `onlyMainContent`: Optional. Only return the main content of the page excluding headers, navs, footers, etc.
  - `includeHtml`: Optional. Include the raw HTML content of the page. Will output a html key in the response.
- `extractor_options`: Optional. Options for LLM-based extraction of structured information from the page content
  - `mode`: The extraction mode to use, currently supports 'llm-extraction'
  - `extractionPrompt`: Optional. A prompt describing what information to extract from the page
  - `extractionSchema`: Optional. The schema for the data to be extracted
- `timeout`: Optional. Timeout in milliseconds for the request

================================================
File: /docs/tools/youtubechannelsearchtool.mdx
================================================

---

title: YouTube Channel RAG Search
description: The `YoutubeChannelSearchTool` is designed to perform a RAG (Retrieval-Augmented Generation) search within the content of a Youtube channel.
icon: youtube

---

# `YoutubeChannelSearchTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

This tool is designed to perform semantic searches within a specific Youtube channel's content.
Leveraging the RAG (Retrieval-Augmented Generation) methodology, it provides relevant search results,
making it invaluable for extracting information or finding specific content without the need to manually sift through videos.
It streamlines the search process within Youtube channels, catering to researchers, content creators, and viewers seeking specific information or topics.

## Installation

To utilize the YoutubeChannelSearchTool, the `crewai_tools` package must be installed. Execute the following command in your shell to install:

```shell
pip install 'crewai[tools]'
```

## Example

To begin using the YoutubeChannelSearchTool, follow the example below.
This demonstrates initializing the tool with a specific Youtube channel handle and conducting a search within that channel's content.

```python Code
from crewai_tools import YoutubeChannelSearchTool

# Initialize the tool to search within any Youtube channel's content the agent learns about during its execution
tool = YoutubeChannelSearchTool()

# OR

# Initialize the tool with a specific Youtube channel handle to target your search
tool = YoutubeChannelSearchTool(youtube_channel_handle='@exampleChannel')
```

## Arguments

- `youtube_channel_handle` : A mandatory string representing the Youtube channel handle. This parameter is crucial for initializing the tool to specify the channel you want to search within. The tool is designed to only search within the content of the provided channel handle.

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = YoutubeChannelSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/codeinterpretertool.mdx
================================================

---

title: Code Interpreter
description: The `CodeInterpreterTool` is a powerful tool designed for executing Python 3 code within a secure, isolated environment.
icon: code-simple

---

# `CodeInterpreterTool`

## Description

This tool enables the Agent to execute Python 3 code that it has generated autonomously. The code is run in a secure, isolated environment, ensuring safety regardless of the content.

This functionality is particularly valuable as it allows the Agent to create code, execute it within the same ecosystem,
obtain the results, and utilize that information to inform subsequent decisions and actions.

## Requirements

- Docker

## Installation

Install the `crewai_tools` package

```shell
pip install 'crewai[tools]'
```

## Example

Remember that when using this tool, the code must be generated by the Agent itself.
The code must be a Python3 code. And it will take some time for the first time to run
because it needs to build the Docker image.

```python Code
from crewai import Agent
from crewai_tools import CodeInterpreterTool

Agent(
    ...
    tools=[CodeInterpreterTool()],
)
```

We also provide a simple way to use it directly from the Agent.

```python Code
from crewai import Agent

agent = Agent(
    ...
    allow_code_execution=True,
)
```

================================================
File: /docs/tools/youtubevideosearchtool.mdx
================================================

---

title: YouTube Video RAG Search
description: The `YoutubeVideoSearchTool` is designed to perform a RAG (Retrieval-Augmented Generation) search within the content of a Youtube video.
icon: youtube

---

# `YoutubeVideoSearchTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

This tool is part of the `crewai_tools` package and is designed to perform semantic searches within Youtube video content, utilizing Retrieval-Augmented Generation (RAG) techniques.
It is one of several "Search" tools in the package that leverage RAG for different sources.
The YoutubeVideoSearchTool allows for flexibility in searches; users can search across any Youtube video content without specifying a video URL,
or they can target their search to a specific Youtube video by providing its URL.

## Installation

To utilize the `YoutubeVideoSearchTool`, you must first install the `crewai_tools` package.
This package contains the `YoutubeVideoSearchTool` among other utilities designed to enhance your data analysis and processing tasks.
Install the package by executing the following command in your terminal:

```shell
pip install 'crewai[tools]'
```

## Example

To integrate the YoutubeVideoSearchTool into your Python projects, follow the example below.
This demonstrates how to use the tool both for general Youtube content searches and for targeted searches within a specific video's content.

```python Code
from crewai_tools import YoutubeVideoSearchTool

# General search across Youtube content without specifying a video URL,
# so the agent can search within any Youtube video content
# it learns about its url during its operation
tool = YoutubeVideoSearchTool()

# Targeted search within a specific Youtube video's content
tool = YoutubeVideoSearchTool(
    youtube_video_url='https://youtube.com/watch?v=example'
)
```

## Arguments

The YoutubeVideoSearchTool accepts the following initialization arguments:

- `youtube_video_url`: An optional argument at initialization but required if targeting a specific Youtube video. It specifies the Youtube video URL path you want to search within.

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = YoutubeVideoSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/jsonsearchtool.mdx
================================================

---

title: JSON RAG Search
description: The `JSONSearchTool` is designed to search JSON files and return the most relevant results.
icon: file-code

---

# `JSONSearchTool`

<Note>
    The JSONSearchTool is currently in an experimental phase. This means the tool is under active development, and users might encounter unexpected behavior or changes. 
    We highly encourage feedback on any issues or suggestions for improvements.
</Note>

## Description

The JSONSearchTool is designed to facilitate efficient and precise searches within JSON file contents. It utilizes a RAG (Retrieve and Generate) search mechanism, allowing users to specify a JSON path for targeted searches within a particular JSON file. This capability significantly improves the accuracy and relevance of search results.

## Installation

To install the JSONSearchTool, use the following pip command:

```shell
pip install 'crewai[tools]'
```

## Usage Examples

Here are updated examples on how to utilize the JSONSearchTool effectively for searching within JSON files. These examples take into account the current implementation and usage patterns identified in the codebase.

```python Code
from crewai.json_tools import JSONSearchTool  # Updated import path

# General JSON content search
# This approach is suitable when the JSON path is either known beforehand or can be dynamically identified.
tool = JSONSearchTool()

# Restricting search to a specific JSON file
# Use this initialization method when you want to limit the search scope to a specific JSON file.
tool = JSONSearchTool(json_path='./path/to/your/file.json')
```

## Arguments

- `json_path` (str, optional): Specifies the path to the JSON file to be searched. This argument is not required if the tool is initialized for a general search. When provided, it confines the search to the specified JSON file.

## Configuration Options

The JSONSearchTool supports extensive customization through a configuration dictionary. This allows users to select different models for embeddings and summarization based on their requirements.

```python Code
tool = JSONSearchTool(
    config={
        "llm": {
            "provider": "ollama",  # Other options include google, openai, anthropic, llama2, etc.
            "config": {
                "model": "llama2",
                # Additional optional configurations can be specified here.
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            },
        },
        "embedder": {
            "provider": "google", # or openai, ollama, ...
            "config": {
                "model": "models/embedding-001",
                "task_type": "retrieval_document",
                # Further customization options can be added here.
            },
        },
    }
)
```

================================================
File: /docs/tools/seleniumscrapingtool.mdx
================================================

---

title: Selenium Scraper
description: The `SeleniumScrapingTool` is designed to extract and read the content of a specified website using Selenium.
icon: clipboard-user

---

# `SeleniumScrapingTool`

<Note>
    This tool is currently in development. As we refine its capabilities, users may encounter unexpected behavior. 
    Your feedback is invaluable to us for making improvements.
</Note>

## Description

The SeleniumScrapingTool is crafted for high-efficiency web scraping tasks.
It allows for precise extraction of content from web pages by using CSS selectors to target specific elements.
Its design caters to a wide range of scraping needs, offering flexibility to work with any provided website URL.

## Installation

To get started with the SeleniumScrapingTool, install the crewai_tools package using pip:

```shell
pip install 'crewai[tools]'
```

## Usage Examples

Below are some scenarios where the SeleniumScrapingTool can be utilized:

```python Code
from crewai_tools import SeleniumScrapingTool

# Example 1:
# Initialize the tool without any parameters to scrape
# the current page it navigates to
tool = SeleniumScrapingTool()

# Example 2:
# Scrape the entire webpage of a given URL
tool = SeleniumScrapingTool(website_url='https://example.com')

# Example 3:
# Target and scrape a specific CSS element from a webpage
tool = SeleniumScrapingTool(
    website_url='https://example.com',
    css_element='.main-content'
)

# Example 4:
# Perform scraping with additional parameters for a customized experience
tool = SeleniumScrapingTool(
    website_url='https://example.com',
    css_element='.main-content',
    cookie={'name': 'user', 'value': 'John Doe'},
    wait_time=10
)
```

## Arguments

The following parameters can be used to customize the SeleniumScrapingTool's scraping process:

| Argument        | Type     | Description                                                                                                                                   |
| :-------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| **website_url** | `string` | **Mandatory**. Specifies the URL of the website from which content is to be scraped.                                                          |
| **css_element** | `string` | **Mandatory**. The CSS selector for a specific element to target on the website, enabling focused scraping of a particular part of a webpage. |
| **cookie**      | `object` | **Optional**. A dictionary containing cookie information, useful for simulating a logged-in session to access restricted content.             |
| **wait_time**   | `int`    | **Optional**. Specifies the delay (in seconds) before scraping, allowing the website and any dynamic content to fully load.                   |

<Warning>
    Since the `SeleniumScrapingTool` is under active development, the parameters and functionality may evolve over time. 
    Users are encouraged to keep the tool updated and report any issues or suggestions for enhancements.
</Warning>

================================================
File: /docs/tools/docxsearchtool.mdx
================================================

---

title: DOCX RAG Search
description: The `DOCXSearchTool` is a RAG tool designed for semantic searching within DOCX documents.
icon: file-word

---

# `DOCXSearchTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

The `DOCXSearchTool` is a RAG tool designed for semantic searching within DOCX documents.
It enables users to effectively search and extract relevant information from DOCX files using query-based searches.
This tool is invaluable for data analysis, information management, and research tasks,
streamlining the process of finding specific information within large document collections.

## Installation

Install the crewai_tools package by running the following command in your terminal:

```shell
pip install 'crewai[tools]'
```

## Example

The following example demonstrates initializing the DOCXSearchTool to search within any DOCX file's content or with a specific DOCX file path.

```python Code
from crewai_tools import DOCXSearchTool

# Initialize the tool to search within any DOCX file's content
tool = DOCXSearchTool()

# OR

# Initialize the tool with a specific DOCX file,
# so the agent can only search the content of the specified DOCX file
tool = DOCXSearchTool(docx='path/to/your/document.docx')
```

## Arguments

The following parameters can be used to customize the `DOCXSearchTool`'s behavior:

| Argument | Type     | Description                                                                                                                                                                                                        |
| :------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **docx** | `string` | _Optional_. An argument that specifies the path to the DOCX file you want to search. If not provided during initialization, the tool allows for later specification of any DOCX file's content path for searching. |

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = DOCXSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/codedocssearchtool.mdx
================================================

---

title: Code Docs RAG Search
description: The `CodeDocsSearchTool` is a powerful RAG (Retrieval-Augmented Generation) tool designed for semantic searches within code documentation.
icon: code

---

# `CodeDocsSearchTool`

<Note>
    **Experimental**: We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

The CodeDocsSearchTool is a powerful RAG (Retrieval-Augmented Generation) tool designed for semantic searches within code documentation.
It enables users to efficiently find specific information or topics within code documentation. By providing a `docs_url` during initialization,
the tool narrows down the search to that particular documentation site. Alternatively, without a specific `docs_url`,
it searches across a wide array of code documentation known or discovered throughout its execution, making it versatile for various documentation search needs.

## Installation

To start using the CodeDocsSearchTool, first, install the crewai_tools package via pip:

```shell
pip install 'crewai[tools]'
```

## Example

Utilize the CodeDocsSearchTool as follows to conduct searches within code documentation:

```python Code
from crewai_tools import CodeDocsSearchTool

# To search any code documentation content
# if the URL is known or discovered during its execution:
tool = CodeDocsSearchTool()

# OR

# To specifically focus your search on a given documentation site
# by providing its URL:
tool = CodeDocsSearchTool(docs_url='https://docs.example.com/reference')
```

<Note>  
    Substitute 'https://docs.example.com/reference' with your target documentation URL 
    and 'How to use search tool' with the search query relevant to your needs.
</Note>

## Arguments

The following parameters can be used to customize the `CodeDocsSearchTool`'s behavior:

| Argument     | Type     | Description                                                             |
| :----------- | :------- | :---------------------------------------------------------------------- |
| **docs_url** | `string` | _Optional_. Specifies the URL of the code documentation to be searched. |

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = CodeDocsSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/websitesearchtool.mdx
================================================

---

title: Website RAG Search
description: The `WebsiteSearchTool` is designed to perform a RAG (Retrieval-Augmented Generation) search within the content of a website.
icon: globe-stand

---

# `WebsiteSearchTool`

<Note>
    The WebsiteSearchTool is currently in an experimental phase. We are actively working on incorporating this tool into our suite of offerings and will update the documentation accordingly.
</Note>

## Description

The WebsiteSearchTool is designed as a concept for conducting semantic searches within the content of websites.
It aims to leverage advanced machine learning models like Retrieval-Augmented Generation (RAG) to navigate and extract information from specified URLs efficiently.
This tool intends to offer flexibility, allowing users to perform searches across any website or focus on specific websites of interest.
Please note, the current implementation details of the WebsiteSearchTool are under development, and its functionalities as described may not yet be accessible.

## Installation

To prepare your environment for when the WebsiteSearchTool becomes available, you can install the foundational package with:

```shell
pip install 'crewai[tools]'
```

This command installs the necessary dependencies to ensure that once the tool is fully integrated, users can start using it immediately.

## Example Usage

Below are examples of how the WebsiteSearchTool could be utilized in different scenarios. Please note, these examples are illustrative and represent planned functionality:

```python Code
from crewai_tools import WebsiteSearchTool

# Example of initiating tool that agents can use
# to search across any discovered websites
tool = WebsiteSearchTool()

# Example of limiting the search to the content of a specific website,
# so now agents can only search within that website
tool = WebsiteSearchTool(website='https://example.com')
```

## Arguments

- `website`: An optional argument intended to specify the website URL for focused searches. This argument is designed to enhance the tool's flexibility by allowing targeted searches when necessary.

## Customization Options

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = WebsiteSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/pdfsearchtool.mdx
================================================

---

title: PDF RAG Search
description: The `PDFSearchTool` is designed to search PDF files and return the most relevant results.
icon: file-pdf

---

# `PDFSearchTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

The PDFSearchTool is a RAG tool designed for semantic searches within PDF content. It allows for inputting a search query and a PDF document, leveraging advanced search techniques to find relevant content efficiently.
This capability makes it especially useful for extracting specific information from large PDF files quickly.

## Installation

To get started with the PDFSearchTool, first, ensure the crewai_tools package is installed with the following command:

```shell
pip install 'crewai[tools]'
```

## Example

Here's how to use the PDFSearchTool to search within a PDF document:

```python Code
from crewai_tools import PDFSearchTool

# Initialize the tool allowing for any PDF content search if the path is provided during execution
tool = PDFSearchTool()

# OR

# Initialize the tool with a specific PDF path for exclusive search within that document
tool = PDFSearchTool(pdf='path/to/your/document.pdf')
```

## Arguments

- `pdf`: **Optional** The PDF path for the search. Can be provided at initialization or within the `run` method's arguments. If provided at initialization, the tool confines its search to the specified document.

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = PDFSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/serperdevtool.mdx
================================================

---

title: Google Serper Search
description: The `SerperDevTool` is designed to search the internet and return the most relevant results.
icon: google

---

# `SerperDevTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

This tool is designed to perform a semantic search for a specified query from a text's content across the internet. It utilizes the [serper.dev](https://serper.dev) API
to fetch and display the most relevant search results based on the query provided by the user.

## Installation

To incorporate this tool into your project, follow the installation instructions below:

```shell
pip install 'crewai[tools]'
```

## Example

The following example demonstrates how to initialize the tool and execute a search with a given query:

```python Code
from crewai_tools import SerperDevTool

# Initialize the tool for internet searching capabilities
tool = SerperDevTool()
```

## Steps to Get Started

To effectively use the `SerperDevTool`, follow these steps:

1. **Package Installation**: Confirm that the `crewai[tools]` package is installed in your Python environment.
2. **API Key Acquisition**: Acquire a `serper.dev` API key by registering for a free account at `serper.dev`.
3. **Environment Configuration**: Store your obtained API key in an environment variable named `SERPER_API_KEY` to facilitate its use by the tool.

## Parameters

The `SerperDevTool` comes with several parameters that will be passed to the API :

- **search_url**: The URL endpoint for the search API. (Default is `https://google.serper.dev/search`)

- **country**: Optional. Specify the country for the search results.
- **location**: Optional. Specify the location for the search results.
- **locale**: Optional. Specify the locale for the search results.
- **n_results**: Number of search results to return. Default is `10`.

The values for `country`, `location`, `locale` and `search_url` can be found on the [Serper Playground](https://serper.dev/playground).

## Example with Parameters

Here is an example demonstrating how to use the tool with additional parameters:

```python Code
from crewai_tools import SerperDevTool

tool = SerperDevTool(
    search_url="https://google.serper.dev/scholar",
    n_results=2,
)

print(tool.run(search_query="ChatGPT"))

# Using Tool: Search the internet

# Search results: Title: Role of chat gpt in public health
# Link: https://link.springer.com/article/10.1007/s10439-023-03172-7
# Snippet: … ChatGPT in public health. In this overview, we will examine the potential uses of ChatGPT in
# ---
# Title: Potential use of chat gpt in global warming
# Link: https://link.springer.com/article/10.1007/s10439-023-03171-8
# Snippet: … as ChatGPT, have the potential to play a critical role in advancing our understanding of climate
# ---

```

```python Code
from crewai_tools import SerperDevTool

tool = SerperDevTool(
    country="fr",
    locale="fr",
    location="Paris, Paris, Ile-de-France, France",
    n_results=2,
)

print(tool.run(search_query="Jeux Olympiques"))

# Using Tool: Search the internet

# Search results: Title: Jeux Olympiques de Paris 2024 - Actualités, calendriers, résultats
# Link: https://olympics.com/fr/paris-2024
# Snippet: Quels sont les sports présents aux Jeux Olympiques de Paris 2024 ? · Athlétisme · Aviron · Badminton · Basketball · Basketball 3x3 · Boxe · Breaking · Canoë ...
# ---
# Title: Billetterie Officielle de Paris 2024 - Jeux Olympiques et Paralympiques
# Link: https://tickets.paris2024.org/
# Snippet: Achetez vos billets exclusivement sur le site officiel de la billetterie de Paris 2024 pour participer au plus grand événement sportif au monde.
# ---
```

## Conclusion

By integrating the `SerperDevTool` into Python projects, users gain the ability to conduct real-time, relevant searches across the internet directly from their applications.
The updated parameters allow for more customized and localized search results. By adhering to the setup and usage guidelines provided, incorporating this tool into projects is streamlined and straightforward.

================================================
File: /docs/tools/directoryreadtool.mdx
================================================

---

title: Directory Read
description: The `DirectoryReadTool` is a powerful utility designed to provide a comprehensive listing of directory contents.
icon: folder-tree

---

# `DirectoryReadTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

The DirectoryReadTool is a powerful utility designed to provide a comprehensive listing of directory contents.
It can recursively navigate through the specified directory, offering users a detailed enumeration of all files, including those within subdirectories.
This tool is crucial for tasks that require a thorough inventory of directory structures or for validating the organization of files within directories.

## Installation

To utilize the DirectoryReadTool in your project, install the `crewai_tools` package. If this package is not yet part of your environment, you can install it using pip with the command below:

```shell
pip install 'crewai[tools]'
```

This command installs the latest version of the `crewai_tools` package, granting access to the DirectoryReadTool among other utilities.

## Example

Employing the DirectoryReadTool is straightforward. The following code snippet demonstrates how to set it up and use the tool to list the contents of a specified directory:

```python Code
from crewai_tools import DirectoryReadTool

# Initialize the tool so the agent can read any directory's content
# it learns about during execution
tool = DirectoryReadTool()

# OR

# Initialize the tool with a specific directory,
# so the agent can only read the content of the specified directory
tool = DirectoryReadTool(directory='/path/to/your/directory')
```

## Arguments

The following parameters can be used to customize the `DirectoryReadTool`'s behavior:

| Argument      | Type     | Description                                                                                                                                                                                                   |
| :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **directory** | `string` | _Optional_. An argument that specifies the path to the directory whose contents you wish to list. It accepts both absolute and relative paths, guiding the tool to the desired directory for content listing. |

================================================
File: /docs/tools/githubsearchtool.mdx
================================================

---

title: Github Search
description: The `GithubSearchTool` is designed to search websites and convert them into clean markdown or structured data.
icon: github

---

# `GithubSearchTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

The GithubSearchTool is a Retrieval-Augmented Generation (RAG) tool specifically designed for conducting semantic searches within GitHub repositories. Utilizing advanced semantic search capabilities, it sifts through code, pull requests, issues, and repositories, making it an essential tool for developers, researchers, or anyone in need of precise information from GitHub.

## Installation

To use the GithubSearchTool, first ensure the crewai_tools package is installed in your Python environment:

```shell
pip install 'crewai[tools]'
```

This command installs the necessary package to run the GithubSearchTool along with any other tools included in the crewai_tools package.

## Example

Here’s how you can use the GithubSearchTool to perform semantic searches within a GitHub repository:

```python Code
from crewai_tools import GithubSearchTool

# Initialize the tool for semantic searches within a specific GitHub repository
tool = GithubSearchTool(
	github_repo='https://github.com/example/repo',
	gh_token='your_github_personal_access_token',
	content_types=['code', 'issue'] # Options: code, repo, pr, issue
)

# OR

# Initialize the tool for semantic searches within a specific GitHub repository, so the agent can search any repository if it learns about during its execution
tool = GithubSearchTool(
	gh_token='your_github_personal_access_token',
	content_types=['code', 'issue'] # Options: code, repo, pr, issue
)
```

## Arguments

- `github_repo` : The URL of the GitHub repository where the search will be conducted. This is a mandatory field and specifies the target repository for your search.
- `gh_token` : Your GitHub Personal Access Token (PAT) required for authentication. You can create one in your GitHub account settings under Developer Settings > Personal Access Tokens.
- `content_types` : Specifies the types of content to include in your search. You must provide a list of content types from the following options: `code` for searching within the code,
  `repo` for searching within the repository's general information, `pr` for searching within pull requests, and `issue` for searching within issues.
  This field is mandatory and allows tailoring the search to specific content types within the GitHub repository.

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

````python Code
tool = GithubSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)

================================================
File: /docs/tools/composiotool.mdx
================================================
---
title: Composio Tool
description: The `ComposioTool` is a wrapper around the composio set of tools and gives your agent access to a wide variety of tools from the Composio SDK.
icon: gear-code
---

# `ComposioTool`

## Description

This tools is a wrapper around the composio set of tools and gives your agent access to a wide variety of tools from the Composio SDK.

## Installation

To incorporate this tool into your project, follow the installation instructions below:

```shell
pip install composio-core
pip install 'crewai[tools]'
````

after the installation is complete, either run `composio login` or export your composio API key as `COMPOSIO_API_KEY`.

## Example

The following example demonstrates how to initialize the tool and execute a github action:

1. Initialize Composio tools

```python Code
from composio import App
from crewai_tools import ComposioTool
from crewai import Agent, Task


tools = [ComposioTool.from_action(action=Action.GITHUB_ACTIVITY_STAR_REPO_FOR_AUTHENTICATED_USER)]
```

If you don't know what action you want to use, use `from_app` and `tags` filter to get relevant actions

```python Code
tools = ComposioTool.from_app(App.GITHUB, tags=["important"])
```

or use `use_case` to search relevant actions

```python Code
tools = ComposioTool.from_app(App.GITHUB, use_case="Star a github repository")
```

2. Define agent

```python Code
crewai_agent = Agent(
    role="Github Agent",
    goal="You take action on Github using Github APIs",
    backstory=(
        "You are AI agent that is responsible for taking actions on Github "
        "on users behalf. You need to take action on Github using Github APIs"
    ),
    verbose=True,
    tools=tools,
)
```

3. Execute task

```python Code
task = Task(
    description="Star a repo ComposioHQ/composio on GitHub",
    agent=crewai_agent,
    expected_output="if the star happened",
)

task.execute()
```

- More detailed list of tools can be found [here](https://app.composio.dev)

================================================
File: /docs/tools/visiontool.mdx
================================================

---

title: Vision Tool
description: The `VisionTool` is designed to extract text from images.
icon: eye

---

# `VisionTool`

## Description

This tool is used to extract text from images. When passed to the agent it will extract the text from the image and then use it to generate a response, report or any other output.
The URL or the PATH of the image should be passed to the Agent.

## Installation

Install the crewai_tools package

```shell
pip install 'crewai[tools]'
```

## Usage

In order to use the VisionTool, the OpenAI API key should be set in the environment variable `OPENAI_API_KEY`.

```python Code
from crewai_tools import VisionTool

vision_tool = VisionTool()

@agent
def researcher(self) -> Agent:
    '''
    This agent uses the VisionTool to extract text from images.
    '''
    return Agent(
        config=self.agents_config["researcher"],
        allow_delegation=False,
        tools=[vision_tool]
    )
```

## Arguments

The VisionTool requires the following arguments:

| Argument           | Type     | Description                                                                      |
| :----------------- | :------- | :------------------------------------------------------------------------------- |
| **image_path_url** | `string` | **Mandatory**. The path to the image file from which text needs to be extracted. |

================================================
File: /docs/tools/spidertool.mdx
================================================

---

title: Spider Scraper
description: The `SpiderTool` is designed to extract and read the content of a specified website using Spider.
icon: spider-web

---

# `SpiderTool`

## Description

[Spider](https://spider.cloud/?ref=crewai) is the [fastest](https://github.com/spider-rs/spider/blob/main/benches/BENCHMARKS.md#benchmark-results)
open source scraper and crawler that returns LLM-ready data.
It converts any website into pure HTML, markdown, metadata or text while enabling you to crawl with custom actions using AI.

## Installation

To use the `SpiderTool` you need to download the [Spider SDK](https://pypi.org/project/spider-client/)
and the `crewai[tools]` SDK too:

```shell
pip install spider-client 'crewai[tools]'
```

## Example

This example shows you how you can use the `SpiderTool` to enable your agent to scrape and crawl websites.
The data returned from the Spider API is already LLM-ready, so no need to do any cleaning there.

```python Code
from crewai_tools import SpiderTool

def main():
    spider_tool = SpiderTool()

    searcher = Agent(
        role="Web Research Expert",
        goal="Find related information from specific URL's",
        backstory="An expert web researcher that uses the web extremely well",
        tools=[spider_tool],
        verbose=True,
    )

    return_metadata = Task(
        description="Scrape https://spider.cloud with a limit of 1 and enable metadata",
        expected_output="Metadata and 10 word summary of spider.cloud",
        agent=searcher
    )

    crew = Crew(
        agents=[searcher],
        tasks=[
            return_metadata,
        ],
        verbose=2
    )

    crew.kickoff()

if __name__ == "__main__":
    main()
```

## Arguments

| Argument              | Type     | Description                                                                                                                       |
| :-------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **api_key**           | `string` | Specifies Spider API key. If not specified, it looks for `SPIDER_API_KEY` in environment variables.                               |
| **params**            | `object` | Optional parameters for the request. Defaults to `{"return_format": "markdown"}` to optimize content for LLMs.                    |
| **request**           | `string` | Type of request to perform (`http`, `chrome`, `smart`). `smart` defaults to HTTP, switching to JavaScript rendering if needed.    |
| **limit**             | `int`    | Max pages to crawl per website. Set to `0` or omit for unlimited.                                                                 |
| **depth**             | `int`    | Max crawl depth. Set to `0` for no limit.                                                                                         |
| **cache**             | `bool`   | Enables HTTP caching to speed up repeated runs. Default is `true`.                                                                |
| **budget**            | `object` | Sets path-based limits for crawled pages, e.g., `{"*":1}` for root page only.                                                     |
| **locale**            | `string` | Locale for the request, e.g., `en-US`.                                                                                            |
| **cookies**           | `string` | HTTP cookies for the request.                                                                                                     |
| **stealth**           | `bool`   | Enables stealth mode for Chrome requests to avoid detection. Default is `true`.                                                   |
| **headers**           | `object` | HTTP headers as a map of key-value pairs for all requests.                                                                        |
| **metadata**          | `bool`   | Stores metadata about pages and content, aiding AI interoperability. Defaults to `false`.                                         |
| **viewport**          | `object` | Sets Chrome viewport dimensions. Default is `800x600`.                                                                            |
| **encoding**          | `string` | Specifies encoding type, e.g., `UTF-8`, `SHIFT_JIS`.                                                                              |
| **subdomains**        | `bool`   | Includes subdomains in the crawl. Default is `false`.                                                                             |
| **user_agent**        | `string` | Custom HTTP user agent. Defaults to a random agent.                                                                               |
| **store_data**        | `bool`   | Enables data storage for the request. Overrides `storageless` when set. Default is `false`.                                       |
| **gpt_config**        | `object` | Allows AI to generate crawl actions, with optional chaining steps via an array for `"prompt"`.                                    |
| **fingerprint**       | `bool`   | Enables advanced fingerprinting for Chrome.                                                                                       |
| **storageless**       | `bool`   | Prevents all data storage, including AI embeddings. Default is `false`.                                                           |
| **readability**       | `bool`   | Pre-processes content for reading via [Mozilla’s readability](https://github.com/mozilla/readability). Improves content for LLMs. |
| **return_format**     | `string` | Format to return data: `markdown`, `raw`, `text`, `html2text`. Use `raw` for default page format.                                 |
| **proxy_enabled**     | `bool`   | Enables high-performance proxies to avoid network-level blocking.                                                                 |
| **query_selector**    | `string` | CSS query selector for content extraction from markup.                                                                            |
| **full_resources**    | `bool`   | Downloads all resources linked to the website.                                                                                    |
| **request_timeout**   | `int`    | Timeout in seconds for requests (5-60). Default is `30`.                                                                          |
| **run_in_background** | `bool`   | Runs the request in the background, useful for data storage and triggering dashboard crawls. No effect if `storageless` is set.   |

================================================
File: /docs/tools/mysqltool.mdx
================================================

---

title: MySQL RAG Search
description: The `MySQLSearchTool` is designed to search MySQL databases and return the most relevant results.
icon: database

---

# `MySQLSearchTool`

## Description

This tool is designed to facilitate semantic searches within MySQL database tables. Leveraging the RAG (Retrieve and Generate) technology,
the MySQLSearchTool provides users with an efficient means of querying database table content, specifically tailored for MySQL databases.
It simplifies the process of finding relevant data through semantic search queries, making it an invaluable resource for users needing
to perform advanced queries on extensive datasets within a MySQL database.

## Installation

To install the `crewai_tools` package and utilize the MySQLSearchTool, execute the following command in your terminal:

```shell
pip install 'crewai[tools]'
```

## Example

Below is an example showcasing how to use the MySQLSearchTool to conduct a semantic search on a table within a MySQL database:

```python Code
from crewai_tools import MySQLSearchTool

# Initialize the tool with the database URI and the target table name
tool = MySQLSearchTool(
    db_uri='mysql://user:password@localhost:3306/mydatabase',
    table_name='employees'
)
```

## Arguments

The MySQLSearchTool requires the following arguments for its operation:

- `db_uri`: A string representing the URI of the MySQL database to be queried. This argument is mandatory and must include the necessary authentication details and the location of the database.
- `table_name`: A string specifying the name of the table within the database on which the semantic search will be performed. This argument is mandatory.

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = MySQLSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google",
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/exasearchtool.mdx
================================================

---

title: EXA Search Web Loader
description: The `EXASearchTool` is designed to perform a semantic search for a specified query from a text's content across the internet.
icon: globe-pointer

---

# `EXASearchTool`

## Description

The EXASearchTool is designed to perform a semantic search for a specified query from a text's content across the internet.
It utilizes the [exa.ai](https://exa.ai/) API to fetch and display the most relevant search results based on the query provided by the user.

## Installation

To incorporate this tool into your project, follow the installation instructions below:

```shell
pip install 'crewai[tools]'
```

## Example

The following example demonstrates how to initialize the tool and execute a search with a given query:

```python Code
from crewai_tools import EXASearchTool

# Initialize the tool for internet searching capabilities
tool = EXASearchTool()
```

## Steps to Get Started

To effectively use the EXASearchTool, follow these steps:

<Steps>
    <Step title="Package Installation">
        Confirm that the `crewai[tools]` package is installed in your Python environment.
    </Step>
    <Step title="API Key Acquisition">
        Acquire a [exa.ai](https://exa.ai/) API key by registering for a free account at [exa.ai](https://exa.ai/).
    </Step>
    <Step title="Environment Configuration">
        Store your obtained API key in an environment variable named `EXA_API_KEY` to facilitate its use by the tool.
    </Step>
</Steps>

## Conclusion

By integrating the `EXASearchTool` into Python projects, users gain the ability to conduct real-time, relevant searches across the internet directly from their applications.
By adhering to the setup and usage guidelines provided, incorporating this tool into projects is streamlined and straightforward.

================================================
File: /docs/tools/browserbaseloadtool.mdx
================================================

---

title: Browserbase Web Loader
description: Browserbase is a developer platform to reliably run, manage, and monitor headless browsers.
icon: browser

---

# `BrowserbaseLoadTool`

## Description

[Browserbase](https://browserbase.com) is a developer platform to reliably run, manage, and monitor headless browsers.

Power your AI data retrievals with:

- [Serverless Infrastructure](https://docs.browserbase.com/under-the-hood) providing reliable browsers to extract data from complex UIs
- [Stealth Mode](https://docs.browserbase.com/features/stealth-mode) with included fingerprinting tactics and automatic captcha solving
- [Session Debugger](https://docs.browserbase.com/features/sessions) to inspect your Browser Session with networks timeline and logs
- [Live Debug](https://docs.browserbase.com/guides/session-debug-connection/browser-remote-control) to quickly debug your automation

## Installation

- Get an API key and Project ID from [browserbase.com](https://browserbase.com) and set it in environment variables (`BROWSERBASE_API_KEY`, `BROWSERBASE_PROJECT_ID`).
- Install the [Browserbase SDK](http://github.com/browserbase/python-sdk) along with `crewai[tools]` package:

```shell
pip install browserbase 'crewai[tools]'
```

## Example

Utilize the BrowserbaseLoadTool as follows to allow your agent to load websites:

```python Code
from crewai_tools import BrowserbaseLoadTool

# Initialize the tool with the Browserbase API key and Project ID
tool = BrowserbaseLoadTool()
```

## Arguments

The following parameters can be used to customize the `BrowserbaseLoadTool`'s behavior:

| Argument         | Type     | Description                                                                           |
| :--------------- | :------- | :------------------------------------------------------------------------------------ |
| **api_key**      | `string` | _Optional_. Browserbase API key. Default is `BROWSERBASE_API_KEY` env variable.       |
| **project_id**   | `string` | _Optional_. Browserbase Project ID. Default is `BROWSERBASE_PROJECT_ID` env variable. |
| **text_content** | `bool`   | _Optional_. Retrieve only text content. Default is `False`.                           |
| **session_id**   | `string` | _Optional_. Provide an existing Session ID.                                           |
| **proxy**        | `bool`   | _Optional_. Enable/Disable Proxies. Default is `False`.                               |

================================================
File: /docs/tools/dalletool.mdx
================================================

---

title: DALL-E Tool
description: The `DallETool` is a powerful tool designed for generating images from textual descriptions.
icon: image

---

# `DallETool`

## Description

This tool is used to give the Agent the ability to generate images using the DALL-E model. It is a transformer-based model that generates images from textual descriptions.
This tool allows the Agent to generate images based on the text input provided by the user.

## Installation

Install the crewai_tools package

```shell
pip install 'crewai[tools]'
```

## Example

Remember that when using this tool, the text must be generated by the Agent itself. The text must be a description of the image you want to generate.

```python Code
from crewai_tools import DallETool

Agent(
    ...
    tools=[DallETool()],
)
```

If needed you can also tweak the parameters of the DALL-E model by passing them as arguments to the `DallETool` class. For example:

```python Code
from crewai_tools import DallETool

dalle_tool = DallETool(model="dall-e-3",
                       size="1024x1024",
                       quality="standard",
                       n=1)

Agent(
    ...
    tools=[dalle_tool]
)
```

The parameters are based on the `client.images.generate` method from the OpenAI API. For more information on the parameters,
please refer to the [OpenAI API documentation](https://platform.openai.com/docs/guides/images/introduction?lang=python).

================================================
File: /docs/tools/mdxsearchtool.mdx
================================================

---

title: MDX RAG Search
description: The `MDXSearchTool` is designed to search MDX files and return the most relevant results.
icon: markdown

---

# `MDXSearchTool`

<Note>
    The MDXSearchTool is in continuous development. Features may be added or removed, and functionality could change unpredictably as we refine the tool.
</Note>

## Description

The MDX Search Tool is a component of the `crewai_tools` package aimed at facilitating advanced markdown language extraction. It enables users to effectively search and extract relevant information from MD files using query-based searches. This tool is invaluable for data analysis, information management, and research tasks, streamlining the process of finding specific information within large document collections.

## Installation

Before using the MDX Search Tool, ensure the `crewai_tools` package is installed. If it is not, you can install it with the following command:

```shell
pip install 'crewai[tools]'
```

## Usage Example

To use the MDX Search Tool, you must first set up the necessary environment variables. Then, integrate the tool into your crewAI project to begin your market research. Below is a basic example of how to do this:

```python Code
from crewai_tools import MDXSearchTool

# Initialize the tool to search any MDX content it learns about during execution
tool = MDXSearchTool()

# OR

# Initialize the tool with a specific MDX file path for an exclusive search within that document
tool = MDXSearchTool(mdx='path/to/your/document.mdx')
```

## Parameters

- mdx: **Optional**. Specifies the MDX file path for the search. It can be provided during initialization.

## Customization of Model and Embeddings

The tool defaults to using OpenAI for embeddings and summarization. For customization, utilize a configuration dictionary as shown below:

```python Code
tool = MDXSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # Options include google, openai, anthropic, llama2, etc.
            config=dict(
                model="llama2",
                # Optional parameters can be included here.
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # Optional title for the embeddings can be added here.
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/firecrawlcrawlwebsitetool.mdx
================================================

---

title: Firecrawl Crawl Website
description: The `FirecrawlCrawlWebsiteTool` is designed to crawl and convert websites into clean markdown or structured data.
icon: fire-flame

---

# `FirecrawlCrawlWebsiteTool`

## Description

[Firecrawl](https://firecrawl.dev) is a platform for crawling and convert any website into clean markdown or structured data.

## Installation

- Get an API key from [firecrawl.dev](https://firecrawl.dev) and set it in environment variables (`FIRECRAWL_API_KEY`).
- Install the [Firecrawl SDK](https://github.com/mendableai/firecrawl) along with `crewai[tools]` package:

```shell
pip install firecrawl-py 'crewai[tools]'
```

## Example

Utilize the FirecrawlScrapeFromWebsiteTool as follows to allow your agent to load websites:

```python Code
from crewai_tools import FirecrawlCrawlWebsiteTool

tool = FirecrawlCrawlWebsiteTool(url='firecrawl.dev')
```

## Arguments

- `api_key`: Optional. Specifies Firecrawl API key. Defaults is the `FIRECRAWL_API_KEY` environment variable.
- `url`: The base URL to start crawling from.
- `page_options`: Optional.
  - `onlyMainContent`: Optional. Only return the main content of the page excluding headers, navs, footers, etc.
  - `includeHtml`: Optional. Include the raw HTML content of the page. Will output a html key in the response.
- `crawler_options`: Optional. Options for controlling the crawling behavior.
  - `includes`: Optional. URL patterns to include in the crawl.
  - `exclude`: Optional. URL patterns to exclude from the crawl.
  - `generateImgAltText`: Optional. Generate alt text for images using LLMs (requires a paid plan).
  - `returnOnlyUrls`: Optional. If true, returns only the URLs as a list in the crawl status. Note: the response will be a list of URLs inside the data, not a list of documents.
  - `maxDepth`: Optional. Maximum depth to crawl. Depth 1 is the base URL, depth 2 includes the base URL and its direct children, and so on.
  - `mode`: Optional. The crawling mode to use. Fast mode crawls 4x faster on websites without a sitemap but may not be as accurate and shouldn't be used on heavily JavaScript-rendered websites.
  - `limit`: Optional. Maximum number of pages to crawl.
  - `timeout`: Optional. Timeout in milliseconds for the crawling operation.

================================================
File: /docs/tools/filereadtool.mdx
================================================

---

title: File Read
description: The `FileReadTool` is designed to read files from the local file system.
icon: folders

---

# `FileReadTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

The FileReadTool conceptually represents a suite of functionalities within the crewai_tools package aimed at facilitating file reading and content retrieval.
This suite includes tools for processing batch text files, reading runtime configuration files, and importing data for analytics.
It supports a variety of text-based file formats such as `.txt`, `.csv`, `.json`, and more. Depending on the file type, the suite offers specialized functionality,
such as converting JSON content into a Python dictionary for ease of use.

## Installation

To utilize the functionalities previously attributed to the FileReadTool, install the crewai_tools package:

```shell
pip install 'crewai[tools]'
```

## Usage Example

To get started with the FileReadTool:

```python Code
from crewai_tools import FileReadTool

# Initialize the tool to read any files the agents knows or lean the path for
file_read_tool = FileReadTool()

# OR

# Initialize the tool with a specific file path, so the agent can only read the content of the specified file
file_read_tool = FileReadTool(file_path='path/to/your/file.txt')
```

## Arguments

- `file_path`: The path to the file you want to read. It accepts both absolute and relative paths. Ensure the file exists and you have the necessary permissions to access it.

================================================
File: /docs/tools/firecrawlsearchtool.mdx
================================================

---

title: Firecrawl Search
description: The `FirecrawlSearchTool` is designed to search websites and convert them into clean markdown or structured data.
icon: fire-flame

---

# `FirecrawlSearchTool`

## Description

[Firecrawl](https://firecrawl.dev) is a platform for crawling and convert any website into clean markdown or structured data.

## Installation

- Get an API key from [firecrawl.dev](https://firecrawl.dev) and set it in environment variables (`FIRECRAWL_API_KEY`).
- Install the [Firecrawl SDK](https://github.com/mendableai/firecrawl) along with `crewai[tools]` package:

```shell
pip install firecrawl-py 'crewai[tools]'
```

## Example

Utilize the FirecrawlSearchTool as follows to allow your agent to load websites:

```python Code
from crewai_tools import FirecrawlSearchTool

tool = FirecrawlSearchTool(query='what is firecrawl?')
```

## Arguments

- `api_key`: Optional. Specifies Firecrawl API key. Defaults is the `FIRECRAWL_API_KEY` environment variable.
- `query`: The search query string to be used for searching.
- `page_options`: Optional. Options for result formatting.
  - `onlyMainContent`: Optional. Only return the main content of the page excluding headers, navs, footers, etc.
  - `includeHtml`: Optional. Include the raw HTML content of the page. Will output a html key in the response.
  - `fetchPageContent`: Optional. Fetch the full content of the page.
- `search_options`: Optional. Options for controlling the crawling behavior.
  - `limit`: Optional. Maximum number of pages to crawl.

================================================
File: /docs/tools/txtsearchtool.mdx
================================================

---

title: TXT RAG Search
description: The `TXTSearchTool` is designed to perform a RAG (Retrieval-Augmented Generation) search within the content of a text file.
icon: file-lines

---

# `TXTSearchTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

This tool is used to perform a RAG (Retrieval-Augmented Generation) search within the content of a text file.
It allows for semantic searching of a query within a specified text file's content,
making it an invaluable resource for quickly extracting information or finding specific sections of text based on the query provided.

## Installation

To use the `TXTSearchTool`, you first need to install the `crewai_tools` package.
This can be done using pip, a package manager for Python.
Open your terminal or command prompt and enter the following command:

```shell
pip install 'crewai[tools]'
```

This command will download and install the TXTSearchTool along with any necessary dependencies.

## Example

The following example demonstrates how to use the TXTSearchTool to search within a text file.
This example shows both the initialization of the tool with a specific text file and the subsequent search within that file's content.

```python Code
from crewai_tools import TXTSearchTool

# Initialize the tool to search within any text file's content
# the agent learns about during its execution
tool = TXTSearchTool()

# OR

# Initialize the tool with a specific text file,
# so the agent can search within the given text file's content
tool = TXTSearchTool(txt='path/to/text/file.txt')
```

## Arguments

- `txt` (str): **Optional**. The path to the text file you want to search.
  This argument is only required if the tool was not initialized with a specific text file;
  otherwise, the search will be conducted within the initially provided text file.

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization.
To customize the model, you can use a config dictionary as follows:

```python Code
tool = TXTSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/csvsearchtool.mdx
================================================

---

title: CSV RAG Search
description: The `CSVSearchTool` is a powerful RAG (Retrieval-Augmented Generation) tool designed for semantic searches within a CSV file's content.
icon: file-csv

---

# `CSVSearchTool`

<Note>
    **Experimental**: We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

This tool is used to perform a RAG (Retrieval-Augmented Generation) search within a CSV file's content. It allows users to semantically search for queries in the content of a specified CSV file.
This feature is particularly useful for extracting information from large CSV datasets where traditional search methods might be inefficient. All tools with "Search" in their name, including CSVSearchTool,
are RAG tools designed for searching different sources of data.

## Installation

Install the crewai_tools package

```shell
pip install 'crewai[tools]'
```

## Example

```python Code
from crewai_tools import CSVSearchTool

# Initialize the tool with a specific CSV file.
# This setup allows the agent to only search the given CSV file.
tool = CSVSearchTool(csv='path/to/your/csvfile.csv')

# OR

# Initialize the tool without a specific CSV file.
# Agent will need to provide the CSV path at runtime.
tool = CSVSearchTool()
```

## Arguments

The following parameters can be used to customize the `CSVSearchTool`'s behavior:

| Argument | Type     | Description                                                                                                                                                               |
| :------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **csv**  | `string` | _Optional_. The path to the CSV file you want to search. This is a mandatory argument if the tool was initialized without a specific CSV file; otherwise, it is optional. |

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = CSVSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/directorysearchtool.mdx
================================================

---

title: Directory RAG Search
description: The `DirectorySearchTool` is a powerful RAG (Retrieval-Augmented Generation) tool designed for semantic searches within a directory's content.
icon: address-book

---

# `DirectorySearchTool`

<Note>
    **Experimental**: The DirectorySearchTool is under continuous development. Features and functionalities might evolve, and unexpected behavior may occur as we refine the tool.
</Note>

## Description

The DirectorySearchTool enables semantic search within the content of specified directories, leveraging the Retrieval-Augmented Generation (RAG) methodology for efficient navigation through files. Designed for flexibility, it allows users to dynamically specify search directories at runtime or set a fixed directory during initial setup.

## Installation

To use the DirectorySearchTool, begin by installing the crewai_tools package. Execute the following command in your terminal:

```shell
pip install 'crewai[tools]'
```

## Initialization and Usage

Import the DirectorySearchTool from the `crewai_tools` package to start. You can initialize the tool without specifying a directory, enabling the setting of the search directory at runtime. Alternatively, the tool can be initialized with a predefined directory.

```python Code
from crewai_tools import DirectorySearchTool

# For dynamic directory specification at runtime
tool = DirectorySearchTool()

# For fixed directory searches
tool = DirectorySearchTool(directory='/path/to/directory')
```

## Arguments

- `directory`: A string argument that specifies the search directory. This is optional during initialization but required for searches if not set initially.

## Custom Model and Embeddings

The DirectorySearchTool uses OpenAI for embeddings and summarization by default. Customization options for these settings include changing the model provider and configuration, enhancing flexibility for advanced users.

```python Code
tool = DirectorySearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # Options include ollama, google, anthropic, llama2, and more
            config=dict(
                model="llama2",
                # Additional configurations here
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/pgsearchtool.mdx
================================================

---

title: PG RAG Search
description: The `PGSearchTool` is designed to search PostgreSQL databases and return the most relevant results.
icon: database

---

# `PGSearchTool`

<Note>
    The PGSearchTool is currently under development. This document outlines the intended functionality and interface. 
    As development progresses, please be aware that some features may not be available or could change.
</Note>

## Description

The PGSearchTool is envisioned as a powerful tool for facilitating semantic searches within PostgreSQL database tables. By leveraging advanced Retrieve and Generate (RAG) technology,
it aims to provide an efficient means for querying database table content, specifically tailored for PostgreSQL databases.
The tool's goal is to simplify the process of finding relevant data through semantic search queries, offering a valuable resource for users needing to conduct advanced queries on
extensive datasets within a PostgreSQL environment.

## Installation

The `crewai_tools` package, which will include the PGSearchTool upon its release, can be installed using the following command:

```shell
pip install 'crewai[tools]'
```

<Note>
    The PGSearchTool is not yet available in the current version of the `crewai_tools` package. This installation command will be updated once the tool is released.
</Note>

## Example Usage

Below is a proposed example showcasing how to use the PGSearchTool for conducting a semantic search on a table within a PostgreSQL database:

```python Code
from crewai_tools import PGSearchTool

# Initialize the tool with the database URI and the target table name
tool = PGSearchTool(
    db_uri='postgresql://user:password@localhost:5432/mydatabase',
    table_name='employees'
)
```

## Arguments

The PGSearchTool is designed to require the following arguments for its operation:

| Argument       | Type     | Description                                                                                                                                                                                                    |
| :------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **db_uri**     | `string` | **Mandatory**. A string representing the URI of the PostgreSQL database to be queried. This argument will be mandatory and must include the necessary authentication details and the location of the database. |
| **table_name** | `string` | **Mandatory**. A string specifying the name of the table within the database on which the semantic search will be performed. This argument will also be mandatory.                                             |

## Custom Model and Embeddings

The tool intends to use OpenAI for both embeddings and summarization by default. Users will have the option to customize the model using a config dictionary as follows:

```python Code
tool = PGSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/xmlsearchtool.mdx
================================================

---

title: XML RAG Search
description: The `XMLSearchTool` is designed to perform a RAG (Retrieval-Augmented Generation) search within the content of a XML file.
icon: file-xml

---

# `XMLSearchTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

The XMLSearchTool is a cutting-edge RAG tool engineered for conducting semantic searches within XML files.
Ideal for users needing to parse and extract information from XML content efficiently, this tool supports inputting a search query and an optional XML file path.
By specifying an XML path, users can target their search more precisely to the content of that file, thereby obtaining more relevant search outcomes.

## Installation

To start using the XMLSearchTool, you must first install the crewai_tools package. This can be easily done with the following command:

```shell
pip install 'crewai[tools]'
```

## Example

Here are two examples demonstrating how to use the XMLSearchTool.
The first example shows searching within a specific XML file, while the second example illustrates initiating a search without predefining an XML path, providing flexibility in search scope.

```python Code
from crewai_tools import XMLSearchTool

# Allow agents to search within any XML file's content
#as it learns about their paths during execution
tool = XMLSearchTool()

# OR

# Initialize the tool with a specific XML file path
#for exclusive search within that document
tool = XMLSearchTool(xml='path/to/your/xmlfile.xml')
```

## Arguments

- `xml`: This is the path to the XML file you wish to search.
  It is an optional parameter during the tool's initialization but must be provided either at initialization or as part of the `run` method's arguments to execute a search.

## Custom model and embeddings

By default, the tool uses OpenAI for both embeddings and summarization. To customize the model, you can use a config dictionary as follows:

```python Code
tool = XMLSearchTool(
    config=dict(
        llm=dict(
            provider="ollama", # or google, openai, anthropic, llama2, ...
            config=dict(
                model="llama2",
                # temperature=0.5,
                # top_p=1,
                # stream=true,
            ),
        ),
        embedder=dict(
            provider="google", # or openai, ollama, ...
            config=dict(
                model="models/embedding-001",
                task_type="retrieval_document",
                # title="Embeddings",
            ),
        ),
    )
)
```

================================================
File: /docs/tools/scrapewebsitetool.mdx
================================================

---

title: Scrape Website
description: The `ScrapeWebsiteTool` is designed to extract and read the content of a specified website.
icon: magnifying-glass-location

---

# `ScrapeWebsiteTool`

<Note>
    We are still working on improving tools, so there might be unexpected behavior or changes in the future.
</Note>

## Description

A tool designed to extract and read the content of a specified website. It is capable of handling various types of web pages by making HTTP requests and parsing the received HTML content.
This tool can be particularly useful for web scraping tasks, data collection, or extracting specific information from websites.

## Installation

Install the crewai_tools package

```shell
pip install 'crewai[tools]'
```

## Example

```python
from crewai_tools import ScrapeWebsiteTool

# To enable scrapping any website it finds during it's execution
tool = ScrapeWebsiteTool()

# Initialize the tool with the website URL,
# so the agent can only scrap the content of the specified website
tool = ScrapeWebsiteTool(website_url='https://www.example.com')

# Extract the text from the site
text = tool.run()
print(text)
```

## Arguments

| Argument        | Type     | Description                                                                                                                                        |
| :-------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| **website_url** | `string` | **Mandatory** website URL to read the file. This is the primary input for the tool, specifying which website's content should be scraped and read. |

================================================
File: /docs/tools/nl2sqltool.mdx
================================================

---

title: NL2SQL Tool
description: The `NL2SQLTool` is designed to convert natural language to SQL queries.
icon: language

---

# `NL2SQLTool`

## Description

This tool is used to convert natural language to SQL queries. When passsed to the agent it will generate queries and then use them to interact with the database.

This enables multiple workflows like having an Agent to access the database fetch information based on the goal and then use the information to generate a response, report or any other output.
Along with that proivdes the ability for the Agent to update the database based on its goal.

**Attention**: Make sure that the Agent has access to a Read-Replica or that is okay for the Agent to run insert/update queries on the database.

## Requirements

- SqlAlchemy
- Any DB compatible library (e.g. psycopg2, mysql-connector-python)

## Installation

Install the crewai_tools package

```shell
pip install 'crewai[tools]'
```

## Usage

In order to use the NL2SQLTool, you need to pass the database URI to the tool. The URI should be in the format `dialect+driver://username:password@host:port/database`.

```python Code
from crewai_tools import NL2SQLTool

# psycopg2 was installed to run this example with PostgreSQL
nl2sql = NL2SQLTool(db_uri="postgresql://example@localhost:5432/test_db")

@agent
def researcher(self) -> Agent:
    return Agent(
        config=self.agents_config["researcher"],
        allow_delegation=False,
        tools=[nl2sql]
    )
```

## Example

The primary task goal was:

"Retrieve the average, maximum, and minimum monthly revenue for each city, but only include cities that have more than one user. Also, count the number of user in each city and
sort the results by the average monthly revenue in descending order"

So the Agent tried to get information from the DB, the first one is wrong so the Agent tries again and gets the correct information and passes to the next agent.

![alt text](https://github.com/crewAIInc/crewAI-tools/blob/main/crewai_tools/tools/nl2sql/images/image-2.png?raw=true)
![alt text](https://github.com/crewAIInc/crewAI-tools/raw/main/crewai_tools/tools/nl2sql/images/image-3.png)

The second task goal was:

"Review the data and create a detailed report, and then create the table on the database with the fields based on the data provided.
Include information on the average, maximum, and minimum monthly revenue for each city, but only include cities that have more than one user. Also, count the number of users in each city and sort the results by the average monthly revenue in descending order."

Now things start to get interesting, the Agent generates the SQL query to not only create the table but also insert the data into the table. And in the end the Agent still returns the final report which is exactly what was in the database.

![alt text](https://github.com/crewAIInc/crewAI-tools/raw/main/crewai_tools/tools/nl2sql/images/image-4.png)
![alt text](https://github.com/crewAIInc/crewAI-tools/raw/main/crewai_tools/tools/nl2sql/images/image-5.png)

![alt text](https://github.com/crewAIInc/crewAI-tools/raw/main/crewai_tools/tools/nl2sql/images/image-9.png)
![alt text](https://github.com/crewAIInc/crewAI-tools/raw/main/crewai_tools/tools/nl2sql/images/image-7.png)

This is a simple example of how the NL2SQLTool can be used to interact with the database and generate reports based on the data in the database.

The Tool provides endless possibilities on the logic of the Agent and how it can interact with the database.

```md
DB -> Agent -> ... -> Agent -> DB
```

================================================
File: /docs/tools/filewritetool.mdx
================================================

---

title: File Write
description: The `FileWriterTool` is designed to write content to files.
icon: file-pen

---

# `FileWriterTool`

## Description

The `FileWriterTool` is a component of the crewai_tools package, designed to simplify the process of writing content to files.
It is particularly useful in scenarios such as generating reports, saving logs, creating configuration files, and more.
This tool supports creating new directories if they don't exist, making it easier to organize your output.

## Installation

Install the crewai_tools package to use the `FileWriterTool` in your projects:

```shell
pip install 'crewai[tools]'
```

## Example

To get started with the `FileWriterTool`:

```python Code
from crewai_tools import FileWriterTool

# Initialize the tool
file_writer_tool = FileWriterTool()

# Write content to a file in a specified directory
result = file_writer_tool._run('example.txt', 'This is a test content.', 'test_directory')
print(result)
```

## Arguments

- `filename`: The name of the file you want to create or overwrite.
- `content`: The content to write into the file.
- `directory` (optional): The path to the directory where the file will be created. Defaults to the current directory (`.`). If the directory does not exist, it will be created.

## Conclusion

By integrating the `FileWriterTool` into your crews, the agents can execute the process of writing content to files and creating directories.
This tool is essential for tasks that require saving output data, creating structured file systems, and more. By adhering to the setup and usage guidelines provided,
incorporating this tool into projects is straightforward and efficient.

================================================
File: /docs/introduction.mdx
================================================

---

title: Introduction
description: Build AI agent teams that work together to tackle complex tasks
icon: handshake

---

# What is CrewAI?

**CrewAI is a cutting-edge framework for orchestrating autonomous AI agents.**

CrewAI enables you to create AI teams where each agent has specific roles, tools, and goals, working together to accomplish complex tasks.

Think of it as assembling your dream team - each member (agent) brings unique skills and expertise, collaborating seamlessly to achieve your objectives.

## How CrewAI Works

<Note>
  Just like a company has departments (Sales, Engineering, Marketing) working together under leadership to achieve business goals, CrewAI helps you create an organization of AI agents with specialized roles collaborating to accomplish complex tasks.
</Note>

<Frame caption="CrewAI Framework Overview">
  <img src="crewAI-mindmap.png" alt="CrewAI Framework Overview" />
</Frame>

| Component     |        Description         | Key Features                                                                                                                   |
| :------------ | :------------------------: | :----------------------------------------------------------------------------------------------------------------------------- |
| **Crew**      | The top-level organization | • Manages AI agent teams<br/>• Oversees workflows<br/>• Ensures collaboration<br/>• Delivers outcomes                          |
| **AI Agents** |  Specialized team members  | • Have specific roles (researcher, writer)<br/>• Use designated tools<br/>• Can delegate tasks<br/>• Make autonomous decisions |
| **Process**   | Workflow management system | • Defines collaboration patterns<br/>• Controls task assignments<br/>• Manages interactions<br/>• Ensures efficient execution  |
| **Tasks**     |   Individual assignments   | • Have clear objectives<br/>• Use specific tools<br/>• Feed into larger process<br/>• Produce actionable results               |

### How It All Works Together

1. The **Crew** organizes the overall operation
2. **AI Agents** work on their specialized tasks
3. The **Process** ensures smooth collaboration
4. **Tasks** get completed to achieve the goal

## Key Features

<CardGroup cols={2}>
  <Card title="Role-Based Agents" icon="users">
    Create specialized agents with defined roles, expertise, and goals - from researchers to analysts to writers
  </Card>
  <Card title="Flexible Tools" icon="screwdriver-wrench">
    Equip agents with custom tools and APIs to interact with external services and data sources
  </Card>
  <Card title="Intelligent Collaboration" icon="people-arrows">
    Agents work together, sharing insights and coordinating tasks to achieve complex objectives
  </Card>
  <Card title="Task Management" icon="list-check">
    Define sequential or parallel workflows, with agents automatically handling task dependencies
  </Card>
</CardGroup>

## Why Choose CrewAI?

- 🧠 **Autonomous Operation**: Agents make intelligent decisions based on their roles and available tools
- 📝 **Natural Interaction**: Agents communicate and collaborate like human team members
- 🛠️ **Extensible Design**: Easy to add new tools, roles, and capabilities
- 🚀 **Production Ready**: Built for reliability and scalability in real-world applications

<CardGroup cols={3}>
  <Card
    title="Install CrewAI"
    icon="wrench"
    href="/installation"
  >
    Get started with CrewAI in your development environment.
  </Card>
  <Card
    title="Quick Start"
    icon="bolt"
    href="/quickstart"
  >
    Follow our quickstart guide to create your first CrewAI agent and get hands-on experience.
  </Card>
  <Card
    title="Join the Community"
    icon="comments"
    href="https://community.crewai.com"
  >
    Connect with other developers, get help, and share your CrewAI experiences.
  </Card>
</CardGroup>

================================================
File: /docs/concepts/cli.mdx
================================================

---

title: CLI
description: Learn how to use the CrewAI CLI to interact with CrewAI.
icon: terminal

---

# CrewAI CLI Documentation

The CrewAI CLI provides a set of commands to interact with CrewAI, allowing you to create, train, run, and manage crews & flows.

## Installation

To use the CrewAI CLI, make sure you have CrewAI installed:

```shell
pip install crewai
```

## Basic Usage

The basic structure of a CrewAI CLI command is:

```shell
crewai [COMMAND] [OPTIONS] [ARGUMENTS]
```

## Available Commands

### 1. Create

Create a new crew or flow.

```shell
crewai create [OPTIONS] TYPE NAME
```

- `TYPE`: Choose between "crew" or "flow"
- `NAME`: Name of the crew or flow

Example:

```shell
crewai create crew my_new_crew
crewai create flow my_new_flow
```

### 2. Version

Show the installed version of CrewAI.

```shell
crewai version [OPTIONS]
```

- `--tools`: (Optional) Show the installed version of CrewAI tools

Example:

```shell
crewai version
crewai version --tools
```

### 3. Train

Train the crew for a specified number of iterations.

```shell
crewai train [OPTIONS]
```

- `-n, --n_iterations INTEGER`: Number of iterations to train the crew (default: 5)
- `-f, --filename TEXT`: Path to a custom file for training (default: "trained_agents_data.pkl")

Example:

```shell
crewai train -n 10 -f my_training_data.pkl
```

### 4. Replay

Replay the crew execution from a specific task.

```shell
crewai replay [OPTIONS]
```

- `-t, --task_id TEXT`: Replay the crew from this task ID, including all subsequent tasks

Example:

```shell
crewai replay -t task_123456
```

### 5. Log-tasks-outputs

Retrieve your latest crew.kickoff() task outputs.

```shell
crewai log-tasks-outputs
```

### 6. Reset-memories

Reset the crew memories (long, short, entity, latest_crew_kickoff_outputs).

```shell
crewai reset-memories [OPTIONS]
```

- `-l, --long`: Reset LONG TERM memory
- `-s, --short`: Reset SHORT TERM memory
- `-e, --entities`: Reset ENTITIES memory
- `-k, --kickoff-outputs`: Reset LATEST KICKOFF TASK OUTPUTS
- `-a, --all`: Reset ALL memories

Example:

```shell
crewai reset-memories --long --short
crewai reset-memories --all
```

### 7. Test

Test the crew and evaluate the results.

```shell
crewai test [OPTIONS]
```

- `-n, --n_iterations INTEGER`: Number of iterations to test the crew (default: 3)
- `-m, --model TEXT`: LLM Model to run the tests on the Crew (default: "gpt-4o-mini")

Example:

```shell
crewai test -n 5 -m gpt-3.5-turbo
```

### 8. Run

Run the crew.

```shell
crewai run
```

<Note>
Make sure to run these commands from the directory where your CrewAI project is set up. 
Some commands may require additional configuration or setup within your project structure.
</Note>

### 9. API Keys

When running `crewai create crew` command, the CLI will first show you the top 5 most common LLM providers and ask you to select one.

Once you've selected an LLM provider, you will be prompted for API keys.

#### Initial API key providers

The CLI will initially prompt for API keys for the following services:

- OpenAI
- Groq
- Anthropic
- Google Gemini

When you select a provider, the CLI will prompt you to enter your API key.

#### Other Options

If you select option 6, you will be able to select from a list of LiteLLM supported providers.

When you select a provider, the CLI will prompt you to enter the Key name and the API key.

See the following link for each provider's key name:

- [LiteLLM Providers](https://docs.litellm.ai/docs/providers)

================================================
File: /docs/concepts/llamaindex-tools.mdx
================================================

---

title: Using LlamaIndex Tools
description: Learn how to integrate LlamaIndex tools with CrewAI agents to enhance search-based queries and more.
icon: toolbox

---

## Using LlamaIndex Tools

<Info>
    CrewAI seamlessly integrates with LlamaIndex’s comprehensive toolkit for RAG (Retrieval-Augmented Generation) and agentic pipelines, enabling advanced search-based queries and more. 
</Info>

Here are the available built-in tools offered by LlamaIndex.

```python Code
from crewai import Agent
from crewai_tools import LlamaIndexTool

# Example 1: Initialize from FunctionTool
from llama_index.core.tools import FunctionTool

your_python_function = lambda ...: ...
og_tool = FunctionTool.from_defaults(
    your_python_function,
    name="<name>",
    description='<description>'
)
tool = LlamaIndexTool.from_tool(og_tool)

# Example 2: Initialize from LlamaHub Tools
from llama_index.tools.wolfram_alpha import WolframAlphaToolSpec
wolfram_spec = WolframAlphaToolSpec(app_id="<app_id>")
wolfram_tools = wolfram_spec.to_tool_list()
tools = [LlamaIndexTool.from_tool(t) for t in wolfram_tools]

# Example 3: Initialize Tool from a LlamaIndex Query Engine
query_engine = index.as_query_engine()
query_tool = LlamaIndexTool.from_query_engine(
    query_engine,
    name="Uber 2019 10K Query Tool",
    description="Use this tool to lookup the 2019 Uber 10K Annual Report"
)

# Create and assign the tools to an agent
agent = Agent(
    role='Research Analyst',
    goal='Provide up-to-date market analysis',
    backstory='An expert analyst with a keen eye for market trends.',
    tools=[tool, *tools, query_tool]
)

# rest of the code ...
```

## Steps to Get Started

To effectively use the LlamaIndexTool, follow these steps:

<Steps>
    <Step title="Package Installation">
    Make sure that `crewai[tools]` package is installed in your Python environment:
    <CodeGroup>
        ```shell Terminal
        pip install 'crewai[tools]'
        ```
    </CodeGroup>
    </Step>
    <Step title="Install and Use LlamaIndex">
    Follow the LlamaIndex documentation [LlamaIndex Documentation](https://docs.llamaindex.ai/) to set up a RAG/agent pipeline.
    </Step>
</Steps>

================================================
File: /docs/concepts/tasks.mdx
================================================

---

title: Tasks
description: Detailed guide on managing and creating tasks within the CrewAI framework.
icon: list-check

---

## Overview of a Task

In the CrewAI framework, a `Task` is a specific assignment completed by an `Agent`.

Tasks provide all necessary details for execution, such as a description, the agent responsible, required tools, and more, facilitating a wide range of action complexities.

Tasks within CrewAI can be collaborative, requiring multiple agents to work together. This is managed through the task properties and orchestrated by the Crew's process, enhancing teamwork and efficiency.

### Task Execution Flow

Tasks can be executed in two ways:

- **Sequential**: Tasks are executed in the order they are defined
- **Hierarchical**: Tasks are assigned to agents based on their roles and expertise

The execution flow is defined when creating the crew:

```python Code
crew = Crew(
    agents=[agent1, agent2],
    tasks=[task1, task2],
    process=Process.sequential  # or Process.hierarchical
)
```

## Task Attributes

| Attribute                        | Parameters        | Type                        | Description                                                            |
| :------------------------------- | :---------------- | :-------------------------- | :--------------------------------------------------------------------- |
| **Description**                  | `description`     | `str`                       | A clear, concise statement of what the task entails.                   |
| **Expected Output**              | `expected_output` | `str`                       | A detailed description of what the task's completion looks like.       |
| **Name** _(optional)_            | `name`            | `Optional[str]`             | A name identifier for the task.                                        |
| **Agent** _(optional)_           | `agent`           | `Optional[BaseAgent]`       | The agent responsible for executing the task.                          |
| **Tools** _(optional)_           | `tools`           | `List[BaseTool]`            | The tools/resources the agent is limited to use for this task.         |
| **Context** _(optional)_         | `context`         | `Optional[List["Task"]]`    | Other tasks whose outputs will be used as context for this task.       |
| **Async Execution** _(optional)_ | `async_execution` | `Optional[bool]`            | Whether the task should be executed asynchronously. Defaults to False. |
| **Config** _(optional)_          | `config`          | `Optional[Dict[str, Any]]`  | Task-specific configuration parameters.                                |
| **Output File** _(optional)_     | `output_file`     | `Optional[str]`             | File path for storing the task output.                                 |
| **Output JSON** _(optional)_     | `output_json`     | `Optional[Type[BaseModel]]` | A Pydantic model to structure the JSON output.                         |
| **Output Pydantic** _(optional)_ | `output_pydantic` | `Optional[Type[BaseModel]]` | A Pydantic model for task output.                                      |
| **Callback** _(optional)_        | `callback`        | `Optional[Any]`             | Function/object to be executed after task completion.                  |

## Creating Tasks

There are two ways to create tasks in CrewAI: using **YAML configuration (recommended)** or defining them **directly in code**.

### YAML Configuration (Recommended)

Using YAML configuration provides a cleaner, more maintainable way to define tasks. We strongly recommend using this approach to define tasks in your CrewAI projects.

After creating your CrewAI project as outlined in the [Installation](/installation) section, navigate to the `src/latest_ai_development/config/tasks.yaml` file and modify the template to match your specific task requirements.

<Note>
Variables in your YAML files (like `{topic}`) will be replaced with values from your inputs when running the crew:
```python Code
crew.kickoff(inputs={'topic': 'AI Agents'})
```
</Note>

Here's an example of how to configure tasks using YAML:

````yaml tasks.yaml
research_task:
  description: >
    Conduct a thorough research about {topic}
    Make sure you find any interesting and relevant information given
    the current year is 2024.
  expected_output: >
    A list with 10 bullet points of the most relevant information about {topic}
  agent: researcher

reporting_task:
  description: >
    Review the context you got and expand each topic into a full section for a report.
    Make sure the report is detailed and contains any and all relevant information.
  expected_output: >
    A fully fledge reports with the mains topics, each with a full section of information.
    Formatted as markdown without '```'
  agent: reporting_analyst
  output_file: report.md
````

To use this YAML configuration in your code, create a crew class that inherits from `CrewBase`:

```python crew.py
# src/latest_ai_development/crew.py

from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool

@CrewBase
class LatestAiDevelopmentCrew():
  """LatestAiDevelopment crew"""

  @agent
  def researcher(self) -> Agent:
    return Agent(
      config=self.agents_config['researcher'],
      verbose=True,
      tools=[SerperDevTool()]
    )

  @agent
  def reporting_analyst(self) -> Agent:
    return Agent(
      config=self.agents_config['reporting_analyst'],
      verbose=True
    )

  @task
  def research_task(self) -> Task:
    return Task(
      config=self.tasks_config['research_task']
    )

  @task
  def reporting_task(self) -> Task:
    return Task(
      config=self.tasks_config['reporting_task']
    )

  @crew
  def crew(self) -> Crew:
    return Crew(
      agents=[
        self.researcher(),
        self.reporting_analyst()
      ],
      tasks=[
        self.research_task(),
        self.reporting_task()
      ],
      process=Process.sequential
    )
```

<Note>
The names you use in your YAML files (`agents.yaml` and `tasks.yaml`) should match the method names in your Python code.
</Note>

### Direct Code Definition (Alternative)

Alternatively, you can define tasks directly in your code without using YAML configuration:

````python task.py
from crewai import Task

research_task = Task(
    description="""
        Conduct a thorough research about AI Agents.
        Make sure you find any interesting and relevant information given
        the current year is 2024.
    """,
    expected_output="""
        A list with 10 bullet points of the most relevant information about AI Agents
    """,
    agent=researcher
)

reporting_task = Task(
    description="""
        Review the context you got and expand each topic into a full section for a report.
        Make sure the report is detailed and contains any and all relevant information.
    """,
    expected_output="""
        A fully fledge reports with the mains topics, each with a full section of information.
        Formatted as markdown without '```'
    """,
    agent=reporting_analyst,
    output_file="report.md"
)
````

<Tip>
  Directly specify an `agent` for assignment or let the `hierarchical` CrewAI's process decide based on roles, availability, etc.
</Tip>

## Task Output

Understanding task outputs is crucial for building effective AI workflows. CrewAI provides a structured way to handle task results through the `TaskOutput` class, which supports multiple output formats and can be easily passed between tasks.

The output of a task in CrewAI framework is encapsulated within the `TaskOutput` class. This class provides a structured way to access results of a task, including various formats such as raw output, JSON, and Pydantic models.

By default, the `TaskOutput` will only include the `raw` output. A `TaskOutput` will only include the `pydantic` or `json_dict` output if the original `Task` object was configured with `output_pydantic` or `output_json`, respectively.

### Task Output Attributes

| Attribute         | Parameters      | Type                       | Description                                                                                        |
| :---------------- | :-------------- | :------------------------- | :------------------------------------------------------------------------------------------------- |
| **Description**   | `description`   | `str`                      | Description of the task.                                                                           |
| **Summary**       | `summary`       | `Optional[str]`            | Summary of the task, auto-generated from the first 10 words of the description.                    |
| **Raw**           | `raw`           | `str`                      | The raw output of the task. This is the default format for the output.                             |
| **Pydantic**      | `pydantic`      | `Optional[BaseModel]`      | A Pydantic model object representing the structured output of the task.                            |
| **JSON Dict**     | `json_dict`     | `Optional[Dict[str, Any]]` | A dictionary representing the JSON output of the task.                                             |
| **Agent**         | `agent`         | `str`                      | The agent that executed the task.                                                                  |
| **Output Format** | `output_format` | `OutputFormat`             | The format of the task output, with options including RAW, JSON, and Pydantic. The default is RAW. |

### Task Methods and Properties

| Method/Property | Description                                                                                       |
| :-------------- | :------------------------------------------------------------------------------------------------ |
| **json**        | Returns the JSON string representation of the task output if the output format is JSON.           |
| **to_dict**     | Converts the JSON and Pydantic outputs to a dictionary.                                           |
| **str**         | Returns the string representation of the task output, prioritizing Pydantic, then JSON, then raw. |

### Accessing Task Outputs

Once a task has been executed, its output can be accessed through the `output` attribute of the `Task` object. The `TaskOutput` class provides various ways to interact with and present this output.

#### Example

```python Code
# Example task
task = Task(
    description='Find and summarize the latest AI news',
    expected_output='A bullet list summary of the top 5 most important AI news',
    agent=research_agent,
    tools=[search_tool]
)

# Execute the crew
crew = Crew(
    agents=[research_agent],
    tasks=[task],
    verbose=True
)

result = crew.kickoff()

# Accessing the task output
task_output = task.output

print(f"Task Description: {task_output.description}")
print(f"Task Summary: {task_output.summary}")
print(f"Raw Output: {task_output.raw}")
if task_output.json_dict:
    print(f"JSON Output: {json.dumps(task_output.json_dict, indent=2)}")
if task_output.pydantic:
    print(f"Pydantic Output: {task_output.pydantic}")
```

## Task Dependencies and Context

Tasks can depend on the output of other tasks using the `context` attribute. For example:

```python Code
research_task = Task(
    description="Research the latest developments in AI",
    expected_output="A list of recent AI developments",
    agent=researcher
)

analysis_task = Task(
    description="Analyze the research findings and identify key trends",
    expected_output="Analysis report of AI trends",
    agent=analyst,
    context=[research_task]  # This task will wait for research_task to complete
)
```

## Task Guardrails

Task guardrails provide a way to validate and transform task outputs before they
are passed to the next task. This feature helps ensure data quality and provides
efeedback to agents when their output doesn't meet specific criteria.

### Using Task Guardrails

To add a guardrail to a task, provide a validation function through the `guardrail` parameter:

```python Code
from typing import Tuple, Union, Dict, Any

def validate_blog_content(result: str) -> Tuple[bool, Union[Dict[str, Any], str]]:
    """Validate blog content meets requirements."""
    try:
        # Check word count
        word_count = len(result.split())
        if word_count > 200:
            return (False, {
                "error": "Blog content exceeds 200 words",
                "code": "WORD_COUNT_ERROR",
                "context": {"word_count": word_count}
            })

        # Additional validation logic here
        return (True, result.strip())
    except Exception as e:
        return (False, {
            "error": "Unexpected error during validation",
            "code": "SYSTEM_ERROR"
        })

blog_task = Task(
    description="Write a blog post about AI",
    expected_output="A blog post under 200 words",
    agent=blog_agent,
    guardrail=validate_blog_content  # Add the guardrail function
)
```

### Guardrail Function Requirements

1. **Function Signature**:

   - Must accept exactly one parameter (the task output)
   - Should return a tuple of `(bool, Any)`
   - Type hints are recommended but optional

2. **Return Values**:
   - Success: Return `(True, validated_result)`
   - Failure: Return `(False, error_details)`

### Error Handling Best Practices

1. **Structured Error Responses**:

```python Code
def validate_with_context(result: str) -> Tuple[bool, Union[Dict[str, Any], str]]:
    try:
        # Main validation logic
        validated_data = perform_validation(result)
        return (True, validated_data)
    except ValidationError as e:
        return (False, {
            "error": str(e),
            "code": "VALIDATION_ERROR",
            "context": {"input": result}
        })
    except Exception as e:
        return (False, {
            "error": "Unexpected error",
            "code": "SYSTEM_ERROR"
        })
```

2. **Error Categories**:

   - Use specific error codes
   - Include relevant context
   - Provide actionable feedback

3. **Validation Chain**:

```python Code
from typing import Any, Dict, List, Tuple, Union

def complex_validation(result: str) -> Tuple[bool, Union[str, Dict[str, Any]]]:
    """Chain multiple validation steps."""
    # Step 1: Basic validation
    if not result:
        return (False, {"error": "Empty result", "code": "EMPTY_INPUT"})

    # Step 2: Content validation
    try:
        validated = validate_content(result)
        if not validated:
            return (False, {"error": "Invalid content", "code": "CONTENT_ERROR"})

        # Step 3: Format validation
        formatted = format_output(validated)
        return (True, formatted)
    except Exception as e:
        return (False, {
            "error": str(e),
            "code": "VALIDATION_ERROR",
            "context": {"step": "content_validation"}
        })
```

### Handling Guardrail Results

When a guardrail returns `(False, error)`:

1. The error is sent back to the agent
2. The agent attempts to fix the issue
3. The process repeats until:
   - The guardrail returns `(True, result)`
   - Maximum retries are reached

Example with retry handling:

```python Code
from typing import Optional, Tuple, Union

def validate_json_output(result: str) -> Tuple[bool, Union[Dict[str, Any], str]]:
    """Validate and parse JSON output."""
    try:
        # Try to parse as JSON
        data = json.loads(result)
        return (True, data)
    except json.JSONDecodeError as e:
        return (False, {
            "error": "Invalid JSON format",
            "code": "JSON_ERROR",
            "context": {"line": e.lineno, "column": e.colno}
        })

task = Task(
    description="Generate a JSON report",
    expected_output="A valid JSON object",
    agent=analyst,
    guardrail=validate_json_output,
    max_retries=3  # Limit retry attempts
)
```

## Getting Structured Consistent Outputs from Tasks

<Note>
It's also important to note that the output of the final task of a crew becomes the final output of the actual crew itself.
</Note>

### Using `output_pydantic`

The `output_pydantic` property allows you to define a Pydantic model that the task output should conform to. This ensures that the output is not only structured but also validated according to the Pydantic model.

Here’s an example demonstrating how to use output_pydantic:

```python Code
import json

from crewai import Agent, Crew, Process, Task
from pydantic import BaseModel


class Blog(BaseModel):
    title: str
    content: str


blog_agent = Agent(
    role="Blog Content Generator Agent",
    goal="Generate a blog title and content",
    backstory="""You are an expert content creator, skilled in crafting engaging and informative blog posts.""",
    verbose=False,
    allow_delegation=False,
    llm="gpt-4o",
)

task1 = Task(
    description="""Create a blog title and content on a given topic. Make sure the content is under 200 words.""",
    expected_output="A compelling blog title and well-written content.",
    agent=blog_agent,
    output_pydantic=Blog,
)

# Instantiate your crew with a sequential process
crew = Crew(
    agents=[blog_agent],
    tasks=[task1],
    verbose=True,
    process=Process.sequential,
)

result = crew.kickoff()

# Option 1: Accessing Properties Using Dictionary-Style Indexing
print("Accessing Properties - Option 1")
title = result["title"]
content = result["content"]
print("Title:", title)
print("Content:", content)

# Option 2: Accessing Properties Directly from the Pydantic Model
print("Accessing Properties - Option 2")
title = result.pydantic.title
content = result.pydantic.content
print("Title:", title)
print("Content:", content)

# Option 3: Accessing Properties Using the to_dict() Method
print("Accessing Properties - Option 3")
output_dict = result.to_dict()
title = output_dict["title"]
content = output_dict["content"]
print("Title:", title)
print("Content:", content)

# Option 4: Printing the Entire Blog Object
print("Accessing Properties - Option 5")
print("Blog:", result)

```

In this example:

- A Pydantic model Blog is defined with title and content fields.
- The task task1 uses the output_pydantic property to specify that its output should conform to the Blog model.
- After executing the crew, you can access the structured output in multiple ways as shown.

#### Explanation of Accessing the Output

1. Dictionary-Style Indexing: You can directly access the fields using result["field_name"]. This works because the CrewOutput class implements the **getitem** method.
2. Directly from Pydantic Model: Access the attributes directly from the result.pydantic object.
3. Using to_dict() Method: Convert the output to a dictionary and access the fields.
4. Printing the Entire Object: Simply print the result object to see the structured output.

### Using `output_json`

The `output_json` property allows you to define the expected output in JSON format. This ensures that the task's output is a valid JSON structure that can be easily parsed and used in your application.

Here’s an example demonstrating how to use `output_json`:

```python Code
import json

from crewai import Agent, Crew, Process, Task
from pydantic import BaseModel


# Define the Pydantic model for the blog
class Blog(BaseModel):
    title: str
    content: str


# Define the agent
blog_agent = Agent(
    role="Blog Content Generator Agent",
    goal="Generate a blog title and content",
    backstory="""You are an expert content creator, skilled in crafting engaging and informative blog posts.""",
    verbose=False,
    allow_delegation=False,
    llm="gpt-4o",
)

# Define the task with output_json set to the Blog model
task1 = Task(
    description="""Create a blog title and content on a given topic. Make sure the content is under 200 words.""",
    expected_output="A JSON object with 'title' and 'content' fields.",
    agent=blog_agent,
    output_json=Blog,
)

# Instantiate the crew with a sequential process
crew = Crew(
    agents=[blog_agent],
    tasks=[task1],
    verbose=True,
    process=Process.sequential,
)

# Kickoff the crew to execute the task
result = crew.kickoff()

# Option 1: Accessing Properties Using Dictionary-Style Indexing
print("Accessing Properties - Option 1")
title = result["title"]
content = result["content"]
print("Title:", title)
print("Content:", content)

# Option 2: Printing the Entire Blog Object
print("Accessing Properties - Option 2")
print("Blog:", result)
```

In this example:

- A Pydantic model Blog is defined with title and content fields, which is used to specify the structure of the JSON output.
- The task task1 uses the output_json property to indicate that it expects a JSON output conforming to the Blog model.
- After executing the crew, you can access the structured JSON output in two ways as shown.

#### Explanation of Accessing the Output

1. Accessing Properties Using Dictionary-Style Indexing: You can access the fields directly using result["field_name"]. This is possible because the CrewOutput class implements the **getitem** method, allowing you to treat the output like a dictionary. In this option, we're retrieving the title and content from the result.
2. Printing the Entire Blog Object: By printing result, you get the string representation of the CrewOutput object. Since the **str** method is implemented to return the JSON output, this will display the entire output as a formatted string representing the Blog object.

---

By using output_pydantic or output_json, you ensure that your tasks produce outputs in a consistent and structured format, making it easier to process and utilize the data within your application or across multiple tasks.

## Integrating Tools with Tasks

Leverage tools from the [CrewAI Toolkit](https://github.com/joaomdmoura/crewai-tools) and [LangChain Tools](https://python.langchain.com/docs/integrations/tools) for enhanced task performance and agent interaction.

## Creating a Task with Tools

```python Code
import os
os.environ["OPENAI_API_KEY"] = "Your Key"
os.environ["SERPER_API_KEY"] = "Your Key" # serper.dev API key

from crewai import Agent, Task, Crew
from crewai_tools import SerperDevTool

research_agent = Agent(
  role='Researcher',
  goal='Find and summarize the latest AI news',
  backstory="""You're a researcher at a large company.
  You're responsible for analyzing data and providing insights
  to the business.""",
  verbose=True
)

# to perform a semantic search for a specified query from a text's content across the internet
search_tool = SerperDevTool()

task = Task(
  description='Find and summarize the latest AI news',
  expected_output='A bullet list summary of the top 5 most important AI news',
  agent=research_agent,
  tools=[search_tool]
)

crew = Crew(
    agents=[research_agent],
    tasks=[task],
    verbose=True
)

result = crew.kickoff()
print(result)
```

This demonstrates how tasks with specific tools can override an agent's default set for tailored task execution.

## Referring to Other Tasks

In CrewAI, the output of one task is automatically relayed into the next one, but you can specifically define what tasks' output, including multiple, should be used as context for another task.

This is useful when you have a task that depends on the output of another task that is not performed immediately after it. This is done through the `context` attribute of the task:

```python Code
# ...

research_ai_task = Task(
    description="Research the latest developments in AI",
    expected_output="A list of recent AI developments",
    async_execution=True,
    agent=research_agent,
    tools=[search_tool]
)

research_ops_task = Task(
    description="Research the latest developments in AI Ops",
    expected_output="A list of recent AI Ops developments",
    async_execution=True,
    agent=research_agent,
    tools=[search_tool]
)

write_blog_task = Task(
    description="Write a full blog post about the importance of AI and its latest news",
    expected_output="Full blog post that is 4 paragraphs long",
    agent=writer_agent,
    context=[research_ai_task, research_ops_task]
)

#...
```

## Asynchronous Execution

You can define a task to be executed asynchronously. This means that the crew will not wait for it to be completed to continue with the next task. This is useful for tasks that take a long time to be completed, or that are not crucial for the next tasks to be performed.

You can then use the `context` attribute to define in a future task that it should wait for the output of the asynchronous task to be completed.

```python Code
#...

list_ideas = Task(
    description="List of 5 interesting ideas to explore for an article about AI.",
    expected_output="Bullet point list of 5 ideas for an article.",
    agent=researcher,
    async_execution=True # Will be executed asynchronously
)

list_important_history = Task(
    description="Research the history of AI and give me the 5 most important events.",
    expected_output="Bullet point list of 5 important events.",
    agent=researcher,
    async_execution=True # Will be executed asynchronously
)

write_article = Task(
    description="Write an article about AI, its history, and interesting ideas.",
    expected_output="A 4 paragraph article about AI.",
    agent=writer,
    context=[list_ideas, list_important_history] # Will wait for the output of the two tasks to be completed
)

#...
```

## Callback Mechanism

The callback function is executed after the task is completed, allowing for actions or notifications to be triggered based on the task's outcome.

```python Code
# ...

def callback_function(output: TaskOutput):
    # Do something after the task is completed
    # Example: Send an email to the manager
    print(f"""
        Task completed!
        Task: {output.description}
        Output: {output.raw}
    """)

research_task = Task(
    description='Find and summarize the latest AI news',
    expected_output='A bullet list summary of the top 5 most important AI news',
    agent=research_agent,
    tools=[search_tool],
    callback=callback_function
)

#...
```

## Accessing a Specific Task Output

Once a crew finishes running, you can access the output of a specific task by using the `output` attribute of the task object:

```python Code
# ...
task1 = Task(
    description='Find and summarize the latest AI news',
    expected_output='A bullet list summary of the top 5 most important AI news',
    agent=research_agent,
    tools=[search_tool]
)

#...

crew = Crew(
    agents=[research_agent],
    tasks=[task1, task2, task3],
    verbose=True
)

result = crew.kickoff()

# Returns a TaskOutput object with the description and results of the task
print(f"""
    Task completed!
    Task: {task1.output.description}
    Output: {task1.output.raw}
""")
```

## Tool Override Mechanism

Specifying tools in a task allows for dynamic adaptation of agent capabilities, emphasizing CrewAI's flexibility.

## Error Handling and Validation Mechanisms

While creating and executing tasks, certain validation mechanisms are in place to ensure the robustness and reliability of task attributes. These include but are not limited to:

- Ensuring only one output type is set per task to maintain clear output expectations.
- Preventing the manual assignment of the `id` attribute to uphold the integrity of the unique identifier system.

These validations help in maintaining the consistency and reliability of task executions within the crewAI framework.

## Task Guardrails

Task guardrails provide a powerful way to validate, transform, or filter task outputs before they are passed to the next task. Guardrails are optional functions that execute before the next task starts, allowing you to ensure that task outputs meet specific requirements or formats.

### Basic Usage

```python Code
from typing import Tuple, Union
from crewai import Task

def validate_json_output(result: str) -> Tuple[bool, Union[dict, str]]:
    """Validate that the output is valid JSON."""
    try:
        json_data = json.loads(result)
        return (True, json_data)
    except json.JSONDecodeError:
        return (False, "Output must be valid JSON")

task = Task(
    description="Generate JSON data",
    expected_output="Valid JSON object",
    guardrail=validate_json_output
)
```

### How Guardrails Work

1. **Optional Attribute**: Guardrails are an optional attribute at the task level, allowing you to add validation only where needed.
2. **Execution Timing**: The guardrail function is executed before the next task starts, ensuring valid data flow between tasks.
3. **Return Format**: Guardrails must return a tuple of `(success, data)`:
   - If `success` is `True`, `data` is the validated/transformed result
   - If `success` is `False`, `data` is the error message
4. **Result Routing**:
   - On success (`True`), the result is automatically passed to the next task
   - On failure (`False`), the error is sent back to the agent to generate a new answer

### Common Use Cases

#### Data Format Validation

```python Code
def validate_email_format(result: str) -> Tuple[bool, Union[str, str]]:
    """Ensure the output contains a valid email address."""
    import re
    email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if re.match(email_pattern, result.strip()):
        return (True, result.strip())
    return (False, "Output must be a valid email address")
```

#### Content Filtering

```python Code
def filter_sensitive_info(result: str) -> Tuple[bool, Union[str, str]]:
    """Remove or validate sensitive information."""
    sensitive_patterns = ['SSN:', 'password:', 'secret:']
    for pattern in sensitive_patterns:
        if pattern.lower() in result.lower():
            return (False, f"Output contains sensitive information ({pattern})")
    return (True, result)
```

#### Data Transformation

```python Code
def normalize_phone_number(result: str) -> Tuple[bool, Union[str, str]]:
    """Ensure phone numbers are in a consistent format."""
    import re
    digits = re.sub(r'\D', '', result)
    if len(digits) == 10:
        formatted = f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"
        return (True, formatted)
    return (False, "Output must be a 10-digit phone number")
```

### Advanced Features

#### Chaining Multiple Validations

```python Code
def chain_validations(*validators):
    """Chain multiple validators together."""
    def combined_validator(result):
        for validator in validators:
            success, data = validator(result)
            if not success:
                return (False, data)
            result = data
        return (True, result)
    return combined_validator

# Usage
task = Task(
    description="Get user contact info",
    expected_output="Email and phone",
    guardrail=chain_validations(
        validate_email_format,
        filter_sensitive_info
    )
)
```

#### Custom Retry Logic

```python Code
task = Task(
    description="Generate data",
    expected_output="Valid data",
    guardrail=validate_data,
    max_retries=5  # Override default retry limit
)
```

## Creating Directories when Saving Files

You can now specify if a task should create directories when saving its output to a file. This is particularly useful for organizing outputs and ensuring that file paths are correctly structured.

```python Code
# ...

save_output_task = Task(
    description='Save the summarized AI news to a file',
    expected_output='File saved successfully',
    agent=research_agent,
    tools=[file_save_tool],
    output_file='outputs/ai_news_summary.txt',
    create_directory=True
)

#...
```

## Conclusion

Tasks are the driving force behind the actions of agents in CrewAI.
By properly defining tasks and their outcomes, you set the stage for your AI agents to work effectively, either independently or as a collaborative unit.
Equipping tasks with appropriate tools, understanding the execution process, and following robust validation practices are crucial for maximizing CrewAI's potential,
ensuring agents are effectively prepared for their assignments and that tasks are executed as intended.

================================================
File: /docs/concepts/knowledge.mdx
================================================

---

title: Knowledge
description: What is knowledge in CrewAI and how to use it.
icon: book

---

# Using Knowledge in CrewAI

## What is Knowledge?

Knowledge in CrewAI is a powerful system that allows AI agents to access and utilize external information sources during their tasks.
Think of it as giving your agents a reference library they can consult while working.

<Info>
  Key benefits of using Knowledge:
  - Enhance agents with domain-specific information
  - Support decisions with real-world data
  - Maintain context across conversations
  - Ground responses in factual information
</Info>

## Supported Knowledge Sources

CrewAI supports various types of knowledge sources out of the box:

<CardGroup cols={2}>
  <Card title="Text Sources" icon="text">
    - Raw strings
    - Text files (.txt)
    - PDF documents
  </Card>
  <Card title="Structured Data" icon="table">
    - CSV files
    - Excel spreadsheets
    - JSON documents
  </Card>
</CardGroup>

## Quick Start

Here's an example using string-based knowledge:

```python Code
from crewai import Agent, Task, Crew, Process, LLM
from crewai.knowledge.source.string_knowledge_source import StringKnowledgeSource

# Create a knowledge source
content = "Users name is John. He is 30 years old and lives in San Francisco."
string_source = StringKnowledgeSource(
    content=content,
)

# Create an LLM with a temperature of 0 to ensure deterministic outputs
llm = LLM(model="gpt-4o-mini", temperature=0)

# Create an agent with the knowledge store
agent = Agent(
    role="About User",
    goal="You know everything about the user.",
    backstory="""You are a master at understanding people and their preferences.""",
    verbose=True,
    allow_delegation=False,
    llm=llm,
)
task = Task(
    description="Answer the following questions about the user: {question}",
    expected_output="An answer to the question.",
    agent=agent,
)

crew = Crew(
    agents=[agent],
    tasks=[task],
    verbose=True,
    process=Process.sequential,
    knowledge_sources=[string_source], # Enable knowledge by adding the sources here. You can also add more sources to the sources list.
)

result = crew.kickoff(inputs={"question": "What city does John live in and how old is he?"})
```

Here's another example with the `CrewDoclingSource`

```python Code
from crewai import LLM, Agent, Crew, Process, Task
from crewai.knowledge.source.crew_docling_source import CrewDoclingSource

# Create a knowledge source
content_source = CrewDoclingSource(
    file_paths=[
        "https://lilianweng.github.io/posts/2024-11-28-reward-hacking",
        "https://lilianweng.github.io/posts/2024-07-07-hallucination",
    ],
)

# Create an LLM with a temperature of 0 to ensure deterministic outputs
llm = LLM(model="gpt-4o-mini", temperature=0)

# Create an agent with the knowledge store
agent = Agent(
    role="About papers",
    goal="You know everything about the papers.",
    backstory="""You are a master at understanding papers and their content.""",
    verbose=True,
    allow_delegation=False,
    llm=llm,
)
task = Task(
    description="Answer the following questions about the papers: {question}",
    expected_output="An answer to the question.",
    agent=agent,
)

crew = Crew(
    agents=[agent],
    tasks=[task],
    verbose=True,
    process=Process.sequential,
    knowledge_sources=[
        content_source
    ],  # Enable knowledge by adding the sources here. You can also add more sources to the sources list.
)

result = crew.kickoff(
    inputs={
        "question": "What is the reward hacking paper about? Be sure to provide sources."
    }
)
```

## Knowledge Configuration

### Chunking Configuration

Control how content is split for processing by setting the chunk size and overlap.

```python Code
knowledge_source = StringKnowledgeSource(
    content="Long content...",
    chunk_size=4000,     # Characters per chunk (default)
    chunk_overlap=200    # Overlap between chunks (default)
)
```

## Embedder Configuration

You can also configure the embedder for the knowledge store. This is useful if you want to use a different embedder for the knowledge store than the one used for the agents.

```python Code
...
string_source = StringKnowledgeSource(
    content="Users name is John. He is 30 years old and lives in San Francisco.",
)
crew = Crew(
    ...
    knowledge_sources=[string_source],
    embedder={
        "provider": "openai",
        "config": {"model": "text-embedding-3-small"},
    },
)
```

## Clearing Knowledge

If you need to clear the knowledge stored in CrewAI, you can use the `crewai reset-memories` command with the `--knowledge` option.

```bash Command
crewai reset-memories --knowledge
```

This is useful when you've updated your knowledge sources and want to ensure that the agents are using the most recent information.

## Agent-Specific Knowledge

While knowledge can be provided at the crew level using `crew.knowledge_sources`, individual agents can also have their own knowledge sources using the `knowledge_sources` parameter:

```python Code
from crewai import Agent, Task, Crew
from crewai.knowledge.source.string_knowledge_source import StringKnowledgeSource

# Create agent-specific knowledge about a product
product_specs = StringKnowledgeSource(
    content="""The XPS 13 laptop features:
    - 13.4-inch 4K display
    - Intel Core i7 processor
    - 16GB RAM
    - 512GB SSD storage
    - 12-hour battery life""",
    metadata={"category": "product_specs"}
)

# Create a support agent with product knowledge
support_agent = Agent(
    role="Technical Support Specialist",
    goal="Provide accurate product information and support.",
    backstory="You are an expert on our laptop products and specifications.",
    knowledge_sources=[product_specs]  # Agent-specific knowledge
)

# Create a task that requires product knowledge
support_task = Task(
    description="Answer this customer question: {question}",
    agent=support_agent
)

# Create and run the crew
crew = Crew(
    agents=[support_agent],
    tasks=[support_task]
)

# Get answer about the laptop's specifications
result = crew.kickoff(
    inputs={"question": "What is the storage capacity of the XPS 13?"}
)
```

<Info>
  Benefits of agent-specific knowledge:
  - Give agents specialized information for their roles
  - Maintain separation of concerns between agents
  - Combine with crew-level knowledge for layered information access
</Info>

## Custom Knowledge Sources

CrewAI allows you to create custom knowledge sources for any type of data by extending the `BaseKnowledgeSource` class. Let's create a practical example that fetches and processes space news articles.

#### Space News Knowledge Source Example

<CodeGroup>

```python Code
from crewai import Agent, Task, Crew, Process, LLM
from crewai.knowledge.source.base_knowledge_source import BaseKnowledgeSource
import requests
from datetime import datetime
from typing import Dict, Any
from pydantic import BaseModel, Field

class SpaceNewsKnowledgeSource(BaseKnowledgeSource):
    """Knowledge source that fetches data from Space News API."""

    api_endpoint: str = Field(description="API endpoint URL")
    limit: int = Field(default=10, description="Number of articles to fetch")

    def load_content(self) -> Dict[Any, str]:
        """Fetch and format space news articles."""
        try:
            response = requests.get(
                f"{self.api_endpoint}?limit={self.limit}"
            )
            response.raise_for_status()

            data = response.json()
            articles = data.get('results', [])

            formatted_data = self._format_articles(articles)
            return {self.api_endpoint: formatted_data}
        except Exception as e:
            raise ValueError(f"Failed to fetch space news: {str(e)}")

    def _format_articles(self, articles: list) -> str:
        """Format articles into readable text."""
        formatted = "Space News Articles:\n\n"
        for article in articles:
            formatted += f"""
                Title: {article['title']}
                Published: {article['published_at']}
                Summary: {article['summary']}
                News Site: {article['news_site']}
                URL: {article['url']}
                -------------------"""
        return formatted

    def add(self) -> None:
        """Process and store the articles."""
        content = self.load_content()
        for _, text in content.items():
            chunks = self._chunk_text(text)
            self.chunks.extend(chunks)

        self._save_documents()

# Create knowledge source
recent_news = SpaceNewsKnowledgeSource(
    api_endpoint="https://api.spaceflightnewsapi.net/v4/articles",
    limit=10,
)

# Create specialized agent
space_analyst = Agent(
    role="Space News Analyst",
    goal="Answer questions about space news accurately and comprehensively",
    backstory="""You are a space industry analyst with expertise in space exploration,
    satellite technology, and space industry trends. You excel at answering questions
    about space news and providing detailed, accurate information.""",
    knowledge_sources=[recent_news],
    llm=LLM(model="gpt-4", temperature=0.0)
)

# Create task that handles user questions
analysis_task = Task(
    description="Answer this question about space news: {user_question}",
    expected_output="A detailed answer based on the recent space news articles",
    agent=space_analyst
)

# Create and run the crew
crew = Crew(
    agents=[space_analyst],
    tasks=[analysis_task],
    verbose=True,
    process=Process.sequential
)

# Example usage
result = crew.kickoff(
    inputs={"user_question": "What are the latest developments in space exploration?"}
)
```

```output Output
# Agent: Space News Analyst
## Task: Answer this question about space news: What are the latest developments in space exploration?


# Agent: Space News Analyst
## Final Answer:
The latest developments in space exploration, based on recent space news articles, include the following:

1. SpaceX has received the final regulatory approvals to proceed with the second integrated Starship/Super Heavy launch, scheduled for as soon as the morning of Nov. 17, 2023. This is a significant step in SpaceX's ambitious plans for space exploration and colonization. [Source: SpaceNews](https://spacenews.com/starship-cleared-for-nov-17-launch/)

2. SpaceX has also informed the US Federal Communications Commission (FCC) that it plans to begin launching its first next-generation Starlink Gen2 satellites. This represents a major upgrade to the Starlink satellite internet service, which aims to provide high-speed internet access worldwide. [Source: Teslarati](https://www.teslarati.com/spacex-first-starlink-gen2-satellite-launch-2022/)

3. AI startup Synthetaic has raised $15 million in Series B funding. The company uses artificial intelligence to analyze data from space and air sensors, which could have significant applications in space exploration and satellite technology. [Source: SpaceNews](https://spacenews.com/ai-startup-synthetaic-raises-15-million-in-series-b-funding/)

4. The Space Force has formally established a unit within the U.S. Indo-Pacific Command, marking a permanent presence in the Indo-Pacific region. This could have significant implications for space security and geopolitics. [Source: SpaceNews](https://spacenews.com/space-force-establishes-permanent-presence-in-indo-pacific-region/)

5. Slingshot Aerospace, a space tracking and data analytics company, is expanding its network of ground-based optical telescopes to increase coverage of low Earth orbit. This could improve our ability to track and analyze objects in low Earth orbit, including satellites and space debris. [Source: SpaceNews](https://spacenews.com/slingshots-space-tracking-network-to-extend-coverage-of-low-earth-orbit/)

6. The National Natural Science Foundation of China has outlined a five-year project for researchers to study the assembly of ultra-large spacecraft. This could lead to significant advancements in spacecraft technology and space exploration capabilities. [Source: SpaceNews](https://spacenews.com/china-researching-challenges-of-kilometer-scale-ultra-large-spacecraft/)

7. The Center for AEroSpace Autonomy Research (CAESAR) at Stanford University is focusing on spacecraft autonomy. The center held a kickoff event on May 22, 2024, to highlight the industry, academia, and government collaboration it seeks to foster. This could lead to significant advancements in autonomous spacecraft technology. [Source: SpaceNews](https://spacenews.com/stanford-center-focuses-on-spacecraft-autonomy/)
```

</CodeGroup>
#### Key Components Explained

1. **Custom Knowledge Source (`SpaceNewsKnowledgeSource`)**:

   - Extends `BaseKnowledgeSource` for integration with CrewAI
   - Configurable API endpoint and article limit
   - Implements three key methods:
     - `load_content()`: Fetches articles from the API
     - `_format_articles()`: Structures the articles into readable text
     - `add()`: Processes and stores the content

2. **Agent Configuration**:

   - Specialized role as a Space News Analyst
   - Uses the knowledge source to access space news

3. **Task Setup**:

   - Takes a user question as input through `{user_question}`
   - Designed to provide detailed answers based on the knowledge source

4. **Crew Orchestration**:
   - Manages the workflow between agent and task
   - Handles input/output through the kickoff method

This example demonstrates how to:

- Create a custom knowledge source that fetches real-time data
- Process and format external data for AI consumption
- Use the knowledge source to answer specific user questions
- Integrate everything seamlessly with CrewAI's agent system

#### About the Spaceflight News API

The example uses the [Spaceflight News API](https://api.spaceflightnewsapi.net/v4/docs/), which:

- Provides free access to space-related news articles
- Requires no authentication
- Returns structured data about space news
- Supports pagination and filtering

You can customize the API query by modifying the endpoint URL:

```python
# Fetch more articles
recent_news = SpaceNewsKnowledgeSource(
    api_endpoint="https://api.spaceflightnewsapi.net/v4/articles",
    limit=20,  # Increase the number of articles
)

# Add search parameters
recent_news = SpaceNewsKnowledgeSource(
    api_endpoint="https://api.spaceflightnewsapi.net/v4/articles?search=NASA", # Search for NASA news
    limit=10,
)
```

## Best Practices

<AccordionGroup>
  <Accordion title="Content Organization">
    - Keep chunk sizes appropriate for your content type
    - Consider content overlap for context preservation
    - Organize related information into separate knowledge sources
  </Accordion>

  <Accordion title="Performance Tips">
    - Adjust chunk sizes based on content complexity 
    - Configure appropriate embedding models
    - Consider using local embedding providers for faster processing
  </Accordion>
</AccordionGroup>

================================================
File: /docs/concepts/flows.mdx
================================================

---

title: Flows
description: Learn how to create and manage AI workflows using CrewAI Flows.
icon: arrow-progress

---

## Introduction

CrewAI Flows is a powerful feature designed to streamline the creation and management of AI workflows. Flows allow developers to combine and coordinate coding tasks and Crews efficiently, providing a robust framework for building sophisticated AI automations.

Flows allow you to create structured, event-driven workflows. They provide a seamless way to connect multiple tasks, manage state, and control the flow of execution in your AI applications. With Flows, you can easily design and implement multi-step processes that leverage the full potential of CrewAI's capabilities.

1. **Simplified Workflow Creation**: Easily chain together multiple Crews and tasks to create complex AI workflows.

2. **State Management**: Flows make it super easy to manage and share state between different tasks in your workflow.

3. **Event-Driven Architecture**: Built on an event-driven model, allowing for dynamic and responsive workflows.

4. **Flexible Control Flow**: Implement conditional logic, loops, and branching within your workflows.

## Getting Started

Let's create a simple Flow where you will use OpenAI to generate a random city in one task and then use that city to generate a fun fact in another task.

```python Code

from crewai.flow.flow import Flow, listen, start
from dotenv import load_dotenv
from litellm import completion


class ExampleFlow(Flow):
    model = "gpt-4o-mini"

    @start()
    def generate_city(self):
        print("Starting flow")

        response = completion(
            model=self.model,
            messages=[
                {
                    "role": "user",
                    "content": "Return the name of a random city in the world.",
                },
            ],
        )

        random_city = response["choices"][0]["message"]["content"]
        print(f"Random City: {random_city}")

        return random_city

    @listen(generate_city)
    def generate_fun_fact(self, random_city):
        response = completion(
            model=self.model,
            messages=[
                {
                    "role": "user",
                    "content": f"Tell me a fun fact about {random_city}",
                },
            ],
        )

        fun_fact = response["choices"][0]["message"]["content"]
        return fun_fact



flow = ExampleFlow()
result = flow.kickoff()

print(f"Generated fun fact: {result}")
```

In the above example, we have created a simple Flow that generates a random city using OpenAI and then generates a fun fact about that city. The Flow consists of two tasks: `generate_city` and `generate_fun_fact`. The `generate_city` task is the starting point of the Flow, and the `generate_fun_fact` task listens for the output of the `generate_city` task.

When you run the Flow, it will generate a random city and then generate a fun fact about that city. The output will be printed to the console.

**Note:** Ensure you have set up your `.env` file to store your `OPENAI_API_KEY`. This key is necessary for authenticating requests to the OpenAI API.

### @start()

The `@start()` decorator is used to mark a method as the starting point of a Flow. When a Flow is started, all the methods decorated with `@start()` are executed in parallel. You can have multiple start methods in a Flow, and they will all be executed when the Flow is started.

### @listen()

The `@listen()` decorator is used to mark a method as a listener for the output of another task in the Flow. The method decorated with `@listen()` will be executed when the specified task emits an output. The method can access the output of the task it is listening to as an argument.

#### Usage

The `@listen()` decorator can be used in several ways:

1. **Listening to a Method by Name**: You can pass the name of the method you want to listen to as a string. When that method completes, the listener method will be triggered.

   ```python Code
   @listen("generate_city")
   def generate_fun_fact(self, random_city):
       # Implementation
   ```

2. **Listening to a Method Directly**: You can pass the method itself. When that method completes, the listener method will be triggered.
   ```python Code
   @listen(generate_city)
   def generate_fun_fact(self, random_city):
       # Implementation
   ```

### Flow Output

Accessing and handling the output of a Flow is essential for integrating your AI workflows into larger applications or systems. CrewAI Flows provide straightforward mechanisms to retrieve the final output, access intermediate results, and manage the overall state of your Flow.

#### Retrieving the Final Output

When you run a Flow, the final output is determined by the last method that completes. The `kickoff()` method returns the output of this final method.

Here's how you can access the final output:

<CodeGroup>
```python Code
from crewai.flow.flow import Flow, listen, start

class OutputExampleFlow(Flow):
@start()
def first_method(self):
return "Output from first_method"

    @listen(first_method)
    def second_method(self, first_output):
        return f"Second method received: {first_output}"

flow = OutputExampleFlow()
final_output = flow.kickoff()

print("---- Final Output ----")
print(final_output)

````

``` text Output
---- Final Output ----
Second method received: Output from first_method
````

</CodeGroup>

In this example, the `second_method` is the last method to complete, so its output will be the final output of the Flow.
The `kickoff()` method will return the final output, which is then printed to the console.

#### Accessing and Updating State

In addition to retrieving the final output, you can also access and update the state within your Flow. The state can be used to store and share data between different methods in the Flow. After the Flow has run, you can access the state to retrieve any information that was added or updated during the execution.

Here's an example of how to update and access the state:

<CodeGroup>

```python Code
from crewai.flow.flow import Flow, listen, start
from pydantic import BaseModel

class ExampleState(BaseModel):
    counter: int = 0
    message: str = ""

class StateExampleFlow(Flow[ExampleState]):

    @start()
    def first_method(self):
        self.state.message = "Hello from first_method"
        self.state.counter += 1

    @listen(first_method)
    def second_method(self):
        self.state.message += " - updated by second_method"
        self.state.counter += 1
        return self.state.message

flow = StateExampleFlow()
final_output = flow.kickoff()
print(f"Final Output: {final_output}")
print("Final State:")
print(flow.state)
```

```text Output
Final Output: Hello from first_method - updated by second_method
Final State:
counter=2 message='Hello from first_method - updated by second_method'
```

</CodeGroup>

In this example, the state is updated by both `first_method` and `second_method`.
After the Flow has run, you can access the final state to see the updates made by these methods.

By ensuring that the final method's output is returned and providing access to the state, CrewAI Flows make it easy to integrate the results of your AI workflows into larger applications or systems,
while also maintaining and accessing the state throughout the Flow's execution.

## Flow State Management

Managing state effectively is crucial for building reliable and maintainable AI workflows. CrewAI Flows provides robust mechanisms for both unstructured and structured state management,
allowing developers to choose the approach that best fits their application's needs.

### Unstructured State Management

In unstructured state management, all state is stored in the `state` attribute of the `Flow` class.
This approach offers flexibility, enabling developers to add or modify state attributes on the fly without defining a strict schema.

```python Code
from crewai.flow.flow import Flow, listen, start

class UntructuredExampleFlow(Flow):

    @start()
    def first_method(self):
        self.state.message = "Hello from structured flow"
        self.state.counter = 0

    @listen(first_method)
    def second_method(self):
        self.state.counter += 1
        self.state.message += " - updated"

    @listen(second_method)
    def third_method(self):
        self.state.counter += 1
        self.state.message += " - updated again"

        print(f"State after third_method: {self.state}")


flow = UntructuredExampleFlow()
flow.kickoff()
```

**Key Points:**

- **Flexibility:** You can dynamically add attributes to `self.state` without predefined constraints.
- **Simplicity:** Ideal for straightforward workflows where state structure is minimal or varies significantly.

### Structured State Management

Structured state management leverages predefined schemas to ensure consistency and type safety across the workflow.
By using models like Pydantic's `BaseModel`, developers can define the exact shape of the state, enabling better validation and auto-completion in development environments.

```python Code
from crewai.flow.flow import Flow, listen, start
from pydantic import BaseModel


class ExampleState(BaseModel):
    counter: int = 0
    message: str = ""


class StructuredExampleFlow(Flow[ExampleState]):

    @start()
    def first_method(self):
        self.state.message = "Hello from structured flow"

    @listen(first_method)
    def second_method(self):
        self.state.counter += 1
        self.state.message += " - updated"

    @listen(second_method)
    def third_method(self):
        self.state.counter += 1
        self.state.message += " - updated again"

        print(f"State after third_method: {self.state}")


flow = StructuredExampleFlow()
flow.kickoff()
```

**Key Points:**

- **Defined Schema:** `ExampleState` clearly outlines the state structure, enhancing code readability and maintainability.
- **Type Safety:** Leveraging Pydantic ensures that state attributes adhere to the specified types, reducing runtime errors.
- **Auto-Completion:** IDEs can provide better auto-completion and error checking based on the defined state model.

### Choosing Between Unstructured and Structured State Management

- **Use Unstructured State Management when:**

  - The workflow's state is simple or highly dynamic.
  - Flexibility is prioritized over strict state definitions.
  - Rapid prototyping is required without the overhead of defining schemas.

- **Use Structured State Management when:**
  - The workflow requires a well-defined and consistent state structure.
  - Type safety and validation are important for your application's reliability.
  - You want to leverage IDE features like auto-completion and type checking for better developer experience.

By providing both unstructured and structured state management options, CrewAI Flows empowers developers to build AI workflows that are both flexible and robust, catering to a wide range of application requirements.

## Flow Control

### Conditional Logic: `or`

The `or_` function in Flows allows you to listen to multiple methods and trigger the listener method when any of the specified methods emit an output.

<CodeGroup>

```python Code
from crewai.flow.flow import Flow, listen, or_, start

class OrExampleFlow(Flow):

    @start()
    def start_method(self):
        return "Hello from the start method"

    @listen(start_method)
    def second_method(self):
        return "Hello from the second method"

    @listen(or_(start_method, second_method))
    def logger(self, result):
        print(f"Logger: {result}")



flow = OrExampleFlow()
flow.kickoff()
```

```text Output
Logger: Hello from the start method
Logger: Hello from the second method
```

</CodeGroup>

When you run this Flow, the `logger` method will be triggered by the output of either the `start_method` or the `second_method`.
The `or_` function is used to listen to multiple methods and trigger the listener method when any of the specified methods emit an output.

### Conditional Logic: `and`

The `and_` function in Flows allows you to listen to multiple methods and trigger the listener method only when all the specified methods emit an output.

<CodeGroup>

```python Code
from crewai.flow.flow import Flow, and_, listen, start

class AndExampleFlow(Flow):

    @start()
    def start_method(self):
        self.state["greeting"] = "Hello from the start method"

    @listen(start_method)
    def second_method(self):
        self.state["joke"] = "What do computers eat? Microchips."

    @listen(and_(start_method, second_method))
    def logger(self):
        print("---- Logger ----")
        print(self.state)

flow = AndExampleFlow()
flow.kickoff()
```

```text Output
---- Logger ----
{'greeting': 'Hello from the start method', 'joke': 'What do computers eat? Microchips.'}
```

</CodeGroup>

When you run this Flow, the `logger` method will be triggered only when both the `start_method` and the `second_method` emit an output.
The `and_` function is used to listen to multiple methods and trigger the listener method only when all the specified methods emit an output.

### Router

The `@router()` decorator in Flows allows you to define conditional routing logic based on the output of a method.
You can specify different routes based on the output of the method, allowing you to control the flow of execution dynamically.

<CodeGroup>

```python Code
import random
from crewai.flow.flow import Flow, listen, router, start
from pydantic import BaseModel

class ExampleState(BaseModel):
    success_flag: bool = False

class RouterFlow(Flow[ExampleState]):

    @start()
    def start_method(self):
        print("Starting the structured flow")
        random_boolean = random.choice([True, False])
        self.state.success_flag = random_boolean

    @router(start_method)
    def second_method(self):
        if self.state.success_flag:
            return "success"
        else:
            return "failed"

    @listen("success")
    def third_method(self):
        print("Third method running")

    @listen("failed")
    def fourth_method(self):
        print("Fourth method running")


flow = RouterFlow()
flow.kickoff()
```

```text Output
Starting the structured flow
Third method running
Fourth method running
```

</CodeGroup>

In the above example, the `start_method` generates a random boolean value and sets it in the state.
The `second_method` uses the `@router()` decorator to define conditional routing logic based on the value of the boolean.
If the boolean is `True`, the method returns `"success"`, and if it is `False`, the method returns `"failed"`.
The `third_method` and `fourth_method` listen to the output of the `second_method` and execute based on the returned value.

When you run this Flow, the output will change based on the random boolean value generated by the `start_method`.

## Adding Crews to Flows

Creating a flow with multiple crews in CrewAI is straightforward.

You can generate a new CrewAI project that includes all the scaffolding needed to create a flow with multiple crews by running the following command:

```bash
crewai create flow name_of_flow
```

This command will generate a new CrewAI project with the necessary folder structure. The generated project includes a prebuilt crew called `poem_crew` that is already working. You can use this crew as a template by copying, pasting, and editing it to create other crews.

### Folder Structure

After running the `crewai create flow name_of_flow` command, you will see a folder structure similar to the following:

| Directory/File         | Description                                                        |
| :--------------------- | :----------------------------------------------------------------- |
| `name_of_flow/`        | Root directory for the flow.                                       |
| ├── `crews/`           | Contains directories for specific crews.                           |
| │ └── `poem_crew/`     | Directory for the "poem_crew" with its configurations and scripts. |
| │ ├── `config/`        | Configuration files directory for the "poem_crew".                 |
| │ │ ├── `agents.yaml`  | YAML file defining the agents for "poem_crew".                     |
| │ │ └── `tasks.yaml`   | YAML file defining the tasks for "poem_crew".                      |
| │ ├── `poem_crew.py`   | Script for "poem_crew" functionality.                              |
| ├── `tools/`           | Directory for additional tools used in the flow.                   |
| │ └── `custom_tool.py` | Custom tool implementation.                                        |
| ├── `main.py`          | Main script for running the flow.                                  |
| ├── `README.md`        | Project description and instructions.                              |
| ├── `pyproject.toml`   | Configuration file for project dependencies and settings.          |
| └── `.gitignore`       | Specifies files and directories to ignore in version control.      |

### Building Your Crews

In the `crews` folder, you can define multiple crews. Each crew will have its own folder containing configuration files and the crew definition file. For example, the `poem_crew` folder contains:

- `config/agents.yaml`: Defines the agents for the crew.
- `config/tasks.yaml`: Defines the tasks for the crew.
- `poem_crew.py`: Contains the crew definition, including agents, tasks, and the crew itself.

You can copy, paste, and edit the `poem_crew` to create other crews.

### Connecting Crews in `main.py`

The `main.py` file is where you create your flow and connect the crews together. You can define your flow by using the `Flow` class and the decorators `@start` and `@listen` to specify the flow of execution.

Here's an example of how you can connect the `poem_crew` in the `main.py` file:

```python Code
#!/usr/bin/env python
from random import randint

from pydantic import BaseModel
from crewai.flow.flow import Flow, listen, start
from .crews.poem_crew.poem_crew import PoemCrew

class PoemState(BaseModel):
    sentence_count: int = 1
    poem: str = ""

class PoemFlow(Flow[PoemState]):

    @start()
    def generate_sentence_count(self):
        print("Generating sentence count")
        self.state.sentence_count = randint(1, 5)

    @listen(generate_sentence_count)
    def generate_poem(self):
        print("Generating poem")
        result = PoemCrew().crew().kickoff(inputs={"sentence_count": self.state.sentence_count})

        print("Poem generated", result.raw)
        self.state.poem = result.raw

    @listen(generate_poem)
    def save_poem(self):
        print("Saving poem")
        with open("poem.txt", "w") as f:
            f.write(self.state.poem)

def kickoff():
    poem_flow = PoemFlow()
    poem_flow.kickoff()


def plot():
    poem_flow = PoemFlow()
    poem_flow.plot()

if __name__ == "__main__":
    kickoff()
```

In this example, the `PoemFlow` class defines a flow that generates a sentence count, uses the `PoemCrew` to generate a poem, and then saves the poem to a file. The flow is kicked off by calling the `kickoff()` method.

### Running the Flow

(Optional) Before running the flow, you can install the dependencies by running:

```bash
crewai install
```

Once all of the dependencies are installed, you need to activate the virtual environment by running:

```bash
source .venv/bin/activate
```

After activating the virtual environment, you can run the flow by executing one of the following commands:

```bash
crewai flow kickoff
```

or

```bash
uv run kickoff
```

The flow will execute, and you should see the output in the console.

## Plot Flows

Visualizing your AI workflows can provide valuable insights into the structure and execution paths of your flows. CrewAI offers a powerful visualization tool that allows you to generate interactive plots of your flows, making it easier to understand and optimize your AI workflows.

### What are Plots?

Plots in CrewAI are graphical representations of your AI workflows. They display the various tasks, their connections, and the flow of data between them. This visualization helps in understanding the sequence of operations, identifying bottlenecks, and ensuring that the workflow logic aligns with your expectations.

### How to Generate a Plot

CrewAI provides two convenient methods to generate plots of your flows:

#### Option 1: Using the `plot()` Method

If you are working directly with a flow instance, you can generate a plot by calling the `plot()` method on your flow object. This method will create an HTML file containing the interactive plot of your flow.

```python Code
# Assuming you have a flow instance
flow.plot("my_flow_plot")
```

This will generate a file named `my_flow_plot.html` in your current directory. You can open this file in a web browser to view the interactive plot.

#### Option 2: Using the Command Line

If you are working within a structured CrewAI project, you can generate a plot using the command line. This is particularly useful for larger projects where you want to visualize the entire flow setup.

```bash
crewai flow plot
```

This command will generate an HTML file with the plot of your flow, similar to the `plot()` method. The file will be saved in your project directory, and you can open it in a web browser to explore the flow.

### Understanding the Plot

The generated plot will display nodes representing the tasks in your flow, with directed edges indicating the flow of execution. The plot is interactive, allowing you to zoom in and out, and hover over nodes to see additional details.

By visualizing your flows, you can gain a clearer understanding of the workflow's structure, making it easier to debug, optimize, and communicate your AI processes to others.

### Conclusion

Plotting your flows is a powerful feature of CrewAI that enhances your ability to design and manage complex AI workflows. Whether you choose to use the `plot()` method or the command line, generating plots will provide you with a visual representation of your workflows, aiding in both development and presentation.

## Next Steps

If you're interested in exploring additional examples of flows, we have a variety of recommendations in our examples repository. Here are four specific flow examples, each showcasing unique use cases to help you match your current problem type to a specific example:

1. **Email Auto Responder Flow**: This example demonstrates an infinite loop where a background job continually runs to automate email responses. It's a great use case for tasks that need to be performed repeatedly without manual intervention. [View Example](https://github.com/crewAIInc/crewAI-examples/tree/main/email_auto_responder_flow)

2. **Lead Score Flow**: This flow showcases adding human-in-the-loop feedback and handling different conditional branches using the router. It's an excellent example of how to incorporate dynamic decision-making and human oversight into your workflows. [View Example](https://github.com/crewAIInc/crewAI-examples/tree/main/lead-score-flow)

3. **Write a Book Flow**: This example excels at chaining multiple crews together, where the output of one crew is used by another. Specifically, one crew outlines an entire book, and another crew generates chapters based on the outline. Eventually, everything is connected to produce a complete book. This flow is perfect for complex, multi-step processes that require coordination between different tasks. [View Example](https://github.com/crewAIInc/crewAI-examples/tree/main/write_a_book_with_flows)

4. **Meeting Assistant Flow**: This flow demonstrates how to broadcast one event to trigger multiple follow-up actions. For instance, after a meeting is completed, the flow can update a Trello board, send a Slack message, and save the results. It's a great example of handling multiple outcomes from a single event, making it ideal for comprehensive task management and notification systems. [View Example](https://github.com/crewAIInc/crewAI-examples/tree/main/meeting_assistant_flow)

By exploring these examples, you can gain insights into how to leverage CrewAI Flows for various use cases, from automating repetitive tasks to managing complex, multi-step processes with dynamic decision-making and human feedback.

Also, check out our YouTube video on how to use flows in CrewAI below!

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/MTb5my6VOT8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>

================================================
File: /docs/concepts/planning.mdx
================================================

---

title: Planning
description: Learn how to add planning to your CrewAI Crew and improve their performance.
icon: brain

---

## Introduction

The planning feature in CrewAI allows you to add planning capability to your crew. When enabled, before each Crew iteration,
all Crew information is sent to an AgentPlanner that will plan the tasks step by step, and this plan will be added to each task description.

### Using the Planning Feature

Getting started with the planning feature is very easy, the only step required is to add `planning=True` to your Crew:

<CodeGroup>
```python Code
from crewai import Crew, Agent, Task, Process

# Assemble your crew with planning capabilities

my_crew = Crew(
agents=self.agents,
tasks=self.tasks,
process=Process.sequential,
planning=True,
)

````
</CodeGroup>

From this point on, your crew will have planning enabled, and the tasks will be planned before each iteration.

#### Planning LLM

Now you can define the LLM that will be used to plan the tasks. You can use any ChatOpenAI LLM model available.

When running the base case example, you will see something like the output below, which represents the output of the `AgentPlanner`
responsible for creating the step-by-step logic to add to the Agents' tasks.

<CodeGroup>
```python Code
from crewai import Crew, Agent, Task, Process
from langchain_openai import ChatOpenAI

# Assemble your crew with planning capabilities and custom LLM
my_crew = Crew(
    agents=self.agents,
    tasks=self.tasks,
    process=Process.sequential,
    planning=True,
    planning_llm=ChatOpenAI(model="gpt-4o")
)

# Run the crew
my_crew.kickoff()
````

````markdown Result
[2024-07-15 16:49:11][INFO]: Planning the crew execution
**Step-by-Step Plan for Task Execution**

**Task Number 1: Conduct a thorough research about AI LLMs**

**Agent:** AI LLMs Senior Data Researcher

**Agent Goal:** Uncover cutting-edge developments in AI LLMs

**Task Expected Output:** A list with 10 bullet points of the most relevant information about AI LLMs

**Task Tools:** None specified

**Agent Tools:** None specified

**Step-by-Step Plan:**

1. **Define Research Scope:**

   - Determine the specific areas of AI LLMs to focus on, such as advancements in architecture, use cases, ethical considerations, and performance metrics.

2. **Identify Reliable Sources:**

   - List reputable sources for AI research, including academic journals, industry reports, conferences (e.g., NeurIPS, ACL), AI research labs (e.g., OpenAI, Google AI), and online databases (e.g., IEEE Xplore, arXiv).

3. **Collect Data:**

   - Search for the latest papers, articles, and reports published in 2023 and early 2024.
   - Use keywords like "Large Language Models 2024", "AI LLM advancements", "AI ethics 2024", etc.

4. **Analyze Findings:**

   - Read and summarize the key points from each source.
   - Highlight new techniques, models, and applications introduced in the past year.

5. **Organize Information:**

   - Categorize the information into relevant topics (e.g., new architectures, ethical implications, real-world applications).
   - Ensure each bullet point is concise but informative.

6. **Create the List:**

   - Compile the 10 most relevant pieces of information into a bullet point list.
   - Review the list to ensure clarity and relevance.

**Expected Output:**

A list with 10 bullet points of the most relevant information about AI LLMs.

---

**Task Number 2: Review the context you got and expand each topic into a full section for a report**

**Agent:** AI LLMs Reporting Analyst

**Agent Goal:** Create detailed reports based on AI LLMs data analysis and research findings

**Task Expected Output:** A fully fledged report with the main topics, each with a full section of information. Formatted as markdown without '```'

**Task Tools:** None specified

**Agent Tools:** None specified

**Step-by-Step Plan:**

1. **Review the Bullet Points:**

   - Carefully read through the list of 10 bullet points provided by the AI LLMs Senior Data Researcher.

2. **Outline the Report:**

   - Create an outline with each bullet point as a main section heading.
   - Plan sub-sections under each main heading to cover different aspects of the topic.

3. **Research Further Details:**

   - For each bullet point, conduct additional research if necessary to gather more detailed information.
   - Look for case studies, examples, and statistical data to support each section.

4. **Write Detailed Sections:**

   - Expand each bullet point into a comprehensive section.
   - Ensure each section includes an introduction, detailed explanation, examples, and a conclusion.
   - Use markdown formatting for headings, subheadings, lists, and emphasis.

5. **Review and Edit:**

   - Proofread the report for clarity, coherence, and correctness.
   - Make sure the report flows logically from one section to the next.
   - Format the report according to markdown standards.

6. **Finalize the Report:**
   - Ensure the report is complete with all sections expanded and detailed.
   - Double-check formatting and make any necessary adjustments.

**Expected Output:**
A fully fledged report with the main topics, each with a full section of information. Formatted as markdown without '```'.
````

</CodeGroup>

================================================
File: /docs/concepts/memory.mdx
================================================

---

title: Memory
description: Leveraging memory systems in the CrewAI framework to enhance agent capabilities.
icon: database

---

## Introduction to Memory Systems in CrewAI

The crewAI framework introduces a sophisticated memory system designed to significantly enhance the capabilities of AI agents.
This system comprises `short-term memory`, `long-term memory`, `entity memory`, and `contextual memory`, each serving a unique purpose in aiding agents to remember,
reason, and learn from past interactions.

## Memory System Components

| Component             | Description                                                                                                                                                                                                      |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Short-Term Memory** | Temporarily stores recent interactions and outcomes using `RAG`, enabling agents to recall and utilize information relevant to their current context during the current executions.                              |
| **Long-Term Memory**  | Preserves valuable insights and learnings from past executions, allowing agents to build and refine their knowledge over time.                                                                                   |
| **Entity Memory**     | Captures and organizes information about entities (people, places, concepts) encountered during tasks, facilitating deeper understanding and relationship mapping. Uses `RAG` for storing entity information.    |
| **Contextual Memory** | Maintains the context of interactions by combining `ShortTermMemory`, `LongTermMemory`, and `EntityMemory`, aiding in the coherence and relevance of agent responses over a sequence of tasks or a conversation. |
| **User Memory**       | Stores user-specific information and preferences, enhancing personalization and user experience.                                                                                                                 |

## How Memory Systems Empower Agents

1. **Contextual Awareness**: With short-term and contextual memory, agents gain the ability to maintain context over a conversation or task sequence, leading to more coherent and relevant responses.

2. **Experience Accumulation**: Long-term memory allows agents to accumulate experiences, learning from past actions to improve future decision-making and problem-solving.

3. **Entity Understanding**: By maintaining entity memory, agents can recognize and remember key entities, enhancing their ability to process and interact with complex information.

## Implementing Memory in Your Crew

When configuring a crew, you can enable and customize each memory component to suit the crew's objectives and the nature of tasks it will perform.
By default, the memory system is disabled, and you can ensure it is active by setting `memory=True` in the crew configuration.
The memory will use OpenAI embeddings by default, but you can change it by setting `embedder` to a different model.
It's also possible to initialize the memory instance with your own instance.

The 'embedder' only applies to **Short-Term Memory** which uses Chroma for RAG.
The **Long-Term Memory** uses SQLite3 to store task results. Currently, there is no way to override these storage implementations.
The data storage files are saved into a platform-specific location found using the appdirs package,
and the name of the project can be overridden using the **CREWAI_STORAGE_DIR** environment variable.

### Example: Configuring Memory for a Crew

```python Code
from crewai import Crew, Agent, Task, Process

# Assemble your crew with memory capabilities
my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True
)
```

### Example: Use Custom Memory Instances e.g FAISS as the VectorDB

```python Code
from crewai import Crew, Agent, Task, Process

# Assemble your crew with memory capabilities
my_crew = Crew(
    agents=[...],
    tasks=[...],
    process="Process.sequential",
    memory=True,
    long_term_memory=EnhanceLongTermMemory(
        storage=LTMSQLiteStorage(
            db_path="/my_data_dir/my_crew1/long_term_memory_storage.db"
        )
    ),
    short_term_memory=EnhanceShortTermMemory(
        storage=CustomRAGStorage(
            crew_name="my_crew",
            storage_type="short_term",
            data_dir="//my_data_dir",
            model=embedder["model"],
            dimension=embedder["dimension"],
        ),
    ),
    entity_memory=EnhanceEntityMemory(
        storage=CustomRAGStorage(
            crew_name="my_crew",
            storage_type="entities",
            data_dir="//my_data_dir",
            model=embedder["model"],
            dimension=embedder["dimension"],
        ),
    ),
    verbose=True,
)
```

## Integrating Mem0 for Enhanced User Memory

[Mem0](https://mem0.ai/) is a self-improving memory layer for LLM applications, enabling personalized AI experiences.

To include user-specific memory you can get your API key [here](https://app.mem0.ai/dashboard/api-keys) and refer the [docs](https://docs.mem0.ai/platform/quickstart#4-1-create-memories) for adding user preferences.

```python Code
import os
from crewai import Crew, Process
from mem0 import MemoryClient

# Set environment variables for Mem0
os.environ["MEM0_API_KEY"] = "m0-xx"

# Step 1: Record preferences based on past conversation or user input
client = MemoryClient()
messages = [
    {"role": "user", "content": "Hi there! I'm planning a vacation and could use some advice."},
    {"role": "assistant", "content": "Hello! I'd be happy to help with your vacation planning. What kind of destination do you prefer?"},
    {"role": "user", "content": "I am more of a beach person than a mountain person."},
    {"role": "assistant", "content": "That's interesting. Do you like hotels or Airbnb?"},
    {"role": "user", "content": "I like Airbnb more."},
]
client.add(messages, user_id="john")

# Step 2: Create a Crew with User Memory

crew = Crew(
    agents=[...],
    tasks=[...],
    verbose=True,
    process=Process.sequential,
    memory=True,
    memory_config={
        "provider": "mem0",
        "config": {"user_id": "john"},
    },
)
```

## Additional Embedding Providers

### Using OpenAI embeddings (already default)

```python Code
from crewai import Crew, Agent, Task, Process

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder={
        "provider": "openai",
        "config": {
            "model": 'text-embedding-3-small'
        }
    }
)
```

Alternatively, you can directly pass the OpenAIEmbeddingFunction to the embedder parameter.

Example:

```python Code
from crewai import Crew, Agent, Task, Process
from chromadb.utils.embedding_functions import OpenAIEmbeddingFunction

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder=OpenAIEmbeddingFunction(api_key=os.getenv("OPENAI_API_KEY"), model_name="text-embedding-3-small"),
)
```

### Using Ollama embeddings

```python Code
from crewai import Crew, Agent, Task, Process

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder={
        "provider": "ollama",
        "config": {
            "model": "mxbai-embed-large"
        }
    }
)
```

### Using Google AI embeddings

```python Code
from crewai import Crew, Agent, Task, Process

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder={
        "provider": "google",
        "config": {
            "api_key": "<YOUR_API_KEY>",
            "model_name": "<model_name>"
        }
    }
)
```

### Using Azure OpenAI embeddings

```python Code
from chromadb.utils.embedding_functions import OpenAIEmbeddingFunction
from crewai import Crew, Agent, Task, Process

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder=OpenAIEmbeddingFunction(
        api_key="YOUR_API_KEY",
        api_base="YOUR_API_BASE_PATH",
        api_type="azure",
        api_version="YOUR_API_VERSION",
        model_name="text-embedding-3-small"
    )
)
```

### Using Vertex AI embeddings

```python Code
from chromadb.utils.embedding_functions import GoogleVertexEmbeddingFunction
from crewai import Crew, Agent, Task, Process

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder=GoogleVertexEmbeddingFunction(
        project_id="YOUR_PROJECT_ID",
        region="YOUR_REGION",
        api_key="YOUR_API_KEY",
        model_name="textembedding-gecko"
    )
)
```

### Using Cohere embeddings

```python Code
from crewai import Crew, Agent, Task, Process

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder={
        "provider": "cohere",
        "config": {
            "api_key": "YOUR_API_KEY",
            "model_name": "<model_name>"
        }
    }
)
```

### Using HuggingFace embeddings

```python Code
from crewai import Crew, Agent, Task, Process

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder={
        "provider": "huggingface",
        "config": {
            "api_url": "<api_url>",
        }
    }
)
```

### Using Watson embeddings

```python Code
from crewai import Crew, Agent, Task, Process

# Note: Ensure you have installed and imported `ibm_watsonx_ai` for Watson embeddings to work.

my_crew = Crew(
    agents=[...],
    tasks=[...],
    process=Process.sequential,
    memory=True,
    verbose=True,
    embedder={
        "provider": "watson",
        "config": {
            "model": "<model_name>",
            "api_url": "<api_url>",
            "api_key": "<YOUR_API_KEY>",
            "project_id": "<YOUR_PROJECT_ID>",
        }
    }
)
```

### Resetting Memory

```shell
crewai reset-memories [OPTIONS]
```

#### Resetting Memory Options

| Option                    | Description                        | Type           | Default |
| :------------------------ | :--------------------------------- | :------------- | :------ |
| `-l`, `--long`            | Reset LONG TERM memory.            | Flag (boolean) | False   |
| `-s`, `--short`           | Reset SHORT TERM memory.           | Flag (boolean) | False   |
| `-e`, `--entities`        | Reset ENTITIES memory.             | Flag (boolean) | False   |
| `-k`, `--kickoff-outputs` | Reset LATEST KICKOFF TASK OUTPUTS. | Flag (boolean) | False   |
| `-a`, `--all`             | Reset ALL memories.                | Flag (boolean) | False   |

## Benefits of Using CrewAI's Memory System

- 🦾 **Adaptive Learning:** Crews become more efficient over time, adapting to new information and refining their approach to tasks.
- 🫡 **Enhanced Personalization:** Memory enables agents to remember user preferences and historical interactions, leading to personalized experiences.
- 🧠 **Improved Problem Solving:** Access to a rich memory store aids agents in making more informed decisions, drawing on past learnings and contextual insights.

## Conclusion

Integrating CrewAI's memory system into your projects is straightforward. By leveraging the provided memory components and configurations,
you can quickly empower your agents with the ability to remember, reason, and learn from their interactions, unlocking new levels of intelligence and capability.

================================================
File: /docs/concepts/langchain-tools.mdx
================================================

---

title: Using LangChain Tools
description: Learn how to integrate LangChain tools with CrewAI agents to enhance search-based queries and more.
icon: link

---

## Using LangChain Tools

<Info>
    CrewAI seamlessly integrates with LangChain's comprehensive [list of tools](https://python.langchain.com/docs/integrations/tools/), all of which can be used with CrewAI.
</Info>

```python Code
import os
from dotenv import load_dotenv
from crewai import Agent, Task, Crew
from crewai.tools import BaseTool
from pydantic import Field
from langchain_community.utilities import GoogleSerperAPIWrapper

# Set up your SERPER_API_KEY key in an .env file, eg:
# SERPER_API_KEY=<your api key>
load_dotenv()

search = GoogleSerperAPIWrapper()

class SearchTool(BaseTool):
    name: str = "Search"
    description: str = "Useful for search-based queries. Use this to find current information about markets, companies, and trends."
    search: GoogleSerperAPIWrapper = Field(default_factory=GoogleSerperAPIWrapper)

    def _run(self, query: str) -> str:
        """Execute the search query and return results"""
        try:
            return self.search.run(query)
        except Exception as e:
            return f"Error performing search: {str(e)}"

# Create Agents
researcher = Agent(
    role='Research Analyst',
    goal='Gather current market data and trends',
    backstory="""You are an expert research analyst with years of experience in
    gathering market intelligence. You're known for your ability to find
    relevant and up-to-date market information and present it in a clear,
    actionable format.""",
    tools=[SearchTool()],
    verbose=True
)

# rest of the code ...
```

## Conclusion

Tools are pivotal in extending the capabilities of CrewAI agents, enabling them to undertake a broad spectrum of tasks and collaborate effectively.
When building solutions with CrewAI, leverage both custom and existing tools to empower your agents and enhance the AI ecosystem. Consider utilizing error handling, caching mechanisms,
and the flexibility of tool arguments to optimize your agents' performance and capabilities.

================================================
File: /docs/concepts/agents.mdx
================================================

---

title: Agents
description: Detailed guide on creating and managing agents within the CrewAI framework.
icon: robot

---

## Overview of an Agent

In the CrewAI framework, an `Agent` is an autonomous unit that can:

- Perform specific tasks
- Make decisions based on its role and goal
- Use tools to accomplish objectives
- Communicate and collaborate with other agents
- Maintain memory of interactions
- Delegate tasks when allowed

<Tip>
Think of an agent as a specialized team member with specific skills, expertise, and responsibilities. For example, a `Researcher` agent might excel at gathering and analyzing information, while a `Writer` agent might be better at creating content.
</Tip>

## Agent Attributes

| Attribute                               | Parameter                | Type                                  | Description                                                                                              |
| :-------------------------------------- | :----------------------- | :------------------------------------ | :------------------------------------------------------------------------------------------------------- |
| **Role**                                | `role`                   | `str`                                 | Defines the agent's function and expertise within the crew.                                              |
| **Goal**                                | `goal`                   | `str`                                 | The individual objective that guides the agent's decision-making.                                        |
| **Backstory**                           | `backstory`              | `str`                                 | Provides context and personality to the agent, enriching interactions.                                   |
| **LLM** _(optional)_                    | `llm`                    | `Union[str, LLM, Any]`                | Language model that powers the agent. Defaults to the model specified in `OPENAI_MODEL_NAME` or "gpt-4". |
| **Tools** _(optional)_                  | `tools`                  | `List[BaseTool]`                      | Capabilities or functions available to the agent. Defaults to an empty list.                             |
| **Function Calling LLM** _(optional)_   | `function_calling_llm`   | `Optional[Any]`                       | Language model for tool calling, overrides crew's LLM if specified.                                      |
| **Max Iterations** _(optional)_         | `max_iter`               | `int`                                 | Maximum iterations before the agent must provide its best answer. Default is 20.                         |
| **Max RPM** _(optional)_                | `max_rpm`                | `Optional[int]`                       | Maximum requests per minute to avoid rate limits.                                                        |
| **Max Execution Time** _(optional)_     | `max_execution_time`     | `Optional[int]`                       | Maximum time (in seconds) for task execution.                                                            |
| **Memory** _(optional)_                 | `memory`                 | `bool`                                | Whether the agent should maintain memory of interactions. Default is True.                               |
| **Verbose** _(optional)_                | `verbose`                | `bool`                                | Enable detailed execution logs for debugging. Default is False.                                          |
| **Allow Delegation** _(optional)_       | `allow_delegation`       | `bool`                                | Allow the agent to delegate tasks to other agents. Default is False.                                     |
| **Step Callback** _(optional)_          | `step_callback`          | `Optional[Any]`                       | Function called after each agent step, overrides crew callback.                                          |
| **Cache** _(optional)_                  | `cache`                  | `bool`                                | Enable caching for tool usage. Default is True.                                                          |
| **System Template** _(optional)_        | `system_template`        | `Optional[str]`                       | Custom system prompt template for the agent.                                                             |
| **Prompt Template** _(optional)_        | `prompt_template`        | `Optional[str]`                       | Custom prompt template for the agent.                                                                    |
| **Response Template** _(optional)_      | `response_template`      | `Optional[str]`                       | Custom response template for the agent.                                                                  |
| **Allow Code Execution** _(optional)_   | `allow_code_execution`   | `Optional[bool]`                      | Enable code execution for the agent. Default is False.                                                   |
| **Max Retry Limit** _(optional)_        | `max_retry_limit`        | `int`                                 | Maximum number of retries when an error occurs. Default is 2.                                            |
| **Respect Context Window** _(optional)_ | `respect_context_window` | `bool`                                | Keep messages under context window size by summarizing. Default is True.                                 |
| **Code Execution Mode** _(optional)_    | `code_execution_mode`    | `Literal["safe", "unsafe"]`           | Mode for code execution: 'safe' (using Docker) or 'unsafe' (direct). Default is 'safe'.                  |
| **Embedder Config** _(optional)_        | `embedder_config`        | `Optional[Dict[str, Any]]`            | Configuration for the embedder used by the agent.                                                        |
| **Knowledge Sources** _(optional)_      | `knowledge_sources`      | `Optional[List[BaseKnowledgeSource]]` | Knowledge sources available to the agent.                                                                |
| **Use System Prompt** _(optional)_      | `use_system_prompt`      | `Optional[bool]`                      | Whether to use system prompt (for o1 model support). Default is True.                                    |

## Creating Agents

There are two ways to create agents in CrewAI: using **YAML configuration (recommended)** or defining them **directly in code**.

### YAML Configuration (Recommended)

Using YAML configuration provides a cleaner, more maintainable way to define agents. We strongly recommend using this approach in your CrewAI projects.

After creating your CrewAI project as outlined in the [Installation](/installation) section, navigate to the `src/latest_ai_development/config/agents.yaml` file and modify the template to match your requirements.

<Note>
Variables in your YAML files (like `{topic}`) will be replaced with values from your inputs when running the crew:
```python Code
crew.kickoff(inputs={'topic': 'AI Agents'})
```
</Note>

Here's an example of how to configure agents using YAML:

```yaml agents.yaml
# src/latest_ai_development/config/agents.yaml
researcher:
  role: >
    {topic} Senior Data Researcher
  goal: >
    Uncover cutting-edge developments in {topic}
  backstory: >
    You're a seasoned researcher with a knack for uncovering the latest
    developments in {topic}. Known for your ability to find the most relevant
    information and present it in a clear and concise manner.

reporting_analyst:
  role: >
    {topic} Reporting Analyst
  goal: >
    Create detailed reports based on {topic} data analysis and research findings
  backstory: >
    You're a meticulous analyst with a keen eye for detail. You're known for
    your ability to turn complex data into clear and concise reports, making
    it easy for others to understand and act on the information you provide.
```

To use this YAML configuration in your code, create a crew class that inherits from `CrewBase`:

```python Code
# src/latest_ai_development/crew.py
from crewai import Agent, Crew, Process
from crewai.project import CrewBase, agent, crew
from crewai_tools import SerperDevTool

@CrewBase
class LatestAiDevelopmentCrew():
  """LatestAiDevelopment crew"""

  @agent
  def researcher(self) -> Agent:
    return Agent(
      config=self.agents_config['researcher'],
      verbose=True,
      tools=[SerperDevTool()]
    )

  @agent
  def reporting_analyst(self) -> Agent:
    return Agent(
      config=self.agents_config['reporting_analyst'],
      verbose=True
    )
```

<Note>
The names you use in your YAML files (`agents.yaml`) should match the method names in your Python code.
</Note>

### Direct Code Definition

You can create agents directly in code by instantiating the `Agent` class. Here's a comprehensive example showing all available parameters:

```python Code
from crewai import Agent
from crewai_tools import SerperDevTool

# Create an agent with all available parameters
agent = Agent(
    role="Senior Data Scientist",
    goal="Analyze and interpret complex datasets to provide actionable insights",
    backstory="With over 10 years of experience in data science and machine learning, "
              "you excel at finding patterns in complex datasets.",
    llm="gpt-4",  # Default: OPENAI_MODEL_NAME or "gpt-4"
    function_calling_llm=None,  # Optional: Separate LLM for tool calling
    memory=True,  # Default: True
    verbose=False,  # Default: False
    allow_delegation=False,  # Default: False
    max_iter=20,  # Default: 20 iterations
    max_rpm=None,  # Optional: Rate limit for API calls
    max_execution_time=None,  # Optional: Maximum execution time in seconds
    max_retry_limit=2,  # Default: 2 retries on error
    allow_code_execution=False,  # Default: False
    code_execution_mode="safe",  # Default: "safe" (options: "safe", "unsafe")
    respect_context_window=True,  # Default: True
    use_system_prompt=True,  # Default: True
    tools=[SerperDevTool()],  # Optional: List of tools
    knowledge_sources=None,  # Optional: List of knowledge sources
    embedder_config=None,  # Optional: Custom embedder configuration
    system_template=None,  # Optional: Custom system prompt template
    prompt_template=None,  # Optional: Custom prompt template
    response_template=None,  # Optional: Custom response template
    step_callback=None,  # Optional: Callback function for monitoring
)
```

Let's break down some key parameter combinations for common use cases:

#### Basic Research Agent

```python Code
research_agent = Agent(
    role="Research Analyst",
    goal="Find and summarize information about specific topics",
    backstory="You are an experienced researcher with attention to detail",
    tools=[SerperDevTool()],
    verbose=True  # Enable logging for debugging
)
```

#### Code Development Agent

```python Code
dev_agent = Agent(
    role="Senior Python Developer",
    goal="Write and debug Python code",
    backstory="Expert Python developer with 10 years of experience",
    allow_code_execution=True,
    code_execution_mode="safe",  # Uses Docker for safety
    max_execution_time=300,  # 5-minute timeout
    max_retry_limit=3  # More retries for complex code tasks
)
```

#### Long-Running Analysis Agent

```python Code
analysis_agent = Agent(
    role="Data Analyst",
    goal="Perform deep analysis of large datasets",
    backstory="Specialized in big data analysis and pattern recognition",
    memory=True,
    respect_context_window=True,
    max_rpm=10,  # Limit API calls
    function_calling_llm="gpt-4o-mini"  # Cheaper model for tool calls
)
```

#### Custom Template Agent

```python Code
custom_agent = Agent(
    role="Customer Service Representative",
    goal="Assist customers with their inquiries",
    backstory="Experienced in customer support with a focus on satisfaction",
    system_template="""<|start_header_id|>system<|end_header_id|>
                        {{ .System }}<|eot_id|>""",
    prompt_template="""<|start_header_id|>user<|end_header_id|>
                        {{ .Prompt }}<|eot_id|>""",
    response_template="""<|start_header_id|>assistant<|end_header_id|>
                        {{ .Response }}<|eot_id|>""",
)
```

### Parameter Details

#### Critical Parameters

- `role`, `goal`, and `backstory` are required and shape the agent's behavior
- `llm` determines the language model used (default: OpenAI's GPT-4)

#### Memory and Context

- `memory`: Enable to maintain conversation history
- `respect_context_window`: Prevents token limit issues
- `knowledge_sources`: Add domain-specific knowledge bases

#### Execution Control

- `max_iter`: Maximum attempts before giving best answer
- `max_execution_time`: Timeout in seconds
- `max_rpm`: Rate limiting for API calls
- `max_retry_limit`: Retries on error

#### Code Execution

- `allow_code_execution`: Must be True to run code
- `code_execution_mode`:
  - `"safe"`: Uses Docker (recommended for production)
  - `"unsafe"`: Direct execution (use only in trusted environments)

#### Templates

- `system_template`: Defines agent's core behavior
- `prompt_template`: Structures input format
- `response_template`: Formats agent responses

<Note>
When using custom templates, you can use variables like `{role}`, `{goal}`, and `{input}` in your templates. These will be automatically populated during execution.
</Note>

## Agent Tools

Agents can be equipped with various tools to enhance their capabilities. CrewAI supports tools from:

- [CrewAI Toolkit](https://github.com/joaomdmoura/crewai-tools)
- [LangChain Tools](https://python.langchain.com/docs/integrations/tools)

Here's how to add tools to an agent:

```python Code
from crewai import Agent
from crewai_tools import SerperDevTool, WikipediaTools

# Create tools
search_tool = SerperDevTool()
wiki_tool = WikipediaTools()

# Add tools to agent
researcher = Agent(
    role="AI Technology Researcher",
    goal="Research the latest AI developments",
    tools=[search_tool, wiki_tool],
    verbose=True
)
```

## Agent Memory and Context

Agents can maintain memory of their interactions and use context from previous tasks. This is particularly useful for complex workflows where information needs to be retained across multiple tasks.

```python Code
from crewai import Agent

analyst = Agent(
    role="Data Analyst",
    goal="Analyze and remember complex data patterns",
    memory=True,  # Enable memory
    verbose=True
)
```

<Note>
When `memory` is enabled, the agent will maintain context across multiple interactions, improving its ability to handle complex, multi-step tasks.
</Note>

## Important Considerations and Best Practices

### Security and Code Execution

- When using `allow_code_execution`, be cautious with user input and always validate it
- Use `code_execution_mode: "safe"` (Docker) in production environments
- Consider setting appropriate `max_execution_time` limits to prevent infinite loops

### Performance Optimization

- Use `respect_context_window: true` to prevent token limit issues
- Set appropriate `max_rpm` to avoid rate limiting
- Enable `cache: true` to improve performance for repetitive tasks
- Adjust `max_iter` and `max_retry_limit` based on task complexity

### Memory and Context Management

- Use `memory: true` for tasks requiring historical context
- Leverage `knowledge_sources` for domain-specific information
- Configure `embedder_config` when using custom embedding models
- Use custom templates (`system_template`, `prompt_template`, `response_template`) for fine-grained control over agent behavior

### Agent Collaboration

- Enable `allow_delegation: true` when agents need to work together
- Use `step_callback` to monitor and log agent interactions
- Consider using different LLMs for different purposes:
  - Main `llm` for complex reasoning
  - `function_calling_llm` for efficient tool usage

### Model Compatibility

- Set `use_system_prompt: false` for older models that don't support system messages
- Ensure your chosen `llm` supports the features you need (like function calling)

## Troubleshooting Common Issues

1. **Rate Limiting**: If you're hitting API rate limits:

   - Implement appropriate `max_rpm`
   - Use caching for repetitive operations
   - Consider batching requests

2. **Context Window Errors**: If you're exceeding context limits:

   - Enable `respect_context_window`
   - Use more efficient prompts
   - Clear agent memory periodically

3. **Code Execution Issues**: If code execution fails:

   - Verify Docker is installed for safe mode
   - Check execution permissions
   - Review code sandbox settings

4. **Memory Issues**: If agent responses seem inconsistent:
   - Verify memory is enabled
   - Check knowledge source configuration
   - Review conversation history management

Remember that agents are most effective when configured according to their specific use case. Take time to understand your requirements and adjust these parameters accordingly.

================================================
File: /docs/concepts/training.mdx
================================================

---

title: Training
description: Learn how to train your CrewAI agents by giving them feedback early on and get consistent results.
icon: dumbbell

---

## Introduction

The training feature in CrewAI allows you to train your AI agents using the command-line interface (CLI).
By running the command `crewai train -n <n_iterations>`, you can specify the number of iterations for the training process.

During training, CrewAI utilizes techniques to optimize the performance of your agents along with human feedback.
This helps the agents improve their understanding, decision-making, and problem-solving abilities.

### Training Your Crew Using the CLI

To use the training feature, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where your CrewAI project is located.
3. Run the following command:

```shell
crewai train -n <n_iterations> <filename> (optional)
```

<Tip>
  Replace `<n_iterations>` with the desired number of training iterations and `<filename>` with the appropriate filename ending with `.pkl`.
</Tip>

### Training Your Crew Programmatically

To train your crew programmatically, use the following steps:

1. Define the number of iterations for training.
2. Specify the input parameters for the training process.
3. Execute the training command within a try-except block to handle potential errors.

```python Code
n_iterations = 2
inputs = {"topic": "CrewAI Training"}
filename = "your_model.pkl"

try:
    YourCrewName_Crew().crew().train(
      n_iterations=n_iterations,
      inputs=inputs,
      filename=filename
    )

except Exception as e:
    raise Exception(f"An error occurred while training the crew: {e}")
```

### Key Points to Note

- **Positive Integer Requirement:** Ensure that the number of iterations (`n_iterations`) is a positive integer. The code will raise a `ValueError` if this condition is not met.
- **Filename Requirement:** Ensure that the filename ends with `.pkl`. The code will raise a `ValueError` if this condition is not met.
- **Error Handling:** The code handles subprocess errors and unexpected exceptions, providing error messages to the user.

It is important to note that the training process may take some time, depending on the complexity of your agents and will also require your feedback on each iteration.

Once the training is complete, your agents will be equipped with enhanced capabilities and knowledge, ready to tackle complex tasks and provide more consistent and valuable insights.

Remember to regularly update and retrain your agents to ensure they stay up-to-date with the latest information and advancements in the field.

Happy training with CrewAI! 🚀

================================================
File: /docs/concepts/collaboration.mdx
================================================

---

title: Collaboration
description: Exploring the dynamics of agent collaboration within the CrewAI framework, focusing on the newly integrated features for enhanced functionality.
icon: screen-users

---

## Collaboration Fundamentals

Collaboration in CrewAI is fundamental, enabling agents to combine their skills, share information, and assist each other in task execution, embodying a truly cooperative ecosystem.

- **Information Sharing**: Ensures all agents are well-informed and can contribute effectively by sharing data and findings.
- **Task Assistance**: Allows agents to seek help from peers with the required expertise for specific tasks.
- **Resource Allocation**: Optimizes task execution through the efficient distribution and sharing of resources among agents.

## Enhanced Attributes for Improved Collaboration

The `Crew` class has been enriched with several attributes to support advanced functionalities:

| Feature                                                               | Description                                                                                                                                                                                              |
| :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Language Model Management** (`manager_llm`, `function_calling_llm`) | Manages language models for executing tasks and tools. `manager_llm` is required for hierarchical processes, while `function_calling_llm` is optional with a default value for streamlined interactions. |
| **Custom Manager Agent** (`manager_agent`)                            | Specifies a custom agent as the manager, replacing the default CrewAI manager.                                                                                                                           |
| **Process Flow** (`process`)                                          | Defines execution logic (e.g., sequential, hierarchical) for task distribution.                                                                                                                          |
| **Verbose Logging** (`verbose`)                                       | Provides detailed logging for monitoring and debugging. Accepts integer and boolean values to control verbosity level.                                                                                   |
| **Rate Limiting** (`max_rpm`)                                         | Limits requests per minute to optimize resource usage. Setting guidelines depend on task complexity and load.                                                                                            |
| **Internationalization / Customization** (`language`, `prompt_file`)  | Supports prompt customization for global usability. [Example of file](https://github.com/joaomdmoura/crewAI/blob/main/src/crewai/translations/en.json)                                                   |
| **Execution and Output Handling** (`full_output`)                     | Controls output granularity, distinguishing between full and final outputs.                                                                                                                              |
| **Callback and Telemetry** (`step_callback`, `task_callback`)         | Enables step-wise and task-level execution monitoring and telemetry for performance analytics.                                                                                                           |
| **Crew Sharing** (`share_crew`)                                       | Allows sharing crew data with CrewAI for model improvement. Privacy implications and benefits should be considered.                                                                                      |
| **Usage Metrics** (`usage_metrics`)                                   | Logs all LLM usage metrics during task execution for performance insights.                                                                                                                               |
| **Memory Usage** (`memory`)                                           | Enables memory for storing execution history, aiding in agent learning and task efficiency.                                                                                                              |
| **Embedder Configuration** (`embedder`)                               | Configures the embedder for language understanding and generation, with support for provider customization.                                                                                              |
| **Cache Management** (`cache`)                                        | Specifies whether to cache tool execution results, enhancing performance.                                                                                                                                |
| **Output Logging** (`output_log_file`)                                | Defines the file path for logging crew execution output.                                                                                                                                                 |
| **Planning Mode** (`planning`)                                        | Enables action planning before task execution. Set `planning=True` to activate.                                                                                                                          |
| **Replay Feature** (`replay`)                                         | Provides CLI for listing tasks from the last run and replaying from specific tasks, aiding in task management and troubleshooting.                                                                       |

## Delegation (Dividing to Conquer)

Delegation enhances functionality by allowing agents to intelligently assign tasks or seek help, thereby amplifying the crew's overall capability.

## Implementing Collaboration and Delegation

Setting up a crew involves defining the roles and capabilities of each agent. CrewAI seamlessly manages their interactions, ensuring efficient collaboration and delegation, with enhanced customization and monitoring features to adapt to various operational needs.

## Example Scenario

Consider a crew with a researcher agent tasked with data gathering and a writer agent responsible for compiling reports. The integration of advanced language model management and process flow attributes allows for more sophisticated interactions, such as the writer delegating complex research tasks to the researcher or querying specific information, thereby facilitating a seamless workflow.

## Conclusion

The integration of advanced attributes and functionalities into the CrewAI framework significantly enriches the agent collaboration ecosystem. These enhancements not only simplify interactions but also offer unprecedented flexibility and control, paving the way for sophisticated AI-driven solutions capable of tackling complex tasks through intelligent collaboration and delegation.

================================================
File: /docs/concepts/processes.mdx
================================================

---

title: Processes
description: Detailed guide on workflow management through processes in CrewAI, with updated implementation details.
icon: bars-staggered

---

## Understanding Processes

<Tip>
  Processes orchestrate the execution of tasks by agents, akin to project management in human teams. 
  These processes ensure tasks are distributed and executed efficiently, in alignment with a predefined strategy.
</Tip>

## Process Implementations

- **Sequential**: Executes tasks sequentially, ensuring tasks are completed in an orderly progression.
- **Hierarchical**: Organizes tasks in a managerial hierarchy, where tasks are delegated and executed based on a structured chain of command. A manager language model (`manager_llm`) or a custom manager agent (`manager_agent`) must be specified in the crew to enable the hierarchical process, facilitating the creation and management of tasks by the manager.
- **Consensual Process (Planned)**: Aiming for collaborative decision-making among agents on task execution, this process type introduces a democratic approach to task management within CrewAI. It is planned for future development and is not currently implemented in the codebase.

## The Role of Processes in Teamwork

Processes enable individual agents to operate as a cohesive unit, streamlining their efforts to achieve common objectives with efficiency and coherence.

## Assigning Processes to a Crew

To assign a process to a crew, specify the process type upon crew creation to set the execution strategy. For a hierarchical process, ensure to define `manager_llm` or `manager_agent` for the manager agent.

```python
from crewai import Crew
from crewai.process import Process
from langchain_openai import ChatOpenAI

# Example: Creating a crew with a sequential process
crew = Crew(
    agents=my_agents,
    tasks=my_tasks,
    process=Process.sequential
)

# Example: Creating a crew with a hierarchical process
# Ensure to provide a manager_llm or manager_agent
crew = Crew(
    agents=my_agents,
    tasks=my_tasks,
    process=Process.hierarchical,
    manager_llm=ChatOpenAI(model="gpt-4")
    # or
    # manager_agent=my_manager_agent
)
```

**Note:** Ensure `my_agents` and `my_tasks` are defined prior to creating a `Crew` object, and for the hierarchical process, either `manager_llm` or `manager_agent` is also required.

## Sequential Process

This method mirrors dynamic team workflows, progressing through tasks in a thoughtful and systematic manner. Task execution follows the predefined order in the task list, with the output of one task serving as context for the next.

To customize task context, utilize the `context` parameter in the `Task` class to specify outputs that should be used as context for subsequent tasks.

## Hierarchical Process

Emulates a corporate hierarchy, CrewAI allows specifying a custom manager agent or automatically creates one, requiring the specification of a manager language model (`manager_llm`). This agent oversees task execution, including planning, delegation, and validation. Tasks are not pre-assigned; the manager allocates tasks to agents based on their capabilities, reviews outputs, and assesses task completion.

## Process Class: Detailed Overview

The `Process` class is implemented as an enumeration (`Enum`), ensuring type safety and restricting process values to the defined types (`sequential`, `hierarchical`). The consensual process is planned for future inclusion, emphasizing our commitment to continuous development and innovation.

## Conclusion

The structured collaboration facilitated by processes within CrewAI is crucial for enabling systematic teamwork among agents.
This documentation has been updated to reflect the latest features, enhancements, and the planned integration of the Consensual Process, ensuring users have access to the most current and comprehensive information.

================================================
File: /docs/concepts/llms.mdx
================================================

---

title: 'LLMs'
description: 'A comprehensive guide to configuring and using Large Language Models (LLMs) in your CrewAI projects'
icon: 'microchip-ai'

---

<Note>
  CrewAI integrates with multiple LLM providers through LiteLLM, giving you the flexibility to choose the right model for your specific use case. This guide will help you understand how to configure and use different LLM providers in your CrewAI projects.
</Note>

## What are LLMs?

Large Language Models (LLMs) are the core intelligence behind CrewAI agents. They enable agents to understand context, make decisions, and generate human-like responses. Here's what you need to know:

<CardGroup cols={2}>
  <Card title="LLM Basics" icon="brain">
    Large Language Models are AI systems trained on vast amounts of text data. They power the intelligence of your CrewAI agents, enabling them to understand and generate human-like text.
  </Card>
  <Card title="Context Window" icon="window">
    The context window determines how much text an LLM can process at once. Larger windows (e.g., 128K tokens) allow for more context but may be more expensive and slower.
  </Card>
  <Card title="Temperature" icon="temperature-three-quarters">
    Temperature (0.0 to 1.0) controls response randomness. Lower values (e.g., 0.2) produce more focused, deterministic outputs, while higher values (e.g., 0.8) increase creativity and variability.
  </Card>
  <Card title="Provider Selection" icon="server">
    Each LLM provider (e.g., OpenAI, Anthropic, Google) offers different models with varying capabilities, pricing, and features. Choose based on your needs for accuracy, speed, and cost.
  </Card>
</CardGroup>

## Available Models and Their Capabilities

Here's a detailed breakdown of supported models and their capabilities, you can compare performance at [lmarena.ai](https://lmarena.ai/?leaderboard) and [artificialanalysis.ai](https://artificialanalysis.ai/):

<Tabs>
  <Tab title="OpenAI">
    | Model | Context Window | Best For |
    |-------|---------------|-----------|
    | GPT-4 | 8,192 tokens | High-accuracy tasks, complex reasoning |
    | GPT-4 Turbo | 128,000 tokens | Long-form content, document analysis |
    | GPT-4o & GPT-4o-mini | 128,000 tokens | Cost-effective large context processing |

    <Note>
      1 token ≈ 4 characters in English. For example, 8,192 tokens ≈ 32,768 characters or about 6,000 words.
    </Note>

  </Tab>
  <Tab title="Nvidia NIM">
    | Model | Context Window | Best For |
    |-------|---------------|-----------|
    | nvidia/mistral-nemo-minitron-8b-8k-instruct | 8,192 tokens | State-of-the-art small language model delivering superior accuracy for chatbot, virtual assistants, and content generation. |
    | nvidia/nemotron-4-mini-hindi-4b-instruct| 4,096 tokens | A bilingual Hindi-English SLM for on-device inference, tailored specifically for Hindi Language. |
    | "nvidia/llama-3.1-nemotron-70b-instruct | 128k tokens | Llama-3.1-Nemotron-70B-Instruct is a large language model customized by NVIDIA in order to improve the helpfulness of LLM generated responses. |
    | nvidia/llama3-chatqa-1.5-8b | 128k tokens | Advanced LLM to generate high-quality, context-aware responses for chatbots and search engines. |
    | nvidia/llama3-chatqa-1.5-70b | 128k tokens | Advanced LLM to generate high-quality, context-aware responses for chatbots and search engines. |
    | nvidia/vila | 128k tokens | Multi-modal vision-language model that understands text/img/video and creates informative responses |
    | nvidia/neva-22| 4,096 tokens | Multi-modal vision-language model that understands text/images and generates informative responses |
    | nvidia/nemotron-mini-4b-instruct | 8,192 tokens | General-purpose tasks |
    | nvidia/usdcode-llama3-70b-instruct | 128k tokens | State-of-the-art LLM that answers OpenUSD knowledge queries and generates USD-Python code. |
    | nvidia/nemotron-4-340b-instruct | 4,096 tokens | Creates diverse synthetic data that mimics the characteristics of real-world data. |
    | meta/codellama-70b | 100k tokens | LLM capable of generating code from natural language and vice versa. |
    | meta/llama2-70b | 4,096 tokens | Cutting-edge large language AI model capable of generating text and code in response to prompts. |
    | meta/llama3-8b-instruct | 8,192 tokens | Advanced state-of-the-art LLM with language understanding, superior reasoning, and text generation. |
    | meta/llama3-70b-instruct | 8,192 tokens | Powers complex conversations with superior contextual understanding, reasoning and text generation. |
    | meta/llama-3.1-8b-instruct | 128k tokens | Advanced state-of-the-art model with language understanding, superior reasoning, and text generation. |
    | meta/llama-3.1-70b-instruct | 128k tokens | Powers complex conversations with superior contextual understanding, reasoning and text generation. |
    | meta/llama-3.1-405b-instruct | 128k tokens | Advanced LLM for synthetic data generation, distillation, and inference for chatbots, coding, and domain-specific tasks. |
    | meta/llama-3.2-1b-instruct | 128k tokens | Advanced state-of-the-art small language model with language understanding, superior reasoning, and text generation. |
    | meta/llama-3.2-3b-instruct | 128k tokens | Advanced state-of-the-art small language model with language understanding, superior reasoning, and text generation. |
    | meta/llama-3.2-11b-vision-instruct | 128k tokens | Advanced state-of-the-art small language model with language understanding, superior reasoning, and text generation. |
    | meta/llama-3.2-90b-vision-instruct | 128k tokens | Advanced state-of-the-art small language model with language understanding, superior reasoning, and text generation. |
    | meta/llama-3.1-70b-instruct | 128k tokens | Powers complex conversations with superior contextual understanding, reasoning and text generation. |
    | google/gemma-7b | 8,192 tokens | Cutting-edge text generation model text understanding, transformation, and code generation. |
    | google/gemma-2b | 8,192 tokens | Cutting-edge text generation model text understanding, transformation, and code generation. |
    | google/codegemma-7b | 8,192 tokens | Cutting-edge model built on Google's Gemma-7B specialized for code generation and code completion. |
    | google/codegemma-1.1-7b | 8,192 tokens | Advanced programming model for code generation, completion, reasoning, and instruction following. |
    | google/recurrentgemma-2b | 8,192 tokens | Novel recurrent architecture based language model for faster inference when generating long sequences. |
    | google/gemma-2-9b-it | 8,192 tokens | Cutting-edge text generation model text understanding, transformation, and code generation. |
    | google/gemma-2-27b-it | 8,192 tokens | Cutting-edge text generation model text understanding, transformation, and code generation. |
    | google/gemma-2-2b-it | 8,192 tokens | Cutting-edge text generation model text understanding, transformation, and code generation. |
    | google/deplot | 512 tokens | One-shot visual language understanding model that translates images of plots into tables. |
    | google/paligemma | 8,192 tokens | Vision language model adept at comprehending text and visual inputs to produce informative responses. |
    | mistralai/mistral-7b-instruct-v0.2 | 32k tokens | This LLM follows instructions, completes requests, and generates creative text. |
    | mistralai/mixtral-8x7b-instruct-v0.1 | 8,192 tokens | An MOE LLM that follows instructions, completes requests, and generates creative text. |
    | mistralai/mistral-large | 4,096 tokens | Creates diverse synthetic data that mimics the characteristics of real-world data. |
    | mistralai/mixtral-8x22b-instruct-v0.1 | 8,192 tokens | Creates diverse synthetic data that mimics the characteristics of real-world data. |
    | mistralai/mistral-7b-instruct-v0.3 | 32k tokens | This LLM follows instructions, completes requests, and generates creative text. |
    | nv-mistralai/mistral-nemo-12b-instruct | 128k tokens | Most advanced language model for reasoning, code, multilingual tasks; runs on a single GPU. |
    | mistralai/mamba-codestral-7b-v0.1 | 256k tokens | Model for writing and interacting with code across a wide range of programming languages and tasks. |
    | microsoft/phi-3-mini-128k-instruct | 128K tokens | Lightweight, state-of-the-art open LLM with strong math and logical reasoning skills. |
    | microsoft/phi-3-mini-4k-instruct | 4,096 tokens | Lightweight, state-of-the-art open LLM with strong math and logical reasoning skills. |
    | microsoft/phi-3-small-8k-instruct | 8,192 tokens | Lightweight, state-of-the-art open LLM with strong math and logical reasoning skills. |
    | microsoft/phi-3-small-128k-instruct | 128K tokens | Lightweight, state-of-the-art open LLM with strong math and logical reasoning skills. |
    | microsoft/phi-3-medium-4k-instruct | 4,096 tokens | Lightweight, state-of-the-art open LLM with strong math and logical reasoning skills. |
    | microsoft/phi-3-medium-128k-instruct | 128K tokens | Lightweight, state-of-the-art open LLM with strong math and logical reasoning skills. |
    | microsoft/phi-3.5-mini-instruct | 128K tokens | Lightweight multilingual LLM powering AI applications in latency bound, memory/compute constrained environments |
    | microsoft/phi-3.5-moe-instruct | 128K tokens | Advanced LLM based on Mixture of Experts architecure to deliver compute efficient content generation |
    | microsoft/kosmos-2 | 1,024 tokens | Groundbreaking multimodal model designed to understand and reason about visual elements in images. |
    | microsoft/phi-3-vision-128k-instruct | 128k tokens | Cutting-edge open multimodal model exceling in high-quality reasoning from images. |
    | microsoft/phi-3.5-vision-instruct | 128k tokens | Cutting-edge open multimodal model exceling in high-quality reasoning from images. |
    | databricks/dbrx-instruct | 12k tokens | A general-purpose LLM with state-of-the-art performance in language understanding, coding, and RAG. |
    | snowflake/arctic | 1,024 tokens | Delivers high efficiency inference for enterprise applications focused on SQL generation and coding. |
    | aisingapore/sea-lion-7b-instruct | 4,096 tokens | LLM to represent and serve the linguistic and cultural diversity of Southeast Asia |
    | ibm/granite-8b-code-instruct | 4,096 tokens | Software programming LLM for code generation, completion, explanation, and multi-turn conversion. |
    | ibm/granite-34b-code-instruct | 8,192 tokens | Software programming LLM for code generation, completion, explanation, and multi-turn conversion. |
    | ibm/granite-3.0-8b-instruct | 4,096 tokens | Advanced Small Language Model supporting RAG, summarization, classification, code, and agentic AI |
    | ibm/granite-3.0-3b-a800m-instruct | 4,096 tokens | Highly efficient Mixture of Experts model for RAG, summarization, entity extraction, and classification |
    | mediatek/breeze-7b-instruct | 4,096 tokens | Creates diverse synthetic data that mimics the characteristics of real-world data. |
    | upstage/solar-10.7b-instruct | 4,096 tokens | Excels in NLP tasks, particularly in instruction-following, reasoning, and mathematics. |
    | writer/palmyra-med-70b-32k | 32k tokens | Leading LLM for accurate, contextually relevant responses in the medical domain. |
    | writer/palmyra-med-70b | 32k tokens | Leading LLM for accurate, contextually relevant responses in the medical domain. |
    | writer/palmyra-fin-70b-32k | 32k tokens | Specialized LLM for financial analysis, reporting, and data processing |
    | 01-ai/yi-large | 32k tokens | Powerful model trained on English and Chinese for diverse tasks including chatbot and creative writing. |
    | deepseek-ai/deepseek-coder-6.7b-instruct | 2k tokens | Powerful coding model offering advanced capabilities in code generation, completion, and infilling |
    | rakuten/rakutenai-7b-instruct | 1,024 tokens | Advanced state-of-the-art LLM with language understanding, superior reasoning, and text generation. |
    | rakuten/rakutenai-7b-chat | 1,024 tokens | Advanced state-of-the-art LLM with language understanding, superior reasoning, and text generation. |
    | baichuan-inc/baichuan2-13b-chat | 4,096 tokens | Support Chinese and English chat, coding, math, instruction following, solving quizzes |

    <Note>
      NVIDIA's NIM support for models is expanding continuously! For the most up-to-date list of available models, please visit build.nvidia.com.
    </Note>

  </Tab>
  <Tab title="Gemini">
    | Model | Context Window | Best For |
    |-------|---------------|-----------|
    | gemini-2.0-flash-exp | 1M tokens | Higher quality at faster speed, multimodal model, good for most tasks |
    | gemini-1.5-flash | 1M tokens | Balanced multimodal model, good for most tasks |
    | gemini-1.5-flash-8B | 1M tokens | Fastest, most cost-efficient, good for high-frequency tasks |
    | gemini-1.5-pro | 2M tokens | Best performing, wide variety of reasoning tasks including logical reasoning, coding, and creative collaboration |

    <Tip>
      Google's Gemini models are all multimodal, supporting audio, images, video and text, supporting context caching, json schema, function calling, etc.

      These models are available via API_KEY from
      [The Gemini API](https://ai.google.dev/gemini-api/docs) and also from
      [Google Cloud Vertex](https://cloud.google.com/vertex-ai/generative-ai/docs/migrate/migrate-google-ai) as part of the
      [Model Garden](https://cloud.google.com/vertex-ai/generative-ai/docs/model-garden/explore-models).
    </Tip>

  </Tab>
  <Tab title="Groq">
    | Model | Context Window | Best For |
    |-------|---------------|-----------|
    | Llama 3.1 70B/8B | 131,072 tokens | High-performance, large context tasks |
    | Llama 3.2 Series | 8,192 tokens | General-purpose tasks |
    | Mixtral 8x7B | 32,768 tokens | Balanced performance and context |

    <Tip>
      Groq is known for its fast inference speeds, making it suitable for real-time applications.
    </Tip>

  </Tab>
  <Tab title="Others">
    | Provider | Context Window | Key Features |
    |----------|---------------|--------------|
    | Deepseek Chat | 128,000 tokens | Specialized in technical discussions |
    | Claude 3 | Up to 200K tokens | Strong reasoning, code understanding |
    | Gemma Series | 8,192 tokens | Efficient, smaller-scale tasks |

    <Info>
      Provider selection should consider factors like:
      - API availability in your region
      - Pricing structure
      - Required features (e.g., streaming, function calling)
      - Performance requirements
    </Info>

  </Tab>
</Tabs>

## Setting Up Your LLM

There are three ways to configure LLMs in CrewAI. Choose the method that best fits your workflow:

<Tabs>
  <Tab title="1. Environment Variables">
    The simplest way to get started. Set these variables in your environment:

    ```bash
    # Required: Your API key for authentication
    OPENAI_API_KEY=<your-api-key>

    # Optional: Default model selection
    OPENAI_MODEL_NAME=gpt-4o-mini  # Default if not set

    # Optional: Organization ID (if applicable)
    OPENAI_ORGANIZATION_ID=<your-org-id>
    ```

    <Warning>
      Never commit API keys to version control. Use environment files (.env) or your system's secret management.
    </Warning>

  </Tab>
  <Tab title="2. YAML Configuration">
    Create a YAML file to define your agent configurations. This method is great for version control and team collaboration:

    ```yaml
    researcher:
        # Agent Definition
        role: Research Specialist
        goal: Conduct comprehensive research and analysis
        backstory: A dedicated research professional with years of experience
        verbose: true

        # Model Selection (uncomment your choice)

        # OpenAI Models - Known for reliability and performance
        llm: openai/gpt-4o-mini
        # llm: openai/gpt-4        # More accurate but expensive
        # llm: openai/gpt-4-turbo  # Fast with large context
        # llm: openai/gpt-4o       # Optimized for longer texts
        # llm: openai/o1-preview   # Latest features
        # llm: openai/o1-mini      # Cost-effective

        # Azure Models - For enterprise deployments
        # llm: azure/gpt-4o-mini
        # llm: azure/gpt-4
        # llm: azure/gpt-35-turbo

        # Anthropic Models - Strong reasoning capabilities
        # llm: anthropic/claude-3-opus-20240229-v1:0
        # llm: anthropic/claude-3-sonnet-20240229-v1:0
        # llm: anthropic/claude-3-haiku-20240307-v1:0
        # llm: anthropic/claude-2.1
        # llm: anthropic/claude-2.0

        # Google Models - Strong reasoning, large cachable context window, multimodal
        # llm: gemini/gemini-1.5-pro-latest
        # llm: gemini/gemini-1.5-flash-latest
        # llm: gemini/gemini-1.5-flash-8b-latest

        # AWS Bedrock Models - Enterprise-grade
        # llm: bedrock/anthropic.claude-3-sonnet-20240229-v1:0
        # llm: bedrock/anthropic.claude-v2:1
        # llm: bedrock/amazon.titan-text-express-v1
        # llm: bedrock/meta.llama2-70b-chat-v1

        # Mistral Models - Open source alternative
        # llm: mistral/mistral-large-latest
        # llm: mistral/mistral-medium-latest
        # llm: mistral/mistral-small-latest

        # Groq Models - Fast inference
        # llm: groq/mixtral-8x7b-32768
        # llm: groq/llama-3.1-70b-versatile
        # llm: groq/llama-3.2-90b-text-preview
        # llm: groq/gemma2-9b-it
        # llm: groq/gemma-7b-it

        # IBM watsonx.ai Models - Enterprise features
        # llm: watsonx/ibm/granite-13b-chat-v2
        # llm: watsonx/meta-llama/llama-3-1-70b-instruct
        # llm: watsonx/bigcode/starcoder2-15b

        # Ollama Models - Local deployment
        # llm: ollama/llama3:70b
        # llm: ollama/codellama
        # llm: ollama/mistral
        # llm: ollama/mixtral
        # llm: ollama/phi

        # Fireworks AI Models - Specialized tasks
        # llm: fireworks_ai/accounts/fireworks/models/llama-v3-70b-instruct
        # llm: fireworks_ai/accounts/fireworks/models/mixtral-8x7b
        # llm: fireworks_ai/accounts/fireworks/models/zephyr-7b-beta

        # Perplexity AI Models - Research focused
        # llm: pplx/llama-3.1-sonar-large-128k-online
        # llm: pplx/mistral-7b-instruct
        # llm: pplx/codellama-34b-instruct
        # llm: pplx/mixtral-8x7b-instruct

        # Hugging Face Models - Community models
        # llm: huggingface/meta-llama/Meta-Llama-3.1-8B-Instruct
        # llm: huggingface/mistralai/Mixtral-8x7B-Instruct-v0.1
        # llm: huggingface/tiiuae/falcon-180B-chat
        # llm: huggingface/google/gemma-7b-it

        # Nvidia NIM Models - GPU-optimized
        # llm: nvidia_nim/meta/llama3-70b-instruct
        # llm: nvidia_nim/mistral/mixtral-8x7b
        # llm: nvidia_nim/google/gemma-7b

        # SambaNova Models - Enterprise AI
        # llm: sambanova/Meta-Llama-3.1-8B-Instruct
        # llm: sambanova/BioMistral-7B
        # llm: sambanova/Falcon-180B
    ```

    <Info>
      The YAML configuration allows you to:
      - Version control your agent settings
      - Easily switch between different models
      - Share configurations across team members
      - Document model choices and their purposes
    </Info>

  </Tab>
  <Tab title="3. Direct Code">
    For maximum flexibility, configure LLMs directly in your Python code:

    ```python
    from crewai import LLM

    # Basic configuration
    llm = LLM(model="gpt-4")

    # Advanced configuration with detailed parameters
    llm = LLM(
        model="gpt-4o-mini",
        temperature=0.7,        # Higher for more creative outputs
        timeout=120,           # Seconds to wait for response
        max_tokens=4000,       # Maximum length of response
        top_p=0.9,            # Nucleus sampling parameter
        frequency_penalty=0.1, # Reduce repetition
        presence_penalty=0.1,  # Encourage topic diversity
        response_format={"type": "json"},  # For structured outputs
        seed=42               # For reproducible results
    )
    ```

    <Info>
      Parameter explanations:
      - `temperature`: Controls randomness (0.0-1.0)
      - `timeout`: Maximum wait time for response
      - `max_tokens`: Limits response length
      - `top_p`: Alternative to temperature for sampling
      - `frequency_penalty`: Reduces word repetition
      - `presence_penalty`: Encourages new topics
      - `response_format`: Specifies output structure
      - `seed`: Ensures consistent outputs
    </Info>

  </Tab>
</Tabs>

## Advanced Features and Optimization

Learn how to get the most out of your LLM configuration:

<AccordionGroup>
  <Accordion title="Context Window Management">
    CrewAI includes smart context management features:

    ```python
    from crewai import LLM

    # CrewAI automatically handles:
    # 1. Token counting and tracking
    # 2. Content summarization when needed
    # 3. Task splitting for large contexts

    llm = LLM(
        model="gpt-4",
        max_tokens=4000,  # Limit response length
    )
    ```

    <Info>
      Best practices for context management:
      1. Choose models with appropriate context windows
      2. Pre-process long inputs when possible
      3. Use chunking for large documents
      4. Monitor token usage to optimize costs
    </Info>

  </Accordion>

  <Accordion title="Performance Optimization">
    <Steps>
      <Step title="Token Usage Optimization">
        Choose the right context window for your task:
        - Small tasks (up to 4K tokens): Standard models
        - Medium tasks (between 4K-32K): Enhanced models
        - Large tasks (over 32K): Large context models
        
        ```python
        # Configure model with appropriate settings
        llm = LLM(
            model="openai/gpt-4-turbo-preview",
            temperature=0.7,    # Adjust based on task
            max_tokens=4096,    # Set based on output needs
            timeout=300        # Longer timeout for complex tasks
        )
        ```
        <Tip>
          - Lower temperature (0.1 to 0.3) for factual responses
          - Higher temperature (0.7 to 0.9) for creative tasks
        </Tip>
      </Step>

      <Step title="Best Practices">
        1. Monitor token usage
        2. Implement rate limiting
        3. Use caching when possible
        4. Set appropriate max_tokens limits
      </Step>
    </Steps>

    <Info>
      Remember to regularly monitor your token usage and adjust your configuration as needed to optimize costs and performance.
    </Info>

  </Accordion>
</AccordionGroup>

## Provider Configuration Examples

<AccordionGroup>
  <Accordion title="OpenAI">
    ```python Code
    # Required
    OPENAI_API_KEY=sk-...
    
    # Optional
    OPENAI_API_BASE=<custom-base-url>
    OPENAI_ORGANIZATION=<your-org-id>
    ```

    Example usage:
    ```python Code
    from crewai import LLM

    llm = LLM(
        model="gpt-4",
        temperature=0.8,
        max_tokens=150,
        top_p=0.9,
        frequency_penalty=0.1,
        presence_penalty=0.1,
        stop=["END"],
        seed=42
    )
    ```

  </Accordion>

  <Accordion title="Anthropic">
    ```python Code
    ANTHROPIC_API_KEY=sk-ant-...
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="anthropic/claude-3-sonnet-20240229-v1:0",
        temperature=0.7
    )
    ```

  </Accordion>

  <Accordion title="Google">
    ```python Code
    # Option 1. Gemini accessed with an API key.
    # https://ai.google.dev/gemini-api/docs/api-key
    GEMINI_API_KEY=<your-api-key>

    # Option 2. Vertex AI IAM credentials for Gemini, Anthropic, and anything in the Model Garden.
    # https://cloud.google.com/vertex-ai/generative-ai/docs/overview
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="gemini/gemini-1.5-pro-latest",
        temperature=0.7
    )
    ```

  </Accordion>

  <Accordion title="Azure">
    ```python Code
    # Required
    AZURE_API_KEY=<your-api-key>
    AZURE_API_BASE=<your-resource-url>
    AZURE_API_VERSION=<api-version>
    
    # Optional
    AZURE_AD_TOKEN=<your-azure-ad-token>
    AZURE_API_TYPE=<your-azure-api-type>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="azure/gpt-4",
        api_version="2023-05-15"
    )
    ```

  </Accordion>

  <Accordion title="AWS Bedrock">
    ```python Code
    AWS_ACCESS_KEY_ID=<your-access-key>
    AWS_SECRET_ACCESS_KEY=<your-secret-key>
    AWS_DEFAULT_REGION=<your-region>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="bedrock/anthropic.claude-3-sonnet-20240229-v1:0"
    )
    ```

  </Accordion>

  <Accordion title="Mistral">
    ```python Code
    MISTRAL_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="mistral/mistral-large-latest",
        temperature=0.7
    )
    ```

  </Accordion>

  <Accordion title="Nvidia NIM">
    ```python Code
    NVIDIA_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="nvidia_nim/meta/llama3-70b-instruct",
        temperature=0.7
    )
    ```

  </Accordion>

  <Accordion title="Groq">
    ```python Code
    GROQ_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="groq/llama-3.2-90b-text-preview",
        temperature=0.7
    )
    ```

  </Accordion>

  <Accordion title="IBM watsonx.ai">
    ```python Code
    # Required
    WATSONX_URL=<your-url>
    WATSONX_APIKEY=<your-apikey>
    WATSONX_PROJECT_ID=<your-project-id>
    
    # Optional
    WATSONX_TOKEN=<your-token>
    WATSONX_DEPLOYMENT_SPACE_ID=<your-space-id>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="watsonx/meta-llama/llama-3-1-70b-instruct",
        base_url="https://api.watsonx.ai/v1"
    )
    ```

  </Accordion>

  <Accordion title="Ollama (Local LLMs)">
    1. Install Ollama: [ollama.ai](https://ollama.ai/)
    2. Run a model: `ollama run llama2`
    3. Configure:

    ```python Code
    llm = LLM(
        model="ollama/llama3:70b",
        base_url="http://localhost:11434"
    )
    ```

  </Accordion>

  <Accordion title="Fireworks AI">
    ```python Code
    FIREWORKS_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="fireworks_ai/accounts/fireworks/models/llama-v3-70b-instruct",
        temperature=0.7
    )
    ```

  </Accordion>

  <Accordion title="Perplexity AI">
    ```python Code
    PERPLEXITY_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="llama-3.1-sonar-large-128k-online",
        base_url="https://api.perplexity.ai/"
    )
    ```

  </Accordion>

  <Accordion title="Hugging Face">
    ```python Code
    HUGGINGFACE_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="huggingface/meta-llama/Meta-Llama-3.1-8B-Instruct",
        base_url="your_api_endpoint"
    )
    ```

  </Accordion>

  <Accordion title="SambaNova">
    ```python Code
    SAMBANOVA_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="sambanova/Meta-Llama-3.1-8B-Instruct",
        temperature=0.7
    )
    ```

  </Accordion>

  <Accordion title="Cerebras">
    ```python Code
    # Required
    CEREBRAS_API_KEY=<your-api-key>
    ```

    Example usage:
    ```python Code
    llm = LLM(
        model="cerebras/llama3.1-70b",
        temperature=0.7,
        max_tokens=8192
    )
    ```

    <Info>
      Cerebras features:
      - Fast inference speeds
      - Competitive pricing
      - Good balance of speed and quality
      - Support for long context windows
    </Info>

  </Accordion>
</AccordionGroup>

## Common Issues and Solutions

<Tabs>
  <Tab title="Authentication">
    <Warning>
      Most authentication issues can be resolved by checking API key format and environment variable names.
    </Warning>
    
    ```bash
    # OpenAI
    OPENAI_API_KEY=sk-...
    
    # Anthropic
    ANTHROPIC_API_KEY=sk-ant-...
    ```
  </Tab>
  <Tab title="Model Names">
    <Check>
      Always include the provider prefix in model names
    </Check>
    
    ```python
    # Correct
    llm = LLM(model="openai/gpt-4")
    
    # Incorrect
    llm = LLM(model="gpt-4")
    ```
  </Tab>
  <Tab title="Context Length">
    <Tip>
      Use larger context models for extensive tasks
    </Tip>
    
    ```python
    # Large context model
    llm = LLM(model="openai/gpt-4o")  # 128K tokens
    ```
  </Tab>
</Tabs>

## Getting Help

If you need assistance, these resources are available:

<CardGroup cols={3}>
  <Card
    title="LiteLLM Documentation"
    href="https://docs.litellm.ai/docs/"
    icon="book"
  >
    Comprehensive documentation for LiteLLM integration and troubleshooting common issues.
  </Card>
  <Card
    title="GitHub Issues"
    href="https://github.com/joaomdmoura/crewAI/issues"
    icon="bug"
  >
    Report bugs, request features, or browse existing issues for solutions.
  </Card>
  <Card
    title="Community Forum"
    href="https://community.crewai.com"
    icon="comment-question"
  >
    Connect with other CrewAI users, share experiences, and get help from the community.
  </Card>
</CardGroup>

<Note>
  Best Practices for API Key Security:
  - Use environment variables or secure vaults
  - Never commit keys to version control
  - Rotate keys regularly
  - Use separate keys for development and production
  - Monitor key usage for unusual patterns
</Note>

================================================
File: /docs/concepts/crews.mdx
================================================

---

title: Crews
description: Understanding and utilizing crews in the crewAI framework with comprehensive attributes and functionalities.
icon: people-group

---

## What is a Crew?

A crew in crewAI represents a collaborative group of agents working together to achieve a set of tasks. Each crew defines the strategy for task execution, agent collaboration, and the overall workflow.

## Crew Attributes

| Attribute                             | Parameters             | Description                                                                                                                                                                                                                                               |
| :------------------------------------ | :--------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tasks**                             | `tasks`                | A list of tasks assigned to the crew.                                                                                                                                                                                                                     |
| **Agents**                            | `agents`               | A list of agents that are part of the crew.                                                                                                                                                                                                               |
| **Process** _(optional)_              | `process`              | The process flow (e.g., sequential, hierarchical) the crew follows. Default is `sequential`.                                                                                                                                                              |
| **Verbose** _(optional)_              | `verbose`              | The verbosity level for logging during execution. Defaults to `False`.                                                                                                                                                                                    |
| **Manager LLM** _(optional)_          | `manager_llm`          | The language model used by the manager agent in a hierarchical process. **Required when using a hierarchical process.**                                                                                                                                   |
| **Function Calling LLM** _(optional)_ | `function_calling_llm` | If passed, the crew will use this LLM to do function calling for tools for all agents in the crew. Each agent can have its own LLM, which overrides the crew's LLM for function calling.                                                                  |
| **Config** _(optional)_               | `config`               | Optional configuration settings for the crew, in `Json` or `Dict[str, Any]` format.                                                                                                                                                                       |
| **Max RPM** _(optional)_              | `max_rpm`              | Maximum requests per minute the crew adheres to during execution. Defaults to `None`.                                                                                                                                                                     |
| **Language** _(optional)_             | `language`             | Language used for the crew, defaults to English.                                                                                                                                                                                                          |
| **Language File** _(optional)_        | `language_file`        | Path to the language file to be used for the crew.                                                                                                                                                                                                        |
| **Memory** _(optional)_               | `memory`               | Utilized for storing execution memories (short-term, long-term, entity memory).                                                                                                                                                                           |
| **Memory Config** _(optional)_        | `memory_config`        | Configuration for the memory provider to be used by the crew.                                                                                                                                                                                             |
| **Cache** _(optional)_                | `cache`                | Specifies whether to use a cache for storing the results of tools' execution. Defaults to `True`.                                                                                                                                                         |
| **Embedder** _(optional)_             | `embedder`             | Configuration for the embedder to be used by the crew. Mostly used by memory for now. Default is `{"provider": "openai"}`.                                                                                                                                |
| **Full Output** _(optional)_          | `full_output`          | Whether the crew should return the full output with all tasks outputs or just the final output. Defaults to `False`.                                                                                                                                      |
| **Step Callback** _(optional)_        | `step_callback`        | A function that is called after each step of every agent. This can be used to log the agent's actions or to perform other operations; it won't override the agent-specific `step_callback`.                                                               |
| **Task Callback** _(optional)_        | `task_callback`        | A function that is called after the completion of each task. Useful for monitoring or additional operations post-task execution.                                                                                                                          |
| **Share Crew** _(optional)_           | `share_crew`           | Whether you want to share the complete crew information and execution with the crewAI team to make the library better, and allow us to train models.                                                                                                      |
| **Output Log File** _(optional)_      | `output_log_file`      | Whether you want to have a file with the complete crew output and execution. You can set it using True and it will default to the folder you are currently in and it will be called logs.txt or passing a string with the full path and name of the file. |
| **Manager Agent** _(optional)_        | `manager_agent`        | `manager` sets a custom agent that will be used as a manager.                                                                                                                                                                                             |
| **Prompt File** _(optional)_          | `prompt_file`          | Path to the prompt JSON file to be used for the crew.                                                                                                                                                                                                     |
| **Planning** _(optional)_             | `planning`             | Adds planning ability to the Crew. When activated before each Crew iteration, all Crew data is sent to an AgentPlanner that will plan the tasks and this plan will be added to each task description.                                                     |
| **Planning LLM** _(optional)_         | `planning_llm`         | The language model used by the AgentPlanner in a planning process.                                                                                                                                                                                        |

<Tip>
**Crew Max RPM**: The `max_rpm` attribute sets the maximum number of requests per minute the crew can perform to avoid rate limits and will override individual agents' `max_rpm` settings if you set it.
</Tip>

## Creating Crews

There are two ways to create crews in CrewAI: using **YAML configuration (recommended)** or defining them **directly in code**.

### YAML Configuration (Recommended)

Using YAML configuration provides a cleaner, more maintainable way to define crews and is consistent with how agents and tasks are defined in CrewAI projects.

After creating your CrewAI project as outlined in the [Installation](/installation) section, you can define your crew in a class that inherits from `CrewBase` and uses decorators to define agents, tasks, and the crew itself.

#### Example Crew Class with Decorators

```python code
from crewai import Agent, Crew, Task, Process
from crewai.project import CrewBase, agent, task, crew, before_kickoff, after_kickoff


@CrewBase
class YourCrewName:
    """Description of your crew"""

    # Paths to your YAML configuration files
    # To see an example agent and task defined in YAML, checkout the following:
    # - Task: https://docs.crewai.com/concepts/tasks#yaml-configuration-recommended
    # - Agents: https://docs.crewai.com/concepts/agents#yaml-configuration-recommended
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'

    @before_kickoff
    def prepare_inputs(self, inputs):
        # Modify inputs before the crew starts
        inputs['additional_data'] = "Some extra information"
        return inputs

    @after_kickoff
    def process_output(self, output):
        # Modify output after the crew finishes
        output.raw += "\nProcessed after kickoff."
        return output

    @agent
    def agent_one(self) -> Agent:
        return Agent(
            config=self.agents_config['agent_one'],
            verbose=True
        )

    @agent
    def agent_two(self) -> Agent:
        return Agent(
            config=self.agents_config['agent_two'],
            verbose=True
        )

    @task
    def task_one(self) -> Task:
        return Task(
            config=self.tasks_config['task_one']
        )

    @task
    def task_two(self) -> Task:
        return Task(
            config=self.tasks_config['task_two']
        )

    @crew
    def crew(self) -> Crew:
        return Crew(
            agents=self.agents,  # Automatically collected by the @agent decorator
            tasks=self.tasks,    # Automatically collected by the @task decorator.
            process=Process.sequential,
            verbose=True,
        )
```

<Note>
Tasks will be executed in the order they are defined.
</Note>

The `CrewBase` class, along with these decorators, automates the collection of agents and tasks, reducing the need for manual management.

#### Decorators overview from `annotations.py`

CrewAI provides several decorators in the `annotations.py` file that are used to mark methods within your crew class for special handling:

- `@CrewBase`: Marks the class as a crew base class.
- `@agent`: Denotes a method that returns an `Agent` object.
- `@task`: Denotes a method that returns a `Task` object.
- `@crew`: Denotes the method that returns the `Crew` object.
- `@before_kickoff`: (Optional) Marks a method to be executed before the crew starts.
- `@after_kickoff`: (Optional) Marks a method to be executed after the crew finishes.

These decorators help in organizing your crew's structure and automatically collecting agents and tasks without manually listing them.

### Direct Code Definition (Alternative)

Alternatively, you can define the crew directly in code without using YAML configuration files.

```python code
from crewai import Agent, Crew, Task, Process
from crewai_tools import YourCustomTool

class YourCrewName:
    def agent_one(self) -> Agent:
        return Agent(
            role="Data Analyst",
            goal="Analyze data trends in the market",
            backstory="An experienced data analyst with a background in economics",
            verbose=True,
            tools=[YourCustomTool()]
        )

    def agent_two(self) -> Agent:
        return Agent(
            role="Market Researcher",
            goal="Gather information on market dynamics",
            backstory="A diligent researcher with a keen eye for detail",
            verbose=True
        )

    def task_one(self) -> Task:
        return Task(
            description="Collect recent market data and identify trends.",
            expected_output="A report summarizing key trends in the market.",
            agent=self.agent_one()
        )

    def task_two(self) -> Task:
        return Task(
            description="Research factors affecting market dynamics.",
            expected_output="An analysis of factors influencing the market.",
            agent=self.agent_two()
        )

    def crew(self) -> Crew:
        return Crew(
            agents=[self.agent_one(), self.agent_two()],
            tasks=[self.task_one(), self.task_two()],
            process=Process.sequential,
            verbose=True
        )
```

In this example:

- Agents and tasks are defined directly within the class without decorators.
- We manually create and manage the list of agents and tasks.
- This approach provides more control but can be less maintainable for larger projects.

## Crew Output

The output of a crew in the CrewAI framework is encapsulated within the `CrewOutput` class.
This class provides a structured way to access results of the crew's execution, including various formats such as raw strings, JSON, and Pydantic models.
The `CrewOutput` includes the results from the final task output, token usage, and individual task outputs.

### Crew Output Attributes

| Attribute        | Parameters     | Type                       | Description                                                                                          |
| :--------------- | :------------- | :------------------------- | :--------------------------------------------------------------------------------------------------- |
| **Raw**          | `raw`          | `str`                      | The raw output of the crew. This is the default format for the output.                               |
| **Pydantic**     | `pydantic`     | `Optional[BaseModel]`      | A Pydantic model object representing the structured output of the crew.                              |
| **JSON Dict**    | `json_dict`    | `Optional[Dict[str, Any]]` | A dictionary representing the JSON output of the crew.                                               |
| **Tasks Output** | `tasks_output` | `List[TaskOutput]`         | A list of `TaskOutput` objects, each representing the output of a task in the crew.                  |
| **Token Usage**  | `token_usage`  | `Dict[str, Any]`           | A summary of token usage, providing insights into the language model's performance during execution. |

### Crew Output Methods and Properties

| Method/Property | Description                                                                                       |
| :-------------- | :------------------------------------------------------------------------------------------------ |
| **json**        | Returns the JSON string representation of the crew output if the output format is JSON.           |
| **to_dict**     | Converts the JSON and Pydantic outputs to a dictionary.                                           |
| \***\*str\*\*** | Returns the string representation of the crew output, prioritizing Pydantic, then JSON, then raw. |

### Accessing Crew Outputs

Once a crew has been executed, its output can be accessed through the `output` attribute of the `Crew` object. The `CrewOutput` class provides various ways to interact with and present this output.

#### Example

```python Code
# Example crew execution
crew = Crew(
    agents=[research_agent, writer_agent],
    tasks=[research_task, write_article_task],
    verbose=True
)

crew_output = crew.kickoff()

# Accessing the crew output
print(f"Raw Output: {crew_output.raw}")
if crew_output.json_dict:
    print(f"JSON Output: {json.dumps(crew_output.json_dict, indent=2)}")
if crew_output.pydantic:
    print(f"Pydantic Output: {crew_output.pydantic}")
print(f"Tasks Output: {crew_output.tasks_output}")
print(f"Token Usage: {crew_output.token_usage}")
```

## Memory Utilization

Crews can utilize memory (short-term, long-term, and entity memory) to enhance their execution and learning over time. This feature allows crews to store and recall execution memories, aiding in decision-making and task execution strategies.

## Cache Utilization

Caches can be employed to store the results of tools' execution, making the process more efficient by reducing the need to re-execute identical tasks.

## Crew Usage Metrics

After the crew execution, you can access the `usage_metrics` attribute to view the language model (LLM) usage metrics for all tasks executed by the crew. This provides insights into operational efficiency and areas for improvement.

```python Code
# Access the crew's usage metrics
crew = Crew(agents=[agent1, agent2], tasks=[task1, task2])
crew.kickoff()
print(crew.usage_metrics)
```

## Crew Execution Process

- **Sequential Process**: Tasks are executed one after another, allowing for a linear flow of work.
- **Hierarchical Process**: A manager agent coordinates the crew, delegating tasks and validating outcomes before proceeding. **Note**: A `manager_llm` or `manager_agent` is required for this process and it's essential for validating the process flow.

### Kicking Off a Crew

Once your crew is assembled, initiate the workflow with the `kickoff()` method. This starts the execution process according to the defined process flow.

```python Code
# Start the crew's task execution
result = my_crew.kickoff()
print(result)
```

### Different Ways to Kick Off a Crew

Once your crew is assembled, initiate the workflow with the appropriate kickoff method. CrewAI provides several methods for better control over the kickoff process: `kickoff()`, `kickoff_for_each()`, `kickoff_async()`, and `kickoff_for_each_async()`.

- `kickoff()`: Starts the execution process according to the defined process flow.
- `kickoff_for_each()`: Executes tasks for each agent individually.
- `kickoff_async()`: Initiates the workflow asynchronously.
- `kickoff_for_each_async()`: Executes tasks for each agent individually in an asynchronous manner.

```python Code
# Start the crew's task execution
result = my_crew.kickoff()
print(result)

# Example of using kickoff_for_each
inputs_array = [{'topic': 'AI in healthcare'}, {'topic': 'AI in finance'}]
results = my_crew.kickoff_for_each(inputs=inputs_array)
for result in results:
    print(result)

# Example of using kickoff_async
inputs = {'topic': 'AI in healthcare'}
async_result = my_crew.kickoff_async(inputs=inputs)
print(async_result)

# Example of using kickoff_for_each_async
inputs_array = [{'topic': 'AI in healthcare'}, {'topic': 'AI in finance'}]
async_results = my_crew.kickoff_for_each_async(inputs=inputs_array)
for async_result in async_results:
    print(async_result)
```

These methods provide flexibility in how you manage and execute tasks within your crew, allowing for both synchronous and asynchronous workflows tailored to your needs.

### Replaying from a Specific Task

You can now replay from a specific task using our CLI command `replay`.

The replay feature in CrewAI allows you to replay from a specific task using the command-line interface (CLI). By running the command `crewai replay -t <task_id>`, you can specify the `task_id` for the replay process.

Kickoffs will now save the latest kickoffs returned task outputs locally for you to be able to replay from.

### Replaying from a Specific Task Using the CLI

To use the replay feature, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where your CrewAI project is located.
3. Run the following command:

To view the latest kickoff task IDs, use:

```shell
crewai log-tasks-outputs
```

Then, to replay from a specific task, use:

```shell
crewai replay -t <task_id>
```

These commands let you replay from your latest kickoff tasks, still retaining context from previously executed tasks.

================================================
File: /docs/concepts/testing.mdx
================================================

---

title: Testing
description: Learn how to test your CrewAI Crew and evaluate their performance.
icon: vial

---

## Introduction

Testing is a crucial part of the development process, and it is essential to ensure that your crew is performing as expected. With crewAI, you can easily test your crew and evaluate its performance using the built-in testing capabilities.

### Using the Testing Feature

We added the CLI command `crewai test` to make it easy to test your crew. This command will run your crew for a specified number of iterations and provide detailed performance metrics. The parameters are `n_iterations` and `model`, which are optional and default to 2 and `gpt-4o-mini` respectively. For now, the only provider available is OpenAI.

```bash
crewai test
```

If you want to run more iterations or use a different model, you can specify the parameters like this:

```bash
crewai test --n_iterations 5 --model gpt-4o
```

or using the short forms:

```bash
crewai test -n 5 -m gpt-4o
```

When you run the `crewai test` command, the crew will be executed for the specified number of iterations, and the performance metrics will be displayed at the end of the run.

A table of scores at the end will show the performance of the crew in terms of the following metrics:

<center>**Tasks Scores (1-10 Higher is better)**</center>

| Tasks/Crew/Agents  | Run 1 | Run 2 | Avg. Total |            Agents            | Additional Info                |
| :----------------- | :---: | :---: | :--------: | :--------------------------: | :----------------------------- |
| Task 1             |  9.0  |  9.5  |  **9.2**   |    Professional Insights     |                                |
|                    |       |       |            |          Researcher          |                                |
| Task 2             |  9.0  | 10.0  |  **9.5**   | Company Profile Investigator |                                |
| Task 3             |  9.0  |  9.0  |  **9.0**   |     Automation Insights      |                                |
|                    |       |       |            |          Specialist          |                                |
| Task 4             |  9.0  |  9.0  |  **9.0**   |    Final Report Compiler     | Automation Insights Specialist |
| Crew               | 9.00  | 9.38  |  **9.2**   |                              |                                |
| Execution Time (s) |  126  |  145  |  **135**   |                              |                                |

The example above shows the test results for two runs of the crew with two tasks, with the average total score for each task and the crew as a whole.

================================================
File: /docs/concepts/tools.mdx
================================================

---

title: Tools
description: Understanding and leveraging tools within the CrewAI framework for agent collaboration and task execution.
icon: screwdriver-wrench

---

## Introduction

CrewAI tools empower agents with capabilities ranging from web searching and data analysis to collaboration and delegating tasks among coworkers.
This documentation outlines how to create, integrate, and leverage these tools within the CrewAI framework, including a new focus on collaboration tools.

## What is a Tool?

A tool in CrewAI is a skill or function that agents can utilize to perform various actions.
This includes tools from the [CrewAI Toolkit](https://github.com/joaomdmoura/crewai-tools) and [LangChain Tools](https://python.langchain.com/docs/integrations/tools),
enabling everything from simple searches to complex interactions and effective teamwork among agents.

## Key Characteristics of Tools

- **Utility**: Crafted for tasks such as web searching, data analysis, content generation, and agent collaboration.
- **Integration**: Boosts agent capabilities by seamlessly integrating tools into their workflow.
- **Customizability**: Provides the flexibility to develop custom tools or utilize existing ones, catering to the specific needs of agents.
- **Error Handling**: Incorporates robust error handling mechanisms to ensure smooth operation.
- **Caching Mechanism**: Features intelligent caching to optimize performance and reduce redundant operations.

## Using CrewAI Tools

To enhance your agents' capabilities with crewAI tools, begin by installing our extra tools package:

```bash
pip install 'crewai[tools]'
```

Here's an example demonstrating their use:

```python Code
import os
from crewai import Agent, Task, Crew
# Importing crewAI tools
from crewai_tools import (
    DirectoryReadTool,
    FileReadTool,
    SerperDevTool,
    WebsiteSearchTool
)

# Set up API keys
os.environ["SERPER_API_KEY"] = "Your Key" # serper.dev API key
os.environ["OPENAI_API_KEY"] = "Your Key"

# Instantiate tools
docs_tool = DirectoryReadTool(directory='./blog-posts')
file_tool = FileReadTool()
search_tool = SerperDevTool()
web_rag_tool = WebsiteSearchTool()

# Create agents
researcher = Agent(
    role='Market Research Analyst',
    goal='Provide up-to-date market analysis of the AI industry',
    backstory='An expert analyst with a keen eye for market trends.',
    tools=[search_tool, web_rag_tool],
    verbose=True
)

writer = Agent(
    role='Content Writer',
    goal='Craft engaging blog posts about the AI industry',
    backstory='A skilled writer with a passion for technology.',
    tools=[docs_tool, file_tool],
    verbose=True
)

# Define tasks
research = Task(
    description='Research the latest trends in the AI industry and provide a summary.',
    expected_output='A summary of the top 3 trending developments in the AI industry with a unique perspective on their significance.',
    agent=researcher
)

write = Task(
    description='Write an engaging blog post about the AI industry, based on the research analyst’s summary. Draw inspiration from the latest blog posts in the directory.',
    expected_output='A 4-paragraph blog post formatted in markdown with engaging, informative, and accessible content, avoiding complex jargon.',
    agent=writer,
    output_file='blog-posts/new_post.md'  # The final blog post will be saved here
)

# Assemble a crew with planning enabled
crew = Crew(
    agents=[researcher, writer],
    tasks=[research, write],
    verbose=True,
    planning=True,  # Enable planning feature
)

# Execute tasks
crew.kickoff()
```

## Available CrewAI Tools

- **Error Handling**: All tools are built with error handling capabilities, allowing agents to gracefully manage exceptions and continue their tasks.
- **Caching Mechanism**: All tools support caching, enabling agents to efficiently reuse previously obtained results, reducing the load on external resources and speeding up the execution time. You can also define finer control over the caching mechanism using the `cache_function` attribute on the tool.

Here is a list of the available tools and their descriptions:

| Tool                             | Description                                                                                    |
| :------------------------------- | :--------------------------------------------------------------------------------------------- |
| **BrowserbaseLoadTool**          | A tool for interacting with and extracting data from web browsers.                             |
| **CodeDocsSearchTool**           | A RAG tool optimized for searching through code documentation and related technical documents. |
| **CodeInterpreterTool**          | A tool for interpreting python code.                                                           |
| **ComposioTool**                 | Enables use of Composio tools.                                                                 |
| **CSVSearchTool**                | A RAG tool designed for searching within CSV files, tailored to handle structured data.        |
| **DALL-E Tool**                  | A tool for generating images using the DALL-E API.                                             |
| **DirectorySearchTool**          | A RAG tool for searching within directories, useful for navigating through file systems.       |
| **DOCXSearchTool**               | A RAG tool aimed at searching within DOCX documents, ideal for processing Word files.          |
| **DirectoryReadTool**            | Facilitates reading and processing of directory structures and their contents.                 |
| **EXASearchTool**                | A tool designed for performing exhaustive searches across various data sources.                |
| **FileReadTool**                 | Enables reading and extracting data from files, supporting various file formats.               |
| **FirecrawlSearchTool**          | A tool to search webpages using Firecrawl and return the results.                              |
| **FirecrawlCrawlWebsiteTool**    | A tool for crawling webpages using Firecrawl.                                                  |
| **FirecrawlScrapeWebsiteTool**   | A tool for scraping webpages URL using Firecrawl and returning its contents.                   |
| **GithubSearchTool**             | A RAG tool for searching within GitHub repositories, useful for code and documentation search. |
| **SerperDevTool**                | A specialized tool for development purposes, with specific functionalities under development.  |
| **TXTSearchTool**                | A RAG tool focused on searching within text (.txt) files, suitable for unstructured data.      |
| **JSONSearchTool**               | A RAG tool designed for searching within JSON files, catering to structured data handling.     |
| **LlamaIndexTool**               | Enables the use of LlamaIndex tools.                                                           |
| **MDXSearchTool**                | A RAG tool tailored for searching within Markdown (MDX) files, useful for documentation.       |
| **PDFSearchTool**                | A RAG tool aimed at searching within PDF documents, ideal for processing scanned documents.    |
| **PGSearchTool**                 | A RAG tool optimized for searching within PostgreSQL databases, suitable for database queries. |
| **Vision Tool**                  | A tool for generating images using the DALL-E API.                                             |
| **RagTool**                      | A general-purpose RAG tool capable of handling various data sources and types.                 |
| **ScrapeElementFromWebsiteTool** | Enables scraping specific elements from websites, useful for targeted data extraction.         |
| **ScrapeWebsiteTool**            | Facilitates scraping entire websites, ideal for comprehensive data collection.                 |
| **WebsiteSearchTool**            | A RAG tool for searching website content, optimized for web data extraction.                   |
| **XMLSearchTool**                | A RAG tool designed for searching within XML files, suitable for structured data formats.      |
| **YoutubeChannelSearchTool**     | A RAG tool for searching within YouTube channels, useful for video content analysis.           |
| **YoutubeVideoSearchTool**       | A RAG tool aimed at searching within YouTube videos, ideal for video data extraction.          |

## Creating your own Tools

<Tip>
  Developers can craft `custom tools` tailored for their agent’s needs or
  utilize pre-built options.
</Tip>

There are two main ways for one to create a CrewAI tool:

### Subclassing `BaseTool`

```python Code
from crewai.tools import BaseTool


class MyCustomTool(BaseTool):
    name: str = "Name of my tool"
    description: str = "Clear description for what this tool is useful for, your agent will need this information to use it."

    def _run(self, argument: str) -> str:
        # Implementation goes here
        return "Result from custom tool"
```

### Utilizing the `tool` Decorator

```python Code
from crewai.tools import tool
@tool("Name of my tool")
def my_tool(question: str) -> str:
    """Clear description for what this tool is useful for, your agent will need this information to use it."""
    # Function logic here
    return "Result from your custom tool"
```

### Structured Tools

The `StructuredTool` class wraps functions as tools, providing flexibility and validation while reducing boilerplate. It supports custom schemas and dynamic logic for seamless integration of complex functionalities.

#### Example:

Using `StructuredTool.from_function`, you can wrap a function that interacts with an external API or system, providing a structured interface. This enables robust validation and consistent execution, making it easier to integrate complex functionalities into your applications as demonstrated in the following example:

```python
from crewai.tools.structured_tool import CrewStructuredTool
from pydantic import BaseModel

# Define the schema for the tool's input using Pydantic
class APICallInput(BaseModel):
    endpoint: str
    parameters: dict

# Wrapper function to execute the API call
def tool_wrapper(*args, **kwargs):
    # Here, you would typically call the API using the parameters
    # For demonstration, we'll return a placeholder string
    return f"Call the API at {kwargs['endpoint']} with parameters {kwargs['parameters']}"

# Create and return the structured tool
def create_structured_tool():
    return CrewStructuredTool.from_function(
        name='Wrapper API',
        description="A tool to wrap API calls with structured input.",
        args_schema=APICallInput,
        func=tool_wrapper,
    )

# Example usage
structured_tool = create_structured_tool()

# Execute the tool with structured input
result = structured_tool._run(**{
    "endpoint": "https://example.com/api",
    "parameters": {"key1": "value1", "key2": "value2"}
})
print(result)  # Output: Call the API at https://example.com/api with parameters {'key1': 'value1', 'key2': 'value2'}
```

### Custom Caching Mechanism

<Tip>
  Tools can optionally implement a `cache_function` to fine-tune caching
  behavior. This function determines when to cache results based on specific
  conditions, offering granular control over caching logic.
</Tip>

```python Code
from crewai.tools import tool

@tool
def multiplication_tool(first_number: int, second_number: int) -> str:
    """Useful for when you need to multiply two numbers together."""
    return first_number * second_number

def cache_func(args, result):
    # In this case, we only cache the result if it's a multiple of 2
    cache = result % 2 == 0
    return cache

multiplication_tool.cache_function = cache_func

writer1 = Agent(
        role="Writer",
        goal="You write lessons of math for kids.",
        backstory="You're an expert in writing and you love to teach kids but you know nothing of math.",
        tools=[multiplication_tool],
        allow_delegation=False,
    )
    #...
```

## Conclusion

Tools are pivotal in extending the capabilities of CrewAI agents, enabling them to undertake a broad spectrum of tasks and collaborate effectively.
When building solutions with CrewAI, leverage both custom and existing tools to empower your agents and enhance the AI ecosystem. Consider utilizing error handling,
caching mechanisms, and the flexibility of tool arguments to optimize your agents' performance and capabilities.

================================================
File: /docs/mint.json
================================================
{
"name": "CrewAI",
"theme": "venus",
"logo": {
"dark": "crew_only_logo.png",
"light": "crew_only_logo.png"
},
"favicon": "favicon.svg",
"colors": {
"primary": "#EB6658",
"light": "#F3A78B",
"dark": "#C94C3C",
"anchors": {
"from": "#737373",
"to": "#EB6658"
}
},
"seo": {
"indexHiddenPages": false
},
"modeToggle": {
"default": "dark",
"isHidden": false
},
"feedback": {
"suggestEdit": true,
"raiseIssue": true,
"thumbsRating": true
},
"topbarCtaButton": {
"type": "github",
"url": "https://github.com/crewAIInc/crewAI"
},
"primaryTab": {
"name": "Get Started"
},
"tabs": [
{
"name": "Examples",
"url": "examples"
}
],
"anchors": [
{
"name": "Community",
"icon": "discourse",
"url": "https://community.crewai.com"
},
{
"name": "Changelog",
"icon": "timeline",
"url": "https://github.com/crewAIInc/crewAI/releases"
}
],
"navigation": [
{
"group": "Get Started",
"pages": [
"introduction",
"installation",
"quickstart"
]
},
{
"group": "Core Concepts",
"pages": [
"concepts/agents",
"concepts/tasks",
"concepts/crews",
"concepts/flows",
"concepts/knowledge",
"concepts/llms",
"concepts/processes",
"concepts/collaboration",
"concepts/training",
"concepts/memory",
"concepts/planning",
"concepts/testing",
"concepts/cli",
"concepts/tools",
"concepts/langchain-tools",
"concepts/llamaindex-tools"
]
},
{
"group": "How to Guides",
"pages": [
"how-to/create-custom-tools",
"how-to/sequential-process",
"how-to/hierarchical-process",
"how-to/custom-manager-agent",
"how-to/llm-connections",
"how-to/customizing-agents",
"how-to/coding-agents",
"how-to/force-tool-output-as-result",
"how-to/human-input-on-execution",
"how-to/kickoff-async",
"how-to/kickoff-for-each",
"how-to/replay-tasks-from-latest-crew-kickoff",
"how-to/conditional-tasks",
"how-to/agentops-observability",
"how-to/langtrace-observability",
"how-to/openlit-observability"
]
},
{
"group": "Examples",
"pages": [
"examples/example"
]
},
{
"group": "Tools",
"pages": [
"tools/browserbaseloadtool",
"tools/codedocssearchtool",
"tools/codeinterpretertool",
"tools/composiotool",
"tools/csvsearchtool",
"tools/dalletool",
"tools/directorysearchtool",
"tools/directoryreadtool",
"tools/docxsearchtool",
"tools/exasearchtool",
"tools/filereadtool",
"tools/filewritetool",
"tools/firecrawlcrawlwebsitetool",
"tools/firecrawlscrapewebsitetool",
"tools/firecrawlsearchtool",
"tools/githubsearchtool",
"tools/serperdevtool",
"tools/jsonsearchtool",
"tools/mdxsearchtool",
"tools/mysqltool",
"tools/nl2sqltool",
"tools/pdfsearchtool",
"tools/pgsearchtool",
"tools/scrapewebsitetool",
"tools/seleniumscrapingtool",
"tools/spidertool",
"tools/txtsearchtool",
"tools/visiontool",
"tools/websitesearchtool",
"tools/xmlsearchtool",
"tools/youtubechannelsearchtool",
"tools/youtubevideosearchtool"
]
},
{
"group": "Telemetry",
"pages": [
"telemetry"
]
}
],
"search": {
"prompt": "Search CrewAI docs"
},
"footerSocials": {
"website": "https://crewai.com",
"x": "https://x.com/crewAIInc",
"github": "https://github.com/crewAIInc/crewAI",
"linkedin": "https://www.linkedin.com/company/crewai-inc",
"youtube": "https://youtube.com/@crewAIInc"
}
}

================================================
File: /docs/examples/example.mdx
================================================

---

title: CrewAI Examples
description: A collection of examples that show how to use CrewAI framework to automate workflows.
icon: rocket-launch

---

<CardGroup cols={3}>
  <Card
  title="Marketing Strategy"
  color="#F3A78B"
  href="https://github.com/crewAIInc/crewAI-examples/tree/main/marketing_strategy"
  icon="bullhorn"
    iconType="solid"
  >
    Automate marketing strategy creation with CrewAI. 
  </Card>
  <Card
    title="Surprise Trip"
    color="#F3A78B"
    href="https://github.com/crewAIInc/crewAI-examples/tree/main/surprise_trip"
    icon="plane"
      iconType="duotone"
    >
      Create a surprise trip itinerary with CrewAI.
    </Card>
    <Card
    title="Match Profile to Positions"
    color="#F3A78B"
    href="https://github.com/crewAIInc/crewAI-examples/tree/main/match_profile_to_positions"
    icon="linkedin"
      iconType="duotone"
    >
      Match a profile to jobpositions with CrewAI.
    </Card>
    <Card
    title="Create Job Posting"
    color="#F3A78B"
    href="https://github.com/crewAIInc/crewAI-examples/tree/main/job-posting"
    icon="newspaper"
      iconType="duotone"
    >
      Create a job posting with CrewAI.
    </Card>
    <Card
    title="Game Generator"
    color="#F3A78B"
    href="https://github.com/crewAIInc/crewAI-examples/tree/main/game-builder-crew"
    icon="gamepad"
      iconType="duotone"
    >
      Create a game with CrewAI.
    </Card>
    <Card
    title="Find Job Candidates"
    color="#F3A78B"
    href="https://github.com/crewAIInc/crewAI-examples/tree/main/recruitment"
    icon="user-group"
      iconType="duotone"
    >
      Find job candidates with CrewAI.
    </Card>
</CardGroup>

================================================
File: /docs/telemetry.mdx
================================================

---

title: Telemetry
description: Understanding the telemetry data collected by CrewAI and how it contributes to the enhancement of the library.
icon: signal-stream

---

## Telemetry

<Note>
    By default, we collect no data that would be considered personal information under GDPR and other privacy regulations.
    We do collect Tool's names and Agent's roles, so be advised not to include any personal information in the tool's names or the Agent's roles.
	Because no personal information is collected, it's not necessary to worry about data residency.
	When `share_crew` is enabled, additional data is collected which may contain personal information if included by the user. 
    Users should exercise caution when enabling this feature to ensure compliance with privacy regulations.
</Note>

CrewAI utilizes anonymous telemetry to gather usage statistics with the primary goal of enhancing the library.
Our focus is on improving and developing the features, integrations, and tools most utilized by our users.

It's pivotal to understand that by default, **NO personal data is collected** concerning prompts, task descriptions, agents' backstories or goals,
usage of tools, API calls, responses, any data processed by the agents, or secrets and environment variables.
When the `share_crew` feature is enabled, detailed data including task descriptions, agents' backstories or goals, and other specific attributes are collected
to provide deeper insights. This expanded data collection may include personal information if users have incorporated it into their crews or tasks.
Users should carefully consider the content of their crews and tasks before enabling `share_crew`.
Users can disable telemetry by setting the environment variable `OTEL_SDK_DISABLED` to `true`.

### Data Explanation:

| Defaulted | Data                                     | Reason and Specifics                                                                                                                                                                                                                                                                                             |
| --------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Yes       | CrewAI and Python Version                | Tracks software versions. Example: CrewAI v1.2.3, Python 3.8.10. No personal data.                                                                                                                                                                                                                               |
| Yes       | Crew Metadata                            | Includes: randomly generated key and ID, process type (e.g., 'sequential', 'parallel'), boolean flag for memory usage (true/false), count of tasks, count of agents. All non-personal.                                                                                                                           |
| Yes       | Agent Data                               | Includes: randomly generated key and ID, role name (should not include personal info), boolean settings (verbose, delegation enabled, code execution allowed), max iterations, max RPM, max retry limit, LLM info (see LLM Attributes), list of tool names (should not include personal info). No personal data. |
| Yes       | Task Metadata                            | Includes: randomly generated key and ID, boolean execution settings (async_execution, human_input), associated agent's role and key, list of tool names. All non-personal.                                                                                                                                       |
| Yes       | Tool Usage Statistics                    | Includes: tool name (should not include personal info), number of usage attempts (integer), LLM attributes used. No personal data.                                                                                                                                                                               |
| Yes       | Test Execution Data                      | Includes: crew's randomly generated key and ID, number of iterations, model name used, quality score (float), execution time (in seconds). All non-personal.                                                                                                                                                     |
| Yes       | Task Lifecycle Data                      | Includes: creation and execution start/end times, crew and task identifiers. Stored as spans with timestamps. No personal data.                                                                                                                                                                                  |
| Yes       | LLM Attributes                           | Includes: name, model_name, model, top_k, temperature, and class name of the LLM. All technical, non-personal data.                                                                                                                                                                                              |
| Yes       | Crew Deployment attempt using crewAI CLI | Includes: The fact a deploy is being made and crew id, and if it's trying to pull logs, no other data.                                                                                                                                                                                                           |
| No        | Agent's Expanded Data                    | Includes: goal description, backstory text, i18n prompt file identifier. Users should ensure no personal info is included in text fields.                                                                                                                                                                        |
| No        | Detailed Task Information                | Includes: task description, expected output description, context references. Users should ensure no personal info is included in these fields.                                                                                                                                                                   |
| No        | Environment Information                  | Includes: platform, release, system, version, and CPU count. Example: 'Windows 10', 'x86_64'. No personal data.                                                                                                                                                                                                  |
| No        | Crew and Task Inputs and Outputs         | Includes: input parameters and output results as non-identifiable data. Users should ensure no personal info is included.                                                                                                                                                                                        |
| No        | Comprehensive Crew Execution Data        | Includes: detailed logs of crew operations, all agents and tasks data, final output. All non-personal and technical in nature.                                                                                                                                                                                   |

<Note>
    "No" in the "Defaulted" column indicates that this data is only collected when `share_crew` is set to `true`.
</Note>

### Opt-In Further Telemetry Sharing

Users can choose to share their complete telemetry data by enabling the `share_crew` attribute to `True` in their crew configurations.
Enabling `share_crew` results in the collection of detailed crew and task execution data, including `goal`, `backstory`, `context`, and `output` of tasks.
This enables a deeper insight into usage patterns.

<Warning>
    If you enable `share_crew`, the collected data may include personal information if it has been incorporated into crew configurations, task descriptions, or outputs. 
    Users should carefully review their data and ensure compliance with GDPR and other applicable privacy regulations before enabling this feature.
</Warning>

================================================
File: /docs/how-to/sequential-process.mdx
================================================

---

title: Sequential Processes
description: A comprehensive guide to utilizing the sequential processes for task execution in CrewAI projects.
icon: forward

---

## Introduction

CrewAI offers a flexible framework for executing tasks in a structured manner, supporting both sequential and hierarchical processes.
This guide outlines how to effectively implement these processes to ensure efficient task execution and project completion.

## Sequential
