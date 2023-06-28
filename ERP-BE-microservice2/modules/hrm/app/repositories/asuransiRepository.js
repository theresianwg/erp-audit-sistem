'use strict';

const { Op } = require('sequelize');
const { Asuransi } = require('../../../../models');

class AsuransiRepository {
    async getAllAsuransis() {
        return await Asuransi.findAll();
    }

    async getAsuransiById(id) {
        return await Asuransi.findByPk(id);
    }

    async createAsuransi(data) {
        return await Asuransi.create(data);
    }

    async updateAsuransi(id, data) {
        return await Asuransi.update(data, { where: { id } });
    }

    async deleteAsuransi(id) {
        return await Asuransi.destroy({ where: { id } });
    }
}

module.exports = new AsuransiRepository();
