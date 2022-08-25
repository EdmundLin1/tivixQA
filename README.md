# tivixQA
QA Recruitment Task:

1. Create 3 different test cases on the http://qalab.pl.tivixlabs.com/ 
2. Based on created test cases, please write automated E2E tests (preferably using Cypress + BDD, you can publish them to your Github account). 

#################################

Bugs found:
Country and City dropdown are not dynamic, selecting country should narrow down the city dropdown
spelling errors in country and city selections
pick up and drop off date can be selected in the past
Model search doesn't work, just lists all models anyways
country dropdown doesn't really matter in the search, if it's the wrong country, only the city is displayed in results
final rent button leads to a 404
name vs last name confusion, needs first name
better email validation, only requires @, no .com
Request too big errors occassionally from server. 
