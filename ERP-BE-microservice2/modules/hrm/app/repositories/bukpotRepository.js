'use strict';

const { Op } = require('sequelize');
const { Bukpot, PTKP } = require('../../../../models');

class BukpotRepository {
    async getAllBukpots() {
        return await Bukpot.findAll({
            include: [
                {
                    model: PTKP,
                    attributes: ['status', 'amount'],
                    as: 'ptkp',
                },
            ],
        });
    }

    async getBukpotById(id) {
        return await Bukpot.findByPk(id, {
            include: [
                {
                    model: PTKP,
                    attributes: ['status', 'amount'],
                    as: 'ptkp',
                },
            ],
        });
    }

    async createBukpot(data) {
        return await Bukpot.create(data);
    }

    async updateBukpot(id, data) {
        return await Bukpot.update(data, { where: { id } });
    }

    async deleteBukpot(id) {
        return await Bukpot.destroy({ where: { id } });
    }
}

module.exports = new BukpotRepository();
