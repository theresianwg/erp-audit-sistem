const itemService = require('../services/itemService');
const { spawn } = require('child_process');

class ItemController {
    async testPython(req, res) {
        const { id } = req.params;
        const item = await itemService.getById(id);
        const py = spawn('python', ['modules/forecasting_python/test.py']);
        py.stdout.on('data', function (data) {
            res.status(200).json({
                status: 'success',
                message: 'Item retrieved successfully',
                data: data.toString(),
            });
        });
    }

    async getAll(req, res) {
        await itemService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Item list not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Item list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Item list retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.body;
        await itemService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    return res.status(404).json({
                        status: 'error',
                        message: 'Item not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Item retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Item retrieved failed',
                    data: err,
                });
            });
    }

    async getEndProducts(req, res) {
        await itemService
            .getEndProducts()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Item list not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Item list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Item list retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        const item = req.body;
        itemService
            .create(item)
            .then((data) => {
                if (data.status == 'error') {
                    res.status(400).json({
                        status: 'error',
                        message: 'wrong input',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Item created successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Item created failed',
                    data: err,
                });
            });
    }

    async update(req, res) {
        const { id } = req.params;
        const item = req.body;
        await itemService
            .update(id, item)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Item updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Item updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await itemService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Item deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Item deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new ItemController();
