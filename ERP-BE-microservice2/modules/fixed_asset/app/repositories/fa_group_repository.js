const { fa_group } = require('../../../../models');

class GroupRepository {
    async createGroup(data) {
        return await fa_group.create(data);
    }
    async getAllGroup() {
        return await fa_group.findAll();
    }
    async getGroupById(id) {
        return await fa_group.findOne({ where: { id } });
    }
    async getGroupByName(name) {
        return await fa_group.findOne({ where: { name } });
    }
    async deleteGroup(id) {
        return await fa_group.destroy({ where: { id } });
    }
    async updateGroup(id, data) {
        return await fa_group.update(data, { where: { id } });
    }
}

module.exports = new GroupRepository();
