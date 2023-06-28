'use strict';

const ReductionRepository = require('../repositories/ReductionRepository');

class ReductionService {
    getAllReductions() {
        return ReductionRepository.getAllReductions();
    }

    getReductionById(id) {
        return ReductionRepository.getReductionById(id);
    }

    createReduction(data) {
        return ReductionRepository.createReduction(data);
    }

    updateReduction(id, data) {
        return ReductionRepository.updateReduction(id, data);
    }

    deleteReduction(id) {
        return ReductionRepository.deleteReduction(id);
    }
}

module.exports = new ReductionService();
