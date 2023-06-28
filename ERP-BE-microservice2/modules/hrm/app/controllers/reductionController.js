'use strict';

const ReductionService = require('../services/ReductionService');

class ReductionController {
    async getAllReductions(req, res, next) {
        try {
            const reqHR = await ReductionService.getAllReductions();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getReductionById(req, res, next) {
        try {
            const reqHR = await ReductionService.getReductionById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'Reduction not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createReduction(req, res, next) {
        try {
            const reqHR = await ReductionService.createReduction(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateReduction(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ReductionService.updateReduction(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Reduction not found' });
            }
            res.json({ message: 'Reduction updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteReduction(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ReductionService.deleteReduction(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Reduction not found' });
            }
            res.json({ message: 'Reduction deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ReductionController();
