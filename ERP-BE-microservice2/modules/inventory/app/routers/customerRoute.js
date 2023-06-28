const router = require('express').Router();
const CustomerController = require('../controllers/customerController');

router.get('/', CustomerController.getCustomers);
router.post('/search', CustomerController.getCustomerById);

module.exports = router;