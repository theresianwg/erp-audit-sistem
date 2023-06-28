'use strict';

const RequestHRRepository = require('../repositories/requestHRRepository');

class RequestHRService {
    getAllRequestHR() {
        return RequestHRRepository.getAllRequestHR();
    }

    getRequestHRById(id) {
        return RequestHRRepository.getRequestHRById(id);
    }

    async getRequestHRByActionType(actionType) {
        return RequestHRRepository.getRequestHRByActionType(actionType);
    }

    createRequestHR(data) {
        return RequestHRRepository.createRequestHR(data);
    }

    updateRequestHR(id, data) {
        return RequestHRRepository.updateRequestHR(id, data);
    }

    deleteRequestHR(id) {
        return RequestHRRepository.deleteRequestHR(id);
    }
}

module.exports = new RequestHRService();
