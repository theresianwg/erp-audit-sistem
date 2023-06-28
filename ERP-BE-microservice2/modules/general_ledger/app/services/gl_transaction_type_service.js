const GlTransactionTypeRepository = require('../repositories/gl_transaction_type_repository')

class GlTransactionTypeService{
    async getAllTransactionTypes(){
        return await GlTransactionTypeRepository.getAllTransactionTypes()
    }
    async getTransactionTypeById(id){
        return await GlTransactionTypeRepository.getTransactionTypeById(id)
    }
    async createTransactionType(data){
        return await GlTransactionTypeRepository.createTransactionType(data)
    }
}

module.exports = new GlTransactionTypeService()