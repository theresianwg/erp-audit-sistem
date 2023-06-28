const { fa_asset_stock_take, fa_asset } = require('../../../../models');

class AssetStockTakeRepository {
    async createAssetStockTake(data) {
        return await fa_asset_stock_take.create(data);
    }
    async getAllAssetStockTake() {
        return await fa_asset_stock_take.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getAllAssetStockTakeById(id) {
        return await fa_asset_stock_take.findOne({ where: { id } });
    }
    async getAllAssetStockTakeByName(name) {
        return await fa_asset_stock_take.findOne({ where: { name } });
    }
    async deleteAssetStockTake(id) {
        return await fa_asset_stock_take.destroy({ where: { id } });
    }
    async updateAssetStockTake(id, data) {
        return await fa_asset_stock_take.update(data, { where: { id } });
    }
}

module.exports = new AssetStockTakeRepository();
