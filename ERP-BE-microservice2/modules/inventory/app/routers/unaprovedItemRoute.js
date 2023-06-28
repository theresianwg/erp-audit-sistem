const router = require('express').Router();
const unaprovedItemController = require('../controllers/unaprovedItemController');

router.get('/', unaprovedItemController.getAllUnaprovedItem);

module.exports = router;
