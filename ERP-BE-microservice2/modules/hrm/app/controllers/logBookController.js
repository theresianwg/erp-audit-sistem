'use strict';

const LogBookService = require('../services/LogBookService');

class LogBookController {
    async getAllLogBooks(req, res, next) {
        try {
            const reqHR = await LogBookService.getAllLogBooks();
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async getLogBookById(req, res, next) {
        try {
            const reqHR = await LogBookService.getLogBookById(req.params.id);
            if (!reqHR) {
                return res.status(404).json({ message: 'LogBook not found' });
            }
            res.json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async createLogBook(req, res, next) {
        try {
            const reqHR = await LogBookService.createLogBook(req.body);
            res.status(201).json(reqHR);
        } catch (error) {
            next(error);
        }
    }

    async updateLogBook(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await LogBookService.updateLogBook(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'LogBook not found' });
            }
            res.json({ message: 'LogBook updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteLogBook(req, res, next) {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await LogBookService.deleteLogBook(id);
            if (result === 0) {
                return res.status(404).json({ message: 'LogBook not found' });
            }
            res.json({ message: 'LogBook deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new LogBookController();
