import { inventoryApi } from '../';

export const getAllSalesOrders = async () =>
  inventoryApi.get('/in_sales_order');
export const getSalesOrderById = async (search: any) =>
  inventoryApi.post('/in_sales_order/search', search);
export const createSalesOrder = async (data: any) =>
  inventoryApi.post('/in_sales_order', data);
