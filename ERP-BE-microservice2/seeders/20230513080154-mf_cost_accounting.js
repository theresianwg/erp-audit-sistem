'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_cost_accountings',
            [
                {
                    id: 'CA001',
                    po_id: 'PDO20230560300',
                    item_id: 'IEP0001',
                    item_total: 10,
                    total_cost: 1700000,
                    total_cost_each: 170000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_cost_accountings', null, {});
    },
};
