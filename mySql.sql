USE webbproject;

CREATE TABLE genre
(
    genreId   INT NOT NULL AUTO_INCREMENT,
    genreName VARCHAR(50) UNIQUE,
    PRIMARY KEY (genreId)
);

CREATE TABLE directors
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

-- Lägger till genre till movies
INSERT INTO movies (movieTitle, movieGenreID)
VALUES ('The Green Mile', 1),
       ('Terminator', 2),
       ('West Side Story', 3),
       ('Dirty Harry', 4);

SELECT * FROM movies;

-- Lägger till writers
INSERT INTO writers (writerName)
VALUES ('Stephen King'), ('David S. Goyer'), ('Tony Kushner'), ('Howard Klausner');

SELECT * from writers;

-- Lägger till directors
INSERT INTO directors (directorName)
VALUES ('Frank Darabont'),('Tim Miller'),('Steven Spielberg'),('Jerry Hogrewe');

SELECT * FROM directors;

-- Lägger till director till movies
UPDATE movies
SET directorName = 'Frank Darabont' WHERE movieTitle = 'The Green Mile';

UPDATE movies
SET directorName = 'Tim Miller' WHERE movieTitle = 'Terminator, Dark Fate';

UPDATE movies
SET directorName = 'Steven Spielberg' WHERE movieTitle = 'West Side Story';

UPDATE movies
SET directorName = 'Jerry Hogrewe' WHERE movieTitle = 'Dirty Harry, The Original';

-- Lägger till movieRating och writer till movies
UPDATE movies
SET movieRating= 8.6, movieWriterId= 1 WHERE movieId= 1;

---- Lägger till movieRating och writer och uppdaterar movieTitle till movies
UPDATE movies
SET movieRating= 6.2, movieTitle= 'Temninator, Dark Fate', movieWriterId= 2 WHERE movieId= 2;

---- Lägger till movieRating och writer till movies
UPDATE movies
SET movieRating= 7.1, movieWriterId= 3 WHERE movieId= 3;

-- Lägger till movieRating och writer och uppdaterar movieTitle till movies
UPDATE movies
SET movieRating= 6.7, movieTitle= 'Dirty Harry, The Original', movieWriterId= 4 WHERE movieId= 4;

SELECT * FROM movies;

-- Lägger till skådespelare
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

SELECT * FROM mainActor;

-- Uppdatera filmer med skådespelare
UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Tom Hanks')
WHERE movieTitle = 'The Green Mile';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Michael Clark Duncan')
WHERE movieTitle = 'The Green Mile';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Arnold Schwarzenegger')
WHERE movieTitle = 'Terminator, Dark Fate';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Linda Hamilton')
WHERE movieTitle = 'Terminator, Dark Fate';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Natalie Wood')
WHERE movieTitle = 'West Side Story';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'George Chakiris')
WHERE movieTitle = 'West Side Story';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Clint Eastwood')
WHERE movieTitle = 'Dirty Harry, The Original';

UPDATE movies
SET movieMainActorId = (SELECT mainActorId FROM mainActor WHERE mainActorName = 'Andrew Robinson')
WHERE movieTitle = 'Dirty Harry, The Original';

SELECT movieTitle, mainActorName
FROM movies
JOIN mainActor a ON movieMainActorId = a.mainActorId;

SELECT * FROM movies;
SELECT * FROM genre;
SELECT * FROM directors;
SELECT * FROM writers;
SELECT * FROM mainActor;
