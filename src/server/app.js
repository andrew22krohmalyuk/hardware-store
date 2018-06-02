const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('express-cors');
const config = require('../../config/config');
const User = require('./db/models').User;
const Good = require('./db/models').Good;

// new Good({
//   name: 'Toolbox',
//   price: '$74.99',
//   group: 'Hand Tools',
//   imageUrl: 'https://doitbest-weblinc.netdna-ssl.com/product_images/303092/303092/5a04434e69702d2de9202929/super_zoom.jpg',
//   description: 'Part of the PACKOUT Modular Storage System - connects to all PACKOUT products. Tool box is constructed with impact resistant polymers and metal reinforced corners to provide up to 75 Lb. (pound) of weight capacity and ultimate durability in harsh jobsite conditions.',
// }).save()
//   .then(res => console.log(res));

const app = express();

app.use(cors({
  allowedOrigins: ['http://localhost:8080'],
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.DB_URL);

app.get('/api', (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
});

app.post('/api/user', (req, res) => {
  new User(req.body).save()
    .then(() => {
      res.status(200);
      res.send(JSON.stringify({
        status: 200,
        message: 'User was saved',
      }));
    });
});

app.listen(config.SERVER_PORT, () => {
  console.log(`API listening on port ${config.SERVER_PORT}`);
});
