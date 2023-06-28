const router = require('express').Router();
const SupplierController = require('../controllers/supplierController');

router.get('/', SupplierController.getSuppliers);
router.post('/search', SupplierController.getSupplierById);
router.post('/', SupplierController.createSupplier);
router.post('/items', SupplierController.createSupplierItem);

module.exports = router;