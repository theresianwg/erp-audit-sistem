const router = require('express').Router();
const FiscalTypeController = require('../controllers/fa_fiscal_type_controller');

router.post('/', FiscalTypeController.createFiscalType);
router.get('/', FiscalTypeController.getAllFiscalType);
router.get('/:id', FiscalTypeController.getAllFiscalTypeById);
router.get('/name/:name', FiscalTypeController.getAllFiscalTypeByName);
router.delete('/:id', FiscalTypeController.deleteFiscalType);
router.put('/:id', FiscalTypeController.updateFiscalType);

module.exports = router;
