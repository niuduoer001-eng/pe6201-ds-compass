# DS Compass demo script

**Target length:** about five minutes. Record your face and the screen together. The time marks are prompts, not lines to read aloud.

## 0:00-0:40 | What I built

Hi, I'm Niu Duoer. This is DS Compass, my PE6201 individual project. I built it for an international student who has a study area in mind but needs help finding which master's programme pages to compare in Singapore and the UK.

The current alternative is to search each university site and compare the results by hand. That remains the source of truth, but it takes repeated searching. DS Compass makes a first shortlist and puts the official link beside each result. It does not predict admission or decide whether a student meets every academic requirement.

## 0:40-1:25 | Enter a profile

I'll enter Nanjing University and choose the optional 985 category. I can also type a school that is not in the suggestions. That field and the GPA are for context only. They do not change which programmes appear. I made that choice because I do not have reliable admissions data to turn school background into a score.

I'll select Computer Science, Singapore and the UK, then choose Artificial Intelligence. I can enter IELTS overall and the four component scores, or switch to TOEFL. TOEFL is recorded as TOEFL; the app does not convert it to an IELTS result. I removed the test-date and planned-course-start questions because they made the form longer without improving this initial shortlist.

## 1:25-2:05 | Follow a result back to its source

I'll generate the shortlist. These cards match the AI direction and selected countries. Each one shows the programme, its university, a short summary and an English-evidence message. This example says the recorded IELTS rule is met. That is only a check against the rule in this catalogue. It is not a decision about admission, degree equivalence or exemptions.

I'll open one official programme page. The applicant should check the current entry details there before making a decision. The 15 programme records are a deliberately small directory, and some directions have only a few results.

## 2:05-2:55 | Explain where the AI is used

For the direction I selected, the system uses a direct filter over the local programme file. The model is used only if I choose Other or unsure and type short keywords. The hosted worker sends that text to Gemini, which returns one of six direction labels or abstains. The result card still comes from the local file. The model cannot write a course description or invent an English threshold.

The browser does not hold the API key. If the model call is unavailable, the worker uses a small local Naive Bayes fallback and reports that change. That fallback is based on English word tokens, so it is weak for Chinese. It is there for a basic fallback path, not as an equivalent Chinese classifier.

## 2:55-3:40 | Read the metric honestly

The method panel shows the saved classification result: 32 of 37 labels were correct, or 86.5 percent. The majority-class baseline was 18.9 percent. This is a small synthetic check. GPT-4.1 mini helped generate the test wording and reference labels; no independent human panel labelled these examples.

The overall number also hides a problem. Only three of seven out-of-scope examples were withheld. Four got an in-scope direction. So this evaluation does not show that the classifier reliably detects the edge of the catalogue.

## 3:40-4:30 | Show one actual failure

I'll open the evaluation explainer in the repository. Case T38 asks about using AI tools to improve medication adherence. Gemini returned `ai`, even though the reference label was `abstain`: healthcare was outside this programme catalogue. Another case about legal document review was also labelled `ai`. Those are recorded outputs, not hypothetical risks.

The model handles many straightforward descriptions, but the results show it sometimes treats a technology mentioned in a request as the study field itself. A user should check the catalogue and links rather than assume a label is correct.

## 4:30-5:00 | What I would do next

I would collect a small set of consented applicant queries, label them with people, and keep a separate test set untouched while improving the classifier. I would also ask a second reviewer to check the programme and English-rule entries. The project is useful as a source-linked starting point, but the current evaluation and catalogue are too limited for unsupervised decisions. Thank you.

## Before recording

- Keep your face visible beside the browser window for the full recording.
- Start with the live app; enter the example profile and show the result cards.
- Open the Method panel, then switch to `docs/EVALUATION_EXPLAINER.md` on GitHub for cases T38 and T35.
- Keep the final recording between 2 and 8 minutes; the target is about 5 minutes.
