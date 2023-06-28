'use strict';

const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.get('/', EmployeeController.getAllEmployees);
router.get('/:id', EmployeeController.getEmployeeById);
router.post('/email', EmployeeController.getEmployeeByEmail);
router.post('/', EmployeeController.createEmployee);
router.put('/', EmployeeController.updateEmployee);
router.delete('/', EmployeeController.deleteEmployee);

module.exports = router;
