const express = require('express');
const GlAccountTypeController = require('../controllers/Data_Access_Layer/gl_account_type_controller');

const router = express.Router();

router.get('/', GlAccountTypeController.getAllAccountType);
router.get('/accounttypesort', GlAccountTypeController.getAllAccountTypeSort);
router.get('/:accounttypeid', GlAccountTypeController.getAccountTypeById);
router.post('/', GlAccountTypeController.createAccountType);
router.put('/:accounttypeid', GlAccountTypeController.updateAccountType);
router.delete('/:accounttypeid', GlAccountTypeController.deleteAccountType);

module.exports = router;
