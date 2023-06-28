const router = require('express').Router();
const issueMaterialController = require('../controllers/mf_issueMaterialController');

router.get('/', issueMaterialController.getAll);
router.get('/:id', issueMaterialController.getById);

router.post('/', issueMaterialController.create);

router.put('/:id', issueMaterialController.update);

router.delete('/:id', issueMaterialController.delete);

module.exports = router;
