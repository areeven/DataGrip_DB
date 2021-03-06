SHOW DATABASES;

CREATE DATABASE bookface;
USE bookface;

CREATE TABLE users
(
    id   INT         NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age  INT         NOT NULL
);

CREATE TABLE messages
(
    id      INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    subject VARCHAR(50)        NOT NULL,
    text    VARCHAR(200)       NOT NULL,
    userId  INT                NOT NULL,
    FOREIGN KEY (userId) REFERENCES users (id)
);

ALTER TABLE messages
    ADD time DATETIME;

ALTER TABLE messages
    MODIFY time DATETIME NOT NULL;

DESCRIBE users;
DESCRIBE messages;


INSERT INTO users(name, age)
VALUES ('Lars', 19),
       ('Emilie', 31),
       ('Mohammad', 29)
;

INSERT INTO messages(subject, text, userId, time)
VALUES ('SQL', 'Är kul', 1, NOW()),
       ('Vad är kul', 'Inte sql', 2, NOW()),
       ('Apple', 'är bäst', 3, NOW())
       ;

SHOW TABLES;
SHOW TABLE STATUS;

SELECT *
FROM users;

SELECT *
FROM messages;

SELECT *
FROM messages
INNER JOIN users on messages.userId = users.id;

SELECT users.name, messages.subject, messages.text
FROM messages
INNER JOIN users on messages.userId = users.id;

