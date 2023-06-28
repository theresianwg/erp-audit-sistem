'use strict';

const ScheduleRepository = require('../repositories/ScheduleRepository');

class ScheduleService {
    async getAllSchedules() {
        return await ScheduleRepository.getAllSchedules();
    }

    async getScheduleById(id) {
        return await ScheduleRepository.getScheduleById(id);
    }

    async getScheduleByCriteria(data) {
        return await ScheduleRepository.getScheduleByCriteria(data);
    }

    async countPresence(data) {
        const allPresence = await ScheduleRepository.countPresence(data);
        const attendedPresence = await ScheduleRepository.countPresence({...data, presence: "Hadir"});

        if (!allPresence) return 0;
        
        return attendedPresence / allPresence;
    }

    async createSchedule(data) {
        return await ScheduleRepository.createSchedule(data);
    }

    async updateSchedule(id, data) {
        return await ScheduleRepository.updateSchedule(id, data);
    }

    async deleteSchedule(id) {
        return await ScheduleRepository.deleteSchedule(id);
    }
}

module.exports = new ScheduleService();
