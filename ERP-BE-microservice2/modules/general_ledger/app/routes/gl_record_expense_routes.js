const express = require('express');
const GlRecordExpenseController = require('../controllers/Data_Access_Layer/gl_record_expense_controller');

const router = express.Router();

router.get('/', GlRecordExpenseController.getAllRecordExpense);
router.get('/getrecordexpensedetail/:recordexpensecode', GlRecordExpenseController.getAllRecordExpenseDetailByRecordExpense);
router.get('/lastrecordexpense',GlRecordExpenseController.getLastRecordExpense)
router.post('/', GlRecordExpenseController.createRecordExpense);
router.get('/recordexpensesort', GlRecordExpenseController.getAllRecordExpenseSort);
module.exports = router;
