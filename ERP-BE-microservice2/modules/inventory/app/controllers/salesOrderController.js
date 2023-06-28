const SalesOrderService = require('../services/salesOrderService');

class SalesOrderController {
    async getAllSalesOrder(req, res) {
        await SalesOrderService.getAllSalesOrder()
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    async getSalesOrderByID(req, res) {
        const { id } = req.body;
        await SalesOrderService.getSalesOrderByID(id)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    async createSalesOrder(req, res) {
        console.log(req.body);
        await SalesOrderService.createSalesOrder(req.body)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}

module.exports = new SalesOrderController();
