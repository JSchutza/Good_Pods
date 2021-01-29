

def prompt(str):
    print(str)
    this = input()
    return this;


def giveType(this):
    print(type(this))
    return this;



def list_to_string(the_list):
    return ' '.join(map(str, the_list))
