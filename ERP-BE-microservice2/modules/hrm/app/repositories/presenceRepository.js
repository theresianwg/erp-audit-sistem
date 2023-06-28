'use strict';

const { Op } = require('sequelize');
const { Presence, Schedule } = require('../../../../models');

class PresenceRepository {
    async getAllPresences() {
        return await Presence.findAll();
    }

    async getPresenceById(id) {
        return await Presence.findByPk(id);
    }

    async createPresence(data) {
        return await Presence.create(data);
    }

    async updatePresence(id, data) {
        return await Presence.update(data, { where: { id } });
    }

    async deletePresence(id) {
        return await Presence.destroy({ where: { id } });
    }
}

module.exports = new PresenceRepository();
