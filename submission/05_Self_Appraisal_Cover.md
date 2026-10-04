# Self appraisal cover

**Student:** Niu Duoer  
**Course:** PE6201 Individual Project  
**Project:** DS Compass

I built DS Compass as a focused first-step tool for international applicants comparing selected master's programmes in Singapore and the United Kingdom. The project takes a country, study direction, undergraduate major and language-test information, then returns source-linked programme cards with separate academic-preparation and English-rule evidence.

My main implementation decision was to keep the model's task narrow. It classifies short free-text interests only when a user selects “Other or unsure”; programme details are retrieved from the checked-in official-source catalogue. I made this choice because a generated answer could invent an entry requirement or English score. The code, source records, evaluation cases, saved outputs and replay scripts are all in the repository.

The classifier matched 32 of 37 frozen synthetic cases, but it abstained on only 3 of 7 out-of-scope cases. I therefore treat the system as a discovery aid and present its limitations directly in the app, report and demo. I also chose not to produce Reach/Match/Safer labels: the available historical examples are too mixed and one-sided to support a fair admission estimate.

The next step would be to collect consented applicant queries with human labels and to have a second reviewer verify programme rules. I used AI assistance during development and documented that use in `submission/00_AI_Assistance_Statement.md`. I have reviewed the submitted project materials and can explain the design choices, code structure, results and limitations.
