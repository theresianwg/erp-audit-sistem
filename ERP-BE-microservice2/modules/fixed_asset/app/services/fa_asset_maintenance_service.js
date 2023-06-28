const AssetMaintenanceRepository = require('../repositories/fa_asset_maintenance_repository');
const { generateAssetMaintenanceId } = require('../utils/generateId');
class AssetMaintenanceService {
    async createAssetMaintenance(data) {
        // const allAssetMaintenance =
        //     await AssetMaintenanceRepository.getAllAssetMaintenance();
        // const size = allAssetMaintenance.length;
        return await AssetMaintenanceRepository.createAssetMaintenance({
            id: generateAssetMaintenanceId(),
            status: 'waiting',
            ...data,
        });
    }
    async getAllAssetMaintenance() {
        return await AssetMaintenanceRepository.getAllAssetMaintenance();
    }
    async getAllAssetMaintenanceById(id) {
        return await AssetMaintenanceRepository.getAllAssetMaintenanceById(id);
    }
    async getAllAssetMaintenanceByName(name) {
        return await AssetMaintenanceRepository.getAllAssetMaintenanceByName(
            name,
        );
    }
    async deleteAssetMaintenance(id) {
        return await AssetMaintenanceRepository.deleteAssetMaintenance(id);
    }
    async updateAssetMaintenance(id, data) {
        return await AssetMaintenanceRepository.updateAssetMaintenance(
            id,
            data,
        );
    }
}

module.exports = new AssetMaintenanceService();
