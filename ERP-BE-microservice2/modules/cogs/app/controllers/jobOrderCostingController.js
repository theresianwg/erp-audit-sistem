'use strict';

const JobOrderCostingService = require('../services/JobOrderCostingService');

class JobOrderCostingController {
    async getAllJobOrderCostings(req, res, next) {
        try {
            const reqHR = await JobOrderCostingService.getAllJobOrderCostings();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getJobOrderCostingById(req, res, next) {
        try {
            const reqHR = await JobOrderCostingService.getJobOrderCostingById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'JobOrderCosting not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createJobOrderCosting(req, res, next) {
        try {
            const reqHR = await JobOrderCostingService.createJobOrderCosting(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateJobOrderCosting(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await JobOrderCostingService.updateJobOrderCosting(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'JobOrderCosting not found' });
            }
            res.json({ message: 'JobOrderCosting updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteJobOrderCosting(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await JobOrderCostingService.deleteJobOrderCosting(id);
            if (result === 0) {
                return res.status(404).json({ message: 'JobOrderCosting not found' });
            }
            res.json({ message: 'JobOrderCosting deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new JobOrderCostingController();
