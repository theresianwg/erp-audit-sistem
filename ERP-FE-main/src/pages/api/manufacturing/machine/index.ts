import { manufacturingApi } from '../';

export const getAllMachine = async () =>
manufacturingApi.get('/machine');