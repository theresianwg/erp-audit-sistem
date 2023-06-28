const GlNumberingRepository = require('../repositories/gl_numbering_repository')

class GlNumberingService{
    async getAllNumberings(){
        return await GlNumberingRepository.getAllNumberings()
    }
    async getNumberingById(id){
        return await GlNumberingRepository.getNumberingById(id)
    }
    async createNumbering(data){
        return await GlNumberingRepository.createNumbering(data)
    }
}

module.exports = new GlNumberingService()