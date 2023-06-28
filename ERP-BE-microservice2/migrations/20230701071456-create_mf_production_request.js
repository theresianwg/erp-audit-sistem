'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_production_requests', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            // tambahin foreign key
            item_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'in_items',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            pr_start: {
                type: Sequelize.DATE,
            },
            pr_end: {
                type: Sequelize.DATE,
            },
            pr_qty: {
                type: Sequelize.DOUBLE,
            },
            pr_status: {
                type: Sequelize.STRING,
            },
            //tambahin foreign key
            so_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'in_sales_orders',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
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
        await queryInterface.dropTable('mf_production_requests');
    },
};
