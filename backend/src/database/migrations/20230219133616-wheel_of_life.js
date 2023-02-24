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
      user_id: {
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
        type: Sequelize.INTEGER,
        field: 'financas'
      },
      amor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'amor'
      },
      equilibrio: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'equilibrio'
      },
      espiritualidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'espiritualidade'
      },
      saude: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'saude'
      },
      familia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'familia'
      },
      vida_social: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'vida_social'
      },
      amor_proprio: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'amor_proprio'
      },
      proposito: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'proposito'
      },
      resignificacao_trauma: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'resignificacao_trauma'
      },
      contribuicao_para_humanidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'contribuicao_para_humanidade'
      },
      produtividade: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
