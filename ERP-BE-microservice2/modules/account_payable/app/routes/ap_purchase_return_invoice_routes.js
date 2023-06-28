const express = require('express');
const router = express.Router();
const apPurchaseReturnInvoiceController = require('../controllers/ap_purchase_return_invoice_controller');

router.post('/', apPurchaseReturnInvoiceController.create);
router.get('/', apPurchaseReturnInvoiceController.findAll);
router.get('/:id', apPurchaseReturnInvoiceController.findById);
router.put('/:id', apPurchaseReturnInvoiceController.update);
router.delete('/:id', apPurchaseReturnInvoiceController.delete);

module.exports = router;
