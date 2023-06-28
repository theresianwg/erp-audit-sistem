'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_purchase_order_details',
            [
                {
                    id: 'PO2023040500010001',
                    id_purchase_order: 'PO202304050001',
                    id_item: 'IRM0001',
                    quantity: 10,
                    unit: 'Kg',
                    price: 150000,
                    tax: 15000,
                    total: 165000,
                    budgetStatus: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'PO2023040500010002',
                    id_purchase_order: 'PO202304050001',
                    id_item: 'IRM0002',
                    quantity: 10,
                    unit: 'Kg',
                    price: 120000,
                    tax: 12000,
                    total: 132000,
                    budgetStatus: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'PO2023040500020001',
                    id_purchase_order: 'PO202304050002',
                    id_item: 'IRM0003',
                    quantity: 10,
                    unit: 'Kg',
                    price: 220000,
                    tax: 22000,
                    total: 242000,
                    budgetStatus: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_purchase_order_details', null, {});
    },
};
