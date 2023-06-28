const PurchaseOrderService = require('../services/purchaseOrderService');

class PurchaseOrderController {
    async getPurchaseOrders(req, res) {
        const purchaseOrders = await PurchaseOrderService.getPurchaseOrders();
        res.send(purchaseOrders);
    }
    
    async getPurchaseOrderById(req, res) {
        const { id } = req.body;
        const purchaseOrder = await PurchaseOrderService.getPurchaseOrderById(
            id,
        );
        res.send(purchaseOrder);
    }

    async createPurchaseOrder(req, res) {
        const purchaseOrder = await PurchaseOrderService.createPurchaseOrder(
            req.body,
        );
        res.send(purchaseOrder);
    }

    async createPurchaseOrderMultipleSupplier(req, res) {
        try{
            const purchaseOrder = await PurchaseOrderService.createPurchaseOrderMultipleSupplier(
                req.body,
            );
            res.send(purchaseOrder);
        }
        catch(err){
            res.status(500).send(err);
        }
    }

    async checkBudget(req, res) {
        const purchaseOrder = await PurchaseOrderService.checkBudget();
        res.send(purchaseOrder);
    }

    async createDebt(req, res) {
        const purchaseOrder = await PurchaseOrderService.createDebt(req.body);
        res.send(purchaseOrder);
    }
}

module.exports = new PurchaseOrderController();
