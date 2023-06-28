'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_cash_flows', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_accounting_period: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'gl_accounting_periods',
                    key: 'id',
                },
            },
            wc_id: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'WC4111',
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
        await queryInterface.dropTable('gl_cash_flows');
    },
};
