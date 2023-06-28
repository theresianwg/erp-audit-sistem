'use strict';

const PositionService = require('../services/PositionService');

class PositionController {
    async getAllPositions(req, res, next) {
        try {
            const reqHR = await PositionService.getAllPositions();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getPositionById(req, res, next) {
        try {
            const reqHR = await PositionService.getPositionById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'Position not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createPosition(req, res, next) {
        try {
            const reqHR = await PositionService.createPosition(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updatePosition(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await PositionService.updatePosition(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Position not found' });
            }
            res.json({ message: 'Position updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deletePosition(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await PositionService.deletePosition(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Position not found' });
            }
            res.json({ message: 'Position deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PositionController();
