'use strict';

const JobService = require('../services/jobService');
const RequestHRService = require('../services/requestHRService');

class JobController {
    async getAllJobs(req, res, next) {
        try {
            const reqHR = await JobService.getAllJobs();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getJobById(req, res, next) {
        try {
            const job = await JobService.getJobById(req.params.id);
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }

            res.json(job);
        } catch (error) {
            next(error);
        }
    }

    async createJob(req, res, next) {
        try {
            const reqHR = await JobService.createJob(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateJob(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await JobService.updateJob(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json({ message: 'Job updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteJob(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await JobService.deleteJob(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Job not found' });
            }
            res.json({ message: 'Job deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new JobController();
