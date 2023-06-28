const { fa_asset, fa_fiscal_type } = require('../../../../models');

class AssetRepository {
    async createAsset(data) {
        return await fa_asset.create(data);
    }
    async getAllAsset() {
        return await fa_asset.findAll({
            include: [
                {
                    model: fa_fiscal_type,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getAllAssetById(id) {
        return await fa_asset.findOne({ where: { id } });
    }
    async getAllActiveAsset() {
        return await fa_asset.findAll({
            where: {
                status_asset: 'active',
            },
        });
    }
    async getAllAssetByName(name) {
        return await fa_asset.findOne({ where: { name } });
    }
    async deleteAsset(id) {
        return await fa_asset.destroy({ where: { id } });
    }
    async updateAsset(id, data) {
        return await fa_asset.update(data, { where: { id } });
    }
}
module.exports = new AssetRepository();
