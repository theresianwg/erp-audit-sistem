'use strict';

const KartuKeluargaRepository = require('../repositories/kartuKeluargaRepository');

class KartuKeluargaService {
    getAllKartuKeluargas() {
        return KartuKeluargaRepository.getAllKartuKeluargas();
    }

    getKartuKeluargaById(id) {
        return KartuKeluargaRepository.getKartuKeluargaById(id);
    }

    createKartuKeluarga(data) {
        return KartuKeluargaRepository.createKartuKeluarga(data);
    }

    updateKartuKeluarga(id, data) {
        return KartuKeluargaRepository.updateKartuKeluarga(id, data);
    }

    deleteKartuKeluarga(id) {
        return KartuKeluargaRepository.deleteKartuKeluarga(id);
    }
}

module.exports = new KartuKeluargaService();
