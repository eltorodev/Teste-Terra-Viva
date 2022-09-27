'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('flowers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      availability: {
        type: Sequelize.STRING,
      },

      basic_care: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  },
}
