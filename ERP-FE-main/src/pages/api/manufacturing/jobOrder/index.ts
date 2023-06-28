import { manufacturingApi } from '../';

export const getAllSalesOrders = async () =>
  manufacturingApi.get('/job_order');
export const getSalesOrderById = async (search: any) =>
  manufacturingApi.post('/job_order/search', search);

// export const createSalesOrder = async (data: any) =>
//   manufacturingApi.post('/in_sales_order', data);
