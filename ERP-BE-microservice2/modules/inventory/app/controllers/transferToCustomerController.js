const TransferToCustomerService = require('../services/transferToCustomerService');

class TransferToCustomerController {
    async getTransferToCustomerById(req, res) {
        const { id } = req.body;
        await TransferToCustomerService.getTransferToCustomerById(id)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    async createTransferToCustomer(req, res) {
        await TransferToCustomerService.createTransferToCustomer(req.body)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}

module.exports = new TransferToCustomerController();
