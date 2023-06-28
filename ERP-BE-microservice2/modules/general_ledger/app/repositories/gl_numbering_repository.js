const {
    GlNumbering,
    GlTransactionType,
} = require('../../../../models')
class GlNumberingRepository {
    async getNumberingById(id) {
        return await GlNumbering.findByPk(id,{
            include:[
                {
                    model: GlTransactionType
                }
            ]
        });
    }
    async getAllNumberings() {
        return await GlNumbering.findAll({
            include:[
                {
                    model: GlTransactionType
                }
            ]
        });
    }
    async createNumbering(data){
        return await GlNumbering.create(data);
    }
}

module.exports = new GlNumberingRepository()