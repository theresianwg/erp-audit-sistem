import { inventoryApi } from '../';

export const getAllReceiveItems = async () =>
  inventoryApi.get('/in_receive_item');

export const getReceiveItemById = async (search: any) =>
  inventoryApi.post('/in_receive_item/search', search);

export const createReceiveItem = async (data: any) =>
  inventoryApi.post('/in_receive_item', data);
