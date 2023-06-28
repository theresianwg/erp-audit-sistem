'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ap_purchase_down_payment_invoices', {
            id: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            invoice_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            invoice_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            due_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            total_amount: {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
            taxes: {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: false,
            },
            discounts: {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: false,
            },
            received_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            purchase_order_id: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'in_purchase_orders',
                    key: 'id',
                },
            },
            currency_id: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'cb_currencies',
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
        await queryInterface.dropTable('ap_purchase_down_payment_invoices');
    },
};
