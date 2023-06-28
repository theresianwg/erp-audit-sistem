const router = require('express').Router();
const workcentreController = require('../controllers/mf_workcentreController');

router.get('/', workcentreController.getAll);
router.get('/:id', workcentreController.getById);

router.post('/', workcentreController.create);

router.put('/:id', workcentreController.update);

router.delete('/:id', workcentreController.delete);

module.exports = router;
