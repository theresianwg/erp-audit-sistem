const {
    GlTransactionType,
    GlJournalSource,
} = require('../../../../models')
class GlTransactionTypeRepository {
    async getTransactionTypeById(id) {
        return await GlTransactionType.findByPk(id,{
            include:[
                {
                    model: GlJournalSource
                }
            ]
        });
    }
    async getAllTransactionTypes() {
        return await GlTransactionType.findAll({
            include:[
                {
                    model: GlJournalSource
                }
            ]
        });
    }
    async createTransactionType(data){
        return await GlTransactionType.create(data);
    }
}

module.exports = new GlTransactionTypeRepository()