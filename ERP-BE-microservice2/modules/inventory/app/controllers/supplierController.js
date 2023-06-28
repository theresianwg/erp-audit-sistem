const SupplierService = require('../services/supplierService');

class SupplierController {
    async getSuppliers(req, res) {
        try{
            const suppliers = await SupplierService.getSuppliers();
            res.send(suppliers);
        }
        catch(err){
            res.send(err);
        }
    }

    async getSupplierById(req, res) {
        try{
            const { id } = req.body;
            const supplier = await SupplierService.getSupplierById(
                id,
            );
            res.send(supplier);
        }
        catch(err){
            res.send(err);
        }
    }

    async createSupplier(req, res) {
        try{
            const createdSupplier = await SupplierService.createSupplier(
                req.body
            );
            res.send(createdSupplier);
        }
        catch(err){
            res.send(err);
        }
    }

    async createSupplierItem(req, res) {
        try{
            const createdSupplierItem = await SupplierService.createSupplierItem(
                req.body
            );
            res.send(createdSupplierItem);
        }
        catch(err){
            res.send(err);
        }
    }
}

module.exports = new SupplierController();