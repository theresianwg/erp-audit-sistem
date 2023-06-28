const {InSupplier, InSupplierItem, InItem} = require('../../../../models');

class SupplierRepository {
    async getSuppliers() {
        try{
            return await InSupplier.findAll();
        }
        catch(err){
            throw err;
        }
    }

    async getSupplierById(id) {
        try{
            return await InSupplier.findOne({
                where: { id: id },
                include: [
                    {
                        model: InSupplierItem,
                        attributes: ['id_item', 'price', 'delivery_time'],
                        include: [
                            {
                                model: InItem,
                                attributes: ['name', 'buy_unit']
                            }
                        ]
                    }
                ]
            });
        }
        catch(err){
            throw err;
        }
    }

    async createSupplier(supplier) {
        try{
            return await InSupplier.create(supplier);
        }
        catch(err){
            throw err;
        }
    }

    async createSupplierItem(supplierItem) {
        try{
            return await InSupplierItem.create(supplierItem);
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = new SupplierRepository();