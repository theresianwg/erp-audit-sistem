const Calculation_Helper = require('../../services/gl_account_calculation_service');
const Period_Helper = require('../../services/gl_accounting_period_service')
const Journal_Helper = require('../../services/gl_journal_detail_service');

class GlFinancialReportASL {
    //Di Web Service ngasih int sama String
    generateCashFlowReport(intNumber, ListGroupAmountDTO, bigDecimalNumber) {
        // id_cf and amount
        for (let i = 0; i < ListGroupAmountDTO.length; i++) {}
    }

    async getBalanceSheetData(id_accounting_period) {
        let totalAssetsValue = []
        let totalLiabilitiesValue = []
        let totalEquitiesValue = []
        let balanceSheetData = []
        const period = await Period_Helper.getAccountingPeriodById(id_accounting_period)
        const previousPeriod = await Period_Helper.getPreviousAccountingPeriod(period.dataValues.AP_End_Date)

        const journalAssetData = []
        const journalLiabilitiesData = []
        const journalEquitiesData = []

        const journalAssets = await Journal_Helper.getAllJournalDetailByCoaParent(1)
        const journalLiabilities = await Journal_Helper.getAllJournalDetailByCoaParent(2)
        const journalEquities = await Journal_Helper.getAllJournalDetailByCoaParent(3)
        //dicek apakah coagroupnya null
        for(let i = 0; i < Object.keys(journalAssets).length;i++ )
        {
            if(journalAssets[i].dataValues.GlCoa.GlCoaGroup != null){
                journalAssetData.push(journalAssets[i].dataValues)
            }
        }
        for(let i = 0; i < Object.keys(journalLiabilities).length;i++ )
        {
            if(journalLiabilities[i].dataValues.GlCoa.GlCoaGroup != null){
                journalLiabilitiesData.push(journalLiabilities[i].dataValues)
            }
        }
        for(let i = 0; i < Object.keys(journalEquities).length;i++ )
        {
            if(journalEquities[i].dataValues.GlCoa.GlCoaGroup != null){
                journalEquitiesData.push(journalEquities[i].dataValues)

            }
        }
        // GetTotalCoaParentByPeriod
        for (let i = 0; i < Object.keys(previousPeriod).length; i++){
            const previousPeriodId = previousPeriod[i].dataValues.id

            totalAssetsValue = Calculation_Helper.getTotalCoaParentValueByPeriod(previousPeriodId,journalAssetData, "BS")
            totalLiabilitiesValue = Calculation_Helper.getTotalCoaParentValueByPeriod(previousPeriodId,journalLiabilitiesData, "BS")
            totalEquitiesValue = Calculation_Helper.getTotalCoaParentValueByPeriod(previousPeriodId,journalEquitiesData, "BS")

            Object.keys(totalAssetsValue).length > 0 && balanceSheetData.push(totalAssetsValue)
            Object.keys(totalLiabilitiesValue).length > 0 && balanceSheetData.push(totalLiabilitiesValue)
            Object.keys(totalEquitiesValue).length > 0 && balanceSheetData.push(totalEquitiesValue)
        }
        return balanceSheetData
    }

    async getProfitAndLossData(id_accounting_period) {
        //Income atau Revenue sama aja
        let totalRevenue = []
        let totalExpenses = []
        let incomeStatementData = []
        const period = await Period_Helper.getAccountingPeriodById(id_accounting_period)
        const previousPeriod = await Period_Helper.getPreviousAccountingPeriod(period.dataValues.AP_End_Date)

        const journalRevenueData = []
        const journalExpenseData = []

        const journalRevenues = await Journal_Helper.getAllJournalDetailByCoaParent(4)
        const journalOtherRevenues = await Journal_Helper.getAllJournalDetailByCoaParent(7)
        const journalExpenses = await Journal_Helper.getAllJournalDetailByCoaParent(6)
        const journalOtherExpenses = await Journal_Helper.getAllJournalDetailByCoaParent(8)

        for(let i = 0; i < Object.keys(journalRevenues).length;i++ )
        {
            if(journalRevenues[i].dataValues.GlCoa.GlCoaGroup != null)journalRevenueData.push(journalRevenues[i].dataValues)
        }
        for(let i = 0; i < Object.keys(journalOtherRevenues).length;i++ )
        {
            if(journalOtherRevenues[i].dataValues.GlCoa.GlCoaGroup != null)journalRevenueData.push(journalOtherRevenues[i].dataValues)
        }
        for(let i = 0; i < Object.keys(journalExpenses).length;i++ )
        {
            if(journalExpenses[i].dataValues.GlCoa.GlCoaGroup != null)journalExpenseData.push(journalExpenses[i].dataValues)
        }
        for(let i = 0; i < Object.keys(journalOtherExpenses).length;i++ )
        {
            if(journalOtherExpenses[i].dataValues.GlCoa.GlCoaGroup != null)journalExpenseData.push(journalOtherExpenses[i].dataValues)
        }
        for (let i = 0; i < Object.keys(previousPeriod).length; i++){
            const previousPeriodId = previousPeriod[i].dataValues.id

            totalRevenue = Calculation_Helper.getTotalCoaParentValueByPeriod(previousPeriodId,journalRevenueData, "IS")
            totalLiabilitiesValue = Calculation_Helper.getTotalCoaParentValueByPeriod(previousPeriodId,journalLiabilitiesData, "IS")
            totalEquitiesValue = Calculation_Helper.getTotalCoaParentValueByPeriod(previousPeriodId,journalEquitiesData, "IS")

            // Object.keys(totalAssetsValue).length > 0 && balanceSheetData.push(totalAssetsValue)
            // Object.keys(totalLiabilitiesValue).length > 0 && balanceSheetData.push(totalLiabilitiesValue)
            // Object.keys(totalEquitiesValue).length > 0 && balanceSheetData.push(totalEquitiesValue)
        }
    }
    
}

module.exports = new GlFinancialReportASL();
