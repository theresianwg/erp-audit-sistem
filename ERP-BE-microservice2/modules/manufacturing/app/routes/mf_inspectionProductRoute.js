const router = require('express').Router();
const inspectionProdcutController = require('../controllers/mf_inspectionProductController');

router.get('/', inspectionProdcutController.getAll);
router.get('/:id', inspectionProdcutController.getById);

router.post('/', inspectionProdcutController.create);

router.put('/:id', inspectionProdcutController.update);

router.delete('/:id', inspectionProdcutController.delete);

module.exports = router;
