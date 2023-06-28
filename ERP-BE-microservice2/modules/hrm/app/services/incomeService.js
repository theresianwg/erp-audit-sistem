'use strict';

const IncomeRepository = require('../repositories/IncomeRepository');

class IncomeService {
    getAllIncomes() {
        return IncomeRepository.getAllIncomes();
    }

    getIncomeById(id) {
        return IncomeRepository.getIncomeById(id);
    }

    createIncome(data) {
        return IncomeRepository.createIncome(data);
    }

    updateIncome(id, data) {
        return IncomeRepository.updateIncome(id, data);
    }

    deleteIncome(id) {
        return IncomeRepository.deleteIncome(id);
    }
}

module.exports = new IncomeService();
