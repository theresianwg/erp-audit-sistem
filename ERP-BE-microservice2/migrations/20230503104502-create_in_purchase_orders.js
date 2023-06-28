'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_purchase_orders', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_purchase_request: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'in_purchase_requests',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            id_supplier: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'in_suppliers',
                    key: 'id',
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
            },
            total_price: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            total_tax: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
            },
            total_price_tax: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
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
        await queryInterface.dropTable('in_purchase_orders');
    },
};
