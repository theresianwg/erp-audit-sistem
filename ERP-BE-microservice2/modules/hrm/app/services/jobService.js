'use strict';

const JobRepository = require('../repositories/jobRepository');

class JobService {
    getAllJobs() {
        return JobRepository.getAllJobs();
    }

    getJobById(id) {
        return JobRepository.getJobById(id);
    }

    createJob(data) {
        return JobRepository.createJob(data);
    }

    updateJob(id, data) {
        return JobRepository.updateJob(id, data);
    }

    deleteJob(id) {
        return JobRepository.deleteJob(id);
    }
}

module.exports = new JobService();
