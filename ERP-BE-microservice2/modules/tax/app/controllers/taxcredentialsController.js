const taxcredentialsService = require('../services/taxcredentialsService');

class taxcredentialsController{
    async createTaxCredentials(req, res) {
        const data = req.body;
        const taxcredentials = await taxcredentialsService.createTaxCredentials(data);
        res.status(201).json({
            status: 'success',
            message: 'Tax credentials created successfully',
            data: taxcredentials
        });
    }

    async deletaxcredentialsServiceteTax(req, res) {
        const id = req.params.id;
        const taxcredentials = await taxcredentialsService.deleteTaxCredentials(id);
        res.status(200).json({
            status: 'success',
            message: 'Tax credentials deleted successfully',
            data: taxcredentials
        });
    }

    async updateTaxCredentials(req, res) {
        const id = req.params.id;
        const data = req.body;
        const taxcredentials = await taxcredentialsService.updateTaxCredentials(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Tax credentials updated successfully',
            data: taxcredentials
        });
    }


    async getAllTaxCredentials(req, res) {
        const taxcredentials = await taxcredentialsService.getAllTaxCredentials();
        res.status(200).json({
            status: 'success',
            message: 'Tax credentials fetched successfully',
            data: taxcredentials
        });
    }
}

module.exports = new taxcredentialsController();