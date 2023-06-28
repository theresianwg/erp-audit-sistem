'use strict';

const { Op } = require('sequelize');
const { PTKP } = require('../../../../models');

class PTKPRepository {
    async getAllPTKPs() {
        return await PTKP.findAll();
    }

    async getPTKPById(id) {
        return await PTKP.findByPk(id);
    }

    async createPTKP(data) {
        return await PTKP.create(data);
    }

    async updatePTKP(id, data) {
        return await PTKP.update(data, { where: { id } });
    }

    async deletePTKP(id) {
        return await PTKP.destroy({ where: { id } });
    }
}

module.exports = new PTKPRepository();
