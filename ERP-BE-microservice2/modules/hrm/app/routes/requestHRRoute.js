'use strict';

const express = require('express');
const router = express.Router();
const RequestHRController = require('../controllers/requestHRController');

router.get('/', RequestHRController.getAllRequestHR);
router.get('/:id', RequestHRController.getRequestHRById);
router.post('/action-type', RequestHRController.getRequestHRByActionType);
router.post('/', RequestHRController.createRequestHR);
router.put('/', RequestHRController.updateRequestHR);
router.delete('/', RequestHRController.deleteRequestHR);

module.exports = router;
