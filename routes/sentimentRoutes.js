const express = require('express');
const router = express.Router();
const sentimentController = require('../controllers/sentimentController');
const passport = require('passport');

router.post('/', passport.authenticate('jwt', { session: false }), sentimentController.analyzeSentiment);

module.exports = router;
