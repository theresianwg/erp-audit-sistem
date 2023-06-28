'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'invoice_number',
            {
                type: Sequelize.STRING,
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'invoice_date',
            {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'due_date',
            {
                type: Sequelize.DATEONLY,
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'total_amount',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'total_taxes',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'total_price_item',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'discounts',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'received_date',
            {
                type: Sequelize.DATE,
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'purchase_order_id',
            {
                type: Sequelize.STRING,
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'payment_status',
            {
                type: Sequelize.ENUM(
                    'pending',
                    'cancelled',
                    'verified',
                    'succeeded',
                ),
                allowNull: false,
                defaultValue: 'pending',
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'description',
            {
                type: Sequelize.TEXT,
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'dp_percent',
            {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'dp_paid_amount',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'taxes_included',
            {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'remaining_payments',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );

        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'dp_method',
            {
                type: Sequelize.ENUM('percent', 'cash'),
                allowNull: false,
                defaultValue: 'cash',
            },
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'invoice_number',
            {
                type: Sequelize.STRING,
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'invoice_date',
            {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'due_date',
            {
                type: Sequelize.DATEONLY,
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'total_amount',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'total_taxes',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'total_price_item',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'discounts',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'received_date',
            {
                type: Sequelize.DATE,
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'purchase_order_id',
            {
                type: Sequelize.STRING,
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'payment_status',
            {
                type: Sequelize.ENUM(
                    'pending',
                    'cancelled',
                    'verified',
                    'succeeded',
                ),
                allowNull: true,
                defaultValue: 'pending',
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'description',
            {
                type: Sequelize.TEXT,
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'dp_percent',
            {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'dp_paid_amount',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'taxes_included',
            {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
        );

        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'remaining_payments',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
            },
        );

        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'dp_method',
        );
    },
};
