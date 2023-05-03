import calculator
import os
import pdb

options = {
    'basic': ['add', 'subtract', 'multiply', 'divide'],
    'advanced': ['rounding', 'info']
}

def clear_screen():
    os.system('cls' if os.name=='nt' else 'clear')

def get_category():
    category = input("\nHi, would you like some basic maths or something more? Type 'basic' or 'advanced'.\n")
    return category

def get_option(category):
    opts = ', '.join(options[category])
    action = input(f"\nChoose an action:\n{opts}\n")
    return action

def run():
    clear_screen()
    try:
        category = get_category()
        action = get_option(category)
        result = handle_basic(action) if category == 'basic' else handle_advanced(action)
        print(f"\nThe result is: {result}\n")
    except Exception as e:
        # pdb.set_trace()
        print("\nTerribly sorry, there's been an error!\n")
    finally:
        print("\nThanks for using the futureproof calculator!\n")
    
def handle_basic(action):
    coords = input("\nGive two numbers separated with a comma eg.: 2, 3\n")
    nums = coords.split(',')
    func = getattr(calculator.basics, action)
    result = func(float(nums[0]), float(nums[1]))
    return result

def handle_advanced(action):
    func = getattr(calculator.extended, action)

    match action:
        case 'rounding':
            coords = input("\nWhat number would you like to round and in which direction? eg.: 5.4 down\n")
            reqs = coords.split()
            result = func(float(reqs[0]), reqs[1])
        case 'info':
            num = input("\nWhat number would you like info for? ")
            result = func(int(num))

    return result

if __name__ == "__main__":
    run()