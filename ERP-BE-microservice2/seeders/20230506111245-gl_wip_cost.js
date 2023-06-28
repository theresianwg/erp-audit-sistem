'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_wip_costs',
            [
                {
                    id: 1,
                    WCost_Amount: 81158375,
                    id_accounting_period: 1,
                    po_id: 'PDO20230560300',
                    id_item_category: 2,
                    wc_id: 'WC4111',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_wip_costs', null, {});
    },
};
