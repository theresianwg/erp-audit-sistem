'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_departments',
            [
                {
                    id: 1,
                    companyId: 'CMP00001',
                    name: 'Dewan Direksi',
                    description: '',
                    currentNumberOfEmployee: 0,
                    neededNumberOfEmployee: 8,

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    companyId: 'CMP00002',
                    name: 'Riset dan Pengembangan',
                    description:
                        'RnD adalah departemen yang berfokus untuk melakukan pengembangan dan penelitian tentang ekspansi perusahaan dan strategi perusahaan di masa depan',
                    currentNumberOfEmployee: 0,
                    neededNumberOfEmployee: 5,

                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    companyId: 'CMP00003',
                    name: 'Pemasaran',
                    description: '',
                    currentNumberOfEmployee: 0,
                    neededNumberOfEmployee: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    companyId: 'CMP00004',
                    name: 'Gudang & Logistik',
                    description:
                        'Logistics adalah bagian yang bertanggung jawab untuk merencanakan, mengimplementasikan, dan mengendalikan arus barang dan jasa dari pemasok hingga ke konsumen atau pelanggan.',
                    currentNumberOfEmployee: 0,
                    neededNumberOfEmployee: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    companyId: 'CMP00005',
                    name: 'Sumber Daya Manusia',
                    description:
                        'Human Resources adalah departemen yang bertanggung jawab untuk mengelola aspek-aspek yang berkaitan dengan tenaga kerja, karyawan, dan manajemen sumber daya manusia perusahaan secara keseluruhan.',
                    currentNumberOfEmployee: 0,
                    neededNumberOfEmployee: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    companyId: 'CMP00006',
                    name: 'Alat Berat & Pabrik',
                    description: '',
                    currentNumberOfEmployee: 0,
                    neededNumberOfEmployee: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_departments', null, {});
    },
};
