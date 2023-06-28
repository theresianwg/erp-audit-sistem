const workcentreService = require('../services/mf_workcentreService');

class WorkcentreController {
    async getAll(req, res) {
        await workcentreService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Workcentre not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Workcentre list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Workcentre retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await workcentreService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Workcentre not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Workcentre retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Workcentre retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newWorkcentre = await workcentreService.create(req.body);
            res.status(200).json(newWorkcentre);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const workcentre = req.body;
        await workcentreService
            .update(id, workcentre)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Workcentre updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Workcentre updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await workcentreService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Workcentre deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Workcentre deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new WorkcentreController();
