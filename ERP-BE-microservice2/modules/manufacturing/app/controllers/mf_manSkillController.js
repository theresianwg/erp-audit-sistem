const manSkillService = require('../services/mf_manSkillService');

class ManSkillController {
    async getAll(req, res) {
        await manSkillService
            .getAll()
            .then((data) => {
                if (data.length == 0) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Man skill not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Man skill list retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man skill retrieved failed',
                    data: err,
                });
            });
    }

    async getById(req, res) {
        const { id } = req.params;
        await manSkillService
            .getById(id)
            .then((data) => {
                if (data == null) {
                    res.status(404).json({
                        status: 'error',
                        message: 'Man skill not found',
                        data: {},
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Man skill retrieved successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man skill retrieved failed',
                    data: err,
                });
            });
    }

    async create(req, res) {
        try {
            const newManSkill = await manSkillService.create(req.body);
            res.status(200).json(newManSkill);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const manSkill = req.body;
        await manSkillService
            .update(id, manSkill)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Man skill updated successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man skill updated failed',
                    data: err,
                });
            });
    }

    async delete(req, res) {
        const { id } = req.params;
        await manSkillService
            .delete(id)
            .then((data) => {
                res.status(200).json({
                    status: 'success',
                    message: 'Man skill deleted successfully',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error',
                    message: 'Man skill deleted failed',
                    data: err,
                });
            });
    }
}

module.exports = new ManSkillController();
