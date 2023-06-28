const costAccountingService = require('../services/mf_costAccountingService');

class CostAccountingController {
    async getAll(req, res) {
        await costAccountingService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Cost accounting request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message:
                        'Cost accounting request list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Cost accounting request retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await costAccountingService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Cost accounting request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message:
                        'Cost accounting request retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Cost accounting request retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newInspectionProduct = await costAccountingService.create(
                req.body,
            );
            res.status(200).json(newInspectionProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const inspectionProduct = req.body;
        await costAccountingService
            .update(id, inspectionProduct)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Cost accounting request updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Cost accounting request updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await costAccountingService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Cost accounting request deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Cost accounting request deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new CostAccountingController();
