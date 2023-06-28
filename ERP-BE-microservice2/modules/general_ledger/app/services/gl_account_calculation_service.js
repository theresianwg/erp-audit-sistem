class GlAccountCalculationService {
    getTotalCoaParentValueByPeriod(accountingPeriodId, journalDetailData, typeReport){
        if(typeReport === "BS"){
            // Buat Balance Sheet
            const listGroupAmountDTO = []
            for(let i = 0; i < Object.keys(journalDetailData).length;i++ ){
                const data = journalDetailData[i]
                if(data.GlJournal.dataValues.id_accounting_period == accountingPeriodId){
                    let GlGroupAmountDTO = {
                        id_coa          :parseInt(0),
                        Coa_Name        : '',
                        Coa_Number      :parseInt(0),
                        id_coa_parent   :parseInt(0),
                        Last_Period     : parseFloat(0),
                        Coa_Parent_Name : '',
                        id_account_type : parseInt(0),
                        AT_Name         : '',
                        id_coa_group    : parseInt(0),
                        CG_Name         : '',
                        Credit          : parseFloat(0),
                        Debit           : parseFloat(0),
                    }
                    GlGroupAmountDTO.id_coa = data.GlCoa.dataValues.id
                    GlGroupAmountDTO.Coa_Name = data.GlCoa.dataValues.Coa_Name
                    GlGroupAmountDTO.Coa_Number = data.GlCoa.dataValues.Coa_Number
                    GlGroupAmountDTO.id_coa_parent = data.GlCoa.dataValues.GlAccountType.dataValues.id
                    GlGroupAmountDTO.Coa_Parent_Name = data.GlCoa.dataValues.GlAccountType.dataValues.AT_Name
                    GlGroupAmountDTO.Last_Period = data.GlJournal.dataValues.GlAccountingPeriod.dataValues.AP_End_Date
                    GlGroupAmountDTO.id_account_type = data.GlCoa.dataValues.GlCoaGroup.dataValues.GlAccountType.dataValues.id
                    GlGroupAmountDTO.id_coa_group = data.GlCoa.dataValues.GlCoaGroup.dataValues.id
                    GlGroupAmountDTO.CG_Name = data.GlCoa.dataValues.GlCoaGroup.dataValues.CG_Name
                    GlGroupAmountDTO.Credit = data.JD_Credit
                    GlGroupAmountDTO.Debit = data.JD_Debit
                    GlGroupAmountDTO.AT_Name = data.GlCoa.dataValues.GlCoaGroup.dataValues.GlAccountType.dataValues.AT_Name
                    listGroupAmountDTO.push(GlGroupAmountDTO)
                }
            }
            return listGroupAmountDTO
        }
        else if(typeReport == "IS"){
            // Buat Income Statement
            const listIncomeStatementDTO = []
            for(let i = 0; i < Object.keys(journalDetailData).length;i++){
                let GlIncomeStatementDTO = {
                    id_coa: parseInt(0),
                    Coa_Name: '',
                    Coa_Number: parseInt(0),
                    id_coa_group: parseInt(0),
                    CG_Name: '',
                    id_coa_parent: parseInt(0),
                    Coa_Parent_Name: '',
                    Actual_Value: parseFloat(0),
                    Budget_Value: parseFloat(0),
                    Over_Budget: parseFloat(0),
                    Percentage_Of_Budget: parseFloat(0),
                };
            }
        }
    }
}

module.exports = new GlAccountCalculationService();
