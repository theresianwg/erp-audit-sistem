const AssetRevaluationController = require('../controllers/fa_asset_revaluation_controller');

const router = require('express').Router();

router.post('/', AssetRevaluationController.createAssetRevaluation);
router.get('/', AssetRevaluationController.getAllAssetRevaluation);
router.get('/:id', AssetRevaluationController.getAllAssetRevaluationById);
router.get(
    '/name/:name',
    AssetRevaluationController.getAllAssetRevaluationByName,
);
router.delete('/:id', AssetRevaluationController.deleteAssetRevaluation);
router.put('/:id', AssetRevaluationController.updateAssetRevaluation);

module.exports = router;
