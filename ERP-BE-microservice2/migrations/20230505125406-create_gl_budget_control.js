'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_budget_controls', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            BC_Amount: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            id_coa: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            id_accounting_period: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_accounting_periods',
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
        await queryInterface.dropTable('gl_budget_controls');
    },
};
