'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('main_permissions', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            name: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT,
            },
            module: {
                type: Sequelize.ENUM(
                    'inventory',
                    'cash_bank',
                    'account_payable',
                    'account_receivable',
                    'manufacturing',
                    'accounting',
                    'taxes',
                    'general_ledger',
                    // tambahkan modul-modul lain jika diperlukan
                ),
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
        await queryInterface.dropTable('main_permissions');
    },
};
