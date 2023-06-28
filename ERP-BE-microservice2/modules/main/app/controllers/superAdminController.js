'use strict';

const SuperAdminService = require('../services/SuperAdminService');

class SuperAdminController {
    async getAllSuperAdmins(req, res, next) {
        try {
            const SuperAdmins = await SuperAdminService.getAllSuperAdmins();
            res.json(SuperAdmins);
        } catch (error) {
            next(error);
        }
    }

    async getSuperAdminById(req, res, next) {
        try {
            const SuperAdmin = await SuperAdminService.getSuperAdminById(
                req.params.id,
            );
            if (!SuperAdmin) {
                return res
                    .status(404)
                    .json({ message: 'SuperAdmin not found' });
            }
            res.json(SuperAdmin);
        } catch (error) {
            next(error);
        }
    }

    async createSuperAdmin(req, res, next) {
        try {
            const SuperAdmin = await SuperAdminService.createSuperAdmin(
                req.body,
            );
            res.status(201).json(SuperAdmin);
        } catch (error) {
            next(error);
        }
    }

    async updateSuperAdmin(req, res, next) {
        try {
            const { id } = req.body;

            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SuperAdminService.updateSuperAdmin(
                id,
                req.body,
            );
            if (result[0] === 0) {
                return res
                    .status(404)
                    .json({ message: 'SuperAdmin not found' });
            }
            res.json({ message: 'SuperAdmin updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteSuperAdmin(req, res, next) {
        try {
            const { id } = req.body;

            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await SuperAdminService.deleteSuperAdmin(
                id,
                req.params.id,
            );
            if (result === 0) {
                return res
                    .status(404)
                    .json({ message: 'SuperAdmin not found' });
            }
            res.json({ message: 'SuperAdmin deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new SuperAdminController();
