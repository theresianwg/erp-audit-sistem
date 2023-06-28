const MachineService = require('../services/mf_machine_service');

class MachineController {
    async createMachine(req, res) {
        try {
            const data = req.body;
            const machine = await MachineService.createMachine(data);

            res.status(201).json({
                message: 'Asset created successfully',
                data: machine,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllMachine(req, res) {
        try {
            const machine = await MachineService.getAllMachine();
            res.status(200).json({
                message: 'Get all machine',
                data: machine,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getMachineById(req, res) {
        try {
            const id = req.params.id;
            const machine = await MachineService.getMachineById(id);
            res.status(200).json({
                message: 'Get machine by id',
                data: machine,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getMachineByName(req, res) {
        try {
            const name = req.params.name;
            const machine = await MachineService.getMachineByName(name);
            res.status(200).json({
                message: 'Get machine by name',
                data: machine,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteMachineById(req, res) {
        try {
            const id = req.params.id;
            const machine = await MachineService.deleteMachineById(id);
            res.status(200).json({
                message: 'Delete machine by id',
                data: machine,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateMachine(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const machine = await MachineService.updateMachine(id, data);
            res.status(200).json({
                message: 'Update machine by id',
                data: machine,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new MachineController();
