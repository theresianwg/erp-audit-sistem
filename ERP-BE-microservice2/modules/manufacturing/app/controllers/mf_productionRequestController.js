const productionRequestService = require('../services/mf_productionRequestService');

class ProductionRequestController {
    async getAll(req, res) {
        await productionRequestService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Production request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Production request list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production request retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await productionRequestService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Production request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Production request retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production request retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newProductionRequest = await productionRequestService.create(
                req.body,
            );
            res.status(200).json(newProductionRequest);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const productionRequest = req.body;
        await productionRequestService
            .update(id, productionRequest)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Production request updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production request updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await productionRequestService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Production request deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Production request deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new ProductionRequestController();
