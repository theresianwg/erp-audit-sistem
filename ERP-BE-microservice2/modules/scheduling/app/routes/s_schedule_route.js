const scheduleController = require('../controllers/s_schedule_controller');
const router = require('express').Router();

router.post('/', scheduleController.createScheduleAuto);
router.get('/', scheduleController.getAllSchedule);

module.exports = router;
