'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_positions', {
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
            description: {
                type: Sequelize.TEXT,
            },
            level: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            managementSection: {
                type: Sequelize.ENUM('Top', 'Middle', 'Low'),
            },
            contractType: {
                allowNull: false,
                type: Sequelize.ENUM('Pegawai Honorer', 'Pegawai Tetap'),
            },
            contractCount: {
                type: Sequelize.ENUM('Harian', 'Bulanan'),
            },
            workingHourPerWeek: {
                type: Sequelize.INTEGER,
            },
            salary: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('hrm_positions');
    },
};
