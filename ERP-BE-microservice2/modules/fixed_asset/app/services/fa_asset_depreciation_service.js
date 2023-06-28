const AssetDepreciationRepository = require('../repositories/fa_asset_depreciation_repository');
const FiscalTypeService = require('./fa_fiscal_type_service');
const { generateAssetDepreciationId } = require('../utils/generateId');
class AssetDepreciationService {
    async createAssetDepreciation(asset, id_fiscal_type) {
        const fiscalType = await FiscalTypeService.getAllFiscalTypeById(
            id_fiscal_type,
        );
        const assetDepreciation = [];
        console.log(asset.price, 'sayang');
        if (fiscalType.depreciation_method == 'Metode Garis Lurus') {
            const dataDep = {};
            let depreciationAmount =
                (asset.price - asset.residual_value) /
                fiscalType.estimated_life;
            let accumulatedDepreciation = 0;
            let bookValue = asset.price;

            for (let i = 0; i < fiscalType.estimated_life; i++) {
                // const allAssetDepreciation =
                //     await AssetDepreciationRepository.getAllAssetDepreciation();
                // const size = allAssetDepreciation.length;
                if (i == 0) {
                    accumulatedDepreciation = depreciationAmount;
                    bookValue = asset.price - accumulatedDepreciation;
                } else {
                    accumulatedDepreciation += depreciationAmount;
                    bookValue = asset.price - accumulatedDepreciation;
                }
                dataDep.id_asset = asset.id;
                (dataDep.year =
                    i == 0
                        ? asset.purchase_date.getFullYear()
                        : asset.purchase_date.getFullYear() + i),
                    (dataDep.annual_depreciation = depreciationAmount);
                dataDep.monthly_depreciation = depreciationAmount / 12;
                dataDep.accumulated_depreciation = accumulatedDepreciation;
                dataDep.book_value = bookValue;
                console.log(dataDep);
                const createAssetDepreciationData =
                    await AssetDepreciationRepository.createAssetDepreciation({
                        id: generateAssetDepreciationId(),
                        ...dataDep,
                    });
                assetDepreciation.push(createAssetDepreciationData);
            }
        } else if (fiscalType.depreciation_method == 'Metode Saldo Menurun') {
            const dataDep = {};
            let percentage = asset.price / fiscalType.estimated_life;
            let doublePercentage = (2 * percentage) / asset.price;
            let accumulatedDepreciation = 0;
            let bookValue = asset.price;

            for (let i = 0; i < fiscalType.estimated_life; i++) {
                // const allAssetDepreciation =
                //     await AssetDepreciationRepository.getAllAssetDepreciation();
                // const size = allAssetDepreciation.length;
                let depreciationAmount = bookValue * doublePercentage;
                if (i == 0) {
                    accumulatedDepreciation = depreciationAmount;
                    bookValue -= accumulatedDepreciation;
                } else {
                    accumulatedDepreciation += depreciationAmount;
                    bookValue -= depreciationAmount;
                }
                dataDep.id_asset = asset.id;
                (dataDep.year =
                    i == 0
                        ? asset.purchase_date.getFullYear()
                        : asset.purchase_date.getFullYear() + i),
                    (dataDep.annual_depreciation = depreciationAmount);
                dataDep.monthly_depreciation = depreciationAmount / 12;
                dataDep.accumulated_depreciation = accumulatedDepreciation;
                dataDep.book_value = bookValue;
                console.log(dataDep);
                const createAssetDepreciationData =
                    await AssetDepreciationRepository.createAssetDepreciation({
                        id: generateAssetDepreciationId(),
                        ...dataDep,
                    });
                assetDepreciation.push(createAssetDepreciationData);
            }
        }
        return assetDepreciation;
    }
    async createNewAssetDepreciation(data) {
        return await AssetDepreciationRepository.createAssetDepreciation(data);
    }
    async getAllAssetDepreciation() {
        return await AssetDepreciationRepository.getAllAssetDepreciation();
    }
    async getAllAssetDepreciationById(id) {
        return await AssetDepreciationRepository.getAllAssetDepreciationById(
            id,
        );
    }
    async getAllAssetDepreciationByName(name) {
        return await AssetDepreciationRepository.getAllAssetDepreciationByName(
            name,
        );
    }
    async deleteAssetDepreciation(id) {
        return await AssetDepreciationRepository.deleteAssetDepreciation(id);
    }
    async updateAssetDepreciation(id, data) {
        return await AssetDepreciationRepository.updateAssetDepreciation(
            id,
            data,
        );
    }
}

module.exports = new AssetDepreciationService();
