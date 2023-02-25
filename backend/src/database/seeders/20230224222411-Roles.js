'use strict';

/*@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('roles', [
     {
      id: 1,
      user_id: 1,
      role: 'ADM',
     },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('roles', null, {});
  }
};