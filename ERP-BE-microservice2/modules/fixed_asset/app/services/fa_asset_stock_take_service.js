const AssetStockTakeRepository = require('../repositories/fa_asset_stock_take_repository');
const { generateAssetStockTakeId } = require('../utils/generateId');
class AssetStockTakeService {
    async createAssetStockTake(data) {
        // const allAssetStockTake =
        //     await AssetStockTakeRepository.getAllAssetStockTake();
        // const size = allAssetStockTake.length;
        const assetStock = await AssetStockTakeRepository.createAssetStockTake({
            id: generateAssetStockTakeId(),
            status: 'waiting',
            ...data,
        });

        return assetStock;
    }
    async getAllAssetStockTake() {
        return await AssetStockTakeRepository.getAllAssetStockTake();
    }
    async getAllAssetStockTakeById(id) {
        return await AssetStockTakeRepository.getAllAssetStockTakeById(id);
    }
    async getAllAssetStockTakeByName(name) {
        return await AssetStockTakeRepository.getAllAssetStockTakeByName(name);
    }
    async deleteAssetStockTake(id) {
        return await AssetStockTakeRepository.deleteAssetStockTake(id);
    }
    async updateAssetStockTake(id, data) {
        return await AssetStockTakeRepository.updateAssetStockTake(id, data);
    }
}

module.exports = new AssetStockTakeService();
