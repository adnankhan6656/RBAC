'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Permisssions', [
      { action: 'read', resource: 'user', createdAt: new Date(),
      updatedAt: new Date() },
      { action: 'write', resource: 'user', createdAt: new Date(),
      updatedAt: new Date() },
      { action: 'delete', resource: 'user', createdAt: new Date(),
      updatedAt: new Date() },
      { action: 'read', resource: 'post', createdAt: new Date(),
      updatedAt: new Date() },
      { action: 'write', resource: 'post', createdAt: new Date(),
      updatedAt: new Date() },
      { action: 'delete', resource: 'post', createdAt: new Date(),
      updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Permisssions', null, {});
  }
};
