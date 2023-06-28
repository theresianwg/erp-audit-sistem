'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_request_hrs',
            [
                {
                    id: 1,
                    departmentId: 3,
                    name: 'Merekap pengeluaran biaya setiap bulan',
                    details: '',
                    actionType: 'Routine',
                    amountOfWorker: 2,
                    neededHourOfWork: 5,
                    deadline: null,
                    periodical: 'Monthly',
                    acceptStatus: 'Accepted',
                    isDone: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    departmentId: 1,
                    name: 'Melakukan dan merancang media untuk advertising',
                    details: '',
                    actionType: 'Uncommon',
                    amountOfWorker: 5,
                    neededHourOfWork: 40,
                    deadline: '2023-05-31',
                    periodical: null,
                    acceptStatus: 'Accepted',
                    isDone: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    departmentId: 2,
                    name: 'Melakukan riset terkait tren bisnis dan strategi bisnis 5 tahun ke depan',
                    details: '',
                    actionType: 'Uncommon',
                    amountOfWorker: 3,
                    neededHourOfWork: 30,
                    deadline: '2023-05-31',
                    periodical: null,
                    acceptStatus: 'Requested',
                    isDone: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    departmentId: 3,
                    name: 'Merekap barang dalam gudang setiap hari',
                    details: '',
                    actionType: 'Routine',
                    amountOfWorker: 2,
                    neededHourOfWork: 5,
                    deadline: null,
                    periodical: 'Daily',
                    acceptStatus: 'Accepted',
                    isDone: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_request_hrs', null, {});
    },
};
