import * as purchaseOrder from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllPurchaseOrder = createAsyncThunk(
  'purchaseOrder/fetchAllPurchaseOrder',
  async (_, { rejectWithValue }) => {
    try {
      const response = await purchaseOrder.getAllPurchaseOrders();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const fetchPurchaseOrder = createAsyncThunk(
  'purchaseOrder/fetchPurchaseOrder',
  async ({ search }: any, { rejectWithValue }) => {
    try {
      const response = await purchaseOrder.getPurchaseOrderById(search);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const createPurchaseOrder = createAsyncThunk(
  'purchaseOrder/createPurchaseOrder',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await purchaseOrder.createPurchaseOrder(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
);

export const checkBudget = createAsyncThunk(
  'purchaseOrder/checkBudget',
  async (_, { rejectWithValue }) => {
    try {
      const response = await purchaseOrder.checkBudget();
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
)

export const createDebt = createAsyncThunk(
  'purchaseOrder/createDebt',
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await purchaseOrder.createDebt(data);
      return response;
    } catch (error: any) {
      throw rejectWithValue(error);
    }
  },
)

export interface PurchaseOrderState {
  purchaseOrder: any;
  purchaseOrders: Array<any>;
  checkBudget: any;
  loading: boolean;
  status: string | null;
  error: any;
}

const initialState: PurchaseOrderState = {
  purchaseOrder: null,
  purchaseOrders: [],
  checkBudget: null,
  loading: false,
  status: null,
  error: null,
};

const purchaseRequestSlice = createSlice({
  name: 'purchaseRequest',
  initialState,
  reducers: {
    clearState: (state: PurchaseOrderState, action) => {
      state.purchaseOrder = null;
      state.purchaseOrders = [];
      state.loading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllPurchaseOrder.pending, (state, action) => {
      // state.purchaseOrder= null;
      // state.purchaseOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchAllPurchaseOrder.fulfilled, (state, action) => {
      // state.purchaseOrder = null;
      state.purchaseOrders = action.payload.data;
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchAllPurchaseOrder.rejected, (state, action) => {
      state.purchaseOrder = null;
      state.purchaseOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(fetchPurchaseOrder.pending, (state, action) => {
      // state.purchaseOrder= null;
      // state.purchaseOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(fetchPurchaseOrder.fulfilled, (state, action) => {
      state.purchaseOrder = action.payload.data;
      // state.purchaseOrders = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(fetchPurchaseOrder.rejected, (state, action) => {
      state.purchaseOrder = null;
      state.purchaseOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(createPurchaseOrder.pending, (state, action) => {
      // state.purchaseOrder= null;
      // state.purchaseOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createPurchaseOrder.fulfilled, (state, action) => {
      state.checkBudget = action.payload.data;
      // state.purchaseOrders = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(createPurchaseOrder.rejected, (state, action) => {
      state.purchaseOrder = null;
      state.purchaseOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(checkBudget.pending, (state, action) => {
      // state.purchaseOrder = null;
      // state.purchaseOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(checkBudget.fulfilled, (state, action) => {
      state.checkBudget = action.payload.data;
      // state.purchaseOrders = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(checkBudget.rejected, (state, action) => {
      state.checkBudget = null;
      state.purchaseOrder = null;
      state.purchaseOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(createDebt.pending, (state, action) => {
      // state.purchaseOrder = null;
      // state.purchaseOrders = [];
      state.loading = true;
      state.status = 'pending';
      state.error = null;
    });
    builder.addCase(createDebt.fulfilled, (state, action) => {
      // state.checkBudget = action.payload.data;
      // state.purchaseOrders = [];
      state.loading = false;
      state.status = 'success';
      state.error = null;
    });
    builder.addCase(createDebt.rejected, (state, action) => {
      state.checkBudget = null;
      state.purchaseOrder = null;
      state.purchaseOrders = [];
      state.loading = false;
      state.status = 'failed';
      state.error = action.error;
    });
  },
});

export default purchaseRequestSlice.reducer;
