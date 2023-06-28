'use strict';

const { SuperAdmin } = require('../../../../models');

class SuperAdminRepository {
    async getAllSuperAdmins() {
        return await SuperAdmin.findAll();
    }

    async getSuperAdminById(id) {
        return await SuperAdmin.findByPk(id);
    }

    async createSuperAdmin(data) {
        return await SuperAdmin.create(data);
    }

    async updateSuperAdmin(id, data) {
        return await SuperAdmin.update(data, { where: { id } });
    }

    async deleteSuperAdmin(id) {
        return await SuperAdmin.destroy({ where: { id } });
    }
}

module.exports = new SuperAdminRepository();
