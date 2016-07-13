//Token Generator Function
//Generate Token using secret from process.env.JWT_SECRET

var jwt = require('jsonwebtoken');

module.exports = {

  generateToken: function(user) {
    //1. Dont use password and other sensitive fields
    //2. Use fields that are useful in other parts of the     
    //app/collections/models
    var u = {
      // name: user.name,
      email: user.email,
      // admin: user.admin,
      _id: user._id.toString(),
      // image: user.image
    };
    return token = jwt.sign(u, 'keyboard cat', {
      expiresIn: 60 * 60 * 24 * 365 // expires in 365 days
    });
  },

  //thie can be tweeked to send client what we want about the user (note that password is omitted)
  getCleanUser: function(user) {
    var u = {
      _id: user._id,
      email: user.email
    };
    return u;
  }

};