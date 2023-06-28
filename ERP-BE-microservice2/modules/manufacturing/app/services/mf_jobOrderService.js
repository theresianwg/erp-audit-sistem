const jobOrderRepository = require('../repositories/mf_jobOrderRepository');
const masterOperationService = require('../services/mf_masterOperationService');
const machineService = require('../services/mf_machineService');
const manSkillService = require('../services/mf_manSkillService');
const bomService = require('../../../inventory/app/services/bomService');
const itemService = require('../../../inventory/app/services/itemService');
const costAccountingDetailService = require('../services/mf_costAccountingService');
const saveStorageService = require('../../../inventory/app/services/saveStorageService');

const glJournalService = require('../../../general_ledger/app/services/gl_journal_service');
const {
    generateJobOrderId,
    generateJobOrderDetailId,
    generateRequestManId,
    generateCostAccountingDetailId,
} = require('../utils/mf_generateId');

class JobOrderService {
    async getJobOrderDetail(id) {
        try {
            const jobOrderDetail =
                await jobOrderRepository.getJobOrderDetail(id);
            return jobOrderDetail;
        } catch (err) {
            throw err;
        }
    }

    async getAllJobOrder() {
        try {
            const jobOrderDetail =
                await jobOrderRepository.getAllJobOrder();
            return jobOrderDetail;
        } catch (err) {
            throw err;
        }
    }

    async getJobOrderbyId(id) {
        try {
            const jobOrder = await jobOrderRepository.getJobOrderbyId(id);
            return jobOrder;
        } catch (err) {
            throw err;
        }
    }

