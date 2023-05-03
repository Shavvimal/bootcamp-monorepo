### Study Notes

[SQL](https://github.com/getfutureproof/fp_guides_wiki/wiki/SQL)

# Exercises

1. **Query the Pitchfork DB**

- Create a postgres docker container and run the `setup.sql` file in this repo in a psql shell to setup a database based on the [Pitchfork Reviews dataset](https://www.kaggle.com/nolanbconaway/pitchfork-data)

  - clone this repo and `cd fp_study_notes_sql`
  - `docker run --name pitchfork-db --mount type=bind,source="$(pwd)",dst="/code" -e POSTGRES_PASSWORD=password -d postgres`
  - `docker exec -it pitchfork-db psql -U postgres` (the database may take a moment to start up after the previous command, if this fails wait a few seconds before trying again)
  - `\i code/setup.sql` (parts of this might take a moment, wait until you see the `postgres=#` prompt before continuing)

- Write SQL queries to retrieve the following sets of data
  - All artists, titles, and scores for reviews
  - All artists, titles, and scores for reviews where the score is over 9
  - A count of reviews where the score is over 9
  - An average of the scores each year
  - The name of the artist, the date of publication and the artist's genre of all the reviews
  - Content of the all reviews of rock genre
  - Titles of the reviews that contain the word music in their content (hint: use a like conditional)

1. **Create Traveller DB from scratch**

- Create a database to store data about travellers, destinations and trips:
  - Travellers have many destinations through holidays
  - Destinations have many travellers through holidays
  - Trips have one traveller and one destination
- Craft queries to return:

  - Number of trips for each traveller
  - All destinations visited by a specified traveller

- Design some more queries!
