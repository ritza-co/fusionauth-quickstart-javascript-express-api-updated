const jose = require('jose');

function hasRole(role) {
  return (req, res, next) => {
    const decodedToken = jose.decodeJwt(req.cookies['app.at']);
    if (decodedToken.roles.includes(role)) return next();
    res.status(500);
    res.send({ error: `You do not have the ${role} role.` });
  }
}

module.exports = hasRole;
