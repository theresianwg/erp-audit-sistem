'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hrm_salaries_incomes', [
      {
        id: 1,
        ss_id: 1,
        income_id: 1,
        nominal: 10000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        ss_id: 1,
        income_id: 2,
        nominal: 2000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        ss_id: 1,
        income_id: 3,
        nominal: 2000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        ss_id: 1,
        income_id: 4,
        nominal: 2000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        ss_id: 1,
        income_id: 6,
        nominal: 2000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hrm_salaries_incomes', null, {});
  }
};
