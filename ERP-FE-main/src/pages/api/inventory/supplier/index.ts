import { inventoryApi } from '../';

export const getAllSuppliers = async () => inventoryApi.get('/in_supplier');

export const getSupplierById = async (search: any) =>
  inventoryApi.post('/in_supplier/search', search);
