const router = require('express').Router();
const itemController = require('../controllers/itemController');

router.get('/', itemController.getAll);
router.get('/endproduct', itemController.getEndProducts);
router.post('/search', itemController.getById);
router.post('/', itemController.create);
router.put('/:id', itemController.update);
router.delete('/:id', itemController.delete);
router.get('/py', itemController.testPython);

module.exports = router;
