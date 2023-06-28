const masterOperationService = require('../services/mf_masterOperationService');

class MasterOperationController {
    async getAll(req, res) {
        await masterOperationService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Operation request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Operation request list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Operation request retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await masterOperationService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Operation request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Operation request retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Operation request retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newOperation = await masterOperationService.create(req.body);
            res.status(200).json(newOperation);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const operation = req.body;
        await masterOperationService
            .update(id, operation)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Operation request updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Operation request updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await masterOperationService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Operation request deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Operation request deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new MasterOperationController();
