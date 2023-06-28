const TaxRepository = require('../repositories/taxRepository');

class TaxService {
    async createTax(data) {
        return await TaxRepository.createTax(data);
    }

    async deleteTax(id) {
        return await TaxRepository.deleteTax(id);
    }

    async updateTax(id, data) {
        return await TaxRepository.updateTax(id, data);
    }

    async getAllTax() {
        return await TaxRepository.getAllTax();
    }
}

module.exports = new TaxService();
