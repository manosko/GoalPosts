var db = require('./db');

var User = {};

User.findByUsername = function(username) {
  return db('users').where({ username: username }).select('*')
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err)
    });
};

// TODO: ADD MORE MODEL FUNCTIONS HERE

module.exports = User;
