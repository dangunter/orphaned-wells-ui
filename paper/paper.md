---
title: 'OGRRE: A Web-Based Platform for Digitizing Oil and Gas Regulatory Records'
authors:
  - name: Greg Lackey
    affiliation: '1'
  - name: Benjamin Houghton
    affiliation: '1'
  - name: Jacob Shay
    affiliation: '1'
  - name: Dan Gunter
    affiliation: '2'
  - name: Michael Pesce
    affiliation: '2'
  - name: Rajshree Deshmukh
    affiliation: '2'
  - name: Chester J. Weiss
    affiliation: '3'
  - name: David Buttler
    affiliation: '4'
  - name: Martin Ma
    affiliation: '5'
affiliations:
  - index: 1
    name: National Energy Technology Laboratory, United States
  - index: 2
    name: Lawrence Berkeley National Laboratory, United States
  - index: 3
    name: Sandia National Laboratories, United States
  - index: 4
    name: Lawrence Livermore National Laboratory, United States
  - index: 5
    name: Los Alamos National Laboratory, United States
date: 30 July 2026
bibliography: paper.bib
---

# Summary

The Oil and Gas Regulatory Record Digitizer (OGRRE) is an open-source, web-based, intelligent document processing (IDP) platform that converts images of scanned historical oil and gas regulatory records (e.g., completion reports, plugging reports) into structured datasets ready for import into a relational database. OGRRE was designed for teams that need to assemble reliable information from scanned images of historical well records that are difficult to search and contain information that are not represented in modern oil and gas databases. OGRRE connects external document-processing models and custom data cleaning functions with a graphical interface in which users upload records, review extracted values alongside the source document, correct errors, and export the resulting data in a variety of formats (e.g., CSV, JSON, embedded PDFs). Users can also set document review statuses, take notes, and elevate issues to a supervisor, which facilitates project management. While custom features were developed to accommodate oil and gas records, the platform can be used to validate structured data extracted from any image of a scanned document. The graphical user interface predominantly facilitates human-in-the-loop review, but OGRRE contains complementary toolst that to split, classify, and extract data from record images. In the current deployment, these tool capabilities are provided by Google Document AI processors, while OGRRE supplies the project, record, schema, review, and export workflows around them. 

# Statement of need

There are many commercial and open-source IDP software tools available. Companies such as ABBYY [@abbyy], Docparser [@docparser], and Hyland [@hyland] offer enterprise software that contains entire IDP workflows including document splitting, classification, text extraction, human-in-the-loop review, and data export. Cloud service providers such as Google [@googleDocumentAI], Amazon [@aws_textract], and Microsoft [@microsoft_azure_doc_intelligence] also offer APIs for proprietary document processing models that can be used to develop custom web-based IDP software. Both enterprise software and cloud-based IDP models traditionally rely on the manual labeling of documents and document fields to fine tune pre-trained models focused on document splitting, classification, or data extraction. In recent years, advancements in frontier multimodal large language models (LLMs) such as ChatGPT [@chatgpt2026], Claude [@claude2026], and Gemini [@gemini2026], have made structured data extraction from document images less cumbersome by removing the need for labeling. However, LLMs alone do not offer a complete IDP workflow. To address this, companies like Unstract [@unstract] have built platforms that leverage multimodal large language models within an IDP pipeline. 

A wide variety of open source document processing tools exist. However, these tools predominantly focus on single steps of an IDP workflow. For example, doc-split-v1 [@nutrientdocs2026docsplitv1] and DiT [@li2022dit] are used for document splitting and classification, respectively. Tesseract [@smith2007overview], easyOCR [@easyocr], and Paddle OCR [@cui2025paddleocr], are traditional open source OCR models that return digitized text from a page. Docling [@Docling] reads and parses text to identify tables and other key document structures. LayoutLMv3 [@huang2022layoutlmv3] and Donut [@kim2022ocr] extract field-value pairs from documents using manually labeled OCR outputs and page-specific JSON, respectively. Open-source multimodal models such as Qwen [@qwen2vl] and DeepSeek-OCR [@wei2026deepseekocr2] also provide structured text extraction capabilities. There are also support tools like Label Studio [@LabelStudio], which facilitates the creation of manual labels for documents that can be used to train text-extraction models. No major open source solutions currently exist for human-in-the-loop review, likely due to the variability between documents and the custom needs of users.

OGRRE is a custom IDP web platform designed to facilitate structured text extraction from publicly available oil and gas records. In the landscape of IDP tools, OGRRE is most similar to commercial enterprise IDP software as it is designed to perform an entire IDP workflow including document splitting, classification, text extraction, human-in-the-loop-review, and data export. Currently, there is no open source option that integrates key IDP capabilities into one platform. While OGRRE is currently designed to use proprietary models offered by Google Document AI for IDP functions, open source alternatives for these functions are under development. OGRRE is also the only open source tool with custom features like data cleaning functions that were designed for oil and gas records. The human-in-the-loop review interface and document management systems are also unique among open source tools.

# State of the field

There are many commercial and open-source IDP software tools available. Companies such as ABBYY [@abbyy], Docparser [@docparser], and Hyland [@hyland] offer enterprise software that contains entire IDP workflows including document splitting, classification, text extraction, human-in-the-loop review, and data export. Cloud service providers such as Google [@googleDocumentAI], Amazon [@aws_textract], and Microsoft [@microsoft_azure_doc_intelligence] also offer APIs for proprietary document processing models that can be used to develop custom web-based IDP software. Both enterprise software and cloud-based IDP models traditionally rely on the manual labeling of documents and document fields to fine tune pre-trained models focused on document splitting, classification, or data extraction. In recent years, advancements in frontier multimodal large language models (LLMs) such as ChatGPT [@], Claude [@], and Gemini [@], have made structured data extraction from document images less cumbersome by removing the need for labeling. However, LLMs alone do not offer a complete IDP workflow. To address this, companies like Unstract [@unstract] have built platforms that leverage multimodal large language models within an IDP pipeline. 

