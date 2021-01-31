# --------------------------------------------------------------------------------------------------------------------
# general helpers here:

def prompt(str):
    print(str)
    this = input()
    return this;


def giveType(this):
    print(type(this))
    return this;



def list_to_string(the_list):
    return ' '.join(map(str, the_list))




def get_property(key_name, the_obj):
    result = the_obj.get(key_name)

    if result == None:
        return False;
    else:
        return result;










# --------------------------------------------------------------------------------------------------------------------
# helpers specific to the program


# ==============================================================================================================================================================================================================================================================================================================================
# used inside of initAPIDocPage()
def get_title_and_resources_info(git_hub_username, repo_name):
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


    return {
        "api_title" : title,
        "resorce_links" : resorce_links,
        "resorce_titles" : resorce_titles
    }



# used inside of initAPIDocPage()
def get_endpoint_info(endpont_links, endpont_restful_api_description, resorce_titles, git_hub_username, repo_name):

    for each in resorce_titles:
        link_title = prompt('Enter the name of the enpont action: \n')
        endpont_links.append(f' - [{link_title}](https://github.com/{git_hub_username}/{repo_name}/wiki/API-Documentation#{link_title})')
        http_verb = prompt('What http verb will be used? \n')
        api_path = prompt('Enter the path that this http verb will use:\n')
        endpont_restful_api_description.append(f'{http_verb}  /api/{api_path}')


    return {
        "link_title" : link_title,
        "endpont_links" : endpont_links,
        "http_verb" : http_verb,
        "api_path" : api_path,
        "endpont_restful_api_description" : endpont_restful_api_description
    }



# used inside of initAPIDocPage()
def get_endpoint_descriptions(endpont_links_descriptions, endpont_links_return_description, each):
    description = prompt(f'Enter a description for the current endpoint: \n {each}')
    endpont_links_descriptions.append(description)
    return_description = prompt('What will the current endpoint return? \n')
    endpont_links_return_description.append(return_description)

    return {
        "endpont_links_descriptions" : endpont_links_descriptions,
        "endpont_links_return_description" : endpont_links_return_description
    }



# used inside of initAPIDocPage()
def get_params(message, parameters = []):
    print(f' ---- {message} ---- \n')
    amount_of_params = prompt('How many parameters will there be?\n')
    num_of_params = int(amount_of_params)

    while (num_of_params > 0):
        print(f' ---- {message} ---- \n')
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

        parameters.append(param_data)
        num_of_params = num_of_params - 1

    return parameters;







# used inside of initAPIDocPage()
def get_table_info():
    print('Will you have body, path, or query parameter data? \n')
    selection_items = [
        'Enter (body) for [body data]: \n',
        'Enter (path) for [path data]: \n',
        'Enter (query) for [query data]: \n',
        'Enter (body + path) for both [body and path data]: \n',
        'Enter (path + query) for both [path and query data]: \n',
        'Enter (all) if you want [body, path, and query data]:'
    ]

    selection_prompt = list_to_string(selection_items)

    params_decision = prompt(selection_prompt)

    if params_decision == 'body':
        body_param_data = get_params('for body')

        return {
            "body_param_data" : body_param_data
        }


    elif params_decision == 'path':
        path_param_data = get_params('for path')

        return {
            "path_param_data" : path_param_data
        }


    elif params_decision == 'query':
        query_param_data = get_params('for query')

        return {
            "query_param_data" : query_param_data
        }


    elif params_decision == 'body + path':
        body_param_data = get_params('for body')
        path_param_data = get_params('for path')

        return {
            "body_param_data" : body_param_data,
            "path_param_data" : path_param_data
        }

    elif params_decision == 'path + query':
        path_param_data = get_params('for path')
        query_param_data = get_params('for query')

        return {
            "path_param_data" : path_param_data,
            "query_param_data" : query_param_data
        }



    elif params_decision == 'all':
        body_param_data = get_params('for body')
        path_param_data = get_params('for path')
        query_param_data = get_params('for query')

        return {
            "body_param_data" : body_param_data,
            "path_param_data" : path_param_data,
            "query_param_data" : query_param_data
        }






# used inside of initAPIDocPage()
def decide_on_code_type(decision):
    if decision == 1:
        # code for generating data for object representation
        amount_of_props = prompt('How many properties will your object have? \n')
        num_of_props = int(amount_of_props)

        result = {}
        while num_of_props > 0:
            key = prompt('Enter the name of the key: \n')
            value = prompt(f'Enter your value for the current key [{key}]: \n')
            result = { f'{key}': f'{value}' }
            num_of_props = num_of_props - 1
        return result;

    elif decision == 2:
        # code for generating data for array representation
        amount_of_items = prompt('How many items will your array have? \n')
        num_of_items = int(amount_of_items)

        result = []
        while num_of_items > 0:
            each_item = prompt('Enter data for an array item: \n')
            result.append(each_item)
            num_of_items = num_of_items - 1
        return result


# ==============================================================================================================================================================================================================================================================================================================================

# used inside of the initDBSchemaPage()
                                            # STOPPED HERE
                                                                    # FIX THIS
def construct_table_data(amount_of_rows, table_name):
    data = []
    while (amount_of_rows > 0):
        column_name = prompt('Enter its column name: \n')
        data_type = prompt('Enter its data type: \n')
        details = prompt(f'Enter any other details about this current row on the [{table_name}]')

        result = {
            "column_name" : column_name,
            "data_type": data_type,
            "details" : details
        }
        data.append(result)
        amount_of_rows = amount_of_rows - 1


    return data;







# ==============================================================================================================================================================================================================================================================================================================================
# used inside of initUserStories()
def getFeatures():
    features_array = []

    features = prompt('How many feature items do you need?')
    num_of_features = int(features)
    while (num_of_features > 0):
        the_feature = prompt('Enter your feature:')
        features_array.append(the_feature)
        num_of_features = num_of_features - 1
    return features_array
