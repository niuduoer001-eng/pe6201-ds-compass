# DS Compass demo narration

Use with `04_DS_Compass_Demo_Screen_Master_Final.webm` (about 4 minutes 6 seconds). The eight headings match the captions at the bottom of that video. Start each paragraph when its chapter appears; pause briefly during the website transitions. Speak naturally rather than trying to read every word at a fixed speed.

## 1. The problem and the tool

Hi, I'm Niu Duoer. This is DS Compass, my PE6201 project. It helps a prospective master's student find programme pages to compare in Singapore and the UK. The output is a small shortlist with official links. It does not predict admission.

## 2. Enter a profile

I'll try a sample profile. I enter Nanjing University, choose the optional 985 category, select Computer Science, and enter a 3.5 out of 4 GPA. The school field accepts names outside the suggestion list. School background and GPA give context, but they do not secretly score the applicant or change the results. I choose both countries and Artificial Intelligence as the study direction. For IELTS, I enter the overall score and the four component scores separately. These are the inputs a user can reasonably check against published programme rules.

## 3. Read the result and its source

The shortlist now shows matching programmes from the local catalogue. The first card is NTU's MSc Artificial Intelligence. It displays a short description, an English-evidence message, and the official programme link. In this example, the recorded IELTS rule is met. That message is narrower than an admission decision; degree fit and other requirements still need review. I open NTU's page to check the current details at the source. This catalogue has only fifteen records, so it cannot represent every suitable course.

## 4. TOEFL and missing rules

Now I switch the same profile to a TOEFL iBT total of 99. The result changes to “English: review.” The catalogue does not encode a comparable TOEFL rule for every programme, so the app asks me to check the university page. It does not convert TOEFL into an invented IELTS equivalent. That uncertainty is useful information for the applicant.

## 5. Where the model is used

Choosing Artificial Intelligence directly filters the catalogue. I can also choose “Other or unsure” and type short keywords. Here I enter “machine learning and natural language processing.” The hosted classifier returns one of the fixed study directions, then the app retrieves matching records. The model does not write programme facts. If the model service fails, a local classifier is used and the app reports the fallback.

## 6. What the evaluation measured

The method panel explains the small catalogue and the classification check. On 37 synthetic study-interest examples, Gemini matched 32 reference labels, or 86.5 percent. An always-abstain baseline matched seven. These examples were model-assisted and were not independently labelled by people, so this is an early technical check rather than proof that recommendations help real applicants. The detailed failure counts are in GitHub.

## 7. Show a real failure

Here is the evaluation file in the repository. Only three of seven out-of-scope examples were correctly rejected. In T38, a request about AI tools for medication adherence was labelled AI even though healthcare was outside this catalogue. Legal-document review was also wrongly labelled AI. The table shows the expected and recorded output for each error. This is why the overall 86.5 percent accuracy cannot be read as reliable boundary detection.

## 8. Limits and next step

My next step would be human-labelled applicant queries and a second review of the programme rules. For now, DS Compass helps users reach official pages faster, while each suggestion still needs checking. Thank you.

## Final recording requirement

The supplied video is a silent screen master. The course requires your face and spoken explanation to appear with the screen in the submitted video. Record your own camera and voice, combine them with the master, and check that the final cut remains between three and five minutes. Do not submit the silent master as the final demo.
