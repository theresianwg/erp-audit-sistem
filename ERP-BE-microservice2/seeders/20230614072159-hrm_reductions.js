'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hrm_reductions', [
      {
        id: 1,
        name: 'PPh 21',
        type: 'Pajak',
        elementOfType: 'Tetap & Honorer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Asuransi Kesehatan',
        type: 'Asuransi',
        elementOfType: 'Tetap & Honorer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Iuran Pensiun',
        type: 'Pensiun',
        elementOfType: 'Tetap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Asuransi Pendidikan',
        type: 'Asuransi',
        elementOfType: 'Tetap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hrm_reductions', null, {});

  }
};
