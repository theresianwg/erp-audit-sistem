'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_mans',
            [
                {
                    id: 'MAN7777',
                    mn_name: 'Jono',
                    mn_id_skill: 'MAS1955',
                    mn_costph: 5000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_mans', null, {});
    },
};
