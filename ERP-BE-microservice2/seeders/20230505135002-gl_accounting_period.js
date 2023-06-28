'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_accounting_periods',
            [
                {
                    id: 1,
                    AP_Name: 'Januari-Desember',
                    AP_Start_Date: new Date('2023-01-01'),
                    AP_End_Date: new Date('2023-12-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    AP_Name: 'Februari-Januari',
                    AP_Start_Date: new Date('2023-02-01'),
                    AP_End_Date: new Date('2024-01-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    AP_Name: 'Maret-Februari',
                    AP_Start_Date: new Date('2023-03-01'),
                    AP_End_Date: new Date('2024-02-29'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    AP_Name: 'April-Maret',
                    AP_Start_Date: new Date('2023-04-01'),
                    AP_End_Date: new Date('2024-03-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    AP_Name: 'Mei-April',
                    AP_Start_Date: new Date('2023-05-01'),
                    AP_End_Date: new Date('2024-04-30'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    AP_Name: 'Juni-Mei',
                    AP_Start_Date: new Date('2023-06-01'),
                    AP_End_Date: new Date('2024-05-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    AP_Name: 'Juli-Juni',
                    AP_Start_Date: new Date('2023-07-01'),
                    AP_End_Date: new Date('2024-06-30'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    AP_Name: 'Agustus-Juli',
                    AP_Start_Date: new Date('2023-08-01'),
                    AP_End_Date: new Date('2024-07-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    AP_Name: 'September-Agustus',
                    AP_Start_Date: new Date('2023-09-01'),
                    AP_End_Date: new Date('2024-08-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 10,
                    AP_Name: 'Oktober-September',
                    AP_Start_Date: new Date('2023-10-01'),
                    AP_End_Date: new Date('2024-09-30'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 11,
                    AP_Name: 'November-Oktober',
                    AP_Start_Date: new Date('2023-11-01'),
                    AP_End_Date: new Date('2024-10-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 12,
                    AP_Name: 'Desember-November',
                    AP_Start_Date: new Date('2023-12-01'),
                    AP_End_Date: new Date('2024-11-31'),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_accounting_periods', null, {});
    },
};
