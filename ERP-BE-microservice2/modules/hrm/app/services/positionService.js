'use strict';

const PositionRepository = require('../repositories/positionRepository');

class PositionService {
    getAllPositions() {
        return PositionRepository.getAllPositions();
    }

    getPositionById(id) {
        return PositionRepository.getPositionById(id);
    }

    createPosition(data) {
        return PositionRepository.createPosition(data);
    }

    updatePosition(id, data) {
        return PositionRepository.updatePosition(id, data);
    }

    deletePosition(id) {
        return PositionRepository.deletePosition(id);
    }
}

module.exports = new PositionService();
