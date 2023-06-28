'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('fa_asset_depreciations', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_asset: {
                type: Sequelize.STRING,
            },
            year: {
                type: Sequelize.INTEGER,
            },
            annual_depreciation: {
                type: Sequelize.FLOAT,
            },
            monthly_depreciation: {
                type: Sequelize.FLOAT,
            },
            accumulated_depreciation: {
                type: Sequelize.FLOAT,
            },
            book_value: {
                type: Sequelize.FLOAT,
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('fa_asset_depreciations');
    },
};
