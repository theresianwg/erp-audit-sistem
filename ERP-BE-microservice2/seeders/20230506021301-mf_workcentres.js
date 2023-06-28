'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_workcentres',
            [
                {
                    id: 'WC4111',
                    wc_name: 'Main Production',
                    wc_location: 'Jakarta',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_workcentres', null, {});
    },
};
