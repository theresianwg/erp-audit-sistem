const {
    GlCoa,
    GlRecordExpenseDetail,
    GlRecordExpense
} = require('../../../../models');

class GlRecordExpenseDetailRepository{
    async createRecordExpenseDetail(data) {
        return await GlRecordExpenseDetail.bulkCreate(data);
    }
    async updateRecordExpenseDetail(id, data) {
        return await GlRecordExpenseDetail.update(data, {
            where: {
                id: id,
            },
        });
    }
    async deleteRecordExpenseDetail(id) {
        return await GlRecordExpenseDetail.destroy({
            where: {
                id: id,
            },
        });
    }
    async getRecordExpenseDetailById(id) {
        return await GlRecordExpenseDetail.findByPk(id, {
            include: [
                {
                    model: GlRecordExpense,
                },
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number'],
                },
            ],
        });
    }
    async getAllRecordExpenseDetail() {
        return await GlRecordExpenseDetail.findAll({
            include: [
                {
                    model: GlRecordExpense,
                },
                {
                    model: GlCoa,
                    attributes: ['Coa_Name', 'Coa_Number']
                },
            ],
        });
    }
}

module.exports = new GlRecordExpenseDetailRepository();