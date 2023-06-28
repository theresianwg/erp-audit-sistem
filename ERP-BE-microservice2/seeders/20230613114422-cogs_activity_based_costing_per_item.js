'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cogs_activity_based_costing_per_item', [
      {
        id: 1,
        abc_per_month_id: 1,
        po_id: 'PDO20230560300',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cogs_activity_based_costing_per_item', null, {});
  }
};
