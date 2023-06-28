import { inventoryApi } from '../';

export const getBomById = async (search: any) =>
  inventoryApi.post('/in_bom/search', search);
