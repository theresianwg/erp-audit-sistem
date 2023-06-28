'use strict';

const { Op } = require('sequelize');
const { ABCPerMonth } = require('../../../../models');

class ABCPerMonthRepository {
    async getAllABCPerMonths() {
        return await ABCPerMonth.findAll();
    }

    async getABCPerMonthById(id) {
        return await ABCPerMonth.findByPk(id);
    }

    async createABCPerMonth(data) {
        return await ABCPerMonth.create(data);
    }

    async updateABCPerMonth(id, data) {
        return await ABCPerMonth.update(data, { where: { id } });
    }

    async deleteABCPerMonth(id) {
        return await ABCPerMonth.destroy({ where: { id } });
    }
}

module.exports = new ABCPerMonthRepository();
