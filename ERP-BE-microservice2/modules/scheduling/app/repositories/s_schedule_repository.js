const { s_schedule } = require('../../../../models');

class ScheduleRepository {
    async createScheduleAuto(data) {
        return await s_schedule.create(data);
    }
    async getAllSchedule() {
        return await s_schedule.findAll();
    }
}

module.exports = new ScheduleRepository();
