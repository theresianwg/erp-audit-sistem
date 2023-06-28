'use strict';

const ABCPerMonthRepository = require('../repositories/ABCPerMonthRepository');

class ABCPerMonthService {
    getAllABCPerMonths() {
        return ABCPerMonthRepository.getAllABCPerMonths();
    }

    getABCPerMonthById(id) {
        return ABCPerMonthRepository.getABCPerMonthById(id);
    }

    createABCPerMonth(data) {
        return ABCPerMonthRepository.createABCPerMonth(data);
    }

    updateABCPerMonth(id, data) {
        return ABCPerMonthRepository.updateABCPerMonth(id, data);
    }

    deleteABCPerMonth(id) {
        return ABCPerMonthRepository.deleteABCPerMonth(id);
    }
}

module.exports = new ABCPerMonthService();
