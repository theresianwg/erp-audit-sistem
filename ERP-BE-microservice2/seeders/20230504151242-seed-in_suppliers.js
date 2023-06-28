'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_suppliers',
            [
                {
                    id: 'SU0001',
                    name: 'UD. Utama Jaya',
                    address: 'Jl. Kedung Cowek no 66',
                    phone: '08123456789',
                    email: 'utama jaya@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'SU0002',
                    name: 'PT. Jaya Sekali',
                    address: 'Jl. Kedung Doro no 88',
                    phone: '08123456789',
                    email: 'jayasekali@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'SU0003',
                    name: 'PT. Abadi Mulia',
                    address: 'Jl. Wonokromo no 99',
                    phone: '08123456789',
                    email: 'abadimulia@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'SU0004',
                    name: 'PT. Jaya Abadi',
                    address: 'Jl. Kedung Doro no 88',
                    phone: '08123456789',
                    email: 'jayaabadi@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'SU0005',
                    name: 'PT. Sedia Kala',
                    address: 'Jl. Kedung Doro no 88',
                    phone: '08123456789',
                    email: 'sediakala@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'SU0006',
                    name: 'PT. Sejahtera Bersama',
                    address: 'Jl. Kedung Doro no 88',
                    phone: '08123456789',
                    email: 'sejahterabersama@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_suppliers', null, {});
    },
};
