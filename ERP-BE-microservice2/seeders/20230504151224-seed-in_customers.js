'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_customers',
            [
                {
                    id: 'CU0001',
                    name: 'Laxmi Mulyosari',
                    address: 'Jl. Mulyosari no 66',
                    phone: '08123456789',
                    email: 'laxmi@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CU0002',
                    name: 'Holland Ketintang',
                    address: 'Jl. Ketintang no 88',
                    phone: '08123456789',
                    email: 'holland@gmail.com',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_customers', null, {});
    },
};
