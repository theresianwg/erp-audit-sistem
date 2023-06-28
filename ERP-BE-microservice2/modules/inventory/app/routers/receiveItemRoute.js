const router = require('express').Router();
const ReceiveItemController = require('../controllers/receiveItemController');

router.get('/', ReceiveItemController.getReceiveItems);
router.post('/search', ReceiveItemController.getReceiveItemById);
router.post('/', ReceiveItemController.createReceiveItem);

module.exports = router;
