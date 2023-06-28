const router = require('express').Router();
const PurchaseRequestController = require('../controllers/purchaseRequestController');

router.get('/', PurchaseRequestController.getAllPurchaseRequest);
router.post('/search', PurchaseRequestController.getPurchaseRequestById);
router.post('/', PurchaseRequestController.createPurchaseRequest);

module.exports = router;
