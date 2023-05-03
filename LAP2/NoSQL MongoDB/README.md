### Study Notes

[NoSQL](https://github.com/getfutureproof/fp_guides_wiki/wiki/NoSQL)

### Explore demo db

- clone this repo & `cd fp_study_notes_nosql`
- `docker run --name shelter-db --mount type=bind,source="$(pwd)",dst="/code" -d mongo`
- `docker exec -it shelter-db mongo` (to open the mongo shell)
- `load('code/db/setup.js')`

To try helper functions:

- `load('code/db/helpers.js')`
- `getDogsByBreed('golden retriever')` / `getDogsFor('Vesna')`

To exit the mongo shell:

- `quit()`

# Exercises

Complete these first in MongoDB and if time allows, recreate with an alternative NoSQL solution.

- Create a database to store data about celebrities:
  - Include their name, age and birthplace
  - If appropriate, include data on relationship status, children, awards, acheivements
  - Do not follow a strict schema, be flexible on the data provided dependent on the celebrity
- Craft queries to return:

  - names of all celebrities in database
  - number of celebrities in database who have children
  - summary of total number of awards won grouped by birthplace

- Design some more queries!
