const router = require('express').Router();
const manController = require('../controllers/mf_manController');

router.get('/', manController.getAll);
router.get('/:id', manController.getById);

router.post('/', manController.create);

router.put('/:id', manController.update);

router.delete('/:id', manController.delete);

module.exports = router;
