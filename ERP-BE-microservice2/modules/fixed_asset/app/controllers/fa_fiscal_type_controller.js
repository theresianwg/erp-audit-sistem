const FiscalTypeService = require('../services/fa_fiscal_type_service');

class FiscalTypeController {
    async createFiscalType(req, res) {
        try {
            const data = req.body;
            const fiscalType = await FiscalTypeService.createFiscalType(data);
            res.status(201).json({
                message: 'Fiscal type created successfully',
                data: fiscalType,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllFiscalType(req, res) {
        try {
            const fiscalType = await FiscalTypeService.getAllFiscalType();
            res.status(200).json({
                message: 'Get all fiscal type',
                data: fiscalType,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllFiscalTypeById(req, res) {
        try {
            const id = req.params.id;
            const fiscalType = await FiscalTypeService.getAllFiscalTypeById(id);
            res.status(200).json({
                message: 'Get fiscal type by id',
                data: fiscalType,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllFiscalTypeByName(req, res) {
        try {
            const name = req.params.name;
            const fiscalType = await FiscalTypeService.getAllFiscalTypeByName(
                name,
            );
            res.status(200).json({
                message: 'Get fiscal type by name',
                data: fiscalType,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteFiscalType(req, res) {
        try {
            const id = req.params.id;
            const fiscalType = await FiscalTypeService.deleteFiscalType(id);
            res.status(200).json({
                message: 'Delete fiscal type by id',
                data: fiscalType,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateFiscalType(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const fiscalType = await FiscalTypeService.updateFiscalType(
                id,
                data,
            );
            res.status(200).json({
                message: 'Update fiscal type by id',
                data: fiscalType,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new FiscalTypeController();
