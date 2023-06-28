const AssetDepreciationController = require('../controllers/fa_asset_depreciation_controller');
const { Router } = require('express');

const router = Router();

router.post('/', AssetDepreciationController.createAssetDepreciation);
router.get('/', AssetDepreciationController.getAllAssetDepreciation);
router.get('/:id', AssetDepreciationController.getAllAssetDepreciationById);
module.exports = router;
