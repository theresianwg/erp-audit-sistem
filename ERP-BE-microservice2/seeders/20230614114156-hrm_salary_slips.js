'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hrm_salary_slips', [
      {
        id: 1,
        employeeId: "EMP00001",
        startDate: "2023-01-01 00:00:00",
        lastDate: "2023-01-31 00:00:00",
        gajiBersih: 19250000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hrm_salary_slips', null, {});

  }
};
