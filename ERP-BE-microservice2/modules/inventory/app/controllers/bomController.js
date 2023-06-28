const bomService = require('../services/bomService');

class BomController {
    async getBomByParentId(req, res) {
        const id = req.body.id;
        const bom = await bomService.getBomByParentId(id);
        res.json(bom);
    }

    async createBom(req, res) {
        const bom = await bomService.createBom(req.body);
        res.json(bom);
    }
}

module.exports = new BomController();
