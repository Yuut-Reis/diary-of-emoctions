'use strict';

/*@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('posts', [
     {
      id: 1,
      user_id: 1,
      text: 'Um relacionamento é composto por pisicológico, um pisico e outro lógico',
      img: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/47ab715966644350f773ba0cd0faa523.jpg',
      title: 'Pisicológico'
     },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('posts', null, {});
  }
};