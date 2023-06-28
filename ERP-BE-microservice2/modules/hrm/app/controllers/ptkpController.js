'use strict';

const PTKPService = require('../services/PTKPService');

class PTKPController {
    async getAllPTKPs(req, res, next) {
        try {
            const reqHR = await PTKPService.getAllPTKPs();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getPTKPById(req, res, next) {
        try {
            const reqHR = await PTKPService.getPTKPById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'PTKP not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createPTKP(req, res, next) {
        try {
            const reqHR = await PTKPService.createPTKP(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updatePTKP(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await PTKPService.updatePTKP(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'PTKP not found' });
            }
            res.json({ message: 'PTKP updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deletePTKP(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await PTKPService.deletePTKP(id);
            if (result === 0) {
                return res.status(404).json({ message: 'PTKP not found' });
            }
            res.json({ message: 'PTKP deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new PTKPController();
