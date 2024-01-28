'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Address, {sourceKey: 'id', foreignKey: 'user_id', as: 'address'});
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    phone: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.ENUM('Male', 'Female', 'Other') 
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};