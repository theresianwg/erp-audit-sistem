'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_closing_balances',
            [
                {
                    id: 1,
                    id_coa: 2,
                    id_accounting_period: 1,
                    CB_Balance: 200081000,
                    CB_Date: new Date('2012-12-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    id_coa: 5,
                    id_accounting_period: 1,
                    CB_Balance: 143781000,
                    CB_Date: new Date('2012-12-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    id_coa: 2,
                    id_accounting_period: 2,
                    CB_Balance: 268000000,
                    CB_Date: new Date('2013-01-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    id_coa: 5,
                    id_accounting_period: 2,
                    CB_Balance: 46340000,
                    CB_Date: new Date('2013-01-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    id_coa: 2,
                    id_accounting_period: 3,
                    CB_Balance: 86620000,
                    CB_Date: new Date('2013-02-28'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    id_coa: 5,
                    id_accounting_period: 3,
                    CB_Balance: 116240000,
                    CB_Date: new Date('2013-02-28'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_closing_balances', null, {});
    },
};
