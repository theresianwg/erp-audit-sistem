'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cogs_activity_based_costing_per_month', [
      {
        id: 1,
        bulan: 6,
        target_bruto: 25000000,
        target_neto: 10000000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cogs_activity_based_costing_per_month', null, {});
  }
};
