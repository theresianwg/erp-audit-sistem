'use strict';

const express = require('express');
const router = express.Router();
const ABCPerItemController = require('../controllers/ABCPerItemController');

router.get('/', ABCPerItemController.getAllABCPerItems);
router.get('/:id', ABCPerItemController.getABCPerItemById);
router.post('/', ABCPerItemController.createABCPerItem);
router.put('/', ABCPerItemController.updateABCPerItem);
router.delete('/', ABCPerItemController.deleteABCPerItem);

module.exports = router;
