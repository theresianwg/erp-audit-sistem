import { manufacturingApi } from '../';

export const getAllProductionOrder = async () =>
manufacturingApi.get('/production_order');