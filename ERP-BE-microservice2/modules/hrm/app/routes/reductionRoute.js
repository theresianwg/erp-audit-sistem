'use strict';

const express = require('express');
const router = express.Router();
const ReductionController = require('../controllers/ReductionController');

router.get('/', ReductionController.getAllReductions);
router.get('/:id', ReductionController.getReductionById);
router.post('/', ReductionController.createReduction);
router.put('/', ReductionController.updateReduction);
router.delete('/', ReductionController.deleteReduction);

module.exports = router;
