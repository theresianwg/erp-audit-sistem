'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hrm_salaries_reductions', [
      {
        id: 1,
        ss_id: 1,
        reduction_id: 1,
        nominal: 250000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        ss_id: 1,
        reduction_id: 2,
        nominal: 500000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hrm_salaries_reductions', null, {});

  }
};
