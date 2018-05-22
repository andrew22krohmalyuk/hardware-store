const express = require('express');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb://andrew%4012:andrew22@ds131800.mlab.com:31800/hardware';

mongoose.connect(url);

// Model
const User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  birthday: String,
  email: String,
  login: String,
  password: String,
});

// New User
const newUser = new User({
  firstName: 'Andrew',
  lastName: 'LastName',
  birthday: '12 09 1992',
  email: 'email@mqil.com',
  login: 'login123@',
  password: 'password',
});

// Save
// newUser.save().then(() => console.log('newUser saved'));

app.get('/api', (req, res) => {
  // Query by model
  User.find({}, (err, users) => {
    res.json(users);
  });
});

app.post('/api', (req, res) => {
  console.log("reg", reg);
  console.log("res", res);
  res.send('POST request to the homepage');
});

app.listen(3030, () => {
  console.log('API listening on port 3030');
});
