const PurchaseOrderRepository = require('../repositories/purchaseOrderRepository');
const ItemService = require('../repositories/itemRepository');
const InventoryService = require('../repositories/inventoryRepository');
const PurchaseRequestRepository = require('../repositories/purchaseRequestRepository');
const GlCoaService = require('../../../general_ledger/app/services/gl_coa_service');
const SupplierRepository = require('../repositories/supplierRepository');
const {
    generatePurchaseOrderId,
    generatePurchaseOrderDetailId,
} = require('../utils/generateId');
const { calPrice, calTax, calTotalPriceTax } = require('../utils/calculate');
const { checkBudget } = require('../utils/budgetUtils');

class PurchaseOrderService {
    async getPurchaseOrders() {
        return await PurchaseOrderRepository.getPurchaseOrders();
    }

    async getPurchaseOrderById(id) {
        return await PurchaseOrderRepository.getPurchaseOrderById(id);
    }

    async createPurchaseOrder(data) {
        data.id = generatePurchaseOrderId();
        data.total = 0;
        // create purchase order row for init
        const purchaseOrder = await PurchaseOrderRepository.createPurchaseOrder(
            data,
        );
        let purchaseOrderDetail = [];
        const dataPriceTaxParent = {
            total_price: 0,
            total_tax: 0,
            total_price_tax: 0,
        };

        const coa_data = {
            id_coa: -1,
            total_price: 0,
            budgetControl: {},
        };
        // loop for create purchase order detail
        for (let i = 0; i < data.items.length; i++) {
            data.items[i].id = generatePurchaseOrderDetailId(data.id);
            data.items[i].id_purchase_order = data.id;
            const stockItem = await ItemService.getById(data.items[i].id_item);

            // check if coa is not same
            if (data.items[i].id_coa != coa_data.id_coa) {
                coa_data.id_coa = data.items[i].id_coa;
                coa_data.total_price = 0;
                coa_data.budgetControl =
                    await PurchaseOrderRepository.getBudgetControlByCoaId(
                        stockItem.id_coa,
                    );
            }

            // calculate total price
            data.items[i].price = calPrice(
                stockItem.buy_price,
                data.items[i].quantity,
            );
            // sum total price
            dataPriceTaxParent.total_price += data.items[i].price;

            // calculate tax
            data.items[i].tax = calTax(data.items[i].price, stockItem.id_tax);
            // sum total tax
            dataPriceTaxParent.total_tax += data.items[i].tax;

            // calculate total price tax
            data.items[i].total = calTotalPriceTax(
                data.items[i].price,
                data.items[i].tax,
            );
            // sum total price tax
            dataPriceTaxParent.total_price_tax += data.items[i].total;

            // sum total price tax to coa for check budget
            // coa_data.total_price += data.items[i].total;
            // if(coa_data.total_price > coa_data.budgetControl.BC_Amount){
            //     //delete purchase order
            //     await PurchaseOrderRepository.deletePurchaseOrder(data.id);
            //     return{
            //         status: 'error',
            //         message: 'Budget is not enough',
            //     }
            // }

            data.items[i].unit = stockItem.buy_unit;

            // get budget status from purchase request detail
            // const purchaseRequestDetailByItem =
            //     await PurchaseRequestRepository.getPurchaseRequestDetailByItemId(
            //         data.items[i].id_item,
            //         data.id_purchase_request,
            //     );
            // data.items[i].budgetStatus =
            //     purchaseRequestDetailByItem.budgetStatus || false;
            
            if(data.items[i].budgetStatus == false){
                //delete purchase order
                await PurchaseOrderRepository.deletePurchaseOrder(data.id);
                return{
                    status: 'error',
                    message: 'Budget is not enough',
                }
            }

            // create purchase order detail
            const purchase_order_detail_item =
                await PurchaseOrderRepository.createPurchaseOrderDetail(
                    data.items[i],
                );
            purchaseOrderDetail.push(purchase_order_detail_item);

            // update quantity in inventory
            // const inventory = await InventoryService.getInventoryByItemId(
            //     data.items[i].id_item,
            // );
            // const newQuantity = inventory.quantity + data.items[i].quantity;
            // await InventoryService.updateInventory(data.items[i].id_item, {
            //     quantity: newQuantity,
            // });

            // update ordered in purchase request detail
            const purchaseRequestDetail =
                await PurchaseRequestRepository.updatePurchaseRequestDetailMultipleWhere(
                    {
                        id_item: data.items[i].id_item,
                        id_purchase_request: data.id_purchase_request,
                    },
                    { ordered: true },
                );
        }

        //check total price tax is not more than budget
        const budgetCashBank = await checkBudget();
        if(dataPriceTaxParent.total_price_tax > budgetCashBank.total){
            //delete purchase order
            await PurchaseOrderRepository.deletePurchaseOrder(data.id);
            return{
                status: 'error',
                message: 'Budget is not enough',
            }
        }

        // update purchase order price tax
        await PurchaseOrderRepository.updatePurchaseOrder(
            data.id,
            dataPriceTaxParent,
        );

        return { purchaseOrder, dataPriceTaxParent, purchaseOrderDetail };
    }

