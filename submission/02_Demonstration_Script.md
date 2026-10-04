# DS Compass final demonstration script

**Target duration:** 5 minutes.  
**Recording format:** webcam and screen visible together. Keep the webcam in a small corner without covering the form or results. Speak naturally; do not read the headings aloud.

## 0:00-0:35 - Introduce yourself, problem and scope

Hello, I am Niu Duoer. This is my PE6201 individual project, DS Compass. It helps an international applicant take a broad master's-study interest and begin comparing selected programmes in Singapore and the United Kingdom.

The practical problem is that official university pages are authoritative but fragmented. An applicant may know that they are interested in artificial intelligence or business analytics, but each university uses different programme names, entry descriptions and English-language rules. DS Compass improves the first research step by giving a small, source-linked shortlist.

I want to be clear about its boundary. This project does not rank universities, calculate admission probability, convert GPA, decide academic eligibility or submit an application. It supports research, and the final decision remains with the university.

## 0:35-1:25 - Show profile inputs and explain fairness choices

I will enter an example profile. The school field is searchable but also accepts any typed institution. I can optionally record whether the school is 985, 211 or Double First Class. However, this information is only context. It does not change the shortlist and does not create an admission prediction. I made that choice because using school background as an opaque score would create an unsupported and potentially unfair claim.

Next, I select a major, optional GPA, Singapore and the United Kingdom, and Artificial Intelligence as the study direction. I also select IELTS and enter an overall score and the four component scores. The form can record TOEFL as well, but it does not convert TOEFL into an invented IELTS equivalent. This keeps the English-language evidence separate from an admission decision.

## 1:25-2:15 - Demonstrate a working recommendation

After I select Generate shortlist, the system returns AI programme cards from the local catalogue. Each card includes the programme name, university, country, concise description, English-evidence status and an official programme-page link.

Here the English status is supported for the recorded threshold. This does not mean the applicant is admitted or fully eligible. It only means that the specific IELTS rule recorded for this card is met by the entered scores. The user must still check degree equivalence, prerequisites, current deadlines, English-test validity and the official page. The official link on every card is therefore an important output, not an optional decoration.

## 2:15-3:10 - Explain the data, AI and architecture

I will now open the Method, evidence and limitations panel. The catalogue contains 15 concise programme records based on official university pages. Each record has a direct source link and a verification date. The data is deliberately small and transparent rather than a claim that the tool covers every programme.

For a selected direction, retrieval is deterministic: the code filters the catalogue by country and direction. When a user selects Other or unsure, only their short keywords go to a server-side language model. The model must return one of six fixed directions or abstain. It does not receive applicant history, it does not generate programme requirements, and it cannot invent a programme card because all cards come from the local catalogue. If the model service is unavailable, a local English Naive Bayes baseline is identified as the fallback.

## 3:10-4:05 - Discuss metrics and critique them

The panel also shows the evaluation result. I evaluated primary-interest classification only. On 37 frozen synthetic cases, the deployed model reached 86.5 percent exact-label accuracy, compared with an 18.9 percent majority-class baseline. The system abstained on 8.1 percent of cases.

These numbers should be interpreted carefully. The evaluation set is small, synthetic and model-authored, so it is not independent human validation. It does not measure programme quality, time saved, English-rule extraction, eligibility or admission outcomes. I use the metrics to check that the bounded classifier is better than a trivial baseline, not to claim that the product can predict an applicant's success.

## 4:05-4:40 - Demonstrate safe failure handling

Finally, I change the direction to Other or unsure and enter marine biology and ocean ecology. This request is outside the catalogue. Instead of forcing an unrelated match, the system asks the user to clarify one primary study goal. This is a deliberate design decision: a wrong confident recommendation would be less useful than an explicit abstention.

## 4:40-5:00 - Close with limitations and future path

The remaining limitations are incomplete programme coverage, possible source changes, and the lack of a human-labelled evaluation set. The next version would add consented real discovery queries, separate development and test sets, a second reviewer for programme rules and scheduled source refreshes. DS Compass therefore demonstrates a bounded, evidence-led use of AI: it helps users navigate official information without pretending to make an admission decision. Thank you.

## Recording checklist

- Show your face and the active browser screen throughout.
- Keep browser zoom at 100 percent and close unrelated tabs and notifications.
- Use the live application and the exact interactions above.
- Pause for one second after opening the results panel and the Method panel.
- Export as MP4 or WebM, 5 minutes plus or minus 3 minutes, with clear spoken audio.
