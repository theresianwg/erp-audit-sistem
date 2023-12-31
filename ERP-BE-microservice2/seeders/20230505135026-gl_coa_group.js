'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_coa_groups',
            [
                {
                    id: 1,
                    id_account_type: 1,
                    CG_Name: 'Kas & Bank',
                    CG_Code: 1101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    id_account_type: 1,
                    CG_Name: 'Setara Kas',
                    CG_Code: 1102,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    id_account_type: 2,
                    CG_Name: 'Piutang Usaha',
                    CG_Code: 1103,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    id_account_type: 3,
                    CG_Name: 'Persediaan',
                    CG_Code: 1104,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    id_account_type: 4,
                    CG_Name: 'Aset Lancar Lainnya',
                    CG_Code: 1105,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    id_account_type: 5,
                    CG_Name: 'Aset Tetap',
                    CG_Code: 1200,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    id_account_type: 6,
                    CG_Name: 'Akumulasi Depresiasi Aset Tetap',
                    CG_Code: 1200006,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    id_account_type: 8,
                    CG_Name: 'Hutang Usaha',
                    CG_Code: 2101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    id_account_type: 9,
                    CG_Name: 'Kewajiban Jangka Pendek Lainnya',
                    CG_Code: 2102,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 10,
                    id_account_type: 10,
                    CG_Name: 'Hutang Jangka Panjang',
                    CG_Code: 2201,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 11,
                    id_account_type: 11,
                    CG_Name: 'Modal',
                    CG_Code: 3000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 12,
                    id_account_type: 12,
                    CG_Name: 'Pendapatan Operasional',
                    CG_Code: 4000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 13,
                    id_account_type: 12,
                    CG_Name: 'Diskon Penjualan',
                    CG_Code: 4401,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 14,
                    id_account_type: 13,
                    CG_Name: 'Beban Pokok Penjualan',
                    CG_Code: 5101,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 15,
                    id_account_type: 14,
                    CG_Name: 'Beban Operasional',
                    CG_Code: 6000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 16,
                    id_account_type: 16,
                    CG_Name: 'Pendapatan Di luar Usaha',
                    CG_Code: 7100,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 17,
                    id_account_type: 15,
                    CG_Name: 'Beban Di luar Usaha',
                    CG_Code: 7200,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 18,
                    id_account_type: 15,
                    CG_Name: 'Laba/Rugi Terealisasi',
                    CG_Code: 7201,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 19,
                    id_account_type: 15,
                    CG_Name: 'Laba/Rugi Belum Terealisasi',
                    CG_Code: 7202,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            {},
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_coa_groups', null, {});
    },
};
