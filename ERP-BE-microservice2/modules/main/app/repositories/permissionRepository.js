'use strict';

const { Permission } = require('../../../../models');

class PermissionRepository {
    async getAllPermissions() {
        return await Permission.findAll();
    }

    async getPermissionById(id) {
        return await Permission.findByPk(id);
    }

    async createPermission(data, useIdGenerator = true) {
        if (useIdGenerator) {
            data.id = await Permission.generateId();
        }

        return await Permission.create(data);
    }

    async updatePermission(id, data) {
        return await Permission.update(data, { where: { id } });
    }

    async deletePermission(id) {
        return await Permission.destroy({ where: { id } });
    }

    async getPermissionsByModule(module) {
        return await Permission.findAll({ where: { module } });
    }
}

module.exports = new PermissionRepository();
