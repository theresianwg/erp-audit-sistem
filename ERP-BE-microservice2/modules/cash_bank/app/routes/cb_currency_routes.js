const express = require('express');
const router = express.Router();
const cbCurrencyController = require('../controllers/cb_currency_controller');

router.get('/', cbCurrencyController.getAllCurrencies);
router.post('/import-json', cbCurrencyController.addCurrenciesFromJson);
router.put('/update-json', cbCurrencyController.updateCurrenciesFromJson);
router.get('/search', cbCurrencyController.searchCurrencies);

module.exports = router;
