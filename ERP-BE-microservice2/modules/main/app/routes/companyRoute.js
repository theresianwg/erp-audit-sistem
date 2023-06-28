'use strict';

const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

router.get('/', CompanyController.getAllCompanies);
router.get('/:id', CompanyController.getCompanyById);
router.post('/', CompanyController.createCompany);
router.put('/', CompanyController.updateCompany);
router.delete('/', CompanyController.deleteCompany);
router.post('/search', CompanyController.searchCompanies);

module.exports = router;
