'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_purchase_orders',
            [
                {
                    id: 'PO202304050001',
                    id_purchase_request: 'PR202304050001',
                    id_supplier: 'SU0001',
                    total_price: 270000,
                    total_tax: 29700,
                    total_price_tax: 299700,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'PO202304050002',
                    id_purchase_request: 'PR202304050001',
                    id_supplier: 'SU0002',
                    total_price: 220000,
                    total_tax: 24200,
                    total_price_tax: 244200,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_purchase_orders', null, {});
    },
};
