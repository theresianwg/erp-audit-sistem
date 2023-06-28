const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const path = require('path');
const fs = require('fs');

const generateCSVPurchaseInvoice = async (invoices) => {
    const csvWriter = createCsvWriter({
        path: 'purchase_invoices.csv',
        header: [
            { id: 'id', title: 'ID' },
            { id: 'invoice_number', title: 'Invoice Number' },
            { id: 'invoice_date', title: 'Invoice Date' },
            { id: 'due_date', title: 'Due Date' },
            { id: 'total_amount', title: 'Total Amount' },
            { id: 'total_taxes', title: 'Total Taxes' },
            { id: 'total_price_item', title: 'Total Price Item' },
            { id: 'discounts', title: 'Discounts' },
            { id: 'received_date', title: 'Received Date' },
            { id: 'purchase_order_id', title: 'Purchase Order ID' },
            { id: 'payment_status', title: 'Payment Status' },
            {
                id: 'purchase_down_payment_invoice_id',
                title: 'Purchase Down Payment Invoice ID',
            },
            { id: 'description', title: 'Description' },
            { id: 'taxes_included', title: 'Taxes Included' },
            { id: 'createdAt', title: 'Created At' },
            { id: 'updatedAt', title: 'Updated At' },
        ],
        fieldDelimiter: ',',
        fieldQuote: '"',
    });

    const csvFilePath = path.resolve(
        __dirname,
        '../../../../purchase_invoices.csv',
    );

    try {
        const records = invoices.map(formatInvoiceForCSV);
        await csvWriter.writeRecords(records);

        return csvFilePath;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const formatInvoiceForCSV = (invoice) => {
    return {
        id: invoice.id,
        invoice_number: invoice.invoice_number,
        invoice_date: invoice.invoice_date,
        due_date: invoice.due_date,
        total_amount: invoice.total_amount,
        total_taxes: invoice.total_taxes,
        total_price_item: invoice.total_price_item,
        discounts: invoice.discounts,
        received_date: invoice.received_date,
        purchase_order_id: invoice.purchase_order_id,
        payment_status: invoice.payment_status,
        purchase_down_payment_invoice_id:
            invoice.purchase_down_payment_invoice_id,
        description: invoice.description,
        taxes_included: invoice.taxes_included,
        createdAt: invoice.createdAt,
        updatedAt: invoice.updatedAt,
    };
};

module.exports = {
    generateCSVPurchaseInvoice,
    formatInvoiceForCSV,
};
