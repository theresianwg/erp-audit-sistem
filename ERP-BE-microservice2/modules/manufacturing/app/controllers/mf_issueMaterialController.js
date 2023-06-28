const issueMaterialService = require('../services/mf_issueMaterialService');

class IssueMaterialController {
    async getAll(req, res) {
        await issueMaterialService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Issue material request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message:
                        'Issue material request list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Issue material request retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await issueMaterialService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Issue material request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Issue material request retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Issue material request retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newIssueMaterial = await issueMaterialService.create(
                req.body,
            );
            res.status(200).json(newIssueMaterial);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const issueMaterial = req.body;
        await issueMaterialService
            .update(id, issueMaterial)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Issue material request updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Issue material request updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await issueMaterialService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Issue material request deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Issue material request deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new IssueMaterialController();
