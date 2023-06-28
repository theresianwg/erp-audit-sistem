const cbCurrencyService = require('../services/cb_currency_service');

async function processRequest(
    req,
    res,
    serviceFunction,
    successMessage,
    searchParamsRequired = false,
) {
    try {
        let result;
        if (searchParamsRequired) {
            result = await serviceFunction(req.body);
        } else {
            result = await serviceFunction();
        }
        res.status(200).json({ message: successMessage, result });
    } catch (error) {
        console.error(error.errors);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllCurrencies: async (req, res) => {
        await processRequest(
            req,
            res,
            cbCurrencyService.getAllCurrencies,
            'Successfully fetched all currencies',
        );
    },

    addCurrenciesFromJson: async (req, res) => {
        await processRequest(
            req,
            res,
            cbCurrencyService.addCurrenciesFromJson,
            'Currencies added successfully from JSON',
        );
    },

    updateCurrenciesFromJson: async (req, res) => {
        await processRequest(
            req,
            res,
            cbCurrencyService.updateCurrenciesFromJson,
            'Currencies updated successfully from JSON',
        );
    },

    searchCurrencies: async (req, res) => {
        await processRequest(
            req,
            res,
            cbCurrencyService.searchCurrencies,
            'Successfully fetched currencies based on search parameters.',
            true,
        );
    },
};
