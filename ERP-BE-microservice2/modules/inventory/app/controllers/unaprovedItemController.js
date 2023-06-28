const UnaprovedItemService = require('../services/unaprovedItemService');

class UnaprovedItemController {
    async getAllUnaprovedItem(req, res) {
        await UnaprovedItemService.getAllUnaprovedItem()
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }
}

module.exports = new UnaprovedItemController();
