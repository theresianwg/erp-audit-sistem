const AssetTransferRepository = require('../repositories/fa_asset_transfer_repository');
const AssetService = require('./fa_asset_service');
const { generateAssetTransferId } = require('../utils/generateId');
class AssetTransferService {
    async createAssetTransfer(data) {
        // const allAssetTransfer =
        //     await AssetTransferRepository.getAllAssetTransfer();
        // const size = allAssetTransfer.length;
        const asset = await AssetService.getAllAssetById(data.id_asset);
        console.log(asset);
        var old_address = asset.address;
        var old_department = asset.department;
        const assetTransfer = await AssetTransferRepository.createAssetTransfer(
            {
                id: generateAssetTransferId(),
                old_address: old_address,
                old_department: old_department,
                status: 'waiting',
                ...data,
            },
        );
        await AssetService.updateAsset(data.id_asset, {
            department: data.new_department,
            address: data.new_address,
        });
        return assetTransfer;
    }
    async getAllAssetTransfer() {
        return await AssetTransferRepository.getAllAssetTransfer();
    }
    async getAssetTransferById(id) {
        return await AssetTransferRepository.getAllAssetTransferById(id);
    }
    async getAssetTransferByName(name) {
        return await AssetTransferRepository.getAssetTransferByName(name);
    }
    async updateAssetTransferById(id, data) {
        return await AssetTransferRepository.updateAssetTransferById(id, data);
    }
    async deleteAssetTransferById(id) {
        return await AssetTransferRepository.deleteAssetTransferById(id);
    }
}

module.exports = new AssetTransferService();
