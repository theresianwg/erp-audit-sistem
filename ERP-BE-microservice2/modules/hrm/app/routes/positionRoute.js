'use strict';

const express = require('express');
const router = express.Router();
const PositionController = require('../controllers/positionController');

router.get('/', PositionController.getAllPositions);
router.get('/:id', PositionController.getPositionById);
router.post('/', PositionController.createPosition);
router.put('/', PositionController.updatePosition);
router.delete('/', PositionController.deletePosition);

module.exports = router;
