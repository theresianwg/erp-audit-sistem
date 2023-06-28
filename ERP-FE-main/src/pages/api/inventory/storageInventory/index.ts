import { inventoryApi } from '../';

async function getStorageInventoryByItemId(search: any) {
  try {
    const response = await inventoryApi.get('/in_inventory', search);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default { getStorageInventoryByItemId };
