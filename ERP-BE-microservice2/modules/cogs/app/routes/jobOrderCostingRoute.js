'use strict';

const express = require('express');
const router = express.Router();
const JobOrderCostingController = require('../controllers/JobOrderCostingController');

router.get('/', JobOrderCostingController.getAllJobOrderCostings);
router.get('/:id', JobOrderCostingController.getJobOrderCostingById);
router.post('/', JobOrderCostingController.createJobOrderCosting);
router.put('/', JobOrderCostingController.updateJobOrderCosting);
router.delete('/', JobOrderCostingController.deleteJobOrderCosting);

module.exports = router;
