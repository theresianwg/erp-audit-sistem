const inspectionProductService = require('../services/mf_inspectionProductService');

class InspectionProductController {
    async getAll(req, res) {
        await inspectionProductService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Inspection product request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message:
                        'Inspection product request list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Inspection product request retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await inspectionProductService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Inspection product request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message:
                        'Inspection product request retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Inspection product request retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newInspectionProduct = await inspectionProductService.create(
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
        await inspectionProductService
            .update(id, inspectionProduct)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Inspection product request updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Inspection product request updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await inspectionProductService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Inspection product request deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Inspection product request deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new InspectionProductController();
