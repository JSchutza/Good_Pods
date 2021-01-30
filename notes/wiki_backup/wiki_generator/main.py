



# imports here:
from helperfunc import prompt, giveType, list_to_string


# global variables here for now:
questions_array = []
answers_to_questions = []


# function to get the nessesary features
def getFeatures():
    features_array = []

    features = prompt('How many feature items do you need?')
    num_of_features = int(features)
    while (num_of_features > 0):
        the_feature = prompt('Enter your feature:')
        features_array.append(the_feature)
        num_of_features = num_of_features - 1
    return features_array







# function that decides if then want a new wiki or just part of an wiki
def initWiki():
    print('Do you want a brand new wiki?\n')
    result = prompt('Enter (1) for yes OR (2) for no.')

    num_result = int(result)
    if num_result == 1:
        print('New wiki initialzed...\n')
        # run the function that will create all of the data for each wiki page

    elif num_result == 2:
        print('partial wiki initialzed...\n')
        print('What section of the wiki do you need?\n')
        selection_items = [
            'Enter (1) for Home page:\n',
            'Enter (2) for API documentation:\n',
            'Enter (3) for Database Schema\n',
            'Enter (4) for Frontend Routes\n',
            'Enter (5) for Feature List\n',
            'Enter (6) for User Stories and Acceptance Criteria'
        ]

        # turn the list of options into a str for the prompt to the user
        selection_prompt = list_to_string(selection_items)
        # section will be used to decide what function to call for the corresponding data:
        section = prompt(selection_prompt)







# the main running function here:
def main():
    # need to ask if they even want to make a new wiki or only a portion of a wiki
    wiki_decision = initWiki()

    # gets the features that they want to implement
    # all_features = getFeatures()
    
    print('Is this for a Feature List or a User Stories Page?')
    decision = prompt('Enter 1 for a Feature List:\n Enter 2 for a User Stories Page:')
    num_decision = int(decision)
    if num_decision == 1:
        print('Feature List')
    elif num_decision == 2:
        print('User Stories Page')















# call to the main function here:
main()
