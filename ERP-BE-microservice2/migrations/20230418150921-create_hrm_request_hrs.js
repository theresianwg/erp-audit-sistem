'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_request_hrs', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            departmentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_departments',
                    key: 'id',
                },
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            details: {
                type: Sequelize.TEXT,
            },
            actionType: {
                type: Sequelize.ENUM('Routine', 'Uncommon'),
                allowNull: false,
            },
            amountOfWorker: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            neededHourOfWork: {
                type: Sequelize.INTEGER,
            },
            deadline: { 
                type: Sequelize.DATE
            },
            periodical: {
                type: Sequelize.ENUM('Monthly', 'Weekly', 'Daily'),
            },
            acceptStatus: {
                type: Sequelize.ENUM('Requested', 'Need Revision', 'Accepted'),
            },
            isDone: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable('hrm_request_hrs');
    },
};
