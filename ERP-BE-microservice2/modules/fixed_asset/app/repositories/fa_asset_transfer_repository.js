const { fa_asset_transfer, fa_asset } = require('../../../../models');

class AssetTransferRepository {
    async createAssetTransfer(data) {
        return await fa_asset_transfer.create(data);
    }
    async getAllAssetTransfer() {
        return await fa_asset_transfer.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getAllAssetTransferById(id) {
        return await fa_asset_transfer.findOne({ where: { id } });
    }
    async getAllAssetTransferByName(name) {
        return await fa_asset_transfer.findOne({ where: { name } });
    }
    async deleteAssetTransferById(id) {
        return await fa_asset_transfer.destroy({ where: { id } });
    }
    async updateAssetTransfer(id, data) {
        return await fa_asset_transfer.update(data, { where: { id } });
    }
}

module.exports = new AssetTransferRepository();
