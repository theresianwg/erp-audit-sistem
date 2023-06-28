'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('hrm_incomes', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name: {
          allowNull: false,
          type: Sequelize.STRING,
      },
      type: {
          allowNull: false,
          type: Sequelize.ENUM('Gaji Pokok', 'Tunjangan PPh', 'Tunjangan Lain', 'Imbalan Lain', 'Premi Asuransi', 'Natura', 'Bonus'),
      },
      elementOfType: {
          allowNull: false,
          type: Sequelize.ENUM('Tetap', 'Honorer', 'Tetap & Honorer'),   
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
    await queryInterface.dropTable('hrm_incomes');
  }
};
