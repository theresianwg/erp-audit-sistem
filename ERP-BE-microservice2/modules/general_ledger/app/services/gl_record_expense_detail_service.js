const GlRecordExpenseDetailRepository = require('../repositories/gl_record_expense_detail_repository')

class GlRecordExpenseDetailService{
    async createRecordExpenseDetail(data){
        return await GlRecordExpenseDetailRepository.createRecordExpenseDetail(data)
    }
    async updateRecordExpenseDetail(id, data){
        return await GlRecordExpenseDetailRepository.updateRecordExpenseDetail(id, data)
    }
    async deleteRecordExpenseDetail(id) {
        return await GlRecordExpenseDetailRepository.deleteRecordExpenseDetail(id)
    }
    async getRecordExpenseDetailById(id){
        return await GlRecordExpenseDetailRepository.getRecordExpenseDetailById(id)
    }
    async getAllRecordExpenseDetail() {
        return await GlRecordExpenseDetailRepository.getAllRecordExpenseDetail()
    }
}
module.exports = new GlRecordExpenseDetailService()