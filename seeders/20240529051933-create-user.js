'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'Adnankhan',email:'pathanadnan160@gmail.com', password: 'adanan@123', createdAt: new Date(),
      updatedAt: new Date()},
      { name: 'Manan',email:'manan123@gmail.com', password: 'manan@123', createdAt: new Date(),
      updatedAt: new Date()}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
