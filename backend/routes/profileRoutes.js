const express = require('express');
const profileRoutes = express.Router();
const verifyToken = require('../middleware/jwtMiddleware');
const profileController = require('../controllers/profileController');
const profileValidator = require('../validations/profileValidator');
const { validation } = require('../helpers/response');

// Protected route
profileRoutes.post('/profile', verifyToken, (req, res, next) => {
    next();
}, profileController.getProfile);

profileRoutes.post('/profile/update', verifyToken, (req, res, next) => {
    const { error, value } = profileValidator.validate(
        req.body,
        {
            abortEarly: false,
        }
    );

    if (error) {
        res.send(validation(error));
        return;
    }

    next();

}, profileController.updateProfile);

module.exports = profileRoutes;