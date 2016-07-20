// DEPLOYED version:
module.exports = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  mlab: {
    dbuser: process.env.MLAB_DBUSER,
    dbpassword: process.env.MLAB_DBPASSWORD
  }
};

// LOCAL version:
// module.exports = {
//   port: 3000,
//   jwtSecret: require('./config.js').expJwt.scrt,
//   mlab: {
//     dbuser: require('./config.js').mlab.dbuser,
//     dbpassword: require('./config.js').mlab.dbpassword
//   }
// };