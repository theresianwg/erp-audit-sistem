const FiscalTypeRepository = require('../repositories/fa_fiscal_type_repository');
const { generateFiscalTypeId } = require('../utils/generateId');

class FiscalTypeService {
    async createFiscalType(data) {
        // const allFiscalType = await FiscalTypeRepository.getAllFiscalType();
        // const size = allFiscalType.length;
        const count = (1 * 100) / data.estimated_life;
        const data_fc = {
            id: generateFiscalTypeId(),
            depreciation_rate:
                data.depreciation_method === 'Metode Garis Lurus'
                    ? count
                    : 2 * count,
            ...data,
        };
        return await FiscalTypeRepository.createFiscalType(data_fc);
    }
    async getAllFiscalType() {
        return await FiscalTypeRepository.getAllFiscalType();
    }
    async getAllFiscalTypeById(id) {
        const fiscalTypeByPk = await FiscalTypeRepository.getAllFiscalTypeById(
            id,
        );
        // console.log(fiscalTypeByPk);
        return fiscalTypeByPk;
    }
    async getAllFiscalTypeByName(name) {
        return await FiscalTypeRepository.getAllFiscalTypeByName(name);
    }
    async deleteFiscalType(id) {
        return await FiscalTypeRepository.deleteFiscalType(id);
    }
    async updateFiscalType(id, data) {
        return await FiscalTypeRepository.updateFiscalType(id, data);
    }
}

module.exports = new FiscalTypeService();
