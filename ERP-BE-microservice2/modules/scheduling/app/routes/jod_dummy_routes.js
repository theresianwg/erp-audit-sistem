const router = require('express').Router();
const JodDummyController = require('../controllers/jod_dummy_controller');

router.post('/', JodDummyController.createJodDummyAuto);
router.get('/', JodDummyController.getAllJodDummyUnfinished);

module.exports = router;
