'use strict';

const express = require('express');
const router = express.Router();
const PresenceController = require('../controllers/PresenceController');

router.get('/', PresenceController.getAllPresences);
router.get('/:id', PresenceController.getPresenceById);
router.post('/', PresenceController.createPresence);
router.put('/', PresenceController.updatePresence);
router.delete('/', PresenceController.deletePresence);

module.exports = router;
