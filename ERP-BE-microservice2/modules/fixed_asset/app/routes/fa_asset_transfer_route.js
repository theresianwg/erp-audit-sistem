const AssetTransferController = require('../controllers/fa_asset_transfer_controller');

const router = require('express').Router();

router.post('/', AssetTransferController.createAssetTransfer);
router.get('/', AssetTransferController.getAllAssetTransfer);
router.get('/:id', AssetTransferController.getAllAssetTransferById);
router.get('/name/:name', AssetTransferController.getAllAssetTransferByName);
router.delete('/:id', AssetTransferController.deleteAssetTransfer);
router.put('/:id', AssetTransferController.updateAssetTransfer);

module.exports = router;
