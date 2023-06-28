const taxService = require('../services/taxService');

class TaxController{
    async createTax(req, res) {
        const data = req.body;
        const tax = await taxService.createTax(data);
        res.status(201).json({
            status: 'success',
            message: 'Tax created successfully',
            data: tax
        });
    }

    async deleteTax(req, res) {
        const id = req.params.id;
        const tax = await taxService.deleteTax(id);
        res.status(200).json({
            status: 'success',
            message: 'Tax deleted successfully',
            data: tax
        });
    }

    async updateTax(req, res) {
        const id = req.params.id;
        const data = req.body;
        const tax = await taxService.updateTax(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Tax updated successfully',
            data: tax
        });
    }

    async getAllTax(req, res) {
        const tax = await taxService.getAllTax();
        res.status(200).json({
            status: 'success',
            message: 'Tax fetched successfully',
            data: tax
        });
    }
}

module.exports = new TaxController();