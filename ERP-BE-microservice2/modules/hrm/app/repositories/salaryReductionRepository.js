'use strict';

const { Op } = require('sequelize');
const { SalaryReduction } = require('../../../../models');

class SalaryReductionRepository {
    async getAllSalaryReductions() {
        return await SalaryReduction.findAll();
    }

    async getSalaryReductionById(id) {
        return await SalaryReduction.findByPk(id);
    }

    async createSalaryReduction(data) {
        return await SalaryReduction.create(data);
    }

    async updateSalaryReduction(id, data) {
        return await SalaryReduction.update(data, { where: { id } });
    }

    async deleteSalaryReduction(id) {
        return await SalaryReduction.destroy({ where: { id } });
    }
}

module.exports = new SalaryReductionRepository();
