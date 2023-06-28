'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('cogs_job_order_costing', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      jo_id: {
          type: Sequelize.STRING
      },
      material_cost: {
          type: Sequelize.INTEGER
      },
      machine_cost: {
          type: Sequelize.INTEGER
      },
      man_cost: {
          type: Sequelize.INTEGER
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
    await queryInterface.dropTable('cogs_job_order_costing');
  }
};
