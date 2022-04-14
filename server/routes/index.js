const express = require('express');
const router = express.Router();

function routes(app) {
  router.get('/uploads', (req, res) => {
    console.log('fetch uploads');
    res.send('fetch uploads');
  });

  router.post('/uploads', (req, res) => {
    console.log('post file');
    res.send('post file');
  });

  router.get('/store', (req, res) => {
    console.log('fetch template');
    res.send('fetch template');
  });

  router.post('/store', (req, res) => {
    console.log(req.body);
    console.log('post template');
    res.send('post template');
  });

  return router;
}

module.exports = routes;
