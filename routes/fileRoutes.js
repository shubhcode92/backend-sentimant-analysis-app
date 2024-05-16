const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const passport = require('passport');

// auto for middleware
const authMiddleware = passport.authenticate('jwt', { session: false });

// Route for file upload
router.post('/upload', authMiddleware, fileController.uploadFile);

module.exports = router;
