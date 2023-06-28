'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('fa_asset_stock_takes', 'name', {
            type: Sequelize.STRING,
            allowNull: true,
        });
        await queryInterface.changeColumn('fa_asset_stock_takes', 'condition', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn('fa_asset_stock_takes', 'name', {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
        await queryInterface.changeColumn('fa_asset_stock_takes', 'condition', {
            type: Sequelize.INTEGER,
            allowNull: false,
        });
    },
};
