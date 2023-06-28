const receiveProductRepository = require('../repositories/mf_receiveProductRepository');
const inventoryService = require('../../../inventory/app/services/inventoryService');
const inspectionProductService = require('../services/mf_inspectionProductService');
const { generateReceiveProductId } = require('../utils/mf_generateId');
const { changePOStatus } = require('../utils/mf_updateStatus2');

class ReceiveProductService {
    async getAll() {
        try {
            const machine = await receiveProductRepository.getAll();
            return machine;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await receiveProductRepository.getById(id);
    }

    async create(data) {
        try {
            data.id = generateReceiveProductId();
            data.rp_approval = 'Unapproved';
            const newReceiveProduct = await receiveProductRepository.create(
                data,
            );
            console.log(data.po_id);
            // await changePOStatus(data.po_id);

            return { newReceiveProduct };
        } catch (err) {
            throw err;
        }
    }

    async update(id, data) {
        if (data.rp_approval == 'Approved') {
            const receiveProduct = await receiveProductRepository.getById(id);
            await changePOStatus(receiveProduct.po_id);

            const inspectionProduct = {};
            inspectionProduct.rp_id = receiveProduct.id;
            inspectionProduct.item_id = receiveProduct.item_id;
            inspectionProduct.ip_entry_date = Date();
            inspectionProduct.ip_qty = receiveProduct.rp_qty;
            inspectionProduct.ip_result = 'None';
            inspectionProduct.ip_qty_reject = 0;
            inspectionProduct.ip_approval = 'Unapproved';
            const newInspectionProduct = await inspectionProductService.create(
                inspectionProduct,
            );
        }
        return await receiveProductRepository.update(id, data);
    }

    async delete(id) {
        return await receiveProductRepository.delete(id);
    }
}

module.exports = new ReceiveProductService();
