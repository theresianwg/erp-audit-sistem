'use strict';

const express = require('express');
const router = express.Router();
const KartuKeluargaController = require('../controllers/kartuKeluargaController');

router.get('/', KartuKeluargaController.getAllKartuKeluargas);
router.get('/:id', KartuKeluargaController.getKartuKeluargaById);
router.post('/', KartuKeluargaController.createKartuKeluarga);
router.put('/', KartuKeluargaController.updateKartuKeluarga);
router.delete('/', KartuKeluargaController.deleteKartuKeluarga);

module.exports = router;
