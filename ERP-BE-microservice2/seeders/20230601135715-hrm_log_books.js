'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_log_books',
            [
                {
                    id: 1,
                    presenceId: 1,
                    resume: 'hari ini kerja',
                    progress: 'membuat laporan hingga tengah bulan',
                    toDoList: 'melengkapi laporan hingga akhir bulan',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    presenceId: 2,
                    resume: 'hari ini kita shooting di jember',
                    progress: 'sudah shooting scene 1 dan 2',
                    toDoList: 'menyelesaikan Scene 3',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    presenceId: 3,
                    resume: 'hari ini ngonsep iklan',
                    progress: 'sudah selesai dan sudah difiksasi konsepnya',
                    toDoList: null,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_log_books', null, {});
    },
};
