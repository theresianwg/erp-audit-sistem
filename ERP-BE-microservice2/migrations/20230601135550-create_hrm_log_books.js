'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_log_books', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT,
                autoIncrement: true,
            },
            presenceId: {
                type: Sequelize.BIGINT,
                allowNull: false,
                references: {
                    model: 'hrm_presences',
                    key: 'id',
                },
            },
            resume: {
                type: Sequelize.TEXT,
            },
            progress: {
                type: Sequelize.TEXT,
            },
            toDoList: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable('hrm_log_books');
    },
};
