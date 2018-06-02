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

const Good = mongoose.model('Good', {
  name: String,
  price: String,
  group: String,
  imageUrl: String,
  description: String,
});

exports.User = User;
exports.Good = Good;
