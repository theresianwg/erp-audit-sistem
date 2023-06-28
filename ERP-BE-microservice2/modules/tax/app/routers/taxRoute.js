const router = require('express').Router();
const taxController = require('../controllers/taxController');

router.get('/', taxController.getAllTax);
router.post('/', taxController.createTax);
router.put('/:id', taxController.updateTax);
router.delete('/:id', taxController.deleteTax);

module.exports = router;