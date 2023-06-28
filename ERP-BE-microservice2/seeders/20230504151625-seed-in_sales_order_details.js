'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_sales_order_details',
            [
                {
                    id: 'SO2023040500010001',
                    id_sales_order: 'SO202304050001',
                    id_item: 'IEP0001',
                    quantity: 10,
                    price: 3800000,
                    tax: 380000,
                    total: 4180000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'SO2023040500010002',
                    id_sales_order: 'SO202304050001',
                    id_item: 'IEP0002',
                    quantity: 10,
                    price: 3200000,
                    tax: 320000,
                    total: 3520000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_sales_order_details', null, {});
    },
};
