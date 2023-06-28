'use strict';

const express = require('express');
const router = express.Router();
const AmalController = require('../controllers/AmalController');

router.get('/', AmalController.getAllAmals);
router.get('/:id', AmalController.getAmalById);
router.post('/', AmalController.createAmal);
router.put('/', AmalController.updateAmal);
router.delete('/', AmalController.deleteAmal);

module.exports = router;
