'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'in_bom_parents',
            [
                {
                    id: 'BOM0001',
                    id_parent_item: 'IEP0001',
                    updatedAt: new Date(),
                    createdAt: new Date(),
                },
                {
                    id: 'BOM0002',
                    id_parent_item: 'IEP0002',
                    updatedAt: new Date(),
                    createdAt: new Date(),
                },
                {
                    id: 'BOM0003',
                    id_parent_item: 'IMG0001',
                    updatedAt: new Date(),
                    createdAt: new Date(),
                },
                {
                    id: 'BOM0004',
                    id_parent_item: 'IMG0002',
                    updatedAt: new Date(),
                    createdAt: new Date(),
                },
                {
                    id: 'BOM0005',
                    id_parent_item: 'IMG0004',
                    updatedAt: new Date(),
                    createdAt: new Date(),
                },
                {
                    id: 'BOM0006',
                    id_parent_item: 'IMG0003',
                    updatedAt: new Date(),
                    createdAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('in_bom_parents', null, {});
    },
};
