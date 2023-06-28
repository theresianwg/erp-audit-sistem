'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_wip_transfers',
            [
                {
                    id: 1,
                    WTransfer_Cost: 380000,
                    WTransfer_qty: 10,
                    WTransfer_PoNumberCredit: '4000-1234-5678-9010',
                    WTransfer_PoNumberDebit: '4001-1234-5678-9010',
                    WTransfer_WorkCenterCredit: '4002-1234-5678-9010',
                    WTransfer_WorkCenterDebit: '4003-1234-5678-9010',
                    WTransfer_Date: '2022-10-12',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_wip_transfers', null, {});
    },
};
