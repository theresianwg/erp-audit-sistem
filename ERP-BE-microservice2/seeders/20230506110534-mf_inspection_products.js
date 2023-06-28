'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_inspection_products',
            [
                {
                    id: 'ISP20230560706',
                    rp_id: 'RCP20230560863',
                    item_id: 'IRM0001',
                    ip_entry_date: '2022-12-10',
                    ip_qty: 90,
                    ip_result: 'Good',
                    ip_qty_reject: 1,
                    ip_approval: 'Unapproved',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_inspection_products', null, {});
    },
};
