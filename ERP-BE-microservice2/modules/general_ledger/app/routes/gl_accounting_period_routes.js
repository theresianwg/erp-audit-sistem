const express = require('express');
const GlAccountingPeriodController = require('../controllers/Data_Access_Layer/gl_accounting_period_controller');

const router = express.Router();

router.get('/', GlAccountingPeriodController.getAllAccountingPeriod);
module.exports = router;
