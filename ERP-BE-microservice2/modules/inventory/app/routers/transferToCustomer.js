const router = require('express').Router();
const TransferToCustomerController = require('../controllers/transferToCustomerController');

router.post('/search', TransferToCustomerController.getTransferToCustomerById);
router.post('/', TransferToCustomerController.createTransferToCustomer);

module.exports = router;
