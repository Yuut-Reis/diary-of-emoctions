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
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'password'
      },
      role: {
        allowNull: false,
        field: 'role',
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
