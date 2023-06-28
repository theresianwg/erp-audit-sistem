'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ap_purchase_return_invoices', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING,
            },
            return_invoice_number: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            return_invoice_date: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
            total_credit_amount: {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
            return_reason: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            received_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            purchase_invoice_id: {
                type: Sequelize.STRING,
                allowNull: false,
                references: {
                    model: 'ap_purchase_invoices',
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
        await queryInterface.dropTable('ap_purchase_return_invoices');
    },
};
