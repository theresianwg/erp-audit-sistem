'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('fa_asset_disposals', {
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
                type: Sequelize.STRING,
            },
            disposal_reason: {
                type: Sequelize.STRING,
            },
            disposal_date: {
                type: Sequelize.DATE,
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
        await queryInterface.dropTable('fa_asset_disposals');
    },
};
