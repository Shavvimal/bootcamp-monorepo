### Study Notes
| [Procedural Python](https://github.com/getfutureproof/fp_guides_wiki/wiki/Procedural-Python) | [Testing with Pytest](https://github.com/getfutureproof/fp_guides_wiki/wiki/Testing-with-Pytest) |

### Demo Repo
- Clone repo and cd into folder
- Enter virtual environemnt: `pipenv shell`
- Install dependencies: `pipenv install`
- To run app: `pipenv run app` _(see Pipfile for script contents)_
- To run test suite: `pipenv run test` _(see Pipfile for script contents)_
- To run test coverage: `pipenv run coverage` _(see Pipfile for script contents)_
- Exit virtual environment: `exit`

# Exercises
- Make a `name_generator` module with two methods
  - `dragon_name` 
    - takes a person's first name and month of birth
    - returns their dragon name (you decide how this is formed!)
  - `penguin_name` 
    - takes a person's first name and month of birth
    - returns their penguin name (you decide how this is formed!)


- Make an `app.py` file that runs a game loop
  - User is asked for their name and month of birth
  - User is asked if they want their dragon name or penguin name
  - User is shown their new name!
  - User stays in game until they decide to leave
  - User can type in `exit` at any time to exit the program

**Bonus**
- Add some tests using `pytest`