A wide variety of open source document processing tools exist. However, these tools predominantly focus on single steps of an IDP workflow. For example, doc-split-v1 [@] and DiT [@] are used for document splitting and classification, respectively. Tesseract [@], easyOCR [@], and Paddle OCR [@], are traditional open source OCR models that return digitized text from a page. Docling [@] reads and parses text to identify tables and other key document structures. LayoutLMv3 [@] and Donut [@] extract field-value pairs from documents using manually labeled OCR outputs and page-specific JSON, respectively. Open-source multimodal models such as Qwen [@] and DeepSeek-OCR [@] also provide structured text extraction capabilities. There are also support tools like Label Studio [@], which facilitates the creation of manual labels for documents that can be used to train text-extraction models. No major open source solutions currently exist for human-in-the-loop review, likely due to the variability between documents and the custom needs of users.

OGRRE is a custom IDP web platform designed to facilitate structured text extraction from publicly available oil and gas records. In the landscape of IDP tools, OGRRE is most similar to commercial enterprise IDP software as it is designed to perform an entire IDP workflow including document splitting, classification, text extraction, human-in-the-loop-review, and data export. Currently, there is no open source option that integrates key IDP capabilities into one platform. While OGRRE is currently designed to use proprietary models offered by Google Document AI for IDP functions, open source alternatives for these functions are under development. OGRRE is also the only open source tool with custom features like data cleaning functions that were designed for oil and gas records. The human-in-the-loop review interface and document management systems are also unique among open source tools.

# Software design

OGRRE is implemented as a ReactJS [@reactjs] and TypeScript frontend. The frontend communicates with a server written in Python using the FastAPI framework, backed by a MongoDB [@mongodb] database. The interface, API, and persistence layers can be deployed independently. The repository includes Docker Compose [@dockerCompose] configuration for running the frontend, backend, and database together during development, as well as deployment configurations for Google Cloud. This architecture reflects a balance between accessibility for users and operational requirements for teams processing documents at scale.

The central data model organizes records into projects and record groups and associates each record with its source document, extracted attributes, confidence values, and review state. Processor definitions and schemas are managed through the interface, so a project can represent the fields expected for a particular document type without changing the application code. Users can upload individual files or directories, optionally run configured cleaning functions, and export selected fields as CSV or JSON. JSON export retains additional metadata such as confidence values, while CSV supports common analysis and spreadsheet workflows.

The document-processing workflow is broken into a four-stage workflow, with the first three stages performed by Python scripts and interaction with the AI processing tools (currently, Google Document AI [@googleDocumentAI]). A _splitter_  identifies document boundaries in collated PDFs; a _classifier_ assigns documents to categories; and an _extractor_ finds, and extract values for, fields for each category. The resulting values are stored in the OGRRE database for review by the OGRRE UI. Separating these stages provides flexibility and aligns with the workflow expected by both the current Google Document AI and future open-source AI document processing workflows. Finally, the OGRRE UI _reviews_ the documents and can export results in standard formats such as comma-separated values. The review team, which is typically a company or state agency, doesn't have to know the details of the AI processing.

The OGRRE UI emphasizes review efficiency. Attribute values and the source document are displayed together, selections are linked to image regions, low-confidence values can be prioritized, and keyboard shortcuts support movement through records. Review statuses including unreviewed, incomplete, reviewed, and defective make the state of a dataset visible to collaborators. These choices favor traceability and collaborative correction over a fully automated but opaque pipeline.

![alt text](ogrre-ui.png)
Figure 1: OGRRE UI. This screen shows review of a document. The fields on the left show extracted values, which can be edited by a person and saved to the database. As fields are selected on the left, the corresponding bounding box detected by the AI processing will be highlighted in the image on the right. Buttons at the bottom of the page and numerous keyboard shortcuts allow for navigation through a list of documents.

# Research impact statement

OGRRE is being used in collaboration with the joint Lawrence Berkeley National Laboratory and National Energy Technology Laboratory team, and the repository provides deployment configurations for multiple collaborator-specific instances. Its documentation includes a complete workflow for configuring processors, uploading and reviewing records, updating schemas, and exporting data, as well as a Docker-based development stack and Google Cloud deployment guidance. These materials provide a basis for reproducible adoption by research teams with comparable document-digitization needs.

The immediate research value of OGRRE is its ability to provide reliable data for orphaned well locations and characteristics which can augment field studies and other document sources. In studies of orphaned and undocumented wells, the platform can help connect information extracted from historical records with later analyses of well locations, construction, production history, and remediation priorities. The project materials supplied for this draft do not identify a peer-reviewed publication that directly reports results produced with OGRRE; the authors should add representative datasets, deployments, benchmarks, and publications here before submission if they are available. Such evidence would allow the paper to quantify throughput, extraction accuracy, review effort, or reuse by external groups.

# AI usage disclosure

Generative AI was used to assist with the preparation of this draft paper. The generated text was based on `info.txt`, the OGRRE documentation, the public source repository, and the JOSS paper-format guidance. The content was checked against those materials, and claims not supported by them were either qualified or marked for author verification. No claim in this disclosure implies that generative AI was used to create the OGRRE software itself.

# Acknowledgements

OGRRE was developed as part of the U.S. Department of Energy's Consortium Advancing Technology for Assessment of Lost Oil & Gas Wells (CATALOG). The authors should add the applicable DOE award numbers, laboratory contract numbers, and any other financial support required by the participating institutions before submission.

# References
