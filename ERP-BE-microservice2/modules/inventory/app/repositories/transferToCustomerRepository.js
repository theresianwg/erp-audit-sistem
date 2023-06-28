const {
    InTransferToCustomer,
    InSalesOrder,
    InSalesOrderDetail,
    InItem,
    InCustomer,
} = require('../../../../models');

class TransferToCustomerRepository {
    async getTransferToCustomerById(id) {
        return await InTransferToCustomer.findOne({
            where: { id: id },
            include: [
                {
                    model: InSalesOrder,
                    attributes: ['id_customer'],
                    include: [
                        {
                            model: InCustomer,
                            attributes: ['name', 'address'],
                        },
                        {
                            model: InSalesOrderDetail,
                            attributes: ['id_item', 'quantity'],
                            include: [
                                {
                                    model: InItem,
                                    attributes: ['name'],
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    }

    async createTransferToCustomer(data) {
        return await InTransferToCustomer.create(data);
    }
}

module.exports = new TransferToCustomerRepository();
