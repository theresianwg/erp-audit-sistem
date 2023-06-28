'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('gl_wip_costs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            WCost_Amount: {
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
            id_item_category: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('gl_wip_costs');
    },
};
