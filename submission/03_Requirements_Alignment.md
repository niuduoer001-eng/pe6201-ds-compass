# Submission map

The proposal called for an AI assisted master's programme tool using official programme information. The submitted version keeps that purpose, covers Singapore and the United Kingdom, and limits the model to classifying short study-interest text. The project does not claim to predict admission.

| Course item | Where to review it |
| --- | --- |
| Final outcome, reasoning, trade-offs, metric critique and future work | `submission/01_Business_and_Technical_Tradeoff_Analysis.pdf` |
| Persona, inputs, outputs and architecture diagram | `docs/PRODUCT_DOCUMENTATION.md` |
| Programme sources and field definitions | `docs/DATA_EXPLAINER.md` and `data/programmes.json` |
| Evaluation cases, model outputs, summary and frozen checksums | `evals/` |
| Evaluation explanation and failure analysis | `docs/EVALUATION_EXPLAINER.md` |
| Code roles and local run commands | `docs/CODE_GUIDE.md` and `README.md` |
| Current web application | https://ds-compass-sg-uk-niu.duoer001.chatgpt.site |
| Five-minute recording script | `submission/02_Demonstration_Script.md` |
| AI tool use | `submission/00_AI_Assistance_Statement.md` |

The evaluation has a clear limitation: the model only abstained on three of seven out-of-scope cases. The four misses are recorded in `evals/model_outputs.json`; the report discusses them rather than treating the overall accuracy as a reliability claim.

The final video is still to be recorded. The course asks for the presenter and screen to appear together with spoken narration. The script is a guide; the student should deliver it naturally, show the real app and pause on the evaluation evidence.
