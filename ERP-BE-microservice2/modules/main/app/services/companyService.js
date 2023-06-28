'use strict';

const CompanyRepository = require('../repositories/companyRepository');

class CompanyService {
    getAllCompanies() {
        return CompanyRepository.getAllCompanies();
    }

    getCompanyById(id) {
        return CompanyRepository.getCompanyById(id);
    }

    createCompany(data) {
        const useIdGenerator = !data.id;
        return CompanyRepository.createCompany(data, useIdGenerator);
    }

    updateCompany(id, data) {
        return CompanyRepository.updateCompany(id, data);
    }

    deleteCompany(id) {
        return CompanyRepository.deleteCompany(id);
    }

    searchCompanies(criteria) {
        return CompanyRepository.searchCompanies(criteria);
    }
}

module.exports = new CompanyService();
