const express = require('express');
const GlCoaGroupController = require('../controllers/Data_Access_Layer/gl_coa_group_controller');

const router = express.Router();

router.get('/', GlCoaGroupController.getAllCoaGroup);
router.get('/coagroupsort', GlCoaGroupController.getAllCoaGroupSort);
router.get('/:coagroupid', GlCoaGroupController.getCoaGroupById);
router.post('/', GlCoaGroupController.createCoaGroup);
router.put('/:coagroupid', GlCoaGroupController.updateCoaGroup);
router.delete('/:coagroupid', GlCoaGroupController.deleteCoaGroup);

module.exports = router;
