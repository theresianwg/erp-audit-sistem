const { fa_asset_revaluation, fa_asset } = require('../../../../models');

class AssetRevaluationRepository {
    async createAssetRevaluation(data) {
        return await fa_asset_revaluation.create(data);
    }
    async getAllAssetRevaluation() {
        return await fa_asset_revaluation.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getAllAssetRevaluationById(id) {
        return await fa_asset_revaluation.findOne({ where: { id } });
    }
    async getAllAssetRevaluationByName(name) {
        return await fa_asset_revaluation.findOne({ where: { name } });
    }
    async deleteAssetRevaluation(id) {
        return await fa_asset_revaluation.destroy({ where: { id } });
    }
    async updateAssetRevaluation(id, data) {
        return await fa_asset_revaluation.update(data, { where: { id } });
    }
}

module.exports = new AssetRevaluationRepository();
