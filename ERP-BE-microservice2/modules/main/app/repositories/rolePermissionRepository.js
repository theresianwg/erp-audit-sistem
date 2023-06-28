'use strict';

const { RolePermission } = require('../../../../models');

class RolePermissionRepository {
    async getAllRolesPermissions() {
        return await RolePermission.findAll();
    }

    // tambahin get by role id + get by permission id
    // async getRolePermissionById(id) {
    //     return await RolePermission.findByPk(id, { include: 'permissions' });
    // }

    async createRolePermission(data) {
        return await RolePermission.create(data);
    }

    async deleteRolePermission(id) {
        return await RolePermission.destroy({ where: { id } });
    }
}

module.exports = new RolePermissionRepository();
