const SupplierRepository = require('../repositories/supplierRepository');
const ItemRepository = require('../repositories/itemRepository')
const {generateSupplierId} = require('../utils/generateId');

class SupplierService {
    async getSuppliers() {
        try{
            return await SupplierRepository.getSuppliers();
        }
        catch(err){
            throw err;
        }
    }

    async getSupplierById(id) {
        try{
            return await SupplierRepository.getSupplierById(id);
        }
        catch(err){
            throw err;
        }
    }

    async createSupplier(supplier) {
        try{
            supplier.id = generateSupplierId();
            return await SupplierRepository.createSupplier(supplier);
        }
        catch(err){
            throw err;
        }
    }

    async createSupplierItem(supplierItem) {
        try{
            const findSupplier = await SupplierRepository.getSupplierById(supplierItem.id_supplier);
            if(!findSupplier){
                throw new Error('Supplier not found');
            }
            // check item is valid
            for(let i = 0; i < supplierItem.items.length; i++){
                const findItem = await ItemRepository.getById(supplierItem.items[i].id_item);
                if(!findItem){
                    throw new Error(`Item ${supplierItem.items[i].id_item} not found`);
                }
            }
            // create item
            for(let i = 0; i < supplierItem.items.length; i++){
                supplierItem.items[i].id_supplier = supplierItem.id_supplier;
                await SupplierRepository.createSupplierItem(supplierItem.items[i]);
            }
            return await SupplierRepository.getSupplierById(supplierItem.id_supplier);
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = new SupplierService();