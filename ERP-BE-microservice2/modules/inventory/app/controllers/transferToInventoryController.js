const TransferToInventoryService = require('../services/transferToInventoryService');

class TransferToInventoryController {
    async getTfToInventoryById(req, res) {
        const { id } = req.body;
        await TransferToInventoryService.getTfToInventoryById(id)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    async createTfToInventory(req, res) {
        await TransferToInventoryService.createTfToInventory(req.body)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}

module.exports = new TransferToInventoryController();
