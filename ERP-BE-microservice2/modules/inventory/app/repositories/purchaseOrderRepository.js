const {
    InPurchaseOrder,
    InPurchaseOrderDetail,
    InItem,
    InSupplier,
    GlBudgetControl,
} = require('../../../../models');

class PurchaseOrderRepository {
    async getPurchaseOrders() {
        return await InPurchaseOrder.findAll({
            include: [
                {
                    model: InPurchaseOrderDetail,
                    attributes: [
                        'id',
                        'id_item',
                        'quantity',
                        'unit',
                        'price',
                        'tax',
                        'total',
                        'budgetStatus',
                    ],
                    include: [
                        {
                            model: InItem,
                            attributes: ['name'],
                        },
                    ],
                },
                {
                    model: InSupplier,
                    attributes: ['name', 'address'],
                },
            ],
            order : [['createdAt', 'DESC']]
        });
    }

    async getPurchaseOrderById(id) {
        return await InPurchaseOrder.findOne({
            where: { id: id },
            include: [
                {
                    model: InPurchaseOrderDetail,
                    attributes: [
                        'id',
                        'id_item',
                        'quantity',
                        'unit',
                        'price',
                        'tax',
                        'total',
                        'budgetStatus',
                    ],
                    include: [
                        {
                            model: InItem,
                            attributes: ['name'],
                        },
                    ],
                },
                {
                    model: InSupplier,
                    attributes: ['name', 'address'],
                },
            ],
        });
    }

    async createPurchaseOrder(data) {
        return await InPurchaseOrder.create(data);
    }

    async createPurchaseOrderDetail(data) {
        return await InPurchaseOrderDetail.create(data);
    }

    async updatePurchaseOrder(id, data) {
        return await InPurchaseOrder.update(data, { where: { id: id } });
    }

    async deletePurchaseOrder(id) {
        return await InPurchaseOrder.destroy({ where: { id: id } });
    }

    async getBudgetControlByCoaId(id_coa) {
        return await GlBudgetControl.findOne({
            where: { id_coa: id_coa },
            order: [['id_accounting_period', 'DESC']],
        });
    }
}

module.exports = new PurchaseOrderRepository();
