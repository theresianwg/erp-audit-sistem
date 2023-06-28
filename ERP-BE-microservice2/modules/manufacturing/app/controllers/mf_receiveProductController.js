const receiveProductService = require('../services/mf_receiveProductService');

class ReceiveProductController {
    async getAll(req, res) {
        await receiveProductService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Receive product not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Receive product list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Receive product retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await receiveProductService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Receive product not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Receive product retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Receive product retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newReceiveProduction = await receiveProductService.create(
                req.body,
            );
            res.status(200).json(newReceiveProduction);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const receiveProduct = req.body;
        await receiveProductService
            .update(id, receiveProduct)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Receive product updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Receive product updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await receiveProductService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Receive product deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Receive product deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new ReceiveProductController();
