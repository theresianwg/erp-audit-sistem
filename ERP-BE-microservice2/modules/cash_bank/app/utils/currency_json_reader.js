const fs = require('fs');
const path = require('path');

exports.readCurrencyJson = () => {
    // https://gist.github.com/ksafranski/2973986
    const filePath = path.join(
        __dirname,
        '../../../../common/common_currency.json',
    );
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};
