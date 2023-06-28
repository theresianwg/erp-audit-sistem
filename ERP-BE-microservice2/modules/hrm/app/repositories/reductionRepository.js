'use strict';

const { Op } = require('sequelize');
const { Reduction } = require('../../../../models');

class ReductionRepository {
    async getAllReductions() {
        return await Reduction.findAll();
    }

    async getReductionById(id) {
        return await Reduction.findByPk(id);
    }

    async createReduction(data) {
        return await Reduction.create(data);
    }

    async updateReduction(id, data) {
        return await Reduction.update(data, { where: { id } });
    }

    async deleteReduction(id) {
        return await Reduction.destroy({ where: { id } });
    }
}

module.exports = new ReductionRepository();
