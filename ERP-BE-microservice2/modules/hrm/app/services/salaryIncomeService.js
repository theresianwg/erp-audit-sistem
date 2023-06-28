'use strict';

const SalaryIncomeRepository = require('../repositories/SalaryIncomeRepository');
const PositionService = require('../services/positionService');
const EmployeeService = require('../../../main/app/services/employeeService');
const ScheduleService = require('../services/scheduleService');

class SalaryIncomeService {
    getAllSalaryIncomes() {
        return SalaryIncomeRepository.getAllSalaryIncomes();
    }

    getSalaryIncomeById(id) {
        return SalaryIncomeRepository.getSalaryIncomeById(id);
    }

    async getBasicSalary(data) {
        const employee = await EmployeeService.getEmployeeById(data.employeeId);
        const position = await PositionService.getPositionById(employee.positionId);

        let totalSalary = 0;

        const percentage = await ScheduleService.countPresence(data);

        totalSalary = position.salary * percentage;

        return totalSalary;
    }

    async createSalaryIncome(data) {
        return SalaryIncomeRepository.createSalaryIncome(data);
    }

    updateSalaryIncome(id, data) {
        return SalaryIncomeRepository.updateSalaryIncome(id, data);
    }

    deleteSalaryIncome(id) {
        return SalaryIncomeRepository.deleteSalaryIncome(id);
    }
}

module.exports = new SalaryIncomeService();
