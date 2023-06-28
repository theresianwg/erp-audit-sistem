const GroupRepository = require('../repositories/fa_group_repository');

class GroupService {
    async createGroup(data) {
        return await GroupRepository.createGroup(data);
    }
    async getAllGroup() {
        return await GroupRepository.getAllGroup();
    }
    async getGroupById(id) {
        return await GroupRepository.getGroupById(id);
    }
    async getGroupByName(name) {
        return await GroupRepository.getGroupByName(name);
    }
    async deleteGroup(id) {
        return await GroupRepository.deleteGroup(id);
    }
    async updateGroup(id, data) {
        return await GroupRepository.updateGroup(id, data);
    }
}

module.exports = new GroupService();
