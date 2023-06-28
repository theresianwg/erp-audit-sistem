'use strict';

const EmployeeService = require('../services/employeeService');
const { validateReqBody } = require('../utils/validateReqBody');

class EmployeeController {
    async getAllEmployees(req, res, next) {
        try {
            const employee = await EmployeeService.getAllEmployees();
            res.json(employee);
        } catch (error) {
            next(error);
        }
    }

    async getEmployeeById(req, res, next) {
        try {
            const employee = await EmployeeService.getEmployeeById(
                req.params.id,
            );
            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json(employee);
        } catch (error) {
            next(error);
        }
    }

    async getEmployeeByEmail(req, res, next) {
        try {
            const { email } = req.body;

            if (!email) {
                return res
                    .status(400)
                    .json({ message: 'No search criteria provided' });
            }

            const employee = await EmployeeService.getEmployeeByEmail(email);

            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json(employee);
        } catch (error) {
            next(error);
        }
    }

    async createEmployee(req, res, next) {
        try {
            // auth checker & permission checker
            // if the user roleClass is superadmin -> can choose whichever role to be assigned on employee (Superadmin, Company Guest or Company Employee)
            // if the user roleClass is admin -> can only create employee with role that has roleClass Company Employee or Company Guest with the same companyId as the user.

            const expectedProperties = [
                'roleId',
                'username',
                'email',
                'password',
                'nik',
                'fullname',
                'gender',
                'isForeign',
                'countryCode',
                'joinDate',
            ];

            const isValid = validateReqBody(req.body, expectedProperties);

            if (isValid) {
                const employee = await EmployeeService.createEmployee(req.body);
                res.status(201).json(employee);
            } else {
                return res.status(400).json({ message: 'Invalid properties' });
            }
        } catch (error) {
            next(error);
        }
    }

    async updateEmployee(req, res, next) {
        // auth checker & permission checker
        // can only update employee that belongs to the same employee as user

        // business logic -> service
        // can only update if verificationState is Not Verified
        // change the status to Requested after update

        try {
            const { nip } = req.body;
            if (!nip) {
                return res.status(400).json({ message: 'NIP is required' });
            }

            const result = await EmployeeService.updateEmployee(nip, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json({ message: 'Employee updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteEmployee(req, res, next) {
        // business logic -> service
        // can only delete employee with verificationState "Not Verified"
        try {
            const { nip } = req.body;
            if (!nip) {
                return res.status(400).json({ message: 'NIP is required' });
            }

            const result = await EmployeeService.deleteEmployee(nip);
            if (result === 0) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json({ message: 'Employee deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new EmployeeController();
