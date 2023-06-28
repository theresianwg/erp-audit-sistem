'use strict';

const AmalRepository = require('../repositories/AmalRepository');

class AmalService {
    getAllAmals() {
        return AmalRepository.getAllAmals();
    }

    getAmalById(id) {
        return AmalRepository.getAmalById(id);
    }

    createAmal(data) {
        return AmalRepository.createAmal(data);
    }

    updateAmal(id, data) {
        return AmalRepository.updateAmal(id, data);
    }

    deleteAmal(id) {
        return AmalRepository.deleteAmal(id);
    }
}

module.exports = new AmalService();
