const User = require('./user.model');

function createUser(user){
  return User.create(user);
}

module.exports = {createUser}
