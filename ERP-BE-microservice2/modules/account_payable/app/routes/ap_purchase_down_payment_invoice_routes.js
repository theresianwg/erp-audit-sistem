const express = require('express');
const router = express.Router();
const apPurchaseDownPaymentInvoiceController = require('../controllers/ap_purchase_down_payment_invoice_controller');

router.get('/csv', apPurchaseDownPaymentInvoiceController.generateCSV);
router.post('/', apPurchaseDownPaymentInvoiceController.create);
router.get('/', apPurchaseDownPaymentInvoiceController.findAll);
router.get('/:id', apPurchaseDownPaymentInvoiceController.findById);
router.put('/:id', apPurchaseDownPaymentInvoiceController.update);
router.delete('/:id', apPurchaseDownPaymentInvoiceController.delete);
router.post('/search', apPurchaseDownPaymentInvoiceController.searchInvoices);
router.get(
    '/invoices/latest',
    apPurchaseDownPaymentInvoiceController.findLatest,
);
router.get('/:id/pdf', apPurchaseDownPaymentInvoiceController.generatePDF);
router.put(
    '/:id/payment-status',
    apPurchaseDownPaymentInvoiceController.updatePaymentStatus,
);
router.put(
    '/:id/selected-fields',
    apPurchaseDownPaymentInvoiceController.updateSelectedFields,
);

module.exports = router;
