'use strict';

const EmployeeRepository = require('../repositories/employeeRepository');

class EmployeeService {
    async getAllEmployees() {
        return await EmployeeRepository.getAllEmployees();
    }

    async getEmployeeById(nip) {
        return EmployeeRepository.getEmployeeById(nip);
    }

    async getEmployeeByEmail(email) {
        return EmployeeRepository.getEmployeeByEmail(email);
    }

    async createEmployee(data) {
        return EmployeeRepository.createEmployee(data);
    }

    async updateEmployee(nip, data) {
        return EmployeeRepository.updateEmployee(nip, data);
    }

    async deleteEmployee(nip) {
        return EmployeeRepository.deleteEmployee(nip);
    }
}

module.exports = new EmployeeService();
