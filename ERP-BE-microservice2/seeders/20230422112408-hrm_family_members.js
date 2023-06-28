'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_family_members',
            [
                {
                    nik: 1,
                    employeeId: 'EMP00001',
                    name: 'Andi',
                    role: 'Anak',
                    gender: 'Laki-laki',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nik: 2,
                    employeeId: 'EMP00001',
                    name: 'Argi',
                    role: 'Anak',
                    gender: 'Laki-laki',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    nik: 3,
                    employeeId: 'EMP00002',
                    name: 'Agus',
                    role: 'Anak',
                    gender: 'Laki-laki',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_family_members', null, {});
    },
};
