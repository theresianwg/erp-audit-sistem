import { manufacturingApi } from '../';

export const getAllProductionRequest = async () =>
manufacturingApi.get('/production_request');