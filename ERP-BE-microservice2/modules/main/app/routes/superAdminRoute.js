'use strict';

const express = require('express');
const router = express.Router();
const SuperAdminController = require('../controllers/SuperAdminController');

router.get('/', SuperAdminController.getAllSuperAdmins);
router.get('/:id', SuperAdminController.getSuperAdminById);
router.post('/', SuperAdminController.createSuperAdmin);
router.put('/', SuperAdminController.updateSuperAdmin);
router.delete('/', SuperAdminController.deleteSuperAdmin);

module.exports = router;
