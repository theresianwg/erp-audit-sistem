const apPurchaseDownPaymentInvoiceRepository = require('../repositories/ap_purchase_down_payment_invoice_repository');
const cbCurrencyService = require('../../../cash_bank/app/services/cb_currency_service');
const purchaseOrderService = require('../../../inventory/app/services/purchaseOrderService');
const {
    generateApPurchaseDownPaymentInvoiceId,
} = require('../utils/generateId');
const generatePDFPurchaseInvoice = require('../utils/generate_pdf_purchase_invoice');
const {
    generateCSVPurchaseDownPaymentInvoice,
    formatDownPaymentInvoiceForCSV,
} = require('../utils/generate_csv_purchase_down_payment_invoice');

async function processInvoiceData(data) {
    const currency = await cbCurrencyService.searchCurrencies(data.currency_id);
    if (!currency) {
        throw new Error('Invalid currency_id');
    }

    const purchaseOrder = await purchaseOrderService.getPurchaseOrderById(
        data.purchase_order_id,
    );
    if (!purchaseOrder) {
        throw new Error('Invalid purchase_order_id');
    }

    data.total_amount = data.total_amount || purchaseOrder.total_price_tax;
    data.total_taxes = data.total_taxes || purchaseOrder.total_tax;
    data.total_price_item = data.total_price_item || purchaseOrder.total_price;
    data.received_date = purchaseOrder.updatedAt;
    data.taxes_included = data.taxes_included;
    data.dp_percent = data.dp_percent;
    data.dp_paid_amount = data.dp_paid_amount;
    data.remaining_payments = data.remaining_payments;
    data.dp_method = data.dp_method;

    if (
        data.total_amount !== purchaseOrder.total_price_tax ||
        data.total_taxes !== purchaseOrder.total_tax ||
        data.total_price_item !== purchaseOrder.total_price
    ) {
        throw new Error('Invoice details are different from Purchase Order');
    }

    return data;
}

exports.createInvoice = async (req) => {
    let data = req.body;
    if (
        !data.id ||
        (await apPurchaseDownPaymentInvoiceRepository.findById(data.id))
    ) {
        data.id = await generateApPurchaseDownPaymentInvoiceId();
    }

    data = await processInvoiceData(data);

    return await apPurchaseDownPaymentInvoiceRepository.create(data);
};

exports.findAll = async () => {
    return await apPurchaseDownPaymentInvoiceRepository.findAll();
};

exports.findById = async (id) => {
    return await apPurchaseDownPaymentInvoiceRepository.findById(id);
};

exports.findLatest = async () => {
    return await apPurchaseDownPaymentInvoiceRepository.findLatest();
};

exports.update = async (id, invoiceData) => {
    return await apPurchaseDownPaymentInvoiceRepository.update(id, invoiceData);
};

exports.delete = async (id) => {
    return await apPurchaseDownPaymentInvoiceRepository.delete(id);
};

exports.searchInvoices = async (req) => {
    const searchParams = req.body;
    if (!searchParams) {
        throw new Error('Missing search parameters in query string.');
    }
    return await apPurchaseDownPaymentInvoiceRepository.searchInvoices(
        searchParams,
    );
};

exports.generatePDF = async (id) => {
    const invoiceData = await this.findById(id);
    if (!invoiceData) {
        throw new Error('Invoice down payment not found');
    }
    return await generatePDFPurchaseInvoice(invoiceData);
};

exports.generateCSV = async () => {
    const invoices = await this.findAll();
    if (!invoices || invoices.length === 0) {
        throw new Error('No invoices down payment found');
    }
    const formattedInvoices = invoices.map(formatDownPaymentInvoiceForCSV);
    return await generateCSVPurchaseDownPaymentInvoice(formattedInvoices);
};

exports.updatePaymentStatus = async (id, paymentStatus) => {
    return await apPurchaseDownPaymentInvoiceRepository.updatePaymentStatus(
        id,
        paymentStatus,
    );
};

exports.updateSelectedFields = async (id, invoiceData) => {
    const allowedUpdates = ['invoice_date', 'due_date', 'description'];
    const attemptedUpdates = Object.keys(invoiceData);

    const isValidUpdate = attemptedUpdates.every((update) =>
        allowedUpdates.includes(update),
    );

    if (!isValidUpdate) {
        throw new Error(
            'Invalid update. Only Invoice Date, Due Date, Description, and DP Method can be updated.',
        );
    }

    return await apPurchaseDownPaymentInvoiceRepository.updateSelectedFields(
        id,
        invoiceData,
    );
};
