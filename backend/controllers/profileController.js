const { success } = require("../helpers/response");
const Model  = require('../models/');
const { getId } = require('../helpers/userHelper');
const { error } = require("../validations/authValidator");

exports.getProfile = async (request, response) => {
    const email = getId(request).email;

    const user = await Model.User.findOne({
        where: {
            email: email
        },
        include: [
            {
                model: Model.Address,
                as: 'address'
            }
        ],
        attributes: {exclude: ['password', 'id']},
    });

    if (user) {
        response.send(success("Profile", {user}, 200));
        return;
    }
    
    response.send(error("Profile Not Found", 201));
}

exports.updateProfile = async (request, response) => {
    const id = getId(request).id;
    const req = request.body;
    
    const user = await Model.User.findOne({
        where: {
            id
        },
        attributes: {exclude: ['password']},
    });

    user.set({...user, ...req});
    user.save();

    response.send(success("Profile Updated", {user}, 200));
}