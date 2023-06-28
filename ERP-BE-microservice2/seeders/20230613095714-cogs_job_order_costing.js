'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cogs_job_order_costing', [
      {
        id: 1,
        jo_id: 'JO20230570208',
        material_cost: 20000,
        man_cost: 8000,
        machine_cost: 20000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cogs_job_order_costing', null, {}); 
  }
};
