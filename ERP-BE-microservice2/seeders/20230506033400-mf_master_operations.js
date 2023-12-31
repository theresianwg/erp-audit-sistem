'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_master_operations',
            [
                {
                    id: 'O6663',
                    o_name: 'Menyusun Hiasan Alas Bundar',
                    o_desc: 'Menyusun Hiasan Alas Bundar',
                    item_id: 'IMG0002',
                    item_max: 1,
                    wc_id: 'WC4111',
                    m_id: 'M5191',
                    m_hour: '00:03:00',
                    mn_skill_id: 'MAS1955',
                    mn_skill_qty: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'O6664',
                    o_name: 'Menyusun Hiasan Supporting Black Forest',
                    o_desc: 'Menyusun Hiasan Supporting Black Forest',
                    item_id: 'IMG0001',
                    item_max: 1,
                    wc_id: 'WC4111',
                    m_id: 'M5192',
                    m_hour: '00:15:00',
                    mn_skill_id: 'MAS1955',
                    mn_skill_qty: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'O6665',
                    o_name: 'Membuat Black Forest Circle Cake',
                    o_desc: 'Membuat Black Forest Circle Cake',
                    item_id: 'IEP0001',
                    item_max: 3,
                    wc_id: 'WC4111',
                    m_id: 'M5193',
                    m_hour: '01:00:00',
                    mn_skill_id: 'MAS1956',
                    mn_skill_qty: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'O6666',
                    o_name: 'Menyusun Hiasan Alas Kotak',
                    o_desc: 'Menyusun Hiasan Alas Kotak',
                    item_id: 'IMG0004',
                    item_max: 1,
                    wc_id: 'WC4111',
                    m_id: 'M5191',
                    m_hour: '00:03:00',
                    mn_skill_id: 'MAS1955',
                    mn_skill_qty: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'O6667',
                    o_name: 'Menyusun Hiasan Supporting Red Velvet',
                    o_desc: 'Menyusun Hiasan Supporting Red Velvet',
                    item_id: 'IMG0003',
                    item_max: 1,
                    wc_id: 'WC4111',
                    m_id: 'M5192',
                    m_hour: '00:10:00',
                    mn_skill_id: 'MAS1955',
                    mn_skill_qty: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'O6668',
                    o_name: 'Membuat Red Velvet Square Cake',
                    o_desc: 'Membuat Red Velvet Square Cake',
                    item_id: 'IEP0002',
                    item_max: 3,
                    wc_id: 'WC4111',
                    m_id: 'M5193',
                    m_hour: '01:00:00',
                    mn_skill_id: 'MAS1956',
                    mn_skill_qty: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_master_operations', null, {});
    },
};
