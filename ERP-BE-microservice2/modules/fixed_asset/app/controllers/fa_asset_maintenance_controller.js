const AssetMaintenanceService = require('../services/fa_asset_maintenance_service');

class AssetMaintenanceController {
    async createAssetMaintenance(req, res) {
        try {
            const data = req.body;
            const asset = await AssetMaintenanceService.createAssetMaintenance(
                data,
            );
            res.status(201).json({
                message: 'Asset maintenance created successfully',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetMaintenance(req, res) {
        try {
            const asset =
                await AssetMaintenanceService.getAllAssetMaintenance();
            res.status(200).json({
                message: 'Get all asset maintenance',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetMaintenanceById(req, res) {
        try {
            const id = req.params.id;
            const asset =
                await AssetMaintenanceService.getAllAssetMaintenanceById(id);
            res.status(200).json({
                message: 'Get asset maintenance by id',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetMaintenanceByName(req, res) {
        try {
            const name = req.params.name;
            const asset =
                await AssetMaintenanceService.getAllAssetMaintenanceByName(
                    name,
                );
            res.status(200).json({
                message: 'Get asset maintenance by name',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteAssetMaintenance(req, res) {
        try {
            const id = req.params.id;
            const asset = await AssetMaintenanceService.deleteAssetMaintenance(
                id,
            );
            res.status(200).json({
                message: 'Delete asset maintenance by id',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateAssetMaintenance(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const asset = await AssetMaintenanceService.updateAssetMaintenance(
                id,
                data,
            );
            res.status(200).json({
                message: 'Update asset maintenance by id',
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

module.exports = new AssetMaintenanceController();
