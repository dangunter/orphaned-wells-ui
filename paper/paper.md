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

The Oil and Gas Regulatory Record Digitizer (OGRRE) is an open-source, web-based, intelligent document processing platform that converts images of scanned historical oil and gas regulatory records (e.g., completion reports, plugging reports) into structured datasets ready for import into a relational database. OGRRE was designed for teams that need to assemble reliable information from scanned images of historical well records that are difficult to search and contain information that are not represented in modern oil and gas databases. OGRRE connects external document-processing models and custom data cleaning functions with a graphical interface in which users upload records, review extracted values alongside the source document, correct errors, and export the resulting data in a variety of formats (e.g., CSV, JSON, embedded PDFs). Users can also set document review statuses, take notes, and elevate issues to a supervisor, which facilitates project management. While custom features were developed to accommodate oil and gas records, the platform can be used to validate structured data extracted from any image of a scanned document. The graphical user interface predominantly facilitates human-in-the-loop review, but OGRRE contains complementary toolst that to split, classify, and extract data from record images. In the current deployment, these tool capabilities are provided by Google Document AI processors, while OGRRE supplies the project, record, schema, review, and export workflows around them. 

# Statement of need

Oil and gas wells and other deep engineered boreholes are the primary mechanism through which we access the subsurface to produce hydrocarbons, store energy, and dispose of wastes. To date, millions of wells have been drilled, many of which intersect reservoirs that are valuable for future subsurface energy projects [@gasda2004,@nicot2008]. Drilling a well generates a vast quantity of data that describes not only the well itself, but the formations it penetrates. While much of the data generated are proprietary, many jurisdictions have permitting and reporting requirements that result in the submission of drilling and operational information [@omalley2024,@ma2024]. This information includes, but is not limited to, well construction records, geophysical logs, and produced fluid geochemistry [@lackey2026,@mackey2024].   

State agencies such as oil and gas regulators and geological surveys are typically responsible for curating well records. While many agencies have migrated their permitting processes to electronic platforms that automate the transfer of submitted information to databases, most jurisdictions with a long history of oil and gas development continue to maintain millions of paper records that detail historical operations. Efforts to scan these records and make them available to the public online have been ongoing for many years and images of key records are often available. State agencies and commercial companies have also digitized important information for wells such as their location, operator, and production history. Despite these efforts, most well data remain trapped in digital or analog documents, which differ substantially in quality and format. Consequently, researchers, operators, and agency personnel may need to inspect and transcribe large collections of well information to perform even basic analysis of well information. Thus, there is a need to bridge the gap that exists between the information in scanned well records and structured research-ready datasets.  

OGRRE is an intelligent document processing platform that was designed to address these gasp by facilitating the extraction of structured data from scanned images of well records. Human-in-the-loop review is the primary focus of the OGGRE user interface because document scans vary widely in quality and data accuracy is a high-priority for stakeholders working with well information. Inside the user interface, document reviewers can clean extracted data with custom cleaning functions, select fields to see their locations in the source image, edit values that were incorrectly extracted, add additional fields that were missed, assign document review status, retain notes, embed extracted data in PDFs, and export data in multiple formats. These capabilities supports a transparent document processing workflow in which the accuracy of machine-generated results is verified by human reviewers before it is used for research pruposes or transmitted to an agency database.

The target users of OGRRE are teams working with historical regulatory, geological, or engineering well records. OGRRE is developed by the Department of Energy's Consortium Advancing Technology for Assessment of Lost Oil & Gas Wells (CATALOG) [@energyCATALOGx2013], a collaboration involving Lawrence Berkeley, Los Alamos, Sandia, and Lawrence Livermore National Laboratories together with the National Energy Technology Laboratory. The source code, deployment configuration, and user documentation are available from the [project repository](https://github.com/CATALOG-Historic-Records/orphaned-wells-ui). The software is consequently focused on a practical research need: making heterogeneous historical records usable for downstream scientific and public-interest analysis.

# State of the field

Existing document-processing systems provide OCR, document classification, and information extraction, while database and spreadsheet tools provide ways to store and inspect the resulting values. These components are useful independently, but they do not by themselves provide a domain-oriented workflow for managing projects of records, associating processor schemas with document types, reviewing model confidence, editing extracted values against source images, and exporting curated records. OGRRE's contribution is the integration of these activities into one reproducible application.

OGRRE does not replace general-purpose OCR or machine-learning systems. Instead, it builds a research workflow around them and allows processor models to be configured for the document categories encountered by a project. This build-versus-contribute choice is important because the problem is not simply text recognition: it is the maintenance of provenance and human quality control across a large collection of variable historical documents. A general-purpose OCR viewer, a spreadsheet, or a document-AI console can support parts of the process, but each leaves substantial project management and review work to be implemented separately.

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
