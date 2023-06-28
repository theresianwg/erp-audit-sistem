const scheduleService = require('../services/s_schedule_service');

class ScheduleController {
    async createScheduleAuto(req, res) {
        try {
            const data = req.body;
            const schedule = await scheduleService.createScheduleAuto(data);
            res.status(200).json({
                status: 'success',
                data: schedule,
            });
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    }
    async getAllSchedule(req, res) {
        try {
            const schedule = await scheduleService.getAllSchedule();
            res.status(200).json({
                status: 'success',
                data: schedule,
            });
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}

module.exports = new ScheduleController();
