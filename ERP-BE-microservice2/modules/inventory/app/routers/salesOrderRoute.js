const router = require('express').Router();
const salesOrderController = require('../controllers/salesOrderController');

router.get('/', salesOrderController.getAllSalesOrder);
router.post('/search', salesOrderController.getSalesOrderByID);
router.post('/', salesOrderController.createSalesOrder);

module.exports = router;
