'use strict';

const PermissionRepository = require('../repositories/permissionRepository');

class PermissionService {
    async getAllPermissions() {
        return await PermissionRepository.getAllPermissions();
    }

    async getPermissionById(id) {
        return PermissionRepository.getPermissionById(id);
    }

    async searchRole(id, name) {
        const whereClause = {};

        if (id) {
            whereClause.id = id;
        }

        if (name) {
            whereClause.name = name;
        }

        const roles = await Role.findAll({ where: whereClause });
        return roles;
    }

    async createPermission(data) {
        const useIdGenerator = !data.id;
        return PermissionRepository.createPermission(data, useIdGenerator);
    }

    async updatePermission(id, data) {
        return await PermissionRepository.updatePermission(id, data);
    }

    async deletePermission(id) {
        return await PermissionRepository.deletePermission(id);
    }

    async getPermissionsByModule(module) {
        return await PermissionRepository.getPermissionsByModule(module);
    }
}

module.exports = new PermissionService();
