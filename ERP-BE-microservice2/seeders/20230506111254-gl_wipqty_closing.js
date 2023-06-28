'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_wipqty_closings',
            [
                {
                    id: 1,
                    Wpqty_unitqty: 12,
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
        await queryInterface.bulkDelete('gl_wipqty_closings', null, {});
    },
};
