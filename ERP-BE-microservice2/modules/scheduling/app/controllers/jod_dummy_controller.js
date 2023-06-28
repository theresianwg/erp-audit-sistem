const JodDummyService = require('../services/jod_dummy_service');

class JodDummyController {
    async createJodDummyAuto(req, res) {
        try {
            const data = req.body;
            const jod = await JodDummyService.createJodDummyAuto(data);
            res.status(200).json({
                status: 'success',
                data: jod,
            });
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    }
    async getAllJodDummyUnfinished(req, res) {
        try {
            const jod = await JodDummyService.getAllJodDummyUnfinished();
            res.status(200).json({
                status: 'success',
                data: jod,
            });
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}

module.exports = new JodDummyController();
