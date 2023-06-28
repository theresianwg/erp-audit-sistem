const express = require('express');
const GlRecordExpenseDetailController = require('../controllers/Data_Access_Layer/gl_record_expense_detail_controller');

const router = express.Router();

router.get('/', GlRecordExpenseDetailController.getAllRecordExpenseDetail);
router.post('/', GlRecordExpenseDetailController.createRecordExpenseDetail);
module.exports = router;
