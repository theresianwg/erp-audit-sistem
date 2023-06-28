'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'fa_categories',
            [
                {
                    id: 'CA001',
                    name: 'Kendaraan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CA002',
                    name: 'Bangunan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CA003',
                    name: 'Tanah',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CA004',
                    name: 'Mesin',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('fa_categories', null, {});
    },
};
