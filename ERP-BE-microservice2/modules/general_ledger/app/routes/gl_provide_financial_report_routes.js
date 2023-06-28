const express = require('express');
const GlProvideFinancialReport = require('../controllers/Web_Service_Layer/gl_provide_financial_report_controller');

const router = express.Router();

router.get(
    '/providebalancesheet',
    GlProvideFinancialReport.ProvideBalanceSheetReport,
);
router.get('/generatebalancesheet', GlProvideFinancialReport.BalanceSheetReportGenerate)

module.exports = router;
