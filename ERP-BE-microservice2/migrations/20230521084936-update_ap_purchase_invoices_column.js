'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(
            'ap_purchase_invoices',
            'taxes_included',
            Sequelize.BOOLEAN,
        );
        await queryInterface.removeColumn(
            'ap_purchase_invoices',
            'payment_status',
        );
        await queryInterface.addColumn(
            'ap_purchase_invoices',
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
            'ap_purchase_invoices',
            'taxes_included',
        );
        await queryInterface.removeColumn(
            'ap_purchase_invoices',
            'payment_status',
        );
        await queryInterface.addColumn(
            'ap_purchase_invoices',
            'payment_status',
            {
                type: Sequelize.ENUM('received', 'verified'),
                allowNull: false,
                defaultValue: 'received',
            },
        );
    },
};
