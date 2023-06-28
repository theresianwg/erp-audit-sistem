'use strict';

const DepartmentService = require('../services/departmentService');

class DepartmentController {
    async getAllDepartments(req, res, next) {
        try {
            const reqHR = await DepartmentService.getAllDepartments();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getDepartmentById(req, res, next) {
        try {
            const reqHR = await DepartmentService.getDepartmentById(
                req.params.id,
            );
            if (!reqHR) {
                return res
                    .status(404)
                    .json({ message: 'Department not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createDepartment(req, res, next) {
        try {
            const reqHR = await DepartmentService.createDepartment(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateDepartment(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await DepartmentService.updateDepartment(
                id,
                req.body,
            );
            if (result[0] === 0) {
                return res
                    .status(404)
                    .json({ message: 'Department not found' });
            }
            res.json({ message: 'Department updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteDepartment(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await DepartmentService.deleteDepartment(id);
            if (result === 0) {
                return res
                    .status(404)
                    .json({ message: 'Department not found' });
            }
            res.json({ message: 'Department deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new DepartmentController();
