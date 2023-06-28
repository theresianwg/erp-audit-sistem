import { accountPayableApi } from '..';

export const getAllInvoices = async () =>
  accountPayableApi.get('/ap_purchase_invoices');

export const newInvoice = async (data: any) =>
  accountPayableApi.post('/ap_purchase_invoices', data);

export const updateInvoice = async (data: any) =>
  accountPayableApi.put('/ap_purchase_invoices/:invoiceid', data);

export const deleteInvoice = async (id: any) =>
  accountPayableApi.delete('/ap_purchase_invoices/:invoiceid', id);
