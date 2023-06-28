const router = require('express').Router();
const taxitemController = require('../controllers/taxitemController');

router.get('/', taxitemController.getAllTaxItem);
router.post('/', taxitemController.createTaxItem);
router.put('/:id', taxitemController.updateTaxItem);
router.delete('/:id', taxitemController.deleteTaxItem);

module.exports = router;