'use strict';

const JobOrderCostingRepository = require('../repositories/JobOrderCostingRepository');

class JobOrderCostingService {
    getAllJobOrderCostings() {
        return JobOrderCostingRepository.getAllJobOrderCostings();
    }

    getJobOrderCostingById(id) {
        return JobOrderCostingRepository.getJobOrderCostingById(id);
    }

    createJobOrderCosting(data) {
        return JobOrderCostingRepository.createJobOrderCosting(data);
    }

    updateJobOrderCosting(id, data) {
        return JobOrderCostingRepository.updateJobOrderCosting(id, data);
    }

    deleteJobOrderCosting(id) {
        return JobOrderCostingRepository.deleteJobOrderCosting(id);
    }
}

module.exports = new JobOrderCostingService();
