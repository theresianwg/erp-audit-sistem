'use strict';

const { Role } = require('../../../../models');

class RoleRepository {
    async getAllRoles() {
        return await Role.findAll({ include: 'permissions' });
    }

    async getRoleById(id) {
        return await Role.findByPk(id, { include: 'permissions' });
    }

    async createRole(data) {
        if (useIdGenerator) {
            data.id = await Role.generateId();
        }

        return await Role.create(data, { include: 'permissions' });
    }

    async updateRole(id, data) {
        return await Role.update(data, { where: { id } });
    }

    async deleteRole(id) {
        return await Role.destroy({ where: { id } });
    }
}

module.exports = new RoleRepository();
