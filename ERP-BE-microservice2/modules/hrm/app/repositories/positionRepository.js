'use strict';

const { Op } = require('sequelize');
const { Position } = require('../../../../models');

class PositionRepository {
    async getAllPositions() {
        return await Position.findAll();
    }

    async getPositionById(id) {
        return await Position.findByPk(id);
    }

    async createPosition(data) {
        return await Position.create(data);
    }

    async updatePosition(id, data) {
        return await Position.update(data, { where: { id } });
    }

    async deletePosition(id) {
        return await Position.destroy({ where: { id } });
    }
}

module.exports = new PositionRepository();
