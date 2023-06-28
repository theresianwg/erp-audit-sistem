'use strict';

const KartuKeluargaService = require('../services/kartuKeluargaService');

class KartuKeluargaController {
    async getAllKartuKeluargas(req, res, next) {
        try {
            const reqHR = await KartuKeluargaService.getAllKartuKeluargas();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getKartuKeluargaById(req, res, next) {
        try {
            const reqHR = await KartuKeluargaService.getKartuKeluargaById(
                req.params.id,
            );
            if (!reqHR) {
                return res
                    .status(404)
                    .json({ message: 'KartuKeluarga not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createKartuKeluarga(req, res, next) {
        try {
            const reqHR = await KartuKeluargaService.createKartuKeluarga(
                req.body,
            );
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateKartuKeluarga(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await KartuKeluargaService.updateKartuKeluarga(
                id,
                req.body,
            );
            if (result[0] === 0) {
                return res
                    .status(404)
                    .json({ message: 'KartuKeluarga not found' });
            }
            res.json({ message: 'KartuKeluarga updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteKartuKeluarga(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await KartuKeluargaService.deleteKartuKeluarga(id);
            if (result === 0) {
                return res
                    .status(404)
                    .json({ message: 'KartuKeluarga not found' });
            }
            res.json({ message: 'KartuKeluarga deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new KartuKeluargaController();
