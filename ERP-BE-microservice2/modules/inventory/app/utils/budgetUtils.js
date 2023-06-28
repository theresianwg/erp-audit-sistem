const BudgetService = require('../services/budgetService');
const ItemService = require('../services/itemService');
const GlCoaService = require('../../../general_ledger/app/services/gl_coa_service');
const {calTax} = require('../utils/calculate')

const checkBudgetByIdItem = async (id_item, quantity, currentAmountNeeded) => {
    const item = await ItemService.getById(id_item);
    const amountNeeded = item.buy_price * quantity + currentAmountNeeded;
    if (!item.id_coa) {
        return {
            budgetStatus: true,
            amountNeeded: amountNeeded,
        };
    }
    const budget = await BudgetService.getBudgetByCoaId(item.id_coa);
    if (parseInt(budget.BC_Amount) < amountNeeded) {
        return {
            budgetStatus: false,
            amountNeeded: amountNeeded,
        };
    }
    return {
        budgetStatus: true,
        amountNeeded: amountNeeded,
    };
};

const checkBudget = async () => {
    //coa cash
    // const coaCash = await BudgetService.getBudgetByCoaId(2);
    const coaCash = await GlCoaService.getCoaById(2);
    //coa bank mandiri
    // const coaBankMandiri = await BudgetService.getBudgetByCoaId(5);
    const coaBankMandiri = await GlCoaService.getCoaById(5);
    //coa bank bca
    // const coaBankBca = await BudgetService.getBudgetByCoaId(6);
    const coaBankBca = await GlCoaService.getCoaById(6);

    const budget = {
        coaCash: parseInt(coaCash.Coa_Opening_Balance),
        coaBankMandiri: parseInt(coaBankMandiri.Coa_Opening_Balance),
        coaBankBca: parseInt(coaBankBca.Coa_Opening_Balance),
        total: parseInt(coaCash.Coa_Opening_Balance) + parseInt(coaBankMandiri.Coa_Opening_Balance) + parseInt(coaBankBca.Coa_Opening_Balance),
    }

    return budget;
}

const checkBudgetPerItem = async (id_item, quantity, currentAmountNeeded, currentTaxNeeded, budget) => {
    const item = await ItemService.getById(id_item);
    const amountNeeded = item.buy_price * quantity + currentAmountNeeded;
    const taxNeeded = calTax(item.buy_price * quantity, 1) + currentTaxNeeded;
    if (budget < amountNeeded) {
        return {
            budgetStatus: false,
            amountNeeded: amountNeeded,
            taxNeeded: taxNeeded
        };
    }
    return {
        budgetStatus: true,
        amountNeeded: amountNeeded,
        taxNeeded: taxNeeded
    };
};


module.exports = {
    checkBudgetByIdItem,
    checkBudget,
    checkBudgetPerItem,
};
