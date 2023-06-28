const AssetController = require('../controllers/fa_asset_controller');

const router = require('express').Router();

router.post('/', AssetController.createAsset);
router.get('/', AssetController.getAllAsset);
router.get('/:id', AssetController.getAllAssetById);
router.get('/name/:name', AssetController.getAllAssetByName);
router.delete('/:id', AssetController.deleteAsset);
router.put('/:id', AssetController.updateAsset);

module.exports = router;
