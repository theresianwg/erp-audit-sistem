'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cogs_activity_based_costing_per_month', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      bulan: {
          type: Sequelize.INTEGER,
          validate: {
              min: 1,
              max: 12,
          },
      },
      target_bruto: {
          type: Sequelize.INTEGER,
      },
      target_neto: {
          type: Sequelize.INTEGER,
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('cogs_activity_based_costing_per_month');
  }
};
