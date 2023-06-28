'use strict';

const AmalService = require('../services/AmalService');

class AmalController {
    async getAllAmals(req, res, next) {
        try {
            const reqHR = await AmalService.getAllAmals();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getAmalById(req, res, next) {
        try {
            const reqHR = await AmalService.getAmalById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'Amal not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createAmal(req, res, next) {
        try {
            const reqHR = await AmalService.createAmal(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateAmal(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await AmalService.updateAmal(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Amal not found' });
            }
            res.json({ message: 'Amal updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteAmal(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await AmalService.deleteAmal(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Amal not found' });
            }
            res.json({ message: 'Amal deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AmalController();
