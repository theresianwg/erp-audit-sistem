const {
    InPurchaseRequest,
    InPurchaseRequestDetail,
    InItem,
} = require('../../../../models');

class PurchaseRequestRepository {
    async getAllPurchaseRequest() {
        const purchaseRequests = await InPurchaseRequest.findAll({
            include: [
                {
                    model: InPurchaseRequestDetail,
                    attributes: ['id', 'quantity', 'ordered', 'budgetStatus'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['id', 'name', 'buy_unit', 'buy_price'],
                        },
                    ],
                },
            ],
            order : [['createdAt', 'DESC']]
        });
        return purchaseRequests;
    }

    async getPurchaseRequestById(id) {
        const purchaseRequest = await InPurchaseRequest.findOne({
            where: { id: id },
            include: [
                {
                    model: InPurchaseRequestDetail,
                    attributes: ['id', 'quantity', 'ordered', 'budgetStatus'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['id', 'name', 'buy_unit', 'buy_price'],
                        },
                    ],
                },
            ],
        });
        return purchaseRequest;
    }

    async getPurchaseRequestDetailByItemId(id_item, id_purchase_request) {
        const purchaseRequestDetail = await InPurchaseRequestDetail.findOne({
            where: {
                id_item: id_item,
                id_purchase_request: id_purchase_request,
            },
        });
        return purchaseRequestDetail;
    }

    async createPurchaseRequest(purchaseRequest) {
        const newPurchaseRequest = await InPurchaseRequest.create(
            purchaseRequest,
        );
        return newPurchaseRequest;
    }

    async createItemPurchaseRequest(itemPurchaseRequest) {
        const newItemPurchaseRequest = await InPurchaseRequestDetail.create(
            itemPurchaseRequest,
        );
        return newItemPurchaseRequest;
    }

    async updatePurchaseRequest(id, data) {
        const purchaseRequest = await InPurchaseRequest.update(data, {
            where: { id: id },
        });
        return purchaseRequest;
    }

    async updatePurchaseRequestDetail(id, data) {
        const purchaseRequestDetail = await InPurchaseRequestDetail.update(
            data,
            { where: { id: id } },
        );
        return purchaseRequestDetail;
    }

    async updatePurchaseRequestDetailMultipleWhere(where, data) {
        const purchaseRequestDetail = await InPurchaseRequestDetail.update(
            data,
            { where: where },
        );
        return purchaseRequestDetail;
    }
}

module.exports = new PurchaseRequestRepository();
