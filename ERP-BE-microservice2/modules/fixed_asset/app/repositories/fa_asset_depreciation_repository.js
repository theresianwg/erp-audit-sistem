const { fa_asset, fa_asset_depreciation } = require('../../../../models');

class AssetDepreciationRepository {
    async createAssetDepreciation(data) {
        return await fa_asset_depreciation.create(data);
    }
    async getAllAssetDepreciation() {
        return await fa_asset_depreciation.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getAllAssetDepreciationById(id) {
        return await fa_asset_depreciation.findAll({ where: { id_asset: id } });
    }
    async getAllAssetDepreciationByName(name) {
        return await fa_asset_depreciation.findOne({ where: { name } });
    }
    async deleteAssetDepreciation(id) {
        return await fa_asset_depreciation.destroy({ where: { id } });
    }
    async updateAssetDepreciation(id, data) {
        return await fa_asset_depreciation.update(data, { where: { id } });
    }
}

module.exports = new AssetDepreciationRepository();
