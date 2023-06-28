'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('hrm_departments', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            companyId: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'main_companies',
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
            currentNumberOfEmployee: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            neededNumberOfEmployee: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0,
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
        await queryInterface.dropTable('hrm_departments');
    },
};
