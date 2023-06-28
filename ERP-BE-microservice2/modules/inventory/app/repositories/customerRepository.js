const {InCustomer} = require('../../../../models');

class CustomerRepository {
    async getCustomers() {
        return await InCustomer.findAll();
    }

    async getCustomerById(id) {
        return await InCustomer.findOne({
            where: { id: id },
        });
    }
}

module.exports = new CustomerRepository();