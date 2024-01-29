const Joi = require('joi');

const addressValidation = Joi.object({
    street: Joi.string().min(2).max(50).required("Please provide street name."),
    city: Joi.string().min(2).max(50).required("Please provide city name."),
    state: Joi.string().min(2).max(50).required("Please provide State name."),
    postalcode: Joi
            .string()
            .min(7)
            .max(7)
            .required("Please provide State name.")
            .regex(/^[0-9]+$/)
            .messages({
                "string.pattern.base": "Invalid postal code",
              }),
            
    country: Joi.string().required("Please provide country name.")
});

module.exports = addressValidation;

