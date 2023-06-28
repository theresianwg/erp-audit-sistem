const cbCurrencyRepository = require('../repositories/cb_currency_repository');
const currencyJsonReader = require('../utils/currency_json_reader');

exports.getAllCurrencies = () => {
    return cbCurrencyRepository.getAllCurrencies();
};

exports.addCurrenciesFromJson = async () => {
    const currencyData = currencyJsonReader.readCurrencyJson();
    const currencies = Object.keys(currencyData).map((key) => ({
        id: key,
        name: currencyData[key].name,
        symbol: currencyData[key].symbol,
        code: currencyData[key].code,
        createdAt: new Date(),
        updatedAt: new Date(),
    }));

    await cbCurrencyRepository.bulkCreateCurrencies(currencies);
};

exports.updateCurrenciesFromJson = async () => {
    const currencyData = currencyJsonReader.readCurrencyJson();
    const currencies = Object.keys(currencyData).map((key) => ({
        id: key,
        name: currencyData[key].name,
        symbol: currencyData[key].symbol,
        code: currencyData[key].code,
    }));

    await cbCurrencyRepository.updateCurrencies(currencies);
};

exports.searchCurrencies = (searchTerm) => {
    return cbCurrencyRepository.searchCurrencies(searchTerm);
};
