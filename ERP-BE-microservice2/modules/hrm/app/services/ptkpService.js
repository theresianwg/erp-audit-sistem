'use strict';

const PTKPRepository = require('../repositories/PTKPRepository');

class PTKPService {
    getAllPTKPs() {
        return PTKPRepository.getAllPTKPs();
    }

    getPTKPById(id) {
        return PTKPRepository.getPTKPById(id);
    }

    createPTKP(data) {
        return PTKPRepository.createPTKP(data);
    }

    updatePTKP(id, data) {
        return PTKPRepository.updatePTKP(id, data);
    }

    deletePTKP(id) {
        return PTKPRepository.deletePTKP(id);
    }
}

module.exports = new PTKPService();
