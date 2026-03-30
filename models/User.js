const moongose = require('mongoose');

const UserSchema = new moongose.Schema({
  username: String,
  email: String,
  password: String,
}, { timestamps: true});

const User = moongose.model('User', UserSchema);

module.exports = User;