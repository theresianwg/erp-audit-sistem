'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('main_roles_permissions', [
            {
                id: '1',
                roleId: 'RL00002',
                permissionId: 'PRM00001',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: '2',
                roleId: 'RL00002',
                permissionId: 'PRM00002',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('main_roles_permissions', null, {});
    },
};
