'use strict';

const PermissionService = require('../services/permissionService');

class PermissionController {
    async getAllPermissions(req, res, next) {
        try {
            const permissions = await PermissionService.getAllPermissions();
            res.json(permissions);
        } catch (error) {
            next(error);
        }
    }

    async getPermissionById(req, res, next) {
        try {
            const permission = await PermissionService.getPermissionById(
                req.params.id,
            );
            if (!permission) {
                return res
                    .status(404)
                    .json({ message: 'Permission not found' });
            }
            res.json(permission);
        } catch (error) {
            next(error);
        }
    }

    async createPermission(req, res, next) {
        try {
            const permission = await PermissionService.createPermission(
                req.body,
            );
            res.status(201).json(permission);
        } catch (error) {
            next(error);
        }
    }

    async updatePermission(req, res, next) {
        try {
            const result = await PermissionService.updatePermission(
                req.params.id,
                req.body,
            );
            if (result[0] === 0) {
                return res
                    .status(404)
                    .json({ message: 'Permission not found' });
            }
            res.json({ message: 'Permission updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deletePermission(req, res, next) {
        try {
            const result = await PermissionService.deletePermission(
                req.params.id,
            );
            if (result === 0) {
                return res
                    .status(404)
                    .json({ message: 'Permission not found' });
            }
            res.json({ message: 'Permission deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async getPermissionsByModule(req, res, next) {
        try {
            const permissions = await PermissionService.getPermissionsByModule(
                req.params.module,
            );
            res.json(permissions);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PermissionController();
