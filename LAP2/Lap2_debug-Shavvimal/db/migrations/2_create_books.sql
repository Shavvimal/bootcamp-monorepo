DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    year_of_publication int NOT NULL,
    abstract varchar(500) NOT NULL,
    author_id int
);