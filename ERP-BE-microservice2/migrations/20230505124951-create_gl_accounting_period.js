'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_accounting_periods', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            AP_Name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            AP_Start_Date: {
                type: Sequelize.DATEONLY,
            },
            AP_End_Date: {
                type: Sequelize.DATEONLY,
            },
            AP_Description: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('gl_accounting_periods');
    },
};
