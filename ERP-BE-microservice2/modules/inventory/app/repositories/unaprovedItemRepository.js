const { InUnapprovedItemReport, InReceiveItem } = require('../../../../models');

class UnaprovedItemRepository {
    async getAllUnaprovedItem() {
        return await InUnapprovedItemReport.findAll({
            include: [
                {
                    model: InReceiveItem,
                    attributes: ['id', 'id_action'],
                },
            ],
        });
    }

    async createUnaprovedItem(data) {
        return await InUnapprovedItemReport.create(data);
    }
}

module.exports = new UnaprovedItemRepository();
