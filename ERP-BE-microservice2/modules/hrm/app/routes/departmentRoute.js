'use strict';

const express = require('express');
const router = express.Router();
const DepartmentController = require('../controllers/departmentController');

router.get('/', DepartmentController.getAllDepartments);
router.get('/:id', DepartmentController.getDepartmentById);
router.post('/', DepartmentController.createDepartment);
router.put('/', DepartmentController.updateDepartment);
router.delete('/', DepartmentController.deleteDepartment);

module.exports = router;
