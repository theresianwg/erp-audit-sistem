'use strict';

const SuperAdminRepository = require('../repositories/SuperAdminRepository');

class SuperAdminService {
    getAllSuperAdmins() {
        return SuperAdminRepository.getAllSuperAdmins();
    }

    getSuperAdminById(id) {
        return SuperAdminRepository.getSuperAdminById(id);
    }

    createSuperAdmin(data) {
        return SuperAdminRepository.createSuperAdmin(data);
    }

    updateSuperAdmin(id, data) {
        return SuperAdminRepository.updateSuperAdmin(id, data);
    }

    deleteSuperAdmin(id) {
        return SuperAdminRepository.deleteSuperAdmin(id);
    }
}

module.exports = new SuperAdminService();
