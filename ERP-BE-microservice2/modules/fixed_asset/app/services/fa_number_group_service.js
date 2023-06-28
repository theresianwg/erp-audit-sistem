const NumberGroupRepository = require('../repositories/fa_number_group_repository');

class NumberGroupService {
    async createNumberGroup(data) {
        return await NumberGroupRepository.createNumberGroup(data);
    }
    async getAllNumberGroup() {
        return await NumberGroupRepository.getAllNumberGroup();
    }
    async getNumberGroupById(id) {
        const numberGroupByPk = await NumberGroupRepository.getNumberGroupById(
            id,
        );
        // console.log(numberGroupByPk);
        return numberGroupByPk;
    }
    async getNumberGroupByName(name) {
        return await NumberGroupRepository.getNumberGroupByName(name);
    }
    async deleteNumberGroup(id) {
        return await NumberGroupRepository.deleteNumberGroup(id);
    }
    async updateNumberGroup(id, data) {
        return await NumberGroupRepository.updateNumberGroup(id, data);
    }
}

module.exports = new NumberGroupService();
