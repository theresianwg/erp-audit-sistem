'use strict';

const RoleService = require('../services/roleService');

class RoleController {
    async getAllRoles(req, res, next) {
        try {
            const roles = await RoleService.getAllRoles();
            res.json(roles);
        } catch (error) {
            next(error);
        }
    }

    async searchRole(req, res, next) {
        try {
            const { id, name } = req.body;

            if (!id && !name) {
                return res
                    .status(400)
                    .json({ message: 'ID or name is required' });
            }

            const roles = await RoleService.searchRole(id, name);
            res.json(roles);
        } catch (error) {
            next(error);
        }
    }

    async createRole(req, res, next) {
        try {
            const role = await RoleService.createRole(req.body);
            res.status(201).json(role);
        } catch (error) {
            next(error);
        }
    }

    async updateRole(req, res, next) {
        try {
            const { id, name, description } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const role = await RoleService.updateRole(id, name, description);
            if (!role) {
                return res.status(404).json({ message: 'Role not found' });
            }
            res.json(role);
        } catch (error) {
            next(error);
        }
    }

    async deleteRole(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const role = await RoleService.deleteRole(id);
            if (!role) {
                return res.status(404).json({ message: 'Role not found' });
            }
            res.json({ message: 'Role deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RoleController();
