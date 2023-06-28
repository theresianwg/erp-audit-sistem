'use strict';

const { Op } = require('sequelize');
const { SalaryIncome } = require('../../../../models');

class SalaryIncomeRepository {
    async getAllSalaryIncomes() {
        return await SalaryIncome.findAll();
    }

    async getSalaryIncomeById(id) {
        return await SalaryIncome.findByPk(id);
    }

    async createSalaryIncome(data) {
        return await SalaryIncome.create(data);
    }

    async updateSalaryIncome(id, data) {
        return await SalaryIncome.update(data, { where: { id } });
    }

    async deleteSalaryIncome(id) {
        return await SalaryIncome.destroy({ where: { id } });
    }
}

module.exports = new SalaryIncomeRepository();
