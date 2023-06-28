'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_sales_orders',
            [
                {
                    id: 'SO202304050001',
                    id_customer: 'CU0001',
                    total_price: 7000000,
                    total_tax: 700000,
                    total_price_tax: 7700000,
                    payment_type: 'cash', // cash / dp_money / dp_percent
                    dp_percentage: 0, // contoh : 30 (ini integer anggapnya 30%)
                    dp_amount: 0, // contoh : 2100000 (ini float anggapnya 2.100.000)
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'SO202304050002',
                    id_customer: 'CU0001',
                    total_price: 7000000,
                    total_tax: 700000,
                    total_price_tax: 7700000,
                    payment_type: 'dp_percent', // cash / dp_money / dp_percent
                    dp_percentage: 30, // contoh : 30 (ini integer anggapnya 30%)
                    dp_amount: 2310000, // contoh : 2100000 (ini float anggapnya 2.100.000)
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_sales_orders', null, {});
    },
};
