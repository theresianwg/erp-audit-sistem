'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_cost_accountings', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            po_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'mf_production_orders',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            item_id: {
                type: Sequelize.STRING,
                // references: {
                //     model: 'in_items',
                //     key: 'id',
                // },
                // onDelete: 'CASCADE',
                // onUpdate: 'CASCADE',
            },
            item_total: {
                type: Sequelize.DOUBLE,
            },
            total_cost: {
                type: Sequelize.DOUBLE,
            },
            total_cost_each: {
                type: Sequelize.DOUBLE,
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
        await queryInterface.dropTable('mf_cost_accountings');
    },
};
