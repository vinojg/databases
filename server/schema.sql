CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL
);

CREATE TABLE rooms (
  id INT PRIMARY KEY AUTO_INCREMENT,
  roomname VARCHAR(20) NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  username INT NOT NULL,
  roomname INT,
  FOREIGN KEY(username) REFERENCES users(id),
  FOREIGN KEY(roomname) REFERENCES rooms(id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

