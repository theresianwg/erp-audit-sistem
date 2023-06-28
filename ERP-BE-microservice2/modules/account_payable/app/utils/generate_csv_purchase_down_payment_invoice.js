const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');

const generateCSVPurchaseDownPaymentInvoice = async (invoices) => {
    const csvWriter = createCsvWriter({
        path: 'purchase_down_payment_invoices.csv',
        header: [
            { id: 'id', title: 'ID' },
            { id: 'invoice_number', title: 'Invoice Number' },
            { id: 'invoice_date', title: 'Invoice Date' },
            { id: 'due_date', title: 'Due Date' },
            { id: 'total_amount', title: 'Total Amount' },
            { id: 'total_taxes', title: 'Total Taxes' },
            { id: 'total_price_item', title: 'Total Price Item' },
            { id: 'discounts', title: 'Discounts' },
            { id: 'purchase_order_id', title: 'Purchase Order ID' },
            { id: 'payment_status', title: 'Payment Status' },
            { id: 'description', title: 'Description' },
            { id: 'taxes_included', title: 'Taxes Included' },
            { id: 'dp_percent', title: 'DP Percent' },
            { id: 'dp_paid_amount', title: 'DP Paid Amount' },
            { id: 'remaining_payments', title: 'Remaining Payments' },
            { id: 'dp_method', title: 'DP Method' },
        ],
        fieldDelimiter: ',',
        fieldQuote: '"',
    });

    const csvFilePath = path.resolve(
        __dirname,
        '../../../../purchase_down_payment_invoices.csv',
    );

    try {
        const records = invoices.map(formatDownPaymentInvoiceForCSV);
        await csvWriter.writeRecords(records);

        return csvFilePath;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const formatDownPaymentInvoiceForCSV = (invoice) => {
    return {
        id: invoice.id,
        invoice_number: invoice.invoice_number,
        invoice_date: invoice.invoice_date,
        due_date: invoice.due_date,
        total_amount: invoice.total_amount,
        total_taxes: invoice.total_taxes,
        total_price_item: invoice.total_price_item,
        discounts: invoice.discounts,
        purchase_order_id: invoice.purchase_order_id,
        payment_status: invoice.payment_status,
        description: invoice.description,
        taxes_included: invoice.taxes_included,
        dp_percent: invoice.dp_percent,
        dp_paid_amount: invoice.dp_paid_amount,
        remaining_payments: invoice.remaining_payments,
        dp_method: invoice.dp_method,
    };
};

module.exports = {
    generateCSVPurchaseDownPaymentInvoice,
    formatDownPaymentInvoiceForCSV,
};
