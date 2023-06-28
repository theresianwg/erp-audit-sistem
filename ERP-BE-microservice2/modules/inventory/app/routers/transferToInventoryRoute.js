const router = require('express').Router();
const TransferToInventoryController = require('../controllers/transferToInventoryController');

router.post('/search', TransferToInventoryController.getTfToInventoryById);
router.post('/', TransferToInventoryController.createTfToInventory);

module.exports = router;
