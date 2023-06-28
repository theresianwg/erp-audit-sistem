const {
    InItem,
    GlCoa,
    InSalesOrderDetail,
    GlBudgetControl,
} = require('../../../../models');
const itemService = require('../../../inventory/app/services/itemService');
const GlAccountingPeriodService = require('../services/gl_accounting_period_service');

const getBudgetFromCoa = async (id_coa) => {
    return await GlBudgetControl.findAll({
        where: {
            id_coa: id_coa,
        },
    });
};
const compareDates = (start_date, end_date, so_date) => {
    let date1 = new Date(start_date).getTime();
    let date2 = new Date(so_date).getTime();
    let date3 = new Date(end_date).getTime();
    return date1 < date2 && date3 > date2 ? true : false;
};
// const calculateSOandBudget = async (created_at, sales_price, id_item) =>{
//     const Item = await itemService.getById(id_item)
//     const budget_control_coa = await getBudgetFromCoa(Item.id_coa)
//     console.log(typeof budget_control_coa)
//     // for(let i=0 ; i < budget_control_coa)
// const budget_control_coa_accounting_period = budget_control_coa.id_accounting_period
// const accounting_period = await GlAccountingPeriodService.getAccountingPeriodById(budget_control_coa_accounting_period)

//     const start_date= accounting_period.AP_Start_Date
//     const end_date = accounting_period.AP_End_Date

//     // const dataItemAndCoa = await getItemAndCoaFromSO()
//     // json_data = JSON.stringify(dataItemAndCoa)
//     // console.log(json_data.length)
//     // for(let i=0; i < Object.keys(dataItemAndCoa).length; i++){

//     // }
//     // console.log(Object.keys(dataItemAndCoa).length)
//     // for(property in dataItemAndCoa){

//     // }
//     // console.log(Object.keys(dataItemAndCoa))
//     // console.log(dataItemAndCoa[0]['dataValues'])
// }
const calculateSOandBudget = async () => {
    const id_item = 'IEP0001';
    const Item = await itemService.getById(id_item);
    const budget_control_coa = await getBudgetFromCoa(Item.dataValues.id_coa);
    for (let i = 0; i < Object.keys(budget_control_coa).length; i++) {
        const budget_control_coa_accounting_period =
            budget_control_coa[i].dataValues.id_accounting_period;
        const accounting_period =
            await GlAccountingPeriodService.getAccountingPeriodById(
                budget_control_coa_accounting_period,
            );
        const start_date = accounting_period.AP_Start_Date;
        const end_date = accounting_period.AP_End_Date;
        const so_date = '2012-12-27';
        const sale_price = 1200000;
        if (compareDates(start_date, end_date, so_date)) {
            console.log('true');
            new_bc_amount =
                budget_control_coa[i].dataValues.BC_Amount + sale_price;
            console.log(new_bc_amount);
        } else {
            console.log('false');
        }
    }
};

module.exports = {
    calculateSOandBudget,
};
