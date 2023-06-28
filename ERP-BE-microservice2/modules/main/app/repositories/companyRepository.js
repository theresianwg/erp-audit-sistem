'use strict';

const { Op } = require('sequelize');
const { Company } = require('../../../../models');

class CompanyRepository {
    async getAllCompanies() {
        return await Company.findAll();
    }

    async getCompanyById(id) {
        return await Company.findByPk(id);
    }

    async searchCompanies(criteria) {
        const { id, email, phone, name, address } = criteria;
        const where = {};

        if (id) {
            where.id = id;
        }

        if (email) {
            where.email = { [Op.like]: `%${email}%` };
        }

        if (phone) {
            where.phone = phone;
        }

        if (name) {
            where.name = { [Op.like]: `%${name}%` };
        }

        if (address) {
            where.address = { [Op.like]: `%${address}%` };
        }

        return await Company.findAll({ where });
    }

    async createCompany(data, useIdGenerator = true) {
        if (useIdGenerator) {
            data.id = await Company.generateId();
        }

        return await Company.create(data);
    }

    async updateCompany(id, data) {
        return await Company.update(data, { where: { id } });
    }

    async deleteCompany(id) {
        return await Company.destroy({ where: { id } });
    }
}

module.exports = new CompanyRepository();
