DROP TABLE IF EXISTS leaderboard;

CREATE TABLE leaderboard (
    id serial PRIMARY KEY,
    name varchar(100) NOT NULL,
    score int NOT NULL,
    difficulty varchar(100) NOT NULL
);

