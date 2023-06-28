import { generalLedgerApi } from '../';

export const getAllAccountTypes = async () =>
  generalLedgerApi.get('/accounttype');
export const newAccountType = async (data: any) =>
  generalLedgerApi.post('/accounttype', data);
export const updateAccountType = async (data: any) =>
  generalLedgerApi.put('/accounttype/:accounttypeid', data);
export const deleteAccountType = async (id: any) =>
  generalLedgerApi.delete('/coa/:coaid', id);
