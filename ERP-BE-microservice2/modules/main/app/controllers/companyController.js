'use strict';

const CompanyService = require('../services/companyService');

class CompanyController {
    async getAllCompanies(req, res, next) {
        try {
            const companies = await CompanyService.getAllCompanies();
            res.json(companies);
        } catch (error) {
            next(error);
        }
    }

    async getCompanyById(req, res, next) {
        try {
            const company = await CompanyService.getCompanyById(req.params.id);
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            res.json(company);
        } catch (error) {
            next(error);
        }
    }

    async createCompany(req, res, next) {
        try {
            const company = await CompanyService.createCompany(req.body);
            res.status(201).json(company);
        } catch (error) {
            next(error);
        }
    }

    async updateCompany(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await CompanyService.updateCompany(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Company not found' });
            }
            res.json({ message: 'Company updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteCompany(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await CompanyService.deleteCompany(id);
            if (result === 0) {
                return res.status(404).json({ message: 'Company not found' });
            }
            res.json({ message: 'Company deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

    async searchCompanies(req, res, next) {
        try {
            const { id, email, phone, name, address } = req.body;

            if (!id && !email && !phone && !name && !address) {
                return res
                    .status(400)
                    .json({ message: 'No search criteria provided' });
            }

            const companies = await CompanyService.searchCompanies({
                id,
                email,
                phone,
                name,
                address,
            });

            if (companies.length === 0) {
                return res.status(404).json({ message: 'No companies found' });
            }

            res.json(companies);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CompanyController();
