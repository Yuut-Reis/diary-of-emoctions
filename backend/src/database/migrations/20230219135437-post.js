'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
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
      text: {
        allowNull: false,
        field: 'text',
        type: Sequelize.STRING,
      },
      img: {
        allowNull: true,
        field: 'img',
        type: Sequelize.STRING,
      },
      title: {
        allowNull: false,
        field: 'title',
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('posts');
  }
};
