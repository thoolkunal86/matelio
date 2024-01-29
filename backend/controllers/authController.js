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

exports.authController = async (request, response) => {
    const user = await Model.User.findOne({
        where: {
            email: request.body.email
        }
    });
    
    const isValid = await validateUser(user.password, request.body.password);

    if (isValid == true && user) {
        const payload = { id: user.id, email: user.email };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { 
                expiresIn: "30d"
            }
        );
        response.send(success("Login Success", {token,refreshToken}, 200));
        return;
    }
    
    response.send(validation([]));
}

exports.refteshTokenController = async (request, response) => {
    const token = request.params.token;
    if (!token) return response.status(500).json({ error: 'Access denied' });
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const payload = { id: decoded.id, email: decoded.email };
            const newtoken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1s' });
            const refreshToken = jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { 
                    expiresIn: "30d"
                }
            );
            response.send({token: newtoken,refreshToken}, 200);
            return;
    } catch (error) {
        response.status(500).json({ error: 'Invalid token' });
    }
}

