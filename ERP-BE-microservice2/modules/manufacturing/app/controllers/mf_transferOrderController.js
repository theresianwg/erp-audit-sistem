const transferOrderService = require('../services/mf_transferOrderService');

class TransferOrderController {
    async getAll(req, res) {
        await transferOrderService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Transfer Order not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Transfer Order list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Transfer Order retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await transferOrderService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Transfer Order not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Transfer Order retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Transfer Order retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newTransferOrder = await transferOrderService.create(
                req.body,
            );
            res.status(200).json(newTransferOrder);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const transferOrder = req.body;
        await transferOrderService
            .update(id, transferOrder)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Transfer Order updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Transfer Order updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await transferOrderService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Transfer Order deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Transfer Order deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new TransferOrderController();
