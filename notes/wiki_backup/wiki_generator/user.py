#Because I hate busy work
# This is an "array" of "arrays" of questions in strings
# The questions in the array have to match up with the answers in the corresponding answers array



qestions_input = ["What page will the user be sent to after being logged out?", "Where will the logout button be located?", "Will there be a feature that will log an inactive user out of the application?" ]
answers_input = ["The user will be redirected to the login page so the next user can seamlessly access their profile.", "The logout button will be located in the navbar for ease of access. ", "We will not be implementing an auto logout feature for inactive users at this time." ]
shelvesA_input = ["User", "User", 'user', "User", "user", "User"]
shelvesB_input = ["add a tag to a podcast", "Create a new tag to add to a podcast", "Look through other tags that have been added before", "Untag a podcast that I added that tag to", "See the tags other users added to a podcast"]
shelvesC_input = ["So that I can provide a greater level of specificity to a podcast, past the general genre", "If a tag has not been used yet you can create one to tag a podcast", "look through a list of tags that have been used to tag a podcast", "**This might come in a later version** to change a tag that they have added or update it", "to see how other people characterize the podcast"]




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
