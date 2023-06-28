'use strict';

const { Op } = require('sequelize');
const { Department } = require('../../../../models');

class DepartmentRepository {
    async getAllDepartments() {
        return await Department.findAll();
    }

    async getDepartmentById(id) {
        return await Department.findByPk(id);
    }

    async createDepartment(data) {
        return await Department.create(data);
    }

    async updateDepartment(id, data) {
        return await Department.update(data, { where: { id } });
    }

    async deleteDepartment(id) {
        return await Department.destroy({ where: { id } });
    }
}

module.exports = new DepartmentRepository();
