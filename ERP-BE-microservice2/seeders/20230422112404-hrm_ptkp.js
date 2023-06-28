'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_ptkps',
            [
                {
                    id: 1,
                    description: 'Tidak Kawin Tanpa Tanggungan',
                    status: 'TK 0',
                    amount: 54000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    description: 'Tidak Kawin 1 Tanggungan',
                    status: 'TK 1',
                    amount: 58500000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    description: 'Tidak Kawin 2 Tanggungan',
                    status: 'TK 2',
                    amount: 63000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    description: 'Tidak Kawin 3 Tanggungan',
                    status: 'TK 3',
                    amount: 67500000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    description: 'Kawin Tanpa Tanggungan',
                    status: 'K 0',
                    amount: 58500000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    description: 'Kawin 1 Tanggungan',
                    status: 'K 1',
                    amount: 63000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    description: 'Kawin 2 Tanggungan',
                    status: 'K 2',
                    amount: 67500000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    description: 'Kawin 3 Tanggungan',
                    status: 'K 3',
                    amount: 72000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    description:
                        'Kawin Penghasilan Istri Digabung dengan Suami Tanpa Tanggungan',
                    status: 'K/I/0',
                    amount: 112500000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 10,
                    description:
                        'Kawin Penghasilan Istri Digabung dengan Suami 1 Tanggungan',
                    status: 'K/I/1',
                    amount: 117000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 11,
                    description:
                        'Kawin Penghasilan Istri Digabung dengan Suami 2 Tanggungan',
                    status: 'K/I/2',
                    amount: 121500000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 12,
                    description:
                        'Kawin Penghasilan Istri Digabung dengan Suami 3 Tanggungan',
                    status: 'K/I/3',
                    amount: 126000000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_ptkps', null, {});
    },
};
