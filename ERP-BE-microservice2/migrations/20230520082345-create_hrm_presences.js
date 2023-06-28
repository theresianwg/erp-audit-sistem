'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_presences', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.BIGINT,
                autoIncrement: true,
            },
            employeeId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'main_employees',
                    key: 'nip',
                },
            },
            scheduleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'hrm_schedules',
                    key: 'id',
                },
            },
            presence: {
                allowNull: false,
                type: Sequelize.ENUM('Alfa', 'Izin', 'Hadir'),
            },
            meetingNumber: {
                type: Sequelize.INTEGER,
                allowNull: false,
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
        await queryInterface.dropTable('hrm_presences');
    },
};
