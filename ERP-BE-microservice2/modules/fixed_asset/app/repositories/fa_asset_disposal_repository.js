const { fa_asset_disposal, fa_asset } = require('../../../../models');

class AssetDisposalRepository {
    async createAssetDisposal(data) {
        return await fa_asset_disposal.create(data);
    }
    async getAllAssetDisposal() {
        return await fa_asset_disposal.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getAllAssetDisposalById(id) {
        return await fa_asset_disposal.findOne({ where: { id } });
    }
    async getAllAssetDisposalByName(name) {
        return await fa_asset_disposal.findOne({ where: { name } });
    }
    async deleteAssetDisposal(id) {
        return await fa_asset_disposal.destroy({ where: { id } });
    }
    async updateAssetDisposal(id, data) {
        return await fa_asset_disposal.update(data, { where: { id } });
    }
}

module.exports = new AssetDisposalRepository();
