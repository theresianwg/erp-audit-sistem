const PurchaseRequestRepository = require('../repositories/purchaseRequestRepository');
const {
    generatePurchaseRequestId,
    generatePurchaseRequestDetailId,
} = require('../utils/generateId');
const { checkBudgetByIdItem, checkBudget, checkBudgetPerItem } = require('../utils/budgetUtils');

class PurchaseRequestService {
    async getAllPurchaseRequest() {
        try {
            const purchaseRequests =
                await PurchaseRequestRepository.getAllPurchaseRequest();
            return purchaseRequests;
        } catch (err) {
            throw err;
        }
    }

    async getPurchaseRequestById(id) {
        try {
            const purchaseRequest =
                await PurchaseRequestRepository.getPurchaseRequestById(id);
            return purchaseRequest;
        } catch (err) {
            throw err;
        }
    }

    async createPurchaseRequest(data) {
        try {
            data.id = generatePurchaseRequestId();
            const newPurchaseRequest =
                await PurchaseRequestRepository.createPurchaseRequest(data);
            let newItemPurchaseRequest;
            let budgetNeeded = 0;
            let taxNeeded = 0;

            //check budget
            const budgetCashBank = await checkBudget();

            //loop for create purchase request detail
            for (let i = 0; i < data.items.length; i++) {
                data.items[i].id = generatePurchaseRequestDetailId(data.id);
                data.items[i].id_purchase_request = data.id;
                
                //wrong budget check
                // const budget = await checkBudgetByIdItem(
                //     data.items[i].id_item,
                //     data.items[i].quantity,
                //     budgetNeeded,
                // );

                //correct budget check
                const budget = await checkBudgetPerItem(
                    data.items[i].id_item,
                    data.items[i].quantity,
                    budgetNeeded,
                    taxNeeded,
                    budgetCashBank.total
                );

                data.items[i].budgetStatus = budget.budgetStatus;
                budgetNeeded = budget.amountNeeded;
                taxNeeded = budget.taxNeeded;
                newItemPurchaseRequest =
                    await PurchaseRequestRepository.createItemPurchaseRequest(
                        data.items[i],
                    );
            }

            const estimationPriceData = {
                est_total_price: budgetNeeded,
                est_total_tax: taxNeeded,
                est_total_price_tax: budgetNeeded + taxNeeded,
            }

            await PurchaseRequestRepository.updatePurchaseRequest(
                data.id,
                estimationPriceData,
            );

            return { newPurchaseRequest, estimationPriceData, newItemPurchaseRequest };
        } catch (err) {
            throw err;
        }
    }

    async updatePurchaseRequest(id, data) {
        try {
            const purchaseRequest =
                await PurchaseRequestRepository.updatePurchaseRequest(id, data);
            return purchaseRequest;
        } catch (err) {
            throw err;
        }
    }

    async updatePurchaseRequestDetail(id, data) {
        try {
            const purchaseRequestDetail =
                await PurchaseRequestRepository.updatePurchaseRequestDetail(
                    id,
                    data,
                );
            return purchaseRequestDetail;
        } catch (err) {
            throw err;
        }
    }

    async updatePurchaseRequestDetailMultipleWhere(where, data) {
        try {
            const purchaseRequestDetail =
                await PurchaseRequestRepository.updatePurchaseRequestDetailMultipleWhere(
                    where,
                    data,
                );
            return purchaseRequestDetail;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new PurchaseRequestService();
