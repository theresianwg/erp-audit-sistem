'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_purchase_requests',
            [
                {
                    id: 'PR202304050001',
                    est_total_price: 1000000,
                    est_total_tax: 110000,
                    est_total_price_tax: 1110000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_purchase_requests', null, {});
    },
};
