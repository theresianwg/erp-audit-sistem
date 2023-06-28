const GlJournalRepostiory = require('../../repositories/gl_journal_repository')

class GlAccountCalculationASL {
    //Buat Income Statement bagian Beban Pokok Penjualan / Harga Pokok Penjualan
    async GetCOGSValueByMonth(Start_Date, End_Date){
        const GlJournal = await GlJournalRepostiory.getJournalByDate(Start_Date,End_Date)
        let TotalCOGS = 0
        for(let i = 0; i < Object.keys(GlJournal).length ; i++){
            const GlJournalDetail = GlJournal[i].dataValues.GlJournalDetails
            for(let i = 0; i < Object.keys(GlJournalDetail).length; i++){
                if(GlJournalDetail[i].dataValues.id_coa == 37 && GlJournalDetail[i].dataValues.JD_Credit > 0){
                    TotalCOGS -= GlJournalDetail[i].dataValues.JD_Credit
                }
                else if(GlJournalDetail[i].dataValues.id_coa == 37 && GlJournalDetail[i].dataValues.JD_Debit > 0){
                    TotalCOGS += GlJournalDetail[i].dataValues.JD_Debit
                }
            }
        }
        return TotalCOGS
    }
    //Buat Income Statement bagian Pendapatan
    async GetIncomeValueByMonth(Start_Date, End_Date){
        const GlJournal = await GlJournalRepostiory.getJournalByDate(Start_Date,End_Date)
        let TotalIncome = 0
        for(let i = 0; i < Object.keys(GlJournal).length ; i++){
            const GlJournalDetail = GlJournal[i].dataValues.GlJournalDetails
            for(let i = 0; i < Object.keys(GlJournalDetail).length; i++){
                const accounttypeId = GlJournalDetail[i].dataValues.GlCoa.dataValues.GlAccountType.dataValues.id
                if((accounttypeId == 12 || accounttypeId == 16) && GlJournalDetail[i].dataValues.JD_Credit > 0){
                    TotalIncome -= GlJournalDetail[i].dataValues.JD_Credit
                }
                else if ((accounttypeId == 12 || accounttypeId == 16) && GlJournalDetail[i].dataValues.JD_Credit > 0){
                    TotalIncome += GlJournalDetail[i].dataValues.JD_Debit
                }
            }
        }
        return TotalIncome
    }
    //Buat Income Statement bagian Beban
    async GetExpenseValueByMonth(Start_Date, End_Date){
        const GlJournal = await GlJournalRepostiory.getJournalByDate(Start_Date,End_Date)
        let TotalExpense= 0
        for(let i = 0; i < Object.keys(GlJournal).length ; i++){
            const GlJournalDetail = GlJournal[i].dataValues.GlJournalDetails
            for(let i = 0; i < Object.keys(GlJournalDetail).length; i++){
                const accounttypeId = GlJournalDetail[i].dataValues.GlCoa.dataValues.GlAccountType.dataValues.id
                if((accounttypeId == 13 || accounttypeId == 14) && GlJournalDetail[i].dataValues.JD_Credit > 0){
                    TotalExpense -= GlJournalDetail[i].dataValues.JD_Credit
                }
                else if ((accounttypeId == 13 || accounttypeId == 14) && GlJournalDetail[i].dataValues.JD_Credit > 0){
                    TotalExpense += GlJournalDetail[i].dataValues.JD_Debit
                }
            }
        }
        return TotalExpense
    }
    GetAssetsValueByMonth(Start_Date, End_Date){

    }
    GetCashAccountValueByPeriod(id_accounting_period){

    }
    GetCashAccountValueByMonth(Start_Date, End_Date){

    }
    GetEquitiesValueByMonth(Start_Date, End_Date){

    }
    GetLiabilitiesValueByMonth(Start_Date, End_Date){

    }
    GetNetIncomeByMonth(Start_Date, End_Date){

    }
    GetNetIncomeByPeriod(id_accounting_period){

    }
    GetTotalAssets(id_account_type_asset){

    }
    GetTotalCashByMonth(Start_Date, End_Date){

    }
    GetTotalCOGSByPeriod(id_accounting_period){

    }
    GetTotalEquities(id_account_type_equity){

    }
    GetTotalLiabilities(id_account_type_liability){

    }
    GetTotalReceivablesByMonth(Start_Date, End_Date){

    }

}

module.exports = new GlAccountCalculationASL()