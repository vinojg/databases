var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(function(err, result) {
        
        if (err) {
          throw err; 
        }
        res.end(JSON.stringify(result));
      });
      
      
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      models.messages.post(req.body, function(err, result) {
        if (err) {
          console.log('ERROR', err);
        } else {
          // res.sendStatus(201);
          res.end();
        
        }
      });


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      
      var username = [req.body.username];
      
      models.users.post(username, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201);
          res.end();
        }
      });
    }
  }
};

