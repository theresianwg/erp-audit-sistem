const taxitemService = require('../services/taxitemService');

class taxitemController{
    async createTaxItem(req, res) {
        const data = req.body;
        const taxitem = await taxitemService.createTaxItem(data);
        res.status(201).json({
            status: 'success',
            message: 'Tax of item created successfully',
            data: taxitem
        });
    }

    async deleteTaxItem(req, res) {
        const id = req.params.id;
        const taxitem = await taxitemService.deleteTaxItem(id);
        res.status(200).json({
            status: 'success',
            message: 'Tax of item deleted successfully',
            data: taxitem
        });
    }

    async updateTaxItem(req, res) {
        const id = req.params.id;
        const data = req.body;
        const taxitem = await taxitemService.updateTaxItem(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Tax of item updated successfully',
            data: taxitem
        });
    }


    async getAllTaxItem(req, res) {
        const taxitem = await taxitemService.getAllTaxItem();
        res.status(200).json({
            status: 'success',
            message: 'Tax of item fetched successfully',
            data: taxitem
        });
    }
}

module.exports = new taxitemController();