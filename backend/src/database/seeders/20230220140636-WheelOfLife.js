'use strict';

/*@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('wheel_of_life', [
     {
      id: 1,
      user_id: 1,
      financas: 0,
      amor: 0,
      equilibrio: 0,
      espiritualidade: 0,
      saude: 0,
      familia: 0,
      vida_social: 0,
      amor_proprio: 0,
      proposito: 0,
      resignificacao_trauma: 0,
      contribuicao_para_humanidade: 0,
      produtividade: 0,
     },

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('wheel_of_life', null, {});
  }
};