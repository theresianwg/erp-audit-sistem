'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('in_delayed_production_requests', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      item_id: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.ENUM('waiting', 'done'),
        defaultValue: 'waiting'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('in_delayed_production_requests');
  }
};