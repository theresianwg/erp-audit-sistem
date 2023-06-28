import { inventoryApi } from '../';

export const getAllItems = async () => inventoryApi.get('/in_item');
export const getAllEndProducts = async () =>
  inventoryApi.get('/in_item/endproduct');
export const newItem = async (data: any) => inventoryApi.post('/in_item', data);
export const getItemById = async (search: any) =>
  inventoryApi.post('/in_item/search', search);
