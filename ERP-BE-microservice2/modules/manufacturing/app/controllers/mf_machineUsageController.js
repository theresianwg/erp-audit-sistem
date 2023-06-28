const machineUsageService = require('../services/mf_machineUsageService');

class MachineController {
    async getAll(req, res) {
        await machineUsageService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Machine usage not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Machine usage list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine usage retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await machineUsageService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Machine usage not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Machine usage retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine usage retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newMachineUsage = await machineUsageService.create(req.body);
            res.status(200).json(newMachineUsage);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const machine = req.body;
        await machineUsageService
            .update(id, machine)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Machine usage updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine usage updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await machineUsageService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Machine usage deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine usage deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new MachineController();
