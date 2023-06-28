const machineService = require('../services/mf_machineService');

class MachineController {
    async getAll(req, res) {
        await machineService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Machine not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Machine list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await machineService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Machine not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Machine retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newMachine = await machineService.create(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Machine created successfully',
                data: newMachine,
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const id = req.params.id;
        console.log(id);
        console.log(req.body);
        const machine = req.body;
        await machineService
            .update(id, machine)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Machine updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await machineService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Machine deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Machine deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new MachineController();
