'use strict';

const express = require('express');
const router = express.Router();
const BukpotController = require('../controllers/bukpotController');

router.get('/csv', BukpotController.generateBukpotCSV);
router.get('/:id/pdf', BukpotController.generateBukpotPDF);
router.get('/', BukpotController.getAllBukpots);
router.get('/:id', BukpotController.getBukpotById);
router.post('/salary', BukpotController.getSalary);
router.post('/', BukpotController.createBukpot);
router.put('/', BukpotController.updateBukpot);
router.delete('/', BukpotController.deleteBukpot);

module.exports = router;
