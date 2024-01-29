const express = require('express');
const addressRoutes = express.Router();
const verifyToken = require('../middleware/jwtMiddleware');
const { addAddress, deleteAddress } = require('../controllers/addressController');
const addressValidation = require('../validations/addressValidation');
const { validation } = require('../helpers/response');

// Protected route
addressRoutes.post('/address/add', verifyToken, (req, res, next) => {
    const { error, value } = addressValidation.validate(
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
}, addAddress);

addressRoutes.get('/address/delete/:id', verifyToken, (req, res, next) => {
    next();
}, deleteAddress);

module.exports = addressRoutes;