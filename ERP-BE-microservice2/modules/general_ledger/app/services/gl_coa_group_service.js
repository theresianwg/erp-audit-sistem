const GlCoaGroupRepository = require('../repositories/gl_coa_group_repository');
class GlCoaGroupService {
    //Primary Service
    async getCoaGroupById(id) {
        return await GlCoaGroupRepository.getCoaGroupById(id);
    }
    async createCoaGroup(data) {
        return await GlCoaGroupRepository.createCoaGroup(data);
    }
    async updateCoaGroup(id, data) {
        return await GlCoaGroupRepository.updateCoaGroup(id, data);
    }
    async deleteCoaGroup(id) {
        return await GlCoaGroupRepository.deleteCoaGroup(id);
    }
    async getAllCoaGroup() {
        return await GlCoaGroupRepository.getAllCoaGroup();
    }
    //Secondary Service
    async getCoaGroupByCode(code) {
        return await GlCoaGroupRepository.getCoaGroupByCode(code);
    }
    async getCoaGroupByLastId() {
        return await GlCoaGroupRepository.getCoaGroupByLastId();
    }
    async getCoaGroupLastIdWithPrefix(prefix) {
        return await GlCoaGroupRepository.getCoaGroupLastIdWithPrefix(prefix);
    }
    async getListCoaGroupMembers() {
        return await GlCoaGroupRepository.getListCoaGroupMembers();
    }
    async getListCoaGroupByAccType(code) {
        return await GlCoaGroupRepository.getListCoaGroupByAccType(code);
    }
    async getAllCoaGroupSort() {
        return await GlCoaGroupRepository.getAllCoaGroupSort();
    }
}

module.exports = new GlCoaGroupService();
