const user = require('./api/user');
const fav = require('./api/fav');

function routes(app){
  app.use('/api/users', user);
  app.use('/api/favs', fav);
}

module.exports = {routes}
