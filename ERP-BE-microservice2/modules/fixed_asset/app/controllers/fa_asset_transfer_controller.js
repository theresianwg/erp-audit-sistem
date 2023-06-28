const AssetTransferService = require('../services/fa_asset_transfer_service');
class AssetTransferController {
    async createAssetTransfer(req, res) {
        try {
            const data = req.body;
            const asset = await AssetTransferService.createAssetTransfer(data);
            // update asset departement
            // await AssetService.updateAsset(data.id_asset, {
            //   department: data.new_department,
            //   address: data.new_address,
            // });

            res.status(201).json({
                message: 'Asset transfer created successfully',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetTransfer(req, res) {
        try {
            const asset = await AssetTransferService.getAllAssetTransfer();
            res.status(200).json({
                message: 'Get all asset transfer',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetTransferById(req, res) {
        try {
            const id = req.params.id;
            const asset = await AssetTransferService.getAssetTransferById(id);
            res.status(200).json({
                message: 'Get asset transfer by id',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllAssetTransferByName(req, res) {
        try {
            const name = req.params.name;
            const asset = await AssetTransferService.getAssetTransferByName(
                name,
            );
            res.status(200).json({
                message: 'Get asset transfer by name',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteAssetTransfer(req, res) {
        try {
            const id = req.params.id;
            const asset = await AssetTransferService.deleteAssetTransferById(
                id,
            );
            res.status(200).json({
                message: 'Delete asset transfer by id',
                data: asset,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateAssetTransfer(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const asset = await AssetTransferService.updateAssetTransferById(
                id,
                data,
            );
            res.status(200).json({
                message: 'Update asset transfer by id',
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

module.exports = new AssetTransferController();
