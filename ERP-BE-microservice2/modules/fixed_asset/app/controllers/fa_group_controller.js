const GroupService = require('../services/fa_group_service');

class GroupController {
    async createGroup(req, res) {
        try {
            const data = req.body;
            const group = await GroupService.createGroup(data);
            res.status(201).json({
                message: 'Group created successfully',
                data: group,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getAllGroup(req, res) {
        try {
            const group = await GroupService.getAllGroup();
            res.status(200).json({
                message: 'Get all group',
                data: group,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getGroupById(req, res) {
        try {
            const id = req.params.id;
            const group = await GroupService.getGroupById(id);
            res.status(200).json({
                message: 'Get group by id',
                data: group,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async getGroupByName(req, res) {
        try {
            const name = req.params.name;
            const group = await GroupService.getGroupByName(name);
            res.status(200).json({
                message: 'Get group by name',
                data: group,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async deleteGroup(req, res) {
        try {
            const id = req.params.id;
            const group = await GroupService.deleteGroup(id);
            res.status(200).json({
                message: 'Delete group by id',
                data: group,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
    async updateGroup(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            const group = await GroupService.updateGroup(id, data);
            res.status(200).json({
                message: 'Update group by id',
                data: group,
            });
        } catch (e) {
            res.status(500).json({
                message: 'Internal server error',
                serverMessage: req.serverMessage || e,
            });
        }
    }
}

module.exports = new GroupController();
