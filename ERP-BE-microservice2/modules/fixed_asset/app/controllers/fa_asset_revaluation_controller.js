const AssetRevaluationService = require('../services/fa_asset_revaluation_service');

class AssetRevaluationController {
    async createAssetRevaluation(req, res) {
        try {
            const data = req.body;
            const assetRevaluation =
                await AssetRevaluationService.createAssetRevaluation(data);
            res.status(201).json({
                message: 'Asset revaluation created successfully',
                data: assetRevaluation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetRevaluation(req, res) {
        try {
            const assetRevaluation =
                await AssetRevaluationService.getAllAssetRevaluation();
            res.status(200).json({
                message: 'Get all asset revaluation',
                data: assetRevaluation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetRevaluationById(req, res) {
        try {
            const id = req.params.id;
            const assetRevaluation =
                await AssetRevaluationService.getAllAssetRevaluationById(id);
            res.status(200).json({
                message: 'Get asset revaluation by id',
                data: assetRevaluation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetRevaluationByName(req, res) {
        try {
            const name = req.params.name;
            const assetRevaluation =
                await AssetRevaluationService.getAllAssetRevaluationByName(
                    name,
                );
            res.status(200).json({
                message: 'Get asset revaluation by name',
                data: assetRevaluation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateAssetRevaluation(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const assetRevaluation =
                await AssetRevaluationService.updateAssetRevaluation(id, data);
            res.status(200).json({
                message: 'Asset revaluation updated successfully',
                data: assetRevaluation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteAssetRevaluation(req, res) {
        try {
            const id = req.params.id;
            const assetRevaluation =
                await AssetRevaluationService.deleteAssetRevaluation(id);
            res.status(200).json({
                message: 'Asset revaluation deleted successfully',
                data: assetRevaluation,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new AssetRevaluationController();
