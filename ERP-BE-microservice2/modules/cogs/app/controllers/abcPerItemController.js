'use strict';

const ABCPerItemService = require('../services/ABCPerItemService');

class ABCPerItemController {
    async getAllABCPerItems(req, res, next) {
        try {
            const reqHR = await ABCPerItemService.getAllABCPerItems();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getABCPerItemById(req, res, next) {
        try {
            const reqHR = await ABCPerItemService.getABCPerItemById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'ABCPerItem not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createABCPerItem(req, res, next) {
        try {
            const reqHR = await ABCPerItemService.createABCPerItem(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateABCPerItem(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ABCPerItemService.updateABCPerItem(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'ABCPerItem not found' });
            }
            res.json({ message: 'ABCPerItem updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteABCPerItem(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await ABCPerItemService.deleteABCPerItem(id);
            if (result === 0) {
                return res.status(404).json({ message: 'ABCPerItem not found' });
            }
            res.json({ message: 'ABCPerItem deleted successfully' });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ABCPerItemController();
