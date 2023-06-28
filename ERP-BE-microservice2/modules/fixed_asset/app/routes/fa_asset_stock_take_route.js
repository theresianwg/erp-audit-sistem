const AssetStockTakeController = require('../controllers/fa_asset_stock_take_controller');

const router = require('express').Router();

router.post('/', AssetStockTakeController.createAssetStockTake);
router.get('/', AssetStockTakeController.getAllAssetStockTake);
router.get('/:id', AssetStockTakeController.getAllAssetStockTakeById);
router.get('/name/:name', AssetStockTakeController.getAllAssetStockTakeByName);
router.delete('/:id', AssetStockTakeController.deleteAssetStockTake);
router.put('/:id', AssetStockTakeController.updateAssetStockTake);

module.exports = router;
