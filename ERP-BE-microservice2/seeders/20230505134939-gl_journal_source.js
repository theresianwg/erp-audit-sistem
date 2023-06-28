'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_journal_sources',
            [
                {
                    id: 1,
                    JS_Modul: 'Aset Tetap',
                    JS_Description: 'Aset Tetap',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    JS_Modul: 'Persediaan',
                    JS_Description: 'Persediaan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    JS_Modul: 'Pembelian',
                    JS_Description: 'Pembelian',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    JS_Modul: 'Penjualan',
                    JS_Description: 'Penjualan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    JS_Modul: 'Kas & Bank',
                    JS_Description: 'Kas & Bank',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    JS_Modul: 'Buku Besar',
                    JS_Description: 'Buku Besar',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    JS_Modul: 'Perusahaan',
                    JS_Description: 'Perusahaan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    JS_Modul: 'Forecasting',
                    JS_Description: 'Forecasting',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    JS_Modul: 'Pajak',
                    JS_Description: 'Pajak',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_journal_sources', null, {});
    },
};
