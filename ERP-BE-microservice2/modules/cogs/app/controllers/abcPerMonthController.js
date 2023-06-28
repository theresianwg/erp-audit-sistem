'use strict';

const ABCPerMonthService = require('../services/ABCPerMonthService');

class ABCPerMonthController {
    async getAllABCPerMonths(req, res, next) {
        try {
            const reqHR = await ABCPerMonthService.getAllABCPerMonths();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getABCPerMonthById(req, res, next) {
        try {
            const reqHR = await ABCPerMonthService.getABCPerMonthById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'ABCPerMonth not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createABCPerMonth(req, res, next) {
        try {
            const reqHR = await ABCPerMonthService.createABCPerMonth(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateABCPerMonth(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ABCPerMonthService.updateABCPerMonth(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'ABCPerMonth not found' });
            }
            res.json({ message: 'ABCPerMonth updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteABCPerMonth(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ABCPerMonthService.deleteABCPerMonth(id);
            if (result === 0) {
                return res.status(404).json({ message: 'ABCPerMonth not found' });
            }
            res.json({ message: 'ABCPerMonth deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ABCPerMonthController();
