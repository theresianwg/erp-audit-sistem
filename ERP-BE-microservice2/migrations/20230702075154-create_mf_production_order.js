'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('mf_production_orders', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            pr_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'mf_production_requests',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            // add foreign key
            item_id: {
                type: Sequelize.STRING,
                references: {
                    model: 'in_items',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            po_qty: {
                type: Sequelize.DOUBLE,
            },
            po_start: {
                type: Sequelize.DATE,
            },
            po_end: {
                type: Sequelize.DATE,
            },
            po_status: {
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
        await queryInterface.dropTable('mf_production_orders');
    },
};
