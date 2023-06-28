'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('fa_number_groups', [
            {
                id: 1,
                name: 'Semua Jenis Usaha',
                group_number: '1',
                id_group: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'Pertanian, perkebunan, kehutanan, peternakan, dan perikanan',
                group_number: '2',
                id_group: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: 'Industri makanan dan minuman',
                group_number: '3',
                id_group: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id: 4,
                name: 'Transportasi dan pergudangan',
                group_number: '4',
                id_group: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                name: 'Industri semu konduktor',
                group_number: '5',
                id_group: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                name: 'Jasa Persewaan Peralatan Tambat Air Dalam',
                group_number: '6',
                id_group: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                name: 'Jasa telekomunikasi selular',
                group_number: '7',
                id_group: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 8,
                name: 'Semua jenis usaha',
                group_number: '1',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 9,
                name: 'Pertanian, perkebunan, kehutanan, perikanan',
                group_number: '2',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 10,
                name: 'Industri makanan dan minuman',
                group_number: '3',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 11,
                name: 'Industri mesin',
                group_number: '4',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 12,
                name: 'Perkayuan, kehutanan',
                group_number: '5',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 13,
                name: 'Konstruksi',
                group_number: '6',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 14,
                name: 'Transportasi dan Pergudangan',
                group_number: '7',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 15,
                name: 'Telekomunikasi',
                group_number: '8',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 16,
                name: 'Industri semi konduktor',
                group_number: '9',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 17,
                name: 'Jasa Persewaan Peralatan Tambat Air Dalam',
                group_number: '10',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 18,
                name: 'Jasa Telekomunikasi Seluler',
                group_number: '11',
                id_group: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 19,
                name: 'Pertambangan selain minyak dan gas',
                group_number: '1',
                id_group: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 20,
                name: 'Permintalan, pertenunan dan pencelupan',
                group_number: '2',
                id_group: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 21,
                name: 'Perkayuan',
                group_number: '3',
                id_group: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 22,
                name: 'Industri kimia',
                group_number: '4',
                id_group: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 23,
                name: 'Industri mesin',
                group_number: '5',
                id_group: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 24,
                name: 'Transportasi dan Pergudangan',
                group_number: '6',
                id_group: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 25,
                name: 'Telekomunikasi',
                group_number: '7',
                id_group: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 26,
                name: 'Konstruksi',
                group_number: '1',
                id_group: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 27,
                name: 'Transportasi dan Pergudangan',
                group_number: '2',
                id_group: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('fa_number_groups', null, {});
    },
};
