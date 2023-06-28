const {
    InSalesOrder,
    InSalesOrderDetail,
    InItem,
    InBomParent,
    InBomChild,
    InCustomer,
} = require('../../../../models');

class SalesOrderRepository {
    async getAllSalesOrder() {
        return await InSalesOrder.findAll({
            include: [
                {
                    model: InSalesOrderDetail,
                    attributes: ['id', 'quantity', 'price', 'tax', 'total'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['id', 'name', 'id_category'],
                            include: [
                                {
                                    model: InBomParent,
                                    attributes: ['id'],
                                    include: [
                                        {
                                            model: InBomChild,
                                            attributes: [
                                                'id_child_item',
                                                'quantity',
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: InCustomer,
                    attributes: ['name', 'address'],
                },
            ],
            order: [['createdAt', 'DESC']],
        });
    }

    async getSalesOrderByID(id) {
        return await InSalesOrder.findOne({
            where: { id: id },
            include: [
                {
                    model: InSalesOrderDetail,
                    attributes: ['id', 'quantity', 'price', 'tax', 'total'],
                    include: [
                        {
                            model: InItem,
                            attributes: ['id', 'name', 'id_category'],
                            include: [
                                {
                                    model: InBomParent,
                                    attributes: ['id'],
                                    include: [
                                        {
                                            model: InBomChild,
                                            attributes: [
                                                'id_child_item',
                                                'quantity',
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    model: InCustomer,
                    attributes: ['name', 'address'],
                },
            ],
        });
    }

    async createSalesOrder(salesOrder) {
        return await InSalesOrder.create(salesOrder);
    }

    async createSalesOrderDetail(salesOrderDetail) {
        return await InSalesOrderDetail.create(salesOrderDetail);
    }

    async updateSalesOrder(id, data) {
        return await InSalesOrder.update(data, { where: { id: id } });
    }
}

module.exports = new SalesOrderRepository();
