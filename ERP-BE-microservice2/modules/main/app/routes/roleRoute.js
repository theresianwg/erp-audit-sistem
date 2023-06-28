'use strict';

const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/roleController');

router.get('/', RoleController.getAllRoles);
router.post('/search', RoleController.searchRole);
router.post('/', RoleController.createRole);
router.put('/', RoleController.updateRole);
router.delete('/', RoleController.deleteRole);

module.exports = router;
