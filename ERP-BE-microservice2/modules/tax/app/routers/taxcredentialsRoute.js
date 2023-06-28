const router = require('express').Router();
const taxcredentialsController = require('../controllers/taxcredentialsController');

router.get('/', taxcredentialsController.getAllTaxCredentials);
router.post('/', taxcredentialsController.createTaxCredentials);
router.put('/:id', taxcredentialsController.updateTaxCredentials);
router.delete('/:id', taxcredentialsController.deletaxcredentialsServiceteTax);

module.exports = router;