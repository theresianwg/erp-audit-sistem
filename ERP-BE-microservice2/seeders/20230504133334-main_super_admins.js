'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('main_super_admins', [
            {
                id: 'SAD00001',
                roleId: 'RL00001',
                username: 'mael',
                email: 'mael@gmail.com',
                password: 'superman',
                resetToken: null,
                fullname: 'Muhammad Ismail',
                gender: 'Laki-laki',
                description: null,
                imageUrl: 'www.gambar.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 'SAD00002',
                roleId: 'RL00001',
                username: 'pebkurfeb',
                email: 'potatopeb@gmail.com',
                password: 'superman',
                resetToken: null,
                fullname: 'Kurnia Cahya Febryanto',
                gender: 'Laki-laki',
                description: null,
                imageUrl: 'www.gambar.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('main_super_admins', null, {});
    },
};
