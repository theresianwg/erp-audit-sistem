import { inventoryApi } from '../';

export const getAllCustomers = async () => inventoryApi.get('/in_customer');

export const getCustomerById = async (search: any) =>
  inventoryApi.post('/in_customer/search', search);
