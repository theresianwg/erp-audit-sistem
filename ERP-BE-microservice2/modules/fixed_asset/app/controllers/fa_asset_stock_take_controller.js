const AssetStockTakeService = require('../services/fa_asset_stock_take_service');

class AssetStockTakeController {
    async createAssetStockTake(req, res) {
        try {
            const data = req.body;
            const assetStockTake =
                await AssetStockTakeService.createAssetStockTake(data);
            res.status(201).json({
                message: 'Asset stock take created successfully',
                data: assetStockTake,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetStockTake(req, res) {
        try {
            const assetStockTake =
                await AssetStockTakeService.getAllAssetStockTake();
            res.status(200).json({
                message: 'Get all asset stock take',
                data: assetStockTake,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetStockTakeById(req, res) {
        try {
            const id = req.params.id;
            const assetStockTake =
                await AssetStockTakeService.getAllAssetStockTakeById(id);
            res.status(200).json({
                message: 'Get asset stock take by id',
                data: assetStockTake,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetStockTakeByName(req, res) {
        try {
            const name = req.params.name;
            const assetStockTake =
                await AssetStockTakeService.getAllAssetStockTakeByName(name);
            res.status(200).json({
                message: 'Get asset stock take by name',
                data: assetStockTake,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateAssetStockTake(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const assetStockTake =
                await AssetStockTakeService.updateAssetStockTake(id, data);
            res.status(200).json({
                message: 'Update asset stock take',
                data: assetStockTake,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteAssetStockTake(req, res) {
        try {
            const id = req.params.id;
            const assetStockTake =
                await AssetStockTakeService.deleteAssetStockTake(id);
            res.status(200).json({
                message: 'Delete asset stock take',
                data: assetStockTake,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new AssetStockTakeController();
