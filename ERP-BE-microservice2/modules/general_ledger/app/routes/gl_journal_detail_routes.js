const express = require('express');
const GlJournalDetailController = require('../controllers/Data_Access_Layer/gl_journal_detail_controller');

const router = express.Router();

router.get('/', GlJournalDetailController.getAllJournalDetail);
router.post('/', GlJournalDetailController.createJouralDetail);
router.get('/getbycoaparent/:idaccounttype', GlJournalDetailController.getAllJournalDetailByAccountType,
);
module.exports = router;
