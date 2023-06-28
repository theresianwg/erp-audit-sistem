const express = require('express');
const GlBudgetControlController = require('../controllers/Data_Access_Layer/gl_budget_control_controller');

const router = express.Router();

router.get('/', GlBudgetControlController.getAllBudgetControl);
router.post('/', GlBudgetControlController.createBudgetControl);
module.exports = router;
