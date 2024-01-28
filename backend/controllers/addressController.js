const { success } = require("../helpers/response");
const Model  = require('../models/');
const { getId } = require('../helpers/userHelper');
const { error } = require("../validations/authValidator");

exports.addAddress = async (request, response) => {
    const id = getId(request).id;

    const addressModel = new Model.Address();
    addressModel.set({...request.body, ...{user_id: id}})
                .save();

    const user = await Model.User.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: Model.Address,
                as: 'address'
            }
        ],
        attributes: {exclude: ['password']},
    });

    if (user) {
        response.send(success("Address", {user}, 200));
        return;
    }
    
    response.send(error("Address Not Found", 201));
};

exports.deleteAddress = async (request, response) => {
    const address = await Model.Address.destroy({
        where: {
            id: request.params.id
        }
    });

    const id = getId(request).id;

    const user = await Model.User.findOne({
        where: {id},
        include: [
            {
                model: Model.Address,
                as: 'address'
            }
        ],
        attributes: {exclude: ['password', 'id']},
    });

    if (address) {
        response.send(success("Address Deleted", {user}, 200));
        return;
    }

    response.send(error("Address can't be deletet", 201));
}