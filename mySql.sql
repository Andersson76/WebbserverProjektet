CREATE TABLE genre
(
    genreId   INT NOT NULL AUTO_INCREMENT,
    genreName VARCHAR(50) UNIQUE,
    PRIMARY KEY (genreId)
);

CREATE TABLE director
(
    directorId   INT NOT NULL AUTO_INCREMENT,
    directorName VARCHAR(50) UNIQUE,
    PRIMARY KEY (directorId)
);

CREATE TABLE mainActor
(
    mainActorId   INT NOT NULL AUTO_INCREMENT,
    mainActorName VARCHAR(50) UNIQUE,
    PRIMARY KEY (mainActorId)
);


CREATE TABLE writers
(
    writerId   INT NOT NULL AUTO_INCREMENT,
    writerName VARCHAR(50) UNIQUE,
    PRIMARY KEY (writerId)
);

CREATE TABLE movies
(
    movieId          INT NOT NULL AUTO_INCREMENT,
    movieTitle       VARCHAR(50) UNIQUE,
    movieRating      VARCHAR(10),
    movieDirectorId  INT,
    movieGenreId     INT,
    movieWriterId    INT,
    movieMainActorId INT,
    PRIMARY KEY (movieId),
    FOREIGN KEY (movieDirectorId) REFERENCES director (directorId),
    FOREIGN KEY (movieGenreId) REFERENCES genre (genreId),
    FOREIGN KEY (movieWriterId) REFERENCES writers (writerId),
    FOREIGN KEY (movieMainActorId) REFERENCES mainActor (mainActorId)
);

SELECT * FROM movies;

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

INSERT INTO writers (writerName)
VALUES ('Stephen King'), ('David S. Goyer'), ('Tony Kushner'), ('Howard Klausner');

SELECT * from writers;

-- Lägger till movieRating och uppdaterar movieTitle
UPDATE movies
SET movieRating= 8.6, movieWriterId= 1 WHERE movieId= 1;

UPDATE movies
SET movieRating= 6.2, movieTitle= 'Temninator, Dark Fate', movieWriterId= 2 WHERE movieId= 2;

UPDATE movies
SET movieRating= 7.1, movieWriterId= 3 WHERE movieId= 3;

UPDATE movies
SET movieRating= 6.7, movieTitle= 'Dirty Harry, The Original', movieWriterId= 4 WHERE movieId= 4;

SELECT * FROM movies;
SELECT * FROM mainActor;

-- Skådespelare för The Green Mile
INSERT INTO mainActor (mainActorName)
VALUES
('Tom Hanks'),
('Michael Clark Duncan'),
('Arnold Schwarzenegger'),
('Linda Hamilton'),
('Natalie Wood'),
('George Chakiris'),
('Clint Eastwood'),
('Andrew Robinson');

-- Uppdatera filmer med skådespelar The Green Mile
UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Tom Hanks')
WHERE movieTitle = 'The Green Mile';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Michael Clark Duncan')
WHERE movieTitle = 'The Green Mile';

-- Uppdatera filmer med skådespelar Terminator
UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Arnold Schwarzenegger')
WHERE movieTitle = 'Terminator, Dark Fate';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Linda Hamilton')
WHERE movieTitle = 'Terminator, Dark Fate';

-- Uppdatera filmer med skådespelar för West Side Story
UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Natalie Wood')
WHERE movieTitle = 'West Side Story';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'George Chakiris')
WHERE movieTitle = 'West Side Story';

-- Uppdatera filmer med skådespelar Dirty Harry, The Original
UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Clint Eastwood')
WHERE movieTitle = 'Dirty Harry, The Original';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Andrew Robinson')
WHERE movieTitle = 'Dirty Harry, The Original';

SELECT movieTitle, mainActorName
FROM movies
JOIN mainActor a ON movieMainActorId = a.mainActorId;
