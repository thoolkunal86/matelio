const express = require("express");
const router = express.Router();
const { success, validation } = require('../helpers/response');
const userLoginValidator = require('../validations/authValidator');
const { refteshTokenController, authController } = require("../controllers/authController");

// About page route.
router.post("/login", function (req, res, next) {
    const { error, value } = userLoginValidator.validate(
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
  
}, authController);


router.get("/refresh-token/:token", function (req, res, next) {
   
    next();
  
}, refteshTokenController);

module.exports = router;