const masterRoutingService = require('../services/mf_masterRoutingService');

class MasterRoutingController {
    async getAll(req, res) {
        await masterRoutingService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Master routing request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message:
                        'Master routing request list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Master routing request retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await masterRoutingService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Master routing request not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Master routing request retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Master routing request retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newRoute = await masterRoutingService.create(req.body);
            res.status(200).json(newRoute);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const routing = req.body;
        await masterRoutingService
            .update(id, routing)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Master routing request updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Master routing request updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await masterRoutingService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Master routing request deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Master routing request deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new MasterRoutingController();
