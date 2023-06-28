const AssetDepreciationService = require('../services/fa_asset_depreciation_service');

class AssetDepreciationController {
    async createAssetDepreciation(req, res) {
        try {
            const data = req.body;
            const assetDepreciation =
                await AssetDepreciationService.createNewAssetDepreciation(data);
            res.status(201).json({
                message: 'Asset depreciation created successfully',
                data: assetDepreciation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetDepreciation(req, res) {
        try {
            const assetDepreciation =
                await AssetDepreciationService.getAllAssetDepreciation();
            res.status(200).json({
                message: 'Get all asset depreciation',
                data: assetDepreciation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetDepreciationById(req, res) {
        try {
            const id = req.params.id;
            const assetDepreciation =
                await AssetDepreciationService.getAllAssetDepreciationById(id);
            res.status(200).json({
                message: 'Get asset depreciation by id',
                data: assetDepreciation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetDepreciationByName(req, res) {
        try {
            const name = req.params.name;
            const assetDepreciation =
                await AssetDepreciationService.getAllAssetDepreciationByName(
                    name,
                );
            res.status(200).json({
                message: 'Get asset depreciation by name',
                data: assetDepreciation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteAssetDepreciation(req, res) {
        try {
            const id = req.params.id;
            const assetDepreciation =
                await AssetDepreciationService.deleteAssetDepreciation(id);
            res.status(200).json({
                message: 'Delete asset depreciation by id',
                data: assetDepreciation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new AssetDepreciationController();
