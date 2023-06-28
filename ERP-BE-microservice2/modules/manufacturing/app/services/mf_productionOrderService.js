const productionOrderRepository = require('../repositories/mf_productionOrderRepository');
const masterRoutingService = require('../services/mf_masterRoutingService');
const transferOrderService = require('../services/mf_transferOrderService');
const jobOrderService = require('../services/mf_jobOrderService');
const issueMaterialService = require('../services/mf_issueMaterialService');
const bomService = require('../../../inventory/app/services/bomService');
const receiveProductService = require('../services/mf_receiveProductService');
const costAccountingService = require('../services/mf_costAccountingService');

const {
    generateProductionOrderId,
    generateTransferOrderId,
    generateCostAccountingId,
} = require('../utils/mf_generateId');
const { changePRStatus } = require('../utils/mf_updateStatus');

class ProductionOrderService {
    async getAll() {
        try {
            const machine = await productionOrderRepository.getAll();
            return machine;
        } catch (err) {
            throw err;
        }
    }

    async getById(id) {
        return await productionOrderRepository.getById(id);
    }

    async create(data) {
        try {

            data.id = generateProductionOrderId();
            data.po_status = "On Progress";
            const newProdutionOrder = await productionOrderRepository.create(
                data,
            );

            // change Production Request Status
            await changePRStatus(data.pr_id);

            // insert to receive product
            const receiveProduct = {};
            receiveProduct.po_id = data.id;
            receiveProduct.item_id = data.item_id;
            receiveProduct.rp_qty = data.po_qty;
            receiveProduct.rp_date = Date();
            const newReceiveProduct = await receiveProductService.create(
                receiveProduct,
            );

            // connect to bom
            const findBom = await bomService.getBomByParentId(data.item_id);
            // add data to transfer order
            findBom.InBomChildren.forEach(async (item) => {
                const transferOrder = {};
                const issueMaterial = {};

                // if(item.InItem.id.includes("IMG")){
                //     const findBom2 = await bomService.getBomByParentId(data.item_id);
                //     findBom.InBomChildren.forEach(async (item2) => {
                //         const checker = await transferOrderService.findWhereExist(data.po_id,item2.InItem.id);
                //         if(checker == null){
                            transferOrder.id = generateTransferOrderId();
                            transferOrder.po_id = data.id;
                            transferOrder.item_id = item.InItem.id;
                            transferOrder.req_qty = data.po_qty * item.quantity;
                            transferOrder.to_status = 'Unapproved';
                //         }
                //         else{
                //             const total = checker.req_qty + (item2.quantity * data.po_qty);
                //             const update = { req_qty: total };
                //             await transferOrderService.update(item2.InItem.id, update);
                //         }
                //     });
                // }


                transferOrder.id = generateTransferOrderId();
                transferOrder.po_id = data.id;
                transferOrder.item_id = item.InItem.id;
                transferOrder.req_qty = data.po_qty * item.quantity;
                transferOrder.to_status = 'Unapproved';

                issueMaterial.po_id = data.id;
                issueMaterial.item_id = item.InItem.id;
                issueMaterial.im_qty = data.po_qty * item.quantity;
                issueMaterial.im_approval = 'Unapproved';

                await transferOrderService.create(transferOrder);
                await issueMaterialService.create(issueMaterial);
            });

            // looking for routing by item_id
            const routing = await masterRoutingService.getItemIdbyId(
                data.item_id,
            );
            data.po_id = data.id;

            const costAccounting = {};
            costAccounting.id = generateCostAccountingId();
            costAccounting.po_id = data.po_id;
            costAccounting.item_id = data.item_id;
            costAccounting.item_total = data.po_qty;
            await costAccountingService.createCostAccounting(costAccounting);

            const newjobOrder = await jobOrderService.createJobOrder(
                data,
                routing,
                findBom,
                costAccounting.id,
            );

            return newProdutionOrder;
        } catch (err) {
            throw err;
        }
    }

    async update(id, productionOrder) {
        return await productionOrderRepository.update(id, productionOrder);
    }

    async delete(id) {
        return await productionOrderRepository.delete(id);
    }
}

module.exports = new ProductionOrderService();
