'use strict';

const GuestService = require('../services/GuestService');

class GuestController {
    async getAllGuests(req, res, next) {
        try {
            const Guests = await GuestService.getAllGuests();
            res.json(Guests);
        } catch (error) {
            next(error);
        }
    }

    async getGuestById(req, res, next) {
        try {
            const Guest = await GuestService.getGuestById(req.params.id);
            if (!Guest) {
                return res.status(404).json({ message: 'Guest not found' });
            }
            res.json(Guest);
        } catch (error) {
            next(error);
        }
    }

    async createGuest(req, res, next) {
        try {
            const Guest = await GuestService.createGuest(req.body);
            res.status(201).json(Guest);
        } catch (error) {
            next(error);
        }
    }

    async updateGuest(req, res, next) {
        try {
            const { id } = req.body;

            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await GuestService.updateGuest(id, req.body);
            if (result[0] === 0) {
                return res.status(404).json({ message: 'Guest not found' });
            }
            res.json({ message: 'Guest updated successfully' });
        } catch (error) {
            next(error);
        }
    }

    async deleteGuest(req, res, next) {
        try {
            const { id } = req.body;

            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            const result = await GuestService.deleteGuest(id, req.params.id);
            if (result === 0) {
                return res.status(404).json({ message: 'Guest not found' });
            }
            res.json({ message: 'Guest deleted successfully' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new GuestController();
