'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_production_requests',
            [
                {
                    id: 'PDR20230560824',
                    item_id: 'IEP0001',
                    pr_start: '2022-10-12',
                    pr_end: '2022-10-12',
                    pr_qty: 19,
                    pr_status: 'On Progress',
                    so_id: 'SO202304050001',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_production_requests', null, {});
    },
};
