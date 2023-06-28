import { inventoryApi } from '../';

export const getAllPurchaseRequests = async () =>
  inventoryApi.get('/in_purchase_request');

export const getPurchaseRequestById = async (search: any) =>
  inventoryApi.post('/in_purchase_request/search', search);

export const createPurchaseRequest = async (data: any) =>
  inventoryApi.post('/in_purchase_request', data);
