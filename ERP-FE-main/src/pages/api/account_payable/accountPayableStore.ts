import dpInvoiceSlice from './purchase_down_payment_invoice/purchaseDownPaymentInvoiceSlice';
import invoiceSlice from './puchase_invoice/purchaseInvoiceSlice';

export const allAccountPayableStore = {
  dpInvoices: dpInvoiceSlice,
  invoices: invoiceSlice,
};
