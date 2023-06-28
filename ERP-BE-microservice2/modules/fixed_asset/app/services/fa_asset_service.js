const AssetRepository = require('../repositories/fa_asset_repository');
const AssetDepreciationService = require('../services/fa_asset_depreciation_service');
const AssetCategoryService = require('../services/fa_category_service');
const MachineService = require('../../../manufacturing/app/services/mf_machineService');
const { generateAssetId, generateAssetCode } = require('../utils/generateId');
const GroupRepository = require('../repositories/fa_group_repository');
const NumberGroupRepository = require('../repositories/fa_number_group_repository');
class AssetService {
    async createAsset(data) {
        const allAsset = await AssetRepository.getAllAsset();
        const size = allAsset.length;
        const group = await GroupRepository.getGroupByClassNumber(
            data.id_group,
        );
        const numberGroup = await NumberGroupRepository.getNumberGroupById(
            data.id_number_group,
        );
        const asset = await AssetRepository.createAsset({
            id: generateAssetId(),
            asset_code: generateAssetCode(
                group.class_number,
                numberGroup.group_number,
                size + 1,
            ),
            status: 'waiting',
            status_asset: 'active',
            ...data,
        });
        const category = await AssetCategoryService.getCategoryById(
            data.id_category,
        );
        const readDep = await AssetDepreciationService.createAssetDepreciation(
            asset,
            data.id_fiscal_type,
        );
        if (
            category.name == 'Machine' ||
            category.name == 'machine' ||
            category.name == 'Mesin' ||
            category.name == 'mesin'
        ) {
            console.log('masuk sini');
            const machine = await MachineService.create({
                id_asset: asset.id,
                m_status: 'available',
                m_costph: '',
                m_working_hour: '',
            });
            return [asset, readDep, machine];
        }
        return [asset, readDep];
    }
    async getAllAsset() {
        return await AssetRepository.getAllAsset();
    }
    async getAllAssetById(id) {
        return await AssetRepository.getAllAssetById(id);
    }
    async getAllAssetByName(name) {
        return await AssetRepository.getAllAssetByName(name);
    }
    async deleteAsset(id) {
        return await AssetRepository.deleteAsset(id);
    }
    async updateAsset(id, data) {
        return await AssetRepository.updateAsset(id, data);
    }
}

module.exports = new AssetService();
