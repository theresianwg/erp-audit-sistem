'use strict';

const express = require('express');
const router = express.Router();
const PermissionController = require('../controllers/permissionController');

router.get('/', PermissionController.getAllPermissions);
router.get('/:id', PermissionController.getPermissionById);
router.post('/', PermissionController.createPermission);
router.put('/:id', PermissionController.updatePermission);
router.delete('/:id', PermissionController.deletePermission);
router.get('/module/:module', PermissionController.getPermissionsByModule);

module.exports = router;
