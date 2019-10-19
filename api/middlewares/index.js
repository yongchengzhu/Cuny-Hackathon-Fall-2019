const passport = require('passport');
const jwt      = require('jwt-simple');
require('../services/passport');

let middlewares = {};

middlewares.requireToken = passport.authenticate('jwt', { session: false});
middlewares.requireLogin = passport.authenticate('local', { session: false });
middlewares.tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.JWT_SECRET);
}

module.exports = middlewares;