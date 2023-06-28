'use strict';

const PresenceRepository = require('../repositories/PresenceRepository');

class PresenceService {
    getAllPresences() {
        return PresenceRepository.getAllPresences();
    }

    getPresenceById(id) {
        return PresenceRepository.getPresenceById(id);
    }

    createPresence(data) {
        return PresenceRepository.createPresence(data);
    }

    updatePresence(id, data) {
        return PresenceRepository.updatePresence(id, data);
    }

    deletePresence(id) {
        return PresenceRepository.deletePresence(id);
    }
}

module.exports = new PresenceService();
