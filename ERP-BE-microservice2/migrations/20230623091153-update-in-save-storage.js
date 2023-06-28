'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('in_save_storages', 
      'item_detail_id', {
        type: Sequelize.STRING,
        allowNull: true,
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('in_save_storages', 'item_detail_id');
  }
};
