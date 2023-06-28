const express = require('express');
const GlNumberingController = require('../controllers/Data_Access_Layer/gl_numbering_controller');

const router = express.Router();

router.get('/', GlNumberingController.getAllNumbering);
router.get('/:idnumbering', GlNumberingController.getNumberingById);
router.post('/', GlNumberingController.createTransactionType);
module.exports = router;