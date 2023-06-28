const AssetDisposalController = require('../controllers/fa_asset_disposal_controller');
const router = require('express').Router();

router.post('/', AssetDisposalController.createAssetDisposal);
router.get('/', AssetDisposalController.getAllAssetDisposal);
router.get('/:id', AssetDisposalController.getAllAssetDisposalById);
router.get('/name/:name', AssetDisposalController.getAllAssetDisposalByName);
router.delete('/:id', AssetDisposalController.deleteAssetDisposal);
router.put('/:id', AssetDisposalController.updateAssetDisposal);

module.exports = router;
