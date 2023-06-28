'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hrm_incomes', [
      {
        id: 1,
        name: 'Gaji Pokok',
        type: 'Gaji Pokok',
        elementOfType: 'Tetap & Honorer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Tunjangan Konsumsi',
        type: 'Tunjangan Lain',
        elementOfType: 'Tetap & Honorer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Tunjangan Transportasi',
        type: 'Tunjangan Lain',
        elementOfType: 'Tetap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Tunjangan BPJS',
        type: 'Tunjangan Lain',
        elementOfType: 'Tetap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Lembur',
        type: 'Imbalan Lain',
        elementOfType: 'Tetap',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Uang THR',
        type: 'Bonus',
        elementOfType: 'Tetap & Honorer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hrm_incomes', null, {});
  }
};
