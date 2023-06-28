const accCalcASL = require('../Application_Service_Layer/gl_account_calculation_asl')

class ProvideCalculationValue{
    async ProvideCOGSValueByMonth(req,res){
        try {
            console.log("fetching")
            const {start_date, end_date} = req.query
            const COGSValue = await accCalcASL.GetCOGSValueByMonth(start_date, end_date)
            return res.status(200).json({
                status: 'success',
                message: 'COGS value retrieved successfully',
                data: COGSValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'COGS value retrieved failed',
            });
        }
    }
    async ProvideIncomeValueByMonth(req,res){
        try {
            const {start_date, end_date} = req.query
            const IncomeValue = await accCalcASL.GetIncomeValueByMonth(start_date, end_date)
            return res.status(200).json({
                status: 'success',
                message: 'Income value retrieved successfully',
                data: IncomeValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Income value retrieved failed',
            });
        }
    }
    async ProvideExpenseValueByMonth(req,res){
        try {
            const {start_date, end_date} = req.query
            const ExpenseValue = await accCalcASL.GetExpenseValueByMonth(start_date, end_date)
            return res.status(200).json({
                status: 'success',
                message: 'Expense value retrieved successfully',
                data: ExpenseValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Expense value retrieved failed',
            });
        }
    }
    ProvideCashBankAccountValueByMonth(req,res){
        try {
            const {startDate, endDate} = req.body
            const cashAccountValue = accCalcASL.GetCashAccountValueByMonth(startDate, endDate)
            if(!cashAccountValue){
                return res.status(404).json({
                    status: 'error',
                    message: 'Cash account value cannot be found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Cash account value retrieved successfully',
                data: cashAccountValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Cash account value retrieved failed',
            });
        }
    }
    ProvideNetIncomeByMonth(req,res){
        try {
            const {startDate, endDate} = req.body
            const netIncomeValue = accCalcASL.GetNetIncomeByMonth(startDate, endDate)
            if(!netIncomeValue){
                return res.status(404).json({
                    status: 'error',
                    message: 'Net Income value cannot be found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Net Income value retrieved successfully',
                data: netIncomeValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Net Income value retrieved failed',
            });
        }
    }
    ProvideReceivableAccountValueByMonth(req,res){
        try {
            const {startDate, endDate} = req.body
            const receivableValue = accCalcASL.GetTotalReceivablesByMonth(startDate, endDate)
            if(!receivableValue){
                return res.status(404).json({
                    status: 'error',
                    message: 'Receivable value cannot be found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Receivable value retrieved successfully',
                data: receivableValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Receivable value retrieved failed',
            });
        }
    }
    ProvideTotalAssetsByMonth(req,res){
        try {
            const {startDate, endDate} = req.body
            const assetValue = accCalcASL.GetAssetsValueByMonth(startDate, endDate)
            if(!assetValue){
                return res.status(404).json({
                    status: 'error',
                    message: 'Asset value cannot be found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Asset value retrieved successfully',
                data: assetValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Asset value retrieved failed',
            });
        }
    }
    ProvideTotalEquitiesByMonth(req,res){
        try {
            const {startDate, endDate} = req.body
            const equityValue = accCalcASL.GetEquitiesValueByMonth(startDate, endDate)
            if(!equityValue){
                return res.status(404).json({
                    status: 'error',
                    message: 'Equity value cannot be found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Equity value retrieved successfully',
                data: equityValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Equity value retrieved failed',
            });
        }
    }
    ProvideTotalLiabilitiesByMonth(req,res){
        try {
            const {startDate, endDate} = req.body
            const liabilityValue = accCalcASL.GetLiabilitiesValueByMonth(startDate, endDate)
            if(!liabilityValue){
                return res.status(404).json({
                    status: 'error',
                    message: 'Liability value cannot be found',
                });
            }
            return res.status(200).json({
                status: 'success',
                message: 'Liability value retrieved successfully',
                data: liabilityValue,
            });
        }
        catch (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Liability value retrieved failed',
            });
        }
    }
}

module.exports = new ProvideCalculationValue()