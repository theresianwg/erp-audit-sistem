'use strict';

const express = require('express');
const router = express.Router();
const PTKPController = require('../controllers/PTKPController');

router.get('/', PTKPController.getAllPTKPs);
router.get('/:id', PTKPController.getPTKPById);
router.post('/', PTKPController.createPTKP);
router.put('/', PTKPController.updatePTKP);
router.delete('/', PTKPController.deletePTKP);

module.exports = router;
