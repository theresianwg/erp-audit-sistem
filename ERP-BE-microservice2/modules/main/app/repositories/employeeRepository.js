'use strict';

const { Op } = require('sequelize');
const { Employee, Role, Company } = require('../../../../models');

class EmployeeRepository {
    async getAllEmployees() {
        return Employee.findAll({
            include: [
                {
                    model: Role,
                    attributes: ['name'],
                    as: 'role',
                    include: [
                        {
                            model: Company,
                            attributes: ['name'],
                            as: 'company',
                        },
                    ],
                },
            ],
        });
    }

    async getEmployeeById(id) {
        return Employee.findByPk(id, {
            include: [
                {
                    model: Role,
                    attributes: ['name'],
                    as: 'role',
                    include: [
                        {
                            model: Company,
                            attributes: ['name'],
                            as: 'company',
                        },
                    ],
                },
            ],
        });
    }

    async getEmployeeByEmail(email) {
        return Employee.findOne({
            where: {
                email: email,
            },
            include: [
                {
                    model: Role,
                    attributes: ['name'],
                    as: 'role',
                    include: [
                        {
                            model: Company,
                            attributes: ['name'],
                            as: 'company',
                        },
                    ],
                },
            ],
        });
    }

    async searchEmployees(criteria) {
        const { nip, role, phone, fullname, address } = criteria;
        const where = {};

        if (nip) {
            where.nip = nip;
        }

        if (phone) {
            where.phone = phone;
        }

        if (fullname) {
            where.fullname = { [Op.like]: `%${fullname}%` };
        }

        if (address) {
            where.address = { [Op.like]: `%${address}%` };
        }

        return await Company.findAll({ where });
    }

    async createEmployee(data) {
        const employeeId = await Employee.generateId();
        return Employee.create({ ...data, nip: employeeId });
    }

    async updateEmployee(nip, data) {
        return Employee.update(data, {
            where: {
                nip: nip,
            },
        });
    }

    async deleteEmployee(nip) {
        return Employee.destroy({
            where: { nip: nip },
        });
    }
}

module.exports = new EmployeeRepository();
