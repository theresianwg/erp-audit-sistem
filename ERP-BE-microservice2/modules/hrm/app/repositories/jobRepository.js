'use strict';

const { Op } = require('sequelize');
const { Job, RequestHR } = require('../../../../models');

class JobRepository {
    async getAllJobs() {
        return await Job.findAll({
            include: [
                {
                    model: RequestHR,
                    as: 'reqHR',
                },
            ],
        });
    }

    async getJobById(id) {
        return await Job.findByPk(id, {
            include: [
                {
                    model: RequestHR,
                    as: 'reqHR',
                },
            ],
        });
    }

    async createJob(data) {
        return await Job.create(data);
    }

    async updateJob(id, data) {
        return await Job.update(data, { where: { id } });
    }

    async deleteJob(id) {
        return await Job.destroy({ where: { id } });
    }
}

module.exports = new JobRepository();
