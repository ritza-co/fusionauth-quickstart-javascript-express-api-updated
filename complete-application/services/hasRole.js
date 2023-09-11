require('dotenv/config');
const jose = require('jose');

async function hasRole(role) {
  const accessToken = req.cookies['app.at'];
  const decodedToken = await jose.decodeJwt(accessToken);
  console.dir(decodedToken);
  return decodedToken.roles.include(role);
};

module.exports = hasRole;
