const GlRecordExpenseRepository = require('../repositories/gl_record_expense_repository')

class GlRecordExpenseService{
    async createRecordExpense(data) {
        return await GlRecordExpenseRepository.createRecordExpense(data)
    }
    async updateRecordExpense(id, data) {
        return await GlRecordExpenseRepository.updateRecordExpense(id,data)
    }
    async deleteRecordExpense(id) {
        return await GlRecordExpenseRepository.deleteRecordExpense(id)
    }
    async getRecordExpenseByCode(code) {
        return await GlRecordExpenseRepository.getRecordExpenseByCode(code)
    }
    async getLastRecordExpense() {
        return await GlRecordExpenseRepository.getLastRecordExpense()
    }
    async getAllRecordExpense() {
        return await GlRecordExpenseRepository.getAllRecordExpense()
    }
    async getAllRecordExpenseSort() {
        return await GlRecordExpenseRepository.getAllRecordExpenseSort()
    }
    async getAllRecordExpenseDetailByRecordExpense(RE_Code) {
        return await GlRecordExpenseRepository.getAllRecordExpenseDetailByRecordExpense(RE_Code)
    }

}

module.exports = new GlRecordExpenseService()