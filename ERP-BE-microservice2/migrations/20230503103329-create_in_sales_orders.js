'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('in_sales_orders', {
            id: {
                allowNull: false,
                autoIncrement: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            id_customer: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'in_customers',
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
            payment_type: {
                type: Sequelize.ENUM('cash', 'dp_money', 'dp_percent'),
                defaultValue: 'cash',
            },
            dp_percentage: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            dp_amount: {
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
        await queryInterface.dropTable('in_sales_orders');
    },
};
