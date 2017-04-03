module.exports = function (req, res, next) {

  if (req.session.username != null) {
    return next(); //proceed to the next policy,
  }

  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You need to login to add intereset.');
};
