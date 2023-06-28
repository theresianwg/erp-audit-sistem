const GlAccountingPeriodRepository = require('../repositories/gl_accounting_period_repository');

class GLAccountingPeriodService {
    //Primary Service
    async getAccountingPeriodById(id) {
        return await GlAccountingPeriodRepository.getAccountingPeriodById(id);
    }
    async createAccountingPeriod(data) {
        return await GlAccountingPeriodRepository.createAccountingPeriod(data);
    }
    async updateAccountingPeriod(id, data) {
        return await GlAccountingPeriodRepository.updateAccountingPeriod(
            id,
            data,
        );
    }
    async deleteAccountingPeriod(id) {
        return await GlAccountingPeriodRepository.deleteAccountingPeriod(id);
    }
    async getAllAccountingPeriod() {
        return await GlAccountingPeriodRepository.getAllAccountingPeriod();
    }
    //Secondary Service
    async getAccountingPeriodByCode(code) {
        return await GlAccountingPeriodRepository.getAccountingPeriodByCode(
            code,
        );
    }
    async getAccountingPeriodLastId() {
        return await GlAccountingPeriodRepository.getAccountingPeriodLastId();
    }
    async getPreviousAccountingPeriod(date) {
        return await GlAccountingPeriodRepository.getPreviousAccountingPeriod(
            date,
        );
    }
    async getAccountingPeriodSort() {
        return await GlAccountingPeriodRepository.getAccountingPeriodSort();
    }
}

module.exports = new GLAccountingPeriodService();
