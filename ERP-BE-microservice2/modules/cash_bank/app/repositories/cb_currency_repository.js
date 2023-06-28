const { Op } = require('sequelize');
const { CbCurrency } = require('../../../../models');

exports.getAllCurrencies = () => {
    return CbCurrency.findAll();
};

exports.bulkCreateCurrencies = (currencies) => {
    return CbCurrency.bulkCreate(currencies);
};

exports.updateCurrencies = async (currencies) => {
    await Promise.all(
        currencies.map(async (currency) => {
            await CbCurrency.update(
                {
                    name: currency.name,
                    symbol: currency.symbol,
                    code: currency.code,
                    updatedAt: new Date(),
                },
                { where: { id: currency.id } },
            );
        }),
    );
};

exports.searchCurrencies = async (searchParams) => {
    const searchConditions = [];

    if (searchParams.id) {
        searchConditions.push({ id: searchParams.id });
    }

    if (searchParams.name) {
        searchConditions.push({
            name: { [Op.like]: `%${searchParams.name}%` },
        });
    }

    if (searchParams.symbol) {
        searchConditions.push({
            symbol: { [Op.like]: `%${searchParams.symbol}%` },
        });
    }

    if (searchParams.code) {
        searchConditions.push({
            code: { [Op.like]: `%${searchParams.code}%` },
        });
    }

    return CbCurrency.findAll({
        where: {
            [Op.and]: searchConditions,
        },
    });
};
