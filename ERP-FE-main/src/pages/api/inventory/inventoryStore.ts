import itemSlice from './item/itemSlice';
import salesOrdersSlice from './salesOrder/salesOrdersSlice';
import purchaseRequestSlice from './purchaseRequest/purchaseRequestSlice';
import purchaseOrderSlice from './purchaseOrder/purchaseOrderSlice';
import supplierSlice from './supplier/supplierSlice';
import customerSlice from './customer/customerSlice';
import receiveItemSlice from './receiveItem/receiveItemSlice';
import bomSlice from './bom/bomSlice';

export const allInventoryStore = {
  items: itemSlice,
  salesOrders: salesOrdersSlice,
  purchaseRequest: purchaseRequestSlice,
  purchaseOrder: purchaseOrderSlice,
  supplier: supplierSlice,
  customer: customerSlice,
  receiveItem: receiveItemSlice,
  bom: bomSlice,
};
