'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_job_order_details',
            [
                {
                    id: 'JO202305706410634',
                    jo_id: 'JO20230570208',
                    o_id: 'O6663',
                    item_id: 'IEP0001',
                    jod_qty: 12,
                    m_id: 'M5191',
                    jod_m_hour: '01:00:00',
                    jod_id_skill: 'MAS1955',
                    jod_man_qty: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'JO202305706410635',
                    jo_id: 'JO20230570208',
                    o_id: 'O6663',
                    item_id: 'IRM0001',
                    jod_qty: 12,
                    m_id: 'M5191',
                    jod_m_hour: '01:00:00',
                    jod_id_skill: 'MAS1955',
                    jod_man_qty: 5,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_job_order_details', null, {});
    },
};
