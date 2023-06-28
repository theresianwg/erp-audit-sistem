'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ap_purchase_invoices', [
            {
                id: 'PIN202305090001',
                invoice_number: 'INV202305090003',
                invoice_date: '2023-05-09',
                due_date: '2023-06-09',
                purchase_order_id: 'PO202304050001',
                purchase_down_payment_invoice_id: 'PDI202305090001',
                currency_id: 'IDR',
                payment_status: 'pending',
                total_price_item: 270000,
                total_taxes: 29700,
                total_amount: 299700,
                received_date: new Date(),
                taxes_included: true,
                description:
                    'Purchase Invoice for Purchase Order PO202304050001',
                discounts: 0,
                updatedAt: new Date(),
                createdAt: new Date(),
            },
            {
                id: 'PIN202305090002',
                invoice_number: 'INV202305090002',
                invoice_date: '2023-05-09',
                due_date: '2023-06-09',
                purchase_order_id: 'PO202304050002',
                currency_id: 'IDR',
                payment_status: 'pending',
                total_price_item: 220000,
                total_taxes: 24200,
                total_amount: 244200,
                received_date: new Date(),
                taxes_included: true,
                description:
                    'Purchase Invoice for Purchase Order PO202304050002',
                discounts: 0,
                updatedAt: new Date(),
                createdAt: new Date(),
            },
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ap_purchase_invoices', null, {});
    },
};
