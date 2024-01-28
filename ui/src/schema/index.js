import * as Yup from "yup";

const dateCurr = new Date();

export const profileVaidation = Yup.object({
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


export const addressValidation = Yup.object({
    street: Yup.string().min(2).max(50).required("Please provide street name."),
    city: Yup.string().min(2).max(50).required("Please provide city name."),
    state: Yup.string().min(2).max(50).required("Please provide State name."),
    postalcode: Yup
            .string()
            .required("Please provide State name.")
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(7, "Must be exactly 7 digits")
            .max(7, "Must be exactly 7 digits"),
    country: Yup.string().required("Please provide country name.")

});