'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, sequelize) {
    await queryInterface.createTable('ta_tax_credentials', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize.STRING,
      },

      tgl_pengukuhan_ptkp: {
        allowNull: false,
        type: sequelize.DATE,
      },

      no_pengukuhan_ptkp: {
        allowNull: false,
        type: sequelize.STRING,
      },

      NPWP: {
        allowNull: false,
        type: sequelize.STRING,
      },

      KLU: {
        allowNull: true,
        type: sequelize.STRING,
      },

      companyId: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: 'main_companies',
            key: 'id',
        },
      },
    })
  },

  async down (queryInterface, sequelize) {
    await queryInterface.dropTable('ta_tax_credentials');
  }
};
