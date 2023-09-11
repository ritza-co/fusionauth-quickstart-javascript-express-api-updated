require('dotenv/config');
const jose = require('jose');

function hasRole(jwt, role) {
  // console.dir(`Decoding token in hasRole`);
  // console.dir(jwt);
  const decodedToken = jose.decodeJwt(jwt);
  // console.dir(`Decoded token in hasRole`);
  // console.dir(decodedToken);
  // console.log(decodedToken.roles.includes(role));
  return decodedToken.roles.includes(role);
};

module.exports = hasRole;
