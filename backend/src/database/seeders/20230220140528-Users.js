'use strict';

/*@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [
     {
      name: 'Breno',
      password: '$2a$10$gkFFM76xlpCn7KP2R.TRy.rqZ3YhjhJP/5Ou8a9OA730PfWmY5y6a', // password: Pass@word3
      tags: 'ansiedade, evolução profissional',
      username: 'EletroCP',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImV4cGlyZUluIjoiMzBkIn0.eyJyb2xlIjoiQURNIn0.ANzOJlVv0dZNm4GuZ8nuKj6CYV-90LQnlPObA9XSq78',
      pronoun: 'Ele/Dele'
     },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};