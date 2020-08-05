const express = require('express');
const router = express.Router();
const feedController = require('../constrollers/feed');

router.get('/getTest', feedController.getTest);

module.exports = router;
