const GroupController = require('../controllers/fa_group_controller');
const router = require('express').Router();

router.post('/', GroupController.createGroup);
router.get('/', GroupController.getAllGroup);
router.get('/:id', GroupController.getGroupById);
router.get('/name/:name', GroupController.getGroupByName);
router.delete('/:id', GroupController.deleteGroup);
router.put('/:id', GroupController.updateGroup);

module.exports = router;
