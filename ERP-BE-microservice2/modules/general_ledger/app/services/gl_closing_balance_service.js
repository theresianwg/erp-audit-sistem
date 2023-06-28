const GlClosingBalanceRepository = require('../repositories/gl_closing_balance_repository')

class GlClosingBalanceService{
    async getClosingBalanceById(id){
        return await GlClosingBalanceRepository.getClosingBalanceById(id)
    }
}

module.exports = new GlClosingBalanceService()