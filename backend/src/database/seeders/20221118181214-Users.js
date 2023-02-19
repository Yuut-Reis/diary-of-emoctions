'use strict';

/*@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
     {
      username: 'Breno',
      password: '$2a$10$gkFFM76xlpCn7KP2R.TRy.rqZ3YhjhJP/5Ou8a9OA730PfWmY5y6a', // password: Pass@word3
      role: "ADM",
      tags: "ansiedade, evolução profissional",
     },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};