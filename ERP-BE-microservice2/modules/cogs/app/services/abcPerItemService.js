'use strict';

const ABCPerItemRepository = require('../repositories/ABCPerItemRepository');

class ABCPerItemService {
    getAllABCPerItems() {
        return ABCPerItemRepository.getAllABCPerItems();
    }

    getABCPerItemById(id) {
        return ABCPerItemRepository.getABCPerItemById(id);
    }

    createABCPerItem(data) {
        return ABCPerItemRepository.createABCPerItem(data);
    }

    updateABCPerItem(id, data) {
        return ABCPerItemRepository.updateABCPerItem(id, data);
    }

    deleteABCPerItem(id) {
        return ABCPerItemRepository.deleteABCPerItem(id);
    }
}

module.exports = new ABCPerItemService();
