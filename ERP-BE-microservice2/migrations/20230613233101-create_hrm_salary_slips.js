'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hrm_salary_slips', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      employeeId: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING,
          references: {
              model: 'main_employees',
              key: 'nip',
          },
      },
      startDate: {
          type: Sequelize.DATE,
      },
      lastDate: {
          type: Sequelize.DATE,
      },
      gajiBersih: {
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
    await queryInterface.dropTable('hrm_salary_slips');
  }
};
