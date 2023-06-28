'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('fa_assets', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            id_category: {
                type: Sequelize.STRING,
            },
            id_supplier: {
                type: Sequelize.STRING,
            },
            asset_type: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            department: {
                type: Sequelize.STRING,
            },
            age_of_asset: {
                type: Sequelize.INTEGER,
            },
            purchase_date: {
                type: Sequelize.DATE,
            },
            price: {
                type: Sequelize.INTEGER,
            },
            asset_account: {
                type: Sequelize.STRING,
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            residual_value: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.TEXT,
            },
            id_fiscal_type: {
                type: Sequelize.STRING,
            },
            status: {
                allowNull: true,
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('fa_assets');
    },
};
