#Because I hate busy work
# This is an "array" of "arrays" of questions in strings
# The questions in the array have to match up with the answers in the corresponding answers array


questions=[["Will the users need to sign in to view their shelf?", "Will we allow users to view other users shelves?" ],["Question about the next feature?"],["Question about the next feature?"],["Question about the next feature?"],["Question about the next feature?"],["Question about the next feature?"]]
answers=[["Yes, in order to view their podcasts the user must log in.", "Yes, you can view other user's shelves to discover new podcasts"], ["Answer about the next feature."], ["Answer about the next feature."],["Answer about the next feature."],["Answer about the next feature."],["Answer about the next feature."]]
stringFeature=''
#replace these features with your features you want to highlight
features = ['shelves', 'status', 'genres', 'search','tags']
#featureA is what word you are calling the user,
#featureB is the action or ability the user needs to have
#featureC is why you want them to have that ability
#all three of these have to be the same length
stories={
  "shelvesA":["logged-in user", 'User', "User", "User", "User"],
  "shelvesB":["view all the podcasts I have, sorted by genre", 'click on every podcast on my shelf to be redirected to the podcast page', 'view all the podcasts that I have reviewed', 'View all the podcasts that I have added a status onto '],
  "shelvesC":["click on the podcasts to be redirected to that podcast's (podcasts/:id) page", "Review that podcast, favorite or change that podcast's reviews", "can edit or review them", "Change that podcasts status"],
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
    stringFeature+="\t \t * {} \r".format(answers[rep][i])
  stringFeature+="### Acceptance Criteria: \r"
  stringFeature+="* Given that I am a Logged in user I want to interact with {} \r".format(feature)
  for n in range(len(stories[feature +'A'])-1):
    stringFeature+="\t* As a {} I want to be able to {} so that I can {} \r".format(stories[feature+"A"][n],stories[feature+"B"][n],stories[feature+"C"][n])
  
##This code writes the code from this file to a markdown file in this folder. It will be called userStories.md.
userStories= open('userStories.md','wt')
userStories.write(stringFeature)
userStories.close()
