const AssetDisposalRepository = require('../repositories/fa_asset_disposal_repository');
const AssetService = require('./fa_asset_service');
const { generateAssetDisposalId } = require('../utils/generateId');
class AssetDisposalService {
    async createAssetDisposal(data, id_asset) {
        // const allAssetDisposal =
        //     await AssetDisposalRepository.getAllAssetDisposal();
        // const size = allAssetDisposal.length;
        const assetDisposalData =
            await AssetDisposalRepository.createAssetDisposal({
                id: generateAssetDisposalId(),
                status: 'waiting',
                ...data,
            });
        await AssetService.deleteAsset(id_asset);
        return assetDisposalData;
    }
    async getAllAssetDisposal() {
        return await AssetDisposalRepository.getAllAssetDisposal();
    }
    async getAllAssetDisposalById(id) {
        return await AssetDisposalRepository.getAllAssetDisposalById(id);
    }
    async getAllAssetDisposalByName(name) {
        return await AssetDisposalRepository.getAllAssetDisposalByName(name);
    }
    async deleteAssetDisposal(id) {
        return await AssetDisposalRepository.deleteAssetDisposal(id);
    }
    async updateAssetDisposal(id, data) {
        return await AssetDisposalRepository.updateAssetDisposal(id, data);
    }
}

module.exports = new AssetDisposalService();
