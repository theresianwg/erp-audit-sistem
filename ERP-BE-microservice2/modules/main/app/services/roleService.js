'use strict';

const RoleRepository = require('../repositories/roleRepository');

class RoleService {
    getAllRoles() {
        return RoleRepository.getAllRoles();
    }

    getRoleById(id) {
        return RoleRepository.getRoleById(id);
    }

    createRole(data) {
        return RoleRepository.createRole(data);
    }

    updateRole(id, data) {
        return RoleRepository.updateRole(id, data);
    }

    deleteRole(id) {
        return RoleRepository.deleteRole(id);
    }
}

module.exports = new RoleService();
