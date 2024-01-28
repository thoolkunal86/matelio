const Joi = require('joi');

const userLoginValidator = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
});

module.exports = userLoginValidator;