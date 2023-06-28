'use strict';

const express = require('express');
const router = express.Router();
const SalaryReductionController = require('../controllers/SalaryReductionController');

router.get('/', SalaryReductionController.getAllSalaryReductions);
router.get('/:id', SalaryReductionController.getSalaryReductionById);
router.post('/', SalaryReductionController.createSalaryReduction);
router.put('/', SalaryReductionController.updateSalaryReduction);
router.delete('/', SalaryReductionController.deleteSalaryReduction);

module.exports = router;
