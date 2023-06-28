'use strict';

const { Op } = require('sequelize');
const { RequestHR } = require('../../../../models');

class RequestHRRepository {
    async getAllRequestHR() {
        return await RequestHR.findAll();
    }

    async getRequestHRById(id) {
        return await RequestHR.findByPk(id);
    }

    async getRequestHRByActionType(actionType) {
        return RequestHR.findAll({
            where: {
                actionType: actionType,
            },
        });
    }

    async createRequestHR(data) {
        return await RequestHR.create(data);
    }

    async updateRequestHR(id, data) {
        return await RequestHR.update(data, { where: { id } });
    }

    async deleteRequestHR(id) {
        return await RequestHR.destroy({ where: { id } });
    }
}

module.exports = new RequestHRRepository();
