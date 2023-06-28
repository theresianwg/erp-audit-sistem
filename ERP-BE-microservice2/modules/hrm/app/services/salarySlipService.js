'use strict';

const SalarySlipRepository = require('../repositories/SalarySlipRepository');

class SalarySlipService {
    getAllSalarySlips() {
        return SalarySlipRepository.getAllSalarySlips();
    }

    getSalarySlipById(id) {
        return SalarySlipRepository.getSalarySlipById(id);
    }

    getSalarySlipByYear(data) {
        return SalarySlipRepository.getSalarySlipByYear(data);
    }

    createSalarySlip(data) {
        return SalarySlipRepository.createSalarySlip(data);
    }

    updateSalarySlip(id, data) {
        return SalarySlipRepository.updateSalarySlip(id, data);
    }

    deleteSalarySlip(id) {
        return SalarySlipRepository.deleteSalarySlip(id);
    }
}

module.exports = new SalarySlipService();
