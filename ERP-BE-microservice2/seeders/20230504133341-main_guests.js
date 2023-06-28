'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('main_guests', [
            {
                id: 'GUE00001',
                roleId: 'RL00003',
                username: 'guest1',
                email: 'guest1@gmail.com',
                password: 'guestguest',
                resetToken: null,
                fullname: 'Guest 1',
                gender: null,
                occupation: 'Mahasiswa',
                instance: 'ITS',
                imageUrl: 'www.gambar.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'GUE00002',
                roleId: 'RL00003',
                username: 'guest2',
                email: 'guest2@gmail.com',
                password: 'guestguest',
                resetToken: null,
                fullname: 'Guest 2',
                gender: null,
                occupation: 'Mahasiswa',
                instance: 'ITS',
                imageUrl: 'www.gambar.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('main_guests', null, {});
    },
};
