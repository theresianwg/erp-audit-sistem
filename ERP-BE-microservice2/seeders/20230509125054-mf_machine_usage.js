'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_machine_usages',
            [
                {
                    id: 'MCU001',
                    po_id: 'PDO20230560300',
                    m_id: 'M5191',
                    mu_start: '2023-05-09 03:00:00',
                    mu_end: '2023-05-09 05:00:00',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_machine_usages', null, {});
    },
};
