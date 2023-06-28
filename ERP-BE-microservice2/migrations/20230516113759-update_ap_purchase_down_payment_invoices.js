'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'discounts',
            {
                type: Sequelize.DECIMAL(15, 2),
                allowNull: false,
            },
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn(
            'ap_purchase_down_payment_invoices',
            'discounts',
            {
                type: Sequelize.DECIMAL(5, 2),
                allowNull: false,
            },
        );
    },
};
