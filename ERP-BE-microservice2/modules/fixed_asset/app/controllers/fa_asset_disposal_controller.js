const AssetDisposalService = require('../services/fa_asset_disposal_service');

class AssetDisposalController {
    async createAssetDisposal(req, res) {
        try {
            const data = req.body;
            const id = data.id_asset;
            const assetDisposal =
                await AssetDisposalService.createAssetDisposal(data, id);
            res.status(201).json({
                message: 'Asset disposal created successfully',
                data: assetDisposal,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetDisposal(req, res) {
        try {
            const assetDisposal =
                await AssetDisposalService.getAllAssetDisposal();
            res.status(200).json({
                message: 'Get all asset disposal',
                data: assetDisposal,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetDisposalById(req, res) {
        try {
            const id = req.params.id;
            const assetDisposal =
                await AssetDisposalService.getAllAssetDisposalById(id);
            res.status(200).json({
                message: 'Get asset disposal by id',
                data: assetDisposal,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetDisposalByName(req, res) {
        try {
            const name = req.params.name;
            const assetDisposal =
                await AssetDisposalService.getAllAssetDisposalByName(name);
            res.status(200).json({
                message: 'Get asset disposal by name',
                data: assetDisposal,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteAssetDisposal(req, res) {
        try {
            const id = req.params.id;
            const assetDisposal =
                await AssetDisposalService.deleteAssetDisposal(id);
            res.status(200).json({
                message: 'Asset disposal deleted successfully',
                data: assetDisposal,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateAssetDisposal(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const assetDisposal =
                await AssetDisposalService.updateAssetDisposal(id, data);
            res.status(200).json({
                message: 'Asset disposal updated successfully',
                data: assetDisposal,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new AssetDisposalController();
