const express = require('express');
const GlCoaController = require('../controllers/Data_Access_Layer/gl_coa_controller');

const router = express.Router();

router.get('/', GlCoaController.getAllCoa);
router.get('/coasort', GlCoaController.getAllCoaSort);
router.get('/:coaid', GlCoaController.getCoaById);
router.post('/', GlCoaController.createCoa);
router.put('/:coaid', GlCoaController.updateCoa);
router.delete('/:coaid', GlCoaController.deleteCoa);

module.exports = router;
