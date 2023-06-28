const NumberGroupController = require('../controllers/fa_number_group_controller');
const router = require('express').Router();

router.post('/', NumberGroupController.createNumberGroup);
router.get('/', NumberGroupController.getAllNumberGroup);
router.get('/:id', NumberGroupController.getNumberGroupById);
router.get('/name/:name', NumberGroupController.getNumberGroupByName);
router.delete('/:id', NumberGroupController.deleteNumberGroup);
router.put('/:id', NumberGroupController.updateNumberGroup);

module.exports = router;
