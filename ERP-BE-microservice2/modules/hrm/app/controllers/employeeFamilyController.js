'use strict';

const EmployeeFamilyService = require('../services/EmployeeFamilyService');

class EmployeeFamilyController {
    async getAllEmployeeFamilies(req, res, next) {
        try {
            const reqHR = await EmployeeFamilyService.getAllEmployeeFamilies();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getEmployeeFamilyById(req, res, next) {
        try {
            const reqHR = await EmployeeFamilyService.getEmployeeFamilyById(
                req.params.id,
            );
            if (!reqHR) {
                return res
                    .status(404)
                    .json({ message: 'EmployeeFamily not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createEmployeeFamily(req, res, next) {
        try {
            const reqHR = await EmployeeFamilyService.createEmployeeFamily(
                req.body,
            );
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async deleteEmployeeFamily(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await EmployeeFamilyService.deleteEmployeeFamily(id);
            if (result === 0) {
                return res
                    .status(404)
                    .json({ message: 'EmployeeFamily not found' });
            }
            res.json({ message: 'EmployeeFamily deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new EmployeeFamilyController();
