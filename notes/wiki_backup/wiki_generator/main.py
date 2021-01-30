



# imports here:
from helperfunc import prompt, giveType, list_to_string


# global variables here for now:
questions_array = []
answers_to_questions = []
git_hub_username = ''
repo_name = ''


# function to get and create the home page info
def initHome():
    git_hub_username = prompt('What is your GitHub username?')
    repo_name = prompt('What is the name of the root folder in the repository?')
    title = prompt('Enter your title:\n')
    title_decription = prompt('Enter a description to your application.')
    links_array = [
        f'# [Feature List](https://github.com/{git_hub_username}/{repo_name}/wiki/Feature-List)',
        f'# [User Stories and Acceptance Criteria](https://github.com/{git_hub_username}/{repo_name}/wiki/User-Stories)',
        f'# [Database Schema](https://github.com/{git_hub_username}/{repo_name}/wiki/Database-Schema)',
        f'# [API Documentation](https://github.com/{git_hub_username}/{repo_name}/wiki/API-Documentation)',
        f'# [Frontend Routes](https://github.com/{git_hub_username}/{repo_name}/wiki/Frontend-Routes)'
    ]

    amount_of_features = prompt('How many featurs will you have?')
    num_of_features = int(amount_of_features)

    features_array = []

    while num_of_features > 0:
        each_feature = prompt('Enter the title of your feature:\n')
        features_array.append(each_feature)
        num_of_features = num_of_features - 1


    descriptions_array = []

    for each in links_array:
        each_description = prompt(f'Enter a description for the current home page link: \n {each}')
        descriptions_array.append(each_description)


    return {
        "all_home_data": {
            "home_title": title,
            "title_description": title_decription,
            "links_array": links_array,
            "feature_descriptions": features_array,
            "descriptions_array": descriptions_array
        }
    }





# function to get and create the API doc page info
# NEED to figure a way to get path info / Query Parameters if the user wants to input it
def initAPIDocPage():
    title = prompt('Enter a title for the API Documentation page: \n')
    amount_of_resources = prompt('How many resources will you have? \n')
    num_of_resources = int(amount_of_resources)

    resorce_links = []
    resorce_titles = []
    while (num_of_resources > 0):
        resorce_name = prompt('What is the name of the resource? \n')
        resorce_links.append(f'- [{resorce_name}](https://github.com/{git_hub_username}/{repo_name}/wiki/API-Documentation#{resorce_name})')
        resorce_titles.append(f'# {resorce_name}')
        num_of_resources = num_of_resources - 1



    endpont_links = []
    endpont_restful_api_description = []
    for each in resorce_titles:
        link_title = prompt('Enter the name of the enpont action: \n')
        endpont_links.append(f' - [{link_title}](https://github.com/{git_hub_username}/{repo_name}/wiki/API-Documentation#{link_title})')
        http_verb = prompt('What http verb will be used? \n')
        api_path = prompt('Enter the path that this http verb will use:\n')
        endpont_restful_api_description.append(f'{http_verb}  /api/{api_path}')


    endpont_links_descriptions = []
    endpont_links_return_description = []
    body_parameters = []
    for each in endpont_links:
        description = prompt(f'Enter a description for the current endpoint: \n {each}')
        endpont_links_descriptions.append(description)
        return_description = prompt('What will the current endpoint return? \n')
        endpont_links_return_description.append(return_description)


        amount_of_params = prompt('How many parameters will there be in the body of the request?\n')
        num_of_params = int(amount_of_params)

        while (num_of_params > 0):
            each_params = prompt('What will the name of the parameter be? \n')
            type_of_param = prompt('What type of parameter will it be?\n')
            param_description = prompt('Enter a description of the current parameter: \n')
            param_notes = prompt('Enter any other notes about the current parameter: \n')

            param_data = {
                "name": each_params,
                "type": type_of_param,
                "description": param_description,
                "notes": param_notes
            }

            body_parameters.append(param_data)
            num_of_params = num_of_params - 1



    # for the objects on the api page if any exist
    print('Will there be code examples on the API documentation page? \n')
    decision = prompt('Enter (1) for yes OR (2) for no.\n')
    to_number_decision = int(decision)

    code_title = ''
    if to_number_decision == 1:
        # do stuff if it is a yes
        print('What data type will be displayed in the wiki?\n')
        code_title = prompt('Enter (1) for an object: \n Enter (2) for an array: \n')
        to_number_code_title = int(code_title)
        if to_number_code_title == 1:
            # code for objects
        elif to_number_code_title == 2:
            # code for arrays
                                                                                    #  STOPPED HERE**

    elif to_number_decision == 2:
        # do stuff if it is a no





    return {
        "all_api_data": {
            "api_title": title,
            "resorce_links": resorce_links,
            "resorce_titles": resorce_titles,
            "endpont_links": endpont_links,
            "endpont_restful_api_description": endpont_restful_api_description,
            "endpont_links_descriptions": endpont_links_descriptions,
            "body_parameters": body_parameters
        }
    }






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
    wiki_data = []

    print('Do you want a brand new wiki?\n')
    result = prompt('Enter (1) for yes OR (2) for no.')

    num_result = int(result)
    if num_result == 1:
        print('New wiki initialzed...\n')
        # run the function that will create all of the data for each wiki page
        home_data = initHome()
        wiki_data.append(home_data)
        api_data = initAPIDocPage()


        print(api_data)


        # used later in the main function to make a decision
        wiki_data.append(1)


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

        # used later in the main function to make a decision
        wiki_data.append(2)

    return wiki_data;











# the main running function here:
def main():
    # need to ask if they even want to make a new wiki or only a portion of a wiki
    wiki = initWiki()
    wiki_decision = wiki.pop()
    # if the decision is a one then need to make all of the files for the wiki
    if wiki_decision == 1:
        print("make everything")
        # need to pop inorder to get the data

    elif wiki_decision == 2:
        print('make only the specified thing...')
        # need to pop inorder to get the data





# call to the main function here:
main()
