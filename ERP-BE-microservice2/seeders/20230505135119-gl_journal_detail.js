'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_journal_details',
            [
                {
                    id: 1,
                    id_coa: 49,
                    id_journal: 1,
                    JD_Credit: 0,
                    JD_Credit_Curr: 0,
                    JD_Debit: 1000000,
                    JD_Debit_Curr: 1000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    id_coa: 2,
                    id_journal: 1,
                    JD_Credit: 1000000,
                    JD_Credit_Curr: 1000000,
                    JD_Debit: 0,
                    JD_Debit_Curr: 0,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    id_coa: 29,
                    id_journal: 2,
                    JD_Credit: 0,
                    JD_Credit_Curr: 0,
                    JD_Debit: 9000000,
                    JD_Debit_Curr: 9000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    id_coa: 36,
                    id_journal: 2,
                    JD_Credit: 9000000,
                    JD_Credit_Curr: 9000000,
                    JD_Debit: 0,
                    JD_Debit_Curr: 0,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_journal_details', null, {});
    },
};
