const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('express-cors');
const config = require('../../config/config');
const User = require('./db/models').User;
const Good = require('./db/models').Good;

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

app.post('/api/login', (req, res) => {
  User.find({ login: req.body.login, password: req.body.password }, (err, users) => {
    res.json(users);
  });
});

app.get('/api/products', (req, res) => {
  Good.find({}, (err, good) => {
    res.json(good);
  });
});

app.post('/api/products', (req, res) => {
  new Good(req.body).save()
    .then(() => {
      res.status(200);
      res.send(JSON.stringify({
        status: 200,
        message: 'Good was saved',
      }));
    });
});

app.put('/api/products/:id', (req, res) => {
  Good.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) {
      console.log(err);
    }
    res.send(JSON.stringify({
      status: 200,
      message: 'Good was updated',
    }));
  });
});

app.delete('/api/products/:id', (req, res) => {
  Good.findByIdAndRemove(req.params.id, req.body, (err) => {
    if (err) {
      console.log(err);
    }
    res.send(JSON.stringify({
      status: 200,
      message: 'Good was deleted',
    }));
  });
});

app.listen(config.SERVER_PORT, () => {
  console.log(`API listening on port: ${config.SERVER_PORT}`);
});
