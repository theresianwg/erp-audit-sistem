const cbCurrencyService = require('../services/cb_currency_service');
const currencyJsonReader = require('./currency_json_reader');

const createCurrencies = async () => {
    try {
        await cbCurrencyService.addCurrenciesFromJson();
        console.log('Currencies added successfully from JSON');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

createCurrencies();
