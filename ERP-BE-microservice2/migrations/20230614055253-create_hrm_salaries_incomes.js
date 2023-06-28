'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hrm_salaries_incomes', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BIGINT,
        autoIncrement: true,
      },
      ss_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
              model: 'hrm_salary_slips',
              key: 'id',
          },
      },
      income_id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
              model: 'hrm_incomes',
              key: 'id',
          },
      },
      nominal: {
          allowNull: false,
          type: Sequelize.DOUBLE,
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
    await queryInterface.dropTable('hrm_salaries_incomes');
  }
};
