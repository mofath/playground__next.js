const express = require('express');
const pageController = require('../controllers/pageController');
const fileController = require('../controllers/fileController');
const path = require('path');

const router = express.Router();

router.get('/page', pageController.loadPage);
router.post('/page', pageController.storePage);

router.get('/file', express.static(path.join(__dirname, '../uploads')));
router.post('/file', fileController.storeFile);

module.exports = {
  router,
};
