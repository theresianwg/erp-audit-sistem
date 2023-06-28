'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('fa_asset_transfers', 'old_address', {
            type: Sequelize.STRING,
            allowNull: true,
        });
        await queryInterface.addColumn('fa_asset_transfers', 'old_department', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('fa_asset_transfers', 'old_address');
        await queryInterface.removeColumn(
            'fa_asset_transfers',
            'old_department',
        );
    },
};
