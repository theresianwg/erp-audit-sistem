const { fa_asset_maintenance, fa_asset } = require('../../../../models');

class AssetMaintenanceRepository {
    async createAssetMaintenance(data) {
        return await fa_asset_maintenance.create(data);
    }
    async getAllAssetMaintenance() {
        return await fa_asset_maintenance.findAll({
            include: [
                {
                    model: fa_asset,
                    attributes: ['name'],
                },
            ],
        });
    }
    async getAllAssetMaintenanceById(id) {
        return await fa_asset_maintenance.findOne({ where: { id } });
    }
    async getAllAssetMaintenanceByName(name) {
        return await fa_asset_maintenance.findOne({ where: { name } });
    }
    async deleteAssetMaintenance(id) {
        return await fa_asset_maintenance.destroy({ where: { id } });
    }
    async updateAssetMaintenance(id, data) {
        return await fa_asset_maintenance.update(data, { where: { id } });
    }
}

module.exports = new AssetMaintenanceRepository();
