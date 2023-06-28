'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'invoice_number',
            {
                type: Sequelize.STRING,
                allowNull: false,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'invoice_date',
            {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
        );
        await queryInterface.changeColumn('ap_purchase_invoices', 'due_date', {
            type: Sequelize.DATEONLY,
            allowNull: false,
        });
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'total_amount',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'total_taxes',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'total_price_item',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'received_date',
            {
                type: Sequelize.DATE,
                allowNull: false,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'purchase_order_id',
            {
                type: Sequelize.STRING,
                allowNull: false,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'taxes_included',
            {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'invoice_number',
            {
                type: Sequelize.STRING,
                allowNull: true,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'invoice_date',
            {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
        );
        await queryInterface.changeColumn('ap_purchase_invoices', 'due_date', {
            type: Sequelize.DATEONLY,
            allowNull: true,
        });
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'total_amount',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'total_taxes',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'total_price_item',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'received_date',
            {
                type: Sequelize.DATE,
                allowNull: true,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'purchase_order_id',
            {
                type: Sequelize.STRING,
                allowNull: true,
            },
        );
        await queryInterface.changeColumn(
            'ap_purchase_invoices',
            'taxes_included',
            {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        );
    },
};
