'use strict';

const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/ScheduleController');

router.get('/', ScheduleController.getAllSchedules);
router.get('/:id', ScheduleController.getScheduleById);
router.post('/count', ScheduleController.countPresence);
router.post('/criteria', ScheduleController.getScheduleByCriteria);
router.post('/', ScheduleController.createSchedule);
router.put('/', ScheduleController.updateSchedule);
router.delete('/', ScheduleController.deleteSchedule);

module.exports = router;
