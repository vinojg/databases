var db = require('../db');

module.exports = {
  messages: {
    get: function (message) {
    }, // a function which produces all the messages
    post: function () {
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      
    },
    post: function (username, callback) {
      console.log(username);
      var command = 'INSERT INTO users(username) VALUES (?)'; 
      //  {username: 'allen'}
      // ${username}
      db.query(command, username, function(err, result) {
        console.log('INSIDE DB QUERY');
        callback(err, result);
        // if (err) {
        //   callback(err, null);
        // }
        // callback(null, result);
        // console.log(`${username} inserted into users table!`);
      });
    }
  }
};

