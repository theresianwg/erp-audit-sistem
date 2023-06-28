import { accountPayableApi } from '..';

export const getAllDpInvoices = async () =>
  accountPayableApi.get('/ap_purchase_down_payment_invoices');

export const newDpInvoice = async (data: any) =>
  accountPayableApi.post('/ap_purchase_down_payment_invoices', data);

export const updateDpInvoice = async (data: any) =>
  accountPayableApi.put('/ap_purchase_down_payment_invoices/:invoiceid', data);

export const deleteDpInvoice = async (id: any) =>
  accountPayableApi.delete('/ap_purchase_down_payment_invoices/:invoiceid', id);
