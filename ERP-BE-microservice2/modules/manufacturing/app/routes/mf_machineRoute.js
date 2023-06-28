const router = require('express').Router();
const machineController = require('../controllers/mf_machineController');

router.get('/', machineController.getAll);
router.get('/:id', machineController.getById);

router.post('/', machineController.create);

router.put('/:id', machineController.update);

router.delete('/:id', machineController.delete);

module.exports = router;
