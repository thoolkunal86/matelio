const express = require('express');
const profileRoutes = express.Router();
const verifyToken = require('../middleware/jwtMiddleware');
const profileController = require('../controllers/profileController');

// Protected route
profileRoutes.post('/profile', verifyToken, (req, res, next) => {
    next();
}, profileController.getProfile);

profileRoutes.post('/profile/update', verifyToken, (req, res, next) => {
    next();
}, profileController.updateProfile);

module.exports = profileRoutes;