var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      var command = 'SELECT * FROM messages';
      var queries = [];
      
      db.query(command, queries, function(err, result, fields) {

        
        callback(err, result);
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      var roomCommand = 'INSERT IGNORE INTO rooms(roomname) VALUES (?)';
      db.query(roomCommand, [message.roomname], function(err, result) {
        callback(err, result);
      });
      
      var messageCommand = 
      `INSERT INTO messages (text, username, roomname) VALUES
        (?,
        (SELECT id FROM users WHERE username = ?),
        (SELECT id FROM rooms WHERE roomname = ?));  
      `;
      db.query(messageCommand, [message.message, message.username, message.roomname], function(err, result) {
        callback(err, result);
      });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      
    },
    post: function (username, callback) {
      var command = 'INSERT IGNORE INTO users(username) VALUES (?)'; 
      //  {username: 'allen'}
      // ${username}
      db.query(command, username, function(err, result) {
        callback(err, result);
      });
    }
  }
};


/*
INSERT INTO messages (text, username, roomname) VALUES
    -> (?,
    -> (SELECT id FROM users WHERE username = ?),
    -> (SELECT id FROM rooms WHERE roomname = ?)); [text, username, roomname]

  INSERT IGNORE INTO rooms (roomname) VALUES ('lobby');
*/

