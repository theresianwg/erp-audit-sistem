'use strict';

const RolePermissionRepository = require('../repositories/RolePermissionRepository');

class RolePermissionService {
    getAllRolePermissions() {
        return RolePermissionRepository.getAllRolesPermissions();
    }

    createRolePermission(data) {
        return RolePermissionRepository.createRolePermission(data);
    }

    deleteRolePermission(id) {
        return RolePermissionRepository.deleteRolePermission(id);
    }
}

module.exports = new RolePermissionService();
