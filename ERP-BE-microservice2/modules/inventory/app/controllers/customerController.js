const CustomerService = require('../services/customerService');

class CustomerController {
    async getCustomers(req, res) {
        try {
            const customers = await CustomerService.getCustomers();
            return res.json(customers);
        } catch (err) {
            console.log(err);
        }
    }

    async getCustomerById(req, res) {
        try {
            const customer = await CustomerService.getCustomerById(req.params.id);
            return res.json(customer);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new CustomerController();