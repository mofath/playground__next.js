const express = require('express');
const pageController = require('../controllers/pageController');
const fileController = require('../controllers/fileController');

const router = express.Router();

router.get('/page', pageController.loadPage);
router.post('/page', pageController.storePage);

router.get('/file', fileController.loadFile);
router.post('/file', fileController.storeFile);

module.exports = router;
