const ReceiveItemService = require('../services/receiveItemService');

class ReceiveItemController {
    async getReceiveItems(req, res) {
        try {
            const receiveItems = await ReceiveItemService.getReceiveItems();
            res.status(200).json(receiveItems);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getReceiveItemById(req, res) {
        try {
            const { id } = req.body;
            const receiveItem = await ReceiveItemService.getReceiveItemById(id);
            res.status(200).json(receiveItem);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async createReceiveItem(req, res) {
        try {
            const newReceiveItem = await ReceiveItemService.createReceiveItem(
                req.body,
            );
            res.status(200).json(newReceiveItem);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new ReceiveItemController();
