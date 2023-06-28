const router = require('express').Router();
const masterOperationController = require('../controllers/mf_masterOperationController');

router.get('/', masterOperationController.getAll);
router.get('/:id', masterOperationController.getById);

router.post('/', masterOperationController.create);

router.put('/:id', masterOperationController.update);

router.delete('/:id', masterOperationController.delete);

module.exports = router;
