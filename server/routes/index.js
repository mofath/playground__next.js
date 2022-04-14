const express = require('express');
const pageController = require('../controllers/pageController');
const fileController = require('../controllers/fileController');

const router = express.Router();

function routes(app) {
  router.get('/page', pageController.storePage);
  router.post('/page', pageController.storePage);

  router.get('/file', fileController.loadFile);
  router.post('/file', fileController.storeFile);

  return router;
}

module.exports = routes;
