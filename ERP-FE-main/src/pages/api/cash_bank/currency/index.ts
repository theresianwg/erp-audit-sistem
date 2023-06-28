import { cashBankApi } from '..'; // sesuaikan dengan path API Cash Bank

export const getAllCurrencies = async () => cashBankApi.get('/cb_currencies');

export const addCurrenciesFromJson = async (data: any) =>
  cashBankApi.post('/cb_currencies/import-json', data);

export const updateCurrenciesFromJson = async (data: any) =>
  cashBankApi.put('/cb_currencies/update-json', data);

export const searchCurrencies = async (query: any) =>
  cashBankApi.get('/cb_currencies/search', { params: { q: query } });
