'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Userroles', [
      { user_id: 1, role_id: 1,createdAt: new Date(),   updatedAt: new Date() }, // Admin user
      { user_id: 2, role_id: 2,createdAt: new Date(),   updatedAt: new Date() }  // Regular user
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Userroles', null, {});
  }
};
