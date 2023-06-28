import { inventoryApi } from '../';

export const getAllPurchaseOrders = async () =>
  inventoryApi.get('/in_purchase_order');

export const getPurchaseOrderById = async (search: any) =>
  inventoryApi.post('/in_purchase_order/search', search);

export const createPurchaseOrder = async (data: any) =>
  inventoryApi.post('/in_purchase_order', data);

export const checkBudget = async () =>
  inventoryApi.get('/in_purchase_order/checkbudget');

export const createDebt = async (data: any) =>
  inventoryApi.put('/in_purchase_order/create_debt', data);
