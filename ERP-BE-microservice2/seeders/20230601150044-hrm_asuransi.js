'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'hrm_asuransi',
            [
                {
                    id: 1,
                    name: 'PT. Prudential',
                    address: 'Jl. Ahmad Yani No. 9 Surabaya',
                    phone: '0816231284632',
                    email: 'prudential@mail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: 'PT. Asuransi Ekspor Indonesia',
                    address: 'Jl. Lt. Col. Jendral Sucipto No. 39 Surabaya',
                    phone: '08122243722234',
                    email: 'asuransi.ekspor.id@mail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('hrm_asuransi', null, {});
    },
};
