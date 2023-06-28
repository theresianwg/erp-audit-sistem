const express = require('express');
const router = express.Router();
const apPurchaseInvoiceController = require('../controllers/ap_purchase_invoice_controller');

router.get('/csv', apPurchaseInvoiceController.generateCSV);
router.post('/', apPurchaseInvoiceController.create);
router.get('/', apPurchaseInvoiceController.findAll);
router.get('/:id', apPurchaseInvoiceController.findById);
router.put('/:id', apPurchaseInvoiceController.update);
router.delete('/:id', apPurchaseInvoiceController.delete);
router.post('/search', apPurchaseInvoiceController.searchInvoices);
router.get('/invoices/latest', apPurchaseInvoiceController.findLatest);
router.get('/:id/pdf', apPurchaseInvoiceController.generatePDF);
router.put(
    '/:id/payment-status',
    apPurchaseInvoiceController.updatePaymentStatus,
);
router.put(
    '/:id/selected-fields',
    apPurchaseInvoiceController.updateSelectedFields,
);

module.exports = router;
