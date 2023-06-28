const SalesOrderRepository = require('../repositories/salesOrderRepository');
const ItemService = require('./itemService');
const {
    generateSalesOrderId,
    generateSalesOrderDetailId,
} = require('../utils/generateId');
const {
    calPrice,
    calTax,
    calTotalPriceTax,
    calDP,
} = require('../utils/calculate');
const { updateAfterSales } = require('../utils/manageStock');

//general ledger - inventory configuration
const {
    calculateSOandBudget,
} = require('../../../general_ledger/app/utils/gl_manage_budget_utils');

class SalesOrderService {
    async getAllSalesOrder() {
        try {
            return await SalesOrderRepository.getAllSalesOrder();
        } catch (err) {
            throw err;
        }
    }

    async getSalesOrderByID(id) {
        try {
            return await SalesOrderRepository.getSalesOrderByID(id);
        } catch (err) {
            throw err;
        }
    }

    async createSalesOrder(salesOrderData) {
        try {
            //generate sales id
            salesOrderData.id = generateSalesOrderId();

            //create sales order
            const salesOrder = await SalesOrderRepository.createSalesOrder(
                salesOrderData,
            );

            const dataPriceTaxParentDP = {
                total_price: 0,
                total_tax: 0,
                total_price_tax: 0,
                payment_type: salesOrderData.payment.type,
                dp_percentage: 0,
                dp_amount: 0,
            };

            // create sales order detail
            for (let i = 0; i < salesOrderData.products.length; i++) {
                let salesOrderDetail = salesOrderData.products[i];
                // generate sales order detail id
                salesOrderDetail.id = generateSalesOrderDetailId(
                    salesOrderData.id,
                );
                const item = await ItemService.getById(
                    salesOrderDetail.id_item,
                );

                // calculate price order cost
                salesOrderDetail.price = calPrice(
                    item.sale_price,
                    salesOrderDetail.quantity,
                );
                // sum price order cost
                dataPriceTaxParentDP.total_price += salesOrderDetail.price;

                // calculate tax order cost
                // change id_tax to tax rate if tax available in db
                salesOrderDetail.tax = calTax(
                    salesOrderDetail.price,
                    item.id_tax,
                );
                // sum tax order cost
                dataPriceTaxParentDP.total_tax += salesOrderDetail.tax;

                // calculate total order cost
                salesOrderDetail.total = calTotalPriceTax(
                    salesOrderDetail.price,
                    salesOrderDetail.tax,
                );
                // sum total order cost
                dataPriceTaxParentDP.total_price_tax += salesOrderDetail.total;

                salesOrderDetail.id_sales_order = salesOrderData.id;

                // create sales order detail
                await SalesOrderRepository.createSalesOrderDetail(
                    salesOrderDetail,
                );

                // calculate and update BudgetControl General Ledger from Sales Order
                await calculateSOandBudget(
                    salesOrderData.CreatedAt,
                    dataPriceTaxParentDP.total_price_tax,
                    salesOrderDetail.id_item,
                );

                // update stock
                await updateAfterSales(
                    salesOrderData.id,
                    salesOrderDetail.id_item,
                    salesOrderDetail.quantity,
                );
            }
            // calculate dp amount if dp_percent
            if (salesOrderData.payment.type == 'dp_percent') {
                dataPriceTaxParentDP.dp_amount = calDP(
                    dataPriceTaxParentDP.total_price_tax,
                    salesOrderData.payment.dp_percent,
                );
                dataPriceTaxParentDP.dp_percentage =
                    salesOrderData.payment.dp_percent;
                dataPriceTaxParentDP;
            }
            // else if dp_money
            else if (salesOrderData.payment.type == 'dp_money') {
                dataPriceTaxParentDP.dp_amount =
                    salesOrderData.payment.dp_money;
                dataPriceTaxParentDP.dp_percentage = 0;
            }

            console.log(dataPriceTaxParentDP);

            //update total price, tax, total price tax, and dp
            await SalesOrderRepository.updateSalesOrder(
                salesOrderData.id,
                dataPriceTaxParentDP,
            );
            return salesOrder;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new SalesOrderService();
