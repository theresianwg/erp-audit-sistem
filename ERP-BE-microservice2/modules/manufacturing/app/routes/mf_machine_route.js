const MachineController = require('../controllers/mf_machine_controller');
const router = require('express').Router();

router.post('/', MachineController.createMachine);
router.get('/', MachineController.getAllMachine);
router.get('/:id', MachineController.getMachineById);
router.get('/name/:name', MachineController.getMachineByName);
router.delete('/:id', MachineController.deleteMachineById);
router.put('/:id', MachineController.updateMachine);

module.exports = router;
