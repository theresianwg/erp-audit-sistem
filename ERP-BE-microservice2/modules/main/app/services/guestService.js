'use strict';

const GuestRepository = require('../repositories/GuestRepository');

class GuestService {
    getAllGuests() {
        return GuestRepository.getAllGuests();
    }

    getGuestById(id) {
        return GuestRepository.getGuestById(id);
    }

    createGuest(data) {
        return GuestRepository.createGuest(data);
    }

    updateGuest(id, data) {
        return GuestRepository.updateGuest(id, data);
    }

    deleteGuest(id) {
        return GuestRepository.deleteGuest(id);
    }
}

module.exports = new GuestService();
