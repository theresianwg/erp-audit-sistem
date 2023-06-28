'use strict';

const AsuransiRepository = require('../repositories/AsuransiRepository');

class AsuransiService {
    getAllAsuransis() {
        return AsuransiRepository.getAllAsuransis();
    }

    getAsuransiById(id) {
        return AsuransiRepository.getAsuransiById(id);
    }

    createAsuransi(data) {
        return AsuransiRepository.createAsuransi(data);
    }

    updateAsuransi(id, data) {
        return AsuransiRepository.updateAsuransi(id, data);
    }

    deleteAsuransi(id) {
        return AsuransiRepository.deleteAsuransi(id);
    }
}

module.exports = new AsuransiService();
