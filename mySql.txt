CREATE TABLE genre(
	genreId INT NOT NULL AUTO_INCREMENT,
	genreName VARCHAR(50) UNIQUE,
	PRIMARY KEY (genreId)
);

CREATE TABLE director(
	directorId INT NOT NULL AUTO_INCREMENT,
	directorName VARCHAR(50) UNIQUE,
	PRIMARY KEY (directorId)
);

CREATE TABLE mainActor(
	mainActorId INT NOT NULL AUTO_INCREMENT,
	mainActorName VARCHAR(50) UNIQUE,
	PRIMARY KEY (mainActorId)
);

CREATE TABLE writers (
    writerId INT NOT NULL AUTO_INCREMENT,
    mainActorName VARCHAR(50) UNIQUE,
    PRIMARY KEY (writerId)
);

CREATE TABLE movies(
	movieId INT NOT NULL AUTO_INCREMENT,
	movieTitle VARCHAR(50) UNIQUE,
    movieRating VARCHAR(10),
   	movieDirectorId INT,
    movieGenreId INT,
    movieWriterId INT,
    movieMainActorId INT,
	PRIMARY KEY (movieId),
    FOREIGN KEY (movieDirectorId) REFERENCES director(directorId),
    FOREIGN KEY (movieGenreId) REFERENCES genre(genreId),
    FOREIGN KEY (movieWriterId) REFERENCES writers(writerId),
	FOREIGN KEY (movieMainActorId) REFERENCES mainActor(mainActorId)
);

INSERT INTO genre (genreName) VALUES
 ('Drama'),
 ('Action'),
 ('Musical'),
 ('Western');

INSERT INTO movies (movieTitle, movieGenreID)
VALUES ('The Green Mile', 1),
       ('Terminator', 2),
       ('West Side Story', 3),
       ('Dirty Harry', 4);

SELECT * FROM movies;
