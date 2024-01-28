const sequelize = require('./dbInit');

const dbAuth = async() => {
    //Try authenticating postgress
    return await sequelize.authenticate();
}

module.exports = dbAuth;