const UnaprovedItemRepository = require('../repositories/unaprovedItemRepository');

class UnaprovedItemService {
    async getAllUnaprovedItem() {
        try {
            const unaprovedItem =
                await UnaprovedItemRepository.getAllUnaprovedItem();
            return unaprovedItem;
        } catch (err) {
            throw err;
        }
    }

    async createUnaprovedItem(data) {
        try {
            const unaprovedItem =
                await UnaprovedItemRepository.createUnaprovedItem(data);
            return unaprovedItem;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new UnaprovedItemService();
