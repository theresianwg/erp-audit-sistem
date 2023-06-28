'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_account_types',
            [
                {
                    id: 1,
                    AT_Name: 'Kas & Bank',
                    AT_Code: 'KNB',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    AT_Name: 'Piutang Usaha',
                    AT_Code: 'PU',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    AT_Name: 'Persediaan',
                    AT_Code: 'INV',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    AT_Name: 'Aset Lancar Lainnya',
                    AT_Code: 'AFXA',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    AT_Name: 'Aset Tetap',
                    AT_Code: 'FXA',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    AT_Name: 'Akumulasi Penyusutan',
                    AT_Code: 'DPR',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    AT_Name: 'Aset Lainnya',
                    AT_Code: 'AAS',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    AT_Name: 'Hutang Usaha',
                    AT_Code: 'LCM',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    AT_Name: 'Liabilitas Jangka Pendek',
                    AT_Code: 'LST',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 10,
                    AT_Name: 'Liabilitas Jangka Panjang',
                    AT_Code: 'LLT',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 11,
                    AT_Name: 'Modal',
                    AT_Code: 'BLC',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 12,
                    AT_Name: 'Pendapatan',
                    AT_Code: 'INC',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 13,
                    AT_Name: 'Beban Pokok Penjualan',
                    AT_Code: 'BPP',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 14,
                    AT_Name: 'Beban',
                    AT_Code: 'EQT',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 15,
                    AT_Name: 'Beban Lainnya',
                    AT_Code: 'BLE',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 16,
                    AT_Name: 'Pendapatan Lainnya',
                    AT_Code: 'PLI',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_account_types', null, {});
    },
};
