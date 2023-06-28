'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_production_orders',
            [
                {
                    id: 'PDO20230560300',
                    pr_id: 'PDR20230560824',
                    item_id: 'IEP0001',
                    po_qty: 19,
                    po_start: '2022-10-12',
                    po_end: '2022-10-12',
                    po_status: 'On Progress',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_production_orders', null, {});
    },
};
