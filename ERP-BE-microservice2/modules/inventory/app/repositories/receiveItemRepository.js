const {
    InReceiveItem,
    InReceiveItemCheck,
    InItem,
} = require('../../../../models');

class ReceiveItemRepository {
    async getReceiveItems() {
        return await InReceiveItem.findAll({
            include: [
                {
                    model: InReceiveItemCheck,
                    attributes: ['id', 'id_item', 'approved_quantity'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
            order: [['createdAt', 'DESC']]
        });
    }

    async getReceiveItemById(id) {
        return await InReceiveItem.findOne({
            where: { id: id },
            include: [
                {
                    model: InReceiveItemCheck,
                    attributes: ['id', 'id_item', 'approved_quantity'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['name'],
                        },
                    ],
                },
            ],
        });
    }

    async createReceiveItem(data) {
        return await InReceiveItem.create(data);
    }

    async createReceiveItemCheck(data) {
        return await InReceiveItemCheck.create(data);
    }

    //check is there specific id action ecist in table
    async checkActionExist(id_action) {
        const fetchData = await InReceiveItem.findOne({
            where: { id_action: id_action },
        });
        if (fetchData) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = new ReceiveItemRepository();
