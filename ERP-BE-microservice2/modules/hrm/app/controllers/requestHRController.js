'use strict';

const RequestHRService = require('../services/requestHRService');

class RequestHRController {
    async getAllRequestHR(req, res, next) {
        try {
            const reqHR = await RequestHRService.getAllRequestHR();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getRequestHRById(req, res, next) {
        try {
            const reqHR = await RequestHRService.getRequestHRById(
                req.params.id,
            );
            if (!reqHR) {
                return res.status(404).json({ message: 'RequestHR not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getRequestHRByActionType(req, res, next) {
        try {
            const { actionType } = req.body;
            if (!actionType) {
                return res.status(400).json({ message: 'Action type needs to be specified.' });
            }

            const reqHR = await RequestHRService.getRequestHRByActionType(actionType);

            if (!reqHR) {
                return res.status(404).json({ message: 'RequestHR with specified action type is not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createRequestHR(req, res, next) {
        try {
            const reqHR = await RequestHRService.createRequestHR(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateRequestHR(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await RequestHRService.updateRequestHR(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'RequestHR not found' });
            }
            res.json({ message: 'RequestHR updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteRequestHR(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await RequestHRService.deleteRequestHR(id);
            if (result === 0) {
                return res.status(404).json({ message: 'RequestHR not found' });
            }
            res.json({ message: 'RequestHR deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RequestHRController();
