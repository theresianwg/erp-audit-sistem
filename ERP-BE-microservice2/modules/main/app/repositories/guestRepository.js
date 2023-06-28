'use strict';

const { Guest } = require('../../../../models');

class GuestRepository {
    async getAllGuests() {
        return await Guest.findAll();
    }

    async getGuestById(id) {
        return await Guest.findByPk(id);
    }

    async createGuest(data) {
        return await Guest.create(data);
    }

    async updateGuest(id, data) {
        return await Guest.update(data, { where: { id } });
    }

    async deleteGuest(id) {
        return await Guest.destroy({ where: { id } });
    }
}

module.exports = new GuestRepository();
