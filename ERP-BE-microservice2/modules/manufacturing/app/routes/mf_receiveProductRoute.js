const router = require('express').Router();
const receiveProductController = require('../controllers/mf_receiveProductController');

router.get('/', receiveProductController.getAll);
router.get('/:id', receiveProductController.getById);

router.post('/', receiveProductController.create);

router.put('/:id', receiveProductController.update);

router.delete('/:id', receiveProductController.delete);

module.exports = router;
