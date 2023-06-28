'use strict';

const { Op } = require('sequelize');
const { JobOrderCosting } = require('../../../../models');

class JobOrderCostingRepository {
    async getAllJobOrderCostings() {
        return await JobOrderCosting.findAll();
    }

    async getJobOrderCostingById(id) {
        return await JobOrderCosting.findByPk(id);
    }

    async createJobOrderCosting(data) {
        return await JobOrderCosting.create(data);
    }

    async updateJobOrderCosting(id, data) {
        return await JobOrderCosting.update(data, { where: { id } });
    }

    async deleteJobOrderCosting(id) {
        return await JobOrderCosting.destroy({ where: { id } });
    }
}

module.exports = new JobOrderCostingRepository();
