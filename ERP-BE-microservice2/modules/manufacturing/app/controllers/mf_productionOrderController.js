const productionOrderService = require('../services/mf_productionOrderService');

class ProductionOrderController {
    async getAll(req, res) {
        await productionOrderService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Production order not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Production order list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production order retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await productionOrderService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Production order not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Production order retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production order retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newProductionOrder = await productionOrderService.create(
                req.body,
            );
            res.status(200).json(newProductionOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const productionOrder = req.body;
        await productionOrderService
            .update(id, productionOrder)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Production order updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production order updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await productionOrderService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Production order deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production order deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new ProductionOrderController();
