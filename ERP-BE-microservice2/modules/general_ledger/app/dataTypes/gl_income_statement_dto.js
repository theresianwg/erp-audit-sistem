const GlIncomeStatementDTO = {
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

module.exports = GlIncomeStatementDTO;
