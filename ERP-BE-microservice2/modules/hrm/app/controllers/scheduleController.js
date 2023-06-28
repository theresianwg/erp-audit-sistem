'use strict';

const ScheduleService = require('../services/ScheduleService');

class ScheduleController {
    async getAllSchedules(req, res, next) {
        try {
            const reqHR = await ScheduleService.getAllSchedules();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getScheduleById(req, res, next) {
        try {
            const reqHR = await ScheduleService.getScheduleById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'Schedule not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getScheduleByCriteria(req, res, next) {
        try {
            const { month, year } = req.body;

            if( month && !year ) {
                return res.status(404).json({ message: 'Criteria with month should also include year' });
            }

            const reqHR = await ScheduleService.getScheduleByCriteria(req.body);

            if (!reqHR) {
                return res.status(404).json({ message: 'Schedule not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async countPresence(req, res, next) {
        try {
            const { employeeId, month, year } = req.body;

            if (!employeeId) {
                return res.status(404).json({ message: 'EmployeeID is missing' });
            }

            if( month && !year ) {
                return res.status(404).json({ message: 'Criteria with month should also include year' });
            }

            const count = await ScheduleService.countPresence(req.body);

            if (!count) {
                return res.status(404).json({ message: 'Count error' });
            }
            res.json(count);
        } catch (error) {
            next(error);
        }
    }

    async createSchedule(req, res, next) {
        try {
            const reqHR = await ScheduleService.createSchedule(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateSchedule(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ScheduleService.updateSchedule(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Schedule not found' });
            }
            res.json({ message: 'Schedule updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteSchedule(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ScheduleService.deleteSchedule(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Schedule not found' });
            }
            res.json({ message: 'Schedule deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ScheduleController();
