const GlCoaRepository = require('../repositories/gl_coa_repository');
class GlCoaService {
    //Primary Service
    async getCoaById(id) {
        return await GlCoaRepository.getCoaById(id);
    }
    async createCoa(data) {
        return await GlCoaRepository.createCoa(data);
    }
    async updateCoa(id, data) {
        return await GlCoaRepository.updateCoa(id, data);
    }
    async deleteCoa(id) {
        return await GlCoaRepository.deleteCoa(id);
    }
    async getAllCoa() {
        // await calculateSOandBudget()
        return await GlCoaRepository.getAllCoa();
    }
    //Secondary Service
    async checkExistedCoaCode(code) {
        return await GlCoaRepository.checkExistedCoaCode(code);
    }
    async getAccountTypeMembers(code) {
        return await GlCoaRepository.getAccountTypeMembers(code);
    }
    async getCoaByCode(code) {
        return await GlCoaRepository.getCoaByCode(code);
    }
    async getCoaByCalcType(calcType) {
        return await GlCoaRepository.getCoaByCalcType(calcType);
    }
    async getCoaByLastId() {
        return await GlCoaRepository.getCoaByLastId();
    }
    async getCoaLastIdWithPrefix(prefix) {
        return await GlCoaRepository.getCoaLastIdWithPrefix(prefix);
    }
    async getListCoaByGroup(code) {
        return await GlCoaRepository.getListCoaByGroup(code);
    }
    async getAllCoaSort() {
        return await GlCoaRepository.getAllCoaSort();
    }
}

module.exports = new GlCoaService();
