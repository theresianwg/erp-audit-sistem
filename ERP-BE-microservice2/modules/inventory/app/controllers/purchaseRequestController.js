const PurchaseRequestService = require('../services/purchaseRequestService');

class PurchaseRequestController {
    async getAllPurchaseRequest(req, res) {
        try {
            const purchaseRequests =
                await PurchaseRequestService.getAllPurchaseRequest();
            res.status(200).json(purchaseRequests);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getPurchaseRequestById(req, res) {
        try {
            const { id } = req.body;
            const purchaseRequest =
                await PurchaseRequestService.getPurchaseRequestById(id);
            res.status(200).json(purchaseRequest);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createPurchaseRequest(req, res) {
        try {
            const newPurchaseRequest =
                await PurchaseRequestService.createPurchaseRequest(req.body);
            res.status(200).json(newPurchaseRequest);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new PurchaseRequestController();
