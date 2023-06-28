'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'mf_cost_accounting_details',
            [
                {
                    id: 'CAD001',
                    ca_id: 'CA001',
                    jod_id: 'JO202305706410634',
                    o_id: 'O6663',
                    item_id: 'IEP0001',
                    qty_produced: 10,
                    m_id: 'M5191',
                    m_duration: '01:00:00',
                    mn_skill_id: 'MAS1955',
                    mn_skill_qty: 5,
                    material_cost: 300000,
                    machine_cost: 200000,
                    man_cost: 100000,
                    total_cost: 600000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'CAD002',
                    ca_id: 'CA001',
                    jod_id: 'JO202305706410635',
                    o_id: 'O6664',
                    item_id: 'IRM0001',
                    qty_produced: 7,
                    m_id: 'M5191',
                    m_duration: '01:00:00',
                    mn_skill_id: 'MAS1955',
                    mn_skill_qty: 2,
                    material_cost: 600000,
                    machine_cost: 300000,
                    man_cost: 200000,
                    total_cost: 1100000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_cost_accounting_details', null, {});
    },
};
