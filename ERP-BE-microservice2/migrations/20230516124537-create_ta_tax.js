'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, sequelize) {
    await queryInterface.createTable('ta_tax', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: sequelize.STRING,
      },

      tax_type: {
        allowNull: false,
        type: sequelize.STRING
      },
      tax_name: {
        allowNull: false,
        type: sequelize.STRING
      },
      percentage: {
        allowNull: false,
        type: sequelize.FLOAT,
      },

      taxcredentialsid: {
        type: sequelize.STRING,
        allowNull: false,
        references: {
            model: 'ta_tax_credentials',
            key: 'id',
        },
      },

    });
  },

  async down (queryInterface, sequelize) {
    await queryInterface.dropTable('ta_tax');
  }
};
