'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wheel_of_life', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      financas: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'financas'
      },
      amor: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'amor'
      },
      equilibrio: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'equilibrio'
      },
      espiritualidade: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'espiritualidade'
      },
      saude: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'saude'
      },
      familia: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'familia'
      },
      vidaSocial: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'vida_social'
      },
      amorProprio: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'amor_proprio'
      },
      proposito: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'proposito'
      },
      resignificacaoTrauma: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'resignificacao_trauma'
      },
      contribuicaoParaHumanidade: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'contribuicao_para_humanidade'
      },
      produtividade: {
        allowNull: false,
        type: Sequelize.NUMBER,
        field: 'produtividade'
      },
    },
    {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('wheel_of_life');
  }
};