    async createJobOrder(data, routing, findBom, costAccountingId) {
        try {
            data.id = generateJobOrderId();

            const jobOrderData = {
                id: data.id,
                po_id: data.po_id,
            };

            const newJobOrder = await jobOrderRepository.createJobOrder(
                jobOrderData,
            );

            var totalCostAccounting = 0;
            var matCost = 0;
            var lamaProduksiTotal = 0;

            for (const detail of routing) {
                // console.log(detail);
                // console.log(detail.item_id);
                const dataDetail = {};
                dataDetail.id = generateJobOrderDetailId(data.id);
                dataDetail.jo_id = data.id;
                dataDetail.o_id = detail.o_id;
                
                dataDetail.jod_qty = data.po_qty;

                const OperationDetail =
                    await masterOperationService.getById(detail.o_id);

                // console.log(findBom);

                dataDetail.item_id = OperationDetail.item_id;
                dataDetail.m_id = OperationDetail.m_id;

                //menghitung lama Produksi
                const waktuOven = OperationDetail.m_hour; // dalam jam
                const kapasitasOven = OperationDetail.item_max; // jumlah kue per jalan oven

                const waktuArray = waktuOven.split(":");
                const jam = parseInt(waktuArray[0], 10);
                const menit = parseInt(waktuArray[1], 10);
                const detik = parseInt(waktuArray[2], 10);
              
                const totalDetikOven = (jam * 3600) + (menit * 60) + detik;
                const jumlahJalanOven = Math.ceil(data.po_qty / kapasitasOven);
                const lamaProduksiDetik = totalDetikOven * jumlahJalanOven;

                lamaProduksiTotal += lamaProduksiDetik;
              
                const lamaProduksi = new Date(0, 0, 0, 0, 0, lamaProduksiDetik);
              
                const formatWaktu = ("0" + lamaProduksi.getHours()).slice(-2) + ":" +
                                  ("0" + lamaProduksi.getMinutes()).slice(-2) + ":" +
                                  ("0" + lamaProduksi.getSeconds()).slice(-2);


                dataDetail.jod_m_hour = formatWaktu;
                dataDetail.jod_id_skill = OperationDetail.mn_skill_id;
                dataDetail.jod_man_qty = OperationDetail.mn_skill_qty;

                const reqMan = {};
                reqMan.id = generateRequestManId();
                reqMan.jod_id = dataDetail.id;
                reqMan.mn_skill_id = OperationDetail.mn_skill_id;
                reqMan.mn_skill_qty = OperationDetail.mn_skill_qty;

                //cost accounting detail
                const costAccountingDetail ={};
                costAccountingDetail.id = generateCostAccountingDetailId(costAccountingId);
                costAccountingDetail.ca_id = costAccountingId;
                costAccountingDetail.jod_id = dataDetail.id;
                costAccountingDetail.o_id = dataDetail.o_id;
                costAccountingDetail.item_id = dataDetail.item_id;
                costAccountingDetail.qty_produced = dataDetail.jod_qty;
                costAccountingDetail.m_id = dataDetail.m_id;
                costAccountingDetail.m_duration = dataDetail.jod_m_hour;
                costAccountingDetail.mn_skill_id = dataDetail.jod_id_skill;
                costAccountingDetail.mn_skill_qty = dataDetail.jod_man_qty;
                

                //menghitung material cost
                console.log("Cost Accounting Detail", costAccountingDetail);
                
                const findBom = await bomService.getBomByParentId(costAccountingDetail.item_id);

                console.log(findBom.InBomChildren);

                let i;
                for(i=0; i<findBom.InBomChildren.length;i++){

                    if(findBom.InBomChildren[i].InItem.id.includes("IRM")){
                        console.log("quantitiynyahsas",findBom.InBomChildren[i].quantity);

                        const quantityTotal = findBom.InBomChildren[i].quantity * costAccountingDetail.qty_produced;

                        console.log(findBom.InBomChildren[i].InItem.id,findBom.InBomChildren[i].quantity);
                        
                        // console.log(costAccountingDetail.qty_produced);

                        const saveStorage = await saveStorageService.consumeStockSaveStorage(findBom.InBomChildren[i].InItem.id,quantityTotal);

                        console.log(saveStorage);

                        matCost += saveStorage.total_price;

                        // console.log(item.InItem.id,quantityTotal );
                        
                    
                    }
                    console.log(matCost);

                }
                // findBom.InBomChildren.forEach(async (item) => {
                //     // console.log(findBom.InBomChildren);

                //     // const findItem = await itemService.getById(item.InItem.id);
                //     if(item.InItem.id.includes("IRM")){

                //         const quantityTotal = item.quantity * costAccountingDetail.qty_produced;
                //         console.log(item.InItem.id,item.quantity);
                        
                //         // console.log(costAccountingDetail.qty_produced);

                //         const saveStorage = await saveStorageService.consumeStockSaveStorage(item.InItem.id,quantityTotal);

                //         matCost += saveStorage.total_price;

                //         // console.log(item.InItem.id,quantityTotal );
                        
                    
                //     }
                //     console.log(matCost);

                // });

                costAccountingDetail.material_cost = matCost;
                matCost = 0;

                //menghitung machine cost
                const machineCost = await machineService.getById(dataDetail.m_id);
                costAccountingDetail.machine_cost = (lamaProduksi.getHours() + lamaProduksi.getMinutes() / 60 + lamaProduksi.getSeconds() / 3600) * machineCost.m_costph;
                //menghitung man cost
                const manCost = await manSkillService.getById(dataDetail.jod_id_skill);
                costAccountingDetail.man_cost = costAccountingDetail.mn_skill_qty * manCost.ms_skill_costph * (lamaProduksi.getHours() + lamaProduksi.getMinutes() / 60 + lamaProduksi.getSeconds() / 3600);

                //menghitung total cost
                costAccountingDetail.total_cost = costAccountingDetail.material_cost + costAccountingDetail.machine_cost + costAccountingDetail.man_cost;

                totalCostAccounting = totalCostAccounting + costAccountingDetail.total_cost;
                // console.log(totalCostAccounting);

                const newJobOrderDetail =
                    await jobOrderRepository.createJobOrderDetail(dataDetail);
                const newReqMan = await jobOrderRepository.createRequestMan(
                    reqMan,
                );
                 const newCostAccountingDetail = await costAccountingDetailService.createCostAccountingDetail(costAccountingDetail);
            };

            const costAccounting = {};
            costAccounting.total_cost = totalCostAccounting;
            costAccounting.total_cost_each = totalCostAccounting/data.po_qty;
            const updateCostAccounting = await costAccountingDetailService.update(costAccountingId,costAccounting); 
            console.log(lamaProduksiTotal);
            await glJournalService.createJournalandJournalDetailThroughManufactureCOGS()
            return { newJobOrder, newJobOrderDetail };
        } catch (err) {
            throw err;
        }
    }

    async updateJobOrderDetail(id, data) {
        try {
            const jobOrderDetail =
                await jobOrderRepository.updateJobOrderDetail(id, data);
            return jobOrderDetail;
        } catch (err) {
            throw err;
        }
    }

    // async updatePurchaseRequestDetailMultipleWhere(where, data) {
    //     try {
    //         const purchaseRequestDetail =
    //             await PurchaseRequestRepository.updatePurchaseRequestDetailMultipleWhere(
    //                 where,
    //                 data,
    //             );
    //         return purchaseRequestDetail;
    //     } catch (err) {
    //         throw err;
    //     }
    // }
}

module.exports = new JobOrderService();
