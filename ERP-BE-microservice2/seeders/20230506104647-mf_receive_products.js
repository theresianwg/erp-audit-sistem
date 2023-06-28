'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_receive_products',
            [
                {
                    id: 'RCP20230560863',
                    po_id: 'PDO20230560300',
                    item_id: 'IEP0001',
                    rp_qty: 12,
                    rp_date: '2022-12-10',
                    rp_approval: 'Unapproved',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_receive_products', null, {});
    },
};
