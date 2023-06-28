'use strict';

const RolePermissionService = require('../services/RolePermissionService');

class RolePermissionController {
    async getAllRolePermissions(req, res, next) {
        try {
            const RolePermissions =
                await RolePermissionService.getAllRolePermissions();
            res.json(RolePermissions);
        } catch (error) {
            next(error);
        }
    }

    async createRolePermission(req, res, next) {
        try {
            const RolePermission =
                await RolePermissionService.createRolePermission(req.body);
            res.status(201).json(RolePermission);
        } catch (error) {
            next(error);
        }
    }

    async deleteRolePermission(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const RolePermission =
                await RolePermissionService.deleteRolePermission(id);
            if (!RolePermission) {
                return res
                    .status(404)
                    .json({ message: 'RolePermission not found' });
            }
            res.json({ message: 'RolePermission deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new RolePermissionController();
