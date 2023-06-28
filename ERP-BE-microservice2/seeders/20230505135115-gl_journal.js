'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_journals',
            [
                {
                    id: 1,
                    Journal_Code: 'JV-2023-06-00001',
                    Journal_Ref: '110102-2023-06.00001',
                    Journal_Post_Date: new Date("2023-06-14"),
                    Journal_Notes: "Pembayaran Beban Telekomunikasi",
                    Journal_Amount: 1000000,
                    id_accounting_period: 1,
                    id_numbering: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    Journal_Code: 'JV-2023-06-00002',
                    Journal_Ref: 'JV-2023-06-00002',
                    Journal_Post_Date: new Date("2023-06-15"),
                    Journal_Notes: "Saldo Awal akun Diskon Penjualan IDR",
                    Journal_Amount: 9000000,
                    id_accounting_period: 1,
                    id_numbering: 13,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_journals', null, {});
    },
};
