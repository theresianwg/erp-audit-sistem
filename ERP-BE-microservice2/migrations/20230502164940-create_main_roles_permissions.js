'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('main_roles_permissions', {
            id: {
                type: Sequelize.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            roleId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'main_roles',
                    key: 'id',
                },
            },
            permissionId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'main_permissions',
                    key: 'id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('main_roles_permissions');
    },
};
