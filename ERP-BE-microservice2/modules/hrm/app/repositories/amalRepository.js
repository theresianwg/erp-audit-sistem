'use strict';

const { Op } = require('sequelize');
const { Amal } = require('../../../../models');

class AmalRepository {
    async getAllAmals() {
        return await Amal.findAll();
    }

    async getAmalById(id) {
        return await Amal.findByPk(id);
    }

    async createAmal(data) {
        return await Amal.create(data);
    }

    async updateAmal(id, data) {
        return await Amal.update(data, { where: { id } });
    }

    async deleteAmal(id) {
        return await Amal.destroy({ where: { id } });
    }
}

module.exports = new AmalRepository();
