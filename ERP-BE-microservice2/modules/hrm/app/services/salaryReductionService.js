'use strict';

const SalaryReductionRepository = require('../repositories/SalaryReductionRepository');

class SalaryReductionService {
    getAllSalaryReductions() {
        return SalaryReductionRepository.getAllSalaryReductions();
    }

    getSalaryReductionById(id) {
        return SalaryReductionRepository.getSalaryReductionById(id);
    }

    createSalaryReduction(data) {
        return SalaryReductionRepository.createSalaryReduction(data);
    }

    updateSalaryReduction(id, data) {
        return SalaryReductionRepository.updateSalaryReduction(id, data);
    }

    deleteSalaryReduction(id) {
        return SalaryReductionRepository.deleteSalaryReduction(id);
    }
}

module.exports = new SalaryReductionService();
