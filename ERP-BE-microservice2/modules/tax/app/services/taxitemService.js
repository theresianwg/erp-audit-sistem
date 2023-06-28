const TaxItemRepository = require('../repositories/taxitemRepository');

class taxitemService {
    async createTaxItem(data) {
        return await TaxItemRepository.createTaxItem(data);
    }

    async deleteTaxItem(id) {
        return await TaxItemRepository.deleteTaxItem(taxid);
    }

    async updateTaxItem(id, data) {
        return await TaxItemRepository.updateTaxItem(taxid, item_id);
    }

    async getAllTaxItem() {
        return await TaxItemRepository.getAllTaxItem();
    }
}

module.exports = new taxitemService();