'use strict';

const express = require('express');
const router = express.Router();
const JobController = require('../controllers/jobController');

router.get('/', JobController.getAllJobs);
router.get('/:id', JobController.getJobById);
router.post('/', JobController.createJob);
router.put('/', JobController.updateJob);
router.delete('/', JobController.deleteJob);

module.exports = router;
