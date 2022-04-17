const express = require('express');
const next = require('next');
const path = require('path');
const mongoose = require('mongoose');
const { router } = require('./routes/index');

const app = next({
  dir: path.join(path.dirname(__dirname), '.'),
  dev: true,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  mongoose.connect(
    'mongodb://localhost:27017/grapesjsDB',
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
      if (err) return console.log('Failed to connect to MongoDb', err);
      console.log('Connected successfully to MongoDb');
    },
  );

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use('/api', router);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on http://localhost:3000`);
  });
});
