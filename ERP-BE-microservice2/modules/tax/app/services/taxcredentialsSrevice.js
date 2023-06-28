const tataxcredentialsRepository = require('../repositories/tataxcredentialsRepository');

class taxcredentialsService {
    async createTaxCredentials(data) {
        return await tataxcredentialsRepository.createTaxCredentials(data);
    }

    async deleteTaxCredentials(id) {
        return await tataxcredentialsRepository.deleteTaxCredentials(id);
    }

    async updateTaxCredentials(id, data) {
        return await tataxcredentialsRepository.updateTaxCredentials(id, data);
    }

    async getAllTaxCredentials() {
        return await tataxcredentialsRepository.getAllTaxCredentials();
    }
}

module.exports = new taxcredentialsService();