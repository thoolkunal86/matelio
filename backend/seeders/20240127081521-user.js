'use strict';

const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
    const crypt = await bcrypt
    .genSalt(10)
    .then(salt => {
      return bcrypt.hash('admin', salt)
    })
    .then(hash => {
      console.log(hash);
      return hash;
      
    })
    .catch(err => console.error(err.message))
    
    await queryInterface.bulkInsert('Users', [{
      email: 'kunal@gmail.com',
      password: crypt,
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
