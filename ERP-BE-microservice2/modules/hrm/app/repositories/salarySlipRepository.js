'use strict';

const { Op } = require('sequelize');
const { SalarySlip, Income, Reduction } = require('../../../../models');

class SalarySlipRepository {
    async getAllSalarySlips() {
        return await SalarySlip.findAll({
            include: [
                {
                    model: Income,
                    as: 'incomes'
                },
                {
                    model: Reduction,
                    as: 'reductions'
                }
            ]
        });
    }

    async getSalarySlipById(id) {
        return await SalarySlip.findByPk(id, {
            include: [
                {
                    model: Income,
                    as: 'incomes'
                },
                {
                    model: Reduction,
                    as: 'reductions'
                }
            ]
        });
    }

    async getSalarySlipByYear(data) {
        const { employeeId, year } = data;

        const where = {};

        if (employeeId) {
            where.employeeId = employeeId;
        }

        if (year) {
            where.startDate = {
                [Op.and]: [
                    { [Op.gte]: new Date(year, 0, 1) },
                    { [Op.lt]: new Date(year, 11, 31)}
                ]
            };

            where.lastDate = where.startDate;
        }

        return await SalarySlip.findAll({
            where,
            include: [
                {
                    model: Income,
                    as: 'incomes'
                },
                {
                    model: Reduction,
                    as: 'reductions'
                }
            ]
        });
    }

    async createSalarySlip(data) {
        return await SalarySlip.create(data);
    }

    async updateSalarySlip(id, data) {
        return await SalarySlip.update(data, { where: { id } });
    }

    async deleteSalarySlip(id) {
        return await SalarySlip.destroy({ where: { id } });
    }
}

module.exports = new SalarySlipRepository();
