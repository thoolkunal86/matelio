const Joi = require('joi');
const moment = require('moment');


const profileValidator = Joi.object({
    fName: Joi.string().min(2).max(50).required("Please provide first name."),
    lName: Joi.string().min(2).max(50).required("Please provide last name."),
    email: Joi.string().email().required("Please provide email."),
    gender: Joi.string().required("Please provide gender."),
    phone: Joi.string().required("Please provide Phone Number."),
    dob: Joi
    .date()
    .max(moment().subtract(18, 'years'))
    .required("Date of birth is required.")
});


module.exports = profileValidator;