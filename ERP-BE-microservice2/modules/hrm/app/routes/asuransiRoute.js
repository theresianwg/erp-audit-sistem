'use strict';

const express = require('express');
const router = express.Router();
const AsuransiController = require('../controllers/AsuransiController');

router.get('/', AsuransiController.getAllAsuransis);
router.get('/:id', AsuransiController.getAsuransiById);
router.post('/', AsuransiController.createAsuransi);
router.put('/', AsuransiController.updateAsuransi);
router.delete('/', AsuransiController.deleteAsuransi);

module.exports = router;
