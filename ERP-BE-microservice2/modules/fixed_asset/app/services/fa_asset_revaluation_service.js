const AssetRevaluationRepository = require('../repositories/fa_asset_revaluation_repository');
const { generateAssetRevaluationId } = require('../utils/generateId');
class AssetRevaluationService {
    async createAssetRevaluation(data) {
        // const allAssetRevaluation = await AssetRevaluationRepository.getAllAssetRevaluation();
        // const size = allAssetRevaluation.length;
        return await AssetRevaluationRepository.createAssetRevaluation({
            id: generateAssetRevaluationId(),
            status: 'waiting',
            ...data,
        });
    }
    async getAllAssetRevaluation() {
        return await AssetRevaluationRepository.getAllAssetRevaluation();
    }
    async getAllAssetRevaluationById(id) {
        return await AssetRevaluationRepository.getAllAssetRevaluationById(id);
    }
    async getAllAssetRevaluationByName(name) {
        return await AssetRevaluationRepository.getAllAssetRevaluationByName(
            name,
        );
    }
    async deleteAssetRevaluation(id) {
        return await AssetRevaluationRepository.deleteAssetRevaluation(id);
    }
    async updateAssetRevaluation(id, data) {
        return await AssetRevaluationRepository.updateAssetRevaluation(
            id,
            data,
        );
    }
}

module.exports = new AssetRevaluationService();
