'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_wip_cost_closings',
            [
                {
                    id: 1,
                    WCostClosing_DirectLabour: 0,
                    WCostClosing_Overhead: 0,
                    WCostClosing_PrevCost: 0,
                    WCostClosing_RawMaterial: 0,
                    WCostClosing_EndProduct: 81158375,
                    id_accounting_period: 1,
                    po_id: 'PDO20230560300',
                    wc_id: 'WC4111',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_wip_cost_closings', null, {});
    },
};
