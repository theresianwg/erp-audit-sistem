const apPurchaseDownPaymentInvoiceService = require('../services/ap_purchase_down_payment_invoice_service');

async function processRequest(
    req,
    res,
    serviceFunction,
    successMessage,
    isIdParamRequired,
) {
    try {
        let result;
        if (isIdParamRequired) {
            result = await serviceFunction(req.params.id, req.body);
        } else {
            result = await serviceFunction(req);
        }
        res.status(200).json({ message: successMessage, result });
    } catch (error) {
        console.error(error.errors);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    create: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.createInvoice,
            'Successfully created invoice',
            false,
        );
    },

    findAll: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.findAll,
            'Successfully fetched all invoices',
        );
    },

    findById: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.findById,
            'Successfully fetched invoice',
            true,
        );
    },

    findLatest: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.findLatest,
            'Successfully fetched latest invoice',
        );
    },

    update: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.update,
            'Successfully updated invoice',
            true,
        );
    },

    delete: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.delete,
            'Successfully deleted invoice',
            true,
        );
    },

    searchInvoices: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.searchInvoices,
            'Successfully fetched invoices based on search parameters.',
            false,
        );
    },

    generatePDF: async (req, res) => {
        try {
            const id = req.params.id;
            const pdfBuffer =
                await apPurchaseDownPaymentInvoiceService.generatePDF(id);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader(
                'Content-Disposition',
                `attachment; filename=invoice_${id}.pdf`,
            );
            res.end(pdfBuffer);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    },

    generateCSV: async (req, res) => {
        try {
            const csvFilePath =
                await apPurchaseDownPaymentInvoiceService.generateCSV();
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader(
                'Content-Disposition',
                'attachment; filename=invoices.csv',
            );
            res.sendFile(csvFilePath);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updatePaymentStatus: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.updatePaymentStatus,
            'Successfully updated payment status',
            true,
        );
    },

    updateSelectedFields: async (req, res) => {
        await processRequest(
            req,
            res,
            apPurchaseDownPaymentInvoiceService.updateSelectedFields,
            'Successfully updated selected fields',
            true,
        );
    },
};
