'use strict';

const express = require('express');
const router = express.Router();
const GuestController = require('../controllers/GuestController');

router.get('/', GuestController.getAllGuests);
router.get('/:id', GuestController.getGuestById);
router.post('/', GuestController.createGuest);
router.put('/', GuestController.updateGuest);
router.delete('/', GuestController.deleteGuest);

module.exports = router;
