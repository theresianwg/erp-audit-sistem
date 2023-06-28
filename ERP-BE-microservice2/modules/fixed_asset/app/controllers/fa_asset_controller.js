const AssetService = require('../services/fa_asset_service');

class AssetController {
    async createAsset(req, res) {
        try {
            const data = req.body;
            const asset = await AssetService.createAsset(data);

            res.status(201).json({
                message: 'Asset created successfully',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAsset(req, res) {
        try {
            const asset = await AssetService.getAllAsset();
            res.status(200).json({
                message: 'Get all asset',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetById(req, res) {
        try {
            const id = req.params.id;
            const asset = await AssetService.getAllAssetById(id);
            if (!asset) {
                res.status(404).json({
                    message: 'Asset not found',
                });
            }
            res.status(200).json({
                message: 'Get asset by id',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetByName(req, res) {
        try {
            const name = req.params.name;
            const asset = await AssetService.getAllAssetByName(name);
            res.status(200).json({
                message: 'Get asset by name',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteAsset(req, res) {
        try {
            const id = req.params.id;
            const asset = await AssetService.deleteAsset(id);
            res.status(200).json({
                message: 'Asset deleted successfully',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateAsset(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const asset = await AssetService.updateAsset(id, data);
            res.status(200).json({
                message: 'Asset updated successfully',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new AssetController();
