'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_closing_balances', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            CB_Balance: {
                type: Sequelize.INTEGER,
            },
            CB_Date: {
                type: Sequelize.DATE,
            },
            id_coa: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_coas',
                    key: 'id',
                },
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
        await queryInterface.dropTable('gl_closing_balances');
    },
};
