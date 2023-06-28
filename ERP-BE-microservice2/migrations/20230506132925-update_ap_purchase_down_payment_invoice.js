// migrations/YYYYMMDDHHmmss-update_ap_purchase_down_payment_invoice.js

'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.renameColumn(
            'ap_purchase_down_payment_invoices',
            'taxes',
            'total_taxes',
        );
        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'total_taxes',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );
        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'total_price_item',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );
        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'description',
            {
                type: Sequelize.TEXT,
                allowNull: true,
            },
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.renameColumn(
            'ap_purchase_down_payment_invoices',
            'total_taxes',
            'taxes',
        );
        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'taxes',
            {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: false,
            },
        );
        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'total_price_item',
        );
        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'description',
        );
    },
};
