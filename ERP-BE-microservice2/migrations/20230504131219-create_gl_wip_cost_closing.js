'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_wip_cost_closings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            WCostClosing_DirectLabour: {
                type: Sequelize.FLOAT,
            },
            WCostClosing_Overhead: {
                type: Sequelize.FLOAT,
            },
            WCostClosing_PrevCost: {
                type: Sequelize.FLOAT,
            },
            WCostClosing_RawMaterial: {
                type: Sequelize.FLOAT,
            },
            WCostClosing_EndProduct: {
                type: Sequelize.FLOAT,
            },
            id_accounting_period: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            po_id: {
                type: Sequelize.STRING,
                allowNull: false,
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
        await queryInterface.dropTable('gl_wip_cost_closings');
    },
};
