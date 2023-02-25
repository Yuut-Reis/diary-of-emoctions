'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'name'
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'username',
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'password'
      },
      token: {
        allowNull: false,
        field: 'token',
        type: Sequelize.STRING,
      },
      pronoun: {
        allowNull: false,
        field: 'pronoun',
        type: Sequelize.STRING,
      },
      tags: {
        allowNull: true,
        field: 'tags',
        type: Sequelize.STRING,
      }
    },
    {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
