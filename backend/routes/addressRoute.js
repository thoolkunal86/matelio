const express = require('express');
const addressRoutes = express.Router();
const verifyToken = require('../middleware/jwtMiddleware');
const { addAddress, deleteAddress } = require('../controllers/addressController');

// Protected route
addressRoutes.post('/address/add', verifyToken, (req, res, next) => {
    next();
}, addAddress);

addressRoutes.get('/address/delete/:id', verifyToken, (req, res, next) => {
    next();
}, deleteAddress);

module.exports = addressRoutes;