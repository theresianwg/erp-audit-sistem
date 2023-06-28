'use strict';

const IncomeService = require('../services/IncomeService');

class IncomeController {
    async getAllIncomes(req, res, next) {
        try {
            const income = await IncomeService.getAllIncomes();
            res.json(income);
        } catch (error) {
            next(error);
        }
    }

    async getIncomeById(req, res, next) {
        try {
            const income = await IncomeService.getIncomeById(req.params.id);
            if (!income) {
                return res.status(404).json({ message: 'Income not found' });
            }
            res.json(income);
        } catch (error) {
            next(error);
        }
    }

    async createIncome(req, res, next) {
        try {
            const income = await IncomeService.createIncome(req.body);
            res.status(201).json(income);
        } catch (error) {
            next(error);
        }
    }

    async updateIncome(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await IncomeService.updateIncome(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Income not found' });
            }
            res.json({ message: 'Income updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteIncome(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await IncomeService.deleteIncome(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Income not found' });
            }
            res.json({ message: 'Income deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new IncomeController();
