'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_machines',
            [
                {
                    id: 'M5191',
                    id_asset: 'FA001',
                    m_desc: 'Mesin Penyusun Hiasan Alas',
                    m_cost: 0,
                    m_working_hour: '00:03:00',
                    m_costph: 0,
                    wc_id: 'WC4111',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'M5192',
                    id_asset: 'FA002',
                    m_desc: 'Mesin Penyusun Hiasan Supporting',
                    m_cost: 0,
                    m_working_hour: '00:10:00',
                    m_costph: 0,
                    wc_id: 'WC4111',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'M5193',
                    id_asset: 'FA003',
                    m_desc: 'Mesin Pembuat Cake',
                    m_cost: 5000,
                    m_working_hour: '01:00:00',
                    m_costph: 5000,
                    wc_id: 'WC4111',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_machines', null, {});
    },
};
