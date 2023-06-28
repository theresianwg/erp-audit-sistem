'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'gl_item_categories',
            [
                {
                    id: 1,
                    Category_Name: 'Raw Material',
                    Category_Code: 'IRM',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    Category_Name: 'End Product',
                    Category_Code: 'IEP',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 3,
                    Category_Name: 'Labor',
                    Category_Code: 'ILB',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 4,
                    Category_Name: 'Overhead',
                    Category_Code: 'IOH',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 5,
                    Category_Name: 'Prev Cost',
                    Category_Code: 'IPC',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 6,
                    Category_Name: 'WIP',
                    Category_Code: 'WIP',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {},
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('gl_item_categories', null, {});
    },
};
