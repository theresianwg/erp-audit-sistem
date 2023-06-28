module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ap_purchase_down_payment_invoices', [
            {
                id: 'PDI202305090001',
                invoice_number: 'INV202305090003',
                invoice_date: new Date('2023-05-09'),
                due_date: new Date('2023-06-09'),
                purchase_order_id: 'PO202304050001',
                currency_id: 'IDR',
                payment_status: 'pending',
                total_price_item: 270000.0,
                total_taxes: 29700.0,
                total_amount: 299700.0,
                discounts: 0.0,
                received_date: new Date(),
                dp_percent: 50.0,
                dp_paid_amount: 149850.0,
                taxes_included: true,
                remaining_payments: 149850.0,
                dp_method: 'percent',
                description:
                    'Purchase Down Payment Invoice for Purchase Order PO202304050001',
                updatedAt: new Date(),
                createdAt: new Date(),
            },
            // 2. Case when DP does not include taxes
            {
                id: 'PDI202305090002',
                invoice_number: 'INV202305090005',
                invoice_date: new Date('2023-05-09'),
                due_date: new Date('2023-06-09'),
                purchase_order_id: 'PO202304050002',
                currency_id: 'IDR',
                payment_status: 'pending',
                total_price_item: 220000.0,
                total_taxes: 24200.0,
                total_amount: 244200.0,
                discounts: 0.0,
                received_date: new Date(),
                dp_percent: 0.0,
                dp_paid_amount: 110000.0,
                taxes_included: true,
                remaining_payments: 110000.0,
                dp_method: 'cash',
                description:
                    'Purchase Down Payment Invoice for Purchase Order PO202304050002',
                updatedAt: new Date(),
                createdAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(
            'ap_purchase_down_payment_invoices',
            null,
            {},
        );
    },
};
