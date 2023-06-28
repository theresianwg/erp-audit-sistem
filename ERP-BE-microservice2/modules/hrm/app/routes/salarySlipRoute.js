'use strict';

const express = require('express');
const router = express.Router();
const SalarySlipController = require('../controllers/SalarySlipController');

router.get('/:id/pdf', SalarySlipController.generateSalarySlipPDF);
router.get('/csv', SalarySlipController.generateSalarySlipCSV);
router.get('/refresh', SalarySlipController.refreshAllSalarySlip);
router.post('/year', SalarySlipController.getSalarySlipByYear);
router.get('/', SalarySlipController.getAllSalarySlips);
router.get('/:id', SalarySlipController.getSalarySlipById);
router.post('/', SalarySlipController.createSalarySlip);
router.put('/', SalarySlipController.updateSalarySlip);
router.delete('/', SalarySlipController.deleteSalarySlip);

module.exports = router;
