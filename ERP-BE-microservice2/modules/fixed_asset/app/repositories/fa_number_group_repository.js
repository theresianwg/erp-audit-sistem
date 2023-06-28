const { fa_number_group } = require('../../../../models');

class NumberGroupRepository {
    async createNumberGroup(data) {
        return await fa_number_group.create(data);
    }
    async getAllNumberGroup() {
        return await fa_number_group.findAll();
    }
    async getNumberGroupById(id) {
        return await fa_number_group.findOne({ where: { id } });
    }
    async getNumberGroupByName(name) {
        return await fa_number_group.findOne({ where: { name } });
    }
    async deleteNumberGroup(id) {
        return await fa_number_group.destroy({ where: { id } });
    }
    async updateNumberGroup(id, data) {
        return await fa_number_group.update(data, { where: { id } });
    }
}

module.exports = new NumberGroupRepository();
