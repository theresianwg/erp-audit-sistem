'use strict';

const EmployeeScheduleService = require('../services/EmployeeScheduleService');

class EmployeeScheduleController {
    async getAllEmployeeSchedules(req, res, next) {
        try {
            const reqHR =
                await EmployeeScheduleService.getAllEmployeeSchedules();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getEmployeeScheduleById(req, res, next) {
        try {
            const reqHR = await EmployeeScheduleService.getEmployeeScheduleById(
                req.params.id,
            );
            if (!reqHR) {
                return res
                    .status(404)
                    .json({ message: 'EmployeeSchedule not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createEmployeeSchedule(req, res, next) {
        try {
            const reqHR = await EmployeeScheduleService.createEmployeeSchedule(
                req.body,
            );
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async deleteEmployeeSchedule(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await EmployeeScheduleService.deleteEmployeeSchedule(
                id,
            );
            if (result === 0) {
                return res
                    .status(404)
                    .json({ message: 'EmployeeSchedule not found' });
            }
            res.json({ message: 'EmployeeSchedule deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new EmployeeScheduleController();
