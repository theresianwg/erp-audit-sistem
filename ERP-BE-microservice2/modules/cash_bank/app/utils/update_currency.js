const cbCurrencyService = require('../services/cb_currency_service');
const currencyJsonReader = require('./currency_json_reader');

const updateCurrencies = async () => {
    try {
        await cbCurrencyService.updateCurrenciesFromJson();
        console.log('Currencies updated successfully from JSON');
    } catch (error) {
        console.error('Error:', error.message);
    }
};

updateCurrencies();
