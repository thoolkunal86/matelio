const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { success, validation } = require('../helpers/response');
const Model  = require('../models/');

const  validateUser = async (hash, password) => {
    return await bcrypt
      .compare(password, hash)
      .then(res => {
        return res;
    });
}

const authController = async (request, response) => {
    const user = await Model.User.findOne({
        where: {
            email: request.body.email
        }
    });
    
    const isValid = await validateUser(user.password, request.body.password);

    if (isValid == true && user) {
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        response.send(success("Login Success", {token}, 200));
        return;
    }
    
    response.send(validation([]));
}

module.exports = authController;


