const SaveStorageController = require('../controllers/saveStorageController');
const router = require('express').Router();

router.post('/search_item', SaveStorageController.getSaveStorageByItemId);
router.post('/search_item_all', SaveStorageController.getAllSaveStorageByItemId);
router.post('/consume_stock', SaveStorageController.consumeStockSaveStorage);

module.exports = router;