//just testing tax
const taxRate = (id_tax) => {
    switch (id_tax) {
        case 1:
            return 0.11;
        case 2:
            return 0.15;
        case 3:
            return 0.2;
    }
};

const calReorderPoint = (leadTime, safetyStock, averageDailySales) => {
    const reorderPoint = leadTime * averageDailySales + safetyStock;
    return reorderPoint;
};

const calPrice = (orderQuantity, unitCost) => {
    const price = orderQuantity * unitCost;
    return price;
};

const calTax = (price, taxValue) => {
    //use code below if we have tax value in database
    // const tax = price * taxValue;

    //just testing tax
    const tax = price * taxRate(taxValue);
    return tax;
};

const calTotalPriceTax = (price, tax) => {
    const priceTax = price + tax;
    return priceTax;
};

const calDP = (totalPrice, dpPercentage) => {
    const dp = (dpPercentage / 100) * totalPrice;
    return dp;
};

module.exports = {
    calReorderPoint,
    calPrice,
    calTax,
    calTotalPriceTax,
    calDP,
};
