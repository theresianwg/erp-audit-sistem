'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_purchase_order_details', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_purchase_order: {
                type: Sequelize.STRING,
                references: {
                    model: 'in_purchase_orders',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            id_item: {
                type: Sequelize.STRING,
                references: {
                    model: 'in_items',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            quantity: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            unit: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            tax: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            total: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            budgetStatus: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
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
        await queryInterface.dropTable('in_purchase_order_details');
    },
};
