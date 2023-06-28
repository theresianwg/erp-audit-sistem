'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('gl_numberings', 
     { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Numbering_Name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      Numbering_Type:{
        type: Sequelize.ENUM('Tidak Reset', 'Reset Setiap Hari', 'Reset Setiap Bulan', 'Reset Setiap Tahun'),
        allowNull: false,
        defaultValue: 'Reset Setiap Bulan',
      },
      Numbering_Digit_Counter:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      Numbering_Component:{
        type: Sequelize.STRING,
      },
      Numbering_Active:{
        type: Sequelize.BOOLEAN,
        defaultValue:true,
      },
      id_transaction_type:{
        type: Sequelize. INTEGER,
        allowNull:false,
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
    await queryInterface.dropTable('gl_numberings');
  }
};
