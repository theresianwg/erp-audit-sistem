'use strict';

const express = require('express');
const router = express.Router();
const RolePermissionController = require('../controllers/RolePermissionController');

router.get('/', RolePermissionController.getAllRolePermissions);
router.post('/', RolePermissionController.createRolePermission);
router.delete('/', RolePermissionController.deleteRolePermission);

module.exports = router;
