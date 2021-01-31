#Because I hate busy work
# This is an "array" of "arrays" of questions in strings
# The questions in the array have to match up with the answers in the corresponding answers array



qestions_input = ["What is included in the user's pod page?", "Do all podcasts on a user's podcast page have a status?", "Can a user add or delete podcasts from the podcast page?", "Is there an api for a user's shelf?", "How is the user's podcast page organized?", "Can you view other user's shelves?"]
answers_input = ["User's shelf is the podcasts that they have chosen.", "All podcasts have a status when they are in a user's pod page.", "Yes, you can add and delete podcasts from your podcast page", "Yes it can be accessed through /api/shelves/:id", "It will be organized by the status that the user assigns to the podcast and through genre.", "Not at this time."]
shelvesA_input = ["logged-in user", 'User', "User", "User", "User", "user"]
shelvesB_input = ["view all the podcasts I have, sorted by genre", 'click on every podcast on my shelf to be redirected to the podcast page', 'view all the podcasts that I have reviewed', 'View all the podcasts that I have added a status onto ', "click on the icon/link on my profile page to be redirected to my shelf", "Click on the podcast genre to be redirected to the genre page"]
shelvesC_input = ["click on the podcasts to be redirected to that podcast's (podcasts/:id) page", "Review that podcast, favorite or change that podcast's reviews", "can edit or review them", "Change that podcasts status", "So that I can view my shelf", "discover new podcasts with that genre"]




questions = [qestions_input, ["Question about the next feature?"],["Question about the next feature?"],["Question about the next feature?"],["Question about the next feature?"],["Question about the next feature?"]]

answers = [answers_input, ["Answer about the next feature."], ["Answer about the next feature."],["Answer about the next feature."],["Answer about the next feature."],["Answer about the next feature."]]

stringFeature=''

#replace these features with your features you want to highlight
features = ['shelves', 'status', 'genres', 'search','tags']

#featureA is what word you are calling the user,
#featureB is the action or ability the user needs to have
#featureC is why you want them to have that ability
#all three of these have to be the same length
stories={
  "shelvesA": shelvesA_input,
  "shelvesB": shelvesB_input,
  "shelvesC": shelvesC_input,
  "statusA": ['User', "User", "logged in user"],
  "statusB": ['See an icon next to a podcast name that references a status', "See all of the podcasts with that I have given that status to", "See all how many people have given that status to a podcast", "I want to be able to change the status of a podcast", ],
  "statusC": ['review the podcasts that I favorited, go back to the ones I am interested in or add a review if I have not already', "look back on the podcasts that I either liked or was interested in in the past", 'update my podcasts status if I have changed my mind about them'],
  "genresA" :["User", "User", "client"],
  "genresB": ["see all the podcasts in that genre", "favorite a particular genre", 'organize my shelf by genre'],
  "genresC": ["Discover new podcasts by genre", "Check out only the genres I like", 'find a podcast easily'],
  "searchA": ["User", "User", "User"],
  "searchB": ["Search podcast by name", "search for all the podcasts of a genre", "search for a podcast by ratings"],
  "searchC": ["find podcasts that I have heard of", "Just find podcasts that I am interested in", "Only find the podcasts that other people have liked"],
  "tagsA": ["User", "user"],
  "tagsB": ["Add a tag to a podcast", "find all podcasts with that tag"],
  "tagsC": ["make the subject or interest more clear", "find the best pods for me"]
}



rep=-1
for feature in features:
  rep=rep+1
  stringFeature+="## {} \r".format(feature.capitalize())
  stringFeature+="### Questions: \r"
  for i in range(len(questions[rep])):
    stringFeature+=" * {} \r".format(questions[rep][i])
    stringFeature+="\t \t - {} \r".format(answers[rep][i])
  stringFeature+="### Acceptance Criteria: \r"
  stringFeature+="* Given that I am a Logged in user I want to interact with {} \r".format(feature)
  for n in range(len(stories[feature +'A'])-1):
    stringFeature+="\t* As a {} I want to be able to {} so that I can {} \r".format(stories[feature+"A"][n],stories[feature+"B"][n],stories[feature+"C"][n])



##This code writes the code from this file to a markdown file in this folder. It will be called userStories.md.
userStories= open('userStories.md','wt')
userStories.write(stringFeature)
userStories.close()
