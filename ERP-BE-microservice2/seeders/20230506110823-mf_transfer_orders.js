'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_transfer_orders',
            [
                {
                    id: 'TRO20230560895',
                    po_id: 'PDO20230560300',
                    item_id: 'IEP0001',
                    req_qty: 10,
                    to_status: 'Unapproved',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_transfer_orders', null, {});
    },
};
