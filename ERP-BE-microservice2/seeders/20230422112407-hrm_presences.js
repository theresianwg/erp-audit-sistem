'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_presences',
            [
                {
                    id: 1,
                    employeeId: 'EMP00001',
                    scheduleId: 1,
                    presence: 'Hadir',
                    meetingNumber: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    employeeId: 'EMP00001',
                    scheduleId: 2,
                    presence: 'Hadir',
                    meetingNumber: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    employeeId: 'EMP00002',
                    scheduleId: 2,
                    presence: 'Izin',
                    meetingNumber: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    employeeId: 'EMP00001',
                    scheduleId: 4,
                    presence: 'Hadir',
                    meetingNumber: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    employeeId: 'EMP00002',
                    scheduleId: 4,
                    presence: 'Hadir',
                    meetingNumber: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    employeeId: 'EMP00001',
                    scheduleId: 5,
                    presence: 'Izin',
                    meetingNumber: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 7,
                    employeeId: 'EMP00002',
                    scheduleId: 5,
                    presence: 'Hadir',
                    meetingNumber: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 8,
                    employeeId: 'EMP00001',
                    scheduleId: 6,
                    presence: 'Izin',
                    meetingNumber: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 9,
                    employeeId: 'EMP00002',
                    scheduleId: 6,
                    presence: 'Hadir',
                    meetingNumber: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 10,
                    employeeId: 'EMP00001',
                    scheduleId: 7,
                    presence: 'Hadir',
                    meetingNumber: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 11,
                    employeeId: 'EMP00002',
                    scheduleId: 7,
                    presence: 'Alfa',
                    meetingNumber: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 12,
                    employeeId: 'EMP00001',
                    scheduleId: 8,
                    presence: 'Hadir',
                    meetingNumber: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 13,
                    employeeId: 'EMP00002',
                    scheduleId: 8,
                    presence: 'Hadir',
                    meetingNumber: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 14,
                    employeeId: 'EMP00001',
                    scheduleId: 9,
                    presence: 'Alfa',
                    meetingNumber: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 15,
                    employeeId: 'EMP00002',
                    scheduleId: 9,
                    presence: 'Hadir',
                    meetingNumber: 6,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 16,
                    employeeId: 'EMP00001',
                    scheduleId: 10,
                    presence: 'Hadir',
                    meetingNumber: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 17,
                    employeeId: 'EMP00002',
                    scheduleId: 10,
                    presence: 'Alfa',
                    meetingNumber: 7,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 18,
                    employeeId: 'EMP00001',
                    scheduleId: 11,
                    presence: 'Alfa',
                    meetingNumber: 8,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 19,
                    employeeId: 'EMP00002',
                    scheduleId: 11,
                    presence: 'Hadir',
                    meetingNumber: 8,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 20,
                    employeeId: 'EMP00001',
                    scheduleId: 12,
                    presence: 'Hadir',
                    meetingNumber: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 21,
                    employeeId: 'EMP00002',
                    scheduleId: 12,
                    presence: 'Hadir',
                    meetingNumber: 9,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 22,
                    employeeId: 'EMP00001',
                    scheduleId: 13,
                    presence: 'Alfa',
                    meetingNumber: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 23,
                    employeeId: 'EMP00002',
                    scheduleId: 13,
                    presence: 'Hadir',
                    meetingNumber: 10,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 24,
                    employeeId: 'EMP00001',
                    scheduleId: 14,
                    presence: 'Hadir',
                    meetingNumber: 11,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 25,
                    employeeId: 'EMP00002',
                    scheduleId: 14,
                    presence: 'Alfa',
                    meetingNumber: 11,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 26,
                    employeeId: 'EMP00001',
                    scheduleId: 15,
                    presence: 'Hadir',
                    meetingNumber: 12,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 27,
                    employeeId: 'EMP00002',
                    scheduleId: 15,
                    presence: 'Alfa',
                    meetingNumber: 12,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 28,
                    employeeId: 'EMP00001',
                    scheduleId: 16,
                    presence: 'Hadir',
                    meetingNumber: 13,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 29,
                    employeeId: 'EMP00002',
                    scheduleId: 16,
                    presence: 'Hadir',
                    meetingNumber: 13,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 30,
                    employeeId: 'EMP00001',
                    scheduleId: 17,
                    presence: 'Alfa',
                    meetingNumber: 14,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 31,
                    employeeId: 'EMP00002',
                    scheduleId: 17,
                    presence: 'Alfa',
                    meetingNumber: 14,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 32,
                    employeeId: 'EMP00001',
                    scheduleId: 18,
                    presence: 'Alfa',
                    meetingNumber: 15,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 33,
                    employeeId: 'EMP00002',
                    scheduleId: 18,
                    presence: 'Hadir',
                    meetingNumber: 15,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_presences', null, {});
    },
};