'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'dp_percent',
            {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: true,
                defaultValue: null,
                comment: 'Down Payment Percentage',
            },
        );

        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'dp_paid_amount',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
                defaultValue: null,
                comment: 'Down Payment Paid Amount',
            },
        );

        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'taxes_included',
            Sequelize.BOOLEAN,
        );

        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'remaining_payments',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: true,
                defaultValue: null,
                comment: 'Down Payment Remaining Payment',
            },
        );

        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'payment_status',
        );
        await queryInterface.addColumn(
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
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'dp_percent',
        );

        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'dp_paid_amount',
        );

        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'taxes_included',
        );

        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'remaining_payments',
        );

        await queryInterface.removeColumn(
            'ap_purchase_down_payment_invoices',
            'payment_status',
        );
        await queryInterface.addColumn(
            'ap_purchase_down_payment_invoices',
            'payment_status',
            {
                type: Sequelize.ENUM('received', 'verified'),
                allowNull: false,
                defaultValue: 'received',
            },
        );
    },
};
