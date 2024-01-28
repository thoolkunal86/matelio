const Joi = require('joi');

const profileValidator = Joi.object({
    fName: Yup.string().min(2).max(50).required("Please provide first name."),
    lName: Yup.string().min(2).max(50).required("Please provide last name."),
    email: Yup.string().email().required("Please provide email."),
    gender: Yup.string().required("Please provide gender."),
    phone: Yup.string().required("Please provide Phone Number."),
    dob: Yup
    .date()
    .required("Date of birth is required.")
    .test(
        "dob",
        "You should be 18 years old.",
        (date) => (dateCurr.getFullYear() - date.getFullYear()) >= 18
      ),

});

module.exports = profileValidator;