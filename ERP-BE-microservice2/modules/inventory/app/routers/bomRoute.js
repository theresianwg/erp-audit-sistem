const router = require('express').Router();
const bomController = require('../controllers/bomController');

router.post('/search', bomController.getBomByParentId);
router.post('/', bomController.createBom);

module.exports = router;
