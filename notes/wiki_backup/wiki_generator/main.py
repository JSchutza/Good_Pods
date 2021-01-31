



# imports here:
from helperfunc import *


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
def initAPIDocPage():

    title_resources_info = get_title_and_resources_info(git_hub_username, repo_name)

    resorce_titles = get_property("resorce_titles", title_resources_info)

    endpoint_info = get_endpoint_info([], [], resorce_titles, git_hub_username, repo_name)

    endpont_links = get_property("endpont_links", endpoint_info)

    for each in endpont_links:

        link_and_return_description = get_endpoint_descriptions([], [], each)

        table_info = get_table_info()


    # for the code examples on the API documentation page
    print('Will there be code examples on the API documentation page? \n')
    decision = prompt('Enter (1) for yes OR (2) for no.\n')
    to_number_decision = int(decision)
    if to_number_decision == 1:
        # do stuff if it is a yes
        print('What data type will be displayed in the wiki?\n')
        code_title = prompt('Enter (1) for an object: \n Enter (2) for an array: \n')
        code_data = decide_on_code_type(int(code_title))

    elif to_number_decision == 2:
        code_data = None
        return {
            "all_api_data": {
                "title_resources_info": title_resources_info,
                "endpoint_info" : endpoint_info,
                "link_and_return_description" : link_and_return_description,
                "table_info" : table_info,
                "code_data" : code_data
            }
        };

    return {
        "all_api_data": {
            "title_resources_info": title_resources_info,
            "endpoint_info" : endpoint_info,
            "link_and_return_description" : link_and_return_description,
            "table_info" : table_info,
            "code_data" : code_data
        }
    };



# function to get and create the Database Schema page info
def initDBSchemaPage():
    db_title = prompt('Enter a title for the Database Schema page: \n')

    db_type = prompt('What database are you using? \n')
    print('Are you using an ORM?\n')
    ORM_result = prompt('Enter (1) for yes. Enter (2) for no. \n')

    if int(ORM_result) == 1:
        ORM_name = prompt('What is the name of your ORM?\n')
    elif int(ORM_result) == 2:
        ORM_name = None

    tables_amount = prompt('How many tables are in the Data Base?\n')
    num_of_tables = int(tables_amount)
    table_instance = 0
    table_data = ''
    while (num_of_tables > 0):
        table_instance = table_instance + 1
        table_name = prompt(f'What is the name of your {table_instance} table? \n')
        amount_of_rows = prompt(f'How many rows does the {table_instance} table have? \n')
        table_data = construct_table_data(int(amount_of_rows), table_name)
        num_of_tables = num_of_tables - 1


    return {
        "db_title": db_title,
        "db_type" : db_type,
        "ORM_name" : ORM_name,
        "table_instance" : table_instance,
        "table_data" : table_data
    }








# function that decides if then want a new wiki or just part of an wiki
def initWiki():
    wiki_data = []

    print('Do you want a brand new wiki?\n')
    result = prompt('Enter (1) for yes OR (2) for no.')

    num_result = int(result)
    if num_result == 1:
        print('New wiki initialzed...\n')
        # run the function that will create all of the data for each wiki page
        # home_data = initHome()
        # wiki_data.append(home_data)
        # api_data = initAPIDocPage()
        # wiki_data.append(api_data)

        DB_data = initDBSchemaPage()

        print(DB_data)


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
