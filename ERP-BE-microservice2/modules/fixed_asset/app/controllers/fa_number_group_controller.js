const NumberGroupService = require('../services/fa_number_group_service');

class NumberGroupController {
    async createNumberGroup(req, res) {
        try {
            const data = req.body;
            const numberGroup = await NumberGroupService.createNumberGroup(
                data,
            );
            res.status(201).json({
                message: 'Number group created successfully',
                data: numberGroup,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllNumberGroup(req, res) {
        try {
            const numberGroup = await NumberGroupService.getAllNumberGroup();
            res.status(200).json({
                message: 'Get all number group',
                data: numberGroup,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getNumberGroupById(req, res) {
        try {
            const id = req.params.id;
            const numberGroup = await NumberGroupService.getNumberGroupById(id);
            res.status(200).json({
                message: 'Get number group by id',
                data: numberGroup,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getNumberGroupByName(req, res) {
        try {
            const name = req.params.name;
            const numberGroup = await NumberGroupService.getNumberGroupByName(
                name,
            );
            res.status(200).json({
                message: 'Get number group by name',
                data: numberGroup,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteNumberGroup(req, res) {
        try {
            const id = req.params.id;
            const numberGroup = await NumberGroupService.deleteNumberGroup(id);
            res.status(200).json({
                message: 'Delete number group by id',
                data: numberGroup,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateNumberGroup(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const numberGroup = await NumberGroupService.updateNumberGroup(
                id,
                data,
            );
            res.status(200).json({
                message: 'Update number group by id',
                data: numberGroup,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new NumberGroupController();
