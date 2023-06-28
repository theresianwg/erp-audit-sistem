class GlGroupAmountDTO {
    constructor() {
        (this.id_coa_parent = parseInt(0)),
            (this.Last_Period = parseFloat(0)),
            (this.Coa_Parent_Name = ''),
            (this.id_account_type = parseInt(0)),
            (this.AT_Name = ''),
            (this.id_coa_group = parseInt(0)),
            (this.CG_Name = ''),
            (this.Credit = parseFloat(0)),
            (this.Debit = parseFloat(0));
    }
}

module.exports = new GlGroupAmountDTO();
