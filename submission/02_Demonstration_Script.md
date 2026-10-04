# DS Compass demo narration

This is the narration guide for `04_DS_Compass_Final_Demo.mp4` (4 minutes 56 seconds). The recording uses the same eight-part flow. Speak naturally rather than trying to read every word at a fixed speed.

## 1. The problem and the tool

Hi, I'm Niu Duoer. This is DS Compass, my PE6201 project. It helps a prospective master's student find programme pages to compare in Singapore and the UK. The output is a small shortlist with official links. It does not predict admission.

## 2. Enter a profile

I'll try a sample profile. I enter Nanjing University, choose the optional 985 category, select Computer Science, and enter a 3.5 out of 4 GPA. The school field accepts names outside the suggestion list. School background and GPA give context, but they do not secretly score the applicant or change the results. I choose both countries and Artificial Intelligence as the study direction. For IELTS, I enter the overall score and the four component scores separately. These are the inputs a user can reasonably check against published programme rules.

## 3. Read the result and its source

The shortlist now shows matching programmes from the local catalogue. The first card is NTU's MSc Artificial Intelligence. It displays a short description, the recorded academic requirement, an academic-preparation evidence message, an English-evidence message, and the official programme link. Here the selected Computer Science major is broadly related to the published requirement, and the recorded IELTS rule is met. These are evidence checks, not an admission decision. I open NTU's page to check the current details at the source. This catalogue has only fifteen records, so it cannot represent every suitable course.

## 4. TOEFL and missing rules

Now I switch the same profile to a TOEFL iBT total of 99. The result changes to “English: review.” The catalogue does not encode a comparable TOEFL rule for every programme, so the app asks me to check the university page. It does not convert TOEFL into an invented IELTS equivalent. That uncertainty is useful information for the applicant.

## 5. Where the model is used

My proposal envisaged matching official pages with historical application cases. I reviewed the available cases, including some UK and Singapore offers, but they mix countries and programme types and contain too few comparable unsuccessful outcomes to calibrate a fair Reach, Match or Safer prediction from a school name and GPA. I therefore narrowed this first release to official-source evidence. Choosing Artificial Intelligence retrieves the catalogue directly. Under “Other or unsure,” I enter “machine learning and natural language processing.” The hosted classifier selects a fixed direction, then the app retrieves catalogue records. The model does not write programme facts. If its service fails, the app reports a local classifier fallback.

## 6. What the evaluation measured

The method panel explains the small catalogue and the classification check. On 37 synthetic study-interest examples, the hosted classifier matched 32 reference labels, or 86.5 percent. An always-abstain baseline matched seven. These examples were model-assisted and were not independently labelled by people, so this is an early technical check rather than proof that recommendations help real applicants. The detailed failure counts are in GitHub.

## 7. Show a real failure

Here is the evaluation file in the repository. One example closely related to this tool is T11: a question about improving a company's sales pipeline with data. The expected direction was business, but the model returned data. The table shows the reference label and recorded output, so this is a checkable error rather than a hypothetical one. The same test set also found that only three of seven requests outside the catalogue were rejected. That is why I report the errors alongside the overall accuracy.

## 8. Limits and next step

My next step would be human-labelled applicant queries and a second review of the programme rules. For now, DS Compass helps users reach official pages faster, while each suggestion still needs checking. Thank you.
