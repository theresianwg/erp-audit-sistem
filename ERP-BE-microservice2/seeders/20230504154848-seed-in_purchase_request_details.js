'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_purchase_request_details',
            [
                {
                    id: 'PR2023040500010001',
                    id_purchase_request: 'PR202304050001',
                    id_item: 'IRM0001',
                    quantity: 10,
                    ordered: false,
                    budgetStatus: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'PR2023040500010002',
                    id_purchase_request: 'PR202304050001',
                    id_item: 'IRM0002',
                    quantity: 10,
                    ordered: false,
                    budgetStatus: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'PR2023040500010003',
                    id_purchase_request: 'PR202304050001',
                    id_item: 'IRM0003',
                    quantity: 10,
                    ordered: false,
                    budgetStatus: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(
            'in_purchase_request_details',
            null,
            {},
        );
    },
};
