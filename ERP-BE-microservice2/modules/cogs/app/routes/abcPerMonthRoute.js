'use strict';

const express = require('express');
const router = express.Router();
const ABCPerMonthController = require('../controllers/ABCPerMonthController');

router.get('/', ABCPerMonthController.getAllABCPerMonths);
router.get('/:id', ABCPerMonthController.getABCPerMonthById);
router.post('/', ABCPerMonthController.createABCPerMonth);
router.put('/', ABCPerMonthController.updateABCPerMonth);
router.delete('/', ABCPerMonthController.deleteABCPerMonth);

module.exports = router;
