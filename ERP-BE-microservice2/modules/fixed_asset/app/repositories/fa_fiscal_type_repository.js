const { fa_fiscal_type } = require('../../../../models');

class FiscalTypeRepository {
    async createFiscalType(data) {
        return await fa_fiscal_type.create(data);
    }
    async getAllFiscalType() {
        return await fa_fiscal_type.findAll();
    }
    async getAllFiscalTypeById(id) {
        return await fa_fiscal_type.findOne({ where: { id } });
    }
    async getAllFiscalTypeByName(name) {
        return await fa_fiscal_type.findOne({ where: { name } });
    }
    async deleteFiscalType(id) {
        return await fa_fiscal_type.destroy({ where: { id } });
    }
    async updateFiscalType(id, data) {
        return await fa_fiscal_type.update(data, { where: { id } });
    }
}

module.exports = new FiscalTypeRepository();
