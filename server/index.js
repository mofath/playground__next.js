const express = require('express');
const next = require('next');
const path = require('path');
const routes = require('./routes/index');

const app = next({
  dir: path.join(path.dirname(__dirname), '.'),
  dev: true,
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use('/api', routes(server));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log(`> Running on http://localhost:3000`);
  });
});
