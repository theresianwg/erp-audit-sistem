const {
    GlBudgetControl,
    GlCoa,
    GlCoaGroup,
    GlAccountingPeriod,
    GlAccountType
} = require('../../../../models');

class GlBudgetControlRepository {
    async createBudgetControl(data) {
        return await GlBudgetControl.create(data);
    }
    async updateBudgetControl(id, data) {
        return await GlBudgetControl.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteBudgetControl(id) {
        return await GlBudgetControl.destroy({
            where: {
                id: id,
            },
        });
    }
    async getBudgetControlById(id) {
        return await GlBudgetControl.findByPk(id, {
            include: [
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number'],
                    include: [
                        {
                            model: GlCoaGroup,
                            attributes: ['CG_Name', 'CG_Code'],
                            include: [
                                {
                                    model: GlAccountType,
                                    attributes: ['AT_Name', 'AT_Code'],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
    }
    async getBudgetControlByLastId() {
        const lastRecord = await GlBudgetControl.findOne({
            order: [['id', 'DESC']],
            include: [
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number'],
                    include: [
                        {
                            model: GlCoaGroup,
                            attributes: ['CG_Name', 'CG_Code'],
                            include: [
                                {
                                    model: GlAccountType,
                                    attributes: ['AT_Name', 'AT_Code'],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
        return lastRecord.id;
    }
    async getAllBudgetControl() {
        return await GlBudgetControl.findAll({
            include: [
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number'],
                    include: [
                        {
                            model: GlCoaGroup,
                            attributes: ['CG_Name', 'CG_Code'],
                            include: [
                                {
                                    model: GlAccountType,
                                    attributes: ['AT_Name', 'AT_Code'],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
    }
    async getAllBudgetControlSort() {
        return await GlBudgetControl.findAll({
            order: [['BC_Amount', 'DESC']],
            include: [
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number'],
                    include: [
                        {
                            model: GlCoaGroup,
                            attributes: ['CG_Name', 'CG_Code'],
                            include: [
                                {
                                    model: GlAccountType,
                                    attributes: ['AT_Name', 'AT_Code'],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: GlAccountingPeriod,
                    attributes: [
                        'AP_Name',
                        'AP_Start_Date',
                        'AP_End_Date',
                    ],
                },
            ],
        });
    }
}

module.exports = new GlBudgetControlRepository();
