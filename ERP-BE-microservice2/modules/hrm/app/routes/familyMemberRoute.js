'use strict';

const express = require('express');
const router = express.Router();
const FamilyMemberController = require('../controllers/familyMemberController');

router.get('/', FamilyMemberController.getAllFamilyMembers);
router.get('/:id', FamilyMemberController.getFamilyMemberById);
router.post('/', FamilyMemberController.createFamilyMember);
router.put('/', FamilyMemberController.updateFamilyMember);
router.delete('/', FamilyMemberController.deleteFamilyMember);

module.exports = router;
