const express = require('express');
const GlJournalController = require('../controllers/Data_Access_Layer/gl_journal_controller');

const router = express.Router();

router.get('/', GlJournalController.getAllJournal);
router.get('/getjournaldetail/:journalcode', GlJournalController.getAllJournalDetailByJournal);
router.get('/getjournalbydate', GlJournalController.getJournalByDate);
router.get('/lastjournal',GlJournalController.getLastJournal)
router.post('/', GlJournalController.createJournal);
router.get('/journalsort', GlJournalController.getAllJournalSort);
module.exports = router;
