'use strict';

const { Op } = require('sequelize');
const { Income } = require('../../../../models');

class IncomeRepository {
    async getAllIncomes() {
        return await Income.findAll();
    }

    async getIncomeById(id) {
        return await Income.findByPk(id);
    }

    async createIncome(data) {
        return await Income.create(data);
    }

    async updateIncome(id, data) {
        return await Income.update(data, { where: { id } });
    }

    async deleteIncome(id) {
        return await Income.destroy({ where: { id } });
    }
}

module.exports = new IncomeRepository();
