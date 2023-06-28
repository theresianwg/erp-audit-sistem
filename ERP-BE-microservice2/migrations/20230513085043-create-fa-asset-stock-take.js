'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('fa_asset_stock_takes', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_asset: {
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.INTEGER,
            },
            condition: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.TEXT,
            },
            status: {
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
        await queryInterface.dropTable('fa_asset_stock_takes');
    },
};
