const AssetMaintenanceController = require('../controllers/fa_asset_maintenance_controller');

const router = require('express').Router();

router.post('/', AssetMaintenanceController.createAssetMaintenance);
router.get('/', AssetMaintenanceController.getAllAssetMaintenance);
router.get('/:id', AssetMaintenanceController.getAllAssetMaintenanceById);
router.get(
    '/name/:name',
    AssetMaintenanceController.getAllAssetMaintenanceByName,
);
router.delete('/:id', AssetMaintenanceController.deleteAssetMaintenance);
router.put('/:id', AssetMaintenanceController.updateAssetMaintenance);

module.exports = router;
