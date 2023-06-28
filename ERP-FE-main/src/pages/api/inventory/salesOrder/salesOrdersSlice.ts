import * as salesOrderService from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllSalesOrders = createAsyncThunk(
  'salesOrders/fetchAllSalesOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await salesOrderService.getAllSalesOrders();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchSalesOrders = createAsyncThunk(
  'salesOrders/fetchSalesOrders',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await salesOrderService.getSalesOrderById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const createSalesOrder = createAsyncThunk(
  'salesOrders/createSalesOrder',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await salesOrderService.createSalesOrder(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export interface SalesOrdersState {
  salesOrder: any;
  salesOrders: Array<any>;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: SalesOrdersState = {
  salesOrder: null,
  salesOrders: [],
  loading: false,
  status: null,
  error: null,
};

const salesOrderSlice = createSlice({
  name: 'salesOrders',
  initialState,
  reducers: {
    clearState: (state: SalesOrdersState, action) => {
      state.salesOrder = null;
      state.salesOrders = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllSalesOrders.pending, (state, action) => {
      // state.salesOrder= null;
      // state.salesOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllSalesOrders.fulfilled, (state, action) => {
      // state.salesOrder = null;
      state.salesOrders = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllSalesOrders.rejected, (state, action) => {
      state.salesOrder = null;
      state.salesOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(fetchSalesOrders.pending, (state, action) => {
      // state.salesOrder= null;
      // state.salesOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchSalesOrders.fulfilled, (state, action) => {
      state.salesOrder = action.payload.data;
      // state.salesOrders = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchSalesOrders.rejected, (state, action) => {
      state.salesOrder = null;
      state.salesOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(createSalesOrder.pending, (state, action) => {
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createSalesOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(createSalesOrder.rejected, (state, action) => {
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export default salesOrderSlice.reducer;
