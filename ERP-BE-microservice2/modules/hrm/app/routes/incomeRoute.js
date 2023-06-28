'use strict';

const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/IncomeController');

router.get('/', IncomeController.getAllIncomes);
router.get('/:id', IncomeController.getIncomeById);
router.post('/', IncomeController.createIncome);
router.put('/', IncomeController.updateIncome);
router.delete('/', IncomeController.deleteIncome);

module.exports = router;
