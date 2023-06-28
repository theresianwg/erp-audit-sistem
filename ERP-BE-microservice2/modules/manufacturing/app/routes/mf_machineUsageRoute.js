const router = require('express').Router();
const machineUsageController = require('../controllers/mf_machineUsageController');

router.get('/', machineUsageController.getAll);
router.get('/:id', machineUsageController.getById);

router.post('/', machineUsageController.create);

router.put('/:id', machineUsageController.update);

router.delete('/:id', machineUsageController.delete);

module.exports = router;
