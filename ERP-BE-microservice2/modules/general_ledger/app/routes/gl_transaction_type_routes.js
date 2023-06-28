const express = require('express');
const GlTransactionTypeController = require('../controllers/Data_Access_Layer/gl_transaction_type_controller');

const router = express.Router();

router.get('/', GlTransactionTypeController.getAllTransactionType);
router.get('/:idtransactiontype', GlTransactionTypeController.getTransactionTypeById);
router.post('/', GlTransactionTypeController.createTransactionType);
module.exports = router;