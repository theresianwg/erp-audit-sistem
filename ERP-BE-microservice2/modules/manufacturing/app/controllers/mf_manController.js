const manService = require('../services/mf_manService');

class ManController {
    async getAll(req, res) {
        await manService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Man not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Man list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await manService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Man not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Man retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newMan = await manService.create(req.body);
            res.status(200).json(newMan);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const man = req.body;
        await manService
            .update(id, man)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Man updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await manService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Man deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new ManController();
