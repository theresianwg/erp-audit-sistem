'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('main_permissions', [
            // Inventory
            {
                id: 'PRM00001',
                name: 'View Inventory',
                description: 'Permission to view inventory data',
                module: 'inventory',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'PRM00002',
                name: 'Manage Inventory',
                description: 'Permission to manage inventory data',
                module: 'inventory',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // Account Payable
            {
                id: 'PRM00003',
                name: 'View Account Payable',
                description: 'Permission to view account payable data',
                module: 'account_payable',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'PRM00004',
                name: 'Manage Account Payable',
                description: 'Permission to manage account payable data',
                module: 'account_payable',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // Account Receivable
            {
                id: 'PRM00005',
                name: 'View Account Receivable',
                description: 'Permission to view account receivable data',
                module: 'account_receivable',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'PRM00006',
                name: 'Manage Account Receivable',
                description: 'Permission to manage account receivable data',
                module: 'account_receivable',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // Cash Bank
            {
                id: 'PRM00007',
                name: 'View Cash Bank',
                description: 'Permission to view cash bank data',
                module: 'cash_bank',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'PRM00008',
                name: 'Manage Cash Bank',
                description: 'Permission to manage cash bank data',
                module: 'cash_bank',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            // ...
            // Tambahkan permission lain sesuai dengan kebutuhan
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('main_permissions', null, {});
    },
};
