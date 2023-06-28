'use strict';

const PresenceService = require('../services/PresenceService');

class PresenceController {
    async getAllPresences(req, res, next) {
        try {
            const reqHR = await PresenceService.getAllPresences();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getPresenceById(req, res, next) {
        try {
            const reqHR = await PresenceService.getPresenceById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'Presence not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createPresence(req, res, next) {
        try {
            const reqHR = await PresenceService.createPresence(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updatePresence(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await PresenceService.updatePresence(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Presence not found' });
            }
            res.json({ message: 'Presence updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deletePresence(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await PresenceService.deletePresence(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Presence not found' });
            }
            res.json({ message: 'Presence deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PresenceController();
