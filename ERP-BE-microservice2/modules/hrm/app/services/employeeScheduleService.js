'use strict';

const EmployeeScheduleRepository = require('../repositories/EmployeeScheduleRepository');

class EmployeeScheduleService {
    getAllEmployeeSchedules() {
        return EmployeeScheduleRepository.getAllEmployeeSchedules();
    }

    getEmployeeScheduleById(id) {
        return EmployeeScheduleRepository.getEmployeeScheduleById(id);
    }

    createEmployeeSchedule(data) {
        return EmployeeScheduleRepository.createEmployeeSchedule(data);
    }

    deleteEmployeeSchedule(id) {
        return EmployeeScheduleRepository.deleteEmployeeSchedule(id);
    }
}

module.exports = new EmployeeScheduleService();
