'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
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

    async down(queryInterface, Sequelize) {
        // await queryInterface.removeColumn('ap_purchase_down_payment_invoices', 'payment_status');
        // await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_ap_purchase_down_payment_invoices_payment_status";');
    },
};
