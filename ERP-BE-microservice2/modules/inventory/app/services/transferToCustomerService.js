const TransferToCustomerRepository = require('../repositories/transferToCustomerRepository');
const SalesOrderRepository = require('../repositories/salesOrderRepository');
const InventoryRepository = require('../repositories/inventoryRepository');
const { generateTfToCust } = require('../utils/generateId');

class TransferToCustomerService {
    async getTransferToCustomerById(id) {
        try {
            const tfc_fetch =
                TransferToCustomerRepository.getTransferToCustomerById(id);
            return tfc_fetch;
        } catch (err) {
            throw err;
        }
    }

    async createTransferToCustomer(data) {
        try {
            const status = data.status;
            if (status == 'on packing' || status == 'on delivery') {
                // get bom item from sales order
                const salesOrder = await SalesOrderRepository.getSalesOrderByID(
                    data.id_so,
                );

                //loop per item for update stock in inventory
                const salesOrderDetail = salesOrder.InSalesOrderDetails;
                for (let i = 0; i < salesOrderDetail.length; i++) {
                    const id_item = salesOrderDetail[i].InItem.id;

                    //calculate new stock
                    const item_inventory =
                        await InventoryRepository.getInventoryByItemId(id_item);
                    const newQuantity =
                        item_inventory.quantity - salesOrderDetail[i].quantity;

                    //update quantity in inventory
                    const updateData = {
                        quantity: newQuantity < 0 ? 0 : newQuantity,
                    };
                    await InventoryRepository.updateInventory(
                        id_item,
                        updateData,
                    );
                    console.log(id_item, updateData);
                }
            }

            data.id = generateTfToCust();
            const newTfToCust =
                TransferToCustomerRepository.createTransferToCustomer(data);
            return newTfToCust;
        } catch (err) {
            return err;
        }
    }
}

module.exports = new TransferToCustomerService();
