'use strict';

const DepartmentRepository = require('../repositories/departmentRepository');

class DepartmentService {
    getAllDepartments() {
        return DepartmentRepository.getAllDepartments();
    }

    getDepartmentById(id) {
        return DepartmentRepository.getDepartmentById(id);
    }

    createDepartment(data) {
        return DepartmentRepository.createDepartment(data);
    }

    updateDepartment(id, data) {
        return DepartmentRepository.updateDepartment(id, data);
    }

    deleteDepartment(id) {
        return DepartmentRepository.deleteDepartment(id);
    }
}

module.exports = new DepartmentService();
