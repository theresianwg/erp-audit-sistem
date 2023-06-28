'use strict';

const AsuransiService = require('../services/AsuransiService');

class AsuransiController {
    async getAllAsuransis(req, res, next) {
        try {
            const reqHR = await AsuransiService.getAllAsuransis();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getAsuransiById(req, res, next) {
        try {
            const reqHR = await AsuransiService.getAsuransiById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'Asuransi not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createAsuransi(req, res, next) {
        try {
            const reqHR = await AsuransiService.createAsuransi(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateAsuransi(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await AsuransiService.updateAsuransi(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Asuransi not found' });
            }
            res.json({ message: 'Asuransi updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteAsuransi(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await AsuransiService.deleteAsuransi(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Asuransi not found' });
            }
            res.json({ message: 'Asuransi deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AsuransiController();
