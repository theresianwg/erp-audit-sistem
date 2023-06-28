const router = require('express').Router();
const requestManController = require('../controllers/mf_requestManController');

router.get('/', requestManController.getAll);
router.get('/:id', requestManController.getById);

router.post('/', requestManController.create);

router.put('/:id', requestManController.update);

router.delete('/:id', requestManController.delete);

module.exports = router;
