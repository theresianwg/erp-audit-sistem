const router = require('express').Router();
const PurchaseOrderController = require('../controllers/purchaseOrderController');

router.get('/', PurchaseOrderController.getPurchaseOrders);
router.post('/search', PurchaseOrderController.getPurchaseOrderById);
router.post('/', PurchaseOrderController.createPurchaseOrder);
router.post('/multi_suplier', PurchaseOrderController.createPurchaseOrderMultipleSupplier);
router.get('/checkbudget', PurchaseOrderController.checkBudget)
router.put('/create_debt', PurchaseOrderController.createDebt)

module.exports = router;
