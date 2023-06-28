'use strict';

const EmployeeFamilyRepository = require('../repositories/EmployeeFamilyRepository');

class EmployeeFamilyService {
    getAllEmployeeFamilies() {
        return EmployeeFamilyRepository.getAllEmployeeFamilies();
    }

    getEmployeeFamilyById(id) {
        return EmployeeFamilyRepository.getEmployeeFamilyById(id);
    }

    createEmployeeFamily(data) {
        return EmployeeFamilyRepository.createEmployeeFamily(data);
    }

    deleteEmployeeFamily(id) {
        return EmployeeFamilyRepository.deleteEmployeeFamily(id);
    }
}

module.exports = new EmployeeFamilyService();
