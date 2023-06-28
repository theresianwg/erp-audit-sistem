const {
    // InPurchaseRequest,
    // InPurchaseRequestDetail,
    // InItem,
    MfJobOrder,
    MfJobOrderDetail,
    MfRequestMan,
} = require('../../../../models');

class JobOrderRepository {
    async getJobOrderbyId(id) {
        const jobOrder = await MfJobOrder.findOne({
            where: { id: id },
            include: [
                {
                    model: MfJobOrderDetail,
                },
            ],
        });
        return jobOrder;
    }

    async getJobOrderDetail(id) {
        return await MfJobOrderDetail.findAll({
            where: { jo_id: id },
        });
    }

    async getAllJobOrder() {
        return await MfJobOrder.findAll();
    }

    async createJobOrder(jobOrder) {
        const newJobOrder = await MfJobOrder.create(jobOrder);
        return newJobOrder;
    }

    async createJobOrderDetail(jobOrderDetail) {
        const newJobOrderDetail = await MfJobOrderDetail.create(jobOrderDetail);
        return newJobOrderDetail;
    }

    async createRequestMan(requestMan) {
        const newRequestMan = await MfRequestMan.create(requestMan);
        return newRequestMan;
    }

    async updateJobOrderDetail(id, data) {
        const jobOrderDetail = await MfJobOrderDetail.update(data, {
            where: { id: id },
        });
        return jobOrderDetail;
    }

    // async updatePurchaseRequestDetail(id, data) {
    //     const purchaseRequestDetail = await InPurchaseRequestDetail.update(
    //         data,
    //         { where: { id: id } },
    //     );
    //     return purchaseRequestDetail;
    // }

    // async updatePurchaseRequestDetailMultipleWhere(where, data) {
    //     const purchaseRequestDetail = await InPurchaseRequestDetail.update(
    //         data,
    //         { where: where },
    //     );
    //     return purchaseRequestDetail;
    // }
}

module.exports = new JobOrderRepository();
