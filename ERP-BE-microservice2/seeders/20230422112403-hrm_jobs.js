'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_jobs',
            [
                {
                    id: 1,
                    reqHRId: 1,
                    name: 'Rekap biaya Bulan Desember',
                    description: '',
                    objective: 'laporan rekap biaya',
                    isDone: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    reqHRId: 2,
                    name: 'Desain Dokumen Periklanan',
                    description: '',
                    objective: 'dokumen periklanan',
                    isDone: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    reqHRId: 2,
                    name: 'Shooting Periklanan',
                    description: '',
                    objective: 'shooting clip iklan',
                    isDone: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    reqHRId: 3,
                    name: 'Review Paper',
                    description: '',
                    objective: 'resume',
                    isDone: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    reqHRId: 1,
                    name: 'Rekap barang dalam gudang',
                    description: '',
                    objective: 'dokumen rekap per hari',
                    isDone: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_jobs', null, {});
    },
};
