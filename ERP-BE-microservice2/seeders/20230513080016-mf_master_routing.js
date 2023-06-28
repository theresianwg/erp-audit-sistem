'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'mf_master_routings',
            [
                {
                    id: 'MSR202305130200',
                    mr_name: 'Menyusun Hiasan Alas Bundar',
                    item_id: 'IEP0001',
                    o_id: 'O6663',
                    mr_order: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'MSR202305130201',
                    mr_name: 'Menyusun Hiasan Supporting Black Forest',
                    item_id: 'IEP0001',
                    o_id: 'O6664',
                    mr_order: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'MSR202305130202',
                    mr_name: 'Membuat Black Forest Circle Cake',
                    item_id: 'IEP0001',
                    o_id: 'O6665',
                    mr_order: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'MSR202305130203',
                    mr_name: 'Menyusun Hiasan Supporting Red Velvet',
                    item_id: 'IEP0002',
                    o_id: 'O6667',
                    mr_order: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'MSR202305130204',
                    mr_name: 'Menyusun Hiasan Alas Kotak',
                    item_id: 'IEP0002',
                    o_id: 'O6666',
                    mr_order: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 'MSR202305130205',
                    mr_name: 'Membuat Red Velvet Square Cake',
                    item_id: 'IEP0002',
                    o_id: 'O6668',
                    mr_order: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('mf_master_routings', null, {});
    },
};
