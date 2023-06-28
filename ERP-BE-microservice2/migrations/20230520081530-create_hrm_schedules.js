'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_schedules', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            jobId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_jobs',
                    key: 'id',
                },
            },
            timeStart: {
                type: Sequelize.STRING,
            },
            timeEnd: {
                type: Sequelize.STRING,
            },
            workDate: {
                type: Sequelize.DATE,   
            },
            currentNumberOfWorker: {
                type: Sequelize.INTEGER,
            },
            neededNumberOfWorker: {
                type: Sequelize.INTEGER,
            },
            isOvertime: {
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
        await queryInterface.dropTable('hrm_schedules');
    },
};
