const CustomerRepository = require('../repositories/customerRepository');

class CustomerService {
    async getCustomers() {
        return await CustomerRepository.getCustomers();
    }

    async getCustomerById(id) {
        return await CustomerRepository.getCustomerById(id);
    }
}

module.exports = new CustomerService();