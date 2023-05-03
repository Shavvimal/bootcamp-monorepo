DROP TABLE IF EXISTS artists;
CREATE TABLE artists (
	reviewid INT,
    artist VARCHAR
);
COPY artists
FROM $str$/code/data/artists.csv$str$ 
DELIMITER ',' CSV HEADER;


DROP TABLE IF EXISTS content;
CREATE TABLE content (
	reviewid INT,
    body VARCHAR
);
COPY content
FROM $str$/code/data/content.csv$str$ 
DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS genres;
CREATE TABLE genres (
	reviewid INT,
    genre VARCHAR
);
COPY genres
FROM $str$/code/data/genres.csv$str$ 
DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS labels;
CREATE TABLE labels (
	reviewid INT,
    label VARCHAR
);
COPY labels
FROM $str$/code/data/labels.csv$str$ 
DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
	reviewid INT,
	title VARCHAR,
	artist VARCHAR,
	url VARCHAR,
	score REAL,
	best_new_music INT,
	author VARCHAR,
	author_type VARCHAR,
	pub_date VARCHAR,
	pub_weekday INT,
	pub_day INT,
	pub_month INT,
	pub_year INT
);
COPY reviews
FROM $str$/code/data/reviews.csv$str$ 
DELIMITER ',' CSV HEADER;

DROP TABLE IF EXISTS years;
CREATE TABLE years (
	reviewid INT,
    year INT
);
COPY years
FROM $str$/code/data/years.csv$str$ 
DELIMITER ',' CSV HEADER;