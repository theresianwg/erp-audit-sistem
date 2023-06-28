'use strict';

const { KartuKeluarga } = require('../../../../models');

class KartuKeluargaRepository {
    async getAllKartuKeluargas() {
        return await KartuKeluarga.findAll();
    }

    async getKartuKeluargaById(id) {
        return await KartuKeluarga.findByPk(id);
    }

    async createKartuKeluarga(data) {
        return await KartuKeluarga.create(data);
    }

    async updateKartuKeluarga(id, data) {
        return await KartuKeluarga.update(data, { where: { id } });
    }

    async deleteKartuKeluarga(id) {
        return await KartuKeluarga.destroy({ where: { id } });
    }
}

module.exports = new KartuKeluargaRepository();