    async createPurchaseOrderMultipleSupplier(dataPO) {
        try{
            let arrPO = [];
            //check all supplier are exist
            for(let i = 0; i < dataPO.suppliers.length; i++){
                const supplier = await SupplierRepository.getSupplierById(dataPO.suppliers[i].id_supplier);
                if(!supplier){
                    throw new Error('Supplier not found');
                }
            }
            //loop by supplier
            for(let i = 0; i < dataPO.suppliers.length; i++){
                dataPO.suppliers[i].id = generatePurchaseOrderId();
                dataPO.suppliers[i].id_purchase_request = dataPO.id_purchase_request;

                //create purchase order parent
                const purchaseOrder = await PurchaseOrderRepository.createPurchaseOrder(dataPO.suppliers[i]);

                //create purchase order detail
                let purchaseOrderDetail = [];
                const dataPriceTaxParent = {
                    total_price: 0,
                    total_tax: 0,
                    total_price_tax: 0,
                };

                const coa_data = {
                    id_coa: -1,
                    total_price: 0,
                    budgetControl: {},
                };
                // loop for create purchase order detail
                for (let j = 0; j < dataPO.suppliers[i].items.length; j++) {
                    dataPO.suppliers[i].items[j].id = generatePurchaseOrderDetailId(dataPO.suppliers[i].id);
                    dataPO.suppliers[i].items[j].id_purchase_order = dataPO.suppliers[i].id;
                    const stockItem = await ItemService.getById(dataPO.suppliers[i].items[j].id_item);

                    // check if coa is not same
                    if (stockItem.id_coa != coa_data.id_coa) {
                        coa_data.id_coa = stockItem.id_coa;
                        coa_data.total_price = 0;
                        coa_data.budgetControl =
                            await PurchaseOrderRepository.getBudgetControlByCoaId(
                                stockItem.id_coa,
                            );
                    }

                    // calculate total price
                    dataPO.suppliers[i].items[j].price = calPrice(
                        // stockItem.buy_price,
                        dataPO.suppliers[i].items[j].buy_price,
                        dataPO.suppliers[i].items[j].quantity,
                    );
                    // sum total price
                    dataPriceTaxParent.total_price += dataPO.suppliers[i].items[j].price;

                    // calculate tax
                    dataPO.suppliers[i].items[j].tax = calTax(dataPO.suppliers[i].items[j].price, stockItem.id_tax);
                    // sum total tax
                    dataPriceTaxParent.total_tax += dataPO.suppliers[i].items[j].tax;

                    // calculate total price tax
                    dataPO.suppliers[i].items[j].total = calTotalPriceTax(
                        dataPO.suppliers[i].items[j].price,
                        dataPO.suppliers[i].items[j].tax,
                    );
                    // sum total price tax
                    dataPriceTaxParent.total_price_tax += dataPO.suppliers[i].items[j].total;

                    dataPO.suppliers[i].items[j].unit = stockItem.buy_unit;
                    
                    if(dataPO.suppliers[i].items[j].budgetStatus == false){
                        //delete purchase order
                        await PurchaseOrderRepository.deletePurchaseOrder(dataPO.id);
                        throw new Error('Budget is not enough');
                    }

                    // create purchase order detail
                    const purchase_order_detail_item =
                        await PurchaseOrderRepository.createPurchaseOrderDetail(
                            dataPO.suppliers[i].items[j],
                        );
                    purchaseOrderDetail.push(purchase_order_detail_item);

                    // update ordered in purchase request detail
                    const purchaseRequestDetail =
                        await PurchaseRequestRepository.updatePurchaseRequestDetailMultipleWhere(
                            {
                                id_item: dataPO.suppliers[i].items[j].id_item,
                                id_purchase_request: dataPO.id_purchase_request,
                            },
                            { ordered: true },
                        );
                }

                //check total price tax is not more than budget
                const budgetCashBank = await checkBudget();
                if(dataPriceTaxParent.total_price_tax > budgetCashBank.total){
                    //delete purchase order
                    await PurchaseOrderRepository.deletePurchaseOrder(dataPO.suppliers[i].id);
                    throw new Error('Budget is not enough');
                }

                // update purchase order price tax
                await PurchaseOrderRepository.updatePurchaseOrder(
                    dataPO.suppliers[i].id,
                    dataPriceTaxParent,
                );

                arrPO.push({ purchaseOrder, dataPriceTaxParent, purchaseOrderDetail });
            }

            return {
                status: 'success',
                message: 'Purchase Order created',
                data: arrPO,
            }
        }
        catch(err){
            throw err;
        }
    }

    async checkBudget(){
        const budgetCashBank = await checkBudget();
        return budgetCashBank;
    }

    async createDebt(data) {
        try{
            const amount = data.amount;
            const account = data.account;
            const budget = await checkBudget();
            let updateRes;
            switch (account) {
                case 'cash':
                    const budgetCash = budget.coaCash;
                    updateRes = await GlCoaService.updateCoa(
                        2,
                        {
                            Coa_Opening_Balance: budgetCash + parseInt(amount),
                        }
                    );
                    break;
                case 'bank_Mandiri':
                    const budgetBankMandiri = budget.coaBankMandiri;
                    updateRes = await GlCoaService.updateCoa(
                        5,
                        {
                            Coa_Opening_Balance: budgetBankMandiri + parseInt(amount),
                        }
                    );
                    break;
                case 'bank_BCA':
                    const budgetBankBCA = budget.coaBankBca;
                    updateRes = await GlCoaService.updateCoa(
                        6,
                        {
                            Coa_Opening_Balance: budgetBankBCA + parseInt(amount),
                        }
                    );
                    break;
                default:
                    updateRes = {
                        status: 'error',
                        message: 'Account not found',
                    }
                    break;
            }
            return updateRes;
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = new PurchaseOrderService();
