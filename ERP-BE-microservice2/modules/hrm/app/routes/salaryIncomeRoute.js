'use strict';

const express = require('express');
const router = express.Router();
const SalaryIncomeController = require('../controllers/SalaryIncomeController');

router.get('/', SalaryIncomeController.getAllSalaryIncomes);
router.get('/:id', SalaryIncomeController.getSalaryIncomeById);
router.post('/', SalaryIncomeController.createSalaryIncome);
router.put('/', SalaryIncomeController.updateSalaryIncome);
router.delete('/', SalaryIncomeController.deleteSalaryIncome);

module.exports = router;
