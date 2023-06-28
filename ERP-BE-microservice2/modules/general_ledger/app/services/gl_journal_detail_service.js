const GlJournalDetailRepository = require('../repositories/gl_journal_detail_repository');

class GlJournalDetailService {
    async createJournalDetail(data) {
        return await GlJournalDetailRepository.createJournalDetail(data);
    }
    async updateJournalDetail(id, data) {
        return await GlJournalDetailRepository.updateJournalDetail(id, data);
    }
    async deleteJournalDetail(id) {
        return await GlJournalDetailRepository.deleteJournalDetail(id);
    }
    async getJournalDetailByCode(code) {
        return await GlJournalDetailRepository.getJournalDetailByCode(code);
    }
    async getAllJournalDetail() {
        return await GlJournalDetailRepository.getAllJournalDetail();
    }
    //secondary
    async getAllJournalDetailByAccountType(id_account_type){
        return await GlJournalDetailRepository.getAllJournalDetailByAccountType(id_account_type);
    }
}
module.exports = new GlJournalDetailService();
