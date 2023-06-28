const {
    GlRecordExpenseDetail,
    GlAccountingPeriod,
    GlRecordExpense,
    GlNumbering
} = require('../../../../models');
class GlRecordExpenseRepository {
    async createRecordExpense(data) {
        return await GlRecordExpense.create(data);
    }
    async updateRecordExpense(id, data) {
        return await GlRecordExpense.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteRecordExpense(id) {
        return await GlRecordExpense.destroy({
            where: {
                id: id,
            },
        });
    }
    async getRecordExpenseByCode(code) {
        return await GlRecordExpense.findOne({
            where: {
                RE_Code: code,
            },
            include: [
                {
                    model: GlNumbering
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
    async getLastRecordExpense() {
        const lastRecord = await GlRecordExpense.findOne({
            order: [['id', 'DESC']],
        });
        return lastRecord;
    }
    async getAllRecordExpense() {
        return await GlRecordExpense.findAll({
            include: [
                {
                    model: GlNumbering,
                },
            ],
        });
    }
    async getAllRecordExpenseSort() {
        return await GlRecordExpense.findAll({
            order:[['RE_Post_Date','DESC']],
            include: [
                {
                    model: GlNumbering,
                }
            ],
        });
    }   
    async getAllRecordExpenseDetailByRecordExpense(RE_Code) {
        return await GlJournal.findOne({
            where:{
                RE_Code: RE_Code
            },
            include: [
                {
                    model: GlRecordExpenseDetail,
                    include:[
                        {
                            model:GlCoa
                        }
                    ]
                }
            ],
        });
    } 
}

module.exports = new GlRecordExpenseRepository();
