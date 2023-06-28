
import productionRequestSlice from './productionRequest/productionRequestSlice';
import productionOrderSlice from './productionOrder/productionOrderSlice';
import jobOrderSlice from './jobOrder/jobOrderSlice';
import machineSlice from './machine/machineSlice';

export const allManufacturingStore = {
    productionRequests: productionRequestSlice,
    productionOrders: productionOrderSlice,
    jobOrders: jobOrderSlice,
    machines: machineSlice,

};
