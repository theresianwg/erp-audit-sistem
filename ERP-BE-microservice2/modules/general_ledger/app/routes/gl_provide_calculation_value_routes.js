const express = require('express');
const GlProvideCalculationValue = require('../controllers/Web_Service_Layer/gl_provide_calculation_value_controller');

const router = express.Router();

router.get('/providecogs/',GlProvideCalculationValue.ProvideCOGSValueByMonth);
router.get('/provideincome/',GlProvideCalculationValue.ProvideIncomeValueByMonth);
router.get('/provideexpense/',GlProvideCalculationValue.ProvideExpenseValueByMonth);

module.exports = router;
