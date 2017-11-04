var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      
    },
    post: function (req, res) {
      console.log(req.body);
      
      var username = [req.body.username];
      
      models.users.post(username, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log('SHIT PASSED',result);
          res.sendStatus(201);
        }
      });
    }
  }
};

