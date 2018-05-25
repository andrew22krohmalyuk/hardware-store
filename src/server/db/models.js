const mongoose = require('mongoose');

// Model
const User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  birthday: String,
  email: String,
  login: String,
  password: String,
});

exports.User = User;
