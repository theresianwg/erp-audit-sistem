'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_amal',
            [
                {
                    id: 1,
                    name: 'PT. Rumah Yatim',
                    address: 'Jl. Sukolilo No. 9 Surabaya',
                    phone: '08122222222222',
                    email: 'rumah.yatim@mail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: 'PT. Kitabisa',
                    address: 'Jl. Jakarta No. 9 Surabaya',
                    phone: '08122222222234',
                    email: 'kitabisa@mail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_amal', null, {});
    },
};
