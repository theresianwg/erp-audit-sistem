const router = require('express').Router();
const masterRoutingController = require('../controllers/mf_masterRoutingController');

router.get('/', masterRoutingController.getAll);
router.get('/:id', masterRoutingController.getById);

router.post('/', masterRoutingController.create);

router.put('/:id', masterRoutingController.update);

router.delete('/:id', masterRoutingController.delete);

module.exports = router;
